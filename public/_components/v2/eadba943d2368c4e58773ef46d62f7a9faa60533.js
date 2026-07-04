const dy = () => Promise.resolve().then(() => ly), Zl = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: ie, jsx: s, jsxs: d } = Zl;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Po(t) {
  const e = t?.props?._fgT, r = typeof e == "function" || typeof e == "string" || typeof e == "object" && e !== null && "$$typeof" in e;
  return globalThis.__GLOBALS__.React.isValidElement(t) && r;
}
function wt(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function Do(t) {
  const { _fgT: e, _fgS: r, _fgB: n, _fgD: i, ...o } = t.props;
  return globalThis.__GLOBALS__.React.createElement(e, {
    ...o,
    key: t.key
  }, o.children);
}
function Wt(t) {
  return Po(t) ? Do(t) : wt(t) ? t.props.children : t;
}
const vt = globalThis.__GLOBALS__.React.Children, Jl = {
  map(t, e, r) {
    return vt.map(t, (n, i) => {
      const o = Wt(n);
      return wt(n) ? null : e.call(r, o, i);
    });
  },
  forEach(t, e, r) {
    vt.forEach(t, (n, i) => {
      if (wt(n))
        return;
      const o = Wt(n);
      e.call(r, o, i);
    });
  },
  count(t) {
    let e = 0;
    return vt.forEach(t, (r) => {
      wt(r) || e++;
    }), e;
  },
  toArray(t) {
    const e = [];
    return vt.forEach(t, (r) => {
      wt(r) || e.push(Wt(r));
    }), e;
  },
  only(t) {
    const e = vt.only(t);
    return Wt(e);
  }
}, Dr = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Ql(t) {
  if (t == null || typeof t != "object") return t;
  const e = Object.keys(t);
  let r = !1;
  for (let i = 0; i < Dr.length; i++)
    if (Dr[i] in t) {
      r = !0;
      break;
    }
  if (!r) return t;
  const n = {};
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    Dr.indexOf(o) === -1 && (n[o] = t[o]);
  }
  return n;
}
const Ii = globalThis.__GLOBALS__.React.cloneElement, rn = (t, ...e) => {
  if (Po(t)) {
    const r = Do(t), n = e[0];
    return n != null && typeof n == "object" && (e = [
      Ql(n),
      ...e.slice(1)
    ]), Ii(r, ...e);
  }
  return Ii(t, ...e);
};
({
  ...globalThis.__GLOBALS__.React
});
const { Component: Fn, createContext: _e, createElement: Pe, createFactory: uy, createRef: kr, forwardRef: _n, Fragment: ko, isValidElement: Ao, lazy: hy, memo: ec, Profiler: py, PureComponent: my, startTransition: fy, StrictMode: gy, Suspense: yy, use: vy, useCallback: lr, useContext: re, useDebugValue: xy, useDeferredValue: by, useEffect: U, useId: Ln, useImperativeHandle: wy, useInsertionEffect: Eo, useLayoutEffect: Mo, useMemo: Q, useReducer: Ny, useRef: Ne, useState: E, useSyncExternalStore: Cy, useTransition: Sy, version: Ty, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Py } = globalThis.__GLOBALS__.React, Bn = _e({});
function $n(t) {
  const e = Ne(null);
  return e.current === null && (e.current = t()), e.current;
}
const Vn = typeof window < "u", Ro = Vn ? Mo : U, cr = /* @__PURE__ */ _e(null);
function jn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Hn(t, e) {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
const De = (t, e, r) => r > e ? e : r < t ? t : r;
let zn = () => {
};
const ke = {}, Io = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Oo(t) {
  return typeof t == "object" && t !== null;
}
const Fo = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const xe = /* @__NO_SIDE_EFFECTS__ */ (t) => t, tc = (t, e) => (r) => e(t(r)), Bt = (...t) => t.reduce(tc), Mt = /* @__NO_SIDE_EFFECTS__ */ (t, e, r) => {
  const n = e - t;
  return n === 0 ? 1 : (r - t) / n;
};
class Un {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return jn(this.subscriptions, e), () => Hn(this.subscriptions, e);
  }
  notify(e, r, n) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, r, n);
      else
        for (let o = 0; o < i; o++) {
          const a = this.subscriptions[o];
          a && a(e, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ce = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ve = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function _o(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Lo = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t, rc = 1e-7, nc = 12;
function ic(t, e, r, n, i) {
  let o, a, l = 0;
  do
    a = e + (r - e) / 2, o = Lo(a, n, i) - t, o > 0 ? r = a : e = a;
  while (Math.abs(o) > rc && ++l < nc);
  return a;
}
function $t(t, e, r, n) {
  if (t === e && r === n)
    return xe;
  const i = (o) => ic(o, 0, 1, t, r);
  return (o) => o === 0 || o === 1 ? o : Lo(i(o), e, n);
}
const Bo = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, $o = (t) => (e) => 1 - t(1 - e), Vo = /* @__PURE__ */ $t(0.33, 1.53, 0.69, 0.99), Gn = /* @__PURE__ */ $o(Vo), jo = /* @__PURE__ */ Bo(Gn), Ho = (t) => (t *= 2) < 1 ? 0.5 * Gn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), qn = (t) => 1 - Math.sin(Math.acos(t)), zo = $o(qn), Wo = Bo(qn), sc = /* @__PURE__ */ $t(0.42, 0, 1, 1), oc = /* @__PURE__ */ $t(0, 0, 0.58, 1), Uo = /* @__PURE__ */ $t(0.42, 0, 0.58, 1), ac = (t) => Array.isArray(t) && typeof t[0] != "number", Go = (t) => Array.isArray(t) && typeof t[0] == "number", lc = {
  linear: xe,
  easeIn: sc,
  easeInOut: Uo,
  easeOut: oc,
  circIn: qn,
  circInOut: Wo,
  circOut: zo,
  backIn: Gn,
  backInOut: jo,
  backOut: Vo,
  anticipate: Ho
}, cc = (t) => typeof t == "string", Oi = (t) => {
  if (Go(t)) {
    zn(t.length === 4);
    const [e, r, n, i] = t;
    return $t(e, r, n, i);
  } else if (cc(t))
    return lc[t];
  return t;
}, Ut = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function dc(t, e) {
  let r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function c(h) {
    a.has(h) && (u.schedule(h), t()), h(l);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, p = !1, m = !1) => {
      const v = m && i ? r : n;
      return p && a.add(h), v.has(h) || v.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      n.delete(h), a.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (l = h, i) {
        o = !0;
        return;
      }
      i = !0, [r, n] = [n, r], r.forEach(c), r.clear(), i = !1, o && (o = !1, u.process(h));
    }
  };
  return u;
}
const uc = 40;
function qo(t, e) {
  let r = !1, n = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => r = !0, a = Ut.reduce((T, P) => (T[P] = dc(o), T), {}), { setup: l, read: c, resolveKeyframes: u, preUpdate: h, update: p, preRender: m, render: f, postRender: v } = a, g = () => {
    const T = ke.useManualTiming ? i.timestamp : performance.now();
    r = !1, ke.useManualTiming || (i.delta = n ? 1e3 / 60 : Math.max(Math.min(T - i.timestamp, uc), 1)), i.timestamp = T, i.isProcessing = !0, l.process(i), c.process(i), u.process(i), h.process(i), p.process(i), m.process(i), f.process(i), v.process(i), i.isProcessing = !1, r && e && (n = !1, t(g));
  }, b = () => {
    r = !0, n = !0, i.isProcessing || t(g);
  };
  return { schedule: Ut.reduce((T, P) => {
    const N = a[P];
    return T[P] = (S, C = !1, R = !1) => (r || b(), N.schedule(S, C, R)), T;
  }, {}), cancel: (T) => {
    for (let P = 0; P < Ut.length; P++)
      a[Ut[P]].cancel(T);
  }, state: i, steps: a };
}
const { schedule: q, cancel: Ae, state: oe, steps: Ar } = /* @__PURE__ */ qo(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xe, !0);
let Zt;
function hc() {
  Zt = void 0;
}
const he = {
  now: () => (Zt === void 0 && he.set(oe.isProcessing || ke.useManualTiming ? oe.timestamp : performance.now()), Zt),
  set: (t) => {
    Zt = t, queueMicrotask(hc);
  }
}, Ko = (t) => (e) => typeof e == "string" && e.startsWith(t), Kn = /* @__PURE__ */ Ko("--"), pc = /* @__PURE__ */ Ko("var(--"), Yn = (t) => pc(t) ? mc.test(t.split("/*")[0].trim()) : !1, mc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, dt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Rt = {
  ...dt,
  transform: (t) => De(0, 1, t)
}, Gt = {
  ...dt,
  default: 1
}, St = (t) => Math.round(t * 1e5) / 1e5, Xn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fc(t) {
  return t == null;
}
const gc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Zn = (t, e) => (r) => !!(typeof r == "string" && gc.test(r) && r.startsWith(t) || e && !fc(r) && Object.prototype.hasOwnProperty.call(r, e)), Yo = (t, e, r) => (n) => {
  if (typeof n != "string")
    return n;
  const [i, o, a, l] = n.match(Xn);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [r]: parseFloat(a),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, yc = (t) => De(0, 255, t), Er = {
  ...dt,
  transform: (t) => Math.round(yc(t))
}, He = {
  test: /* @__PURE__ */ Zn("rgb", "red"),
  parse: /* @__PURE__ */ Yo("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) => "rgba(" + Er.transform(t) + ", " + Er.transform(e) + ", " + Er.transform(r) + ", " + St(Rt.transform(n)) + ")"
};
function vc(t) {
  let e = "", r = "", n = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
    red: parseInt(e, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const nn = {
  test: /* @__PURE__ */ Zn("#"),
  parse: vc,
  transform: He.transform
}, Vt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Ie = /* @__PURE__ */ Vt("deg"), Se = /* @__PURE__ */ Vt("%"), L = /* @__PURE__ */ Vt("px"), xc = /* @__PURE__ */ Vt("vh"), bc = /* @__PURE__ */ Vt("vw"), Fi = {
  ...Se,
  parse: (t) => Se.parse(t) / 100,
  transform: (t) => Se.transform(t * 100)
}, Qe = {
  test: /* @__PURE__ */ Zn("hsl", "hue"),
  parse: /* @__PURE__ */ Yo("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(t) + ", " + Se.transform(St(e)) + ", " + Se.transform(St(r)) + ", " + St(Rt.transform(n)) + ")"
}, J = {
  test: (t) => He.test(t) || nn.test(t) || Qe.test(t),
  parse: (t) => He.test(t) ? He.parse(t) : Qe.test(t) ? Qe.parse(t) : nn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? He.transform(t) : Qe.transform(t),
  getAnimatableNone: (t) => {
    const e = J.parse(t);
    return e.alpha = 0, J.transform(e);
  }
}, wc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Nc(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Xn)?.length || 0) + (t.match(wc)?.length || 0) > 0;
}
const Xo = "number", Zo = "color", Cc = "var", Sc = "var(", _i = "${}", Tc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function It(t) {
  const e = t.toString(), r = [], n = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const l = e.replace(Tc, (c) => (J.test(c) ? (n.color.push(o), i.push(Zo), r.push(J.parse(c))) : c.startsWith(Sc) ? (n.var.push(o), i.push(Cc), r.push(c)) : (n.number.push(o), i.push(Xo), r.push(parseFloat(c))), ++o, _i)).split(_i);
  return { values: r, split: l, indexes: n, types: i };
}
function Jo(t) {
  return It(t).values;
}
function Qo(t) {
  const { split: e, types: r } = It(t), n = e.length;
  return (i) => {
    let o = "";
    for (let a = 0; a < n; a++)
      if (o += e[a], i[a] !== void 0) {
        const l = r[a];
        l === Xo ? o += St(i[a]) : l === Zo ? o += J.transform(i[a]) : o += i[a];
      }
    return o;
  };
}
const Pc = (t) => typeof t == "number" ? 0 : J.test(t) ? J.getAnimatableNone(t) : t;
function Dc(t) {
  const e = Jo(t);
  return Qo(t)(e.map(Pc));
}
const Fe = {
  test: Nc,
  parse: Jo,
  createTransformer: Qo,
  getAnimatableNone: Dc
};
function Mr(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function kc({ hue: t, saturation: e, lightness: r, alpha: n }) {
  t /= 360, e /= 100, r /= 100;
  let i = 0, o = 0, a = 0;
  if (!e)
    i = o = a = r;
  else {
    const l = r < 0.5 ? r * (1 + e) : r + e - r * e, c = 2 * r - l;
    i = Mr(c, l, t + 1 / 3), o = Mr(c, l, t), a = Mr(c, l, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
function rr(t, e) {
  return (r) => r > 0 ? e : t;
}
const K = (t, e, r) => t + (e - t) * r, Rr = (t, e, r) => {
  const n = t * t, i = r * (e * e - n) + n;
  return i < 0 ? 0 : Math.sqrt(i);
}, Ac = [nn, He, Qe], Ec = (t) => Ac.find((e) => e.test(t));
function Li(t) {
  const e = Ec(t);
  if (!e)
    return !1;
  let r = e.parse(t);
  return e === Qe && (r = kc(r)), r;
}
const Bi = (t, e) => {
  const r = Li(t), n = Li(e);
  if (!r || !n)
    return rr(t, e);
  const i = { ...r };
  return (o) => (i.red = Rr(r.red, n.red, o), i.green = Rr(r.green, n.green, o), i.blue = Rr(r.blue, n.blue, o), i.alpha = K(r.alpha, n.alpha, o), He.transform(i));
}, sn = /* @__PURE__ */ new Set(["none", "hidden"]);
function Mc(t, e) {
  return sn.has(t) ? (r) => r <= 0 ? t : e : (r) => r >= 1 ? e : t;
}
function Rc(t, e) {
  return (r) => K(t, e, r);
}
function Jn(t) {
  return typeof t == "number" ? Rc : typeof t == "string" ? Yn(t) ? rr : J.test(t) ? Bi : Fc : Array.isArray(t) ? ea : typeof t == "object" ? J.test(t) ? Bi : Ic : rr;
}
function ea(t, e) {
  const r = [...t], n = r.length, i = t.map((o, a) => Jn(o)(o, e[a]));
  return (o) => {
    for (let a = 0; a < n; a++)
      r[a] = i[a](o);
    return r;
  };
}
function Ic(t, e) {
  const r = { ...t, ...e }, n = {};
  for (const i in r)
    t[i] !== void 0 && e[i] !== void 0 && (n[i] = Jn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in n)
      r[o] = n[o](i);
    return r;
  };
}
function Oc(t, e) {
  const r = [], n = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], a = t.indexes[o][n[o]], l = t.values[a] ?? 0;
    r[i] = l, n[o]++;
  }
  return r;
}
const Fc = (t, e) => {
  const r = Fe.createTransformer(e), n = It(t), i = It(e);
  return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? sn.has(t) && !i.values.length || sn.has(e) && !n.values.length ? Mc(t, e) : Bt(ea(Oc(n, i), i.values), r) : rr(t, e);
};
function ta(t, e, r) {
  return typeof t == "number" && typeof e == "number" && typeof r == "number" ? K(t, e, r) : Jn(t)(t, e);
}
const _c = (t) => {
  const e = ({ timestamp: r }) => t(r);
  return {
    start: (r = !0) => q.update(e, r),
    stop: () => Ae(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => oe.isProcessing ? oe.timestamp : he.now()
  };
}, ra = (t, e, r = 10) => {
  let n = "";
  const i = Math.max(Math.round(e / r), 2);
  for (let o = 0; o < i; o++)
    n += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
}, nr = 2e4;
function Qn(t) {
  let e = 0;
  const r = 50;
  let n = t.next(e);
  for (; !n.done && e < nr; )
    e += r, n = t.next(e);
  return e >= nr ? 1 / 0 : e;
}
function Lc(t, e = 100, r) {
  const n = r({ ...t, keyframes: [0, e] }), i = Math.min(Qn(n), nr);
  return {
    type: "keyframes",
    ease: (o) => n.next(i * o).value / e,
    duration: /* @__PURE__ */ ve(i)
  };
}
const Bc = 5;
function na(t, e, r) {
  const n = Math.max(e - Bc, 0);
  return _o(r - t(n), e - n);
}
const X = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Ir = 1e-3;
function $c({ duration: t = X.duration, bounce: e = X.bounce, velocity: r = X.velocity, mass: n = X.mass }) {
  let i, o, a = 1 - e;
  a = De(X.minDamping, X.maxDamping, a), t = De(X.minDuration, X.maxDuration, /* @__PURE__ */ ve(t)), a < 1 ? (i = (u) => {
    const h = u * a, p = h * t, m = h - r, f = on(u, a), v = Math.exp(-p);
    return Ir - m / f * v;
  }, o = (u) => {
    const p = u * a * t, m = p * r + r, f = Math.pow(a, 2) * Math.pow(u, 2) * t, v = Math.exp(-p), g = on(Math.pow(u, 2), a);
    return (-i(u) + Ir > 0 ? -1 : 1) * ((m - f) * v) / g;
  }) : (i = (u) => {
    const h = Math.exp(-u * t), p = (u - r) * t + 1;
    return -Ir + h * p;
  }, o = (u) => {
    const h = Math.exp(-u * t), p = (r - u) * (t * t);
    return h * p;
  });
  const l = 5 / t, c = jc(i, o, l);
  if (t = /* @__PURE__ */ Ce(t), isNaN(c))
    return {
      stiffness: X.stiffness,
      damping: X.damping,
      duration: t
    };
  {
    const u = Math.pow(c, 2) * n;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(n * u),
      duration: t
    };
  }
}
const Vc = 12;
function jc(t, e, r) {
  let n = r;
  for (let i = 1; i < Vc; i++)
    n = n - t(n) / e(n);
  return n;
}
function on(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Hc = ["duration", "bounce"], zc = ["stiffness", "damping", "mass"];
function $i(t, e) {
  return e.some((r) => t[r] !== void 0);
}
function Wc(t) {
  let e = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!$i(t, zc) && $i(t, Hc))
    if (t.visualDuration) {
      const r = t.visualDuration, n = 2 * Math.PI / (r * 1.2), i = n * n, o = 2 * De(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: X.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const r = $c(t);
      e = {
        ...e,
        ...r,
        mass: X.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function ir(t = X.visualDuration, e = X.bounce) {
  const r = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: n, restDelta: i } = r;
  const o = r.keyframes[0], a = r.keyframes[r.keyframes.length - 1], l = { done: !1, value: o }, { stiffness: c, damping: u, mass: h, duration: p, velocity: m, isResolvedFromDuration: f } = Wc({
    ...r,
    velocity: -/* @__PURE__ */ ve(r.velocity || 0)
  }), v = m || 0, g = u / (2 * Math.sqrt(c * h)), b = a - o, w = /* @__PURE__ */ ve(Math.sqrt(c / h)), x = Math.abs(b) < 5;
  n || (n = x ? X.restSpeed.granular : X.restSpeed.default), i || (i = x ? X.restDelta.granular : X.restDelta.default);
  let T;
  if (g < 1) {
    const N = on(w, g);
    T = (S) => {
      const C = Math.exp(-g * w * S);
      return a - C * ((v + g * w * b) / N * Math.sin(N * S) + b * Math.cos(N * S));
    };
  } else if (g === 1)
    T = (N) => a - Math.exp(-w * N) * (b + (v + w * b) * N);
  else {
    const N = w * Math.sqrt(g * g - 1);
    T = (S) => {
      const C = Math.exp(-g * w * S), R = Math.min(N * S, 300);
      return a - C * ((v + g * w * b) * Math.sinh(R) + N * b * Math.cosh(R)) / N;
    };
  }
  const P = {
    calculatedDuration: f && p || null,
    next: (N) => {
      const S = T(N);
      if (f)
        l.done = N >= p;
      else {
        let C = N === 0 ? v : 0;
        g < 1 && (C = N === 0 ? /* @__PURE__ */ Ce(v) : na(T, N, S));
        const R = Math.abs(C) <= n, M = Math.abs(a - S) <= i;
        l.done = R && M;
      }
      return l.value = l.done ? a : S, l;
    },
    toString: () => {
      const N = Math.min(Qn(P), nr), S = ra((C) => P.next(N * C).value, N, 30);
      return N + "ms " + S;
    },
    toTransition: () => {
    }
  };
  return P;
}
ir.applyToOptions = (t) => {
  const e = Lc(t, 100, ir);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ Ce(e.duration), t.type = "keyframes", t;
};
function an({ keyframes: t, velocity: e = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: a, min: l, max: c, restDelta: u = 0.5, restSpeed: h }) {
  const p = t[0], m = {
    done: !1,
    value: p
  }, f = (R) => l !== void 0 && R < l || c !== void 0 && R > c, v = (R) => l === void 0 ? c : c === void 0 || Math.abs(l - R) < Math.abs(c - R) ? l : c;
  let g = r * e;
  const b = p + g, w = a === void 0 ? b : a(b);
  w !== b && (g = w - p);
  const x = (R) => -g * Math.exp(-R / n), T = (R) => w + x(R), P = (R) => {
    const M = x(R), k = T(R);
    m.done = Math.abs(M) <= u, m.value = m.done ? w : k;
  };
  let N, S;
  const C = (R) => {
    f(m.value) && (N = R, S = ir({
      keyframes: [m.value, v(m.value)],
      velocity: na(T, R, m.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: h
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: (R) => {
      let M = !1;
      return !S && N === void 0 && (M = !0, P(R), C(R)), N !== void 0 && R >= N ? S.next(R - N) : (!M && P(R), m);
    }
  };
}
function Uc(t, e, r) {
  const n = [], i = r || ke.mix || ta, o = t.length - 1;
  for (let a = 0; a < o; a++) {
    let l = i(t[a], t[a + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[a] || xe : e;
      l = Bt(c, l);
    }
    n.push(l);
  }
  return n;
}
function Gc(t, e, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const o = t.length;
  if (zn(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const a = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const l = Uc(e, n, i), c = l.length, u = (h) => {
    if (a && h < t[0])
      return e[0];
    let p = 0;
    if (c > 1)
      for (; p < t.length - 2 && !(h < t[p + 1]); p++)
        ;
    const m = /* @__PURE__ */ Mt(t[p], t[p + 1], h);
    return l[p](m);
  };
  return r ? (h) => u(De(t[0], t[o - 1], h)) : u;
}
function qc(t, e) {
  const r = t[t.length - 1];
  for (let n = 1; n <= e; n++) {
    const i = /* @__PURE__ */ Mt(0, e, n);
    t.push(K(r, 1, i));
  }
}
function Kc(t) {
  const e = [0];
  return qc(e, t.length - 1), e;
}
function Yc(t, e) {
  return t.map((r) => r * e);
}
function Xc(t, e) {
  return t.map(() => e || Uo).splice(0, t.length - 1);
}
function Tt({ duration: t = 300, keyframes: e, times: r, ease: n = "easeInOut" }) {
  const i = ac(n) ? n.map(Oi) : Oi(n), o = {
    done: !1,
    value: e[0]
  }, a = Yc(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === e.length ? r : Kc(e),
    t
  ), l = Gc(a, e, {
    ease: Array.isArray(i) ? i : Xc(e, i)
  });
  return {
    calculatedDuration: t,
    next: (c) => (o.value = l(c), o.done = c >= t, o)
  };
}
const Zc = (t) => t !== null;
function ei(t, { repeat: e, repeatType: r = "loop" }, n, i = 1) {
  const o = t.filter(Zc), l = i < 0 || e && r !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !l || n === void 0 ? o[l] : n;
}
const Jc = {
  decay: an,
  inertia: an,
  tween: Tt,
  keyframes: Tt,
  spring: ir
};
function ia(t) {
  typeof t.type == "string" && (t.type = Jc[t.type]);
}
class ti {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, r) {
    return this.finished.then(e, r);
  }
}
const Qc = (t) => t / 100;
class ri extends ti {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: r } = this.options;
      r && r.updatedAt !== he.now() && this.tick(he.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    ia(e);
    const { type: r = Tt, repeat: n = 0, repeatDelay: i = 0, repeatType: o, velocity: a = 0 } = e;
    let { keyframes: l } = e;
    const c = r || Tt;
    c !== Tt && typeof l[0] != "number" && (this.mixKeyframes = Bt(Qc, ta(l[0], l[1])), l = [0, 100]);
    const u = c({ ...e, keyframes: l });
    o === "mirror" && (this.mirroredGenerator = c({
      ...e,
      keyframes: [...l].reverse(),
      velocity: -a
    })), u.calculatedDuration === null && (u.calculatedDuration = Qn(u));
    const { calculatedDuration: h } = u;
    this.calculatedDuration = h, this.resolvedDuration = h + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = u;
  }
  updateTime(e) {
    const r = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(e, r = !1) {
    const { generator: n, totalDuration: i, mixKeyframes: o, mirroredGenerator: a, resolvedDuration: l, calculatedDuration: c } = this;
    if (this.startTime === null)
      return n.next(0);
    const { delay: u = 0, keyframes: h, repeat: p, repeatType: m, repeatDelay: f, type: v, onUpdate: g, finalKeyframe: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), r ? this.currentTime = e : this.updateTime(e);
    const w = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? w < 0 : w > i;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let T = this.currentTime, P = n;
    if (p) {
      const R = Math.min(this.currentTime, i) / l;
      let M = Math.floor(R), k = R % 1;
      !k && R >= 1 && (k = 1), k === 1 && M--, M = Math.min(M, p + 1), !!(M % 2) && (m === "reverse" ? (k = 1 - k, f && (k -= f / l)) : m === "mirror" && (P = a)), T = De(0, 1, k) * l;
    }
    const N = x ? { done: !1, value: h[0] } : P.next(T);
    o && (N.value = o(N.value));
    let { done: S } = N;
    !x && c !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return C && v !== an && (N.value = ei(h, this.options, b, this.speed)), g && g(N.value), C && this.finish(), N;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, r) {
    return this.finished.then(e, r);
  }
  get duration() {
    return /* @__PURE__ */ ve(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ve(e);
  }
  get time() {
    return /* @__PURE__ */ ve(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ Ce(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(he.now());
    const r = this.playbackSpeed !== e;
    this.playbackSpeed = e, r && (this.time = /* @__PURE__ */ ve(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = _c, startTime: r } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.();
    const n = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = r ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(he.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function ed(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const ze = (t) => t * 180 / Math.PI, ln = (t) => {
  const e = ze(Math.atan2(t[1], t[0]));
  return cn(e);
}, td = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: ln,
  rotateZ: ln,
  skewX: (t) => ze(Math.atan(t[1])),
  skewY: (t) => ze(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, cn = (t) => (t = t % 360, t < 0 && (t += 360), t), Vi = ln, ji = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Hi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), rd = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ji,
  scaleY: Hi,
  scale: (t) => (ji(t) + Hi(t)) / 2,
  rotateX: (t) => cn(ze(Math.atan2(t[6], t[5]))),
  rotateY: (t) => cn(ze(Math.atan2(-t[2], t[0]))),
  rotateZ: Vi,
  rotate: Vi,
  skewX: (t) => ze(Math.atan(t[4])),
  skewY: (t) => ze(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function dn(t) {
  return t.includes("scale") ? 1 : 0;
}
function un(t, e) {
  if (!t || t === "none")
    return dn(e);
  const r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, i;
  if (r)
    n = rd, i = r;
  else {
    const l = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    n = td, i = l;
  }
  if (!i)
    return dn(e);
  const o = n[e], a = i[1].split(",").map(id);
  return typeof o == "function" ? o(a) : a[o];
}
const nd = (t, e) => {
  const { transform: r = "none" } = getComputedStyle(t);
  return un(r, e);
};
function id(t) {
  return parseFloat(t.trim());
}
const ut = [
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
  "skewY"
], ht = new Set(ut), zi = (t) => t === dt || t === L, sd = /* @__PURE__ */ new Set(["x", "y", "z"]), od = ut.filter((t) => !sd.has(t));
function ad(t) {
  const e = [];
  return od.forEach((r) => {
    const n = t.getValue(r);
    n !== void 0 && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), e;
}
const We = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(r),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(r),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => un(e, "x"),
  y: (t, { transform: e }) => un(e, "y")
};
We.translateX = We.x;
We.translateY = We.y;
const Ue = /* @__PURE__ */ new Set();
let hn = !1, pn = !1, mn = !1;
function sa() {
  if (pn) {
    const t = Array.from(Ue).filter((n) => n.needsMeasurement), e = new Set(t.map((n) => n.element)), r = /* @__PURE__ */ new Map();
    e.forEach((n) => {
      const i = ad(n);
      i.length && (r.set(n, i), n.render());
    }), t.forEach((n) => n.measureInitialState()), e.forEach((n) => {
      n.render();
      const i = r.get(n);
      i && i.forEach(([o, a]) => {
        n.getValue(o)?.set(a);
      });
    }), t.forEach((n) => n.measureEndState()), t.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  pn = !1, hn = !1, Ue.forEach((t) => t.complete(mn)), Ue.clear();
}
function oa() {
  Ue.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (pn = !0);
  });
}
function ld() {
  mn = !0, oa(), sa(), mn = !1;
}
class ni {
  constructor(e, r, n, i, o, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = n, this.motionValue = i, this.element = o, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ue.add(this), hn || (hn = !0, q.read(oa), q.resolveKeyframes(sa))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: r, element: n, motionValue: i } = this;
    if (e[0] === null) {
      const o = i?.get(), a = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (n && r) {
        const l = n.readValue(r, a);
        l != null && (e[0] = l);
      }
      e[0] === void 0 && (e[0] = a), i && o === void 0 && i.set(e[0]);
    }
    ed(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Ue.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ue.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const cd = (t) => t.startsWith("--");
function dd(t, e, r) {
  cd(e) ? t.style.setProperty(e, r) : t.style[e] = r;
}
const ud = /* @__PURE__ */ Wn(() => window.ScrollTimeline !== void 0), hd = {};
function pd(t, e) {
  const r = /* @__PURE__ */ Wn(t);
  return () => hd[e] ?? r();
}
const aa = /* @__PURE__ */ pd(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Nt = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`, Wi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Nt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Nt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Nt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Nt([0.33, 1.53, 0.69, 0.99])
};
function la(t, e) {
  if (t)
    return typeof t == "function" ? aa() ? ra(t, e) : "ease-out" : Go(t) ? Nt(t) : Array.isArray(t) ? t.map((r) => la(r, e) || Wi.easeOut) : Wi[t];
}
function md(t, e, r, { delay: n = 0, duration: i = 300, repeat: o = 0, repeatType: a = "loop", ease: l = "easeOut", times: c } = {}, u = void 0) {
  const h = {
    [e]: r
  };
  c && (h.offset = c);
  const p = la(l, i);
  Array.isArray(p) && (h.easing = p);
  const m = {
    delay: n,
    duration: i,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: o + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return u && (m.pseudoElement = u), t.animate(h, m);
}
function ca(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function fd({ type: t, ...e }) {
  return ca(t) && aa() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class gd extends ti {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: r, name: n, keyframes: i, pseudoElement: o, allowFlatten: a = !1, finalKeyframe: l, onComplete: c } = e;
    this.isPseudoElement = !!o, this.allowFlatten = a, this.options = e, zn(typeof e.type != "string");
    const u = fd(e);
    this.animation = md(r, n, i, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const h = ei(i, this.options, l, this.speed);
        this.updateMotionValue ? this.updateMotionValue(h) : dd(r, n, h), this.animation.cancel();
      }
      c?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ ve(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ve(e);
  }
  get time() {
    return /* @__PURE__ */ ve(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ce(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && ud() ? (this.animation.timeline = e, xe) : r(this);
  }
}
const da = {
  anticipate: Ho,
  backInOut: jo,
  circInOut: Wo
};
function yd(t) {
  return t in da;
}
function vd(t) {
  typeof t.ease == "string" && yd(t.ease) && (t.ease = da[t.ease]);
}
const Ui = 10;
class xd extends gd {
  constructor(e) {
    vd(e), ia(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: r, onUpdate: n, onComplete: i, element: o, ...a } = this.options;
    if (!r)
      return;
    if (e !== void 0) {
      r.set(e);
      return;
    }
    const l = new ri({
      ...a,
      autoplay: !1
    }), c = /* @__PURE__ */ Ce(this.finishedTime ?? this.time);
    r.setWithVelocity(l.sample(c - Ui).value, l.sample(c).value, Ui), l.stop();
  }
}
const Gi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Fe.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function bd(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e)
      return !0;
}
function wd(t, e, r, n) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], a = Gi(i, e), l = Gi(o, e);
  return !a || !l ? !1 : bd(t) || (r === "spring" || ca(r)) && n;
}
function fn(t) {
  t.duration = 0, t.type = "keyframes";
}
const Nd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Cd = /* @__PURE__ */ Wn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Sd(t) {
  const { motionValue: e, name: r, repeatDelay: n, repeatType: i, damping: o, type: a } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: u } = e.owner.getProps();
  return Cd() && r && Nd.has(r) && (r !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !n && i !== "mirror" && o !== 0 && a !== "inertia";
}
const Td = 40;
class Pd extends ti {
  constructor({ autoplay: e = !0, delay: r = 0, type: n = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: a = "loop", keyframes: l, name: c, motionValue: u, element: h, ...p }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = he.now();
    const m = {
      autoplay: e,
      delay: r,
      type: n,
      repeat: i,
      repeatDelay: o,
      repeatType: a,
      name: c,
      motionValue: u,
      element: h,
      ...p
    }, f = h?.KeyframeResolver || ni;
    this.keyframeResolver = new f(l, (v, g, b) => this.onKeyframesResolved(v, g, m, !b), c, u, h), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, r, n, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: a, velocity: l, delay: c, isHandoff: u, onUpdate: h } = n;
    this.resolvedAt = he.now(), wd(e, o, a, l) || ((ke.instantAnimations || !c) && h?.(ei(e, n, r)), e[0] = e[e.length - 1], fn(n), n.repeat = 0);
    const m = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Td ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...n,
      keyframes: e
    }, f = !u && Sd(m) ? new xd({
      ...m,
      element: m.motionValue.owner.current
    }) : new ri(m);
    f.finished.then(() => this.notifyFinished()).catch(xe), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, r) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ld()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Dd = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function kd(t) {
  const e = Dd.exec(t);
  if (!e)
    return [,];
  const [, r, n, i] = e;
  return [`--${r ?? n}`, i];
}
function ua(t, e, r = 1) {
  const [n, i] = kd(t);
  if (!n)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(n);
  if (o) {
    const a = o.trim();
    return Io(a) ? parseFloat(a) : a;
  }
  return Yn(i) ? ua(i, e, r + 1) : i;
}
function ii(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const ha = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ut
]), Ad = {
  test: (t) => t === "auto",
  parse: (t) => t
}, pa = (t) => (e) => e.test(t), ma = [dt, L, Se, Ie, bc, xc, Ad], qi = (t) => ma.find(pa(t));
function Ed(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Fo(t) : !0;
}
const Md = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Rd(t) {
  const [e, r] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [n] = r.match(Xn) || [];
  if (!n)
    return t;
  const i = r.replace(n, "");
  let o = Md.has(e) ? 1 : 0;
  return n !== r && (o *= 100), e + "(" + o + i + ")";
}
const Id = /\b([a-z-]*)\(.*?\)/gu, gn = {
  ...Fe,
  getAnimatableNone: (t) => {
    const e = t.match(Id);
    return e ? e.map(Rd).join(" ") : t;
  }
}, Ki = {
  ...dt,
  transform: Math.round
}, Od = {
  rotate: Ie,
  rotateX: Ie,
  rotateY: Ie,
  rotateZ: Ie,
  scale: Gt,
  scaleX: Gt,
  scaleY: Gt,
  scaleZ: Gt,
  skew: Ie,
  skewX: Ie,
  skewY: Ie,
  distance: L,
  translateX: L,
  translateY: L,
  translateZ: L,
  x: L,
  y: L,
  z: L,
  perspective: L,
  transformPerspective: L,
  opacity: Rt,
  originX: Fi,
  originY: Fi,
  originZ: L
}, si = {
  // Border props
  borderWidth: L,
  borderTopWidth: L,
  borderRightWidth: L,
  borderBottomWidth: L,
  borderLeftWidth: L,
  borderRadius: L,
  radius: L,
  borderTopLeftRadius: L,
  borderTopRightRadius: L,
  borderBottomRightRadius: L,
  borderBottomLeftRadius: L,
  // Positioning props
  width: L,
  maxWidth: L,
  height: L,
  maxHeight: L,
  top: L,
  right: L,
  bottom: L,
  left: L,
  // Spacing props
  padding: L,
  paddingTop: L,
  paddingRight: L,
  paddingBottom: L,
  paddingLeft: L,
  margin: L,
  marginTop: L,
  marginRight: L,
  marginBottom: L,
  marginLeft: L,
  // Misc
  backgroundPositionX: L,
  backgroundPositionY: L,
  ...Od,
  zIndex: Ki,
  // SVG
  fillOpacity: Rt,
  strokeOpacity: Rt,
  numOctaves: Ki
}, Fd = {
  ...si,
  // Color props
  color: J,
  backgroundColor: J,
  outlineColor: J,
  fill: J,
  stroke: J,
  // Border props
  borderColor: J,
  borderTopColor: J,
  borderRightColor: J,
  borderBottomColor: J,
  borderLeftColor: J,
  filter: gn,
  WebkitFilter: gn
}, fa = (t) => Fd[t];
function ga(t, e) {
  let r = fa(t);
  return r !== gn && (r = Fe), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0;
}
const _d = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ld(t, e, r) {
  let n = 0, i;
  for (; n < t.length && !i; ) {
    const o = t[n];
    typeof o == "string" && !_d.has(o) && It(o).values.length && (i = t[n]), n++;
  }
  if (i && r)
    for (const o of e)
      t[o] = ga(r, i);
}
class Bd extends ni {
  constructor(e, r, n, i, o) {
    super(e, r, n, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: r, name: n } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let u = e[c];
      if (typeof u == "string" && (u = u.trim(), Yn(u))) {
        const h = ua(u, r.current);
        h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !ha.has(n) || e.length !== 2)
      return;
    const [i, o] = e, a = qi(i), l = qi(o);
    if (a !== l)
      if (zi(a) && zi(l))
        for (let c = 0; c < e.length; c++) {
          const u = e[c];
          typeof u == "string" && (e[c] = parseFloat(u));
        }
      else We[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: r } = this, n = [];
    for (let i = 0; i < e.length; i++)
      (e[i] === null || Ed(e[i])) && n.push(i);
    n.length && Ld(e, n, r);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: r, name: n } = this;
    if (!e || !e.current)
      return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = We[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
    const i = r[r.length - 1];
    i !== void 0 && e.getValue(n, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: r, unresolvedKeyframes: n } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = n.length - 1, a = n[o];
    n[o] = We[r](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([l, c]) => {
      e.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function $d(t, e, r) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let n = document;
    const i = r?.[t] ?? n.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const ya = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function va(t) {
  return Oo(t) && "offsetHeight" in t;
}
const Yi = 30, Vd = (t) => !isNaN(parseFloat(t));
class jd {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
      const i = he.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = he.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Vd(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, r) {
    this.events[e] || (this.events[e] = new Un());
    const n = this.events[e].add(r);
    return e === "change" ? () => {
      n(), q.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, r) {
    this.passiveEffect = e, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, r, n) {
    this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, r = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = he.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Yi)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Yi);
    return _o(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function at(t, e) {
  return new jd(t, e);
}
const { schedule: oi } = /* @__PURE__ */ qo(queueMicrotask, !1), be = {
  x: !1,
  y: !1
};
function xa() {
  return be.x || be.y;
}
function Hd(t) {
  return t === "x" || t === "y" ? be[t] ? null : (be[t] = !0, () => {
    be[t] = !1;
  }) : be.x || be.y ? null : (be.x = be.y = !0, () => {
    be.x = be.y = !1;
  });
}
function ba(t, e) {
  const r = $d(t), n = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: n.signal
  };
  return [r, i, () => n.abort()];
}
function Xi(t) {
  return !(t.pointerType === "touch" || xa());
}
function zd(t, e, r = {}) {
  const [n, i, o] = ba(t, r), a = (l) => {
    if (!Xi(l))
      return;
    const { target: c } = l, u = e(c, l);
    if (typeof u != "function" || !c)
      return;
    const h = (p) => {
      Xi(p) && (u(p), c.removeEventListener("pointerleave", h));
    };
    c.addEventListener("pointerleave", h, i);
  };
  return n.forEach((l) => {
    l.addEventListener("pointerenter", a, i);
  }), o;
}
const wa = (t, e) => e ? t === e ? !0 : wa(t, e.parentElement) : !1, ai = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Wd = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ud(t) {
  return Wd.has(t.tagName) || t.tabIndex !== -1;
}
const Jt = /* @__PURE__ */ new WeakSet();
function Zi(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Or(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Gd = (t, e) => {
  const r = t.currentTarget;
  if (!r)
    return;
  const n = Zi(() => {
    if (Jt.has(r))
      return;
    Or(r, "down");
    const i = Zi(() => {
      Or(r, "up");
    }), o = () => Or(r, "cancel");
    r.addEventListener("keyup", i, e), r.addEventListener("blur", o, e);
  });
  r.addEventListener("keydown", n, e), r.addEventListener("blur", () => r.removeEventListener("keydown", n), e);
};
function Ji(t) {
  return ai(t) && !xa();
}
function qd(t, e, r = {}) {
  const [n, i, o] = ba(t, r), a = (l) => {
    const c = l.currentTarget;
    if (!Ji(l))
      return;
    Jt.add(c);
    const u = e(c, l), h = (f, v) => {
      window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", m), Jt.has(c) && Jt.delete(c), Ji(f) && typeof u == "function" && u(f, { success: v });
    }, p = (f) => {
      h(f, c === window || c === document || r.useGlobalTarget || wa(c, f.target));
    }, m = (f) => {
      h(f, !1);
    };
    window.addEventListener("pointerup", p, i), window.addEventListener("pointercancel", m, i);
  };
  return n.forEach((l) => {
    (r.useGlobalTarget ? window : l).addEventListener("pointerdown", a, i), va(l) && (l.addEventListener("focus", (u) => Gd(u, i)), !Ud(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0));
  }), o;
}
function Na(t) {
  return Oo(t) && "ownerSVGElement" in t;
}
function Kd(t) {
  return Na(t) && t.tagName === "svg";
}
const le = (t) => !!(t && t.getVelocity), Yd = [...ma, J, Fe], Xd = (t) => Yd.find(pa(t)), dr = _e({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Qi(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Zd(...t) {
  return (e) => {
    let r = !1;
    const n = t.map((i) => {
      const o = Qi(i, e);
      return !r && typeof o == "function" && (r = !0), o;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const o = n[i];
          typeof o == "function" ? o() : Qi(t[i], null);
        }
      };
  };
}
function Jd(...t) {
  return lr(Zd(...t), t);
}
class Qd extends Fn {
  getSnapshotBeforeUpdate(e) {
    const r = this.props.childRef.current;
    if (r && e.isPresent && !this.props.isPresent) {
      const n = r.offsetParent, i = va(n) && n.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = r.offsetHeight || 0, o.width = r.offsetWidth || 0, o.top = r.offsetTop, o.left = r.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function eu({ children: t, isPresent: e, anchorX: r, root: n }) {
  const i = Ln(), o = Ne(null), a = Ne({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: l } = re(dr), c = Jd(o, t?.ref);
  return Eo(() => {
    const { width: u, height: h, top: p, left: m, right: f } = a.current;
    if (e || !o.current || !u || !h)
      return;
    const v = r === "left" ? `left: ${m}` : `right: ${f}`;
    o.current.dataset.motionPopId = i;
    const g = document.createElement("style");
    l && (g.nonce = l);
    const b = n ?? document.head;
    return b.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${h}px !important;
            ${v}px !important;
            top: ${p}px !important;
          }
        `), () => {
      b.contains(g) && b.removeChild(g);
    };
  }, [e]), s(Qd, { isPresent: e, childRef: o, sizeRef: a, children: rn(t, { ref: c }) });
}
const tu = ({ children: t, initial: e, isPresent: r, onExitComplete: n, custom: i, presenceAffectsLayout: o, mode: a, anchorX: l, root: c }) => {
  const u = $n(ru), h = Ln();
  let p = !0, m = Q(() => (p = !1, {
    id: h,
    initial: e,
    isPresent: r,
    custom: i,
    onExitComplete: (f) => {
      u.set(f, !0);
      for (const v of u.values())
        if (!v)
          return;
      n && n();
    },
    register: (f) => (u.set(f, !1), () => u.delete(f))
  }), [r, u, n]);
  return o && p && (m = { ...m }), Q(() => {
    u.forEach((f, v) => u.set(v, !1));
  }, [r]), U(() => {
    !r && !u.size && n && n();
  }, [r]), a === "popLayout" && (t = s(eu, { isPresent: r, anchorX: l, root: c, children: t })), s(cr.Provider, { value: m, children: t });
};
function ru() {
  return /* @__PURE__ */ new Map();
}
function Ca(t = !0) {
  const e = re(cr);
  if (e === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: n, register: i } = e, o = Ln();
  U(() => {
    if (t)
      return i(o);
  }, [t]);
  const a = lr(() => t && n && n(o), [o, n, t]);
  return !r && n ? [!1, a] : [!0];
}
const qt = (t) => t.key || "";
function es(t) {
  const e = [];
  return Jl.forEach(t, (r) => {
    Ao(r) && e.push(r);
  }), e;
}
const Pt = ({ children: t, custom: e, initial: r = !0, onExitComplete: n, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: a = !1, anchorX: l = "left", root: c }) => {
  const [u, h] = Ca(a), p = Q(() => es(t), [t]), m = a && !u ? [] : p.map(qt), f = Ne(!0), v = Ne(p), g = $n(() => /* @__PURE__ */ new Map()), [b, w] = E(p), [x, T] = E(p);
  Ro(() => {
    f.current = !1, v.current = p;
    for (let S = 0; S < x.length; S++) {
      const C = qt(x[S]);
      m.includes(C) ? g.delete(C) : g.get(C) !== !0 && g.set(C, !1);
    }
  }, [x, m.length, m.join("-")]);
  const P = [];
  if (p !== b) {
    let S = [...p];
    for (let C = 0; C < x.length; C++) {
      const R = x[C], M = qt(R);
      m.includes(M) || (S.splice(C, 0, R), P.push(R));
    }
    return o === "wait" && P.length && (S = P), T(es(S)), w(p), null;
  }
  const { forceRender: N } = re(Bn);
  return s(ie, { children: x.map((S) => {
    const C = qt(S), R = a && !u ? !1 : p === x || m.includes(C), M = () => {
      if (g.has(C))
        g.set(C, !0);
      else
        return;
      let k = !0;
      g.forEach((I) => {
        I || (k = !1);
      }), k && (N?.(), T(v.current), a && h?.(), n && n());
    };
    return s(tu, { isPresent: R, initial: !f.current || r ? void 0 : !1, custom: e, presenceAffectsLayout: i, mode: o, root: c, onExitComplete: R ? void 0 : M, anchorX: l, children: S }, C);
  }) });
}, Sa = _e({ strict: !1 }), ts = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, lt = {};
for (const t in ts)
  lt[t] = {
    isEnabled: (e) => ts[t].some((r) => !!e[r])
  };
function nu(t) {
  for (const e in t)
    lt[e] = {
      ...lt[e],
      ...t[e]
    };
}
const iu = /* @__PURE__ */ new Set([
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
  "viewport"
]);
function sr(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || iu.has(t);
}
let Ta = (t) => !sr(t);
function su(t) {
  typeof t == "function" && (Ta = (e) => e.startsWith("on") ? !sr(e) : t(e));
}
try {
  su(require("@emotion/is-prop-valid").default);
} catch {
}
function ou(t, e, r) {
  const n = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Ta(i) || r === !0 && sr(i) || !e && !sr(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
  return n;
}
const ur = /* @__PURE__ */ _e({});
function hr(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ot(t) {
  return typeof t == "string" || Array.isArray(t);
}
const li = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ci = ["initial", ...li];
function pr(t) {
  return hr(t.animate) || ci.some((e) => Ot(t[e]));
}
function Pa(t) {
  return !!(pr(t) || t.variants);
}
function au(t, e) {
  if (pr(t)) {
    const { initial: r, animate: n } = t;
    return {
      initial: r === !1 || Ot(r) ? r : void 0,
      animate: Ot(n) ? n : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function lu(t) {
  const { initial: e, animate: r } = au(t, re(ur));
  return Q(() => ({ initial: e, animate: r }), [rs(e), rs(r)]);
}
function rs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ft = {};
function cu(t) {
  for (const e in t)
    Ft[e] = t[e], Kn(e) && (Ft[e].isCSSVariable = !0);
}
function Da(t, { layout: e, layoutId: r }) {
  return ht.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Ft[t] || t === "opacity");
}
const du = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, uu = ut.length;
function hu(t, e, r) {
  let n = "", i = !0;
  for (let o = 0; o < uu; o++) {
    const a = ut[o], l = t[a];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (a.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0, !c || r) {
      const u = ya(l, si[a]);
      if (!c) {
        i = !1;
        const h = du[a] || a;
        n += `${h}(${u}) `;
      }
      r && (e[a] = u);
    }
  }
  return n = n.trim(), r ? n = r(e, i ? "" : n) : i && (n = "none"), n;
}
function di(t, e, r) {
  const { style: n, vars: i, transformOrigin: o } = t;
  let a = !1, l = !1;
  for (const c in e) {
    const u = e[c];
    if (ht.has(c)) {
      a = !0;
      continue;
    } else if (Kn(c)) {
      i[c] = u;
      continue;
    } else {
      const h = ya(u, si[c]);
      c.startsWith("origin") ? (l = !0, o[c] = h) : n[c] = h;
    }
  }
  if (e.transform || (a || r ? n.transform = hu(e, t.transform, r) : n.transform && (n.transform = "none")), l) {
    const { originX: c = "50%", originY: u = "50%", originZ: h = 0 } = o;
    n.transformOrigin = `${c} ${u} ${h}`;
  }
}
const ui = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ka(t, e, r) {
  for (const n in e)
    !le(e[n]) && !Da(n, r) && (t[n] = e[n]);
}
function pu({ transformTemplate: t }, e) {
  return Q(() => {
    const r = ui();
    return di(r, e, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function mu(t, e) {
  const r = t.style || {}, n = {};
  return ka(n, r, t), Object.assign(n, pu(t, e)), n;
}
function fu(t, e) {
  const r = {}, n = mu(t, e);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r;
}
const gu = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, yu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function vu(t, e, r = 1, n = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? gu : yu;
  t[o.offset] = L.transform(-n);
  const a = L.transform(e), l = L.transform(r);
  t[o.array] = `${a} ${l}`;
}
function Aa(t, {
  attrX: e,
  attrY: r,
  attrScale: n,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, u, h) {
  if (di(t, l, u), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: p, style: m } = t;
  p.transform && (m.transform = p.transform, delete p.transform), (m.transform || p.transformOrigin) && (m.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), m.transform && (m.transformBox = h?.transformBox ?? "fill-box", delete p.transformBox), e !== void 0 && (p.x = e), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && vu(p, i, o, a, !1);
}
const Ea = () => ({
  ...ui(),
  attrs: {}
}), Ma = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function xu(t, e, r, n) {
  const i = Q(() => {
    const o = Ea();
    return Aa(o, e, Ma(n), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ka(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const bu = [
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
  "view"
];
function hi(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(bu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function wu(t, e, r, { latestValues: n }, i, o = !1) {
  const l = (hi(t) ? xu : fu)(e, n, i, t), c = ou(e, typeof t == "string", o), u = t !== ko ? { ...c, ...l, ref: r } : {}, { children: h } = e, p = Q(() => le(h) ? h.get() : h, [h]);
  return Pe(t, {
    ...u,
    children: p
  });
}
function ns(t) {
  const e = [{}, {}];
  return t?.values.forEach((r, n) => {
    e[0][n] = r.get(), e[1][n] = r.getVelocity();
  }), e;
}
function pi(t, e, r, n) {
  if (typeof e == "function") {
    const [i, o] = ns(n);
    e = e(r !== void 0 ? r : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = ns(n);
    e = e(r !== void 0 ? r : t.custom, i, o);
  }
  return e;
}
function Qt(t) {
  return le(t) ? t.get() : t;
}
function Nu({ scrapeMotionValuesFromProps: t, createRenderState: e }, r, n, i) {
  return {
    latestValues: Cu(r, n, i, t),
    renderState: e()
  };
}
function Cu(t, e, r, n) {
  const i = {}, o = n(t, {});
  for (const m in o)
    i[m] = Qt(o[m]);
  let { initial: a, animate: l } = t;
  const c = pr(t), u = Pa(t);
  e && u && !c && t.inherit !== !1 && (a === void 0 && (a = e.initial), l === void 0 && (l = e.animate));
  let h = r ? r.initial === !1 : !1;
  h = h || a === !1;
  const p = h ? l : a;
  if (p && typeof p != "boolean" && !hr(p)) {
    const m = Array.isArray(p) ? p : [p];
    for (let f = 0; f < m.length; f++) {
      const v = pi(t, m[f]);
      if (v) {
        const { transitionEnd: g, transition: b, ...w } = v;
        for (const x in w) {
          let T = w[x];
          if (Array.isArray(T)) {
            const P = h ? T.length - 1 : 0;
            T = T[P];
          }
          T !== null && (i[x] = T);
        }
        for (const x in g)
          i[x] = g[x];
      }
    }
  }
  return i;
}
const Ra = (t) => (e, r) => {
  const n = re(ur), i = re(cr), o = () => Nu(t, e, n, i);
  return r ? o() : $n(o);
};
function mi(t, e, r) {
  const { style: n } = t, i = {};
  for (const o in n)
    (le(n[o]) || e.style && le(e.style[o]) || Da(o, t) || r?.getValue(o)?.liveStyle !== void 0) && (i[o] = n[o]);
  return i;
}
const Su = /* @__PURE__ */ Ra({
  scrapeMotionValuesFromProps: mi,
  createRenderState: ui
});
function Ia(t, e, r) {
  const n = mi(t, e, r);
  for (const i in t)
    if (le(t[i]) || le(e[i])) {
      const o = ut.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      n[o] = t[i];
    }
  return n;
}
const Tu = /* @__PURE__ */ Ra({
  scrapeMotionValuesFromProps: Ia,
  createRenderState: Ea
}), Pu = Symbol.for("motionComponentSymbol");
function et(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Du(t, e, r) {
  return lr(
    (n) => {
      n && t.onMount && t.onMount(n), e && (n ? e.mount(n) : e.unmount()), r && (typeof r == "function" ? r(n) : et(r) && (r.current = n));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const fi = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), ku = "framerAppearId", Oa = "data-" + fi(ku), Fa = _e({});
function Au(t, e, r, n, i) {
  const { visualElement: o } = re(ur), a = re(Sa), l = re(cr), c = re(dr).reducedMotion, u = Ne(null);
  n = n || a.renderer, !u.current && n && (u.current = n(t, {
    visualState: e,
    parent: o,
    props: r,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const h = u.current, p = re(Fa);
  h && !h.projection && i && (h.type === "html" || h.type === "svg") && Eu(u.current, r, i, p);
  const m = Ne(!1);
  Eo(() => {
    h && m.current && h.update(r, l);
  });
  const f = r[Oa], v = Ne(!!f && !window.MotionHandoffIsComplete?.(f) && window.MotionHasOptimisedAnimation?.(f));
  return Ro(() => {
    h && (m.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), h.scheduleRenderMicrotask(), v.current && h.animationState && h.animationState.animateChanges());
  }), U(() => {
    h && (!v.current && h.animationState && h.animationState.animateChanges(), v.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(f);
    }), v.current = !1), h.enteringChildren = void 0);
  }), h;
}
function Eu(t, e, r, n) {
  const { layoutId: i, layout: o, drag: a, dragConstraints: l, layoutScroll: c, layoutRoot: u, layoutCrossfade: h } = e;
  t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : _a(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!a || l && et(l),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: n,
    crossfade: h,
    layoutScroll: c,
    layoutRoot: u
  });
}
function _a(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : _a(t.parent);
}
function Fr(t, { forwardMotionProps: e = !1 } = {}, r, n) {
  r && nu(r);
  const i = hi(t) ? Tu : Su;
  function o(l, c) {
    let u;
    const h = {
      ...re(dr),
      ...l,
      layoutId: Mu(l)
    }, { isStatic: p } = h, m = lu(l), f = i(l, p);
    if (!p && Vn) {
      Ru();
      const v = Iu(h);
      u = v.MeasureLayout, m.visualElement = Au(t, f, h, n, v.ProjectionNode);
    }
    return d(ur.Provider, { value: m, children: [u && m.visualElement ? s(u, { visualElement: m.visualElement, ...h }) : null, wu(t, l, Du(f, m.visualElement, c), f, p, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const a = _n(o);
  return a[Pu] = t, a;
}
function Mu({ layoutId: t }) {
  const e = re(Bn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Ru(t, e) {
  re(Sa).strict;
}
function Iu(t) {
  const { drag: e, layout: r } = lt;
  if (!e && !r)
    return {};
  const n = { ...e, ...r };
  return {
    MeasureLayout: e?.isEnabled(t) || r?.isEnabled(t) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
function Ou(t, e) {
  if (typeof Proxy > "u")
    return Fr;
  const r = /* @__PURE__ */ new Map(), n = (o, a) => Fr(o, a, t, e), i = (o, a) => n(o, a);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, a) => a === "create" ? n : (r.has(a) || r.set(a, Fr(a, void 0, t, e)), r.get(a))
  });
}
function La({ top: t, left: e, right: r, bottom: n }) {
  return {
    x: { min: e, max: r },
    y: { min: t, max: n }
  };
}
function Fu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function _u(t, e) {
  if (!e)
    return t;
  const r = e({ x: t.left, y: t.top }), n = e({ x: t.right, y: t.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function _r(t) {
  return t === void 0 || t === 1;
}
function yn({ scale: t, scaleX: e, scaleY: r }) {
  return !_r(t) || !_r(e) || !_r(r);
}
function je(t) {
  return yn(t) || Ba(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Ba(t) {
  return is(t.x) || is(t.y);
}
function is(t) {
  return t && t !== "0%";
}
function or(t, e, r) {
  const n = t - r, i = e * n;
  return r + i;
}
function ss(t, e, r, n, i) {
  return i !== void 0 && (t = or(t, i, n)), or(t, r, n) + e;
}
function vn(t, e = 0, r = 1, n, i) {
  t.min = ss(t.min, e, r, n, i), t.max = ss(t.max, e, r, n, i);
}
function $a(t, { x: e, y: r }) {
  vn(t.x, e.translate, e.scale, e.originPoint), vn(t.y, r.translate, r.scale, r.originPoint);
}
const os = 0.999999999999, as = 1.0000000000001;
function Lu(t, e, r, n = !1) {
  const i = r.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, a;
  for (let l = 0; l < i; l++) {
    o = r[l], a = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (n && o.options.layoutScroll && o.scroll && o !== o.root && rt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), a && (e.x *= a.x.scale, e.y *= a.y.scale, $a(t, a)), n && je(o.latestValues) && rt(t, o.latestValues));
  }
  e.x < as && e.x > os && (e.x = 1), e.y < as && e.y > os && (e.y = 1);
}
function tt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ls(t, e, r, n, i = 0.5) {
  const o = K(t.min, t.max, i);
  vn(t, e, r, o, n);
}
function rt(t, e) {
  ls(t.x, e.x, e.scaleX, e.scale, e.originX), ls(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Va(t, e) {
  return La(_u(t.getBoundingClientRect(), e));
}
function Bu(t, e, r) {
  const n = Va(t, r), { scroll: i } = e;
  return i && (tt(n.x, i.offset.x), tt(n.y, i.offset.y)), n;
}
const cs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), nt = () => ({
  x: cs(),
  y: cs()
}), ds = () => ({ min: 0, max: 0 }), Z = () => ({
  x: ds(),
  y: ds()
}), xn = { current: null }, ja = { current: !1 };
function $u() {
  if (ja.current = !0, !!Vn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => xn.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      xn.current = !1;
}
const Vu = /* @__PURE__ */ new WeakMap();
function ju(t, e, r) {
  for (const n in e) {
    const i = e[n], o = r[n];
    if (le(i))
      t.addValue(n, i);
    else if (le(o))
      t.addValue(n, at(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(n)) {
        const a = t.getValue(n);
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i);
      } else {
        const a = t.getStaticValue(n);
        t.addValue(n, at(a !== void 0 ? a : i, { owner: t }));
      }
  }
  for (const n in r)
    e[n] === void 0 && t.removeValue(n);
  return e;
}
const us = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Hu {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, r, n) {
    return {};
  }
  constructor({ parent: e, props: r, presenceContext: n, reducedMotionConfig: i, blockInitialAnimation: o, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ni, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = he.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, q.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = r.initial ? { ...c } : {}, this.renderState = u, this.parent = e, this.props = r, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = pr(r), this.isVariantNode = Pa(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...p } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const m in p) {
      const f = p[m];
      c[m] !== void 0 && le(f) && f.set(c[m]);
    }
  }
  mount(e) {
    this.current = e, Vu.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), ja.current || $u(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xn.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Ae(this.notifyUpdate), Ae(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const r = this.features[e];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, r) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const n = ht.has(e);
    n && this.onBindTransform && this.onBindTransform();
    const i = r.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && q.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
      i(), o && o(), r.owner && r.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in lt) {
      const r = lt[e];
      if (!r)
        continue;
      const { isEnabled: n, Feature: i } = r;
      if (!this.features[e] && i && n(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, r) {
    this.latestValues[e] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, r) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < us.length; n++) {
      const i = us[n];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, a = e[o];
      a && (this.propEventSubscriptions[i] = this.on(i, a));
    }
    this.prevMotionValues = ju(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, r) {
    const n = this.values.get(e);
    r !== n && (n && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const r = this.valueSubscriptions.get(e);
    r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, r) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let n = this.values.get(e);
    return n === void 0 && r !== void 0 && (n = at(r === null ? void 0 : r, { owner: this }), this.addValue(e, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, r) {
    let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return n != null && (typeof n == "string" && (Io(n) || Fo(n)) ? n = parseFloat(n) : !Xd(n) && Fe.test(r) && (n = ga(e, r)), this.setBaseTarget(e, le(n) ? n.get() : n)), le(n) ? n.get() : n;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, r) {
    this.baseTarget[e] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: r } = this.props;
    let n;
    if (typeof r == "string" || typeof r == "object") {
      const o = pi(this.props, r, this.presenceContext?.custom);
      o && (n = o[e]);
    }
    if (r && n !== void 0)
      return n;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !le(i) ? i : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, r) {
    return this.events[e] || (this.events[e] = new Un()), this.events[e].add(r);
  }
  notify(e, ...r) {
    this.events[e] && this.events[e].notify(...r);
  }
  scheduleRenderMicrotask() {
    oi.render(this.render);
  }
}
class Ha extends Hu {
  constructor() {
    super(...arguments), this.KeyframeResolver = Bd;
  }
  sortInstanceNodePosition(e, r) {
    return e.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, r) {
    return e.style ? e.style[r] : void 0;
  }
  removeValueFromRenderState(e, { vars: r, style: n }) {
    delete r[e], delete n[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    le(e) && (this.childSubscription = e.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
function za(t, { style: e, vars: r }, n, i) {
  const o = t.style;
  let a;
  for (a in e)
    o[a] = e[a];
  i?.applyProjectionStyles(o, n);
  for (a in r)
    o.setProperty(a, r[a]);
}
function zu(t) {
  return window.getComputedStyle(t);
}
class Wu extends Ha {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = za;
  }
  readValueFromInstance(e, r) {
    if (ht.has(r))
      return this.projection?.isProjecting ? dn(r) : nd(e, r);
    {
      const n = zu(e), i = (Kn(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: r }) {
    return Va(e, r);
  }
  build(e, r, n) {
    di(e, r, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, r, n) {
    return mi(e, r, n);
  }
}
const Wa = /* @__PURE__ */ new Set([
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
  "lengthAdjust"
]);
function Uu(t, e, r, n) {
  za(t, e, void 0, n);
  for (const i in e.attrs)
    t.setAttribute(Wa.has(i) ? i : fi(i), e.attrs[i]);
}
class Gu extends Ha {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z;
  }
  getBaseTargetFromProps(e, r) {
    return e[r];
  }
  readValueFromInstance(e, r) {
    if (ht.has(r)) {
      const n = fa(r);
      return n && n.default || 0;
    }
    return r = Wa.has(r) ? r : fi(r), e.getAttribute(r);
  }
  scrapeMotionValuesFromProps(e, r, n) {
    return Ia(e, r, n);
  }
  build(e, r, n) {
    Aa(e, r, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, r, n, i) {
    Uu(e, r, n, i);
  }
  mount(e) {
    this.isSVGTag = Ma(e.tagName), super.mount(e);
  }
}
const qu = (t, e) => hi(t) ? new Gu(e) : new Wu(e, {
  allowProjection: t !== ko
});
function it(t, e, r) {
  const n = t.getProps();
  return pi(n, e, r !== void 0 ? r : n.custom, t);
}
const bn = (t) => Array.isArray(t);
function Ku(t, e, r) {
  t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, at(r));
}
function Yu(t) {
  return bn(t) ? t[t.length - 1] || 0 : t;
}
function Xu(t, e) {
  const r = it(t, e);
  let { transitionEnd: n = {}, transition: i = {}, ...o } = r || {};
  o = { ...o, ...n };
  for (const a in o) {
    const l = Yu(o[a]);
    Ku(t, a, l);
  }
}
function Zu(t) {
  return !!(le(t) && t.add);
}
function wn(t, e) {
  const r = t.getValue("willChange");
  if (Zu(r))
    return r.add(e);
  if (!r && ke.WillChange) {
    const n = new ke.WillChange("auto");
    t.addValue("willChange", n), n.add(e);
  }
}
function Ua(t) {
  return t.props[Oa];
}
const Ju = (t) => t !== null;
function Qu(t, { repeat: e, repeatType: r = "loop" }, n) {
  const i = t.filter(Ju), o = e && r !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const eh = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, th = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), rh = {
  type: "keyframes",
  duration: 0.8
}, nh = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ih = (t, { keyframes: e }) => e.length > 2 ? rh : ht.has(t) ? t.startsWith("scale") ? th(e[1]) : eh : nh;
function sh({ when: t, delay: e, delayChildren: r, staggerChildren: n, staggerDirection: i, repeat: o, repeatType: a, repeatDelay: l, from: c, elapsed: u, ...h }) {
  return !!Object.keys(h).length;
}
const gi = (t, e, r, n = {}, i, o) => (a) => {
  const l = ii(n, t) || {}, c = l.delay || n.delay || 0;
  let { elapsed: u = 0 } = n;
  u = u - /* @__PURE__ */ Ce(c);
  const h = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: (m) => {
      e.set(m), l.onUpdate && l.onUpdate(m);
    },
    onComplete: () => {
      a(), l.onComplete && l.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  sh(l) || Object.assign(h, ih(t, h)), h.duration && (h.duration = /* @__PURE__ */ Ce(h.duration)), h.repeatDelay && (h.repeatDelay = /* @__PURE__ */ Ce(h.repeatDelay)), h.from !== void 0 && (h.keyframes[0] = h.from);
  let p = !1;
  if ((h.type === !1 || h.duration === 0 && !h.repeatDelay) && (fn(h), h.delay === 0 && (p = !0)), (ke.instantAnimations || ke.skipAnimations) && (p = !0, fn(h), h.delay = 0), h.allowFlatten = !l.type && !l.ease, p && !o && e.get() !== void 0) {
    const m = Qu(h.keyframes, l);
    if (m !== void 0) {
      q.update(() => {
        h.onUpdate(m), h.onComplete();
      });
      return;
    }
  }
  return l.isSync ? new ri(h) : new Pd(h);
};
function oh({ protectedKeys: t, needsAnimating: e }, r) {
  const n = t.hasOwnProperty(r) && e[r] !== !0;
  return e[r] = !1, n;
}
function Ga(t, e, { delay: r = 0, transitionOverride: n, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  n && (o = n);
  const c = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const h in l) {
    const p = t.getValue(h, t.latestValues[h] ?? null), m = l[h];
    if (m === void 0 || u && oh(u, h))
      continue;
    const f = {
      delay: r,
      ...ii(o || {}, h)
    }, v = p.get();
    if (v !== void 0 && !p.isAnimating && !Array.isArray(m) && m === v && !f.velocity)
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const w = Ua(t);
      if (w) {
        const x = window.MotionHandoffAnimation(w, h, q);
        x !== null && (f.startTime = x, g = !0);
      }
    }
    wn(t, h), p.start(gi(h, p, m, t.shouldReduceMotion && ha.has(h) ? { type: !1 } : f, t, g));
    const b = p.animation;
    b && c.push(b);
  }
  return a && Promise.all(c).then(() => {
    q.update(() => {
      a && Xu(t, a);
    });
  }), c;
}
function qa(t, e, r, n = 0, i = 1) {
  const o = Array.from(t).sort((u, h) => u.sortNodePosition(h)).indexOf(e), a = t.size, l = (a - 1) * n;
  return typeof r == "function" ? r(o, a) : i === 1 ? o * n : l - o * n;
}
function Nn(t, e, r = {}) {
  const n = it(t, e, r.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (i = r.transitionOverride);
  const o = n ? () => Promise.all(Ga(t, n, r)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: p } = i;
    return ah(t, e, c, u, h, p, r);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => u());
  } else
    return Promise.all([o(), a(r.delay)]);
}
function ah(t, e, r = 0, n = 0, i = 0, o = 1, a) {
  const l = [];
  for (const c of t.variantChildren)
    c.notify("AnimationStart", e), l.push(Nn(c, e, {
      ...a,
      delay: r + (typeof n == "function" ? 0 : n) + qa(t.variantChildren, c, n, i, o)
    }).then(() => c.notify("AnimationComplete", e)));
  return Promise.all(l);
}
function lh(t, e, r = {}) {
  t.notify("AnimationStart", e);
  let n;
  if (Array.isArray(e)) {
    const i = e.map((o) => Nn(t, o, r));
    n = Promise.all(i);
  } else if (typeof e == "string")
    n = Nn(t, e, r);
  else {
    const i = typeof e == "function" ? it(t, e, r.custom) : e;
    n = Promise.all(Ga(t, i, r));
  }
  return n.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Ka(t, e) {
  if (!Array.isArray(e))
    return !1;
  const r = e.length;
  if (r !== t.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const ch = ci.length;
function Ya(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const r = t.parent ? Ya(t.parent) || {} : {};
    return t.props.initial !== void 0 && (r.initial = t.props.initial), r;
  }
  const e = {};
  for (let r = 0; r < ch; r++) {
    const n = ci[r], i = t.props[n];
    (Ot(i) || i === !1) && (e[n] = i);
  }
  return e;
}
const dh = [...li].reverse(), uh = li.length;
function hh(t) {
  return (e) => Promise.all(e.map(({ animation: r, options: n }) => lh(t, r, n)));
}
function ph(t) {
  let e = hh(t), r = hs(), n = !0;
  const i = (c) => (u, h) => {
    const p = it(t, h, c === "exit" ? t.presenceContext?.custom : void 0);
    if (p) {
      const { transition: m, transitionEnd: f, ...v } = p;
      u = { ...u, ...v, ...f };
    }
    return u;
  };
  function o(c) {
    e = c(t);
  }
  function a(c) {
    const { props: u } = t, h = Ya(t.parent) || {}, p = [], m = /* @__PURE__ */ new Set();
    let f = {}, v = 1 / 0;
    for (let b = 0; b < uh; b++) {
      const w = dh[b], x = r[w], T = u[w] !== void 0 ? u[w] : h[w], P = Ot(T), N = w === c ? x.isActive : null;
      N === !1 && (v = b);
      let S = T === h[w] && T !== u[w] && P;
      if (S && n && t.manuallyAnimateOnMount && (S = !1), x.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && N === null || // If we didn't and don't have any defined prop for this animation type
      !T && !x.prevProp || // Or if the prop doesn't define an animation
      hr(T) || typeof T == "boolean")
        continue;
      const C = mh(x.prevProp, T);
      let R = C || // If we're making this variant active, we want to always make it active
      w === c && x.isActive && !S && P || // If we removed a higher-priority variant (i is in reverse order)
      b > v && P, M = !1;
      const k = Array.isArray(T) ? T : [T];
      let I = k.reduce(i(w), {});
      N === !1 && (I = {});
      const { prevResolvedValues: z = {} } = x, ee = {
        ...z,
        ...I
      }, G = (W) => {
        R = !0, m.has(W) && (M = !0, m.delete(W)), x.needsAnimating[W] = !0;
        const te = t.getValue(W);
        te && (te.liveStyle = !1);
      };
      for (const W in ee) {
        const te = I[W], ae = z[W];
        if (f.hasOwnProperty(W))
          continue;
        let ue = !1;
        bn(te) && bn(ae) ? ue = !Ka(te, ae) : ue = te !== ae, ue ? te != null ? G(W) : m.add(W) : te !== void 0 && m.has(W) ? G(W) : x.protectedKeys[W] = !0;
      }
      x.prevProp = T, x.prevResolvedValues = I, x.isActive && (f = { ...f, ...I }), n && t.blockInitialAnimation && (R = !1);
      const pe = S && C;
      R && (!pe || M) && p.push(...k.map((W) => {
        const te = { type: w };
        if (typeof W == "string" && n && !pe && t.manuallyAnimateOnMount && t.parent) {
          const { parent: ae } = t, ue = it(ae, W);
          if (ae.enteringChildren && ue) {
            const { delayChildren: Me } = ue.transition || {};
            te.delay = qa(ae.enteringChildren, t, Me);
          }
        }
        return {
          animation: W,
          options: te
        };
      }));
    }
    if (m.size) {
      const b = {};
      if (typeof u.initial != "boolean") {
        const w = it(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        w && w.transition && (b.transition = w.transition);
      }
      m.forEach((w) => {
        const x = t.getBaseTarget(w), T = t.getValue(w);
        T && (T.liveStyle = !0), b[w] = x ?? null;
      }), p.push({ animation: b });
    }
    let g = !!p.length;
    return n && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1), n = !1, g ? e(p) : Promise.resolve();
  }
  function l(c, u) {
    if (r[c].isActive === u)
      return Promise.resolve();
    t.variantChildren?.forEach((p) => p.animationState?.setActive(c, u)), r[c].isActive = u;
    const h = a(c);
    for (const p in r)
      r[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: o,
    getState: () => r,
    reset: () => {
      r = hs();
    }
  };
}
function mh(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ka(e, t) : !1;
}
function Ve(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function hs() {
  return {
    animate: Ve(!0),
    whileInView: Ve(),
    whileHover: Ve(),
    whileTap: Ve(),
    whileDrag: Ve(),
    whileFocus: Ve(),
    exit: Ve()
  };
}
class Le {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class fh extends Le {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = ph(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    hr(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    e !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let gh = 0;
class yh extends Le {
  constructor() {
    super(...arguments), this.id = gh++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: r } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === n)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    r && !e && i.then(() => {
      r(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const vh = {
  animation: {
    Feature: fh
  },
  exit: {
    Feature: yh
  }
};
function _t(t, e, r, n = { passive: !0 }) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
}
function jt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const xh = (t) => (e) => ai(e) && t(e, jt(e));
function Dt(t, e, r, n) {
  return _t(t, e, xh(r), n);
}
const Xa = 1e-4, bh = 1 - Xa, wh = 1 + Xa, Za = 0.01, Nh = 0 - Za, Ch = 0 + Za;
function de(t) {
  return t.max - t.min;
}
function Sh(t, e, r) {
  return Math.abs(t - e) <= r;
}
function ps(t, e, r, n = 0.5) {
  t.origin = n, t.originPoint = K(e.min, e.max, t.origin), t.scale = de(r) / de(e), t.translate = K(r.min, r.max, t.origin) - t.originPoint, (t.scale >= bh && t.scale <= wh || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Nh && t.translate <= Ch || isNaN(t.translate)) && (t.translate = 0);
}
function kt(t, e, r, n) {
  ps(t.x, e.x, r.x, n ? n.originX : void 0), ps(t.y, e.y, r.y, n ? n.originY : void 0);
}
function ms(t, e, r) {
  t.min = r.min + e.min, t.max = t.min + de(e);
}
function Th(t, e, r) {
  ms(t.x, e.x, r.x), ms(t.y, e.y, r.y);
}
function fs(t, e, r) {
  t.min = e.min - r.min, t.max = t.min + de(e);
}
function At(t, e, r) {
  fs(t.x, e.x, r.x), fs(t.y, e.y, r.y);
}
function ge(t) {
  return [t("x"), t("y")];
}
const Ja = ({ current: t }) => t ? t.ownerDocument.defaultView : null, gs = (t, e) => Math.abs(t - e);
function Ph(t, e) {
  const r = gs(t.x, e.x), n = gs(t.y, e.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Qa {
  constructor(e, r, { transformPagePoint: n, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const m = Br(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, v = Ph(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !v)
        return;
      const { point: g } = m, { timestamp: b } = oe;
      this.history.push({ ...g, timestamp: b });
      const { onStart: w, onMove: x } = this.handlers;
      f || (w && w(this.lastMoveEvent, m), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, m);
    }, this.handlePointerMove = (m, f) => {
      this.lastMoveEvent = m, this.lastMoveEventInfo = Lr(f, this.transformPagePoint), q.update(this.updatePoint, !0);
    }, this.handlePointerUp = (m, f) => {
      this.end();
      const { onEnd: v, onSessionEnd: g, resumeAnimation: b } = this.handlers;
      if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = Br(m.type === "pointercancel" ? this.lastMoveEventInfo : Lr(f, this.transformPagePoint), this.history);
      this.startEvent && v && v(m, w), g && g(m, w);
    }, !ai(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = r, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = i || window;
    const l = jt(e), c = Lr(l, this.transformPagePoint), { point: u } = c, { timestamp: h } = oe;
    this.history = [{ ...u, timestamp: h }];
    const { onSessionStart: p } = r;
    p && p(e, Br(c, this.history)), this.removeListeners = Bt(Dt(this.contextWindow, "pointermove", this.handlePointerMove), Dt(this.contextWindow, "pointerup", this.handlePointerUp), Dt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ae(this.updatePoint);
  }
}
function Lr(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ys(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Br({ point: t }, e) {
  return {
    point: t,
    delta: ys(t, el(e)),
    offset: ys(t, Dh(e)),
    velocity: kh(e, 0.1)
  };
}
function Dh(t) {
  return t[0];
}
function el(t) {
  return t[t.length - 1];
}
function kh(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let r = t.length - 1, n = null;
  const i = el(t);
  for (; r >= 0 && (n = t[r], !(i.timestamp - n.timestamp > /* @__PURE__ */ Ce(e))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ ve(i.timestamp - n.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (i.x - n.x) / o,
    y: (i.y - n.y) / o
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Ah(t, { min: e, max: r }, n) {
  return e !== void 0 && t < e ? t = n ? K(e, t, n.min) : Math.max(t, e) : r !== void 0 && t > r && (t = n ? K(r, t, n.max) : Math.min(t, r)), t;
}
function vs(t, e, r) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
  };
}
function Eh(t, { top: e, left: r, bottom: n, right: i }) {
  return {
    x: vs(t.x, r, i),
    y: vs(t.y, e, n)
  };
}
function xs(t, e) {
  let r = e.min - t.min, n = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n };
}
function Mh(t, e) {
  return {
    x: xs(t.x, e.x),
    y: xs(t.y, e.y)
  };
}
function Rh(t, e) {
  let r = 0.5;
  const n = de(t), i = de(e);
  return i > n ? r = /* @__PURE__ */ Mt(e.min, e.max - n, t.min) : n > i && (r = /* @__PURE__ */ Mt(t.min, t.max - i, e.min)), De(0, 1, r);
}
function Ih(t, e) {
  const r = {};
  return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r;
}
const Cn = 0.35;
function Oh(t = Cn) {
  return t === !1 ? t = 0 : t === !0 && (t = Cn), {
    x: bs(t, "left", "right"),
    y: bs(t, "top", "bottom")
  };
}
function bs(t, e, r) {
  return {
    min: ws(t, e),
    max: ws(t, r)
  };
}
function ws(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Fh = /* @__PURE__ */ new WeakMap();
class _h {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: r = !1, distanceThreshold: n } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = (p) => {
      const { dragSnapToOrigin: m } = this.getProps();
      m ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(jt(p).point);
    }, a = (p, m) => {
      const { drag: f, dragPropagation: v, onDragStart: g } = this.getProps();
      if (f && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = Hd(f), !this.openDragLock))
        return;
      this.latestPointerEvent = p, this.latestPanInfo = m, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ge((w) => {
        let x = this.getAxisMotionValue(w).get() || 0;
        if (Se.test(x)) {
          const { projection: T } = this.visualElement;
          if (T && T.layout) {
            const P = T.layout.layoutBox[w];
            P && (x = de(P) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[w] = x;
      }), g && q.postRender(() => g(p, m)), wn(this.visualElement, "transform");
      const { animationState: b } = this.visualElement;
      b && b.setActive("whileDrag", !0);
    }, l = (p, m) => {
      this.latestPointerEvent = p, this.latestPanInfo = m;
      const { dragPropagation: f, dragDirectionLock: v, onDirectionLock: g, onDrag: b } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: w } = m;
      if (v && this.currentDirection === null) {
        this.currentDirection = Lh(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", m.point, w), this.updateAxis("y", m.point, w), this.visualElement.render(), b && b(p, m);
    }, c = (p, m) => {
      this.latestPointerEvent = p, this.latestPanInfo = m, this.stop(p, m), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => ge((p) => this.getAnimationState(p) === "paused" && this.getAxisMotionValue(p).animation?.play()), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new Qa(e, {
      onSessionStart: o,
      onStart: a,
      onMove: l,
      onSessionEnd: c,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      distanceThreshold: n,
      contextWindow: Ja(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, r) {
    const n = e || this.latestPointerEvent, i = r || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !n)
      return;
    const { velocity: a } = i;
    this.startAnimation(a);
    const { onDragEnd: l } = this.getProps();
    l && q.postRender(() => l(n, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: r } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(e, r, n) {
    const { drag: i } = this.getProps();
    if (!n || !Kt(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let a = this.originPoint[e] + n[e];
    this.constraints && this.constraints[e] && (a = Ah(a, this.constraints[e], this.elastic[e])), o.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: r } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    e && et(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = Eh(n.layoutBox, e) : this.constraints = !1, this.elastic = Oh(r), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ge((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Ih(n.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: r } = this.getProps();
    if (!e || !et(e))
      return !1;
    const n = e.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Bu(n, i.root, this.visualElement.getTransformPagePoint());
    let a = Mh(i.layout.layoutBox, o);
    if (r) {
      const l = r(Fu(a));
      this.hasMutatedConstraints = !!l, l && (a = La(l));
    }
    return a;
  }
  startAnimation(e) {
    const { drag: r, dragMomentum: n, dragElastic: i, dragTransition: o, dragSnapToOrigin: a, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, u = ge((h) => {
      if (!Kt(h, r, this.currentDirection))
        return;
      let p = c && c[h] || {};
      a && (p = { min: 0, max: 0 });
      const m = i ? 200 : 1e6, f = i ? 40 : 1e7, v = {
        type: "inertia",
        velocity: n ? e[h] : 0,
        bounceStiffness: m,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...p
      };
      return this.startAxisValueAnimation(h, v);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(e, r) {
    const n = this.getAxisMotionValue(e);
    return wn(this.visualElement, e), n.start(gi(e, n, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    ge((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    ge((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const r = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps(), i = n[r];
    return i || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    ge((r) => {
      const { drag: n } = this.getProps();
      if (!Kt(r, n, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(r);
      if (i && i.layout) {
        const { min: a, max: l } = i.layout.layoutBox[r];
        o.set(e[r] - K(a, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!et(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ge((a) => {
      const l = this.getAxisMotionValue(a);
      if (l && this.constraints !== !1) {
        const c = l.get();
        i[a] = Rh({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), ge((a) => {
      if (!Kt(a, e, null))
        return;
      const l = this.getAxisMotionValue(a), { min: c, max: u } = this.constraints[a];
      l.set(K(c, u, i[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Fh.set(this.visualElement, this);
    const e = this.visualElement.current, r = Dt(e, "pointerdown", (c) => {
      const { drag: u, dragListener: h = !0 } = this.getProps();
      u && h && this.start(c);
    }), n = () => {
      const { dragConstraints: c } = this.getProps();
      et(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", n);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), q.read(n);
    const a = _t(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (ge((h) => {
        const p = this.getAxisMotionValue(h);
        p && (this.originPoint[h] += c[h].translate, p.set(p.get() + c[h].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), r(), o(), l && l();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: a = Cn, dragMomentum: l = !0 } = e;
    return {
      ...e,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: l
    };
  }
}
function Kt(t, e, r) {
  return (e === !0 || e === t) && (r === null || r === t);
}
function Lh(t, e = 10) {
  let r = null;
  return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r;
}
class Bh extends Le {
  constructor(e) {
    super(e), this.removeGroupControls = xe, this.removeListeners = xe, this.controls = new _h(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || xe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ns = (t) => (e, r) => {
  t && q.postRender(() => t(e, r));
};
class $h extends Le {
  constructor() {
    super(...arguments), this.removePointerDownListener = xe;
  }
  onPointerDown(e) {
    this.session = new Qa(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ja(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: r, onPan: n, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Ns(e),
      onStart: Ns(r),
      onMove: n,
      onEnd: (o, a) => {
        delete this.session, i && q.postRender(() => i(o, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Dt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const er = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Cs(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const xt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (L.test(t))
        t = parseFloat(t);
      else
        return t;
    const r = Cs(t, e.target.x), n = Cs(t, e.target.y);
    return `${r}% ${n}%`;
  }
}, Vh = {
  correct: (t, { treeScale: e, projectionDelta: r }) => {
    const n = t, i = Fe.parse(t);
    if (i.length > 5)
      return n;
    const o = Fe.createTransformer(t), a = typeof i[0] != "number" ? 1 : 0, l = r.x.scale * e.x, c = r.y.scale * e.y;
    i[0 + a] /= l, i[1 + a] /= c;
    const u = K(l, c, 0.5);
    return typeof i[2 + a] == "number" && (i[2 + a] /= u), typeof i[3 + a] == "number" && (i[3 + a] /= u), o(i);
  }
};
let $r = !1;
class jh extends Fn {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: r, switchLayoutGroup: n, layoutId: i } = this.props, { projection: o } = e;
    cu(Hh), o && (r.group && r.group.add(o), n && n.register && i && n.register(o), $r && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), er.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: r, visualElement: n, drag: i, isPresent: o } = this.props, { projection: a } = n;
    return a && (a.isPresent = o, $r = !0, i || e.layoutDependency !== r || r === void 0 || e.isPresent !== o ? a.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? a.promote() : a.relegate() || q.postRender(() => {
      const l = a.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), oi.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: i } = e;
    $r = !0, i && (i.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(i), n && n.deregister && n.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function tl(t) {
  const [e, r] = Ca(), n = re(Bn);
  return s(jh, { ...t, layoutGroup: n, switchLayoutGroup: re(Fa), isPresent: e, safeToRemove: r });
}
const Hh = {
  borderRadius: {
    ...xt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: xt,
  borderTopRightRadius: xt,
  borderBottomLeftRadius: xt,
  borderBottomRightRadius: xt,
  boxShadow: Vh
};
function zh(t, e, r) {
  const n = le(t) ? t : at(t);
  return n.start(gi("", n, e, r)), n.animation;
}
const Wh = (t, e) => t.depth - e.depth;
class Uh {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    jn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Hn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Wh), this.isDirty = !1, this.children.forEach(e);
  }
}
function Gh(t, e) {
  const r = he.now(), n = ({ timestamp: i }) => {
    const o = i - r;
    o >= e && (Ae(n), t(o - e));
  };
  return q.setup(n, !0), () => Ae(n);
}
const rl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], qh = rl.length, Ss = (t) => typeof t == "string" ? parseFloat(t) : t, Ts = (t) => typeof t == "number" || L.test(t);
function Kh(t, e, r, n, i, o) {
  i ? (t.opacity = K(0, r.opacity ?? 1, Yh(n)), t.opacityExit = K(e.opacity ?? 1, 0, Xh(n))) : o && (t.opacity = K(e.opacity ?? 1, r.opacity ?? 1, n));
  for (let a = 0; a < qh; a++) {
    const l = `border${rl[a]}Radius`;
    let c = Ps(e, l), u = Ps(r, l);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || Ts(c) === Ts(u) ? (t[l] = Math.max(K(Ss(c), Ss(u), n), 0), (Se.test(u) || Se.test(c)) && (t[l] += "%")) : t[l] = u;
  }
  (e.rotate || r.rotate) && (t.rotate = K(e.rotate || 0, r.rotate || 0, n));
}
function Ps(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Yh = /* @__PURE__ */ nl(0, 0.5, zo), Xh = /* @__PURE__ */ nl(0.5, 0.95, xe);
function nl(t, e, r) {
  return (n) => n < t ? 0 : n > e ? 1 : r(/* @__PURE__ */ Mt(t, e, n));
}
function Ds(t, e) {
  t.min = e.min, t.max = e.max;
}
function me(t, e) {
  Ds(t.x, e.x), Ds(t.y, e.y);
}
function ks(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function As(t, e, r, n, i) {
  return t -= e, t = or(t, 1 / r, n), i !== void 0 && (t = or(t, 1 / i, n)), t;
}
function Zh(t, e = 0, r = 1, n = 0.5, i, o = t, a = t) {
  if (Se.test(e) && (e = parseFloat(e), e = K(a.min, a.max, e / 100) - a.min), typeof e != "number")
    return;
  let l = K(o.min, o.max, n);
  t === o && (l -= e), t.min = As(t.min, e, r, l, i), t.max = As(t.max, e, r, l, i);
}
function Es(t, e, [r, n, i], o, a) {
  Zh(t, e[r], e[n], e[i], e.scale, o, a);
}
const Jh = ["x", "scaleX", "originX"], Qh = ["y", "scaleY", "originY"];
function Ms(t, e, r, n) {
  Es(t.x, e, Jh, r ? r.x : void 0, n ? n.x : void 0), Es(t.y, e, Qh, r ? r.y : void 0, n ? n.y : void 0);
}
function Rs(t) {
  return t.translate === 0 && t.scale === 1;
}
function il(t) {
  return Rs(t.x) && Rs(t.y);
}
function Is(t, e) {
  return t.min === e.min && t.max === e.max;
}
function ep(t, e) {
  return Is(t.x, e.x) && Is(t.y, e.y);
}
function Os(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function sl(t, e) {
  return Os(t.x, e.x) && Os(t.y, e.y);
}
function Fs(t) {
  return de(t.x) / de(t.y);
}
function _s(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class tp {
  constructor() {
    this.members = [];
  }
  add(e) {
    jn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Hn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(e) {
    const r = this.members.findIndex((i) => e === i);
    if (r === 0)
      return !1;
    let n;
    for (let i = r; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        n = o;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, r) {
    const n = this.lead;
    if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
      n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, r && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: r, resumingFrom: n } = e;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function rp(t, e, r) {
  let n = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, a = r?.z || 0;
  if ((i || o || a) && (n = `translate3d(${i}px, ${o}px, ${a}px) `), (e.x !== 1 || e.y !== 1) && (n += `scale(${1 / e.x}, ${1 / e.y}) `), r) {
    const { transformPerspective: u, rotate: h, rotateX: p, rotateY: m, skewX: f, skewY: v } = r;
    u && (n = `perspective(${u}px) ${n}`), h && (n += `rotate(${h}deg) `), p && (n += `rotateX(${p}deg) `), m && (n += `rotateY(${m}deg) `), f && (n += `skewX(${f}deg) `), v && (n += `skewY(${v}deg) `);
  }
  const l = t.x.scale * e.x, c = t.y.scale * e.y;
  return (l !== 1 || c !== 1) && (n += `scale(${l}, ${c})`), n || "none";
}
const Vr = ["", "X", "Y", "Z"], np = 1e3;
let ip = 0;
function jr(t, e, r, n) {
  const { latestValues: i } = e;
  i[t] && (r[t] = i[t], e.setStaticValue(t, 0), n && (n[t] = 0));
}
function ol(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const r = Ua(e);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(r, "transform", q, !(i || o));
  }
  const { parent: n } = t;
  n && !n.hasCheckedOptimisedAppear && ol(n);
}
function al({ attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: n, resetTransform: i }) {
  return class {
    constructor(a = {}, l = e?.()) {
      this.id = ip++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(ap), this.nodes.forEach(up), this.nodes.forEach(hp), this.nodes.forEach(lp);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uh());
    }
    addEventListener(a, l) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Un()), this.eventHandlers.get(a).add(l);
    }
    notifyListeners(a, ...l) {
      const c = this.eventHandlers.get(a);
      c && c.notify(...l);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a) {
      if (this.instance)
        return;
      this.isSVG = Na(a) && !Kd(a), this.instance = a;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || l) && (this.isLayoutDirty = !0), t) {
        let h, p = 0;
        const m = () => this.root.updateBlockedByResize = !1;
        q.read(() => {
          p = window.innerWidth;
        }), t(a, () => {
          const f = window.innerWidth;
          f !== p && (p = f, this.root.updateBlockedByResize = !0, h && h(), h = Gh(m, 250), er.hasAnimatedSinceResize && (er.hasAnimatedSinceResize = !1, this.nodes.forEach($s)));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeLayoutChanged: m, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || yp, { onLayoutAnimationStart: g, onLayoutAnimationComplete: b } = u.getProps(), w = !this.targetLayout || !sl(this.targetLayout, f), x = !p && m;
        if (this.options.layoutRoot || this.resumeFrom || x || p && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const T = {
            ...ii(v, "layout"),
            onPlay: g,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (T.delay = 0, T.type = !1), this.startAnimation(T), this.setAnimationOrigin(h, x);
        } else
          p || $s(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ae(this.updateProjection);
    }
    // only on the root
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
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pp), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ol(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        p.shouldResetTransform = !0, p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ls);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Bs);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(dp), this.nodes.forEach(sp), this.nodes.forEach(op)) : this.nodes.forEach(Bs), this.clearAllSnapshots();
      const l = he.now();
      oe.delta = De(0, 1e3 / 60, l - oe.timestamp), oe.timestamp = l, oe.isProcessing = !0, Ar.update.process(oe), Ar.preRender.process(oe), Ar.render.process(oe), oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, oi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cp), this.sharedNodes.forEach(mp);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !de(this.snapshot.measuredBox.x) && !de(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (l = !1), l && this.instance) {
        const c = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: c,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !il(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, h = u !== this.prevTransformTemplateValue;
      a && this.instance && (l || je(this.latestValues) || h) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return a && (c = this.removeTransform(c)), vp(c), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return Z();
      const l = a.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(xp))) {
        const { scroll: u } = this.root;
        u && (tt(l.x, u.offset.x), tt(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(a) {
      const l = Z();
      if (me(l, a), this.scroll?.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: h, options: p } = u;
        u !== this.root && h && p.layoutScroll && (h.wasRoot && me(l, a), tt(l.x, h.offset.x), tt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(a, l = !1) {
      const c = Z();
      me(c, a);
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        !l && h.options.layoutScroll && h.scroll && h !== h.root && rt(c, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), je(h.latestValues) && rt(c, h.latestValues);
      }
      return je(this.latestValues) && rt(c, this.latestValues), c;
    }
    removeTransform(a) {
      const l = Z();
      me(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !je(u.latestValues))
          continue;
        yn(u.latestValues) && u.updateSnapshot();
        const h = Z(), p = u.measurePageBox();
        me(h, p), Ms(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, h);
      }
      return je(this.latestValues) && Ms(l, this.latestValues), l;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: p } = this.options;
      if (!(!this.layout || !(h || p))) {
        if (this.resolvedRelativeTargetAt = oe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), At(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Th(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : me(this.target, this.layout.layoutBox), $a(this.target, this.targetDelta)) : me(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), At(this.relativeTargetOrigin, this.target, m.target), me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yn(this.parent.latestValues) || Ba(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === oe.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || h))
        return;
      me(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, m = this.treeScale.y;
      Lu(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Z());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ks(this.prevProjectionDelta.x, this.projectionDelta.x), ks(this.prevProjectionDelta.y, this.projectionDelta.y)), kt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== m || !_s(this.projectionDelta.x, this.prevProjectionDelta.x) || !_s(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.visualElement?.scheduleRender(), a) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = nt(), this.projectionDelta = nt(), this.projectionDeltaWithTransform = nt();
    }
    setAnimationOrigin(a, l = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, h = { ...this.latestValues }, p = nt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const m = Z(), f = c ? c.source : void 0, v = this.layout ? this.layout.source : void 0, g = f !== v, b = this.getStack(), w = !b || b.members.length <= 1, x = !!(g && !w && this.options.crossfade === !0 && !this.path.some(gp));
      this.animationProgress = 0;
      let T;
      this.mixTargetDelta = (P) => {
        const N = P / 1e3;
        Vs(p.x, a.x, N), Vs(p.y, a.y, N), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (At(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), fp(this.relativeTarget, this.relativeTargetOrigin, m, N), T && ep(this.relativeTarget, T) && (this.isProjectionDirty = !1), T || (T = Z()), me(T, this.relativeTarget)), g && (this.animationValues = h, Kh(h, u, this.latestValues, N, x, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ae(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = q.update(() => {
        er.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = at(0)), this.currentAnimation = zh(this.motionValue, [0, 1e3], {
          ...a,
          velocity: 0,
          isSync: !0,
          onUpdate: (l) => {
            this.mixTargetDelta(l), a.onUpdate && a.onUpdate(l);
          },
          onStop: () => {
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(np), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: l, target: c, layout: u, latestValues: h } = a;
      if (!(!l || !c || !u)) {
        if (this !== a && this.layout && u && ll(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || Z();
          const p = de(this.layout.layoutBox.x);
          c.x.min = a.target.x.min, c.x.max = c.x.min + p;
          const m = de(this.layout.layoutBox.y);
          c.y.min = a.target.y.min, c.y.max = c.y.min + m;
        }
        me(l, c), rt(l, h), kt(this.projectionDeltaWithTransform, this.layoutCorrected, l, h);
      }
    }
    registerSharedNode(a, l) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new tp()), this.sharedNodes.get(a).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: l, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), a && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let l = !1;
      const { latestValues: c } = a;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0), !l)
        return;
      const u = {};
      c.z && jr("z", a, u, this.animationValues);
      for (let h = 0; h < Vr.length; h++)
        jr(`rotate${Vr[h]}`, a, u, this.animationValues), jr(`skew${Vr[h]}`, a, u, this.animationValues);
      a.render();
      for (const h in u)
        a.setStaticValue(h, u[h]), this.animationValues && (this.animationValues[h] = u[h]);
      a.scheduleRender();
    }
    applyProjectionStyles(a, l) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        a.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = Qt(l?.pointerEvents) || "", a.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = Qt(l?.pointerEvents) || ""), this.hasProjected && !je(this.latestValues) && (a.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const h = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let p = rp(this.projectionDeltaWithTransform, this.treeScale, h);
      c && (p = c(h, p)), a.transform = p;
      const { x: m, y: f } = this.projectionDelta;
      a.transformOrigin = `${m.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? a.opacity = u === this ? h.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : a.opacity = u === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const v in Ft) {
        if (h[v] === void 0)
          continue;
        const { correct: g, applyTo: b, isCSSVariable: w } = Ft[v], x = p === "none" ? h[v] : g(h[v], u);
        if (b) {
          const T = b.length;
          for (let P = 0; P < T; P++)
            a[b[P]] = x;
        } else
          w ? this.options.visualElement.renderState.vars[v] = x : a[v] = x;
      }
      this.options.layoutId && (a.pointerEvents = u === this ? Qt(l?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => a.currentAnimation?.stop()), this.root.nodes.forEach(Ls), this.root.sharedNodes.clear();
    }
  };
}
function sp(t) {
  t.updateLayout();
}
function op(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: n } = t.layout, { animationType: i } = t.options, o = e.source !== t.layout.source;
    i === "size" ? ge((h) => {
      const p = o ? e.measuredBox[h] : e.layoutBox[h], m = de(p);
      p.min = r[h].min, p.max = p.min + m;
    }) : ll(i, e.layoutBox, r) && ge((h) => {
      const p = o ? e.measuredBox[h] : e.layoutBox[h], m = de(r[h]);
      p.max = p.min + m, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + m);
    });
    const a = nt();
    kt(a, r, e.layoutBox);
    const l = nt();
    o ? kt(l, t.applyTransform(n, !0), e.measuredBox) : kt(l, r, e.layoutBox);
    const c = !il(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: m } = h;
        if (p && m) {
          const f = Z();
          At(f, e.layoutBox, p.layoutBox);
          const v = Z();
          At(v, r, m.layoutBox), sl(f, v) || (u = !0), h.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = f, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function ap(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function lp(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function cp(t) {
  t.clearSnapshot();
}
function Ls(t) {
  t.clearMeasurements();
}
function Bs(t) {
  t.isLayoutDirty = !1;
}
function dp(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function $s(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function up(t) {
  t.resolveTargetDelta();
}
function hp(t) {
  t.calcProjection();
}
function pp(t) {
  t.resetSkewAndRotation();
}
function mp(t) {
  t.removeLeadSnapshot();
}
function Vs(t, e, r) {
  t.translate = K(e.translate, 0, r), t.scale = K(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint;
}
function js(t, e, r, n) {
  t.min = K(e.min, r.min, n), t.max = K(e.max, r.max, n);
}
function fp(t, e, r, n) {
  js(t.x, e.x, r.x, n), js(t.y, e.y, r.y, n);
}
function gp(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const yp = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Hs = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), zs = Hs("applewebkit/") && !Hs("chrome/") ? Math.round : xe;
function Ws(t) {
  t.min = zs(t.min), t.max = zs(t.max);
}
function vp(t) {
  Ws(t.x), Ws(t.y);
}
function ll(t, e, r) {
  return t === "position" || t === "preserve-aspect" && !Sh(Fs(e), Fs(r), 0.2);
}
function xp(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const bp = al({
  attachResizeListener: (t, e) => _t(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Hr = {
  current: void 0
}, cl = al({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Hr.current) {
      const t = new bp({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Hr.current = t;
    }
    return Hr.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), wp = {
  pan: {
    Feature: $h
  },
  drag: {
    Feature: Bh,
    ProjectionNode: cl,
    MeasureLayout: tl
  }
};
function Us(t, e, r) {
  const { props: n } = t;
  t.animationState && n.whileHover && t.animationState.setActive("whileHover", r === "Start");
  const i = "onHover" + r, o = n[i];
  o && q.postRender(() => o(e, jt(e)));
}
class Np extends Le {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = zd(e, (r, n) => (Us(this.node, n, "Start"), (i) => Us(this.node, i, "End"))));
  }
  unmount() {
  }
}
class Cp extends Le {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Bt(_t(this.node.current, "focus", () => this.onFocus()), _t(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Gs(t, e, r) {
  const { props: n } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && n.whileTap && t.animationState.setActive("whileTap", r === "Start");
  const i = "onTap" + (r === "End" ? "" : r), o = n[i];
  o && q.postRender(() => o(e, jt(e)));
}
class Sp extends Le {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = qd(e, (r, n) => (Gs(this.node, n, "Start"), (i, { success: o }) => Gs(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Sn = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Tp = (t) => {
  const e = Sn.get(t.target);
  e && e(t);
}, Pp = (t) => {
  t.forEach(Tp);
};
function Dp({ root: t, ...e }) {
  const r = t || document;
  zr.has(r) || zr.set(r, {});
  const n = zr.get(r), i = JSON.stringify(e);
  return n[i] || (n[i] = new IntersectionObserver(Pp, { root: t, ...e })), n[i];
}
function kp(t, e, r) {
  const n = Dp(e);
  return Sn.set(t, r), n.observe(t), () => {
    Sn.delete(t), n.unobserve(t);
  };
}
const Ap = {
  some: 0,
  all: 1
};
class Ep extends Le {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: r, margin: n, amount: i = "some", once: o } = e, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof i == "number" ? i : Ap[i]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: h, onViewportLeave: p } = this.node.getProps(), m = u ? h : p;
      m && m(c);
    };
    return kp(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Mp(e, r)) && this.startObserver();
  }
  unmount() {
  }
}
function Mp({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (r) => t[r] !== e[r];
}
const Rp = {
  inView: {
    Feature: Ep
  },
  tap: {
    Feature: Sp
  },
  focus: {
    Feature: Cp
  },
  hover: {
    Feature: Np
  }
}, Ip = {
  layout: {
    ProjectionNode: cl,
    MeasureLayout: tl
  }
}, Op = {
  ...vh,
  ...Rp,
  ...wp,
  ...Ip
}, D = /* @__PURE__ */ Ou(Op, qu);
function Fp(t) {
  const e = Ne(0), { isStatic: r } = re(dr);
  U(() => {
    if (r)
      return;
    const n = ({ timestamp: i, delta: o }) => {
      e.current || (e.current = i), t(i - e.current, o);
    };
    return q.update(n, !0), () => Ae(n);
  }, [t]);
}
const _p = globalThis.__GLOBALS__.getAssetURL("f963f27ff710f642f960fd158ca115b1c0fb3e48.png"), Lp = globalThis.__GLOBALS__.getAssetURL("7e6c70d883705792121a2ebb33ca95ed0aec0aca.png"), Bp = globalThis.__GLOBALS__.getAssetURL("c2cfe2ffa4448f71905a14ccd4adf50d62892f2f.png"), $p = globalThis.__GLOBALS__.getAssetURL("1716df38469e37b290567fc26c86a133950f95cf.png"), Vp = globalThis.__GLOBALS__.getAssetURL("98692bc0b1c33ef87e671efcc2e0866d08f8beaf.png");
function Tn({ type: t, className: e = "" }) {
  return /* @__PURE__ */ d("div", { className: "relative w-full h-full", children: [
    /* @__PURE__ */ d(
      "div",
      {
        className: "absolute inset-0 rounded-full",
        style: {
          background: "transparent",
          border: "2px solid rgba(255, 255, 255, 0.6)",
          boxShadow: `
            0 0 0 1px rgba(200, 220, 255, 0.3),
            0 0 0 2px rgba(255, 200, 255, 0.2),
            inset 0 0 30px rgba(255, 255, 255, 0.1),
            0 4px 15px rgba(0, 0, 0, 0.05)
          `
        },
        children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: "absolute rounded-full",
              style: {
                top: "10%",
                left: "15%",
                width: "35%",
                height: "35%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 25%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)",
                filter: "blur(2px)"
              }
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "absolute rounded-full",
              style: {
                top: "18%",
                left: "45%",
                width: "20%",
                height: "20%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 35%, transparent 60%)",
                filter: "blur(1px)"
              }
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "absolute rounded-full",
              style: {
                bottom: "15%",
                right: "15%",
                width: "40%",
                height: "40%",
                background: "radial-gradient(circle, rgba(200, 180, 255, 0.12) 0%, rgba(180, 220, 255, 0.08) 40%, transparent 70%)",
                filter: "blur(5px)"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center", children: {
      bone: /* @__PURE__ */ s(
        "img",
        {
          src: _p,
          alt: "Bone sticker",
          className: e,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
            transform: "scale(1.15)"
          }
        }
      ),
      vet: /* @__PURE__ */ s(
        "img",
        {
          src: Bp,
          alt: "Veterinary care in Darlington and Florence SC",
          className: e,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
            transform: "scale(1.15)"
          }
        }
      ),
      house: /* @__PURE__ */ s(
        "img",
        {
          src: Vp,
          alt: "Pet boarding and daycare near Florence SC",
          className: e,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
            transform: "scale(1.15)"
          }
        }
      ),
      scissors: /* @__PURE__ */ s(
        "img",
        {
          src: Lp,
          alt: "Pet grooming services in Florence SC",
          className: e,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
            transform: "scale(1.5)"
          }
        }
      ),
      bowl: /* @__PURE__ */ s(
        "img",
        {
          src: $p,
          alt: "Dog training services in Darlington County",
          className: e,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
            transform: "scale(1.15)"
          }
        }
      )
    }[t] })
  ] });
}
function qs({ type: t, delay: e, position: r, offset: n, index: i, globalTime: o }) {
  const [a, l] = E(!1), [c, u] = E(null), [h, p] = E(0), [m, f] = E(0), v = (R) => {
    if (R.stopPropagation(), a) return;
    const M = new Audio("http://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3");
    M.volume = 0.5, M.play().catch((k) => console.log("Audio play failed:", k)), l(!0), u(o), f((k) => k + 1);
  }, g = 14, w = 10 * 2.4, x = 3.6, T = () => {
    if (a && c !== null)
      if (o - c >= x)
        l(!1), u(null);
      else
        return h;
    const M = (o + e) % w;
    return M < g ? -1e3 * (M / g) : -1e3;
  }, P = () => {
    if (a) return 0;
    const M = (o + e) % w;
    if (M < g) {
      const k = M / g;
      return k < 0.1 ? k / 0.1 : k > 0.9 ? (1 - k) / 0.1 : 1;
    }
    return 0;
  }, N = T(), S = P();
  a || h !== N && p(N);
  const C = Q(() => Array.from({ length: 16 }, (R, M) => {
    const k = M / 16 * Math.PI * 2 + (Math.random() - 0.5) * 0.3, I = 40 + Math.random() * 50;
    return {
      x: Math.cos(k) * I,
      y: Math.sin(k) * I,
      size: 3 + Math.random() * 8,
      color: `hsl(${Math.random() * 40 + 180}, ${40 + Math.random() * 20}%, ${70 + Math.random() * 15}%)`
    };
  }), [m]);
  return /* @__PURE__ */ d(
    "div",
    {
      className: "absolute pointer-events-none",
      style: {
        [r]: `${n}px`,
        bottom: "0px",
        width: "75px",
        height: "75px"
      },
      children: [
        !a && /* @__PURE__ */ s(
          "div",
          {
            onClick: v,
            className: "absolute inset-0 cursor-pointer pointer-events-auto",
            style: {
              transform: `translateY(${N}px)`,
              opacity: S
            },
            children: /* @__PURE__ */ s(
              "div",
              {
                className: "w-full h-full drop-shadow-lg transition-transform duration-200 hover:scale-110",
                children: /* @__PURE__ */ s(Tn, { type: t, className: "w-full h-full" })
              }
            )
          }
        ),
        a && c !== null && /* @__PURE__ */ s(
          D.div,
          {
            initial: { opacity: 1, scale: 1 },
            animate: {
              opacity: [1, 1, 0],
              scale: [1, 1.4, 0.6]
            },
            transition: {
              duration: 0.6,
              times: [0, 0.3, 1],
              ease: "easeOut"
            },
            className: "absolute inset-0 pointer-events-none",
            style: {
              transform: `translateY(${h}px)`
            },
            children: /* @__PURE__ */ s(Tn, { type: t, className: "w-full h-full drop-shadow-lg" })
          }
        ),
        a && C.map((R, M) => /* @__PURE__ */ s(
          D.div,
          {
            className: "absolute rounded-full pointer-events-none",
            initial: {
              x: 30,
              y: 30 + h,
              scale: 1,
              opacity: 1
            },
            animate: {
              x: 30 + R.x,
              y: 30 + h + R.y,
              scale: 0,
              opacity: 0
            },
            transition: {
              duration: 0.5,
              ease: "easeOut"
            },
            style: {
              width: `${R.size}px`,
              height: `${R.size}px`,
              background: R.color
            }
          },
          M
        ))
      ]
    }
  );
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hp = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Ks = (t) => {
  const e = Hp(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, dl = (...t) => t.filter((e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = _n(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: o,
    iconNode: a,
    ...l
  }, c) => Pe(
    "svg",
    {
      ref: c,
      ...zp,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: n ? Number(r) * 24 / Number(e) : r,
      className: dl("lucide", i),
      ...l
    },
    [
      ...a.map(([u, h]) => Pe(u, h)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = (t, e) => {
  const r = _n(
    ({ className: n, ...i }, o) => Pe(Wp, {
      ref: o,
      iconNode: e,
      className: dl(
        `lucide-${jp(Ks(t))}`,
        `lucide-${t}`,
        n
      ),
      ...i
    })
  );
  return r.displayName = Ks(t), r;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Gp = j("arrow-left", Up);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Ys = j("arrow-up-down", qp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], Yp = j("award", Kp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Zp = j("check", Xp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Qp = j("chevron-left", Jp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Xs = j("chevron-right", em);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], rm = j("circle-alert", tm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], im = j("clock", nm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
], om = j("crop", sm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
], Zs = j("dollar-sign", am);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], cm = j("external-link", lm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Js = j("globe", dm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
], hm = j("graduation-cap", um);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], mm = j("grip-vertical", pm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], yi = j("heart", fm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], ul = j("house", gm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
], Pn = j("loader", ym);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
], hl = j("log-in", vm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
], pl = j("log-out", xm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], ar = j("map-pin", bm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], Nm = j("moon", wm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], Sm = j("pen", Cm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], Dn = j("phone", Tm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], kn = j("plus", Pm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], mr = j("search", Dm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const km = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], Am = j("sliders-horizontal", km);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Em = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], Mm = j("square-pen", Em);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = [
  [
    "path",
    {
      d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
      key: "2ksp49"
    }
  ]
], Im = j("star-half", Rm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Om = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Ct = j("star", Om);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
], _m = j("stethoscope", Fm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Bm = j("sun", Lm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
], Vm = j("syringe", $m);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Lt = j("trash-2", jm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
], ml = j("upload", Hm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], fl = j("user", zm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Um = j("users", Wm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], we = j("x", Gm);
function Qs({ onNavigate: t, visitCount: e0 }) {
  const [e, r] = E(null), [n, i] = E(0), [o, a] = E(""), [l, c] = E("");
  Fp((p) => {
    i(p / 1e3);
  }), U(() => {
    [
      "/images/home/hero-dog-mobile.jpg",
      "/images/home/hero-dog.jpg",
      "https://i.imgur.com/9OFmvJS.gif",
      "https://i.imgur.com/uRQte4X.gif",
      "https://i.imgur.com/XeRVRwn.gif",
      "https://i.imgur.com/ZzZk4qe.gif"
    ].forEach((m) => {
      const f = new Image();
      f.src = m;
    });
  }, []);
  const u = ["bone", "vet", "house", "scissors", "bowl"], h = () => {
    o && t?.(o);
  };
  return /* @__PURE__ */ d("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "md:hidden absolute top-0 left-0 right-0 h-6 pointer-events-none z-0",
        style: {
          background: "linear-gradient(to bottom, #fce5c1 0%, rgba(255, 255, 255, 0) 100%)",
          opacity: 0,
          display: "none"
        }
      }
    ),
    /* @__PURE__ */ d(
      "section",
      {
        className: "relative pt-5 pb-10 md:pt-8 md:pb-8 px-4 sm:px-6 lg:px-8 md:bg-white mt-px md:mt-0",
        style: {
          background: window.innerWidth < 768 ? "#FFFFFF" : void 0
        },
        children: [
          /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ d("div", { className: "text-center", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                initial: { scale: 0, rotate: -180 },
                animate: { scale: 1, rotate: 0 },
                transition: { duration: 0.8, type: "spring" },
                className: "inline-block mb-2 md:mb-3",
                children: /* @__PURE__ */ s("span", { className: "text-6xl md:text-8xl", children: "🐾" })
              }
            ),
            /* @__PURE__ */ d("div", { className: "max-w-xs mx-auto mb-4 md:mb-5", children: [
              /* @__PURE__ */ s(
                D.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "text-purple-600 leading-none md:text-6xl",
                  style: {
                    fontSize: "36px",
                    lineHeight: "40px"
                  },
                  children: "Pawsitively Fabulous"
                }
              ),
              /* @__PURE__ */ s(
                D.h2,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "text-purple-600 text-2xl md:text-3xl mt-1",
                  style: { lineHeight: "1.3" },
                  children: "Pet Services Directory"
                }
              ),
              /* @__PURE__ */ s(
                D.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.5, type: "spring" },
                  className: "mt-4 hidden md:block",
                  children: /* @__PURE__ */ s("span", { className: "inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-sm rounded-full shadow-lg !text-white !font-semibold", children: "Serving Darlington County & Florence Area" })
                }
              )
            ] }),
            /* @__PURE__ */ s(
              D.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.55 },
                className: "max-w-2xl mx-auto px-3 mt-3 md:mt-5 mb-4 md:mb-6",
                children: /* @__PURE__ */ d("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ d("p", { className: "text-gray-600 text-sm md:text-base leading-relaxed", children: [
                    /* @__PURE__ */ s("span", { className: "text-purple-700 font-medium", children: "Pee Dee Pet Care" }),
                    " is a free local directory for pet grooming, training, boarding, and vet care in Darlington, Hartsville and Florence, SC."
                  ] }),
                  /* @__PURE__ */ s("p", { className: "text-gray-500 text-xs md:text-sm leading-relaxed", children: "Browse verified providers, read reviews, shortlist your favorites, and compare options — no fees for pet owners or businesses." })
                ] })
              }
            ),
            /* @__PURE__ */ s("div", { className: "md:hidden mx-auto flex justify-center mb-2", children: /* @__PURE__ */ s(
              "button",
              {
                onClick: () => t?.("about"),
                style: {
                  padding: "8px 16px",
                  background: "linear-gradient(to right, #9333ea, #ec4899)",
                  borderRadius: "9999px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  cursor: "pointer"
                },
                children: /* @__PURE__ */ s("span", { style: {
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "600",
                  WebkitTextFillColor: "white",
                  display: "block"
                }, children: "Serving Darlington + Florence ▸" })
              }
            ) }),
            /* @__PURE__ */ s("div", { className: "md:hidden text-center mb-5", children: /* @__PURE__ */ s("p", { style: {
              fontSize: "12px",
              color: "#6B7280",
              fontWeight: "400"
            }, children: "Tap to learn more + browse services" }) }),
            /* @__PURE__ */ s("div", { className: "md:hidden text-center mb-2.5", style: { display: "none" }, children: /* @__PURE__ */ s("p", { style: {
              fontSize: "12px",
              fontWeight: "600",
              color: "#4B5563",
              letterSpacing: "0"
            }, children: "Tap a service to browse" }) }),
            /* @__PURE__ */ s(
              D.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                className: "md:hidden mb-10 flex justify-center gap-4",
                style: { display: "none" },
                children: [
                  { icon: "scissors", page: "grooming", label: "Grooming" },
                  { icon: "bowl", page: "training", label: "Training" },
                  { icon: "house", page: "boarding", label: "Boarding" },
                  { icon: "vet", page: "vet", label: "Vet" }
                ].map((p, m) => /* @__PURE__ */ d(
                  D.div,
                  {
                    className: "flex flex-col items-center",
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.6 + m * 0.1, type: "spring" },
                    children: [
                      /* @__PURE__ */ s(
                        D.button,
                        {
                          onClick: () => {
                            const f = new Audio("http://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3");
                            f.volume = 0.5, f.play().catch((v) => console.log("Audio play failed:", v)), t?.(p.page);
                          },
                          whileHover: { scale: 1.1 },
                          whileTap: { scale: 0.95 },
                          className: "w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center cursor-pointer",
                          style: {
                            boxShadow: window.innerWidth < 768 ? "0 3px 10px rgba(0, 0, 0, 0.10)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                          },
                          children: /* @__PURE__ */ s(Tn, { type: p.icon, className: "w-8 h-8 md:w-10 md:h-10" })
                        }
                      ),
                      /* @__PURE__ */ s("span", { style: {
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#4B5563",
                        marginTop: "6px"
                      }, children: p.label })
                    ]
                  },
                  p.page
                ))
              }
            ),
            /* @__PURE__ */ d(
              D.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.7 },
                onClick: () => {
                  window.innerWidth < 768 && t?.("about");
                },
                className: "relative w-full rounded-2xl overflow-hidden md:shadow-[0_10px_80px_20px_rgba(125,211,252,0.7),0_15px_120px_40px_rgba(125,211,252,0.5),0_20px_160px_60px_rgba(125,211,252,0.3),0_0_2px_2px_rgba(147,51,234,1),0_0_8px_3px_rgba(147,51,234,0.9),0_0_16px_4px_rgba(147,51,234,0.6)] md:cursor-default cursor-pointer active:opacity-90",
                style: {
                  backgroundColor: "#ffffff",
                  boxShadow: window.innerWidth < 768 ? "0 6px 10px -3px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.06)" : void 0
                },
                children: [
                  /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row items-center", style: typeof window !== "undefined" && window.innerWidth >= 768 ? { alignItems: "stretch" } : void 0, children: [
                    typeof window !== "undefined" && window.innerWidth >= 768 ? /* @__PURE__ */ s("div", { className: "flex-1 w-full min-w-0 self-stretch flex", children: /* @__PURE__ */ d("picture", { className: "w-full h-[16rem] flex-1 flex", style: { height: "100%" }, children: [
                      /* @__PURE__ */ s("source", { media: "(min-width: 768px)", srcSet: "/images/home/hero-dog.jpg" }),
                      /* @__PURE__ */ s(
                        "img",
                        {
                          src: "/images/home/hero-dog-mobile.jpg",
                          alt: "Happy dog on the lawn",
                          className: "w-full h-full object-cover object-top",
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            display: "block"
                          }
                        }
                      )
                    ] }) }) : /* @__PURE__ */ s(
                      "img",
                      {
                        src: "/images/home/hero-dog-mobile.jpg",
                        alt: "Happy dog on the lawn",
                        className: "flex-1 h-[16rem] object-contain object-top"
                      }
                    ),
                    /* @__PURE__ */ s("div", { className: "flex-1 px-6 md:px-12 pt-6 md:pt-8 pb-7 md:pb-8 flex items-center justify-center", children: /* @__PURE__ */ d("div", { className: "text-purple-600 leading-loose text-center", children: [
                      /* @__PURE__ */ d("h2", { className: "mb-3 md:mb-6 text-2xl md:text-4xl font-bold", children: [
                        "Find local pet care providers",
                        /* @__PURE__ */ s("br", {}),
                        "all in one place!"
                      ] }),
                      /* @__PURE__ */ d("p", { className: "leading-loose text-base md:text-lg hidden md:block", children: [
                        "A free directory of trusted",
                        /* @__PURE__ */ s("br", {}),
                        "groomers, trainers, boarders,",
                        /* @__PURE__ */ s("br", {}),
                        "sitters, and vets serving",
                        /* @__PURE__ */ s("br", {}),
                        "the Pee Dee region."
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "hidden md:block bg-white px-12 py-6 border-t border-gray-200", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-6 max-w-5xl mx-auto", children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-4 flex-1", children: [
                      /* @__PURE__ */ s("label", { className: "text-gray-700 whitespace-nowrap", children: "Service Type:" }),
                      /* @__PURE__ */ d(
                        "select",
                        {
                          value: o,
                          onChange: (p) => a(p.target.value),
                          className: "flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none bg-white text-gray-800 transition-colors",
                          children: [
                            /* @__PURE__ */ s("option", { value: "", children: "Select a service..." }),
                            /* @__PURE__ */ s("option", { value: "grooming", children: "Grooming" }),
                            /* @__PURE__ */ s("option", { value: "training", children: "Training" }),
                            /* @__PURE__ */ s("option", { value: "boarding", children: "Boarding & Daycare" }),
                            /* @__PURE__ */ s("option", { value: "sitters", children: "Sitters & Walkers" }),
                            /* @__PURE__ */ s("option", { value: "vet", children: "Vet Care" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-4 flex-1", children: [
                      /* @__PURE__ */ s("label", { className: "text-gray-700 whitespace-nowrap", children: "Location:" }),
                      /* @__PURE__ */ d(
                        "select",
                        {
                          value: l,
                          onChange: (p) => c(p.target.value),
                          className: "flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none bg-white text-gray-800 transition-colors",
                          children: [
                            /* @__PURE__ */ s("option", { value: "", children: "All" }),
                            /* @__PURE__ */ s("option", { value: "hartsville", children: "Hartsville" }),
                            /* @__PURE__ */ s("option", { value: "darlington", children: "Darlington" }),
                            /* @__PURE__ */ s("option", { value: "florence", children: "Florence" }),
                            /* @__PURE__ */ s("option", { value: "mobile", children: "Mobile" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d(
                      D.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        onClick: h,
                        disabled: !o,
                        className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap",
                        children: [
                          /* @__PURE__ */ s(mr, { className: "w-5 h-5" }),
                          "Search"
                        ]
                      }
                    )
                  ] }) })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ s("div", { className: "hidden md:block", children: [0, 1, 2, 3, 4].map((p) => {
            const m = u[p % u.length], v = [60, 140, 90, 170, 110][p], b = [0, 5.5, 10.2, 16.5, 21.8][p];
            return /* @__PURE__ */ s(
              qs,
              {
                type: m,
                delay: b,
                position: "left",
                offset: v,
                index: p,
                globalTime: n
              },
              `left-${p}`
            );
          }) }),
          /* @__PURE__ */ s("div", { className: "hidden md:block", children: [0, 1, 2, 3, 4].map((p) => {
            const m = u[(p + 3) % u.length], v = [100, 150, 70, 130, 180][p], b = [2.8, 7.9, 13.4, 18.6, 24.2][p];
            return /* @__PURE__ */ s(
              qs,
              {
                type: m,
                delay: b,
                position: "right",
                offset: v,
                index: p,
                globalTime: n
              },
              `right-${p}`
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: "px-4 md:px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s(
      "section",
      {
        className: "pt-6 pb-4 md:py-16 rounded-t-[32px] rounded-b-[32px] md:rounded-none overflow-hidden md:overflow-visible",
        style: {
          background: window.innerWidth < 768 ? "linear-gradient(to bottom, rgba(239, 246, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" : "linear-gradient(to bottom, #F3FAFF 0%, #FAF5FF 100%)"
        },
        children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto px-4 md:px-0", children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: "md:hidden w-[84%] h-px mx-auto mt-[32px] mb-[52px]",
              style: {
                background: "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.08) 15%, rgba(0, 0, 0, 0.08) 85%, transparent 100%)",
                display: "none"
              }
            }
          ),
          /* @__PURE__ */ d(
            D.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: !0 },
              className: "text-center mb-8 md:mb-12 relative",
              children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: "md:hidden absolute inset-0 pointer-events-none",
                    style: {
                      background: window.innerWidth < 768 ? "transparent" : "radial-gradient(ellipse 280px 60px at center, rgba(243, 250, 255, 0.6) 0%, transparent 70%)",
                      filter: "blur(8px)",
                      top: "-10px",
                      display: window.innerWidth < 768 ? "none" : "block"
                    }
                  }
                ),
                /* @__PURE__ */ s("h2", { className: "text-purple-600 mb-3 md:mb-4 text-2xl md:text-4xl relative", children: "Why Use Our Directory?" }),
                /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed relative", children: "Compare local providers side by side — without jumping between a dozen websites." })
              ]
            }
          ),
          /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-3 md:grid md:grid-cols-3 md:gap-8", children: [
            { icon: "🔍", title: "Easy to Find", description: "Every category in one place — filter by service type or town" },
            { icon: "⭐", title: "Trusted Reviews", description: "Real feedback from pet owners who've used these providers" },
            { icon: "📍", title: "Local Focus", description: "Independent Pee Dee businesses, not a national chain directory" }
          ].map((p, m) => /* @__PURE__ */ s(
            D.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              transition: { delay: m * 0.2 },
              className: "w-[93%] md:w-auto p-4 md:p-8 bg-white rounded-[20px] md:rounded-2xl md:shadow-lg",
              style: {
                boxShadow: window.innerWidth < 768 ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" : void 0
              },
              children: /* @__PURE__ */ d("div", { className: "grid md:flex md:flex-col grid-cols-[28px_1fr] md:grid-cols-1 gap-3 md:gap-0 items-start md:items-center", children: [
                /* @__PURE__ */ s("div", { className: "flex-shrink-0 md:mb-4", children: /* @__PURE__ */ s(
                  D.div,
                  {
                    animate: { rotate: [0, 10, -10, 0] },
                    transition: { duration: 2, repeat: 1 / 0, repeatDelay: 3 },
                    style: { fontSize: window.innerWidth < 768 ? "24px" : "60px" },
                    children: p.icon
                  }
                ) }),
                /* @__PURE__ */ d("div", { className: "flex flex-col md:text-center", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 font-semibold text-left md:text-center mb-1 md:mb-2", children: p.title }),
                  /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base leading-relaxed text-left md:text-center", children: p.description })
                ] })
              ] })
            },
            p.title
          )) }),
          /* @__PURE__ */ s(
            D.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.15 },
              className: "max-w-3xl mx-auto mt-10 md:mt-14 px-2 text-center",
              children: /* @__PURE__ */ d("div", { className: "space-y-4", children: [
                /* @__PURE__ */ s("h3", { className: "text-purple-700 text-lg md:text-xl font-semibold leading-snug", children: "Built for pet owners in the Pee Dee" }),
                /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base leading-relaxed", children: "Need a dog groomer in Florence, a trainer in Hartsville, or boarding while you're away? We list local providers across Darlington County and the greater Florence area — so you can see who's nearby, what they offer, and what other owners have to say." }),
                /* @__PURE__ */ s("p", { className: "text-gray-500 text-xs md:text-sm leading-relaxed", children: "From routine wellness to a last-minute sitter, start here. Free to browse, free to list." })
              ] })
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ d("div", { className: "px-4 md:px-0 md:pb-0 mt-10 md:mt-0", children: [
      /* @__PURE__ */ s("section", { className: "py-7 px-5 md:py-20 md:px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl md:rounded-none", children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden", children: [
            /* @__PURE__ */ s("h2", { className: "mb-4", children: "Retail therapy for your pet" }),
            /* @__PURE__ */ s("p", { className: "mb-8", style: { lineHeight: "1.4" }, children: "Thoughtfully picked products your furry friend will love" }),
            /* @__PURE__ */ s(
              D.button,
              {
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                onClick: () => t?.("products"),
                className: "px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow",
                children: "See our picks"
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block", children: [
            /* @__PURE__ */ s("h2", { className: "mb-4", children: "Retail therapy for your pet" }),
            /* @__PURE__ */ s("p", { className: "mb-8", children: "Thoughtfully picked products your furry friend will love" }),
            /* @__PURE__ */ s(
              D.button,
              {
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.95 },
                onClick: () => t("products"),
                className: "px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow",
                children: "See our picks"
              }
            )
          ] })
        ]
      }
    ) }) }),
      /* @__PURE__ */ s("div", { className: "md:hidden flex items-center justify-center text-[10px] text-purple-500/70 tracking-wide text-center", style: { marginTop: "1.5rem", marginBottom: "0.75rem" }, children: e0 != null ? `${e0.toLocaleString()} visits and counting` : "" }),
      /* @__PURE__ */ s("div", { className: "md:hidden flex items-center justify-center", style: { gap: "18px", marginTop: "1rem", marginBottom: "0.875rem" }, children: [
        /* @__PURE__ */ s(
          "a",
          {
            href: "https://www.youtube.com/@peedeepetcare",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "YouTube",
            className: "inline-flex items-center justify-center rounded-full text-white transition-transform active:scale-95",
            style: {
              width: "2.75rem",
              height: "2.75rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
              boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
            },
            children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 20, height: 20, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) })
          }
        ),
        /* @__PURE__ */ s(
          "a",
          {
            href: "https://www.facebook.com/peedeepetcare/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Facebook",
            className: "inline-flex items-center justify-center rounded-full text-white transition-transform active:scale-95",
            style: {
              width: "2.75rem",
              height: "2.75rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
              boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
            },
            children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 20, height: 20, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
          }
        ),
        /* @__PURE__ */ s(
          "a",
          {
            href: "#",
            "aria-label": "Instagram",
            className: "inline-flex items-center justify-center rounded-full text-white transition-transform active:scale-95",
            style: {
              width: "2.75rem",
              height: "2.75rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
              boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
            },
            children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 20, height: 20, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }) })
          }
        ),
        /* @__PURE__ */ s(
          "a",
          {
            href: "#",
            "aria-label": "TikTok",
            className: "inline-flex items-center justify-center rounded-full text-white transition-transform active:scale-95",
            style: {
              width: "2.75rem",
              height: "2.75rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
              boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
            },
            children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 20, height: 20, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 0012.68 0V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" }) })
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "md:hidden text-center px-4", style: { marginBottom: "0.875rem" }, children: [
        /* @__PURE__ */ d("p", { className: "text-xs text-purple-600/90", children: [
          "Questions? Email us at ",
          /* @__PURE__ */ s("a", { href: "mailto:hello@peedeepetcare.com", className: "text-purple-700 hover:text-purple-900 underline underline-offset-2", children: "hello@peedeepetcare.com" })
        ] })
      ] })
    ] })
  ] });
}
class qm {
  constructor() {
    this.prefix = "pawsitively_";
  }
  getDeletedBusinessIds(e) {
    const r = `${this.prefix}deleted_businesses_${e}`, n = localStorage.getItem(r);
    try {
      return new Set(n ? JSON.parse(n) : []);
    } catch {
      return new Set();
    }
  }
  markBusinessDeleted(e, r) {
    const n = this.getDeletedBusinessIds(r);
    n.add(e);
    const i = `${this.prefix}deleted_businesses_${r}`;
    localStorage.setItem(i, JSON.stringify([...n]));
  }
  unmarkBusinessDeleted(e, r) {
    const n = this.getDeletedBusinessIds(r);
    n.delete(e);
    const i = `${this.prefix}deleted_businesses_${r}`;
    localStorage.setItem(i, JSON.stringify([...n]));
  }
  // Businesses
  getBusinessesByCategory(e) {
    const r = `${this.prefix}businesses_${e}`, n = localStorage.getItem(r), i = n ? JSON.parse(n) : [], o = this.getDeletedBusinessIds(e);
    return i.filter((a) => !o.has(a.id));
  }
  saveBusiness(e) {
    console.log("💾 saveBusiness called for:", e.name), console.log("   - Has userEdited flag:", e.userEdited);
    const rDeleted = this.getDeletedBusinessIds(e.category);
    if (rDeleted.has(e.id) && !e.userEdited) {
      console.log("🛑 BLOCKING seed restore for deleted business:", e.name);
      return;
    }
    e.userEdited && rDeleted.has(e.id) && this.unmarkBusinessDeleted(e.id, e.category);
    const r = this.getBusinessesByCategory(e.category), n = r.findIndex((a) => a.id === e.id);
    if (n >= 0) {
      const a = r[n];
      if (console.log("   - Found existing business. existing.userEdited:", a.userEdited), console.log("   - Incoming business.userEdited:", e.userEdited), a.userEdited && !e.userEdited) {
        console.log("🔒 PRESERVING user-edited business (BLOCKING seed overwrite):", e.name);
        return;
      }
      r[n] = e, console.log("📝 UPDATING existing business:", e.name);
    } else
      r.push(e), console.log("➕ ADDING new business:", e.name);
    const i = `${this.prefix}businesses_${e.category}`;
    localStorage.setItem(i, JSON.stringify(r)), console.log("✅ Business saved to localStorage. Total in category:", r.length);
    const o = localStorage.getItem(i);
    if (!o)
      console.error("❌ FAILED to save business to localStorage!");
    else {
      const a = JSON.parse(o).find((l) => l.id === e.id);
      console.log("✅ Verification - business in localStorage with userEdited:", a?.userEdited);
    }
  }
  deleteBusiness(e, r) {
    const i = this.getBusinessesByCategory(r).filter((a) => a.id !== e), o = `${this.prefix}businesses_${r}`;
    localStorage.setItem(o, JSON.stringify(i)), this.markBusinessDeleted(e, r);
  }
  getBusiness(e) {
    const r = ["grooming", "training", "boarding", "sitters", "vet"];
    for (const n of r) {
      const o = this.getBusinessesByCategory(n).find((a) => a.id === e);
      if (o) return o;
    }
    return null;
  }
  // Reviews
  getReviews(e) {
    const r = `${this.prefix}reviews_${e}`, n = localStorage.getItem(r);
    return n ? JSON.parse(n) : [];
  }
  addReview(e) {
    const r = this.getReviews(e.businessId);
    r.push(e);
    const n = `${this.prefix}reviews_${e.businessId}`;
    localStorage.setItem(n, JSON.stringify(r));
  }
  deleteReview(e) {
    const r = ["grooming", "training", "boarding", "sitters", "vet"];
    for (const n of r) {
      const i = this.getBusinessesByCategory(n);
      for (const o of i) {
        const a = this.getReviews(o.id), l = a.filter((c) => c.id !== e);
        if (l.length !== a.length) {
          const c = `${this.prefix}reviews_${o.id}`;
          localStorage.setItem(c, JSON.stringify(l));
          return;
        }
      }
    }
  }
  updateReview(e) {
    if (!e?.businessId || !e?.id)
      return;
    const r = this.getReviews(e.businessId), n = r.findIndex((i) => i.id === e.id);
    n >= 0 ? r[n] = e : r.push(e), localStorage.setItem(`${this.prefix}reviews_${e.businessId}`, JSON.stringify(r));
  }
  // Users
  getUser(e) {
    const r = `${this.prefix}user_${e}`, n = localStorage.getItem(r);
    return n ? JSON.parse(n) : null;
  }
  saveUser(e) {
    const r = `${this.prefix}user_${e.id}`;
    localStorage.setItem(r, JSON.stringify(e));
  }
  getUserByEmail(e) {
    const n = Object.keys(localStorage).filter((i) => i.startsWith(`${this.prefix}user_`));
    for (const i of n) {
      const o = localStorage.getItem(i);
      if (o) {
        const a = JSON.parse(o);
        if (a.email === e)
          return a;
      }
    }
    return null;
  }
  // Favorites
  getFavorites(e) {
    const r = `${this.prefix}favorites_${e}`, n = localStorage.getItem(r);
    return n ? JSON.parse(n) : [];
  }
  saveFavorites(e, r) {
    const n = `${this.prefix}favorites_${e}`;
    localStorage.setItem(n, JSON.stringify(r));
  }
  // Business ownership
  getBusinessOwner(e) {
    const r = `${this.prefix}owner_${e}`;
    return localStorage.getItem(r);
  }
  setBusinessOwner(e, r) {
    const n = `${this.prefix}owner_${e}`;
    localStorage.setItem(n, r);
  }
  getUserBusiness(e) {
    const r = `${this.prefix}business_owner_${e}`;
    return localStorage.getItem(r);
  }
  setUserBusiness(e, r) {
    const n = `${this.prefix}business_owner_${e}`;
    localStorage.setItem(n, r);
  }
}
const ce = new qm(), Km = "REDACTED_AIRTABLE_TOKEN", Ym = "app0120M8RAwOR635", Xm = "tblM97NVRfmIPsxTh", st = `https://api.airtable.com/v0/${Ym}/${Xm}`, ot = {
  Authorization: `Bearer ${Km}`,
  "Content-Type": "application/json"
};
function cloudWriteHeaders() {
  const t = localStorage.getItem("accessToken");
  return t ? { ...ot, "X-Pawsitively-Session": t } : ot;
}
function Zm(t) {
  const { photos: e, _airtableId: r, _fromCloud: n, ...i } = t;
  return {
    name: t.name || "",
    price: `BUSINESS:${t.category}`,
    about: JSON.stringify(i),
    whyWeLoveIt: t.id,
    photos: Array.isArray(e) ? e.join(",") : e || ""
  };
}
function Jm(t) {
  try {
    const e = JSON.parse(t.fields.about || "{}"), r = t.fields.photos || "", n = r ? r.split(",").map((i) => i.trim()).filter(Boolean) : [], i = Array.isArray(e.paymentMethods) ? e.paymentMethods.filter((o) => o !== "Digital Wallet") : e.paymentMethods;
    return { ...e, paymentMethods: i, photos: n, _airtableId: t.id };
  } catch {
    return null;
  }
}
async function Qm(t) {
  try {
    const e = encodeURIComponent(`{price}="BUSINESS:${t}"`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: ot });
    return r.ok ? ((await r.json()).records || []).map(Jm).filter(Boolean) : (console.error("Airtable fetch failed:", r.status, await r.text()), []);
  } catch (e) {
    return console.error("fetchCloudBusinesses error:", e), [];
  }
}
async function fetchCloudDeletedBusinessIds(t) {
  try {
    const e = encodeURIComponent(`AND({price}="BUSINESS:DELETED",{name}="${t}")`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: ot });
    if (!r.ok)
      return [];
    const n = (await r.json()).records || [];
    return n.map((i) => {
      try {
        const o = JSON.parse(i.fields.about || "{}");
        return o.targetId || "";
      } catch {
        return "";
      }
    }).filter(Boolean);
  } catch (e) {
    return console.error("fetchCloudDeletedBusinessIds error:", e), [];
  }
}
function reviewToCloudFields(t) {
  return {
    name: t.businessId || "",
    price: `REVIEW:${t.businessId}`,
    about: JSON.stringify(t),
    whyWeLoveIt: t.id,
    photos: ""
  };
}
function cloudRecordToReview(t) {
  try {
    const e = JSON.parse(t.fields.about || "{}");
    if (!e || typeof e != "object")
      return null;
    return { ...e, id: e.id || t.fields.whyWeLoveIt || t.id, businessId: e.businessId || t.fields.name || "" };
  } catch {
    return null;
  }
}
async function fetchCloudReviewsForBusiness(t) {
  try {
    const e = encodeURIComponent(`{price}="REVIEW:${t}"`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: ot });
    if (!r.ok)
      return [];
    const n = (await r.json()).records || [];
    return n.map(cloudRecordToReview).filter((i) => i && i.businessId === t);
  } catch (e) {
    return console.error("fetchCloudReviews error:", e), [];
  }
}
async function saveCloudReviewRecord(t) {
  try {
    const e = encodeURIComponent(`{whyWeLoveIt}="${t.id}"`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: ot });
    if (!r.ok)
      return { success: !1, error: "Could not reach Airtable to check for existing review." };
    const n = (await r.json()).records?.[0], i = reviewToCloudFields(t);
    let o;
    if (n ? o = await fetch(`${st}/${n.id}`, {
      method: "PATCH",
      headers: cloudWriteHeaders(),
      body: JSON.stringify({ fields: i })
    }) : o = await fetch(st, {
      method: "POST",
      headers: cloudWriteHeaders(),
      body: JSON.stringify({ fields: i })
    }), !o.ok) {
      const a = await o.text();
      return console.error("saveCloudReview failed:", o.status, a), { success: !1, error: `Airtable error (${o.status})` };
    }
    return { success: !0 };
  } catch (e) {
    return console.error("saveCloudReview error:", e), { success: !1, error: e?.message || "Failed to save cloud review" };
  }
}
async function deleteCloudReviewRecord(t) {
  try {
    const e = encodeURIComponent(`{whyWeLoveIt}="${t}"`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: ot });
    if (!r.ok)
      return { success: !1, error: "Could not reach Airtable to find review record." };
    const n = (await r.json()).records || [];
    if (n.length === 0)
      return { success: !0, deletedCount: 0 };
    const i = await Promise.all(
      n.map(async (o) => {
        const a = await fetch(`${st}/${o.id}`, { method: "DELETE", headers: ot });
        return a.ok;
      })
    ), o = i.filter(Boolean).length;
    return o === n.length ? { success: !0, deletedCount: o } : { success: !1, error: `Only deleted ${o}/${n.length} cloud review records` };
  } catch (e) {
    return console.error("deleteCloudReviewRecord error:", e), { success: !1, error: e?.message || "Failed to delete cloud review" };
  }
}
async function ef(t) {
  try {
    const e = encodeURIComponent(`{whyWeLoveIt}="${t.id}"`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: cloudWriteHeaders() });
    if (!r.ok)
      return { success: !1, error: "Could not reach Airtable to check for existing record." };
    const i = (await r.json()).records?.[0], o = Zm(t);
    let a;
    if (i ? a = await fetch(`${st}/${i.id}`, {
      method: "PATCH",
      headers: cloudWriteHeaders(),
      body: JSON.stringify({ fields: o })
    }) : a = await fetch(st, {
      method: "POST",
      headers: cloudWriteHeaders(),
      body: JSON.stringify({ fields: o })
    }), !a.ok) {
      const l = await a.text();
      return a.status === 403 ? (console.error("Airtable save denied:", l), { success: !1, error: "Permission denied. Please log out and log in again, then retry." }) : (console.error("Airtable save failed:", a.status, l), { success: !1, error: `Airtable error (${a.status}): ${l}` });
    }
    return { success: !0 };
  } catch (e) {
    return console.error("saveCloudBusiness error:", e), { success: !1, error: e?.message || "Network error saving to cloud." };
  }
}
async function markCloudBusinessDeleted(t, e) {
  try {
    const r = `DELETED:${e}:${t}`, n = encodeURIComponent(`{whyWeLoveIt}="${r}"`), i = await fetch(`${st}?filterByFormula=${n}`, { headers: ot });
    if (!i.ok)
      return { success: !1, error: "Could not reach Airtable to save deletion marker." };
    const o = (await i.json()).records?.[0], a = {
      name: e,
      price: "BUSINESS:DELETED",
      about: JSON.stringify({ category: e, targetId: t }),
      whyWeLoveIt: r,
      photos: ""
    };
    let l;
    if (o ? l = await fetch(`${st}/${o.id}`, {
      method: "PATCH",
      headers: ot,
      body: JSON.stringify({ fields: a })
    }) : l = await fetch(st, {
      method: "POST",
      headers: ot,
      body: JSON.stringify({ fields: a })
    }), !l.ok) {
      const c = await l.text();
      return console.error("markCloudBusinessDeleted failed:", l.status, c), { success: !1, error: `Airtable error (${l.status})` };
    }
    return { success: !0 };
  } catch (r) {
    return console.error("markCloudBusinessDeleted error:", r), { success: !1, error: r?.message || "Failed to mark cloud deletion" };
  }
}
async function tf(t) {
  try {
    const e = encodeURIComponent(`{whyWeLoveIt}="${t}"`), r = await fetch(`${st}?filterByFormula=${e}`, { headers: cloudWriteHeaders() });
    if (!r.ok) {
      const n = await r.text();
      return console.error("deleteCloudBusiness lookup failed:", r.status, n), { success: !1, error: `Airtable lookup failed (${r.status})` };
    }
    const i = (await r.json()).records || [];
    if (i.length === 0)
      return { success: !0, deletedCount: 0 };
    const o = await Promise.all(
      i.map(async (n) => {
        const a = await fetch(`${st}/${n.id}`, { method: "DELETE", headers: cloudWriteHeaders() });
        if (!a.ok) {
          const l = await a.text();
          return console.error("deleteCloudBusiness delete failed:", a.status, l), !1;
        }
        return !0;
      })
    ), a = o.filter(Boolean).length;
    return a === i.length ? { success: !0, deletedCount: a } : { success: !1, error: `Only deleted ${a}/${i.length} matching cloud records` };
  } catch (e) {
    return console.error("deleteCloudBusiness error:", e), { success: !1, error: e?.message || "Cloud delete failed" };
  }
}
const REVIEW_SPAM_GUARD_KEY = "pawsitively_review_spam_guard", REVIEW_COOLDOWN_MS = 5 * 60 * 1e3, REVIEW_DAILY_BUSINESS_LIMIT = 3, REVIEW_DAILY_GLOBAL_LIMIT = 10, REVIEW_MIN_COMMENT_LENGTH = 10, REVIEW_MAX_COMMENT_LENGTH = 2e3;
function getReviewSpamGuard() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_SPAM_GUARD_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveReviewSpamGuard(t) {
  localStorage.setItem(REVIEW_SPAM_GUARD_KEY, JSON.stringify(t));
}
function validateGuestReviewSubmission(t, e, r) {
  const n = String(e || "").trim(), i = String(r || "").trim();
  if (n.length < REVIEW_MIN_COMMENT_LENGTH)
    return { ok: !1, message: `Please write at least ${REVIEW_MIN_COMMENT_LENGTH} characters in your review.` };
  if (n.length > REVIEW_MAX_COMMENT_LENGTH)
    return { ok: !1, message: `Please keep your review under ${REVIEW_MAX_COMMENT_LENGTH} characters.` };
  if (/(.)\1{8,}/.test(n))
    return { ok: !1, message: "Your review looks repetitive. Please share a genuine experience." };
  if ((n.match(/https?:\/\/|www\./gi) || []).length > 2)
    return { ok: !1, message: "Please avoid adding multiple links in your review." };
  if ((ce.getReviews(t) || []).some((a) => String(a.comment || "").trim().toLowerCase() === n.toLowerCase() && String(a.userName || "").trim().toLowerCase() === i.toLowerCase()))
    return { ok: !1, message: "You already submitted this review for this business." };
  const o = Date.now(), a = o - 864e5, l = getReviewSpamGuard(), c = (l.byBusiness?.[t] || []).filter((u) => u > a), h = (l.global || []).filter((u) => u > a);
  return c.length > 0 && o - c[c.length - 1] < REVIEW_COOLDOWN_MS ? { ok: !1, message: "Please wait a few minutes before submitting another review for this business." } : c.length >= REVIEW_DAILY_BUSINESS_LIMIT ? { ok: !1, message: "You've reached today's review limit for this business. Please try again tomorrow." } : h.length >= REVIEW_DAILY_GLOBAL_LIMIT ? { ok: !1, message: "You've submitted too many reviews today. Please try again tomorrow." } : { ok: !0 };
}
function recordGuestReviewSubmission(t) {
  const e = Date.now(), r = e - 864e5, n = getReviewSpamGuard();
  n.byBusiness = n.byBusiness || {}, n.byBusiness[t] = [...(n.byBusiness[t] || []).filter((i) => i > r), e], n.global = [...(n.global || []).filter((i) => i > r), e], saveReviewSpamGuard(n);
}
const Oe = {
  async isServerAvailable() {
    return !1;
  },
  async getBusinesses(t) {
    const e = await Qm(t), r = ce.getBusinessesByCategory(t), n = {}, deletedIds = ce.getDeletedBusinessIds(t), cloudDeleted = new Set(await fetchCloudDeletedBusinessIds(t));
    if (t === "grooming" && deletedIds.size === 0) {
      const legacyGroomingIds = Array.from({ length: 30 }, (c, u) => `business-${String(u + 1).padStart(3, "0")}`), localIds = new Set(r.map((c) => c.id)), hasLegacySeedShape = r.length === 0 || r.some((c) => /^business-\d{3}$/.test(c.id));
      if (hasLegacySeedShape) {
        const missingLegacyIds = legacyGroomingIds.filter((c) => !localIds.has(c));
        if (missingLegacyIds.length > 0) {
          for (const c of missingLegacyIds)
            ce.markBusinessDeleted(c, t), deletedIds.add(c);
          await Promise.all(
            missingLegacyIds.map(async (c) => {
              try {
                const u = await markCloudBusinessDeleted(c, t);
                u?.success && cloudDeleted.add(c);
              } catch (u) {
                console.warn("Error backfilling legacy grooming deletion marker:", c, u);
              }
            })
          );
        }
      }
    }
    await Promise.all(
      [...deletedIds].map(async (l) => {
        if (cloudDeleted.has(l))
          return;
        try {
          const c = await markCloudBusinessDeleted(l, t);
          c?.success ? cloudDeleted.add(l) : console.warn("Failed to backfill cloud deletion marker:", l, c?.error);
        } catch (c) {
          console.warn("Error backfilling cloud deletion marker:", l, c);
        }
      })
    );
    for (const l of e)
      n[l.id] = l;
    const i = [], o = /* @__PURE__ */ new Set();
    for (const l of r)
      n[l.id] ? i.push({ ...n[l.id], _fromCloud: !0 }) : i.push(l), o.add(l.id);
    for (const l of e)
      o.has(l.id) || i.push({ ...l, _fromCloud: !0 });
    return { businesses: i.filter((l) => !deletedIds.has(l.id) && !cloudDeleted.has(l.id)).map((l) => {
      const c = ce.getBusinessOwner(l.id);
      return { ...l, ownerId: c || l.ownerId || void 0 };
    }) };
  },
  async saveBusiness(t, e) {
    const n = localStorage.getItem("user"), o = n ? JSON.parse(n) : null;
    if (!t.id && !o?.isAdmin)
      throw new Error("Only admin can add new business listings.");
    const r = {
      ...t,
      id: t.id || crypto.randomUUID(),
      createdAt: t.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userEdited: !0
    };
    if (o) {
      r.ownerId = o.id, r.ownerEmail = o.email, r.ownerName = o.name, ce.setBusinessOwner(r.id, o.id), ce.setUserBusiness(o.id, r.id);
    }
    ce.saveBusiness(r);
    const i = await ef(r);
    return i.success ? { success: !0, business: r } : i.error && i.error.includes("Permission denied") ? (console.warn("Cloud save denied:", i.error), { success: !1, error: i.error, business: r }) : (console.warn("Airtable sync failed — saved locally only:", i.error), { success: !0, business: r, cloudWarning: "Saved locally, but could not sync to shared storage. Other browsers may not see this yet." });
  },
  async deleteBusiness(t, e) {
    const r = await tf(t), n = await markCloudBusinessDeleted(t, e);
    return r.success || console.warn("Cloud delete failed; keeping local deletion only:", r.error), n.success || console.warn("Cloud deletion marker failed:", n.error), ce.deleteBusiness(t, e), { success: !0, message: "Business deleted successfully", cloudWarning: [r.success ? null : r.error, n.success ? null : n.error].filter(Boolean).join(" | ") || void 0 };
  },
  async getReviews(t) {
    const e = ce.getReviews(t) || [], r = await fetchCloudReviewsForBusiness(t), n = new Set(r.map((a) => a.id).filter(Boolean)), i = e.filter((a) => a?.id && !n.has(a.id));
    await Promise.all(
      i.map(async (a) => {
        try {
          await saveCloudReviewRecord(a);
        } catch (l) {
          console.warn("Failed to backfill cloud review:", a?.id, l);
        }
      })
    );
    const o = /* @__PURE__ */ new Map();
    [...r, ...e].forEach((a) => {
      a?.id && o.set(a.id, a);
    });
    return { reviews: [...o.values()].sort((a, l) => new Date(l.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()) };
  },
  async addReview(t, e, r, n, i) {
    const o = localStorage.getItem("user"), a = o ? JSON.parse(o) : null, c = !!(i && a?.isAdmin);
    if (!c) {
      const h = validateGuestReviewSubmission(t, r, i || a?.name || "");
      if (!h.ok)
        throw new Error(h.message);
    }
    const l = {
      id: crypto.randomUUID(),
      businessId: t,
      userId: a?.isAdmin && i ? `admin-${a?.id || "anonymous"}` : a?.id || (i ? `guest-${crypto.randomUUID().slice(0, 8)}` : "anonymous"),
      userName: i || a?.name || "Anonymous",
      rating: e,
      comment: r,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isAdminReview: c
    };
    ce.addReview(l), c || recordGuestReviewSubmission(t);
    const u = await saveCloudReviewRecord(l);
    return u.success ? { success: !0, review: l } : { success: !0, review: l, cloudWarning: u.error || "Saved locally, but cloud sync failed." };
  },
  async deleteReview(t) {
    const e = localStorage.getItem("user"), r = e ? JSON.parse(e) : null;
    if (!r?.isAdmin)
      throw new Error("Admin access required to delete reviews.");
    const n = await deleteCloudReviewRecord(t);
    return n.success || console.warn("Cloud review delete failed; keeping local deletion only:", n.error), ce.deleteReview(t), { success: !0, message: "Review deleted successfully", cloudWarning: n.success ? void 0 : n.error };
  },
  async respondToReview(t, e) {
    const r = localStorage.getItem("user"), n = r ? JSON.parse(r) : null;
    if (!n)
      throw new Error("Please log in to respond to reviews.");
    const i = String(e || "").trim();
    if (!i)
      throw new Error("Please enter a response.");
    const o = {
      ...t,
      ownerResponse: i,
      ownerResponseAt: (/* @__PURE__ */ new Date()).toISOString(),
      ownerResponseBy: n.id
    };
    ce.updateReview(o);
    const a = await saveCloudReviewRecord(o);
    return a.success ? { success: !0, review: o } : { success: !1, error: a.error || "Could not save your response.", review: o };
  },
  async requestBusinessLink(t, e) {
    const r = localStorage.getItem("accessToken");
    if (!r)
      throw new Error("Please log in first.");
    const n = await fetch("/api/claims", {
      method: "POST",
      headers: { Authorization: `Bearer ${r}`, "Content-Type": "application/json" },
      body: JSON.stringify({ businessId: t, message: e || "" })
    }), i = await n.json().catch(() => ({}));
    if (!n.ok)
      throw new Error(i.error || "Could not submit link request.");
    return i;
  },
  async reviewBusinessClaim(t, e) {
    const r = localStorage.getItem("accessToken");
    if (!r)
      throw new Error("Not authenticated.");
    const n = await fetch(`/api/admin/claims/${t}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${r}`, "Content-Type": "application/json" },
      body: JSON.stringify({ action: e })
    }), i = await n.json().catch(() => ({}));
    if (!n.ok)
      throw new Error(i.error || "Could not update claim request.");
    return i;
  },
  async uploadPhoto(t) {
    return new Promise((e) => {
      const r = new FileReader();
      r.onloadend = () => e(r.result), r.readAsDataURL(t);
    });
  },
  async getFavorites(t) {
    const e = localStorage.getItem("user"), r = e ? JSON.parse(e) : null;
    return { favorites: r ? ce.getFavorites(r.id) : [] };
  },
  async updateFavorite(t, e, r) {
    const n = localStorage.getItem("user"), i = n ? JSON.parse(n) : null;
    if (i) {
      let o = ce.getFavorites(i.id);
      return e === "add" ? o.includes(t) || o.push(t) : o = o.filter((a) => a !== t), ce.saveFavorites(i.id, o), { success: !0, favorites: o };
    }
    return { success: !1, message: "User not found" };
  }
}, gl = _e(void 0);
function rf({ children: t }) {
  const [e, r] = E(null), [n, i] = E(null);
  U(() => {
    console.log("🔐 AuthProvider: Loading user from localStorage..."), console.log("   - All localStorage keys:", Object.keys(localStorage));
    const l = localStorage.getItem("user"), c = localStorage.getItem("accessToken");
    if (console.log("   - storedUser raw:", l), console.log("   - storedToken present:", !!c), c) {
      fetch("/api/auth/me", { headers: { Authorization: `Bearer ${c}` } }).then((u) => u.ok ? u.json() : Promise.reject(new Error("Session expired"))).then((u) => {
        u?.user && (console.log("✅ Restored cloud session:", u.user.email), r(u.user), i(c), localStorage.setItem("user", JSON.stringify(u.user)), syncAccountShortlist(u.user, u.shortlist));
      }).catch((u) => {
        console.warn("❌ Cloud session restore failed:", u), localStorage.removeItem("user"), localStorage.removeItem("accessToken"), localStorage.removeItem("refreshToken");
      });
      return;
    }
    if (l)
      try {
        const u = JSON.parse(l);
        console.log("❌ Found stored user without session token; clearing stale login:", u.email), localStorage.removeItem("user");
      } catch (u) {
        console.error("❌ Error parsing stored user:", u), localStorage.removeItem("user");
      }
    else
      console.log("❌ No stored user found");
  }, []);
  const o = (l, c, u, h) => {
    console.log("🔑 LOGIN CALLED:"), console.log("   - User:", l.email, "isAdmin:", l.isAdmin), console.log("   - Access token:", c.substring(0, 20) + "..."), r(l), i(c), localStorage.setItem("user", JSON.stringify(l)), localStorage.setItem("accessToken", c), u && localStorage.setItem("refreshToken", u), syncAccountShortlist(l, h), console.log("✅ Login complete - data saved to localStorage");
  }, a = () => {
    const l = localStorage.getItem("accessToken");
    l && fetch("/api/auth/logout", { method: "POST", headers: { Authorization: `Bearer ${l}` } }).catch(() => {
    }), r(null), i(null), localStorage.removeItem("user"), localStorage.removeItem("accessToken"), localStorage.removeItem("refreshToken");
  };
  return /* @__PURE__ */ s(gl.Provider, { value: { user: e, login: o, logout: a, accessToken: n }, children: t });
}
function vi() {
  const t = re(gl);
  if (t === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return t;
}
function yl({ isVisible: t, message: e, actionText: r, onAction: n, onClose: i }) {
  return U(() => {
    if (t) {
      const o = setTimeout(() => {
        i();
      }, 4e3);
      return () => clearTimeout(o);
    }
  }, [t, i]), /* @__PURE__ */ s(Pt, { children: t && /* @__PURE__ */ s(
    D.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      transition: { type: "spring", damping: 25, stiffness: 200 },
      className: "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-[100] pointer-events-auto",
      children: /* @__PURE__ */ d("div", { className: "bg-gray-900 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center justify-between gap-4 min-w-[280px]", children: [
        /* @__PURE__ */ s("span", { className: "text-sm", children: e }),
        r && n && /* @__PURE__ */ s(
          "button",
          {
            onClick: n,
            className: "text-purple-400 hover:text-purple-300 font-medium text-sm whitespace-nowrap",
            children: r
          }
        )
      ] })
    }
  ) });
}
const xi = (t) => t ? `pawsitively_shortlist_${t.id}` : "pawsitively_shortlist_guest", fr = (t) => {
  try {
    const e = xi(t), r = localStorage.getItem(e), n = r ? JSON.parse(r) : [];
    return console.log(`📖 Loaded ${n.length} shortlist items for key: ${e}`), n;
  } catch (e) {
    return console.error("Error loading shortlist:", e), [];
  }
}, vl = (t, e) => {
  try {
    const r = xi(t);
    localStorage.setItem(r, JSON.stringify(e)), console.log(`💾 Saved ${e.length} shortlist items to key: ${r}`);
    if (t?.id && !t.isAdmin) {
      const n = localStorage.getItem("accessToken");
      n && fetch("/api/auth/shortlist", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${n}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ shortlist: e })
      }).catch((i) => console.warn("Cloud shortlist sync failed:", i));
    }
  } catch (r) {
    console.error("Error saving shortlist:", r);
  }
}, syncAccountShortlist = (t, e) => {
  if (!t?.id || t.isAdmin)
    return fr(t);
  const r = fr(t), n = fr(null), i = Array.isArray(e) ? e : [], o = /* @__PURE__ */ new Map();
  return [...i, ...r, ...n].forEach((a) => {
    a?.id && !o.has(a.id) && o.set(a.id, a);
  }), vl(t, [...o.values()]), n.length > 0 && localStorage.setItem(xi(null), JSON.stringify([])), [...o.values()];
}, nf = (t, e) => {
  const r = fr(t);
  return r.some((i) => i.id === e.id) || (r.push(e), vl(t, r)), r;
}, xl = (t, e) => {
  const n = fr(t).filter((i) => i.id !== e);
  return vl(t, n), n;
}, sf = (t) => fr(t).map((r) => r.id), bl = (t) => {
  try {
    const e = t ? `pawsitively_favorites_${t.id}` : "pawsitively_favorites_guest", r = localStorage.getItem(e);
    if (r) {
      console.log("🔄 Found old favorites, migrating to shortlist...");
      const n = xi(t);
      if (localStorage.getItem(n))
        console.log("ℹ️ Shortlist already exists, skipping migration");
      else {
        localStorage.setItem(n, r);
        const o = JSON.parse(r).length;
        console.log(`✅ Migrated ${o} favorites to shortlist`);
      }
      localStorage.removeItem(e), console.log("🗑️ Removed old favorites key");
    }
  } catch (e) {
    console.error("Error migrating favorites to shortlist:", e);
  }
}, Wr = globalThis.__GLOBALS__.getAssetURL("2a637f54adfb8f3323c047246be7f5b36018b8af.png");
function BusinessLinkRequestBox({ business: t, user: e, onLinked: r }) {
  const [n, i] = E("idle"), [o, a] = E(""), [l, c] = E("");
  U(() => {
    if (!e?.id || e.isAdmin || e.role !== "business" || t.ownerId)
      return;
    const u = localStorage.getItem("accessToken");
    u && fetch(`/api/claims/mine?businessId=${encodeURIComponent(t.id)}`, { headers: { Authorization: `Bearer ${u}` } }).then((h) => h.ok ? h.json() : null).then((h) => {
      h?.request?.status === "pending" ? i("pending") : h?.request?.status === "approved" && r?.();
    }).catch(() => {
    });
  }, [e?.id, e?.role, t.id, t.ownerId]);
  if (!e || e.isAdmin || e.role !== "business" || t.ownerId)
    return null;
  const u = async () => {
    c(""), i("loading");
    try {
      await Oe.requestBusinessLink(t.id, o), i("pending");
    } catch (h) {
      c(h instanceof Error ? h.message : "Could not submit request."), i("idle");
    }
  };
  return n === "pending" ? /* @__PURE__ */ d("div", { className: "mt-4 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl text-center", children: [
    /* @__PURE__ */ s("div", { className: "text-2xl mb-2", children: "⏳" }),
    /* @__PURE__ */ s("p", { className: "text-gray-800 font-medium", children: "Link request pending" }),
    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mt-1", children: "An admin will review your request to manage this listing." })
  ] }) : /* @__PURE__ */ d("div", { className: "mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl", children: [
    /* @__PURE__ */ s("h4", { className: "text-gray-800 font-medium mb-2", children: "Is this your business?" }),
    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-3", children: "Request to link your business account so you can manage this listing and respond to reviews." }),
    /* @__PURE__ */ s("textarea", { value: o, onChange: (h) => a(h.target.value), rows: 3, className: "w-full p-3 bg-white rounded-lg border-2 border-green-200 focus:outline-none focus:border-green-400 text-sm", placeholder: "Optional message for admin (e.g. your role at the business)" }),
    l && /* @__PURE__ */ s("p", { className: "text-red-600 text-sm mt-2", children: l }),
    /* @__PURE__ */ s("button", { type: "button", onClick: u, disabled: n === "loading", className: "mt-3 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50", children: n === "loading" ? "Submitting..." : "Request to link this listing" })
  ] });
}
function ReviewOwnerReply({ review: t, business: e, user: r, onUpdated: n }) {
  const [i, o] = E(t.ownerResponse || ""), [a, l] = E(!1), [c, u] = E(""), h = !!(r && e?.ownerId && e.ownerId === r.id);
  if (t.ownerResponse && !h)
    return /* @__PURE__ */ d("div", { className: "mt-3 pt-3 border-t border-purple-200 bg-white/70 rounded-lg p-3", children: [
      /* @__PURE__ */ s("p", { className: "text-xs font-semibold text-purple-700 mb-1", children: "Owner response" }),
      /* @__PURE__ */ s("p", { className: "text-gray-700 text-sm leading-relaxed", children: t.ownerResponse })
    ] });
  if (!h)
    return null;
  const p = async () => {
    u(""), l(!0);
    try {
      const m = await Oe.respondToReview(t, i);
      if (!m.success)
        throw new Error(m.error || "Could not save response.");
      n?.(m.review), o(m.review.ownerResponse || "");
    } catch (m) {
      u(m instanceof Error ? m.message : "Could not save response.");
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ d("div", { className: "mt-3 pt-3 border-t border-purple-200", children: [
    t.ownerResponse && /* @__PURE__ */ d("div", { className: "mb-3 bg-white/70 rounded-lg p-3", children: [
      /* @__PURE__ */ s("p", { className: "text-xs font-semibold text-purple-700 mb-1", children: "Your response" }),
      /* @__PURE__ */ s("p", { className: "text-gray-700 text-sm leading-relaxed", children: t.ownerResponse })
    ] }),
    /* @__PURE__ */ s("textarea", { value: i, onChange: (m) => o(m.target.value), rows: 3, className: "w-full p-3 bg-white rounded-lg border-2 border-purple-200 focus:outline-none focus:border-purple-400 text-sm", placeholder: t.ownerResponse ? "Update your response..." : "Write a response to this review..." }),
    c && /* @__PURE__ */ s("p", { className: "text-red-600 text-sm mt-2", children: c }),
    /* @__PURE__ */ s("button", { type: "button", onClick: p, disabled: a || !i.trim(), className: "mt-2 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 disabled:opacity-50", children: a ? "Saving..." : t.ownerResponse ? "Update response" : "Post response" })
  ] });
}
function of({ onEditBusiness: t, onNavigate: e, onOpenLogin: r } = {}) {
  const [n, i] = E(null), [o, a] = E([]), [l, c] = E(!0), [u, h] = E(0), [p, m] = E([]), [f, v] = E({ userName: "", rating: 5, comment: "" }), [g, b] = E(!1), [w, x] = E({}), [T, P] = E(!1), [N, S] = E({ reviewerName: "", rating: 5, comment: "" }), [C, R] = E(!1), [M, k] = E(!1), { user: I, accessToken: z } = vi(), [ee, G] = E("all"), [pe, Ee] = E(!1), [W, te] = E(!1), [ae, ue] = E(!1), [Me, qe] = E("all"), [Ke, Ht] = E(""), [Re, Ye] = E("name"), [Be, mt] = E([]), [Nr, Xe] = E(!1), [ft, A] = E(10), [O, V] = E(!1), [H, se] = E(!1), [Ze, $e] = E(!1), [zt, gt] = E(""), [Ai, Ei] = E(void 0);
  U(() => {
    Mi(), jl();
  }, [I]), U(() => {
    window.scrollTo(0, 0);
  }, []), U(() => {
    A(10), se(!1);
  }, [Ke, ee, Re]), U(() => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      if (F.length > 1) {
        const B = setInterval(() => {
          h(
            (_) => _ === F.length - 1 ? 0 : _ + 1
          );
        }, 4e3);
        return () => clearInterval(B);
      }
    }
  }, [n, u]), U(() => {
    n && (h(0), Vl(n.id));
  }, [n]);
  const Mi = async () => {
    try {
      const F = (await Oe.getBusinesses("grooming")).businesses || [];
      a(F), await Cr(F);
    } catch (y) {
      console.error("Error fetching businesses:", y);
    } finally {
      c(!1);
    }
  }, Cr = async (y) => {
    const F = {};
    await Promise.all(
      y.map(async (B) => {
        try {
          const Y = (await Oe.getReviews(B.id)).reviews || [];
          if (Y.length > 0) {
            const Te = Sr(Y);
            F[B.id] = {
              average: Te,
              count: Y.length
            };
          }
        } catch (_) {
          console.error(`Error fetching reviews for business ${B.id}:`, _);
        }
      })
    ), x(F);
  }, Vl = async (y) => {
    try {
      const F = await Oe.getReviews(y);
      m(F.reviews || []);
    } catch (F) {
      console.error("Error fetching reviews:", F), m([]);
    }
  }, jl = () => {
    try {
      bl(I);
      const y = sf(I);
      mt(y);
    } catch (y) {
      console.error("Error fetching shortlist:", y);
    }
  }, Hl = (y, F) => {
    F.stopPropagation();
    const B = Be.includes(y);
    try {
      if (B)
        xl(I, y), mt(Be.filter((_) => _ !== y)), gt("Removed from Shortlist"), Ei(void 0), $e(!0);
      else {
        const _ = o.find((Y) => Y.id === y);
        if (_) {
          console.log("🔍 Found business to add to shortlist:", _), console.log("🔍 Business rating:", w[_.id]);
          const Y = {
            id: _.id,
            name: _.name,
            category: "grooming",
            city: _.city,
            phone: _.phone,
            rating: w[_.id]?.average,
            photoUrl: _.photos?.[0],
            address: _.address,
            zipCode: _.zipCode
          };
          console.log("💾 Shortlist item to save:", Y), nf(I, Y), mt([...Be, y]), gt("Saved to Shortlist"), Ei(() => () => {
            e && e("shortlist");
          }), $e(!0);
        } else
          console.error("❌ Business not found in providers list:", y);
      }
    } catch (_) {
      console.error("Error updating shortlist:", _);
    }
  }, zl = async () => {
    const displayName = f.userName.trim() || I?.name || "";
    if (!displayName) {
      alert("Please enter your name");
      return;
    }
    if (!f.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    b(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        f.rating,
        f.comment,
        z,
        I ? void 0 : displayName
      );
      y.review && m([y.review, ...p]), await Cr(o), v({ userName: "", rating: 5, comment: "" }), alert("Review submitted successfully!");
    } catch (y) {
      console.error("Error submitting review:", y), alert(y instanceof Error ? y.message : "Failed to submit review. Please try again.");
    } finally {
      b(!1);
    }
  }, Wl = async () => {
    if (!I?.isAdmin) {
      alert("Admin access required to add customer reviews on behalf of clients.");
      return;
    }
    if (!N.reviewerName.trim()) {
      alert("Please enter a reviewer name");
      return;
    }
    if (!N.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    R(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        N.rating,
        N.comment,
        z,
        N.reviewerName
      );
      y.review && m([y.review, ...p]), await Cr(o), S({ reviewerName: "", rating: 5, comment: "" }), P(!1), alert("Review added successfully!");
    } catch (y) {
      console.error("Error submitting admin review:", y), alert(y instanceof Error ? y.message : "Failed to submit admin review. Please try again.");
    } finally {
      R(!1);
    }
  }, Sr = (y) => !y || y.length === 0 ? 0 : y.reduce((B, _) => B + _.rating, 0) / y.length, Tr = (y, F = "md") => {
    const B = Math.floor(y), _ = y % 1 >= 0.5, Y = 5 - B - (_ ? 1 : 0), Te = F === "sm" ? "w-4 h-4" : F === "lg" ? "w-6 h-6" : "w-5 h-5";
    return /* @__PURE__ */ d("div", { className: "flex items-center gap-0.5", children: [
      [...Array(B)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} fill-yellow-400 text-yellow-400` }, `full-${Pr}`)),
      _ && /* @__PURE__ */ s(Im, { className: `${Te} fill-yellow-400 text-yellow-400` }),
      [...Array(Y)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} text-gray-300` }, `empty-${Pr}`))
    ] });
  }, Ul = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === F.length - 1 ? 0 : B + 1
      );
    }
  }, Gl = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === 0 ? F.length - 1 : B - 1
      );
    }
  }, Ri = (y) => ({
    $: "Budget-Friendly",
    $$: "Moderate Pricing",
    $$$: "Premium Services",
    $$$$: "Luxury Experience"
  })[y] || "Price Range", ql = async () => {
    if (!(!I || !n || !window.confirm(
      `Are you sure you want to delete "${n.name}"? This action cannot be undone.`
    ))) {
      k(!0);
      try {
        await Oe.deleteBusiness(n.id, "grooming", z), alert("Business listing deleted successfully!"), i(null), await Mi();
      } catch (F) {
        console.error("Error deleting business:", F), alert(F instanceof Error ? F.message : "Failed to delete business. Please try again.");
      } finally {
        k(!1);
      }
    }
  }, yt = (() => {
    let y = o.filter((F) => !(Ke.trim() && !F.name.toLowerCase().includes(Ke.toLowerCase()) || ee !== "all" && !businessMatchesCityFilter(F.city, ee) || pe && !F.mobileService || W && !(F.hours && (F.hours.saturday && !F.hours.saturday.toLowerCase().includes("closed") || F.hours.sunday && !F.hours.sunday.toLowerCase().includes("closed"))) || ae && !F.notAcceptingClients || Me !== "all" && F.priceRange !== Me));
    return y.sort((F, B) => {
      if (Re === "name")
        return F.name.localeCompare(B.name);
      if (Re === "rating") {
        const _ = w[F.id]?.average || 0;
        return (w[B.id]?.average || 0) - _;
      } else if (Re === "price") {
        const _ = { $: 1, $$: 2, $$$: 3, $$$$: 4 }, Y = _[F.priceRange] || 0, Te = _[B.priceRange] || 0;
        return Y - Te;
      }
      return 0;
    }), y;
  })(), Kl = () => {
    V(!0), setTimeout(() => {
      A((y) => y + 10), setTimeout(() => {
        V(!1);
      }, 100);
    }, 3e3);
  }, Yl = () => /* @__PURE__ */ d("div", { className: "bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col animate-pulse", children: [
    /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full bg-gradient-to-br from-gray-200 to-gray-300", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s("div", { className: "absolute inset-0 shimmer" }) }) }),
    /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
      /* @__PURE__ */ s("div", { className: "h-6 bg-gray-200 rounded w-2/3" }),
      /* @__PURE__ */ s("div", { className: "h-8 w-8 bg-gray-200 rounded-full" })
    ] }),
    /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-3" }),
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ s("div", { className: "flex gap-1", children: [...Array(5)].map((y, F) => /* @__PURE__ */ s("div", { className: "h-4 w-4 bg-gray-200 rounded" }, F)) }),
      /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-20" })
    ] }),
    /* @__PURE__ */ s("div", { className: "mt-auto w-full h-10 bg-gray-200 rounded-lg" })
  ] });
  return /* @__PURE__ */ d("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ s("section", { className: "bg-gradient-to-br from-pink-400 via-purple-500 to-purple-600 text-white h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[32px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[320px] mx-auto px-1", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", children: "Dog Groomers Directory" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-90 leading-tight mt-0.5", children: "Free directory — compare local groomers." }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-75 leading-snug mt-1.5", children: "Independent groomers in Darlington, Hartsville & Florence." })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                animate: { rotate: [0, 5, -5, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                className: "md:text-4xl",
                children: "✂️"
              }
            ),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", children: "Dog Groomers Directory" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block max-w-2xl mx-auto mt-1", children: [
            /* @__PURE__ */ s("p", { className: "md:text-base leading-relaxed", children: "Free directory — compare trusted groomers in Darlington, Hartsville and Florence." }),
            /* @__PURE__ */ s("p", { className: "text-sm opacity-80 leading-relaxed mt-2", children: "Read reviews and find the right groomer for your pet." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "pt-0 md:py-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-2xl shadow-md md:shadow-sm p-3.5 md:p-4 mb-6 md:mb-4 -mt-[24px] md:mt-0 flex flex-col sm:flex-row gap-3 md:gap-4",
          children: [
            /* @__PURE__ */ d("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ s(mr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  placeholder: "Search businesses by name...",
                  value: Ke,
                  onChange: (y) => Ht(y.target.value),
                  className: "w-full pl-10 pr-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-3 md:hidden", children: [
              /* @__PURE__ */ d(
                "select",
                {
                  value: ee,
                  onChange: (y) => G(y.target.value),
                  className: "flex-1 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                    /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                    /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                    /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg", children: [
                /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-purple-600" }),
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: Re,
                    onChange: (y) => Ye(y.target.value),
                    className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                    children: [
                      /* @__PURE__ */ s("option", { value: "name", children: "Name" }),
                      /* @__PURE__ */ s("option", { value: "rating", children: "Rating" }),
                      /* @__PURE__ */ s("option", { value: "price", children: "Price" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "hidden sm:block sm:w-auto", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg", children: [
              /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-purple-600" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Re,
                  onChange: (y) => Ye(y.target.value),
                  className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                  children: [
                    /* @__PURE__ */ s("option", { value: "name", children: "Sort by Name" }),
                    /* @__PURE__ */ s("option", { value: "rating", children: "Sort by Rating" }),
                    /* @__PURE__ */ s("option", { value: "price", children: "Sort by Price" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => Xe(!0),
                className: "md:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors",
                children: [
                  /* @__PURE__ */ s(Am, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s("span", { className: "text-sm", children: "Filters" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "hidden md:block bg-purple-200 rounded-xl shadow-md p-4 md:p-6 mb-8",
          children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 items-stretch justify-between", children: [
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto", children: /* @__PURE__ */ d(
              "select",
              {
                value: ee,
                onChange: (y) => G(y.target.value),
                className: "w-full h-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                  /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                  /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                  /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                ]
              }
            ) }),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between md:gap-3 md:px-4 md:py-3 md:bg-purple-50 md:border-2 md:border-purple-200 md:rounded-lg cursor-pointer md:hover:bg-purple-100 transition-colors",
                onClick: () => Ee(!pe),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🚐" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Mobile Service" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${pe ? "bg-purple-600" : "bg-gray-300"}`, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pe ? "translate-x-6" : "translate-x-1"}` }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between md:gap-3 md:px-4 md:py-3 md:bg-purple-50 md:border-2 md:border-purple-200 md:rounded-lg cursor-pointer md:hover:bg-purple-100 transition-colors",
                onClick: () => te(!W),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "📅" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Open Weekends" })
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: W,
                      onChange: (y) => te(y.target.checked),
                      className: "w-5 h-5 text-purple-600 rounded cursor-pointer ml-auto"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center gap-3 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors",
                onClick: () => ue(!ae),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🚫" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Not Accepting New Clients" })
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: ae,
                      onChange: (y) => ue(y.target.checked),
                      className: "w-5 h-5 text-purple-600 rounded cursor-pointer ml-auto"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Price Range" })
              ] }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Me,
                  onChange: (y) => qe(y.target.value),
                  className: "px-3 py-1 bg-white border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-400 transition-colors cursor-pointer ml-auto",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0 px-4 md:px-0", children: l ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🐾" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "Loading grooming businesses..." })
      ] }) : yt.length === 0 ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-6 md:py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🔍" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No matches found" }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 md:hidden", children: "Try a different city, adjust filters, or clear your search." }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 hidden md:block", children: "Try adjusting your search criteria." }),
        /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: () => {
              Ht(""), Ee(!1), te(!1), ue(!1), qe("all"), G("all"), Ye("name");
            },
            className: "md:hidden mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-shadow",
            children: "Clear Filters"
          }
        )
      ] }) : /* @__PURE__ */ d(ie, { children: [
        (window.innerWidth >= 768 ? yt : yt.slice(0, ft)).map((y, F) => /* @__PURE__ */ d(
          D.div,
          {
            initial: window.innerWidth >= 768 ? { opacity: 0, y: 30 } : !1,
            animate: window.innerWidth >= 768 ? void 0 : { opacity: 1, y: 0 },
            whileInView: window.innerWidth >= 768 ? { opacity: 1, y: 0 } : void 0,
            viewport: window.innerWidth >= 768 ? { once: !0, margin: "0px 0px -100px 0px" } : void 0,
            transition: window.innerWidth >= 768 ? { duration: 0.3 } : void 0,
            whileHover: { y: window.innerWidth >= 768 ? -5 : 0 },
            onClick: () => window.innerWidth < 768 && i(y),
            className: "bg-white rounded-xl shadow-md border border-gray-100 md:border-0 p-4 md:p-6 hover:shadow-xl transition-all md:cursor-default cursor-pointer flex flex-col active:shadow-2xl md:active:shadow-xl",
            children: [
              /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 md:-mx-6 md:-mt-6 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s(
                "img",
                {
                  src: y.photos && y.photos.length > 0 ? y.photos[y.cardPhotoIndex || 0] : Wr,
                  alt: y.name,
                  className: `absolute inset-0 w-full h-full rounded-t-xl ${y.photos && y.photos.length > 0 ? "object-cover" : "object-contain bg-gradient-to-br from-pink-100 to-purple-100"}`
                }
              ) }) }),
              /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
                /* @__PURE__ */ s("h3", { className: "text-gray-800", children: y.name }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 md:gap-2", children: [
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: (B) => Hl(y.id, B),
                      className: "p-2 rounded-full hover:bg-purple-100 transition-colors",
                      "aria-label": Be.includes(y.id) ? "Remove from shortlist" : "Add to shortlist",
                      children: /* @__PURE__ */ s(
                        yi,
                        {
                          className: `w-6 h-6 transition-colors ${Be.includes(y.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"}`
                        }
                      )
                    }
                  ),
                  y.priceRange && /* @__PURE__ */ d("div", { className: "relative group", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-1 text-green-600 cursor-help", children: /* @__PURE__ */ s("span", { children: y.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10", children: [
                      Ri(y.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ d("p", { className: "text-gray-600", children: [
                  "📍 ",
                  y.city
                ] }),
                window.innerWidth < 768 && /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end ml-2", children: [
                  y.mobileService && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full", children: "🚐 Mobile Service" }),
                  y.notAcceptingClients && /* @__PURE__ */ s("span", { className: `inline-flex items-center gap-1 text-red-700 ${window.innerWidth < 768 ? "justify-end text-right text-xs py-1" : "px-3 py-1 bg-red-100 text-sm rounded-full"}`, children: "🚫 Not Accepting New Clients" })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-3 md:gap-2", children: w[y.id] ? /* @__PURE__ */ d(ie, { children: [
                  Tr(w[y.id].average, "sm"),
                  /* @__PURE__ */ d("span", { className: "text-sm text-gray-600", children: [
                    w[y.id].average.toFixed(1),
                    " (",
                    w[y.id].count,
                    " ",
                    w[y.id].count === 1 ? "review" : "reviews",
                    ")"
                  ] })
                ] }) : /* @__PURE__ */ s("span", { className: "text-sm text-gray-500", children: "No reviews yet" }) }),
                window.innerWidth >= 768 && /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end", children: [
                  y.mobileService && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full", children: "🚐 Mobile Service" }),
                  y.notAcceptingClients && /* @__PURE__ */ s("span", { className: `inline-flex items-center gap-1 text-red-700 ${window.innerWidth < 768 ? "justify-end text-right text-xs py-1" : "px-3 py-1 bg-red-100 text-sm rounded-full"}`, children: "🚫 Not Accepting New Clients" })
                ] })
              ] }),
              /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: (B) => {
                    window.innerWidth < 768 && B.stopPropagation(), i(y);
                  },
                  className: "mt-auto w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors",
                  children: "View Details"
                }
              )
            ]
          },
          y.id || y.name
        )),
        O && /* @__PURE__ */ s(ie, { children: [...Array(4)].map((y, F) => /* @__PURE__ */ s("div", { className: "md:hidden", children: /* @__PURE__ */ s(Yl, {}) }, `skeleton-${F}`)) }),
        yt.length > ft && !O && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 flex justify-center mt-6 md:hidden", children: /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: Kl,
            className: "px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 transition-colors",
            children: "Load More"
          }
        ) }),
        yt.length > 0 && yt.length <= ft && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 text-center mt-6 md:hidden", children: /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "You've reached the end" }) })
      ] }) })
    ] }) }),
    n && /* @__PURE__ */ s(
      D.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-x-hidden",
        onClick: () => i(null),
        children: /* @__PURE__ */ d(
          D.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            onClick: (y) => y.stopPropagation(),
            className: "bg-white rounded-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl",
            style: { width: window.innerWidth >= 768 ? "min(52rem, calc(100vw - 4rem))" : "calc(100vw - 2rem)" },
            children: [
              /* @__PURE__ */ d("div", { className: "relative h-80 overflow-hidden rounded-t-2xl", children: [
                getDetailGalleryPhotos(n).length > 0 ? (() => {
                  const F = getDetailGalleryPhotos(n);
                  return F.length > 0 ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ s(Pt, { mode: "wait", children: /* @__PURE__ */ s(
                      D.img,
                      {
                        src: F[u],
                        alt: `${n.name} ${u + 1}`,
                        className: "w-full h-80 object-cover",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.5 }
                      },
                      u
                    ) }),
                    F.length > 1 && /* @__PURE__ */ d(ie, { children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Gl,
                          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Qp, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Ul,
                          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: F.map((B, _) => /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => h(_),
                          className: `w-3 h-3 rounded-full transition-all ${_ === u ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}`
                        },
                        _
                      )) })
                    ] })
                  ] }) : (
                    // Fallback to placeholder if no photos available
                    /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                      "img",
                      {
                        src: Wr,
                        alt: n.name,
                        className: "w-auto h-full object-contain"
                      }
                    ) })
                  );
                })() : /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                  "img",
                  {
                    src: Wr,
                    alt: n.name,
                    className: "w-auto h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ s("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => i(null),
                    className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-20",
                    children: /* @__PURE__ */ s(we, { className: "w-6 h-6 text-gray-800" })
                  }
                ),
                /* @__PURE__ */ d("div", { className: "absolute bottom-4 left-6 right-6 text-white z-10 pointer-events-none", children: [
                  /* @__PURE__ */ s("h2", { className: "mb-2 break-words", children: n.name }),
                  n.priceRange && /* @__PURE__ */ d("div", { className: "relative group pointer-events-auto", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-orange-400 cursor-help", children: /* @__PURE__ */ s("span", { className: "text-xl", children: n.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", children: [
                      Ri(n.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "p-4 md:p-6 pb-8 md:pb-6 mb-28 md:mb-0", children: [
                /* @__PURE__ */ s("p", { className: "text-gray-700 mb-6", children: n.description }),
                p.length > 0 && /* @__PURE__ */ s("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6 border border-yellow-200", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Overall Rating" }),
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
                      Tr(Sr(p), "lg"),
                      /* @__PURE__ */ s("span", { className: "text-3xl text-gray-800", children: Sr(p).toFixed(1) })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "text-right", children: [
                    /* @__PURE__ */ s("p", { className: "text-2xl text-gray-800", children: p.length }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: p.length === 1 ? "Review" : "Reviews" })
                  ] })
                ] }) }),
                /* @__PURE__ */ d("div", { className: "grid md:grid-cols-2 gap-4 mb-6 min-w-0", children: [
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-purple-50 rounded-lg w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(ar, { className: "w-5 h-5 text-purple-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Address" }),
                      /* @__PURE__ */ d(
                        "a",
                        {
                          href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            `${n.address}, ${n.city}, SC ${n.zipCode}`
                          )}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-purple-600 hover:underline cursor-pointer break-words",
                          children: [
                            /* @__PURE__ */ s("span", { className: "block", children: n.address }),
                            /* @__PURE__ */ d("span", { className: "block", children: [
                              n.city,
                              ", SC ",
                              n.zipCode
                            ] })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-purple-50 rounded-lg w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(Dn, { className: "w-5 h-5 text-purple-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Phone" }),
                      /* @__PURE__ */ s("a", { href: `tel:${n.phone}`, className: "text-purple-600 hover:underline break-all", children: n.phone })
                    ] })
                  ] }),
                  n.hours && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-purple-50 rounded-lg md:col-span-2 w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(im, { className: "w-5 h-5 text-purple-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Hours of Operation" }),
                      n.callForHours ? /* @__PURE__ */ s("p", { className: "text-purple-600", children: "📞 Please Call for Hours of Operation" }) : /* @__PURE__ */ d("div", { className: "space-y-3 text-xs sm:text-sm md:text-base", children: [
                        /* @__PURE__ */ s("div", { className: "md:hidden space-y-3", children: [["monday", "tuesday"], ["wednesday", "thursday"], ["friday", "saturday"], ["sunday"]].map((y, F) => /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-x-3", children: y.map((B) => {
                          const _ = n.hours[B], Y = _?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: B }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${Y ? "text-red-600" : "text-green-600"}`, children: _ })
                          ] }, B);
                        }) }, F)) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["monday", "tuesday", "wednesday", "thursday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${B ? "text-red-600" : "text-green-600"}`, children: F })
                          ] }, y);
                        }) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["friday", "saturday", "sunday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${B ? "text-red-600" : "text-green-600"}`, children: F })
                          ] }, y);
                        }) })
                      ] })
                    ] })
                  ] }),
                  n.website && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-purple-50 rounded-lg w-full max-w-full min-w-0 overflow-hidden md:justify-self-start", style: { width: window.innerWidth >= 768 ? "fit-content" : "100%" }, children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 text-purple-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Website" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: n.website.startsWith("http") ? n.website : `https://${n.website}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-purple-600 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block whitespace-normal md:whitespace-nowrap max-w-full break-all md:break-normal",
                          style: { overflowWrap: "anywhere", wordBreak: "break-word" },
                          children: n.website
                        }
                      )
                    ] })
                  ] }),
                ] }),
                n.paymentMethods && n.paymentMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-600 mb-3", children: "Payment Methods" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.paymentMethods.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm whitespace-normal break-all max-w-full",
                      children: y
                    },
                    y
                  )) })
                ] }),
                n.mobileService && /* @__PURE__ */ s("div", { className: "mb-6", children: /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-2 px-4 py-3 bg-green-50 border-2 border-green-200 text-green-700 rounded-lg", children: [
                  /* @__PURE__ */ s("span", { className: "text-2xl", children: "🚐" }),
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-800", children: "Mobile Service Available" }),
                    /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "This business comes to your location" })
                  ] })
                ] }) }),
                n.specialFeatures && n.specialFeatures.length > 0 && n.specialFeatures.some((y) => y.trim()) && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Special Features" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.specialFeatures.filter((y) => y.trim()).map((y) => /* @__PURE__ */ d(
                    "span",
                    {
                      className: "bg-purple-50 text-purple-600 px-4 py-2 rounded-lg whitespace-normal break-all max-w-full",
                      children: [
                        "✨ ",
                        y
                      ]
                    },
                    y
                  )) })
                ] }),
                n.servicesOffered && n.servicesOffered.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Services Offered" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.servicesOffered.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full whitespace-normal break-all max-w-full",
                      children: y
                    },
                    y
                  )) })
                ] }),
                (n.facebookPage || n.email) && /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 md:items-start gap-4 mb-6 min-w-0", children: [
                  n.facebookPage && /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-1.5 px-4 py-2 bg-purple-50 rounded-lg w-full min-w-0", style: typeof window !== "undefined" && window.innerWidth >= 768 ? { alignSelf: "end", width: "fit-content", maxWidth: "100%", paddingRight: "0.5rem" } : void 0, children: [
                    /* @__PURE__ */ s(Js, { className: "w-4 h-4 text-purple-600 flex-shrink-0" }),
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: n.facebookPage.startsWith("http") ? n.facebookPage : `https://${n.facebookPage}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-baseline gap-1 hover:underline text-sm leading-snug whitespace-nowrap",
                        children: [
                          /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Facebook" }),
                          /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Link" })
                        ]
                      }
                    )
                  ] }),
                  n.email && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-2 bg-purple-50 rounded-lg w-full min-w-0 overflow-hidden", children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 text-purple-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Email" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: `mailto:${n.email}`,
                          className: "text-purple-600 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block break-all md:break-normal md:whitespace-nowrap",
                          children: n.email
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "hidden md:block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-colors text-center",
                    children: [
                      "📞 Call ",
                      n.name
                    ]
                  }
                ),
                I && (n.ownerId === I.id || I.isAdmin) && t && /* @__PURE__ */ d("div", { className: "space-y-3 mt-3", children: [
                  /* @__PURE__ */ d(
                    D.button,
                    {
                      onClick: () => {
                        i(null), t(n);
                      },
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors",
                      children: [
                        /* @__PURE__ */ s(Mm, { className: "w-5 h-5" }),
                        "Edit Business Listing"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      onClick: ql,
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      disabled: M,
                      children: M ? /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                        "Deleting..."
                      ] }) : /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s(Lt, { className: "w-5 h-5" }),
                        "Delete Business Listing"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ s(BusinessLinkRequestBox, { business: n, user: I, onLinked: () => i({ ...n, ownerId: I?.id }) }),
                /* @__PURE__ */ d("div", { className: "mt-6 border-t border-gray-200 pt-6", children: [
                  /* @__PURE__ */ d("h3", { className: "text-gray-800 mb-4", children: [
                    "Customer Reviews (",
                    p.length,
                    ")"
                  ] }),
                  p.length > 0 ? /* @__PURE__ */ s("div", { className: "space-y-4 mb-6", children: p.map((y) => /* @__PURE__ */ d(
                    D.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100",
                      children: [
                        /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                          /* @__PURE__ */ d("div", { children: [
                            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                              Tr(y.rating, "sm"),
                              /* @__PURE__ */ s("span", { className: "text-sm text-gray-800", children: y.userName })
                            ] }),
                            /* @__PURE__ */ s("p", { className: "text-xs text-gray-500", children: new Date(y.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            }) })
                          ] }),
                          I?.isAdmin && /* @__PURE__ */ s(
                            "button",
                            {
                              onClick: async () => {
                                if (prompt("Enter admin password to delete this review:") !== "9634") {
                                  alert("Incorrect password. Review not deleted.");
                                  return;
                                }
                                try {
                                  await Oe.deleteReview(y.id, z), m((_) => _.filter((Y) => Y.id !== y.id));
                                  const B = p.filter((_) => _.id !== y.id);
                                  if (B.length > 0) {
                                    const _ = B.reduce((Y, Te) => Y + Te.rating, 0) / B.length;
                                    x((Y) => ({
                                      ...Y,
                                      [n.id]: {
                                        average: _,
                                        count: B.length
                                      }
                                    }));
                                  } else
                                    x((_) => {
                                      const Y = { ..._ };
                                      return delete Y[n.id], Y;
                                    });
                                  alert("Review deleted successfully");
                                } catch (B) {
                                  console.error("Error deleting review:", B), alert("Failed to delete review");
                                }
                              },
                              className: "text-red-600 hover:text-red-800",
                              children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ s("p", { className: "text-gray-700 leading-relaxed", children: y.comment }),
                        /* @__PURE__ */ s(ReviewOwnerReply, { review: y, business: n, user: I, onUpdated: (updated) => m((reviews) => reviews.map((rv) => rv.id === updated.id ? updated : rv)) })
                      ]
                    },
                    y.id
                  )) }) : /* @__PURE__ */ d("div", { className: "text-center py-8 bg-gray-50 rounded-xl mb-6", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "⭐" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No reviews yet" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "Be the first to leave a review!" })
                  ] }),
                  I?.isAdmin ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ d("div", { className: "bg-blue-50 rounded-xl border-2 border-blue-200 mb-4", children: [
                      /* @__PURE__ */ d(
                        "button",
                        {
                          onClick: () => P(!T),
                          className: "w-full p-5 flex items-center justify-between text-left",
                          children: [
                            /* @__PURE__ */ d("div", { children: [
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                                /* @__PURE__ */ s("span", { className: "text-2xl", children: "👨‍💼" }),
                                /* @__PURE__ */ s("h4", { className: "text-gray-800", children: "Admin: Add Customer Review" })
                              ] }),
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "Transfer existing online reviews to your listing" })
                            ] }),
                            /* @__PURE__ */ s(
                              D.div,
                              {
                                animate: { rotate: T ? 180 : 0 },
                                transition: { duration: 0.3 },
                                children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-blue-600" })
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(Pt, { children: T && /* @__PURE__ */ s(
                        D.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3 },
                          className: "overflow-hidden",
                          children: /* @__PURE__ */ d("div", { className: "px-5 pb-5 border-t border-blue-200 pt-4", children: [
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Reviewer Name *" }),
                              /* @__PURE__ */ s(
                                "input",
                                {
                                  type: "text",
                                  value: N.reviewerName,
                                  onChange: (y) => S({ ...N, reviewerName: y.target.value }),
                                  className: "w-full p-3 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Enter the reviewer's name"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Rating" }),
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                                [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                                  Ct,
                                  {
                                    className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= N.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                                    onClick: () => S({ ...N, rating: y })
                                  },
                                  y
                                )),
                                /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                                  "(",
                                  N.rating,
                                  " ",
                                  N.rating === 1 ? "star" : "stars",
                                  ")"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Review Comment *" }),
                              /* @__PURE__ */ s(
                                "textarea",
                                {
                                  value: N.comment,
                                  onChange: (y) => S({ ...N, comment: y.target.value }),
                                  className: "w-full p-4 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Paste the customer's review here...",
                                  rows: 4
                                }
                              )
                            ] }),
                            /* @__PURE__ */ s(
                              D.button,
                              {
                                onClick: Wl,
                                whileHover: { scale: 1.02 },
                                whileTap: { scale: 0.98 },
                                className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: C || !N.reviewerName.trim() || !N.comment.trim(),
                                children: C ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                                  /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                                  "Adding Review..."
                                ] }) : "Add Review"
                              }
                            )
                          ] })
                        }
                      ) })
                    ] })
                  ] }) : I && n.ownerId === I.id ? /* @__PURE__ */ d("div", { className: "text-center py-8 bg-purple-50 rounded-xl border-2 border-purple-200", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "🏪" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-700 mb-2", children: "You own this business" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: "You can respond to customer reviews below" })
                  ] }) : /* @__PURE__ */ d("div", { className: "bg-white border-2 border-purple-200 rounded-xl p-5", children: [
                    /* @__PURE__ */ s("h4", { className: "text-gray-800 mb-3", children: "Share Your Experience" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4", children: "No account needed — just enter your name and review." }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Name *" }),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "text",
                          value: f.userName || "",
                          onChange: (y) => v({ ...f, userName: y.target.value }),
                          className: "w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-purple-400 transition-colors",
                          placeholder: I?.name || "Enter your name"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Rating" }),
                      /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                        [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                          Ct,
                          {
                            className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= f.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                            onClick: () => v({ ...f, rating: y })
                          },
                          y
                        )),
                        /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                          "(",
                          f.rating,
                          " ",
                          f.rating === 1 ? "star" : "stars",
                          ")"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Review" }),
                      /* @__PURE__ */ s(
                        "textarea",
                        {
                          value: f.comment,
                          onChange: (y) => v({ ...f, comment: y.target.value }),
                          className: "w-full p-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-purple-400 transition-colors",
                          placeholder: "Share your experience with this business...",
                          rows: 4
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s(
                      D.button,
                      {
                        onClick: zl,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        className: "w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        disabled: g || !f.comment.trim() || !f.userName.trim() && !I?.name,
                        children: g ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                          /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                          "Submitting..."
                        ] }) : "Submit Review"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "md:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3", children: [
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${n.address}, ${n.city}, SC ${n.zipCode}`
                    )}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-600 py-3.5 rounded-xl hover:bg-purple-50 transition-colors",
                    children: [
                      /* @__PURE__ */ s(ar, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Directions" })
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3.5 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-colors",
                    children: [
                      /* @__PURE__ */ s(Dn, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Call" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s("section", { className: "hidden md:block py-16 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white", children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: !0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-8", children: "Grooming Tips" }),
          /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6", children: [
            { icon: "📅", title: "Regular Visits", text: "Schedule grooming every 4-8 weeks" },
            { icon: "🧴", title: "Quality Products", text: "Ask about pet-safe products used" },
            { icon: "💖", title: "Stress-Free", text: "Gentle handling for anxious pets" }
          ].map((y, F) => /* @__PURE__ */ d(
            D.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              transition: { delay: F * 0.2 },
              className: "bg-white/10 backdrop-blur-sm rounded-xl p-6",
              children: [
                /* @__PURE__ */ s("div", { className: "text-4xl mb-3", children: y.icon }),
                /* @__PURE__ */ s("h3", { className: "mb-2", children: y.title }),
                /* @__PURE__ */ s("p", { className: "text-purple-100", children: y.text })
              ]
            },
            y.title
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "md:hidden pt-13 pb-8 px-4 bg-white", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className: "bg-purple-50 rounded-xl p-6 shadow-md border border-purple-200",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-3 text-left", children: "Pet Products We Recommend" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6 text-left", children: "Carefully selected grooming tools and pet-safe essentials we trust and love." }),
          /* @__PURE__ */ s(
            D.button,
            {
              whileTap: { scale: 0.98 },
              onClick: () => e?.("products"),
              className: "w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",
              children: "Browse Pet Products →"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ s(Pt, { children: Nr && /* @__PURE__ */ d(ie, { children: [
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => Xe(!1),
          className: "md:hidden fixed inset-0 bg-black/50 z-50"
        }
      ),
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 30, stiffness: 300 },
          className: "md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 max-h-[85vh] overflow-y-auto shadow-2xl",
          children: [
            /* @__PURE__ */ s("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-4 py-4 rounded-t-[20px]", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Ee(!1), te(!1), ue(!1), qe("all");
                  },
                  className: "text-purple-600 hover:text-purple-700 transition-colors",
                  children: "Clear"
                }
              ),
              /* @__PURE__ */ s("h3", { className: "text-gray-900", children: "Filters" }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Xe(!1),
                  className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-gray-500" })
                }
              )
            ] }) }),
            /* @__PURE__ */ d("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => Ee(!pe),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🚐" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Mobile Service" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${pe ? "bg-purple-600" : "bg-gray-300"}`, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pe ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => te(!W),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "📅" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Open Weekends" })
                    ] }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "checkbox",
                        checked: W,
                        onChange: (y) => te(y.target.checked),
                        className: "w-5 h-5 text-purple-600 rounded cursor-pointer ml-auto"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => ue(!ae),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🚫" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Not Accepting New Clients" })
                    ] }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "checkbox",
                        checked: ae,
                        onChange: (y) => ue(y.target.checked),
                        className: "w-5 h-5 text-purple-600 rounded cursor-pointer ml-auto"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "text-sm text-gray-600 mb-2 block", children: "Price Range" }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg", children: [
                  /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-green-600" }),
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: Me,
                      onChange: (y) => qe(y.target.value),
                      className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700",
                      children: [
                        /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                        /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                        /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "sticky bottom-0 bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ s(
              D.button,
              {
                whileTap: { scale: 0.98 },
                onClick: () => {
                  Xe(!1), A(10);
                },
                className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-lg transition-shadow",
                children: "Apply Filters"
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ s(
      yl,
      {
        isVisible: Ze,
        message: zt,
        actionText: Ai ? "View" : void 0,
        onAction: Ai,
        onClose: () => $e(!1)
      }
    )
  ] });
}
function af({ onEditBusiness: t, onNavigate: e } = {}) {
  const [r, n] = E(null), [i, o] = E([]), [a, l] = E(!0), [c, u] = E(""), [h, p] = E("all"), [m, f] = E(!1), [v, g] = E(!1), [b, w] = E(!1), [x, T] = E("all"), [P, N] = E(!1), [S, C] = E(!1), [R, M] = E(10), [k, I] = E(!1), [tn, en] = E(0), { user: Lr, accessToken: Kr } = vi(), [sn, cn] = E({}), [Yr, Xr] = E([]), [Zr, rn] = E({ reviewerName: "", rating: 5, comment: "" }), [nn, on] = E(!1), [an, ln] = E(!1), [Qr, dn] = E({ userName: "", rating: 5, comment: "" }), [vn, gn] = E(!1);
  const hn = (K) => !K || K.length === 0 ? 0 : K.reduce((L, y) => L + Number(y?.rating || 0), 0) / K.length;
  const un = (K) => {
    const L = K && typeof K == "object" ? K : {}, y = (B) => Array.isArray(B) ? B.filter(Boolean) : typeof B == "string" && B.trim() ? B.split(",").map((_) => _.trim()).filter(Boolean) : [], B = y(L.photos);
    return {
      ...L,
      id: L.id || L.businessId || L.name || "",
      photos: B,
      hours: L.hours && typeof L.hours == "object" && !Array.isArray(L.hours) ? L.hours : {},
      paymentMethods: y(L.paymentMethods),
      servicesOffered: y(L.servicesOffered),
      specialFeatures: y(L.specialFeatures),
      trainingMethods: y(L.trainingMethods),
      sessionFormats: y(L.sessionFormats),
      specialties: y(L.specialties),
      rating: Number.isFinite(Number(L.rating)) ? Number(L.rating) : 0,
      reviewCount: Number.isFinite(Number(L.reviewCount)) ? Number(L.reviewCount) : 0
    };
  };
  U(() => {
    z();
  }, []), U(() => {
    ["scranton", "effingham"].includes(String(h).toLowerCase()) && p("Florence");
  }, [i]), U(() => {
    M(10), I(!1);
  }, [c, h]), U(() => {
    r && (en(0), yn(r.id));
  }, [r]);
  const z = async () => {
    const K = [
      {
        id: "training-1",
        name: "Darlington Dog Academy",
        city: "Darlington",
        rating: 4.9,
        priceRange: "$$",
        inHomeTraining: !0,
        groupClassesAvailable: !0,
        certifications: "CPDT-KA Certified",
        address: "120 Trainer Way",
        zipCode: "29532",
        phone: "(843) 555-0191",
        description: "Structured obedience programs for puppies and adult dogs with clear weekly milestones.",
        paymentMethods: ["Cash", "Credit Card", "CareCredit"],
        trainingMethods: ["Positive Reinforcement", "Force-Free"],
        sessionFormats: ["Group Classes", "Private Sessions", "In-Home"],
        specialties: ["Puppy Training", "Obedience", "Behavior Modification"],
        photos: [Wr],
        hours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM",
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 5:00 PM",
          saturday: "9:00 AM - 1:00 PM",
          sunday: "Closed"
        }
      },
      {
        id: "training-2",
        name: "Paws & Learn Training Center",
        city: "Florence",
        rating: 4.8,
        priceRange: "$$$",
        inHomeTraining: !1,
        groupClassesAvailable: !0,
        certifications: "AKC Certified",
        address: "402 Canine Ct",
        zipCode: "29501",
        phone: "(843) 555-0192",
        description: "Group and private coaching focused on confidence, impulse control, and reliable manners.",
        paymentMethods: ["Credit Card", "Debit Card"],
        trainingMethods: ["Positive Reinforcement", "Balanced"],
        sessionFormats: ["Group Classes", "Private Sessions", "Virtual"],
        specialties: ["Agility", "Therapy Dog Prep", "Advanced Tricks"],
        photos: [Wr],
        hours: {
          monday: "9:00 AM - 6:00 PM",
          tuesday: "9:00 AM - 6:00 PM",
          wednesday: "9:00 AM - 6:00 PM",
          thursday: "9:00 AM - 6:00 PM",
          friday: "9:00 AM - 5:00 PM",
          saturday: "9:00 AM - 2:00 PM",
          sunday: "Closed"
        }
      },
      {
        id: "training-3",
        name: "Good Boy Training Services",
        city: "Hartsville",
        rating: 4.7,
        priceRange: "$$",
        inHomeTraining: !0,
        groupClassesAvailable: !1,
        certifications: "Professional Trainer",
        address: "88 Pack Leader Ln",
        zipCode: "29550",
        phone: "(843) 555-0193",
        description: "In-home and private coaching for reactive dogs and real-life behavior issues.",
        paymentMethods: ["Cash", "Credit Card"],
        trainingMethods: ["Balanced", "E-Collar"],
        sessionFormats: ["Private Sessions", "In-Home", "Board & Train"],
        specialties: ["In-Home Training", "Reactive Dogs", "Basic Manners"],
        photos: [Wr],
        hours: {
          monday: "8:30 AM - 5:30 PM",
          tuesday: "8:30 AM - 5:30 PM",
          wednesday: "8:30 AM - 5:30 PM",
          thursday: "8:30 AM - 5:30 PM",
          friday: "8:30 AM - 4:30 PM",
          saturday: "By Appointment",
          sunday: "Closed"
        }
      }
    ];
    try {
      const L = (await Oe.getBusinesses("training")).businesses || [], y = new Set(L.map((F) => F.id)), B = ce.getDeletedBusinessIds("training"), _ = new Set(await fetchCloudDeletedBusinessIds("training")), Y = new Set([...B, ..._]), Te = [...L, ...K.filter((F) => !y.has(F.id) && !Y.has(F.id))].map(un);
      o(Te), await Tn(Te);
    } catch (L) {
      const y = ce.getDeletedBusinessIds("training");
      const B = K.filter((_) => !y.has(_.id)).map(un);
      console.error("Error fetching training businesses:", L), o(B), await Tn(B);
    } finally {
      l(!1);
    }
  }, Tn = async (K) => {
    const L = {};
    await Promise.all(
      K.map(async (y) => {
        try {
          const B = (await Oe.getReviews(y.id)).reviews || [];
          if (B.length > 0) {
            const _ = hn(B);
            L[y.id] = {
              average: _,
              count: B.length
            };
          } else if (Number(y.reviewCount || 0) > 0 && Number.isFinite(Number(y.rating)))
            L[y.id] = {
              average: Number(y.rating),
              count: Number(y.reviewCount)
            };
          else if (Number.isFinite(Number(y.rating)) && Number(y.rating) > 0)
            L[y.id] = {
              average: Number(y.rating),
              count: Number(y.reviewCount || 1)
            };
        } catch (B) {
          console.error(`Error fetching reviews for business ${y.id}:`, B);
        }
      })
    ), cn(L);
  }, yn = async (K) => {
    try {
      const L = await Oe.getReviews(K), y = L.reviews || [];
      Xr(y), cn((F) => {
        if (y.length > 0) {
          const B = hn(y);
          return {
            ...F,
            [K]: {
              average: B,
              count: y.length
            }
          };
        }
        const B = { ...F };
        return delete B[K], B;
      });
    } catch (L) {
      console.error("Error fetching reviews:", L), Xr([]);
    }
  }, qn = async () => {
    if (!r || !Lr?.isAdmin) {
      alert("Admin access required to add reviews.");
      return;
    }
    if (!Zr.reviewerName.trim()) {
      alert("Please enter a reviewer name");
      return;
    }
    if (!Zr.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    on(!0);
    try {
      const K = await Oe.addReview(
        r.id,
        Zr.rating,
        Zr.comment,
        Kr,
        Zr.reviewerName
      );
      K.review && Xr([K.review, ...Yr]), await yn(r.id);
      rn({ reviewerName: "", rating: 5, comment: "" }), alert("Review added successfully!");
    } catch (K) {
      console.error("Error submitting admin review:", K), alert(K instanceof Error ? K.message : "Failed to submit admin review. Please try again.");
    } finally {
      on(!1);
    }
  }, Jn = async () => {
    if (!r)
      return;
    const K = Qr.userName.trim() || Lr?.name || "";
    if (!K) {
      alert("Please enter your name");
      return;
    }
    if (!Qr.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    gn(!0);
    try {
      const L = await Oe.addReview(
        r.id,
        Qr.rating,
        Qr.comment,
        Kr,
        Lr ? void 0 : K
      );
      L.review && Xr([L.review, ...Yr]), await yn(r.id), dn({ userName: "", rating: 5, comment: "" }), alert("Review submitted successfully!");
    } catch (L) {
      console.error("Error submitting review:", L), alert(L instanceof Error ? L.message : "Failed to submit review. Please try again.");
    } finally {
      gn(!1);
    }
  }, Ql = async () => {
    if (!r)
      return;
    if (!window.confirm("Are you sure you want to delete this business listing? This action cannot be undone."))
      return;
    ln(!0);
    try {
      await Oe.deleteBusiness(r.id, "training", Kr), o((L) => L.filter((y) => y.id !== r.id)), alert("Business listing deleted successfully!"), n(null), await z();
    } catch (K) {
      console.error("Error deleting business:", K), alert(K instanceof Error ? K.message : "Failed to delete business listing. Please try again.");
    } finally {
      ln(!1);
    }
  }, Gn = () => {
    if (r) {
      const K = getDetailGalleryPhotos(r);
      en((L) => L === K.length - 1 ? 0 : L + 1);
    }
  }, Un = () => {
    if (r) {
      const K = getDetailGalleryPhotos(r);
      en((L) => L === 0 ? K.length - 1 : L - 1);
    }
  }, ee = getTrainingCityFilterOptions(i), G = i.filter((K) => !(c.trim() && !K.name.toLowerCase().includes(c.toLowerCase()) || h !== "all" && !trainingMatchesCityFilter(K, h) || m && !K.inHomeTraining || v && !K.groupClassesAvailable || b && (sn[K.id]?.average || 0) < 4 || x !== "all" && K.priceRange !== x)), pe = [...G].sort((K, L) => K.name.localeCompare(L.name)), W = window.innerWidth >= 768 ? pe : pe.slice(0, R);
  return /* @__PURE__ */ d("div", { className: "min-h-screen bg-white md:bg-transparent", children: [
    /* @__PURE__ */ s("section", { className: "bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 text-white h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[8px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[320px] mx-auto px-1", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", children: "Dog Trainers Directory" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-90 leading-tight mt-0.5", children: "Free directory — compare local trainers." }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-75 leading-snug mt-1.5", children: "We do not provide training — independent trainers in Darlington, Hartsville & Florence." })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                animate: { rotate: [0, 5, -5, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                className: "md:text-4xl",
                children: "🎓"
              }
            ),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", children: "Dog Trainers Directory" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block max-w-2xl mx-auto mt-1", children: [
            /* @__PURE__ */ s("p", { className: "md:text-base leading-relaxed", children: "Free directory — find dog trainers in Darlington, Hartsville and Florence for puppy socialization, obedience, and behavior help." }),
            /* @__PURE__ */ s("p", { className: "text-sm opacity-80 leading-relaxed mt-2", children: "We do not provide training — compare listings and contact providers directly." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto px-4 md:px-0 mt-4", children: [
      /* @__PURE__ */ d("div", { className: "md:hidden space-y-3 mb-4", children: [
        /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg", children: [
          /* @__PURE__ */ s(Zo, { className: "w-5 h-5 text-blue-600" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              placeholder: "Search trainers...",
              value: c,
              onChange: (K) => u(K.target.value),
              className: "flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500"
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ s(
            "select",
            {
              value: h,
              onChange: (K) => p(K.target.value),
              className: "flex-1 px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                ee.map((K) => /* @__PURE__ */ s("option", { value: K, children: K }, K))
              ]
            }
          ),
          /* @__PURE__ */ s(
            D.button,
            {
              whileTap: { scale: 0.98 },
              onClick: () => N(!0),
              className: "md:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors",
              children: [
                /* @__PURE__ */ s(om, { className: "w-4 h-4" }),
                /* @__PURE__ */ s("span", { className: "text-sm", children: "Filters" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8",
          style: { backgroundColor: "#93c5fd" },
          children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 items-stretch justify-between", children: [
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto", children: /* @__PURE__ */ d(
              "select",
              {
                value: h,
                onChange: (K) => p(K.target.value),
                className: "w-full h-full px-4 py-3 bg-white border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                  ee.map((K) => /* @__PURE__ */ s("option", { value: K, children: K }, K))
                ]
              }
            ) }),
            /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-blue-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors", onClick: () => f(!m), children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s("span", { className: "text-xl", children: "🏠" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "In-Home Training" })
              ] }),
              /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: m ? "#2563eb" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${m ? "translate-x-6" : "translate-x-1"}` }) })
            ] }),
            /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-blue-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors", onClick: () => g(!v), children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s("span", { className: "text-xl", children: "👥" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Group Classes Available" })
              ] }),
              /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: v ? "#2563eb" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${v ? "translate-x-6" : "translate-x-1"}` }) })
            ] }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-blue-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors", onClick: () => w(!b), children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
              ] }),
              /* @__PURE__ */ s("input", { type: "checkbox", checked: b, onChange: (K) => w(K.target.checked), className: "w-5 h-5 text-blue-600 rounded cursor-pointer ml-auto" })
            ] }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-blue-200 rounded-lg", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Price Range" })
              ] }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: x,
                  onChange: (K) => T(K.target.value),
                  className: "px-3 py-1 bg-white border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-400 transition-colors cursor-pointer ml-auto",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0 px-4 md:px-0", children: a ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🎓" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "Loading training businesses..." })
      ] }) : pe.length === 0 ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-6 md:py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🔍" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No matches found" })
      ] }) : /* @__PURE__ */ d(ie, { children: [
        W.map((K) => /* @__PURE__ */ d(D.div, { className: "bg-white rounded-xl shadow-md border border-gray-100 md:border-0 p-4 md:p-6 hover:shadow-xl transition-all flex flex-col", children: [
          /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 md:-mx-6 md:-mt-6 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s("img", { src: K.photos && K.photos.length > 0 ? K.photos[0] : Wr, alt: K.name, className: "absolute inset-0 w-full h-full object-cover rounded-t-xl" }) }) }),
          /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
            /* @__PURE__ */ s("h3", { className: "text-gray-800", children: K.name }),
            K.priceRange && /* @__PURE__ */ s("div", { className: "text-green-600", children: K.priceRange })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ d("p", { className: "text-gray-600", children: ["📍 ", K.city] }),
            /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end ml-2", children: [
              K.inHomeTraining && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full", children: "🏠 In-Home" }),
              K.groupClassesAvailable && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full", children: "👥 Group Classes" })
            ] })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-sm mb-3", children: sn[K.id] || Number(K.reviewCount || 0) > 0 && Number.isFinite(Number(K.rating)) ? /* @__PURE__ */ d(ie, { children: [
            /* @__PURE__ */ s("span", { className: "text-yellow-500", children: "⭐⭐⭐⭐⭐" }),
            /* @__PURE__ */ d("span", { className: "text-gray-700", children: [
              Number(sn[K.id]?.average ?? K.rating).toFixed(1),
              " (",
              Number(sn[K.id]?.count ?? K.reviewCount),
              " ",
              Number(sn[K.id]?.count ?? K.reviewCount) === 1 ? "review" : "reviews",
              ")"
            ] })
          ] }) : /* @__PURE__ */ s("span", { className: "text-gray-500", children: "No reviews yet" }) }),
          /* @__PURE__ */ s(D.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => n(un(K)), className: "mt-auto w-full inline-flex items-center justify-center text-white font-semibold py-2 rounded-lg transition-colors shadow-sm", style: { backgroundColor: "#2563eb" }, children: "View Details" })
        ] }, K.id || K.name)),
        pe.length > R && !P && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 flex justify-center mt-6 md:hidden", children: /* @__PURE__ */ s(D.button, { whileTap: { scale: 0.98 }, onClick: () => {
          M((K) => K + 10), C(!0);
        }, className: "px-8 py-3 border-2 border-blue-600 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors", children: "Load More" }) })
      ] }) })
    ] }),
    r && /* @__PURE__ */ s(D.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-x-hidden", onClick: () => n(null), children: /* @__PURE__ */ d(D.div, { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.9, opacity: 0 }, onClick: (K) => K.stopPropagation(), className: "bg-white rounded-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl", style: { width: window.innerWidth >= 768 ? "min(52rem, calc(100vw - 4rem))" : "calc(100vw - 2rem)" }, children: [
      /* @__PURE__ */ d("div", { className: "relative h-80 overflow-hidden rounded-t-2xl", children: [
        getDetailGalleryPhotos(r).length > 0 ? (() => {
          const K = getDetailGalleryPhotos(r);
          return /* @__PURE__ */ d(ie, { children: [
            /* @__PURE__ */ s(Pt, { mode: "wait", children: /* @__PURE__ */ s(
              D.img,
              {
                src: K[tn],
                alt: `${r.name} ${tn + 1}`,
                className: "w-full h-80 object-cover",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.35 }
              },
              tn
            ) }),
            K.length > 1 && /* @__PURE__ */ d(ie, { children: [
              /* @__PURE__ */ s("button", { onClick: Un, className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg", children: /* @__PURE__ */ s(Qp, { className: "w-6 h-6 text-gray-800" }) }),
              /* @__PURE__ */ s("button", { onClick: Gn, className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg", children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-gray-800" }) }),
              /* @__PURE__ */ s("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: K.map((L, y) => /* @__PURE__ */ s("button", { onClick: () => en(y), className: `w-3 h-3 rounded-full transition-all ${y === tn ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}` }, y)) })
            ] })
          ] });
        })() : /* @__PURE__ */ s("img", { src: Wr, alt: r.name, className: "w-full h-80 object-cover" }),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => n(null),
            className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg z-20",
            children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-gray-700" })
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "p-4 md:p-6 space-y-4", children: [
        /* @__PURE__ */ d("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ s("h2", { className: "text-gray-900 mb-2", children: r.name }),
          /* @__PURE__ */ d("div", { className: "flex items-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ s("span", { children: "📍" }),
            /* @__PURE__ */ s("span", { children: [r.city, ", SC"] })
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Description" }),
          /* @__PURE__ */ s("p", { className: "text-gray-700", children: r.description || r.about || "Description not provided." })
        ] }),
        /* @__PURE__ */ d("div", { className: "grid md:grid-cols-2 gap-4 min-w-0", children: [
          /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-blue-50 rounded-lg w-full max-w-full min-w-0", children: [
            /* @__PURE__ */ s(ar, { className: "w-5 h-5 text-blue-600 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ d("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Address" }),
              /* @__PURE__ */ d("p", { className: "text-blue-700 break-words", children: [
                /* @__PURE__ */ s("span", { className: "block", children: r.address || "Address unavailable" }),
                /* @__PURE__ */ d("span", { className: "block", children: [r.city, ", SC ", r.zipCode || ""] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-blue-50 rounded-lg w-full max-w-full min-w-0", children: [
            /* @__PURE__ */ s(Dn, { className: "w-5 h-5 text-blue-600 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ d("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Phone" }),
              /* @__PURE__ */ s("a", { href: `tel:${r.phone}`, className: "text-blue-700 hover:underline break-all", children: r.phone })
            ] })
          ] }),
          r.hours && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-blue-50 rounded-lg md:col-span-2 w-full max-w-full min-w-0", children: [
            /* @__PURE__ */ s(im, { className: "w-5 h-5 text-blue-600 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Hours / Availability" }),
              /* @__PURE__ */ d("div", { className: "space-y-3 text-xs sm:text-sm md:text-base", children: [
                /* @__PURE__ */ s("div", { className: "md:hidden space-y-3", children: [["monday", "tuesday"], ["wednesday", "thursday"], ["friday", "saturday"], ["sunday"]].map((L, y) => /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-x-3", children: L.map((F) => /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ s("p", { className: "capitalize text-gray-500", children: F }),
                  /* @__PURE__ */ s("p", { className: "text-blue-700 whitespace-nowrap", children: r.hours[F] || "-" })
                ] }, F)) }, y)) }),
                /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["monday", "tuesday", "wednesday", "thursday"].map((L) => /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ s("p", { className: "capitalize text-gray-500", children: L }),
                  /* @__PURE__ */ s("p", { className: "text-blue-700 whitespace-nowrap", children: r.hours[L] || "-" })
                ] }, L)) }),
                /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["friday", "saturday", "sunday"].map((L) => /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ s("p", { className: "capitalize text-gray-500", children: L }),
                  /* @__PURE__ */ s("p", { className: "text-blue-700 whitespace-nowrap", children: r.hours[L] || "-" })
                ] }, L)) })
              ] })
            ] })
          ] }),
          r.website && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-blue-50 rounded-lg w-full max-w-full min-w-0 overflow-hidden md:justify-self-start", style: { width: window.innerWidth >= 768 ? "fit-content" : "100%" }, children: [
            /* @__PURE__ */ s(Js, { className: "w-5 h-5 text-blue-600 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ d("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Website" }),
              /* @__PURE__ */ s(
                "a",
                {
                  href: r.website.startsWith("http") ? r.website : `https://${r.website}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-700 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block whitespace-normal md:whitespace-nowrap max-w-full break-all md:break-normal",
                  style: { overflowWrap: "anywhere", wordBreak: "break-word" },
                  children: r.website
                }
              )
            ] })
          ] })
        ] }),
        Array.isArray(r.paymentMethods) && r.paymentMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Payment Methods" }),
          /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: r.paymentMethods.map((L) => /* @__PURE__ */ s("span", { className: "bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-sm", children: L }, L)) })
        ] }),
        Array.isArray(r.trainingMethods) && r.trainingMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Training Methods" }),
          /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: r.trainingMethods.map((L) => /* @__PURE__ */ s("span", { className: "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm", children: L }, L)) })
        ] }),
        Array.isArray(r.sessionFormats) && r.sessionFormats.length > 0 && /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Session Formats" }),
          /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: r.sessionFormats.map((L) => /* @__PURE__ */ s("span", { className: "bg-indigo-100 border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium", children: L }, L)) })
        ] }),
        Array.isArray(r.specialties) && r.specialties.length > 0 && /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Specialties" }),
          /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: r.specialties.map((L) => /* @__PURE__ */ s("span", { className: "bg-cyan-100 border border-cyan-200 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium", children: L }, L)) })
        ] }),
        Array.isArray(r.specialFeatures) && r.specialFeatures.length > 0 && /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Special Features" }),
          /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: r.specialFeatures.map((L) => /* @__PURE__ */ d("span", { className: "bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm", children: [
            "✨ ",
            L
          ] }, L)) })
        ] }),
        Array.isArray(r.servicesOffered) && r.servicesOffered.length > 0 && /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-2", children: "Services Offered" }),
          /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: r.servicesOffered.map((L) => /* @__PURE__ */ s("span", { className: "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm", children: L }, L)) })
        ] }),
        (r.facebookPage || r.email) && /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 md:items-start gap-4 mb-2 min-w-0", children: [
          r.facebookPage && /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 rounded-lg w-full min-w-0", style: typeof window !== "undefined" && window.innerWidth >= 768 ? { alignSelf: "end", width: "fit-content", maxWidth: "100%", paddingRight: "0.5rem" } : void 0, children: [
            /* @__PURE__ */ s(Js, { className: "w-4 h-4 text-blue-600 flex-shrink-0" }),
            /* @__PURE__ */ s(
              "a",
              {
                href: r.facebookPage.startsWith("http") ? r.facebookPage : `https://${r.facebookPage}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-baseline gap-1 hover:underline text-sm leading-snug whitespace-nowrap",
                children: [
                  /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Facebook" }),
                  /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Link" })
                ]
              }
            )
          ] }),
          r.email && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-2 bg-blue-50 rounded-lg w-full min-w-0 overflow-hidden", children: [
            /* @__PURE__ */ s(Js, { className: "w-5 h-5 text-blue-600 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Email" }),
              /* @__PURE__ */ s(
                "a",
                {
                  href: `mailto:${r.email}`,
                  className: "text-blue-700 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block break-all md:break-normal md:whitespace-nowrap",
                  children: r.email
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s(D.a, { href: `tel:${r.phone}`, className: "hidden md:block w-full text-center text-white py-4 rounded-xl", style: { backgroundColor: "#2563eb" }, children: ["📞 Call ", r.name] }),
        Lr && (r.ownerId === Lr.id || Lr.isAdmin) && t && /* @__PURE__ */ d("div", { className: "space-y-3 mt-3", children: [
          /* @__PURE__ */ d(D.button, { onClick: () => {
            n(null), t(r);
          }, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors", children: [
            /* @__PURE__ */ s(Mm, { className: "w-5 h-5" }),
            "Edit Business Listing"
          ] }),
          /* @__PURE__ */ s(D.button, { onClick: Ql, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "flex items-center justify-center gap-2 w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed", disabled: an, children: [
            an ? /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }) : /* @__PURE__ */ s(Km, { className: "w-5 h-5" }),
            an ? "Deleting..." : "Delete Business Listing"
          ] })
        ] }),
        /* @__PURE__ */ s(BusinessLinkRequestBox, { business: r, user: Lr, onLinked: () => n({ ...r, ownerId: Lr?.id }) }),
        !(Lr && r.ownerId === Lr.id) && !Lr?.isAdmin && /* @__PURE__ */ d("div", { className: "bg-white border-2 border-blue-200 rounded-xl p-5 mt-4", children: [
          /* @__PURE__ */ s("h4", { className: "text-gray-800 mb-3", children: "Share Your Experience" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4", children: "No account needed — just enter your name and review." }),
          /* @__PURE__ */ d("div", { className: "space-y-3", children: [
            /* @__PURE__ */ s("input", { type: "text", placeholder: Lr?.name || "Your name", value: Qr.userName, onChange: (K) => dn({ ...Qr, userName: K.target.value }), className: "w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400" }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              [1, 2, 3, 4, 5].map((K) => /* @__PURE__ */ s("button", { type: "button", onClick: () => dn({ ...Qr, rating: K }), className: `text-2xl transition-transform hover:scale-110 ${K <= Qr.rating ? "opacity-100" : "opacity-30"}`, children: "⭐" }, K)),
              /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: ["(", Qr.rating, " ", Qr.rating === 1 ? "star" : "stars", ")"] })
            ] }),
            /* @__PURE__ */ s("textarea", { placeholder: "Share your experience with this trainer...", value: Qr.comment, onChange: (K) => dn({ ...Qr, comment: K.target.value }), rows: 4, className: "w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 resize-none" }),
            /* @__PURE__ */ s(D.button, { onClick: Jn, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full text-white py-3 rounded-lg transition-colors disabled:opacity-50", style: { backgroundColor: "#2563eb" }, disabled: vn || !Qr.comment.trim() || !Qr.userName.trim() && !Lr?.name, children: vn ? "Submitting..." : "Submit Review" })
          ] })
        ] }),
        Lr && r.ownerId === Lr.id && !Lr?.isAdmin && /* @__PURE__ */ d("div", { className: "text-center py-6 bg-blue-50 rounded-xl border-2 border-blue-200 mt-4", children: [
          /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "🏪" }),
          /* @__PURE__ */ s("p", { className: "text-gray-700 mb-2", children: "You own this business" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: "You can respond to customer reviews below" })
        ] }),
        Lr?.isAdmin && /* @__PURE__ */ d("div", { className: "bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mt-4", children: [
          /* @__PURE__ */ s("h4", { className: "text-gray-800", children: "Admin: Add Customer Review" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4", children: "Add verified customer reviews on behalf of clients." }),
          /* @__PURE__ */ d("div", { className: "space-y-3", children: [
            /* @__PURE__ */ s("input", { type: "text", placeholder: "Customer Name", value: Zr.reviewerName, onChange: (K) => rn({ ...Zr, reviewerName: K.target.value }), className: "w-full px-4 py-2 border-2 border-yellow-200 rounded-lg focus:outline-none focus:border-yellow-400" }),
            /* @__PURE__ */ d("select", { value: Zr.rating, onChange: (K) => rn({ ...Zr, rating: parseInt(K.target.value) }), className: "w-full px-4 py-2 border-2 border-yellow-200 rounded-lg focus:outline-none focus:border-yellow-400", children: [
              /* @__PURE__ */ s("option", { value: 5, children: "5 Stars" }),
              /* @__PURE__ */ s("option", { value: 4, children: "4 Stars" }),
              /* @__PURE__ */ s("option", { value: 3, children: "3 Stars" }),
              /* @__PURE__ */ s("option", { value: 2, children: "2 Stars" }),
              /* @__PURE__ */ s("option", { value: 1, children: "1 Star" })
            ] }),
            /* @__PURE__ */ s("textarea", { placeholder: "Customer review comment...", value: Zr.comment, onChange: (K) => rn({ ...Zr, comment: K.target.value }), rows: 3, className: "w-full px-4 py-2 border-2 border-yellow-200 rounded-lg focus:outline-none focus:border-yellow-400 resize-none" }),
            /* @__PURE__ */ s(D.button, { onClick: qn, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50", disabled: nn, children: nn ? "Adding Review..." : "Add Customer Review" })
          ] })
        ] }),
        Yr.length > 0 && /* @__PURE__ */ d("div", { className: "mt-4", children: [
          /* @__PURE__ */ s("h4", { className: "text-gray-800 mb-2", children: "Recent Reviews" }),
          /* @__PURE__ */ s("div", { className: "space-y-2", children: Yr.slice(0, 3).map((K) => /* @__PURE__ */ d("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-3", children: [
            /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("p", { className: "text-gray-800 text-sm", children: K.userName || K.reviewerName || "Customer" }),
                /* @__PURE__ */ s("p", { className: "text-yellow-500 text-sm", children: `${"⭐".repeat(Math.max(1, Math.min(5, K.rating || 5)))}` })
              ] }),
              Lr?.isAdmin && /* @__PURE__ */ s(
                "button",
                {
                  onClick: async () => {
                    if (prompt("Enter admin password to delete this review:") !== "9634") {
                      alert("Incorrect password. Review not deleted.");
                      return;
                    }
                    try {
                      await Oe.deleteReview(K.id), Xr((L) => L.filter((y) => y.id !== K.id));
                      const L = Yr.filter((y) => y.id !== K.id);
                      if (r && L.length > 0) {
                        const y = L.reduce((B, _) => B + _.rating, 0) / L.length;
                        cn((B) => ({
                          ...B,
                          [r.id]: {
                            average: y,
                            count: L.length
                          }
                        }));
                      } else if (r)
                        cn((y) => {
                          const B = { ...y };
                          return delete B[r.id], B;
                        });
                      alert("Review deleted successfully");
                    } catch (L) {
                      console.error("Error deleting review:", L), alert(L instanceof Error ? L.message : "Failed to delete review");
                    }
                  },
                  className: "text-red-600 hover:text-red-800",
                  children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: K.comment }),
            /* @__PURE__ */ s(ReviewOwnerReply, { review: K, business: r, user: Lr, onUpdated: (updated) => Xr((reviews) => reviews.map((rv) => rv.id === updated.id ? updated : rv)) })
          ] }, K.id || `${K.userName || K.reviewerName || "review"}-${K.comment}`)) })
        ] })
      ] })
    ] }) }),
    r && /* @__PURE__ */ d("div", { className: "md:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3", children: [
      /* @__PURE__ */ d(D.a, { href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${r.address}, ${r.city}, SC ${r.zipCode}`)}`, target: "_blank", rel: "noopener noreferrer", className: "flex-1 flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-700 py-3.5 rounded-xl hover:bg-blue-50 transition-colors", children: [
        /* @__PURE__ */ s(ar, { className: "w-5 h-5" }),
        /* @__PURE__ */ s("span", { children: "Directions" })
      ] }),
      /* @__PURE__ */ d(D.a, { href: `tel:${r.phone}`, className: "flex-1 flex items-center justify-center gap-2 text-white py-3.5 rounded-xl transition-colors", style: { backgroundColor: "#2563eb", border: "1px solid #1d4ed8" }, children: [
        /* @__PURE__ */ s(Dn, { className: "w-5 h-5" }),
        /* @__PURE__ */ s("span", { children: "Call" })
      ] })
    ] }),
    /* @__PURE__ */ s("section", { className: "hidden md:block py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white", children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ d(D.div, { className: "text-center", children: [
      /* @__PURE__ */ s("h2", { className: "mb-8", children: "Training Tips" }),
      /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6", children: [{ icon: "📅", title: "Stay Consistent", text: "Short daily reps beat long inconsistent sessions." }, { icon: "🦴", title: "Reward Good Choices", text: "Mark and reward what you want repeated." }, { icon: "🤝", title: "Practice Everywhere", text: "Generalize cues at home, outside, and in public." }].map((K) => /* @__PURE__ */ d("div", { className: "bg-white/15 rounded-xl p-6 border border-white/30", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-3", children: K.icon }),
        /* @__PURE__ */ s("h3", { className: "mb-2", children: K.title }),
        /* @__PURE__ */ s("p", { className: "text-white/90", children: K.text })
      ] }, K.title)) })
    ] }) }) }),
    /* @__PURE__ */ s("section", { className: "md:hidden pt-13 pb-8 px-4 bg-white", children: /* @__PURE__ */ d(D.div, { className: "bg-blue-50 rounded-xl p-6 shadow-md border border-blue-200", children: [
      /* @__PURE__ */ s("h2", { className: "mb-3 text-left", children: "Pet Products We Recommend" }),
      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6 text-left", children: "Training treats, clickers, and enrichment tools we trust and love." }),
      /* @__PURE__ */ s(D.button, { whileTap: { scale: 0.98 }, onClick: () => e?.("products"), className: "w-full px-6 py-3 text-white rounded-lg transition-colors", style: { backgroundColor: "#2563eb", border: "1px solid #1d4ed8" }, children: "Browse Pet Products →" })
    ] }) }),
    /* @__PURE__ */ s(Pt, { children: P && /* @__PURE__ */ d(ie, { children: [
      /* @__PURE__ */ s(D.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => N(!1), className: "md:hidden fixed inset-0 bg-black/50 z-50" }),
      /* @__PURE__ */ d(D.div, { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { type: "spring", damping: 30, stiffness: 300 }, className: "md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 max-h-[85vh] overflow-y-auto shadow-2xl", children: [
        /* @__PURE__ */ s("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-4 py-4 rounded-t-[20px]", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s("button", { onClick: () => {
            f(!1), g(!1), w(!1), T("all");
          }, className: "text-blue-600 hover:text-blue-700 transition-colors", children: "Clear" }),
          /* @__PURE__ */ s("h3", { className: "text-gray-900", children: "Filters" }),
          /* @__PURE__ */ s("button", { onClick: () => N(!1), className: "p-2 hover:bg-gray-100 rounded-full transition-colors", children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-gray-500" }) })
        ] }) }),
        /* @__PURE__ */ d("div", { className: "p-4 space-y-4", children: [
          /* @__PURE__ */ d("div", { className: "flex items-center justify-between cursor-pointer px-4 py-3 bg-white border-2 border-blue-200 rounded-lg", onClick: () => f(!m), children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s("span", { className: "text-xl", children: "🏠" }),
              /* @__PURE__ */ s("span", { className: "text-gray-700", children: "In-Home Training" })
            ] }),
            /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: m ? "#2563eb" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${m ? "translate-x-6" : "translate-x-1"}` }) })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex items-center justify-between cursor-pointer px-4 py-3 bg-white border-2 border-blue-200 rounded-lg", onClick: () => g(!v), children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s("span", { className: "text-xl", children: "👥" }),
              /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Group Classes Available" })
            ] }),
            /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: v ? "#2563eb" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${v ? "translate-x-6" : "translate-x-1"}` }) })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex items-center justify-between cursor-pointer px-4 py-3 bg-white border-2 border-blue-200 rounded-lg", onClick: () => w(!b), children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
              /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
            ] }),
            /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: b ? "#2563eb" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${b ? "translate-x-6" : "translate-x-1"}` }) })
          ] }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("label", { className: "text-sm text-gray-600 mb-2 block", children: "Price Range" }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-blue-200 rounded-lg", children: [
              /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-blue-600" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: x,
                  onChange: (K) => T(K.target.value),
                  className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "sticky bottom-0 bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ s(D.button, { whileTap: { scale: 0.98 }, onClick: () => {
          N(!1), M(10);
        }, className: "w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl hover:shadow-lg transition-shadow", children: "Apply Filters" }) })
      ] })
    ] }) })
  ] });
}
function lf({ onEditBusiness: t, onNavigate: e, onOpenLogin: r } = {}) {
  const [n, i] = E(null), [o, a] = E([]), [l, c] = E(!0), [u, h] = E(0), [p, m] = E([]), [f, v] = E({ userName: "", rating: 5, comment: "" }), [g, b] = E(!1), [w, x] = E({}), [T, P] = E(!1), [N, S] = E({ reviewerName: "", rating: 5, comment: "" }), [C, R] = E(!1), [M, k] = E(!1), { user: I, accessToken: z } = vi(), [ee, G] = E("all"), [pe, Ee] = E(!1), [W, te] = E(!1), [ae, ue] = E(!1), [Me, qe] = E("all"), [Ke, Ht] = E(""), [Re, Ye] = E("name"), [Be, mt] = E([]), [Nr, Xe] = E(!1), [ft, A] = E(10), [O, V] = E(!1), [H, se] = E(!1), [Ze, $e] = E(!1), [zt, gt] = E(""), [Ai, Ei] = E(void 0);
  U(() => {
    Mi(), jl();
  }, [I]), U(() => {
    window.scrollTo(0, 0);
  }, []), U(() => {
    A(10), se(!1);
  }, [Ke, ee, Re]), U(() => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      if (F.length > 1) {
        const B = setInterval(() => {
          h(
            (_) => _ === F.length - 1 ? 0 : _ + 1
          );
        }, 4e3);
        return () => clearInterval(B);
      }
    }
  }, [n, u]), U(() => {
    n && (h(0), Vl(n.id));
  }, [n]);
  const Mi = async () => {
    const Lf = [
      { id: "boarding-1", name: "Happy Tails Boarding", city: "Darlington", priceRange: "$", daycareAvailable: !0, address: "1406 Paws Lane", zipCode: "29532", phone: "(843) 555-0114", description: "Safe and playful overnight boarding and daycare with monitored indoor/outdoor yards.", paymentMethods: ["Cash", "Credit Card", "Debit Card"], boardingStyles: ["Kenneled", "Cage-Free"], servicesOffered: ["Overnight Boarding", "Daycare", "Grooming"], specialFeatures: ["Overnight Staff", "Webcam Access", "Outdoor Play Area"], photos: [Wr], hours: { monday: "7:00 AM - 7:00 PM", tuesday: "7:00 AM - 7:00 PM", wednesday: "7:00 AM - 7:00 PM", thursday: "7:00 AM - 7:00 PM", friday: "7:00 AM - 7:00 PM", saturday: "8:00 AM - 4:00 PM", sunday: "9:00 AM - 2:00 PM" } },
      { id: "boarding-2", name: "Darlington Pet Lodge", city: "Darlington", priceRange: "$", daycareAvailable: !1, address: "28 Country Kennel Dr", zipCode: "29540", phone: "(843) 555-0108", description: "Affordable long-stay boarding with flexible pickup windows and daily enrichment.", paymentMethods: ["Cash", "Credit Card"], boardingStyles: ["Kenneled"], servicesOffered: ["Overnight Boarding", "Training"], specialFeatures: ["Overnight Staff", "Outdoor Play Area"], photos: [Wr], hours: { monday: "8:00 AM - 6:00 PM", tuesday: "8:00 AM - 6:00 PM", wednesday: "8:00 AM - 6:00 PM", thursday: "8:00 AM - 6:00 PM", friday: "8:00 AM - 6:00 PM", saturday: "8:00 AM - 1:00 PM", sunday: "Closed" } },
      { id: "boarding-3", name: "Paws Paradise Resort", city: "Florence", priceRange: "$$", daycareAvailable: !0, address: "900 Riverbend Rd", zipCode: "29501", phone: "(843) 555-0168", description: "Premium boarding resort with structured daycare groups and daily report cards.", paymentMethods: ["Credit Card", "Debit Card", "Digital Wallet"], boardingStyles: ["Cage-Free", "Kenneled"], servicesOffered: ["Overnight Boarding", "Daycare", "Grooming", "Training"], specialFeatures: ["Overnight Staff", "Vet On-Site", "Webcam Access", "Outdoor Play Area"], photos: [Wr], hours: { monday: "6:30 AM - 7:30 PM", tuesday: "6:30 AM - 7:30 PM", wednesday: "6:30 AM - 7:30 PM", thursday: "6:30 AM - 7:30 PM", friday: "6:30 AM - 7:30 PM", saturday: "7:30 AM - 5:00 PM", sunday: "7:30 AM - 5:00 PM" } },
      { id: "boarding-4", name: "Florence Home Pet Stay", city: "Florence", priceRange: "$", daycareAvailable: !0, address: "74 Garden Path", zipCode: "29505", phone: "(843) 555-0135", description: "Boutique in-home boarding and small-group daycare designed for shy and senior pets.", paymentMethods: ["Cash", "Credit Card", "Check"], boardingStyles: ["In-Home"], servicesOffered: ["Overnight Boarding", "Daycare"], specialFeatures: ["Webcam Access", "Outdoor Play Area"], photos: [Wr], hours: { monday: "7:30 AM - 6:00 PM", tuesday: "7:30 AM - 6:00 PM", wednesday: "7:30 AM - 6:00 PM", thursday: "7:30 AM - 6:00 PM", friday: "7:30 AM - 6:00 PM", saturday: "9:00 AM - 12:00 PM", sunday: "Closed" } },
      { id: "boarding-5", name: "Canine Country Club", city: "Hartsville", priceRange: "$", daycareAvailable: !0, address: "411 Meadow Run", zipCode: "29550", phone: "(843) 555-0172", description: "Spacious play-based boarding and daycare campus with structured social sessions.", paymentMethods: ["Credit Card", "Debit Card"], boardingStyles: ["Cage-Free", "Kenneled"], servicesOffered: ["Overnight Boarding", "Daycare", "Training"], specialFeatures: ["Overnight Staff", "Webcam Access", "Outdoor Play Area"], photos: [Wr], hours: { monday: "7:00 AM - 7:00 PM", tuesday: "7:00 AM - 7:00 PM", wednesday: "7:00 AM - 7:00 PM", thursday: "7:00 AM - 7:00 PM", friday: "7:00 AM - 7:00 PM", saturday: "8:00 AM - 3:00 PM", sunday: "8:00 AM - 3:00 PM" } }
    ];
    try {
      const F = (await Oe.getBusinesses("boarding")).businesses || [];
      const ids = new Set(F.map((b) => b.id));
      const deletedLocal = ce.getDeletedBusinessIds("boarding");
      const deletedCloud = new Set(await fetchCloudDeletedBusinessIds("boarding"));
      const deletedAll = new Set([...deletedLocal, ...deletedCloud]);
      const merged = [...F, ...Lf.filter((s) => !ids.has(s.id) && !deletedAll.has(s.id))];
      a(merged), await Cr(merged);
    } catch (y) {
      const deletedLocal = ce.getDeletedBusinessIds("boarding");
      const fallback = Lf.filter((b) => !deletedLocal.has(b.id));
      console.error("Error fetching businesses:", y), a(fallback), await Cr(fallback);
    } finally {
      c(!1);
    }
  }, Cr = async (y) => {
    const F = {};
    await Promise.all(
      y.map(async (B) => {
        try {
          const Y = (await Oe.getReviews(B.id)).reviews || [];
          if (Y.length > 0) {
            const Te = Sr(Y);
            F[B.id] = {
              average: Te,
              count: Y.length
            };
          }
        } catch (_) {
          console.error(`Error fetching reviews for business ${B.id}:`, _);
        }
      })
    ), x(F);
  }, Vl = async (y) => {
    try {
      const F = await Oe.getReviews(y);
      m(F.reviews || []);
    } catch (F) {
      console.error("Error fetching reviews:", F), m([]);
    }
  }, jl = () => {
    try {
      bl(I);
      const y = sf(I);
      mt(y);
    } catch (y) {
      console.error("Error fetching shortlist:", y);
    }
  }, Hl = (y, F) => {
    F.stopPropagation();
    const B = Be.includes(y);
    try {
      if (B)
        xl(I, y), mt(Be.filter((_) => _ !== y)), gt("Removed from Shortlist"), Ei(void 0), $e(!0);
      else {
        const _ = o.find((Y) => Y.id === y);
        if (_) {
          console.log("🔍 Found business to add to shortlist:", _), console.log("🔍 Business rating:", w[_.id]);
          const Y = {
            id: _.id,
            name: _.name,
            category: "boarding",
            city: _.city,
            phone: _.phone,
            rating: w[_.id]?.average,
            photoUrl: _.photos?.[0],
            address: _.address,
            zipCode: _.zipCode
          };
          console.log("💾 Shortlist item to save:", Y), nf(I, Y), mt([...Be, y]), gt("Saved to Shortlist"), Ei(() => () => {
            e && e("shortlist");
          }), $e(!0);
        } else
          console.error("❌ Business not found in providers list:", y);
      }
    } catch (_) {
      console.error("Error updating shortlist:", _);
    }
  }, zl = async () => {
    const displayName = f.userName.trim() || I?.name || "";
    if (!displayName) {
      alert("Please enter your name");
      return;
    }
    if (!f.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    b(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        f.rating,
        f.comment,
        z,
        I ? void 0 : displayName
      );
      y.review && m([y.review, ...p]), await Cr(o), v({ userName: "", rating: 5, comment: "" }), alert("Review submitted successfully!");
    } catch (y) {
      console.error("Error submitting review:", y), alert(y instanceof Error ? y.message : "Failed to submit review. Please try again.");
    } finally {
      b(!1);
    }
  }, Wl = async () => {
    if (!I?.isAdmin) {
      alert("Admin access required to add customer reviews on behalf of clients.");
      return;
    }
    if (!N.reviewerName.trim()) {
      alert("Please enter a reviewer name");
      return;
    }
    if (!N.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    R(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        N.rating,
        N.comment,
        z,
        N.reviewerName
      );
      y.review && m([y.review, ...p]), await Cr(o), S({ reviewerName: "", rating: 5, comment: "" }), P(!1), alert("Review added successfully!");
    } catch (y) {
      console.error("Error submitting admin review:", y), alert(y instanceof Error ? y.message : "Failed to submit admin review. Please try again.");
    } finally {
      R(!1);
    }
  }, Sr = (y) => !y || y.length === 0 ? 0 : y.reduce((B, _) => B + _.rating, 0) / y.length, Tr = (y, F = "md") => {
    const B = Math.floor(y), _ = y % 1 >= 0.5, Y = 5 - B - (_ ? 1 : 0), Te = F === "sm" ? "w-4 h-4" : F === "lg" ? "w-6 h-6" : "w-5 h-5";
    return /* @__PURE__ */ d("div", { className: "flex items-center gap-0.5", children: [
      [...Array(B)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} fill-yellow-400 text-yellow-400` }, `full-${Pr}`)),
      _ && /* @__PURE__ */ s(Im, { className: `${Te} fill-yellow-400 text-yellow-400` }),
      [...Array(Y)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} text-gray-300` }, `empty-${Pr}`))
    ] });
  }, Ul = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === F.length - 1 ? 0 : B + 1
      );
    }
  }, Gl = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === 0 ? F.length - 1 : B - 1
      );
    }
  }, Ri = (y) => ({
    $: "Budget-Friendly",
    $$: "Moderate Pricing",
    $$$: "Premium Services",
    $$$$: "Luxury Experience"
  })[y] || "Price Range", ql = async () => {
    if (!(!I || !n || !window.confirm(
      `Are you sure you want to delete "${n.name}"? This action cannot be undone.`
    ))) {
      k(!0);
      try {
        await Oe.deleteBusiness(n.id, "boarding", z), alert("Business listing deleted successfully!"), i(null), await Mi();
      } catch (F) {
        console.error("Error deleting business:", F), alert(F instanceof Error ? F.message : "Failed to delete business. Please try again.");
      } finally {
        k(!1);
      }
    }
  }, yt = (() => {
    let y = o.filter((F) => !(Ke.trim() && !F.name.toLowerCase().includes(Ke.toLowerCase()) || ee !== "all" && !businessMatchesCityFilter(F.city, ee) || pe && !F.daycareAvailable || W && !(F.hours && (F.hours.saturday && !F.hours.saturday.toLowerCase().includes("closed") || F.hours.sunday && !F.hours.sunday.toLowerCase().includes("closed"))) || ae && (w[F.id]?.average || 0) < 4 || Me !== "all" && F.priceRange !== Me));
    return y.sort((F, B) => {
      if (Re === "name")
        return F.name.localeCompare(B.name);
      if (Re === "rating") {
        const _ = w[F.id]?.average || 0;
        return (w[B.id]?.average || 0) - _;
      } else if (Re === "price") {
        const _ = { $: 1, $$: 2, $$$: 3, $$$$: 4 }, Y = _[F.priceRange] || 0, Te = _[B.priceRange] || 0;
        return Y - Te;
      }
      return 0;
    }), y;
  })(), Kl = () => {
    V(!0), setTimeout(() => {
      A((y) => y + 10), setTimeout(() => {
        V(!1);
      }, 100);
    }, 3e3);
  }, Yl = () => /* @__PURE__ */ d("div", { className: "bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col animate-pulse", children: [
    /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full bg-gradient-to-br from-gray-200 to-gray-300", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s("div", { className: "absolute inset-0 shimmer" }) }) }),
    /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
      /* @__PURE__ */ s("div", { className: "h-6 bg-gray-200 rounded w-2/3" }),
      /* @__PURE__ */ s("div", { className: "h-8 w-8 bg-gray-200 rounded-full" })
    ] }),
    /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-3" }),
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ s("div", { className: "flex gap-1", children: [...Array(5)].map((y, F) => /* @__PURE__ */ s("div", { className: "h-4 w-4 bg-gray-200 rounded" }, F)) }),
      /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-20" })
    ] }),
    /* @__PURE__ */ s("div", { className: "mt-auto w-full h-10 bg-gray-200 rounded-lg" })
  ] });
  return /* @__PURE__ */ d("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ s("section", { className: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 text-white h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[31.5px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[320px] mx-auto px-1", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", children: "Pet Boarding Directory" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-90 leading-tight mt-0.5", children: "Free directory — compare local kennels." }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-75 leading-snug mt-1.5", children: "Independent boarding and daycare in Darlington, Hartsville & Florence." })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                animate: { rotate: [0, 5, -5, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                className: "md:text-4xl",
                children: "🏠"
              }
            ),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", children: "Pet Boarding Directory" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block max-w-2xl mx-auto mt-1", children: [
            /* @__PURE__ */ s("p", { className: "md:text-base leading-relaxed", children: "Free directory — boarding and daycare in Darlington, Hartsville and Florence for vacations, workdays, and extended trips." }),
            /* @__PURE__ */ s("p", { className: "text-sm opacity-80 leading-relaxed mt-2", children: "Compare independent facilities and contact providers directly." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "pt-0 md:py-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-2xl shadow-md md:shadow-sm p-3.5 md:p-4 mb-6 md:mb-4 mt-0 md:mt-0 flex flex-col sm:flex-row gap-3 md:gap-4",
          children: [
            /* @__PURE__ */ d("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ s(mr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  placeholder: "Search businesses by name...",
                  value: Ke,
                  onChange: (y) => Ht(y.target.value),
                  className: "w-full pl-10 pr-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-400 transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-3 md:hidden", children: [
              /* @__PURE__ */ d(
                "select",
                {
                  value: ee,
                  onChange: (y) => G(y.target.value),
                  className: "flex-1 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-400 transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                    /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                    /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                    /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg", children: [
                /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: Re,
                    onChange: (y) => Ye(y.target.value),
                    className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                    children: [
                      /* @__PURE__ */ s("option", { value: "name", children: "Name" }),
                      /* @__PURE__ */ s("option", { value: "rating", children: "Rating" }),
                      /* @__PURE__ */ s("option", { value: "price", children: "Price" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "hidden sm:block sm:w-auto", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg", children: [
              /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-green-600" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Re,
                  onChange: (y) => Ye(y.target.value),
                  className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                  children: [
                    /* @__PURE__ */ s("option", { value: "name", children: "Sort by Name" }),
                    /* @__PURE__ */ s("option", { value: "rating", children: "Sort by Rating" }),
                    /* @__PURE__ */ s("option", { value: "price", children: "Sort by Price" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => Xe(!0),
                className: "md:hidden flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-full transition-colors",
                style: { backgroundColor: "#15803d", border: "1px solid #166534" },
                children: [
                  /* @__PURE__ */ s(Am, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s("span", { className: "text-sm", children: "Filters" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8",
          style: { backgroundColor: "#86efac" },
          children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 items-stretch justify-between", children: [
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto", children: /* @__PURE__ */ d(
              "select",
              {
                value: ee,
                onChange: (y) => G(y.target.value),
                className: "w-full h-full px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-400 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                  /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                  /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                  /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                ]
              }
            ) }),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg cursor-pointer hover:bg-green-100 transition-colors",
                onClick: () => Ee(!pe),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🏠" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Daycare Available" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: pe ? "#15803d" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pe ? "translate-x-6" : "translate-x-1"}`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg cursor-pointer hover:bg-green-100 transition-colors",
                onClick: () => te(!W),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "📅" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Open Weekends" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: W ? "#15803d" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${W ? "translate-x-6" : "translate-x-1"}`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center gap-3 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg cursor-pointer hover:bg-green-100 transition-colors",
                onClick: () => ue(!ae),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: ae,
                      onChange: (y) => ue(y.target.checked),
                      className: "w-5 h-5 text-green-600 rounded cursor-pointer ml-auto"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Price Range" })
              ] }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Me,
                  onChange: (y) => qe(y.target.value),
                  className: "px-3 py-1 bg-white border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-400 transition-colors cursor-pointer ml-auto",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0 px-4 md:px-0", children: l ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🐾" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "Loading boarding businesses..." })
      ] }) : yt.length === 0 ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-6 md:py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🔍" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No matches found" }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 md:hidden", children: "Try a different city, adjust filters, or clear your search." }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 hidden md:block", children: "Try adjusting your search criteria." }),
        /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: () => {
              Ht(""), Ee(!1), te(!1), ue(!1), qe("all"), G("all"), Ye("name");
            },
            className: "md:hidden mt-6 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-shadow",
            children: "Clear Filters"
          }
        )
      ] }) : /* @__PURE__ */ d(ie, { children: [
        (window.innerWidth >= 768 ? yt : yt.slice(0, ft)).map((y, F) => /* @__PURE__ */ d(
          D.div,
          {
            initial: window.innerWidth >= 768 ? { opacity: 0, y: 30 } : !1,
            animate: window.innerWidth >= 768 ? void 0 : { opacity: 1, y: 0 },
            whileInView: window.innerWidth >= 768 ? { opacity: 1, y: 0 } : void 0,
            viewport: window.innerWidth >= 768 ? { once: !0, margin: "0px 0px -100px 0px" } : void 0,
            transition: window.innerWidth >= 768 ? { duration: 0.3 } : void 0,
            whileHover: { y: window.innerWidth >= 768 ? -5 : 0 },
            onClick: () => window.innerWidth < 768 && i(y),
            className: "bg-white rounded-xl shadow-md border border-gray-100 md:border-0 p-4 md:p-6 hover:shadow-xl transition-all md:cursor-default cursor-pointer flex flex-col active:shadow-2xl md:active:shadow-xl",
            children: [
              /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 md:-mx-6 md:-mt-6 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s(
                "img",
                {
                  src: y.photos && y.photos.length > 0 ? y.photos[y.cardPhotoIndex || 0] : Wr,
                  alt: y.name,
                  className: `absolute inset-0 w-full h-full rounded-t-xl ${y.photos && y.photos.length > 0 ? "object-cover" : "object-contain bg-gradient-to-br from-green-100 to-emerald-100"}`
                }
              ) }) }),
              /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
                /* @__PURE__ */ s("h3", { className: "text-gray-800", children: y.name }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 md:gap-2", children: [
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: (B) => Hl(y.id, B),
                      className: "p-2 rounded-full hover:bg-green-100 transition-colors",
                      "aria-label": Be.includes(y.id) ? "Remove from shortlist" : "Add to shortlist",
                      children: /* @__PURE__ */ s(
                        yi,
                        {
                          className: `w-6 h-6 transition-colors ${Be.includes(y.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"}`
                        }
                      )
                    }
                  ),
                  y.priceRange && /* @__PURE__ */ d("div", { className: "relative group", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-1 text-green-600 cursor-help", children: /* @__PURE__ */ s("span", { children: y.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10", children: [
                      Ri(y.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ d("p", { className: "text-gray-600", children: [
                  "📍 ",
                  y.city
                ] }),
                window.innerWidth < 768 && /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end ml-2", children: [
                  y.daycareAvailable && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full", children: "🏠 Daycare Available" }),
                  y.notAcceptingClients && /* @__PURE__ */ s("span", { className: `inline-flex items-center gap-1 text-red-700 ${window.innerWidth < 768 ? "justify-end text-right text-xs py-1" : "px-3 py-1 bg-red-100 text-sm rounded-full"}`, children: "🚫 Not Accepting New Clients" })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-3 md:gap-2", children: w[y.id] ? /* @__PURE__ */ d(ie, { children: [
                  Tr(w[y.id].average, "sm"),
                  /* @__PURE__ */ d("span", { className: "text-sm text-gray-600", children: [
                    w[y.id].average.toFixed(1),
                    " (",
                    w[y.id].count,
                    " ",
                    w[y.id].count === 1 ? "review" : "reviews",
                    ")"
                  ] })
                ] }) : /* @__PURE__ */ s("span", { className: "text-sm text-gray-500", children: "No reviews yet" }) }),
                window.innerWidth >= 768 && /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end", children: [
                  y.daycareAvailable && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full", children: "🏠 Daycare Available" }),
                  y.notAcceptingClients && /* @__PURE__ */ s("span", { className: `inline-flex items-center gap-1 text-red-700 ${window.innerWidth < 768 ? "justify-end text-right text-xs py-1" : "px-3 py-1 bg-red-100 text-sm rounded-full"}`, children: "🚫 Not Accepting New Clients" })
                ] })
              ] }),
              /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: (B) => {
                    window.innerWidth < 768 && B.stopPropagation(), i(y);
                  },
                  className: "mt-auto w-full inline-flex items-center justify-center text-white font-semibold py-2 rounded-lg transition-colors shadow-sm",
                  style: {
                    backgroundColor: window.innerWidth >= 768 ? "#16a34a" : "#15803d",
                    border: window.innerWidth >= 768 ? "1px solid #15803d" : "1px solid #166534",
                    color: "#ffffff"
                  },
                  children: "View Details"
                }
              )
            ]
          },
          y.id || y.name
        )),
        O && /* @__PURE__ */ s(ie, { children: [...Array(4)].map((y, F) => /* @__PURE__ */ s("div", { className: "md:hidden", children: /* @__PURE__ */ s(Yl, {}) }, `skeleton-${F}`)) }),
        yt.length > ft && !O && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 flex justify-center mt-6 md:hidden", children: /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: Kl,
            className: "px-8 py-3 border-2 border-green-700 text-green-700 rounded-xl hover:bg-green-50 transition-colors",
            children: "Load More"
          }
        ) }),
        yt.length > 0 && yt.length <= ft && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 text-center mt-6 md:hidden", children: /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "You've reached the end" }) })
      ] }) })
    ] }) }),
    n && /* @__PURE__ */ s(
      D.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-x-hidden",
        onClick: () => i(null),
        children: /* @__PURE__ */ d(
          D.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            onClick: (y) => y.stopPropagation(),
            className: "bg-white rounded-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl",
            style: { width: window.innerWidth >= 768 ? "min(52rem, calc(100vw - 4rem))" : "calc(100vw - 2rem)" },
            children: [
              /* @__PURE__ */ d("div", { className: "relative h-80 overflow-hidden rounded-t-2xl", children: [
                getDetailGalleryPhotos(n).length > 0 ? (() => {
                  const F = getDetailGalleryPhotos(n);
                  return F.length > 0 ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ s(Pt, { mode: "wait", children: /* @__PURE__ */ s(
                      D.img,
                      {
                        src: F[u],
                        alt: `${n.name} ${u + 1}`,
                        className: "w-full h-80 object-cover",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.5 }
                      },
                      u
                    ) }),
                    F.length > 1 && /* @__PURE__ */ d(ie, { children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Gl,
                          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Qp, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Ul,
                          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: F.map((B, _) => /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => h(_),
                          className: `w-3 h-3 rounded-full transition-all ${_ === u ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}`
                        },
                        _
                      )) })
                    ] })
                  ] }) : (
                    // Fallback to placeholder if no photos available
                    /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                      "img",
                      {
                        src: Wr,
                        alt: n.name,
                        className: "w-auto h-full object-contain"
                      }
                    ) })
                  );
                })() : /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                  "img",
                  {
                    src: Wr,
                    alt: n.name,
                    className: "w-auto h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ s("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => i(null),
                    className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-20",
                    children: /* @__PURE__ */ s(we, { className: "w-6 h-6 text-gray-800" })
                  }
                ),
                /* @__PURE__ */ d("div", { className: "absolute bottom-4 left-6 right-6 text-white z-10 pointer-events-none", children: [
                  /* @__PURE__ */ s("h2", { className: "mb-2 break-words", children: n.name }),
                  n.priceRange && /* @__PURE__ */ d("div", { className: "relative group pointer-events-auto", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-orange-400 cursor-help", children: /* @__PURE__ */ s("span", { className: "text-xl", children: n.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", children: [
                      Ri(n.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "p-4 md:p-6 pb-8 md:pb-6 mb-28 md:mb-0", children: [
                /* @__PURE__ */ s("p", { className: "text-gray-700 mb-6", children: n.description }),
                p.length > 0 && /* @__PURE__ */ s("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6 border border-yellow-200", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Overall Rating" }),
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
                      Tr(Sr(p), "lg"),
                      /* @__PURE__ */ s("span", { className: "text-3xl text-gray-800", children: Sr(p).toFixed(1) })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "text-right", children: [
                    /* @__PURE__ */ s("p", { className: "text-2xl text-gray-800", children: p.length }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: p.length === 1 ? "Review" : "Reviews" })
                  ] })
                ] }) }),
                /* @__PURE__ */ d("div", { className: "grid md:grid-cols-2 gap-4 mb-6 min-w-0", children: [
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-green-50 rounded-lg w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(ar, { className: "w-5 h-5 text-green-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Address" }),
                      /* @__PURE__ */ d(
                        "a",
                        {
                          href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            `${n.address}, ${n.city}, SC ${n.zipCode}`
                          )}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-green-600 hover:underline cursor-pointer break-words",
                          children: [
                            /* @__PURE__ */ s("span", { className: "block", children: n.address }),
                            /* @__PURE__ */ d("span", { className: "block", children: [
                              n.city,
                              ", SC ",
                              n.zipCode
                            ] })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-green-50 rounded-lg w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(Dn, { className: "w-5 h-5 text-green-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Phone" }),
                      /* @__PURE__ */ s("a", { href: `tel:${n.phone}`, className: "text-green-600 hover:underline break-all", children: n.phone })
                    ] })
                  ] }),
                  n.hours && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-green-50 rounded-lg md:col-span-2 w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(im, { className: "w-5 h-5 text-green-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Hours of Operation" }),
                      n.callForHours ? /* @__PURE__ */ s("p", { className: "text-green-600", children: "📞 Please Call for Hours of Operation" }) : /* @__PURE__ */ d("div", { className: "space-y-3 text-xs sm:text-sm md:text-base", children: [
                        /* @__PURE__ */ s("div", { className: "md:hidden space-y-3", children: [["monday", "tuesday"], ["wednesday", "thursday"], ["friday", "saturday"], ["sunday"]].map((y, F) => /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-x-3", children: y.map((B) => {
                          const _ = n.hours[B], Y = _?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: B }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${Y ? "text-red-600" : "text-green-600"}`, children: _ })
                          ] }, B);
                        }) }, F)) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["monday", "tuesday", "wednesday", "thursday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${B ? "text-red-600" : "text-green-600"}`, children: F })
                          ] }, y);
                        }) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["friday", "saturday", "sunday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${B ? "text-red-600" : "text-green-600"}`, children: F })
                          ] }, y);
                        }) })
                      ] })
                    ] })
                  ] }),
                  n.website && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-green-50 rounded-lg w-full max-w-full min-w-0 overflow-hidden md:justify-self-start", style: { width: window.innerWidth >= 768 ? "fit-content" : "100%" }, children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 text-green-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Website" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: n.website.startsWith("http") ? n.website : `https://${n.website}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-green-600 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block whitespace-normal md:whitespace-nowrap max-w-full break-all md:break-normal",
                          style: { overflowWrap: "anywhere", wordBreak: "break-word" },
                          children: n.website
                        }
                      )
                    ] })
                  ] }),
                ] }),
                n.paymentMethods && n.paymentMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-600 mb-3", children: "Payment Methods" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.paymentMethods.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm",
                      children: y
                    },
                    y
                  )) })
                ] }),
                n.boardingStyles && n.boardingStyles.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Boarding Style" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.boardingStyles.map((y) => /* @__PURE__ */ d(
                    "span",
                    {
                      className: "bg-green-50 text-green-600 px-4 py-2 rounded-lg",
                      children: [
                        "🏠 ",
                        y
                      ]
                    },
                    y
                  )) })
                ] }),
                n.daycareAvailable && /* @__PURE__ */ s("div", { className: "mb-6", children: /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-2 px-4 py-3 bg-green-50 border-2 border-green-200 text-green-700 rounded-lg", children: [
                  /* @__PURE__ */ s("span", { className: "text-2xl", children: "🏠" }),
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-800", children: "Daycare Available" }),
                    /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "Daytime care is available at this facility" })
                  ] })
                ] }) }),
                n.specialFeatures && n.specialFeatures.length > 0 && n.specialFeatures.some((y) => y.trim()) && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Special Features" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.specialFeatures.filter((y) => y.trim()).map((y) => /* @__PURE__ */ d(
                    "span",
                    {
                      className: "bg-green-50 text-green-600 px-4 py-2 rounded-lg",
                      children: [
                        "✨ ",
                        y
                      ]
                    },
                    y
                  )) })
                ] }),
                n.servicesOffered && n.servicesOffered.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Services Offered" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.servicesOffered.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full",
                      children: y
                    },
                    y
                  )) })
                ] }),
                (n.facebookPage || n.email) && /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 md:items-start gap-4 mb-6 min-w-0", children: [
                  n.facebookPage && /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-1.5 px-4 py-2 bg-green-50 rounded-lg w-full min-w-0", style: typeof window !== "undefined" && window.innerWidth >= 768 ? { alignSelf: "end", width: "fit-content", maxWidth: "100%", paddingRight: "0.5rem" } : void 0, children: [
                    /* @__PURE__ */ s(Js, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: n.facebookPage.startsWith("http") ? n.facebookPage : `https://${n.facebookPage}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-baseline gap-1 hover:underline text-sm leading-snug whitespace-nowrap",
                        children: [
                          /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Facebook" }),
                          /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Link" })
                        ]
                      }
                    )
                  ] }),
                  n.email && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-2 bg-green-50 rounded-lg w-full min-w-0 overflow-hidden", children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 text-green-600 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Email" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: `mailto:${n.email}`,
                          className: "text-green-600 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block break-all md:break-normal md:whitespace-nowrap",
                          children: n.email
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "hidden md:block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-colors text-center",
                    children: [
                      "📞 Call ",
                      n.name
                    ]
                  }
                ),
                I && (n.ownerId === I.id || I.isAdmin) && t && /* @__PURE__ */ d("div", { className: "space-y-3 mt-3", children: [
                  /* @__PURE__ */ d(
                    D.button,
                    {
                      onClick: () => {
                        i(null), t(n);
                      },
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors",
                      children: [
                        /* @__PURE__ */ s(Mm, { className: "w-5 h-5" }),
                        "Edit Business Listing"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      onClick: ql,
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      disabled: M,
                      children: M ? /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                        "Deleting..."
                      ] }) : /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s(Lt, { className: "w-5 h-5" }),
                        "Delete Business Listing"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ s(BusinessLinkRequestBox, { business: n, user: I, onLinked: () => i({ ...n, ownerId: I?.id }) }),
                /* @__PURE__ */ d("div", { className: "mt-6 border-t border-gray-200 pt-6", children: [
                  /* @__PURE__ */ d("h3", { className: "text-gray-800 mb-4", children: [
                    "Customer Reviews (",
                    p.length,
                    ")"
                  ] }),
                  p.length > 0 ? /* @__PURE__ */ s("div", { className: "space-y-4 mb-6", children: p.map((y) => /* @__PURE__ */ d(
                    D.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100",
                      children: [
                        /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                          /* @__PURE__ */ d("div", { children: [
                            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                              Tr(y.rating, "sm"),
                              /* @__PURE__ */ s("span", { className: "text-sm text-gray-800", children: y.userName })
                            ] }),
                            /* @__PURE__ */ s("p", { className: "text-xs text-gray-500", children: new Date(y.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            }) })
                          ] }),
                          I?.isAdmin && /* @__PURE__ */ s(
                            "button",
                            {
                              onClick: async () => {
                                if (prompt("Enter admin password to delete this review:") !== "9634") {
                                  alert("Incorrect password. Review not deleted.");
                                  return;
                                }
                                try {
                                  await Oe.deleteReview(y.id, z), m((_) => _.filter((Y) => Y.id !== y.id));
                                  const B = p.filter((_) => _.id !== y.id);
                                  if (B.length > 0) {
                                    const _ = B.reduce((Y, Te) => Y + Te.rating, 0) / B.length;
                                    x((Y) => ({
                                      ...Y,
                                      [n.id]: {
                                        average: _,
                                        count: B.length
                                      }
                                    }));
                                  } else
                                    x((_) => {
                                      const Y = { ..._ };
                                      return delete Y[n.id], Y;
                                    });
                                  alert("Review deleted successfully");
                                } catch (B) {
                                  console.error("Error deleting review:", B), alert("Failed to delete review");
                                }
                              },
                              className: "text-red-600 hover:text-red-800",
                              children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ s("p", { className: "text-gray-700 leading-relaxed", children: y.comment }),
                        /* @__PURE__ */ s(ReviewOwnerReply, { review: y, business: n, user: I, onUpdated: (updated) => m((reviews) => reviews.map((rv) => rv.id === updated.id ? updated : rv)) })
                      ]
                    },
                    y.id
                  )) }) : /* @__PURE__ */ d("div", { className: "text-center py-8 bg-gray-50 rounded-xl mb-6", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "⭐" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No reviews yet" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "Be the first to leave a review!" })
                  ] }),
                  I?.isAdmin ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ d("div", { className: "bg-blue-50 rounded-xl border-2 border-blue-200 mb-4", children: [
                      /* @__PURE__ */ d(
                        "button",
                        {
                          onClick: () => P(!T),
                          className: "w-full p-5 flex items-center justify-between text-left",
                          children: [
                            /* @__PURE__ */ d("div", { children: [
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                                /* @__PURE__ */ s("span", { className: "text-2xl", children: "👨‍💼" }),
                                /* @__PURE__ */ s("h4", { className: "text-gray-800", children: "Admin: Add Customer Review" })
                              ] }),
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "Transfer existing online reviews to your listing" })
                            ] }),
                            /* @__PURE__ */ s(
                              D.div,
                              {
                                animate: { rotate: T ? 180 : 0 },
                                transition: { duration: 0.3 },
                                children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-blue-600" })
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(Pt, { children: T && /* @__PURE__ */ s(
                        D.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3 },
                          className: "overflow-hidden",
                          children: /* @__PURE__ */ d("div", { className: "px-5 pb-5 border-t border-blue-200 pt-4", children: [
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Reviewer Name *" }),
                              /* @__PURE__ */ s(
                                "input",
                                {
                                  type: "text",
                                  value: N.reviewerName,
                                  onChange: (y) => S({ ...N, reviewerName: y.target.value }),
                                  className: "w-full p-3 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Enter the reviewer's name"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Rating" }),
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                                [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                                  Ct,
                                  {
                                    className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= N.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                                    onClick: () => S({ ...N, rating: y })
                                  },
                                  y
                                )),
                                /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                                  "(",
                                  N.rating,
                                  " ",
                                  N.rating === 1 ? "star" : "stars",
                                  ")"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Review Comment *" }),
                              /* @__PURE__ */ s(
                                "textarea",
                                {
                                  value: N.comment,
                                  onChange: (y) => S({ ...N, comment: y.target.value }),
                                  className: "w-full p-4 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Paste the customer's review here...",
                                  rows: 4
                                }
                              )
                            ] }),
                            /* @__PURE__ */ s(
                              D.button,
                              {
                                onClick: Wl,
                                whileHover: { scale: 1.02 },
                                whileTap: { scale: 0.98 },
                                className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: C || !N.reviewerName.trim() || !N.comment.trim(),
                                children: C ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                                  /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                                  "Adding Review..."
                                ] }) : "Add Review"
                              }
                            )
                          ] })
                        }
                      ) })
                    ] })
                  ] }) : I && n.ownerId === I.id ? /* @__PURE__ */ d("div", { className: "text-center py-8 bg-green-50 rounded-xl border-2 border-green-200", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "🏪" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-700 mb-2", children: "You own this business" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: "You can respond to customer reviews below" })
                  ] }) : /* @__PURE__ */ d("div", { className: "bg-white border-2 border-green-200 rounded-xl p-5", children: [
                    /* @__PURE__ */ s("h4", { className: "text-gray-800 mb-3", children: "Share Your Experience" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4", children: "No account needed — just enter your name and review." }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Name *" }),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "text",
                          value: f.userName || "",
                          onChange: (y) => v({ ...f, userName: y.target.value }),
                          className: "w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-400 transition-colors",
                          placeholder: I?.name || "Enter your name"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Rating" }),
                      /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                        [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                          Ct,
                          {
                            className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= f.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                            onClick: () => v({ ...f, rating: y })
                          },
                          y
                        )),
                        /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                          "(",
                          f.rating,
                          " ",
                          f.rating === 1 ? "star" : "stars",
                          ")"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Review" }),
                      /* @__PURE__ */ s(
                        "textarea",
                        {
                          value: f.comment,
                          onChange: (y) => v({ ...f, comment: y.target.value }),
                          className: "w-full p-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-400 transition-colors",
                          placeholder: "Share your experience with this business...",
                          rows: 4
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s(
                      D.button,
                      {
                        onClick: zl,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        disabled: g || !f.comment.trim() || !f.userName.trim() && !I?.name,
                        children: g ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                          /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                          "Submitting..."
                        ] }) : "Submit Review"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "md:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3", children: [
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${n.address}, ${n.city}, SC ${n.zipCode}`
                    )}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 bg-white border-2 border-green-700 text-green-700 py-3.5 rounded-xl hover:bg-green-50 transition-colors",
                    children: [
                      /* @__PURE__ */ s(ar, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Directions" })
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-colors",
                    children: [
                      /* @__PURE__ */ s(Dn, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Call" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s("section", { className: "hidden md:block py-16 px-4 sm:px-6 lg:px-8 text-white", style: { backgroundColor: "#16a34a" }, children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: !0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-8", style: { color: "#ffffff" }, children: "Boarding Tips" }),
          /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6", children: [
            { icon: "📅", title: "Book Early", text: "Book boarding early during holidays" }, { icon: "💉", title: "Vaccinations", text: "Ask about vaccination requirements" }, { icon: "🏠", title: "Tour First", text: "Tour the facility before your first stay" }
          ].map((y, F) => /* @__PURE__ */ d(
            D.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              transition: { delay: F * 0.2 },
              className: "backdrop-blur-sm rounded-xl p-6",
              style: { backgroundColor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.38)" },
              children: [
                /* @__PURE__ */ s("div", { className: "text-4xl mb-3", children: y.icon }),
                /* @__PURE__ */ s("h3", { className: "mb-2", style: { color: "#ffffff" }, children: y.title }),
                /* @__PURE__ */ s("p", { style: { color: "#f9fafb" }, children: y.text })
              ]
            },
            y.title
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "md:hidden pt-13 pb-8 px-4 bg-white", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className: "bg-green-50 rounded-xl p-6 shadow-md border border-green-200",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-3 text-left", children: "Pet Products We Recommend" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6 text-left", children: "Carefully selected pet-approved toys and bedding essentials we trust and love." }),
          /* @__PURE__ */ s(
            D.button,
            {
              whileTap: { scale: 0.98 },
              onClick: () => e?.("products"),
              className: "w-full px-6 py-3 text-white rounded-lg transition-colors",
              style: { backgroundColor: "#15803d", border: "1px solid #166534" },
              children: "Browse Pet Products →"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ s(Pt, { children: Nr && /* @__PURE__ */ d(ie, { children: [
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => Xe(!1),
          className: "md:hidden fixed inset-0 bg-black/50 z-50"
        }
      ),
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 30, stiffness: 300 },
          className: "md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 max-h-[85vh] overflow-y-auto shadow-2xl",
          children: [
            /* @__PURE__ */ s("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-4 py-4 rounded-t-[20px]", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Ee(!1), te(!1), ue(!1), qe("all");
                  },
                  className: "text-green-600 hover:text-green-700 transition-colors",
                  children: "Clear"
                }
              ),
              /* @__PURE__ */ s("h3", { className: "text-gray-900", children: "Filters" }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Xe(!1),
                  className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-gray-500" })
                }
              )
            ] }) }),
            /* @__PURE__ */ d("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => Ee(!pe),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🏠" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Daycare Available" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: pe ? "#15803d" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pe ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => te(!W),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "📅" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Open Weekends" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: W ? "#15803d" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${W ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => ue(!ae),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: ae ? "#15803d" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${ae ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "text-sm text-gray-600 mb-2 block", children: "Price Range" }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-green-50 border-2 border-green-200 rounded-lg", children: [
                  /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-green-600" }),
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: Me,
                      onChange: (y) => qe(y.target.value),
                      className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700",
                      children: [
                        /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                        /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                        /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "sticky bottom-0 bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ s(
              D.button,
              {
                whileTap: { scale: 0.98 },
                onClick: () => {
                  Xe(!1), A(10);
                },
                className: "w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl hover:shadow-lg transition-shadow",
                children: "Apply Filters"
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ s(
      yl,
      {
        isVisible: Ze,
        message: zt,
        actionText: Ai ? "View" : void 0,
        onAction: Ai,
        onClose: () => $e(!1)
      }
    )
  ] });
}
function sittersServiceTerms(t) {
  return [...t.servicesOffered || [], ...t.boardingStyles || []].map((e) => String(e).toLowerCase());
}
function sittersFeatureText(t) {
  return (t.specialFeatures || []).map((e) => String(e).toLowerCase());
}
function sittersHasLegacyFeature(t, e) {
  const r = sittersFeatureText(t);
  return e.some((n) => r.some((i) => i.includes(n)));
}
function sittersMatchesService(t, e) {
  if (!e || e === "all") return !0;
  const r = sittersServiceTerms(t), n = {
    walking: ["dog walking", "potty break", "walk"],
    dropin: ["drop-in", "drop in", "drop-in visit"],
    housesitting: ["house sitting", "overnight", "overnight care", "overnight sitting"],
    petsitting: ["pet sitting", "cat visit", "puppy visit", "in-home visit"]
  };
  return (n[e] || []).some((i) => r.some((o) => o.includes(i)));
}
function sittersMatchFlag(t, e, r) {
  return !!t[e] || sittersHasLegacyFeature(t, r || []);
}
function sittersMobileToggle(t, e, r, n) {
  return /* @__PURE__ */ d("div", {
    className: "flex items-center justify-between cursor-pointer py-1",
    onClick: () => e(!t),
    children: [/* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [/* @__PURE__ */ s("span", { className: "text-xl", children: r }), /* @__PURE__ */ s("span", { className: "text-gray-700", children: n })] }), /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: t ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform " + (t ? "translate-x-6" : "translate-x-1"), style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })]
  });
}
function sittersServiceOptions() {
  return [/* @__PURE__ */ s("option", { value: "all", children: "All Services" }), /* @__PURE__ */ s("option", { value: "walking", children: "Dog Walking" }), /* @__PURE__ */ s("option", { value: "dropin", children: "Drop-In Visits" }), /* @__PURE__ */ s("option", { value: "housesitting", children: "House Sitting" }), /* @__PURE__ */ s("option", { value: "petsitting", children: "Pet Sitting" })];
}
function sittersCat({ onEditBusiness: t, onNavigate: e, onOpenLogin: r } = {}) {
  const [n, i] = E(null), [o, a] = E([]), [l, c] = E(!0), [u, h] = E(0), [p, m] = E([]), [f, v] = E({ userName: "", rating: 5, comment: "" }), [g, b] = E(!1), [w, x] = E({}), [T, P] = E(!1), [N, S] = E({ reviewerName: "", rating: 5, comment: "" }), [C, R] = E(!1), [M, k] = E(!1), { user: I, accessToken: z } = vi(), [ee, G] = E("all"), [pe, Ee] = E("all"), [ae, ue] = E(!1), [Me, qe] = E("all"), [sbIns, setSbIns] = E(!1), [sbCpr, setSbCpr] = E(!1), [Ke, Ht] = E(""), [Re, Ye] = E("name"), [Be, mt] = E([]), [Nr, Xe] = E(!1), [ft, A] = E(10), [O, V] = E(!1), [H, se] = E(!1), [Ze, $e] = E(!1), [zt, gt] = E(""), [Ai, Ei] = E(void 0), sbActiveCount = (pe !== "all" ? 1 : 0) + (Me !== "all" ? 1 : 0) + (ae ? 1 : 0) + (sbIns ? 1 : 0) + (sbCpr ? 1 : 0), sittersResetFilters = () => {
    Ht(""), Ee("all"), ue(!1), qe("all"), G("all"), Ye("name"), setSbIns(!1), setSbCpr(!1);
  };
  U(() => {
    Mi(), jl();
  }, [I]), U(() => {
    window.scrollTo(0, 0);
  }, []), U(() => {
    A(10), se(!1);
  }, [Ke, ee, Re, pe, Me, ae, sbIns, sbCpr]), U(() => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      if (F.length > 1) {
        const B = setInterval(() => {
          h(
            (_) => _ === F.length - 1 ? 0 : _ + 1
          );
        }, 4e3);
        return () => clearInterval(B);
      }
    }
  }, [n, u]), U(() => {
    n && (h(0), Vl(n.id));
  }, [n]);
  const Mi = async () => {
    const Lf = [
      { id: "sitters-1", name: "Oak Meadow Pet Sitters", city: "Florence", priceRange: "$", daycareAvailable: !0, address: "215 Oak Meadow Ln", zipCode: "29501", phone: "(843) 555-0191", description: "In-home pet sitting and daily dog walks with photo updates for Florence-area families.", paymentMethods: ["Cash", "Credit Card", "Venmo"], boardingStyles: ["In-Home Visits", "Dog Walking"], servicesOffered: ["Pet Sitting", "Dog Walking", "Drop-In Visits"], insuredBonded: !0, medicationAdmin: !0, photoUpdates: !0, mobileService: !0, petCprCertified: !0, specialFeatures: ["Photo Updates", "Medication Administration"], photos: [Wr], hours: { monday: "7:00 AM - 8:00 PM", tuesday: "7:00 AM - 8:00 PM", wednesday: "7:00 AM - 8:00 PM", thursday: "7:00 AM - 8:00 PM", friday: "7:00 AM - 8:00 PM", saturday: "8:00 AM - 6:00 PM", sunday: "8:00 AM - 6:00 PM" } },
      { id: "sitters-2", name: "Darlington Dog Walkers", city: "Darlington", priceRange: "$", daycareAvailable: !1, address: "88 Maple Creek Rd", zipCode: "29532", phone: "(843) 555-0188", description: "Reliable midday and after-work dog walks serving Darlington and nearby neighborhoods.", paymentMethods: ["Cash", "Credit Card"], boardingStyles: ["Dog Walking"], servicesOffered: ["Dog Walking", "Potty Breaks"], mobileService: !0, backgroundChecked: !0, photoUpdates: !0, specialFeatures: ["GPS Route Reports"], photos: [Wr], hours: { monday: "9:00 AM - 6:00 PM", tuesday: "9:00 AM - 6:00 PM", wednesday: "9:00 AM - 6:00 PM", thursday: "9:00 AM - 6:00 PM", friday: "9:00 AM - 6:00 PM", saturday: "10:00 AM - 2:00 PM", sunday: "Closed" } },
      { id: "sitters-3", name: "Hartsville Home Pet Care", city: "Hartsville", priceRange: "$", daycareAvailable: !0, address: "412 Pineview Dr", zipCode: "29550", phone: "(843) 555-0179", description: "Overnight pet sitting and vacation care in your home for dogs and cats in Hartsville.", paymentMethods: ["Credit Card", "Check"], boardingStyles: ["In-Home Visits", "Overnight Sitting"], servicesOffered: ["Pet Sitting", "Overnight Care", "Cat Visits"], insuredBonded: !0, medicationAdmin: !0, professionalMember: !0, specialFeatures: ["Meet and Greet Required", "Medication Administration"], photos: [Wr], hours: { monday: "8:00 AM - 7:00 PM", tuesday: "8:00 AM - 7:00 PM", wednesday: "8:00 AM - 7:00 PM", thursday: "8:00 AM - 7:00 PM", friday: "8:00 AM - 7:00 PM", saturday: "9:00 AM - 5:00 PM", sunday: "9:00 AM - 5:00 PM" } },
      { id: "sitters-4", name: "Florence Furry Friends", city: "Florence", priceRange: "$", daycareAvailable: !0, address: "601 Westfield Ave", zipCode: "29505", phone: "(843) 555-0163", description: "Flexible pet sitting, drop-in visits, and neighborhood dog walks across Florence.", paymentMethods: ["Cash", "Credit Card", "Digital Wallet"], boardingStyles: ["In-Home Visits", "Dog Walking"], servicesOffered: ["Pet Sitting", "Dog Walking", "Puppy Visits"], photoUpdates: !0, mobileService: !0, specialFeatures: ["Photo Updates", "Key Hold Service"], photos: [Wr], hours: { monday: "7:30 AM - 7:30 PM", tuesday: "7:30 AM - 7:30 PM", wednesday: "7:30 AM - 7:30 PM", thursday: "7:30 AM - 7:30 PM", friday: "7:30 AM - 7:30 PM", saturday: "8:00 AM - 4:00 PM", sunday: "8:00 AM - 4:00 PM" } }
    ];
    try {
      const F = (await Oe.getBusinesses("sitters")).businesses || [];
      const ids = new Set(F.map((b) => b.id));
      const deletedLocal = ce.getDeletedBusinessIds("sitters");
      const deletedCloud = new Set(await fetchCloudDeletedBusinessIds("sitters"));
      const deletedAll = new Set([...deletedLocal, ...deletedCloud]);
      const merged = [...F, ...Lf.filter((s) => !ids.has(s.id) && !deletedAll.has(s.id))];
      a(merged), await Cr(merged);
    } catch (y) {
      const deletedLocal = ce.getDeletedBusinessIds("sitters");
      const fallback = Lf.filter((b) => !deletedLocal.has(b.id));
      console.error("Error fetching businesses:", y), a(fallback), await Cr(fallback);
    } finally {
      c(!1);
    }
  }, Cr = async (y) => {
    const F = {};
    await Promise.all(
      y.map(async (B) => {
        try {
          const Y = (await Oe.getReviews(B.id)).reviews || [];
          if (Y.length > 0) {
            const Te = Sr(Y);
            F[B.id] = {
              average: Te,
              count: Y.length
            };
          }
        } catch (_) {
          console.error(`Error fetching reviews for business ${B.id}:`, _);
        }
      })
    ), x(F);
  }, Vl = async (y) => {
    try {
      const F = await Oe.getReviews(y);
      m(F.reviews || []);
    } catch (F) {
      console.error("Error fetching reviews:", F), m([]);
    }
  }, jl = () => {
    try {
      bl(I);
      const y = sf(I);
      mt(y);
    } catch (y) {
      console.error("Error fetching shortlist:", y);
    }
  }, Hl = (y, F) => {
    F.stopPropagation();
    const B = Be.includes(y);
    try {
      if (B)
        xl(I, y), mt(Be.filter((_) => _ !== y)), gt("Removed from Shortlist"), Ei(void 0), $e(!0);
      else {
        const _ = o.find((Y) => Y.id === y);
        if (_) {
          console.log("🔍 Found business to add to shortlist:", _), console.log("🔍 Business rating:", w[_.id]);
          const Y = {
            id: _.id,
            name: _.name,
            category: "sitters",
            city: _.city,
            phone: _.phone,
            rating: w[_.id]?.average,
            photoUrl: _.photos?.[0],
            address: _.address,
            zipCode: _.zipCode
          };
          console.log("💾 Shortlist item to save:", Y), nf(I, Y), mt([...Be, y]), gt("Saved to Shortlist"), Ei(() => () => {
            e && e("shortlist");
          }), $e(!0);
        } else
          console.error("❌ Business not found in providers list:", y);
      }
    } catch (_) {
      console.error("Error updating shortlist:", _);
    }
  }, zl = async () => {
    const displayName = f.userName.trim() || I?.name || "";
    if (!displayName) {
      alert("Please enter your name");
      return;
    }
    if (!f.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    b(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        f.rating,
        f.comment,
        z,
        I ? void 0 : displayName
      );
      y.review && m([y.review, ...p]), await Cr(o), v({ userName: "", rating: 5, comment: "" }), alert("Review submitted successfully!");
    } catch (y) {
      console.error("Error submitting review:", y), alert(y instanceof Error ? y.message : "Failed to submit review. Please try again.");
    } finally {
      b(!1);
    }
  }, Wl = async () => {
    if (!I?.isAdmin) {
      alert("Admin access required to add customer reviews on behalf of clients.");
      return;
    }
    if (!N.reviewerName.trim()) {
      alert("Please enter a reviewer name");
      return;
    }
    if (!N.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    R(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        N.rating,
        N.comment,
        z,
        N.reviewerName
      );
      y.review && m([y.review, ...p]), await Cr(o), S({ reviewerName: "", rating: 5, comment: "" }), P(!1), alert("Review added successfully!");
    } catch (y) {
      console.error("Error submitting admin review:", y), alert(y instanceof Error ? y.message : "Failed to submit admin review. Please try again.");
    } finally {
      R(!1);
    }
  }, Sr = (y) => !y || y.length === 0 ? 0 : y.reduce((B, _) => B + _.rating, 0) / y.length, Tr = (y, F = "md") => {
    const B = Math.floor(y), _ = y % 1 >= 0.5, Y = 5 - B - (_ ? 1 : 0), Te = F === "sm" ? "w-4 h-4" : F === "lg" ? "w-6 h-6" : "w-5 h-5";
    return /* @__PURE__ */ d("div", { className: "flex items-center gap-0.5", children: [
      [...Array(B)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} fill-yellow-400 text-yellow-400` }, `full-${Pr}`)),
      _ && /* @__PURE__ */ s(Im, { className: `${Te} fill-yellow-400 text-yellow-400` }),
      [...Array(Y)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} text-gray-300` }, `empty-${Pr}`))
    ] });
  }, Ul = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === F.length - 1 ? 0 : B + 1
      );
    }
  }, Gl = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === 0 ? F.length - 1 : B - 1
      );
    }
  }, Ri = (y) => ({
    $: "Budget-Friendly",
    $$: "Moderate Pricing",
    $$$: "Premium Services",
    $$$$: "Luxury Experience"
  })[y] || "Price Range", ql = async () => {
    if (!(!I || !n || !window.confirm(
      `Are you sure you want to delete "${n.name}"? This action cannot be undone.`
    ))) {
      k(!0);
      try {
        await Oe.deleteBusiness(n.id, "sitters", z), alert("Business listing deleted successfully!"), i(null), await Mi();
      } catch (F) {
        console.error("Error deleting business:", F), alert(F instanceof Error ? F.message : "Failed to delete business. Please try again.");
      } finally {
        k(!1);
      }
    }
  }, yt = (() => {
    let y = o.filter((F) => !(Ke.trim() && !F.name.toLowerCase().includes(Ke.toLowerCase()) || ee !== "all" && !businessMatchesCityFilter(F.city, ee) || pe !== "all" && !sittersMatchesService(F, pe) || ae && (w[F.id]?.average || 0) < 4 || Me !== "all" && F.priceRange !== Me || sbIns && !sittersMatchFlag(F, "insuredBonded", ["insured", "bonded"]) || sbCpr && !sittersMatchFlag(F, "petCprCertified", ["cpr", "first aid"])));
    return y.sort((F, B) => {
      if (Re === "name")
        return F.name.localeCompare(B.name);
      if (Re === "rating") {
        const _ = w[F.id]?.average || 0;
        return (w[B.id]?.average || 0) - _;
      } else if (Re === "price") {
        const _ = { $: 1, $$: 2, $$$: 3, $$$$: 4 }, Y = _[F.priceRange] || 0, Te = _[B.priceRange] || 0;
        return Y - Te;
      }
      return 0;
    }), y;
  })(), Kl = () => {
    V(!0), setTimeout(() => {
      A((y) => y + 10), setTimeout(() => {
        V(!1);
      }, 100);
    }, 3e3);
  }, Yl = () => /* @__PURE__ */ d("div", { className: "bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col animate-pulse", children: [
    /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full bg-gradient-to-br from-gray-200 to-gray-300", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s("div", { className: "absolute inset-0 shimmer" }) }) }),
    /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
      /* @__PURE__ */ s("div", { className: "h-6 bg-gray-200 rounded w-2/3" }),
      /* @__PURE__ */ s("div", { className: "h-8 w-8 bg-gray-200 rounded-full" })
    ] }),
    /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-3" }),
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ s("div", { className: "flex gap-1", children: [...Array(5)].map((y, F) => /* @__PURE__ */ s("div", { className: "h-4 w-4 bg-gray-200 rounded" }, F)) }),
      /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-20" })
    ] }),
    /* @__PURE__ */ s("div", { className: "mt-auto w-full h-10 bg-gray-200 rounded-lg" })
  ] });
  return /* @__PURE__ */ d("div", { className: "min-h-screen bg-pink-50 md:bg-gradient-to-b md:from-pink-100 md:to-pink-50", children: [
    /* @__PURE__ */ s("section", { className: "bg-gradient-to-br from-pink-400 via-rose-400 to-pink-600 text-white h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[31.5px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[320px] mx-auto px-1", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", children: "Pet Sitters Directory" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-90 leading-tight mt-0.5", children: "Free directory — compare local sitters." }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-75 leading-snug mt-1.5", children: "We do not provide sitting — independent sitters in Darlington, Hartsville & Florence." })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                animate: { rotate: [0, 5, -5, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                className: "md:text-4xl",
                children: "🦮"
              }
            ),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", children: "Pet Sitters Directory" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block max-w-2xl mx-auto mt-1", children: [
            /* @__PURE__ */ s("p", { className: "md:text-base leading-relaxed", children: "Free directory — pet sitting and dog walking in Darlington, Hartsville and Florence for vacations, workdays, and extended trips." }),
            /* @__PURE__ */ s("p", { className: "text-sm opacity-80 leading-relaxed mt-2", children: "We do not provide sitting — compare listings and contact providers directly." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "pt-0 md:py-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-100 via-pink-50 to-white", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-2xl shadow-md md:shadow-sm p-3.5 md:p-4 mb-6 md:mb-4 mt-0 md:mt-0 flex flex-col sm:flex-row gap-3 md:gap-4",
          children: [
            /* @__PURE__ */ d("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ s(mr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  placeholder: "Search businesses by name...",
                  value: Ke,
                  onChange: (y) => Ht(y.target.value),
                  className: "w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-3 md:hidden", children: [
              /* @__PURE__ */ d(
                "select",
                {
                  value: ee,
                  onChange: (y) => G(y.target.value),
                  className: "flex-1 px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                    /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                    /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                    /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg", children: [
                /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-pink-600" }),
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: Re,
                    onChange: (y) => Ye(y.target.value),
                    className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                    children: [
                      /* @__PURE__ */ s("option", { value: "name", children: "Name" }),
                      /* @__PURE__ */ s("option", { value: "rating", children: "Rating" }),
                      /* @__PURE__ */ s("option", { value: "price", children: "Price" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "hidden sm:block sm:w-auto", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg", children: [
              /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-pink-600" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Re,
                  onChange: (y) => Ye(y.target.value),
                  className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                  children: [
                    /* @__PURE__ */ s("option", { value: "name", children: "Sort by Name" }),
                    /* @__PURE__ */ s("option", { value: "rating", children: "Sort by Rating" }),
                    /* @__PURE__ */ s("option", { value: "price", children: "Sort by Price" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => Xe(!0),
                className: "md:hidden flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-full transition-colors",
                style: { backgroundColor: "#db2777", border: "1px solid #be185d" },
                children: [
                  /* @__PURE__ */ s(Am, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s("span", { className: "text-sm", children: "Filters" }),
                  sbActiveCount > 0 && /* @__PURE__ */ s("span", { className: "ml-1 px-2 py-0.5 bg-white/25 rounded-full text-xs", children: sbActiveCount })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8 border border-pink-300",
          style: { backgroundColor: "#fbcfe8" },
          children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row md:flex-nowrap gap-3 md:gap-2 items-stretch", children: [
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto shrink-0", children: /* @__PURE__ */ d(
              "select",
              {
                value: ee,
                onChange: (y) => G(y.target.value),
                className: "w-full h-full px-3 py-3 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer text-sm whitespace-nowrap",
                children: [
                  /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                  /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                  /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                  /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                ]
              }
            ) }),
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto shrink-0", children: /* @__PURE__ */ d(
              "select",
              {
                value: pe,
                onChange: (y) => Ee(y.target.value),
                className: "w-full h-full px-3 py-3 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer text-sm whitespace-nowrap",
                children: sittersServiceOptions()
              }
            ) }),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-2 px-3 py-3 bg-white border-2 border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors shrink-0 whitespace-nowrap",
                onClick: () => setSbIns(!sbIns),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                    /* @__PURE__ */ s("span", { className: "text-lg leading-none", children: "🛡️" }),
                    /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 whitespace-nowrap", children: "Insured & Bonded" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors", style: { backgroundColor: sbIns ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sbIns ? "translate-x-6" : "translate-x-1"}`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-2 px-3 py-3 bg-white border-2 border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors shrink-0 whitespace-nowrap",
                onClick: () => setSbCpr(!sbCpr),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                    /* @__PURE__ */ s("span", { className: "text-lg leading-none", children: "❤️" }),
                    /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 whitespace-nowrap", children: "CPR / First Aid" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors", style: { backgroundColor: sbCpr ? "#db2777" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sbCpr ? "translate-x-6" : "translate-x-1"}`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center gap-2 px-3 py-3 bg-white border-2 border-pink-300 rounded-lg cursor-pointer hover:bg-pink-50 transition-colors shrink-0 whitespace-nowrap",
                onClick: () => ue(!ae),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                    /* @__PURE__ */ s("span", { className: "text-lg leading-none", children: "🌟" }),
                    /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 whitespace-nowrap", children: ">4 Stars" })
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: ae,
                      onChange: (y) => ue(y.target.checked),
                      className: "w-5 h-5 shrink-0 text-pink-600 rounded cursor-pointer ml-auto"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-3 py-3 bg-white border-2 border-pink-300 rounded-lg shrink-0 whitespace-nowrap", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                /* @__PURE__ */ s(Zs, { className: "w-4 h-4 text-green-600 shrink-0" }),
                /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 whitespace-nowrap", children: "Price Range" })
              ] }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Me,
                  onChange: (y) => qe(y.target.value),
                  className: "px-2 py-1 bg-white border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400 transition-colors cursor-pointer ml-auto text-sm whitespace-nowrap shrink-0",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0 px-4 md:px-0", children: l ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🐾" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "Loading sitters and walkers..." })
      ] }) : yt.length === 0 ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-6 md:py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🔍" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No matches found" }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 md:hidden", children: "Try a different city, adjust filters, or clear your search." }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 hidden md:block", children: "Try adjusting your search criteria." }),
        /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: () => {
              sittersResetFilters();
            },
            className: "md:hidden mt-6 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl hover:shadow-lg transition-shadow",
            children: "Clear Filters"
          }
        )
      ] }) : /* @__PURE__ */ d(ie, { children: [
        (window.innerWidth >= 768 ? yt : yt.slice(0, ft)).map((y, F) => /* @__PURE__ */ d(
          D.div,
          {
            initial: window.innerWidth >= 768 ? { opacity: 0, y: 30 } : !1,
            animate: window.innerWidth >= 768 ? void 0 : { opacity: 1, y: 0 },
            whileInView: window.innerWidth >= 768 ? { opacity: 1, y: 0 } : void 0,
            viewport: window.innerWidth >= 768 ? { once: !0, margin: "0px 0px -100px 0px" } : void 0,
            transition: window.innerWidth >= 768 ? { duration: 0.3 } : void 0,
            whileHover: { y: window.innerWidth >= 768 ? -5 : 0 },
            onClick: () => window.innerWidth < 768 && i(y),
            className: "bg-white rounded-xl shadow-md border border-gray-100 md:border-0 p-4 md:p-6 hover:shadow-xl transition-all md:cursor-default cursor-pointer flex flex-col active:shadow-2xl md:active:shadow-xl",
            children: [
              /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 md:-mx-6 md:-mt-6 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s(
                "img",
                {
                  src: y.photos && y.photos.length > 0 ? y.photos[y.cardPhotoIndex || 0] : Wr,
                  alt: y.name,
                  className: `absolute inset-0 w-full h-full rounded-t-xl ${y.photos && y.photos.length > 0 ? "object-cover" : "object-contain bg-gradient-to-br from-pink-100 to-rose-100"}`
                }
              ) }) }),
              /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
                /* @__PURE__ */ s("h3", { className: "text-gray-800", children: y.name }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 md:gap-2", children: [
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: (B) => Hl(y.id, B),
                      className: "p-2 rounded-full hover:bg-pink-100 transition-colors",
                      "aria-label": Be.includes(y.id) ? "Remove from shortlist" : "Add to shortlist",
                      children: /* @__PURE__ */ s(
                        yi,
                        {
                          className: `w-6 h-6 transition-colors ${Be.includes(y.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"}`
                        }
                      )
                    }
                  ),
                  y.priceRange && /* @__PURE__ */ d("div", { className: "relative group", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-1 text-green-600 cursor-help", children: /* @__PURE__ */ s("span", { children: y.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10", children: [
                      Ri(y.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ d("p", { className: "text-gray-600", children: [
                  "📍 ",
                  y.city
                ] }),
                window.innerWidth < 768 && /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end ml-2", children: [
                  (y.servicesOffered && y.servicesOffered[0] ? /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: y.servicesOffered[0] }) : y.insuredBonded || sittersMatchFlag(y, "insuredBonded", ["insured", "bonded"]) ? /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: "🛡️ Insured" }) : null),
                  y.notAcceptingClients && /* @__PURE__ */ s("span", { className: `inline-flex items-center gap-1 text-red-700 ${window.innerWidth < 768 ? "justify-end text-right text-xs py-1" : "px-3 py-1 bg-red-100 text-sm rounded-full"}`, children: "🚫 Not Accepting New Clients" })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-3 md:gap-2", children: w[y.id] ? /* @__PURE__ */ d(ie, { children: [
                  Tr(w[y.id].average, "sm"),
                  /* @__PURE__ */ d("span", { className: "text-sm text-gray-600", children: [
                    w[y.id].average.toFixed(1),
                    " (",
                    w[y.id].count,
                    " ",
                    w[y.id].count === 1 ? "review" : "reviews",
                    ")"
                  ] })
                ] }) : /* @__PURE__ */ s("span", { className: "text-sm text-gray-500", children: "No reviews yet" }) }),
                window.innerWidth >= 768 && /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-end", children: [
                  (y.servicesOffered && y.servicesOffered[0] ? /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: y.servicesOffered[0] }) : y.insuredBonded || sittersMatchFlag(y, "insuredBonded", ["insured", "bonded"]) ? /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full", children: "🛡️ Insured" }) : null),
                  y.notAcceptingClients && /* @__PURE__ */ s("span", { className: `inline-flex items-center gap-1 text-red-700 ${window.innerWidth < 768 ? "justify-end text-right text-xs py-1" : "px-3 py-1 bg-red-100 text-sm rounded-full"}`, children: "🚫 Not Accepting New Clients" })
                ] })
              ] }),
              /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: (B) => {
                    window.innerWidth < 768 && B.stopPropagation(), i(y);
                  },
                  className: "mt-auto w-full inline-flex items-center justify-center text-white font-semibold py-2 rounded-lg transition-colors shadow-sm",
                  style: {
                    backgroundColor: window.innerWidth >= 768 ? "#ec4899" : "#db2777",
                    border: window.innerWidth >= 768 ? "1px solid #db2777" : "1px solid #be185d",
                    color: "#ffffff"
                  },
                  children: "View Details"
                }
              )
            ]
          },
          y.id || y.name
        )),
        O && /* @__PURE__ */ s(ie, { children: [...Array(4)].map((y, F) => /* @__PURE__ */ s("div", { className: "md:hidden", children: /* @__PURE__ */ s(Yl, {}) }, `skeleton-${F}`)) }),
        yt.length > ft && !O && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 flex justify-center mt-6 md:hidden", children: /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: Kl,
            className: "px-8 py-3 border-2 border-pink-700 text-pink-700 rounded-xl hover:bg-pink-50 transition-colors",
            children: "Load More"
          }
        ) }),
        yt.length > 0 && yt.length <= ft && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 text-center mt-6 md:hidden", children: /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "You've reached the end" }) })
      ] }) })
    ] }) }),
    n && /* @__PURE__ */ s(
      D.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-x-hidden",
        onClick: () => i(null),
        children: /* @__PURE__ */ d(
          D.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            onClick: (y) => y.stopPropagation(),
            className: "bg-white rounded-2xl max-h-[90vh] overflow-hidden overflow-x-hidden shadow-2xl flex flex-col",
            style: { width: window.innerWidth >= 768 ? "min(52rem, calc(100vw - 4rem))" : "calc(100vw - 2rem)" },
            children: [
              /* @__PURE__ */ s("div", { className: "flex-1 overflow-y-auto overflow-x-hidden min-h-0", children: [
              /* @__PURE__ */ d("div", { className: "relative h-80 overflow-hidden rounded-t-2xl", children: [
                getDetailGalleryPhotos(n).length > 0 ? (() => {
                  const F = getDetailGalleryPhotos(n);
                  return F.length > 0 ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ s(Pt, { mode: "wait", children: /* @__PURE__ */ s(
                      D.img,
                      {
                        src: F[u],
                        alt: `${n.name} ${u + 1}`,
                        className: "w-full h-80 object-cover",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.5 }
                      },
                      u
                    ) }),
                    F.length > 1 && /* @__PURE__ */ d(ie, { children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Gl,
                          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Qp, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Ul,
                          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: F.map((B, _) => /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => h(_),
                          className: `w-3 h-3 rounded-full transition-all ${_ === u ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}`
                        },
                        _
                      )) })
                    ] })
                  ] }) : (
                    // Fallback to placeholder if no photos available
                    /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                      "img",
                      {
                        src: Wr,
                        alt: n.name,
                        className: "w-auto h-full object-contain"
                      }
                    ) })
                  );
                })() : /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                  "img",
                  {
                    src: Wr,
                    alt: n.name,
                    className: "w-auto h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ s("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => i(null),
                    className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-20",
                    children: /* @__PURE__ */ s(we, { className: "w-6 h-6 text-gray-800" })
                  }
                ),
                /* @__PURE__ */ d("div", { className: "absolute bottom-4 left-6 right-6 text-white z-10 pointer-events-none", children: [
                  /* @__PURE__ */ s("h2", { className: "mb-2 break-words", children: n.name }),
                  n.priceRange && /* @__PURE__ */ d("div", { className: "relative group pointer-events-auto", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-orange-400 cursor-help", children: /* @__PURE__ */ s("span", { className: "text-xl", children: n.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", children: [
                      Ri(n.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "p-4 md:p-6 pb-8 md:pb-6", children: [
                /* @__PURE__ */ s("p", { className: "text-gray-700 mb-6", children: n.description }),
                p.length > 0 && /* @__PURE__ */ s("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6 border border-yellow-200", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Overall Rating" }),
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
                      Tr(Sr(p), "lg"),
                      /* @__PURE__ */ s("span", { className: "text-3xl text-gray-800", children: Sr(p).toFixed(1) })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "text-right", children: [
                    /* @__PURE__ */ s("p", { className: "text-2xl text-gray-800", children: p.length }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: p.length === 1 ? "Review" : "Reviews" })
                  ] })
                ] }) }),
                /* @__PURE__ */ d("div", { className: "grid md:grid-cols-2 gap-4 mb-6 min-w-0", children: [
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 rounded-lg w-full max-w-full min-w-0", style: { backgroundColor: "#fdf2f8" }, children: [
                    /* @__PURE__ */ s(ar, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#db2777" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Address" }),
                      /* @__PURE__ */ d(
                        "a",
                        {
                          href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            `${n.address}, ${n.city}, SC ${n.zipCode}`
                          )}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:underline cursor-pointer break-words",
                          style: { color: "#ff1493" },
                          children: [
                            /* @__PURE__ */ s("span", { className: "block", children: n.address }),
                            /* @__PURE__ */ d("span", { className: "block", children: [
                              n.city,
                              ", SC ",
                              n.zipCode
                            ] })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 rounded-lg w-full max-w-full min-w-0", style: { backgroundColor: "#fdf2f8" }, children: [
                    /* @__PURE__ */ s(Dn, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#db2777" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Phone" }),
                      /* @__PURE__ */ s("a", { href: `tel:${n.phone}`, className: "hover:underline break-all", style: { color: "#ff1493" }, children: n.phone })
                    ] })
                  ] }),
                  n.hours && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 rounded-lg md:col-span-2 w-full max-w-full min-w-0", style: { backgroundColor: "#fdf2f8" }, children: [
                    /* @__PURE__ */ s(im, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#db2777" } }),
                    /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Hours of Operation" }),
                      n.callForHours ? /* @__PURE__ */ s("p", { style: { color: "#db2777" }, children: "📞 Please Call for Hours of Operation" }) : /* @__PURE__ */ d("div", { className: "space-y-3 text-xs sm:text-sm md:text-base", children: [
                        /* @__PURE__ */ s("div", { className: "md:hidden space-y-3", children: [["monday", "tuesday"], ["wednesday", "thursday"], ["friday", "saturday"], ["sunday"]].map((y, F) => /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-x-3", children: y.map((B) => {
                          const _ = n.hours[B], Y = _?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: B }),
                            /* @__PURE__ */ s("span", { className: "font-medium whitespace-nowrap", style: { color: Y ? "#dc2626" : "#db2777" }, children: _ })
                          ] }, B);
                        }) }, F)) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["monday", "tuesday", "wednesday", "thursday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: "font-medium whitespace-nowrap", style: { color: B ? "#dc2626" : "#db2777" }, children: F })
                          ] }, y);
                        }) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["friday", "saturday", "sunday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: "font-medium whitespace-nowrap", style: { color: B ? "#dc2626" : "#db2777" }, children: F })
                          ] }, y);
                        }) })
                      ] })
                    ] })
                  ] }),
                  n.website && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 rounded-lg w-full max-w-full min-w-0 overflow-hidden md:justify-self-start", style: { backgroundColor: "#fdf2f8", width: window.innerWidth >= 768 ? "fit-content" : "100%" }, children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#db2777" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Website" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: n.website.startsWith("http") ? n.website : `https://${n.website}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block whitespace-normal md:whitespace-nowrap max-w-full break-all md:break-normal",
                          style: { overflowWrap: "anywhere", wordBreak: "break-word", color: "#ff1493" },
                          children: n.website
                        }
                      )
                    ] })
                  ] }),
                ] }),
                n.paymentMethods && n.paymentMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-600 mb-3", children: "Payment Methods" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.paymentMethods.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "px-3 py-1 rounded-full text-sm",
                      style: { backgroundColor: "#fdf2f8", color: "#be185d" },
                      children: y
                    },
                    y
                  )) })
                ] }),
                (n.insuredBonded || n.petCprCertified || n.backgroundChecked || n.professionalMember || n.medicationAdmin || n.photoUpdates || n.mobileService || sittersMatchFlag(n, "insuredBonded", ["insured", "bonded"]) || sittersMatchFlag(n, "petCprCertified", ["cpr", "first aid"]) || sittersMatchFlag(n, "backgroundChecked", ["background"]) || sittersMatchFlag(n, "professionalMember", ["napps", "psi"]) || sittersMatchFlag(n, "medicationAdmin", ["medication"]) || sittersMatchFlag(n, "photoUpdates", ["photo update", "gps route"])) && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Credentials & Care" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: [
                    (n.insuredBonded || sittersMatchFlag(n, "insuredBonded", ["insured", "bonded"])) && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "🛡️ Insured & Bonded" }),
                    (n.petCprCertified || sittersMatchFlag(n, "petCprCertified", ["cpr", "first aid"])) && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "❤️ CPR / First Aid" }),
                    (n.backgroundChecked || sittersMatchFlag(n, "backgroundChecked", ["background"])) && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "✅ Background Checked" }),
                    (n.professionalMember || sittersMatchFlag(n, "professionalMember", ["napps", "psi"])) && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "🏅 Pro Association" }),
                    (n.medicationAdmin || sittersMatchFlag(n, "medicationAdmin", ["medication"])) && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "💊 Medication OK" }),
                    (n.photoUpdates || sittersMatchFlag(n, "photoUpdates", ["photo update", "gps route"])) && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "📸 Photo Updates" }),
                    n.mobileService && /* @__PURE__ */ s("span", { className: "px-3 py-1 rounded-full text-sm", style: { backgroundColor: "#fdf2f8", color: "#be185d" }, children: "🚗 Comes to You" })
                  ].filter(Boolean) })
                ] }),
                n.boardingStyles && n.boardingStyles.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Service Type" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.boardingStyles.map((y) => /* @__PURE__ */ d(
                    "span",
                    {
                      className: "px-4 py-2 rounded-lg",
                      style: { backgroundColor: "#fdf2f8", color: "#db2777" },
                      children: [
                        "🏠 ",
                        y
                      ]
                    },
                    y
                  )) })
                ] }),
                n.specialFeatures && n.specialFeatures.length > 0 && n.specialFeatures.some((y) => y.trim()) && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Special Features" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.specialFeatures.filter((y) => y.trim()).map((y) => /* @__PURE__ */ d(
                    "span",
                    {
                      className: "px-4 py-2 rounded-lg",
                      style: { backgroundColor: "#fdf2f8", color: "#db2777" },
                      children: [
                        "✨ ",
                        y
                      ]
                    },
                    y
                  )) })
                ] }),
                n.servicesOffered && n.servicesOffered.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Services Offered" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.servicesOffered.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "px-4 py-2 rounded-full",
                      style: { backgroundColor: "#fce7f3", color: "#be185d" },
                      children: y
                    },
                    y
                  )) })
                ] }),
                (n.facebookPage || n.email) && /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 md:items-start gap-4 mb-6 min-w-0", children: [
                  n.facebookPage && /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg w-full min-w-0", style: Object.assign({ backgroundColor: "#fdf2f8" }, typeof window !== "undefined" && window.innerWidth >= 768 ? { alignSelf: "end", width: "fit-content", maxWidth: "100%", paddingRight: "0.5rem" } : {}), children: [
                    /* @__PURE__ */ s(Js, { className: "w-4 h-4 flex-shrink-0", style: { color: "#db2777" } }),
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: n.facebookPage.startsWith("http") ? n.facebookPage : `https://${n.facebookPage}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-baseline gap-1 hover:underline text-sm leading-snug whitespace-nowrap",
                        children: [
                          /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Facebook" }),
                          /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Link" })
                        ]
                      }
                    )
                  ] }),
                  n.email && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-2 rounded-lg w-full min-w-0 overflow-hidden", style: { backgroundColor: "#fdf2f8" }, children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#db2777" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Email" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: `mailto:${n.email}`,
                          className: "hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block break-all md:break-normal md:whitespace-nowrap",
                          style: { color: "#ff1493" },
                          children: n.email
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "hidden md:block w-full text-white py-4 rounded-xl transition-colors text-center",
                    style: { backgroundColor: "#db2777", border: "1px solid #be185d", color: "#ffffff" },
                    children: [
                      "📞 Call ",
                      n.name
                    ]
                  }
                ),
                I && (n.ownerId === I.id || I.isAdmin) && t && /* @__PURE__ */ d("div", { className: "space-y-3 mt-3", children: [
                  /* @__PURE__ */ d(
                    D.button,
                    {
                      onClick: () => {
                        i(null), t(n);
                      },
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors",
                      children: [
                        /* @__PURE__ */ s(Mm, { className: "w-5 h-5" }),
                        "Edit Business Listing"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      onClick: ql,
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      disabled: M,
                      children: M ? /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                        "Deleting..."
                      ] }) : /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s(Lt, { className: "w-5 h-5" }),
                        "Delete Business Listing"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ s(BusinessLinkRequestBox, { business: n, user: I, onLinked: () => i({ ...n, ownerId: I?.id }) }),
                /* @__PURE__ */ d("div", { className: "mt-6 border-t border-gray-200 pt-6", children: [
                  /* @__PURE__ */ d("h3", { className: "text-gray-800 mb-4", children: [
                    "Customer Reviews (",
                    p.length,
                    ")"
                  ] }),
                  p.length > 0 ? /* @__PURE__ */ s("div", { className: "space-y-4 mb-6", children: p.map((y) => /* @__PURE__ */ d(
                    D.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-100",
                      children: [
                        /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                          /* @__PURE__ */ d("div", { children: [
                            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                              Tr(y.rating, "sm"),
                              /* @__PURE__ */ s("span", { className: "text-sm text-gray-800", children: y.userName })
                            ] }),
                            /* @__PURE__ */ s("p", { className: "text-xs text-gray-500", children: new Date(y.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            }) })
                          ] }),
                          I?.isAdmin && /* @__PURE__ */ s(
                            "button",
                            {
                              onClick: async () => {
                                if (prompt("Enter admin password to delete this review:") !== "9634") {
                                  alert("Incorrect password. Review not deleted.");
                                  return;
                                }
                                try {
                                  await Oe.deleteReview(y.id, z), m((_) => _.filter((Y) => Y.id !== y.id));
                                  const B = p.filter((_) => _.id !== y.id);
                                  if (B.length > 0) {
                                    const _ = B.reduce((Y, Te) => Y + Te.rating, 0) / B.length;
                                    x((Y) => ({
                                      ...Y,
                                      [n.id]: {
                                        average: _,
                                        count: B.length
                                      }
                                    }));
                                  } else
                                    x((_) => {
                                      const Y = { ..._ };
                                      return delete Y[n.id], Y;
                                    });
                                  alert("Review deleted successfully");
                                } catch (B) {
                                  console.error("Error deleting review:", B), alert("Failed to delete review");
                                }
                              },
                              className: "text-red-600 hover:text-red-800",
                              children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ s("p", { className: "text-gray-700 leading-relaxed", children: y.comment }),
                        /* @__PURE__ */ s(ReviewOwnerReply, { review: y, business: n, user: I, onUpdated: (updated) => m((reviews) => reviews.map((rv) => rv.id === updated.id ? updated : rv)) })
                      ]
                    },
                    y.id
                  )) }) : /* @__PURE__ */ d("div", { className: "text-center py-8 bg-gray-50 rounded-xl mb-6", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "⭐" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No reviews yet" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "Be the first to leave a review!" })
                  ] }),
                  I?.isAdmin ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ d("div", { className: "bg-blue-50 rounded-xl border-2 border-blue-200 mb-4", children: [
                      /* @__PURE__ */ d(
                        "button",
                        {
                          onClick: () => P(!T),
                          className: "w-full p-5 flex items-center justify-between text-left",
                          children: [
                            /* @__PURE__ */ d("div", { children: [
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                                /* @__PURE__ */ s("span", { className: "text-2xl", children: "👨‍💼" }),
                                /* @__PURE__ */ s("h4", { className: "text-gray-800", children: "Admin: Add Customer Review" })
                              ] }),
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "Transfer existing online reviews to your listing" })
                            ] }),
                            /* @__PURE__ */ s(
                              D.div,
                              {
                                animate: { rotate: T ? 180 : 0 },
                                transition: { duration: 0.3 },
                                children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-blue-600" })
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(Pt, { children: T && /* @__PURE__ */ s(
                        D.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3 },
                          className: "overflow-hidden",
                          children: /* @__PURE__ */ d("div", { className: "px-5 pb-5 border-t border-blue-200 pt-4", children: [
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Reviewer Name *" }),
                              /* @__PURE__ */ s(
                                "input",
                                {
                                  type: "text",
                                  value: N.reviewerName,
                                  onChange: (y) => S({ ...N, reviewerName: y.target.value }),
                                  className: "w-full p-3 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Enter the reviewer's name"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Rating" }),
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                                [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                                  Ct,
                                  {
                                    className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= N.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                                    onClick: () => S({ ...N, rating: y })
                                  },
                                  y
                                )),
                                /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                                  "(",
                                  N.rating,
                                  " ",
                                  N.rating === 1 ? "star" : "stars",
                                  ")"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Review Comment *" }),
                              /* @__PURE__ */ s(
                                "textarea",
                                {
                                  value: N.comment,
                                  onChange: (y) => S({ ...N, comment: y.target.value }),
                                  className: "w-full p-4 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Paste the customer's review here...",
                                  rows: 4
                                }
                              )
                            ] }),
                            /* @__PURE__ */ s(
                              D.button,
                              {
                                onClick: Wl,
                                whileHover: { scale: 1.02 },
                                whileTap: { scale: 0.98 },
                                className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: C || !N.reviewerName.trim() || !N.comment.trim(),
                                children: C ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                                  /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                                  "Adding Review..."
                                ] }) : "Add Review"
                              }
                            )
                          ] })
                        }
                      ) })
                    ] })
                  ] }) : I && n.ownerId === I.id ? /* @__PURE__ */ d("div", { className: "text-center py-8 bg-pink-50 rounded-xl border-2 border-pink-200", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "🏪" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-700 mb-2", children: "You own this business" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: "You can respond to customer reviews below" })
                  ] }) : /* @__PURE__ */ d("div", { className: "bg-white border-2 border-pink-200 rounded-xl p-5", children: [
                    /* @__PURE__ */ s("h4", { className: "text-gray-800 mb-3", children: "Share Your Experience" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4", children: "No account needed — just enter your name and review." }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Name *" }),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "text",
                          value: f.userName || "",
                          onChange: (y) => v({ ...f, userName: y.target.value }),
                          className: "w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-pink-400 transition-colors",
                          placeholder: I?.name || "Enter your name"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Rating" }),
                      /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                        [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                          Ct,
                          {
                            className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= f.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                            onClick: () => v({ ...f, rating: y })
                          },
                          y
                        )),
                        /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                          "(",
                          f.rating,
                          " ",
                          f.rating === 1 ? "star" : "stars",
                          ")"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Review" }),
                      /* @__PURE__ */ s(
                        "textarea",
                        {
                          value: f.comment,
                          onChange: (y) => v({ ...f, comment: y.target.value }),
                          className: "w-full p-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-pink-400 transition-colors",
                          placeholder: "Share your experience with this business...",
                          rows: 4
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s(
                      D.button,
                      {
                        onClick: zl,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        className: "w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        disabled: g || !f.comment.trim() || !f.userName.trim() && !I?.name,
                        children: g ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                          /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                          "Submitting..."
                        ] }) : "Submit Review"
                      }
                    )
                  ] })
                ] })
              ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "md:hidden flex-shrink-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3", children: [
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${n.address}, ${n.city}, SC ${n.zipCode}`
                    )}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 bg-white border-2 border-pink-700 text-pink-700 py-3.5 rounded-xl hover:bg-pink-50 transition-colors",
                    children: [
                      /* @__PURE__ */ s(ar, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Directions" })
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 text-white py-3.5 rounded-xl transition-colors",
                    style: { backgroundColor: "#db2777", border: "1px solid #be185d" },
                    children: [
                      /* @__PURE__ */ s(Dn, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Call" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s("section", { className: "hidden md:block py-16 px-4 sm:px-6 lg:px-8 text-white", style: { backgroundColor: "#ec4899" }, children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: !0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-8", style: { color: "#ffffff" }, children: "Sitter Tips" }),
          /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6", children: [
            { icon: "🤝", title: "Meet & Greet", text: "Schedule a meet and greet before your first booking" }, { icon: "🛡️", title: "Verify Insurance", text: "Ask for proof of insurance and bonding" }, { icon: "🔑", title: "Share Details", text: "Leave clear feeding, meds, and emergency contacts" }
          ].map((y, F) => /* @__PURE__ */ d(
            D.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              transition: { delay: F * 0.2 },
              className: "backdrop-blur-sm rounded-xl p-6",
              style: { backgroundColor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.38)" },
              children: [
                /* @__PURE__ */ s("div", { className: "text-4xl mb-3", children: y.icon }),
                /* @__PURE__ */ s("h3", { className: "mb-2", style: { color: "#ffffff" }, children: y.title }),
                /* @__PURE__ */ s("p", { style: { color: "#f9fafb" }, children: y.text })
              ]
            },
            y.title
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "md:hidden pt-13 pb-8 px-4 bg-white", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className: "bg-pink-50 rounded-xl p-6 shadow-md border border-pink-200",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-3 text-left", children: "Pet Products We Recommend" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6 text-left", children: "Carefully selected pet-approved toys and bedding essentials we trust and love." }),
          /* @__PURE__ */ s(
            D.button,
            {
              whileTap: { scale: 0.98 },
              onClick: () => e?.("products"),
              className: "w-full px-6 py-3 text-white rounded-lg transition-colors",
              style: { backgroundColor: "#db2777", border: "1px solid #be185d" },
              children: "Browse Pet Products →"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ s(Pt, { children: Nr && /* @__PURE__ */ d(ie, { children: [
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => Xe(!1),
          className: "md:hidden fixed inset-0 bg-black/50 z-50"
        }
      ),
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 30, stiffness: 300 },
          className: "md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 max-h-[85vh] overflow-y-auto shadow-2xl",
          children: [
            /* @__PURE__ */ s("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-4 py-4 rounded-t-[20px]", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: sittersResetFilters,
                  className: "text-pink-600 hover:text-pink-700 transition-colors",
                  children: "Clear"
                }
              ),
              /* @__PURE__ */ s("h3", { className: "text-gray-900", children: "Filters" }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Xe(!1),
                  className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-gray-500" })
                }
              )
            ] }) }),
            /* @__PURE__ */ d("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("label", { className: "text-sm font-semibold text-gray-700 mb-2 block", children: "Service Type" }), /* @__PURE__ */ d("select", { value: pe, onChange: (y) => Ee(y.target.value), className: "w-full px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 cursor-pointer", children: sittersServiceOptions() })] }),
              sittersMobileToggle(sbIns, setSbIns, "🛡️", "Insured & Bonded"),
              sittersMobileToggle(sbCpr, setSbCpr, "❤️", "CPR / First Aid"),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer",
                  onClick: () => ue(!ae),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                    ] }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "checkbox",
                        checked: ae,
                        onChange: (y) => ue(y.target.checked),
                        className: "w-5 h-5 text-pink-600 rounded cursor-pointer"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { children: [/* @__PURE__ */ s("label", { className: "text-sm font-semibold text-gray-700 mb-2 block", children: "Price Range" }), /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-lg", children: [/* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-green-600" }), /* @__PURE__ */ d("select", { value: Me, onChange: (y) => qe(y.target.value), className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700", children: [/* @__PURE__ */ s("option", { value: "all", children: "All Prices" }), /* @__PURE__ */ s("option", { value: "$", children: "$" }), /* @__PURE__ */ s("option", { value: "$$", children: "$$" }), /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }), /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })] })] })] })
            ] }),
            /* @__PURE__ */ s("div", { className: "sticky bottom-0 bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ s(
              D.button,
              {
                whileTap: { scale: 0.98 },
                onClick: () => {
                  Xe(!1), A(10);
                },
                className: "w-full text-white py-3 rounded-xl hover:shadow-lg transition-shadow",
                style: { backgroundColor: "#db2777" },
                children: "Apply Filters"
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ s(
      yl,
      {
        isVisible: Ze,
        message: zt,
        actionText: Ai ? "View" : void 0,
        onAction: Ai,
        onClose: () => $e(!1)
      }
    )
  ] });
}

function cf({ onEditBusiness: t, onNavigate: e, onOpenLogin: r } = {}) {
  const [n, i] = E(null), [o, a] = E([]), [l, c] = E(!0), [u, h] = E(0), [p, m] = E([]), [f, v] = E({ userName: "", rating: 5, comment: "" }), [g, b] = E(!1), [w, x] = E({}), [T, P] = E(!1), [N, S] = E({ reviewerName: "", rating: 5, comment: "" }), [C, R] = E(!1), [M, k] = E(!1), { user: I, accessToken: z } = vi(), [ee, G] = E("all"), [pe, Ee] = E(!1), [W, te] = E(!1), [ae, ue] = E(!1), [Me, qe] = E("all"), [Ke, Ht] = E(""), [Re, Ye] = E("name"), [Be, mt] = E([]), [Nr, Xe] = E(!1), [ft, A] = E(10), [O, V] = E(!1), [H, se] = E(!1), [Ze, $e] = E(!1), [zt, gt] = E(""), [Ai, Ei] = E(void 0);
  U(() => {
    Mi(), jl();
  }, [I]), U(() => {
    window.scrollTo(0, 0);
  }, []), U(() => {
    A(10), se(!1);
  }, [Ke, ee, Re]), U(() => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      if (F.length > 1) {
        const B = setInterval(() => {
          h(
            (_) => _ === F.length - 1 ? 0 : _ + 1
          );
        }, 4e3);
        return () => clearInterval(B);
      }
    }
  }, [n, u]), U(() => {
    n && (h(0), Vl(n.id));
  }, [n]);
  const Mi = async () => {
    const Lf = [
      { id: "vet-1", name: "Darlington Animal Hospital", city: "Darlington", rating: 4.9, priceRange: "$$$", emergency24x7: !0, acceptingNewPatients: !0, address: "1201 Vet Center Dr", zipCode: "29532", phone: "(843) 555-0147", description: "Full-service veterinary hospital offering preventive care, diagnostics, surgery, and 24/7 emergency treatment.", paymentMethods: ["Cash", "Credit Card", "CareCredit", "Pet Insurance Accepted"], servicesOffered: ["General Practice", "Surgery", "Emergency Care", "Dental"], specialFeatures: ["Accepting New Patients", "Online Booking", "Boarding Available"], photos: [Wr], hours: { monday: "8:00 AM - 6:00 PM", tuesday: "8:00 AM - 6:00 PM", wednesday: "8:00 AM - 6:00 PM", thursday: "8:00 AM - 6:00 PM", friday: "8:00 AM - 6:00 PM", saturday: "9:00 AM - 2:00 PM", sunday: "Emergency Only" } },
      { id: "vet-2", name: "Florence Veterinary Clinic", city: "Florence", rating: 4.7, priceRange: "$$", emergency24x7: !1, acceptingNewPatients: !0, address: "402 Palmetto Rd", zipCode: "29501", phone: "(843) 555-0121", description: "Compassionate routine and urgent care with modern diagnostics, vaccines, and wellness plans for cats and dogs.", paymentMethods: ["Cash", "Credit Card", "CareCredit"], servicesOffered: ["General Practice", "Vaccinations", "Lab Work", "Dental"], specialFeatures: ["Accepting New Patients", "Online Booking"], photos: [Wr], hours: { monday: "8:00 AM - 5:00 PM", tuesday: "8:00 AM - 5:00 PM", wednesday: "8:00 AM - 5:00 PM", thursday: "8:00 AM - 5:00 PM", friday: "8:00 AM - 5:00 PM", saturday: "9:00 AM - 12:00 PM", sunday: "Closed" } },
      { id: "vet-3", name: "Paws & Claws Vet Center", city: "Hartsville", rating: 4.8, priceRange: "$$$", emergency24x7: !1, acceptingNewPatients: !1, notAcceptingClients: !0, address: "811 Care Lane", zipCode: "29550", phone: "(843) 555-0184", description: "Advanced surgical and preventive care with in-house imaging and senior pet support programs.", paymentMethods: ["Credit Card", "CareCredit", "Pet Insurance Accepted"], servicesOffered: ["General Practice", "Surgery", "Radiology", "Senior Pet Care"], specialFeatures: ["House Calls", "Boarding Available"], photos: [Wr], hours: { monday: "7:30 AM - 5:30 PM", tuesday: "7:30 AM - 5:30 PM", wednesday: "7:30 AM - 5:30 PM", thursday: "7:30 AM - 5:30 PM", friday: "7:30 AM - 5:30 PM", saturday: "8:30 AM - 1:00 PM", sunday: "Closed" } },
      { id: "vet-4", name: "Emergency Pet Hospital", city: "Florence", rating: 4.9, priceRange: "$$$$", emergency24x7: !0, acceptingNewPatients: !0, address: "99 Urgent Care Way", zipCode: "29505", phone: "(843) 555-0100", description: "24/7 emergency and critical care team for urgent injuries, overnight monitoring, and specialty referrals.", paymentMethods: ["Cash", "Credit Card", "CareCredit", "Pet Insurance Accepted"], servicesOffered: ["Emergency Care", "Critical Care", "Surgery", "ICU"], specialFeatures: ["Accepting New Patients", "Online Booking"], photos: [Wr], hours: { monday: "Open 24 Hours", tuesday: "Open 24 Hours", wednesday: "Open 24 Hours", thursday: "Open 24 Hours", friday: "Open 24 Hours", saturday: "Open 24 Hours", sunday: "Open 24 Hours" } },
      { id: "vet-5", name: "Southside Family Vet", city: "Darlington", rating: 4.5, priceRange: "$$", emergency24x7: !1, acceptingNewPatients: !0, address: "55 Magnolia Ave", zipCode: "29540", phone: "(843) 555-0132", description: "Family-focused veterinary practice providing routine care, dental procedures, and chronic condition management.", paymentMethods: ["Cash", "Credit Card", "Pet Insurance Accepted"], servicesOffered: ["General Practice", "Dental", "Wellness Exams", "Vaccinations"], specialFeatures: ["Accepting New Patients", "Online Booking", "House Calls"], photos: [Wr], hours: { monday: "8:00 AM - 5:00 PM", tuesday: "8:00 AM - 5:00 PM", wednesday: "8:00 AM - 5:00 PM", thursday: "8:00 AM - 5:00 PM", friday: "8:00 AM - 5:00 PM", saturday: "Closed", sunday: "Closed" } }
    ];
    try {
      const F = (await Oe.getBusinesses("vet")).businesses || [];
      const ids = new Set(F.map((b) => b.id));
      const deletedLocal = ce.getDeletedBusinessIds("vet");
      const deletedCloud = new Set(await fetchCloudDeletedBusinessIds("vet"));
      const deletedAll = new Set([...deletedLocal, ...deletedCloud]);
      const merged = [...F, ...Lf.filter((s) => !ids.has(s.id) && !deletedAll.has(s.id))];
      a(merged), await Cr(merged);
    } catch (y) {
      const deletedLocal = ce.getDeletedBusinessIds("vet");
      const fallback = Lf.filter((b) => !deletedLocal.has(b.id));
      console.error("Error fetching businesses:", y), a(fallback), await Cr(fallback);
    } finally {
      c(!1);
    }
  }, Cr = async (y) => {
    const F = {};
    await Promise.all(
      y.map(async (B) => {
        try {
          const Y = (await Oe.getReviews(B.id)).reviews || [];
          if (Y.length > 0) {
            const Te = Sr(Y);
            F[B.id] = {
              average: Te,
              count: Y.length
            };
          } else if (B.rating) {
            F[B.id] = {
              average: B.rating,
              count: 0
            };
          }
        } catch (_) {
          console.error(`Error fetching reviews for business ${B.id}:`, _);
        }
      })
    ), x(F);
  }, Vl = async (y) => {
    try {
      const F = await Oe.getReviews(y);
      m(F.reviews || []);
    } catch (F) {
      console.error("Error fetching reviews:", F), m([]);
    }
  }, jl = () => {
    try {
      bl(I);
      const y = sf(I);
      mt(y);
    } catch (y) {
      console.error("Error fetching shortlist:", y);
    }
  }, Hl = (y, F) => {
    F.stopPropagation();
    const B = Be.includes(y);
    try {
      if (B)
        xl(I, y), mt(Be.filter((_) => _ !== y)), gt("Removed from Shortlist"), Ei(void 0), $e(!0);
      else {
        const _ = o.find((Y) => Y.id === y);
        if (_) {
          console.log("🔍 Found business to add to shortlist:", _), console.log("🔍 Business rating:", w[_.id]);
          const Y = {
            id: _.id,
            name: _.name,
            category: "vet",
            city: _.city,
            phone: _.phone,
            rating: w[_.id]?.average,
            photoUrl: _.photos?.[0],
            address: _.address,
            zipCode: _.zipCode
          };
          console.log("💾 Shortlist item to save:", Y), nf(I, Y), mt([...Be, y]), gt("Saved to Shortlist"), Ei(() => () => {
            e && e("shortlist");
          }), $e(!0);
        } else
          console.error("❌ Business not found in providers list:", y);
      }
    } catch (_) {
      console.error("Error updating shortlist:", _);
    }
  }, zl = async () => {
    const displayName = f.userName.trim() || I?.name || "";
    if (!displayName) {
      alert("Please enter your name");
      return;
    }
    if (!f.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    b(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        f.rating,
        f.comment,
        z,
        I ? void 0 : displayName
      );
      y.review && m([y.review, ...p]), await Cr(o), v({ userName: "", rating: 5, comment: "" }), alert("Review submitted successfully!");
    } catch (y) {
      console.error("Error submitting review:", y), alert(y instanceof Error ? y.message : "Failed to submit review. Please try again.");
    } finally {
      b(!1);
    }
  }, Wl = async () => {
    if (!I?.isAdmin) {
      alert("Admin access required to add customer reviews on behalf of clients.");
      return;
    }
    if (!N.reviewerName.trim()) {
      alert("Please enter a reviewer name");
      return;
    }
    if (!N.comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    R(!0);
    try {
      const y = await Oe.addReview(
        n.id,
        N.rating,
        N.comment,
        z,
        N.reviewerName
      );
      y.review && m([y.review, ...p]), await Cr(o), S({ reviewerName: "", rating: 5, comment: "" }), P(!1), alert("Review added successfully!");
    } catch (y) {
      console.error("Error submitting admin review:", y), alert(y instanceof Error ? y.message : "Failed to submit admin review. Please try again.");
    } finally {
      R(!1);
    }
  }, Sr = (y) => !y || y.length === 0 ? 0 : y.reduce((B, _) => B + _.rating, 0) / y.length, Tr = (y, F = "md") => {
    const B = Math.floor(y), _ = y % 1 >= 0.5, Y = 5 - B - (_ ? 1 : 0), Te = F === "sm" ? "w-4 h-4" : F === "lg" ? "w-6 h-6" : "w-5 h-5";
    return /* @__PURE__ */ d("div", { className: "flex items-center gap-0.5", children: [
      [...Array(B)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} fill-yellow-400 text-yellow-400` }, `full-${Pr}`)),
      _ && /* @__PURE__ */ s(Im, { className: `${Te} fill-yellow-400 text-yellow-400` }),
      [...Array(Y)].map((Xl, Pr) => /* @__PURE__ */ s(Ct, { className: `${Te} text-gray-300` }, `empty-${Pr}`))
    ] });
  }, Ul = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === F.length - 1 ? 0 : B + 1
      );
    }
  }, Gl = () => {
    if (n) {
      const F = getDetailGalleryPhotos(n);
      h(
        (B) => B === 0 ? F.length - 1 : B - 1
      );
    }
  }, Ri = (y) => ({
    $: "Budget-Friendly",
    $$: "Moderate Pricing",
    $$$: "Premium Services",
    $$$$: "Luxury Experience"
  })[y] || "Price Range", ql = async () => {
    if (!(!I || !n || !window.confirm(
      `Are you sure you want to delete "${n.name}"? This action cannot be undone.`
    ))) {
      k(!0);
      try {
        await Oe.deleteBusiness(n.id, "vet", z), alert("Business listing deleted successfully!"), i(null), await Mi();
      } catch (F) {
        console.error("Error deleting business:", F), alert(F instanceof Error ? F.message : "Failed to delete business. Please try again.");
      } finally {
        k(!1);
      }
    }
  }, yt = (() => {
    let y = o.filter((F) => !(Ke.trim() && !F.name.toLowerCase().includes(Ke.toLowerCase()) || ee !== "all" && !businessMatchesCityFilter(F.city, ee) || pe && !(F.emergency24x7 || F.emergency) || W && !(F.acceptsWalkins || F.acceptingNewPatients) || ae && (w[F.id]?.average || 0) < 4 || Me !== "all" && F.priceRange !== Me));
    return y.sort((F, B) => {
      if (Re === "name")
        return F.name.localeCompare(B.name);
      if (Re === "rating") {
        const _ = w[F.id]?.average || 0;
        return (w[B.id]?.average || 0) - _;
      } else if (Re === "price") {
        const _ = { $: 1, $$: 2, $$$: 3, $$$$: 4 }, Y = _[F.priceRange] || 0, Te = _[B.priceRange] || 0;
        return Y - Te;
      }
      return 0;
    }), y;
  })(), Kl = () => {
    V(!0), setTimeout(() => {
      A((y) => y + 10), setTimeout(() => {
        V(!1);
      }, 100);
    }, 3e3);
  }, Yl = () => /* @__PURE__ */ d("div", { className: "bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col animate-pulse", children: [
    /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full bg-gradient-to-br from-gray-200 to-gray-300", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s("div", { className: "absolute inset-0 shimmer" }) }) }),
    /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
      /* @__PURE__ */ s("div", { className: "h-6 bg-gray-200 rounded w-2/3" }),
      /* @__PURE__ */ s("div", { className: "h-8 w-8 bg-gray-200 rounded-full" })
    ] }),
    /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-3" }),
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ s("div", { className: "flex gap-1", children: [...Array(5)].map((y, F) => /* @__PURE__ */ s("div", { className: "h-4 w-4 bg-gray-200 rounded" }, F)) }),
      /* @__PURE__ */ s("div", { className: "h-4 bg-gray-200 rounded w-20" })
    ] }),
    /* @__PURE__ */ s("div", { className: "mt-auto w-full h-10 bg-gray-200 rounded-lg" })
  ] });
  return /* @__PURE__ */ d("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ s("section", { className: "bg-gradient-to-br from-red-400 via-orange-500 to-pink-600 text-white h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[8px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[320px] mx-auto px-1", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", children: "Vet Care" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-90 leading-tight mt-0.5", children: "Care, cure, comfort — locally." }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-75 leading-snug mt-1.5", children: "Routine wellness to urgent care, close to home." })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                animate: { rotate: [0, 5, -5, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                className: "md:text-4xl",
                children: "⚕️"
              }
            ),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", children: "Vet Care" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block max-w-2xl mx-auto mt-1", children: [
            /* @__PURE__ */ s("p", { className: "md:text-base leading-relaxed", children: "Veterinary clinics and hospitals in Darlington, Hartsville and Florence for wellness visits, sick care, and emergencies." }),
            /* @__PURE__ */ s("p", { className: "text-sm opacity-80 leading-relaxed mt-2", children: "Find local vets you can rely on when your pet needs medical attention." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "pt-0 md:py-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-2xl shadow-md md:shadow-sm p-3.5 md:p-4 mb-6 md:mb-4 mt-0 md:mt-0 flex flex-col sm:flex-row gap-3 md:gap-4",
          children: [
            /* @__PURE__ */ d("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ s(mr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  placeholder: "Search businesses by name...",
                  value: Ke,
                  onChange: (y) => Ht(y.target.value),
                  className: "w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-3 md:hidden", children: [
              /* @__PURE__ */ d(
                "select",
                {
                  value: ee,
                  onChange: (y) => G(y.target.value),
                  className: "flex-1 px-4 py-3 bg-orange-50 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                    /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                    /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                    /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-orange-50 border-2 border-orange-200 rounded-lg", children: [
                /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-orange-600" }),
                /* @__PURE__ */ d(
                  "select",
                  {
                    value: Re,
                    onChange: (y) => Ye(y.target.value),
                    className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                    children: [
                      /* @__PURE__ */ s("option", { value: "name", children: "Name" }),
                      /* @__PURE__ */ s("option", { value: "rating", children: "Rating" }),
                      /* @__PURE__ */ s("option", { value: "price", children: "Price" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "hidden sm:block sm:w-auto", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-4 py-3 bg-orange-50 border-2 border-orange-200 rounded-lg", children: [
              /* @__PURE__ */ s(Ys, { className: "w-5 h-5 text-orange-600" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Re,
                  onChange: (y) => Ye(y.target.value),
                  className: "bg-transparent focus:outline-none cursor-pointer text-gray-700",
                  children: [
                    /* @__PURE__ */ s("option", { value: "name", children: "Sort by Name" }),
                    /* @__PURE__ */ s("option", { value: "rating", children: "Sort by Rating" }),
                    /* @__PURE__ */ s("option", { value: "price", children: "Sort by Price" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => Xe(!0),
                className: "md:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors",
                style: { backgroundColor: "#ea580c", border: "1px solid #c2410c" },
                children: [
                  /* @__PURE__ */ s(Am, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s("span", { className: "text-sm", children: "Filters" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "hidden md:block rounded-xl shadow-md p-4 md:p-6 mb-8",
          style: { backgroundColor: "#fb923c" },
          children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row gap-3 md:gap-4 items-stretch justify-between", children: [
            /* @__PURE__ */ s("div", { className: "w-full md:w-auto", children: /* @__PURE__ */ d(
              "select",
              {
                value: ee,
                onChange: (y) => G(y.target.value),
                className: "w-full h-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ s("option", { value: "all", children: "All Cities" }),
                  /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" }),
                  /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                  /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" })
                ]
              }
            ) }),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-orange-200 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors",
                onClick: () => Ee(!pe),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🚨" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "24/7 Emergency" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: pe ? "#ea580c" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pe ? "translate-x-6" : "translate-x-1"}`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-orange-200 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors",
                onClick: () => te(!W),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🚶" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Accepts Walk-Ins" })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: W ? "#ea580c" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${W ? "translate-x-6" : "translate-x-1"}`, style: { boxShadow: "0 1px 2px rgba(0,0,0,0.25)" } }) })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-orange-200 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors",
                onClick: () => ue(!ae),
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                    /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                  ] }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: ae,
                      onChange: (y) => ue(y.target.checked),
                      className: "w-5 h-5 text-orange-600 rounded cursor-pointer ml-auto"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-orange-200 rounded-lg", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-orange-600" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Price Range" })
              ] }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: Me,
                  onChange: (y) => qe(y.target.value),
                  className: "px-3 py-1 bg-white border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-400 transition-colors cursor-pointer ml-auto",
                  children: [
                    /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                    /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                    /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                    /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-0 px-4 md:px-0", children: l ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🐾" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "Loading vet care businesses..." })
      ] }) : yt.length === 0 ? /* @__PURE__ */ d("div", { className: "col-span-1 md:col-span-2 text-center py-6 md:py-12", children: [
        /* @__PURE__ */ s("div", { className: "text-4xl mb-4", children: "🔍" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No matches found" }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 md:hidden", children: "Try a different city, adjust filters, or clear your search." }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm mt-2 hidden md:block", children: "Try adjusting your search criteria." }),
        /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: () => {
              Ht(""), Ee(!1), te(!1), ue(!1), qe("all"), G("all"), Ye("name");
            },
            className: "md:hidden mt-6 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-xl hover:shadow-lg transition-shadow",
            children: "Clear Filters"
          }
        )
      ] }) : /* @__PURE__ */ d(ie, { children: [
        (window.innerWidth >= 768 ? yt : yt.slice(0, ft)).map((y, F) => /* @__PURE__ */ d(
          D.div,
          {
            initial: window.innerWidth >= 768 ? { opacity: 0, y: 30 } : !1,
            animate: window.innerWidth >= 768 ? void 0 : { opacity: 1, y: 0 },
            whileInView: window.innerWidth >= 768 ? { opacity: 1, y: 0 } : void 0,
            viewport: window.innerWidth >= 768 ? { once: !0, margin: "0px 0px -100px 0px" } : void 0,
            transition: window.innerWidth >= 768 ? { duration: 0.3 } : void 0,
            whileHover: { y: window.innerWidth >= 768 ? -5 : 0 },
            onClick: () => window.innerWidth < 768 && i(y),
            className: "bg-white rounded-xl shadow-md border border-gray-100 md:border-0 p-4 md:p-6 hover:shadow-xl transition-all md:cursor-default cursor-pointer flex flex-col active:shadow-2xl md:active:shadow-xl",
            children: [
              /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 md:-mx-6 md:-mt-6 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s(
                "img",
                {
                  src: y.photos && y.photos.length > 0 ? y.photos[y.cardPhotoIndex || 0] : Wr,
                  alt: y.name,
                  className: `absolute inset-0 w-full h-full rounded-t-xl ${y.photos && y.photos.length > 0 ? "object-cover" : "object-contain bg-gradient-to-br from-orange-100 to-red-100"}`
                }
              ) }) }),
              /* @__PURE__ */ d("div", { className: "flex justify-between items-start mb-3", children: [
                /* @__PURE__ */ s("h3", { className: "text-gray-800", children: y.name }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 md:gap-2", children: [
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: (B) => Hl(y.id, B),
                      className: "p-2 rounded-full hover:bg-orange-100 transition-colors",
                      "aria-label": Be.includes(y.id) ? "Remove from shortlist" : "Add to shortlist",
                      children: /* @__PURE__ */ s(
                        yi,
                        {
                          className: `w-6 h-6 transition-colors ${Be.includes(y.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"}`
                        }
                      )
                    }
                  ),
                  y.priceRange && /* @__PURE__ */ d("div", { className: "relative group", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-1 text-green-600 cursor-help", children: /* @__PURE__ */ s("span", { children: y.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10", children: [
                      Ri(y.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ d("p", { className: "text-gray-600", children: [
                  "📍 ",
                  y.city
                ] }),
                (y.acceptsWalkins || y.acceptingNewPatients) && /* @__PURE__ */ s("span", { className: "inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-300 text-emerald-800 text-xs md:text-sm leading-tight rounded-full shadow-sm ml-2", children: "🚶 Accepts Walk-Ins" })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex flex-col gap-2 mb-3 md:flex-row md:items-center md:justify-between", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-3 md:gap-2", children: w[y.id] ? /* @__PURE__ */ d(ie, { children: [
                  Tr(w[y.id].average, "sm"),
                  /* @__PURE__ */ d("span", { className: "text-sm text-gray-600", children: [
                    w[y.id].average.toFixed(1),
                    " (",
                    w[y.id].count,
                    " ",
                    w[y.id].count === 1 ? "review" : "reviews",
                    ")"
                  ] })
                ] }) : /* @__PURE__ */ s("span", { className: "text-sm text-gray-500", children: "No reviews yet" }) }),
                /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-1 md:flex-col md:gap-1 md:items-end", children: [
                  (y.notAcceptingClients || y.acceptingNewPatients === !1) && /* @__PURE__ */ s("span", { className: "inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 text-xs md:text-sm leading-tight rounded-full", children: "🚫 Not Accepting New Patients" })
                ] })
              ] }),
              y.hours && /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-3 gap-2", children: [
                /* @__PURE__ */ d("p", { className: "text-orange-700 text-[11px] md:text-sm whitespace-nowrap", children: [
                  "🕒 ",
                  y.hours.monday || "See hours in details"
                ] }),
                (y.emergency24x7 || y.emergency) && /* @__PURE__ */ s("span", { className: "inline-flex items-center justify-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-red-100 text-red-700 text-[10px] md:text-sm leading-tight rounded-full shrink-0 whitespace-nowrap ml-auto md:ml-0 translate-x-1 md:translate-x-0", children: window.innerWidth < 768 ? "🚨 24/7" : "🚨 24/7 Emergency" })
              ] }),
              /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: (B) => {
                    window.innerWidth < 768 && B.stopPropagation(), i(y);
                  },
                  className: "mt-auto w-full inline-flex items-center justify-center text-white font-semibold py-2 rounded-lg transition-colors shadow-sm",
                  style: {
                    backgroundColor: window.innerWidth >= 768 ? "#f97316" : "#ea580c",
                    border: window.innerWidth >= 768 ? "1px solid #ea580c" : "1px solid #c2410c",
                    color: "#ffffff"
                  },
                  children: "View Details"
                }
              )
            ]
          },
          y.id || y.name
        )),
        O && /* @__PURE__ */ s(ie, { children: [...Array(4)].map((y, F) => /* @__PURE__ */ s("div", { className: "md:hidden", children: /* @__PURE__ */ s(Yl, {}) }, `skeleton-${F}`)) }),
        yt.length > ft && !O && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 flex justify-center mt-6 md:hidden", children: /* @__PURE__ */ s(
          D.button,
          {
            whileTap: { scale: 0.98 },
            onClick: Kl,
            className: "px-8 py-3 border-2 border-orange-600 text-orange-700 rounded-xl hover:bg-orange-50 transition-colors",
            children: "Load More"
          }
        ) }),
        yt.length > 0 && yt.length <= ft && /* @__PURE__ */ s("div", { className: "col-span-1 md:col-span-2 text-center mt-6 md:hidden", children: /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "You've reached the end" }) })
      ] }) })
    ] }) }),
    n && /* @__PURE__ */ s(
      D.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-x-hidden",
        onClick: () => i(null),
        children: /* @__PURE__ */ d(
          D.div,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            onClick: (y) => y.stopPropagation(),
            className: "bg-white rounded-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl",
            style: { width: window.innerWidth >= 768 ? "min(52rem, calc(100vw - 4rem))" : "calc(100vw - 2rem)" },
            children: [
              /* @__PURE__ */ d("div", { className: "relative h-80 overflow-hidden rounded-t-2xl", children: [
                getDetailGalleryPhotos(n).length > 0 ? (() => {
                  const F = getDetailGalleryPhotos(n);
                  return F.length > 0 ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ s(Pt, { mode: "wait", children: /* @__PURE__ */ s(
                      D.img,
                      {
                        src: F[u],
                        alt: `${n.name} ${u + 1}`,
                        className: "w-full h-80 object-cover",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.5 }
                      },
                      u
                    ) }),
                    F.length > 1 && /* @__PURE__ */ d(ie, { children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Gl,
                          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Qp, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: Ul,
                          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg",
                          children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-gray-800" })
                        }
                      ),
                      /* @__PURE__ */ s("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: F.map((B, _) => /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => h(_),
                          className: `w-3 h-3 rounded-full transition-all ${_ === u ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}`
                        },
                        _
                      )) })
                    ] })
                  ] }) : (
                    // Fallback to placeholder if no photos available
                    /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                      "img",
                      {
                        src: Wr,
                        alt: n.name,
                        className: "w-auto h-full object-contain"
                      }
                    ) })
                  );
                })() : /* @__PURE__ */ s("div", { className: "w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center", children: /* @__PURE__ */ s(
                  "img",
                  {
                    src: Wr,
                    alt: n.name,
                    className: "w-auto h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ s("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: () => i(null),
                    className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-20",
                    children: /* @__PURE__ */ s(we, { className: "w-6 h-6 text-gray-800" })
                  }
                ),
                /* @__PURE__ */ d("div", { className: "absolute bottom-4 left-6 right-6 text-white z-10 pointer-events-none", children: [
                  /* @__PURE__ */ s("h2", { className: "mb-2 break-words", children: n.name }),
                  n.priceRange && /* @__PURE__ */ d("div", { className: "relative group pointer-events-auto", children: [
                    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 text-orange-400 cursor-help", children: /* @__PURE__ */ s("span", { className: "text-xl", children: n.priceRange }) }),
                    /* @__PURE__ */ d("div", { className: "absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", children: [
                      Ri(n.priceRange),
                      /* @__PURE__ */ s("div", { className: "absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "p-4 md:p-6 pb-8 md:pb-6 mb-28 md:mb-0", children: [
                /* @__PURE__ */ s("p", { className: "text-gray-700 mb-6", children: n.description }),
                p.length > 0 && /* @__PURE__ */ s("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-6 border border-yellow-200", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Overall Rating" }),
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
                      Tr(Sr(p), "lg"),
                      /* @__PURE__ */ s("span", { className: "text-3xl text-gray-800", children: Sr(p).toFixed(1) })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "text-right", children: [
                    /* @__PURE__ */ s("p", { className: "text-2xl text-gray-800", children: p.length }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: p.length === 1 ? "Review" : "Reviews" })
                  ] })
                ] }) }),
                /* @__PURE__ */ d("div", { className: "grid md:grid-cols-2 gap-4 mb-6 min-w-0", children: [
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-orange-50 border border-orange-200 rounded-lg w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(ar, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#ea580c" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Address" }),
                      /* @__PURE__ */ d(
                        "a",
                        {
                          href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            `${n.address}, ${n.city}, SC ${n.zipCode}`
                          )}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-orange-600 hover:underline cursor-pointer break-words",
                          style: { color: "#ea580c" },
                          children: [
                            /* @__PURE__ */ s("span", { className: "block", children: n.address }),
                            /* @__PURE__ */ d("span", { className: "block", children: [
                              n.city,
                              ", SC ",
                              n.zipCode
                            ] })
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-orange-50 border border-orange-200 rounded-lg w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(Dn, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#ea580c" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Phone" }),
                      /* @__PURE__ */ s("a", { href: `tel:${n.phone}`, className: "text-orange-600 hover:underline break-all", style: { color: "#ea580c" }, children: n.phone })
                    ] })
                  ] }),
                  n.hours && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-orange-50 border border-orange-200 rounded-lg md:col-span-2 w-full max-w-full min-w-0", children: [
                    /* @__PURE__ */ s(im, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#ea580c" } }),
                    /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-2", children: "Hours of Operation" }),
                      n.callForHours ? /* @__PURE__ */ s("p", { className: "text-orange-600", children: "📞 Please Call for Hours of Operation" }) : /* @__PURE__ */ d("div", { className: "space-y-3 text-xs sm:text-sm md:text-base", children: [
                        /* @__PURE__ */ s("div", { className: "md:hidden space-y-3", children: [["monday", "tuesday"], ["wednesday", "thursday"], ["friday", "saturday"], ["sunday"]].map((y, F) => /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-x-3", children: y.map((B) => {
                          const _ = n.hours[B], Y = _?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: B }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${Y ? "text-red-600" : "text-orange-600"}`, children: _ })
                          ] }, B);
                        }) }, F)) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["monday", "tuesday", "wednesday", "thursday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${B ? "text-red-600" : "text-orange-600"}`, children: F })
                          ] }, y);
                        }) }),
                        /* @__PURE__ */ s("div", { className: "hidden md:grid md:grid-cols-4 gap-x-4 gap-y-3", children: ["friday", "saturday", "sunday"].map((y) => {
                          const F = n.hours[y], B = F?.toLowerCase().includes("closed");
                          return /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                            /* @__PURE__ */ s("span", { className: "text-gray-600 capitalize", children: y }),
                            /* @__PURE__ */ s("span", { className: `font-medium whitespace-nowrap ${B ? "text-red-600" : "text-orange-600"}`, children: F })
                          ] }, y);
                        }) })
                      ] })
                    ] })
                  ] }),
                  n.website && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:p-4 bg-orange-50 border border-orange-200 rounded-lg w-full max-w-full min-w-0 overflow-hidden md:justify-self-start", style: { width: window.innerWidth >= 768 ? "fit-content" : "100%" }, children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#ea580c" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Website" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: n.website.startsWith("http") ? n.website : `https://${n.website}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-orange-600 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block whitespace-normal md:whitespace-nowrap max-w-full break-all md:break-normal",
                          style: { color: "#ea580c" },
                          children: n.website
                        }
                      )
                    ] })
                  ] }),
                ] }),
                n.paymentMethods && n.paymentMethods.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-600 mb-3", children: "Payment Methods" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.paymentMethods.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm",
                      children: y
                    },
                    y
                  )) })
                ] }),
                n.emergency24x7 && /* @__PURE__ */ s("div", { className: "mb-6", children: /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-2 px-4 py-3 bg-red-50 border-2 border-red-200 text-red-700 rounded-lg", children: [
                  /* @__PURE__ */ s("span", { className: "text-2xl", children: "🚨" }),
                  /* @__PURE__ */ d("div", { children: [
                    /* @__PURE__ */ s("p", { className: "text-gray-800", children: "24/7 Emergency Services" }),
                    /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "Immediate care available day and night" })
                  ] })
                ] }) }),
                n.specialFeatures && n.specialFeatures.length > 0 && n.specialFeatures.some((y) => y.trim()) && /* @__PURE__ */ d("div", { className: "mb-6", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-800 mb-3", children: "Special Features" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.specialFeatures.filter((y) => y.trim()).map((y) => /* @__PURE__ */ d(
                    "span",
                    {
                      className: "bg-orange-50 text-orange-600 px-4 py-2 rounded-lg",
                      children: [
                        "✨ ",
                        y
                      ]
                    },
                    y
                  )) })
                ] }),
                n.servicesOffered && n.servicesOffered.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg", children: [
                  /* @__PURE__ */ s("h3", { className: "text-gray-600 mb-3", children: "Services Offered" }),
                  /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2", children: n.servicesOffered.map((y) => /* @__PURE__ */ s(
                    "span",
                    {
                      className: "bg-orange-100 text-orange-700 px-4 py-2 rounded-full",
                      style: { color: "#c2410c" },
                      children: y
                    },
                    y
                  )) })
                ] }),
                (n.facebookPage || n.email) && /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 md:items-start gap-4 mb-6 min-w-0", children: [
                  n.facebookPage && /* @__PURE__ */ d("div", { className: "inline-flex items-center gap-1.5 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg w-full min-w-0", style: typeof window !== "undefined" && window.innerWidth >= 768 ? { alignSelf: "end", width: "fit-content", maxWidth: "100%", paddingRight: "0.5rem" } : void 0, children: [
                    /* @__PURE__ */ s(Js, { className: "w-4 h-4 flex-shrink-0", style: { color: "#ea580c" } }),
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: n.facebookPage.startsWith("http") ? n.facebookPage : `https://${n.facebookPage}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-baseline gap-1 hover:underline text-sm leading-snug whitespace-nowrap",
                        children: [
                          /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Facebook" }),
                          /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Link" })
                        ]
                      }
                    )
                  ] }),
                  n.email && /* @__PURE__ */ d("div", { className: "flex items-start gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-2 bg-orange-50 border border-orange-200 rounded-lg w-full min-w-0 overflow-hidden", children: [
                    /* @__PURE__ */ s(Js, { className: "w-5 h-5 mt-1 flex-shrink-0", style: { color: "#ea580c" } }),
                    /* @__PURE__ */ d("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-1", children: "Email" }),
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: `mailto:${n.email}`,
                          className: "text-orange-600 hover:underline text-xs sm:text-sm md:text-base leading-tight md:leading-normal block break-all md:break-normal md:whitespace-nowrap",
                          style: { color: "#ea580c" },
                          children: n.email
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "hidden md:block w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-4 rounded-xl hover:from-orange-700 hover:to-red-600 transition-colors text-center",
                    style: { backgroundColor: "#ea580c", border: "1px solid #c2410c", color: "#ffffff" },
                    children: [
                      "📞 Call ",
                      n.name
                    ]
                  }
                ),
                I && (n.ownerId === I.id || I.isAdmin) && t && /* @__PURE__ */ d("div", { className: "space-y-3 mt-3", children: [
                  /* @__PURE__ */ d(
                    D.button,
                    {
                      onClick: () => {
                        i(null), t(n);
                      },
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors",
                      children: [
                        /* @__PURE__ */ s(Mm, { className: "w-5 h-5" }),
                        "Edit Business Listing"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    D.button,
                    {
                      onClick: ql,
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex items-center justify-center gap-2 w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      disabled: M,
                      children: M ? /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                        "Deleting..."
                      ] }) : /* @__PURE__ */ d(ie, { children: [
                        /* @__PURE__ */ s(Lt, { className: "w-5 h-5" }),
                        "Delete Business Listing"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ s(BusinessLinkRequestBox, { business: n, user: I, onLinked: () => i({ ...n, ownerId: I?.id }) }),
                /* @__PURE__ */ d("div", { className: "mt-6 border-t border-gray-200 pt-6", children: [
                  /* @__PURE__ */ d("h3", { className: "text-gray-800 mb-4", children: [
                    "Customer Reviews (",
                    p.length,
                    ")"
                  ] }),
                  p.length > 0 ? /* @__PURE__ */ s("div", { className: "space-y-4 mb-6", children: p.map((y) => /* @__PURE__ */ d(
                    D.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border border-orange-100",
                      children: [
                        /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-3", children: [
                          /* @__PURE__ */ d("div", { children: [
                            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                              Tr(y.rating, "sm"),
                              /* @__PURE__ */ s("span", { className: "text-sm text-gray-800", children: y.userName })
                            ] }),
                            /* @__PURE__ */ s("p", { className: "text-xs text-gray-500", children: new Date(y.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            }) })
                          ] }),
                          I?.isAdmin && /* @__PURE__ */ s(
                            "button",
                            {
                              onClick: async () => {
                                if (prompt("Enter admin password to delete this review:") !== "9634") {
                                  alert("Incorrect password. Review not deleted.");
                                  return;
                                }
                                try {
                                  await Oe.deleteReview(y.id, z), m((_) => _.filter((Y) => Y.id !== y.id));
                                  const B = p.filter((_) => _.id !== y.id);
                                  if (B.length > 0) {
                                    const _ = B.reduce((Y, Te) => Y + Te.rating, 0) / B.length;
                                    x((Y) => ({
                                      ...Y,
                                      [n.id]: {
                                        average: _,
                                        count: B.length
                                      }
                                    }));
                                  } else
                                    x((_) => {
                                      const Y = { ..._ };
                                      return delete Y[n.id], Y;
                                    });
                                  alert("Review deleted successfully");
                                } catch (B) {
                                  console.error("Error deleting review:", B), alert("Failed to delete review");
                                }
                              },
                              className: "text-red-600 hover:text-red-800",
                              children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ s("p", { className: "text-gray-700 leading-relaxed", children: y.comment }),
                        /* @__PURE__ */ s(ReviewOwnerReply, { review: y, business: n, user: I, onUpdated: (updated) => m((reviews) => reviews.map((rv) => rv.id === updated.id ? updated : rv)) })
                      ]
                    },
                    y.id
                  )) }) : /* @__PURE__ */ d("div", { className: "text-center py-8 bg-gray-50 rounded-xl mb-6", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "⭐" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600", children: "No reviews yet" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-500 text-sm", children: "Be the first to leave a review!" })
                  ] }),
                  I?.isAdmin ? /* @__PURE__ */ d(ie, { children: [
                    /* @__PURE__ */ d("div", { className: "bg-blue-50 rounded-xl border-2 border-blue-200 mb-4", children: [
                      /* @__PURE__ */ d(
                        "button",
                        {
                          onClick: () => P(!T),
                          className: "w-full p-5 flex items-center justify-between text-left",
                          children: [
                            /* @__PURE__ */ d("div", { children: [
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-1", children: [
                                /* @__PURE__ */ s("span", { className: "text-2xl", children: "👨‍💼" }),
                                /* @__PURE__ */ s("h4", { className: "text-gray-800", children: "Admin: Add Customer Review" })
                              ] }),
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "Transfer existing online reviews to your listing" })
                            ] }),
                            /* @__PURE__ */ s(
                              D.div,
                              {
                                animate: { rotate: T ? 180 : 0 },
                                transition: { duration: 0.3 },
                                children: /* @__PURE__ */ s(Xs, { className: "w-6 h-6 text-blue-600" })
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(Pt, { children: T && /* @__PURE__ */ s(
                        D.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3 },
                          className: "overflow-hidden",
                          children: /* @__PURE__ */ d("div", { className: "px-5 pb-5 border-t border-blue-200 pt-4", children: [
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Reviewer Name *" }),
                              /* @__PURE__ */ s(
                                "input",
                                {
                                  type: "text",
                                  value: N.reviewerName,
                                  onChange: (y) => S({ ...N, reviewerName: y.target.value }),
                                  className: "w-full p-3 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Enter the reviewer's name"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Rating" }),
                              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                                [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                                  Ct,
                                  {
                                    className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= N.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                                    onClick: () => S({ ...N, rating: y })
                                  },
                                  y
                                )),
                                /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                                  "(",
                                  N.rating,
                                  " ",
                                  N.rating === 1 ? "star" : "stars",
                                  ")"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ d("div", { className: "mb-4", children: [
                              /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Review Comment *" }),
                              /* @__PURE__ */ s(
                                "textarea",
                                {
                                  value: N.comment,
                                  onChange: (y) => S({ ...N, comment: y.target.value }),
                                  className: "w-full p-4 bg-white rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-colors",
                                  placeholder: "Paste the customer's review here...",
                                  rows: 4
                                }
                              )
                            ] }),
                            /* @__PURE__ */ s(
                              D.button,
                              {
                                onClick: Wl,
                                whileHover: { scale: 1.02 },
                                whileTap: { scale: 0.98 },
                                className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: C || !N.reviewerName.trim() || !N.comment.trim(),
                                children: C ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                                  /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                                  "Adding Review..."
                                ] }) : "Add Review"
                              }
                            )
                          ] })
                        }
                      ) })
                    ] })
                  ] }) : I && n.ownerId === I.id ? /* @__PURE__ */ d("div", { className: "text-center py-8 bg-orange-50 rounded-xl border-2 border-orange-200", children: [
                    /* @__PURE__ */ s("div", { className: "text-4xl mb-2", children: "🏪" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-700 mb-2", children: "You own this business" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: "You can respond to customer reviews below" })
                  ] }) : /* @__PURE__ */ d("div", { className: "bg-white border-2 border-orange-200 rounded-xl p-5", children: [
                    /* @__PURE__ */ s("h4", { className: "text-gray-800 mb-3", children: "Share Your Experience" }),
                    /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4", children: "No account needed — just enter your name and review." }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Name *" }),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "text",
                          value: f.userName || "",
                          onChange: (y) => v({ ...f, userName: y.target.value }),
                          className: "w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-orange-400 transition-colors",
                          placeholder: I?.name || "Enter your name"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Rating" }),
                      /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                        [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ s(
                          Ct,
                          {
                            className: `w-8 h-8 cursor-pointer transition-all hover:scale-110 ${y <= f.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`,
                            onClick: () => v({ ...f, rating: y })
                          },
                          y
                        )),
                        /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-600", children: [
                          "(",
                          f.rating,
                          " ",
                          f.rating === 1 ? "star" : "stars",
                          ")"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ d("div", { className: "mb-4", children: [
                      /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mb-2", children: "Your Review" }),
                      /* @__PURE__ */ s(
                        "textarea",
                        {
                          value: f.comment,
                          onChange: (y) => v({ ...f, comment: y.target.value }),
                          className: "w-full p-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-orange-400 transition-colors",
                          placeholder: "Share your experience with this business...",
                          rows: 4
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s(
                      D.button,
                      {
                        onClick: zl,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        className: "w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-3 rounded-xl hover:from-orange-700 hover:to-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        disabled: g || !f.comment.trim() || !f.userName.trim() && !I?.name,
                        children: g ? /* @__PURE__ */ d("span", { className: "flex items-center justify-center gap-2", children: [
                          /* @__PURE__ */ s("span", { className: "animate-spin", children: "⏳" }),
                          "Submitting..."
                        ] }) : "Submit Review"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "md:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3", children: [
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${n.address}, ${n.city}, SC ${n.zipCode}`
                    )}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 bg-white border-2 border-orange-600 text-orange-700 py-3.5 rounded-xl hover:bg-orange-50 transition-colors",
                    children: [
                      /* @__PURE__ */ s(ar, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Directions" })
                    ]
                  }
                ),
                /* @__PURE__ */ d(
                  D.a,
                  {
                    href: `tel:${n.phone}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "flex-1 flex items-center justify-center gap-2 text-white py-3.5 rounded-xl transition-colors",
                    style: { backgroundColor: "#ea580c", border: "1px solid #c2410c" },
                    children: [
                      /* @__PURE__ */ s(Dn, { className: "w-5 h-5" }),
                      /* @__PURE__ */ s("span", { children: "Call" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s("section", { className: "hidden md:block py-16 px-4 sm:px-6 lg:px-8 text-white", style: { backgroundColor: "#f97316" }, children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: !0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-8", style: { color: "#ffffff" }, children: "Vet Care Tips" }),
          /* @__PURE__ */ s("div", { className: "grid md:grid-cols-3 gap-6", children: [
            { icon: "📅", title: "Book Early", text: "Schedule routine wellness exams" }, { icon: "💉", title: "Vaccinations", text: "Keep vaccines and prevention current" }, { icon: "🏠", title: "Tour First", text: "Do not delay care for emergency symptoms" }
          ].map((y, F) => /* @__PURE__ */ d(
            D.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              transition: { delay: F * 0.2 },
              className: "backdrop-blur-sm rounded-xl p-6",
              style: { backgroundColor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.38)" },
              children: [
                /* @__PURE__ */ s("div", { className: "text-4xl mb-3", children: y.icon }),
                /* @__PURE__ */ s("h3", { className: "mb-2", style: { color: "#ffffff" }, children: y.title }),
                /* @__PURE__ */ s("p", { style: { color: "#f9fafb" }, children: y.text })
              ]
            },
            y.title
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "md:hidden pt-13 pb-8 px-4 bg-white", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className: "rounded-xl p-6 shadow-md border",
        style: { backgroundColor: "#fff7ed", borderColor: "#fed7aa" },
        children: [
          /* @__PURE__ */ s("h2", { className: "mb-3 text-left", children: "Pet Products We Recommend" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6 text-left", children: "Vet-recommended health essentials and wellness products we trust for ongoing care at home." }),
          /* @__PURE__ */ s(
            D.button,
            {
              whileTap: { scale: 0.98 },
              onClick: () => e?.("products"),
              className: "w-full px-6 py-3 text-white rounded-lg transition-colors",
              style: { backgroundColor: "#ea580c", border: "1px solid #c2410c" },
              children: "Browse Pet Products →"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ s(Pt, { children: Nr && /* @__PURE__ */ d(ie, { children: [
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => Xe(!1),
          className: "md:hidden fixed inset-0 bg-black/50 z-50"
        }
      ),
      /* @__PURE__ */ d(
        D.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 30, stiffness: 300 },
          className: "md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 max-h-[85vh] overflow-y-auto shadow-2xl",
          children: [
            /* @__PURE__ */ s("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-4 py-4 rounded-t-[20px]", children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    Ee(!1), te(!1), ue(!1), qe("all");
                  },
                  className: "text-orange-600 hover:text-orange-700 transition-colors",
                  children: "Clear"
                }
              ),
              /* @__PURE__ */ s("h3", { className: "text-gray-900", children: "Filters" }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => Xe(!1),
                  className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-gray-500" })
                }
              )
            ] }) }),
            /* @__PURE__ */ d("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer px-4 py-3 bg-white border-2 border-orange-200 rounded-lg",
                  onClick: () => Ee(!pe),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🚨" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "24/7 Emergency" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: pe ? "#ea580c" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pe ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer px-4 py-3 bg-white border-2 border-orange-200 rounded-lg",
                  onClick: () => te(!W),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🚶" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: "Accepts Walk-Ins" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: W ? "#ea580c" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${W ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d(
                "div",
                {
                  className: "flex items-center justify-between cursor-pointer px-4 py-3 bg-white border-2 border-orange-200 rounded-lg",
                  onClick: () => ue(!ae),
                  children: [
                    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { className: "text-xl", children: "🌟" }),
                      /* @__PURE__ */ s("span", { className: "text-gray-700", children: ">4 Stars" })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors", style: { backgroundColor: ae ? "#ea580c" : "#d1d5db" }, children: /* @__PURE__ */ s("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${ae ? "translate-x-6" : "translate-x-1"}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "text-sm text-gray-600 mb-2 block", children: "Price Range" }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-3 px-4 py-3 bg-white border-2 border-orange-200 rounded-lg", children: [
                  /* @__PURE__ */ s(Zs, { className: "w-5 h-5 text-orange-600" }),
                  /* @__PURE__ */ d(
                    "select",
                    {
                      value: Me,
                      onChange: (y) => qe(y.target.value),
                      className: "flex-1 bg-transparent focus:outline-none cursor-pointer text-gray-700",
                      children: [
                        /* @__PURE__ */ s("option", { value: "all", children: "All" }),
                        /* @__PURE__ */ s("option", { value: "$", children: "$" }),
                        /* @__PURE__ */ s("option", { value: "$$", children: "$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$", children: "$$$" }),
                        /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "sticky bottom-0 bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ s(
              D.button,
              {
                whileTap: { scale: 0.98 },
                onClick: () => {
                  Xe(!1), A(10);
                },
                className: "w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-3 rounded-xl hover:shadow-lg transition-shadow",
                children: "Apply Filters"
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ s(
      yl,
      {
        isVisible: Ze,
        message: zt,
        actionText: Ai ? "View" : void 0,
        onAction: Ai,
        onClose: () => $e(!1)
      }
    )
  ] });
}
function df({ onOpenSignup: t, onNavigate: e }) {
  const [r, n] = E(!1), [i, o] = E(""), [a, l] = E(""), c = () => {
    i && (e?.(i), n(!1));
  };
  return /* @__PURE__ */ d("div", { className: "min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 md:hidden", children: [
    /* @__PURE__ */ s("div", { className: "max-w-[1200px] mx-auto px-4 py-4", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ d("div", { className: "mx-2 mb-8 mt-6", children: [
            /* @__PURE__ */ s("div", { className: "bg-white rounded-[20px] p-5 border border-purple-100 shadow-sm relative mx-2", children: /* @__PURE__ */ d(
              D.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 },
                className: "h-full flex flex-col",
                children: [
                  /* @__PURE__ */ d("div", { className: "w-full flex flex-col flex-1", children: [
                    /* @__PURE__ */ s("div", { className: "mb-3 md:mb-4", children: /* @__PURE__ */ s("h2", { className: "text-purple-600 text-xl md:text-[22px] font-semibold leading-tight text-left", children: "About Pee Dee Pet Care 🐾" }) }),
                    /* @__PURE__ */ d("div", { className: "text-gray-700 mb-3 md:mb-4 text-sm md:text-base leading-relaxed space-y-3 text-justify", children: [
                      /* @__PURE__ */ s("p", { className: "text-justify", children: "Hi! I'm Shannon — and this all started because of my cat, Percy." }),
                      /* @__PURE__ */ s("p", { className: "text-justify", children: "Percy had an emergency. I was in a panic, frantically searching the internet for a vet — hours, services, contacts — one page at a time." }),
                      /* @__PURE__ */ s("p", { className: "text-justify", children: "I thought: why isn't there just ONE place for all of this?" }),
                      /* @__PURE__ */ s("p", { className: "text-justify mt-3", children: "So, I built it. 💜" })
                    ] }),
                    /* @__PURE__ */ d("ul", { className: "text-gray-700 space-y-2.5 md:space-y-3 w-full mt-3 mb-2", children: [
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3 w-full", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "🔎" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5 flex-1 min-w-0", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "One place for everything" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug text-justify", children: "Grooming, training, boarding, vet care & more — across Florence, Darlington, Hartsville & the Pee Dee. Hours, services, and contact info, all in one spot." })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3 w-full", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "📱" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5 flex-1 min-w-0", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Better than scrolling Facebook" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug text-justify", children: "Most local pet pros live on Facebook, scattered and hard to compare. I gathered them here so you don't have to hunt." })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3 w-full", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "💛" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5 flex-1 min-w-0", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "100% free" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug text-justify", children: "Free to browse. Free for local businesses to be listed. Always." })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3 w-full", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "🐶" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5 flex-1 min-w-0", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Meet the crew" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug text-justify", children: "A Hartsville local + my three supervisors: Aggy (Chiweenie), Sierra Sunshine (pit bull mix), and Percy, the tabby who started it all." })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "mt-4 md:mt-[30px]", children: [
                    /* @__PURE__ */ s("div", { className: "hidden md:block w-[58%] mx-auto border-t border-purple-300/30 mb-6" }),
                    /* @__PURE__ */ d("div", { className: "text-gray-700 text-sm md:text-base leading-relaxed text-justify", children: [
                      /* @__PURE__ */ s("p", { className: "mb-2", children: "Spotted a business I missed? Want to say hi?" }),
                      /* @__PURE__ */ d("p", { className: "mb-2 mt-3", children: [
                        "📧 ",
                        /* @__PURE__ */ s(
                          "a",
                          {
                            href: "mailto:hello@peedeepetcare.com",
                            className: "text-purple-600 font-semibold hover:underline break-all",
                            children: "hello@peedeepetcare.com"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s("p", { className: "text-gray-600", children: "— Shannon 🐾" })
                    ] })
                  ] })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ d("div", { className: "mt-8 mx-2", children: [
            /* @__PURE__ */ s("h2", { className: "text-purple-600 text-xl font-semibold leading-tight mb-4 px-1", children: "How it works" }),
            /* @__PURE__ */ d("div", { className: "grid grid-cols-1 gap-8 mb-8", children: [
            /* @__PURE__ */ s("div", { className: "bg-white rounded-[20px] p-5 border border-purple-100 shadow-sm relative mx-2", children: /* @__PURE__ */ d(
              D.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.2 },
                className: "h-full flex flex-col",
                children: [
                  /* @__PURE__ */ d("div", { className: "w-full md:max-w-[80%] md:mx-auto flex flex-col flex-1", children: [
                    /* @__PURE__ */ d("div", { className: "mb-3 md:mb-4 flex items-center gap-2 justify-start", children: [
                      /* @__PURE__ */ s("h2", { className: "text-purple-600 text-xl md:text-[22px] font-semibold leading-tight text-left", children: "For Pet Owners" }),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => n(!0),
                          className: "bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors cursor-pointer",
                          children: "Browse"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d("p", { className: "text-gray-700 mb-3 md:mb-4 text-sm md:text-base leading-relaxed", children: [
                      /* @__PURE__ */ s("strong", { children: "Search by service + city" }),
                      " to find trusted providers near you."
                    ] }),
                    /* @__PURE__ */ d("ul", { className: "text-gray-700 space-y-2.5 md:space-y-3 flex-1", children: [
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "✂️" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Grooming" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug", children: "Baths, haircuts, nail trims, de-shedding" })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "🎓" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Training" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug", children: "Puppies, obedience, behavior support" })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "🏠" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Boarding & Daycare" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug", children: "Overnights, day play, safe stays" })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "🩺" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Vet Care" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs md:text-sm leading-snug", children: "Clinics, wellness, vaccines & more" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "mt-5 md:mt-[30px]", children: [
                    /* @__PURE__ */ s("div", { className: "hidden md:block w-[58%] mx-auto border-t border-purple-300/30 mb-6" }),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => n(!0),
                        className: "w-full md:max-w-[240px] md:mx-auto block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-0 h-11 md:h-auto md:py-3 rounded-[14px] md:rounded-xl transition-colors",
                        children: "Browse Services →"
                      }
                    ),
                    /* @__PURE__ */ s("p", { className: "text-center text-xs text-gray-400 mt-2", children: "Browse by city + service" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ s(
              D.div,
              {
                id: "business-signup",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.4 },
                className: "bg-white rounded-[20px] md:rounded-2xl p-5 md:p-8 border border-purple-100 md:border-purple-200 shadow-sm md:shadow-md relative mx-2 md:mx-0",
                children: /* @__PURE__ */ d("div", { className: "h-full flex flex-col", children: [
                  /* @__PURE__ */ d("div", { className: "w-full md:max-w-[80%] md:mx-auto flex flex-col flex-1", children: [
                    /* @__PURE__ */ d("div", { className: "mb-3 md:mb-4 flex flex-nowrap items-center gap-2 justify-start", children: [
                      /* @__PURE__ */ s("h2", { className: "text-purple-600 text-xl md:text-[22px] font-semibold leading-tight text-left whitespace-nowrap flex-shrink-0", children: "For Business Owners" }),
                      /* @__PURE__ */ s("span", { className: "inline-flex items-center justify-center bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs whitespace-nowrap flex-shrink-0", children: "Free" })
                    ] }),
                    /* @__PURE__ */ s("p", { className: "text-gray-700 mb-3 md:mb-4 text-sm md:text-base leading-relaxed", children: [
                      "Email: ",
                      /* @__PURE__ */ s(
                        "a",
                        {
                          href: "mailto:hello@peedeepetcare.com?subject=Pawsitively%20Business%20Listing%20Request",
                          className: "text-purple-600 font-semibold hover:underline break-all",
                          children: "hello@peedeepetcare.com"
                        }
                      ),
                      " to be added or to request updates."
                    ] }),
                    /* @__PURE__ */ d("ul", { className: "text-gray-700 space-y-3 md:space-y-3 flex-1", children: [
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "✉️" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Request a listing" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base leading-snug", children: "Email us to add your business." })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "📸" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Share your details" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base leading-snug", children: "Send us your business updates" })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "⭐" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Reach local pet owners" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base leading-snug", children: "Get discovered by new customers" })
                        ] })
                      ] }),
                      /* @__PURE__ */ d("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ s("span", { className: "text-lg leading-6 w-6 flex items-center justify-center flex-shrink-0", children: "🌐" }),
                        /* @__PURE__ */ d("div", { className: "space-y-0.5", children: [
                          /* @__PURE__ */ s("strong", { className: "text-sm md:text-base block", children: "Let us build your website" }),
                          /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm md:text-base leading-snug", children: "Reach out for more info." })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ d("div", { className: "mt-5 md:mt-[30px]", children: [
                    /* @__PURE__ */ s("div", { className: "hidden md:block w-[58%] mx-auto border-t border-purple-300/30 mb-6" }),
                    /* @__PURE__ */ s(
                      "a",
                      {
                        href: "mailto:hello@peedeepetcare.com?subject=Pawsitively%20Business%20Listing%20Request",
                        className: "w-full md:max-w-[240px] md:mx-auto flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-0 h-11 md:h-auto md:py-3 rounded-[14px] md:rounded-xl transition-colors",
                        children: "Email Us →"
                      }
                    ),
                    /* @__PURE__ */ s("p", { className: "text-center text-xs text-gray-400 mt-2", children: "Free to join • we handle setup & updates" })
                  ] })
                ] })
              }
            )
          ] })
          ] })
        ]
      }
    ) }),
    r && /* @__PURE__ */ s("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-white rounded-2xl shadow-2xl max-w-lg w-full px-8 pt-8 pb-6 relative",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => n(!1),
              className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
              children: /* @__PURE__ */ s(we, { className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ s("h2", { className: "text-purple-500 mb-[18px] text-center text-[22px] font-semibold", children: "Find Pet Services" }),
          /* @__PURE__ */ d("div", { className: "grid grid-cols-2 gap-6 mb-5", children: [
            /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Service Type" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: i,
                  onChange: (u) => o(u.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                  children: [
                    /* @__PURE__ */ s("option", { value: "", children: "Select..." }),
                    /* @__PURE__ */ s("option", { value: "grooming", children: "Grooming" }),
                    /* @__PURE__ */ s("option", { value: "training", children: "Training" }),
                    /* @__PURE__ */ s("option", { value: "boarding", children: "Boarding & Daycare" }),
                    /* @__PURE__ */ s("option", { value: "sitters", children: "Sitters & Walkers" }),
                    /* @__PURE__ */ s("option", { value: "vet", children: "Vet Care" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Location" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: a,
                  onChange: (u) => l(u.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                  children: [
                    /* @__PURE__ */ s("option", { value: "", children: "All Cities" }),
                    /* @__PURE__ */ s("option", { value: "Darlington", children: "Darlington" }),
                    /* @__PURE__ */ s("option", { value: "Hartsville", children: "Hartsville" }),
                    /* @__PURE__ */ s("option", { value: "Florence", children: "Florence" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s("div", { className: "flex justify-center", children: /* @__PURE__ */ d(
            "button",
            {
              onClick: c,
              className: "bg-purple-600 hover:bg-purple-700 text-white h-11 w-[280px] rounded-2xl transition-all flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ s(mr, { className: "w-4 h-4" }),
                "Show Results"
              ]
            }
          ) })
        ]
      }
    ) })
  ] });
}
const uf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function hf(t) {
  const [e, r] = E(!1), n = () => {
    r(!0);
  }, { src: i, alt: o, style: a, className: l, ...c } = t;
  return e ? /* @__PURE__ */ s(
    "div",
    {
      className: `inline-block bg-gray-100 text-center align-middle ${l ?? ""}`,
      style: a,
      children: /* @__PURE__ */ s("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ s("img", { src: uf, alt: "Error loading image", ...c, "data-original-url": i }) })
    }
  ) : /* @__PURE__ */ s("img", { src: i, alt: o, className: l, style: a, ...c, onError: n });
}
const bi = "REDACTED_AIRTABLE_TOKEN", pf = "app0120M8RAwOR635", mf = "tblM97NVRfmIPsxTh", wi = `https://api.airtable.com/v0/${pf}/${mf}`, PRODUCT_CATEGORY_IDS = ["treats", "toys", "beds", "grooming", "bowls", "walking"];
function isNonProductAirtableRecord(t) {
  const e = (t?.fields?.price || "").toUpperCase();
  return e.startsWith("BUSINESS:") || e.startsWith("REVIEW:");
}
function Ni(t) {
  const r = (t.fields.category || "").toLowerCase().trim();
  if (isNonProductAirtableRecord(t) || !PRODUCT_CATEGORY_IDS.includes(r) || !t.fields.name)
    return null;
  const e = t.fields.photos ? t.fields.photos.split(",").map((r) => r.trim()).filter((r) => r) : [];
  return {
    id: t.id,
    name: t.fields.name || "",
    category: r,
    about: t.fields.about,
    whyWeLoveIt: t.fields.whyWeLoveIt,
    affiliateLink: t.fields.affiliateLink,
    photos: e,
    price: t.fields.price,
    createdAt: t.fields.createdAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function parseWhyWeLoveItBullets(t) {
  if (!t?.trim())
    return [];
  const e = String(t).trim(), r = e.includes("\n") ? e.split(/\r?\n/) : e.split(/\s*•\s*/);
  return r.map((n) => n.trim().replace(/^[-*•]\s*/, "")).filter(Boolean);
}
async function ff() {
  try {
    console.log("📦 Fetching products from Airtable...");
    const t = await fetch(wi, {
      headers: cloudWriteHeaders()
    });
    if (!t.ok) {
      const n = await t.text();
      throw console.error("❌ Airtable error:", n), new Error(`HTTP error! status: ${t.status}`);
    }
    const e = await t.json();
    return console.log("✅ Loaded products from Airtable:", e.records), (e.records || []).map(Ni).filter(Boolean);
  } catch (t) {
    throw console.error("❌ Error fetching products from Airtable:", t), t;
  }
}
async function gf(t) {
  try {
    console.log("📝 Creating product in Airtable:", t);
    const e = await fetch(wi, {
      method: "POST",
      headers: cloudWriteHeaders(),
      body: JSON.stringify({
        fields: {
          name: t.name,
          category: t.category,
          about: t.about,
          whyWeLoveIt: t.whyWeLoveIt,
          affiliateLink: t.affiliateLink,
          photos: t.photos ? t.photos.join(",") : "",
          price: t.price,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      })
    });
    if (!e.ok) {
      const n = await e.text();
      throw console.error("❌ Airtable error:", n), new Error(`HTTP error! status: ${e.status}`);
    }
    const r = await e.json();
    return console.log("✅ Created product in Airtable:", r), Ni(r);
  } catch (e) {
    throw console.error("❌ Error creating product in Airtable:", e), e;
  }
}
async function yf(t, e) {
  try {
    console.log("✏️ Updating product in Airtable:", t, e);
    const r = { ...e };
    e.photos && (r.photos = e.photos.join(","));
    const n = await fetch(`${wi}/${t}`, {
      method: "PATCH",
      headers: cloudWriteHeaders(),
      body: JSON.stringify({
        fields: r
      })
    });
    if (!n.ok) {
      const o = await n.text();
      throw console.error("❌ Airtable error:", o), new Error(`HTTP error! status: ${n.status}`);
    }
    const i = await n.json();
    return console.log("✅ Updated product in Airtable:", i), Ni(i);
  } catch (r) {
    throw console.error("❌ Error updating product in Airtable:", r), r;
  }
}
async function deleteProductAirtableRecord(t) {
  try {
    console.log("🗑️ Deleting product from Airtable:", t);
    const e = await fetch(`${wi}/${t}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${bi}`,
        "Content-Type": "application/json"
      }
    });
    if (!e.ok) {
      const r = await e.text();
      throw console.error("❌ Airtable delete error:", r), new Error(`HTTP error! status: ${e.status}`);
    }
    return console.log("✅ Deleted product from Airtable:", t), !0;
  } catch (e) {
    throw console.error("❌ Error deleting product from Airtable:", e), e;
  }
}
function vf({ onNavigate: t, user: e, onEditProduct: r, onAddProduct: n, refreshKey: i }) {
  const [o, a] = E("all"), [l, c] = E([]), [u, h] = E(!0), [p, m] = E(""), [f0, y0] = E(null);
  U(() => {
    (async () => {
      h(!0), m("");
      try {
        const b = await ff();
        c(b);
      } catch (b) {
        console.error("❌ Error fetching products:", b), m("Failed to load products from Airtable");
      } finally {
        h(!1);
      }
    })();
  }, [i]);
  const f = [
    { id: "all", label: "All Products", icon: "🎁" },
    { id: "treats", label: "Treats & Food", icon: "🦴" },
    { id: "toys", label: "Toys", icon: "🎾" },
    { id: "beds", label: "Beds & Comfort", icon: "🛏️" },
    { id: "grooming", label: "Grooming", icon: "✂️" },
    { id: "walking", label: "Walking & Travel", icon: "🦮" }
  ], v = o === "all" ? l : l.filter((g) => g.category === o), b0 = async (g) => {
    if (!e?.isAdmin || !g?.id || !window.confirm(`Delete "${g.name}" from Pet Products? This cannot be undone.`))
      return;
    y0(g.id), m("");
    try {
      await deleteProductAirtableRecord(g.id), c((b) => b.filter((w) => w.id !== g.id));
    } catch (b) {
      console.error("❌ Error deleting product:", b), m(b instanceof Error ? b.message : "Failed to delete product");
    } finally {
      y0(null);
    }
  };
  return /* @__PURE__ */ d("div", { className: "min-h-screen bg-gradient-to-b from-purple-50 to-pink-50", children: [
    /* @__PURE__ */ s("div", { className: "bg-white shadow-sm sticky top-0 z-10", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-3", children: /* @__PURE__ */ d("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ d("div", { className: "flex-1 text-center", children: [
        /* @__PURE__ */ s("h1", { className: "text-purple-600 text-xl sm:text-2xl", children: "Curated Pet Products" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600 text-xs sm:text-sm mt-0.5 leading-snug", children: "Hand-picked treats, toys, and gear we recommend." }),
        /* @__PURE__ */ s("p", { className: "text-gray-500 text-xs hidden sm:block mt-1 leading-relaxed", children: "We do not sell products — purchases are through retailer links." })
      ] }),
      e?.isAdmin && /* @__PURE__ */ d(
        D.button,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: n,
          className: "flex items-center gap-2 text-purple-600 hover:text-purple-700 absolute right-4",
          children: [
            /* @__PURE__ */ s(kn, { className: "w-5 h-5" }),
            /* @__PURE__ */ s("span", { className: "hidden sm:inline", children: "Add Product" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      p && /* @__PURE__ */ s("div", { className: "mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200", children: p }),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "mb-8",
          children: /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-2 md:gap-3 justify-center", children: f.map((g) => /* @__PURE__ */ d(
            D.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => a(g.id),
              className: `px-4 py-2 rounded-full transition-all text-sm sm:text-base ${o === g.id ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" : "bg-white text-purple-600 hover:shadow-md"}`,
              children: [
                /* @__PURE__ */ s("span", { className: "mr-1", children: g.icon }),
                g.label
              ]
            },
            g.id
          )) })
        }
      ),
      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: v.map((g, b) => /* @__PURE__ */ d(
        D.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: b * 0.1 },
          className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
          children: [
            /* @__PURE__ */ s("div", { className: "relative h-64 bg-gray-100 overflow-hidden", children: g.photos && g.photos.length > 0 ? /* @__PURE__ */ s(
              "img",
              {
                src: g.photos[0],
                alt: g.name,
                className: "w-full h-full object-cover"
              }
            ) : /* @__PURE__ */ s(
              hf,
              {
                src: `https://source.unsplash.com/400x300/?${g.image || "pet product"}`,
                alt: g.name,
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ d("div", { className: "p-5", children: [
              /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-2", children: [
                /* @__PURE__ */ s("h3", { className: "text-lg text-gray-800", children: g.name }),
                g.price && /* @__PURE__ */ s("span", { className: "text-purple-600 font-semibold whitespace-nowrap ml-2", children: g.price })
              ] }),
              g.about && /* @__PURE__ */ d("div", { className: "mb-3", children: [
                /* @__PURE__ */ s("p", { className: "text-xs text-purple-600 uppercase tracking-wide mb-1", children: "About" }),
                /* @__PURE__ */ s("p", { className: "text-gray-700 text-sm leading-relaxed", children: g.about })
              ] }),
              g.whyWeLoveIt && /* @__PURE__ */ d("div", { className: "mb-4 p-3 bg-purple-50 rounded-lg", children: [
                /* @__PURE__ */ s("p", { className: "text-xs text-purple-600 uppercase tracking-wide mb-1", children: "💜 Why We Love It" }),
                /* @__PURE__ */ s("ul", { className: "space-y-1 overflow-x-auto", children: parseWhyWeLoveItBullets(g.whyWeLoveIt).map((w0, x0) => /* @__PURE__ */ s("li", { className: "text-gray-700 text-sm whitespace-nowrap", children: ["• ", w0] }, `${g.id}-why-${x0}`)) })
              ] }),
              !g.about && g.description && /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm mb-4 leading-relaxed", children: g.description }),
              /* @__PURE__ */ d(
                D.a,
                {
                  href: g.affiliateLink || g.link || "#",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-shadow",
                  children: [
                    "Buy Now",
                    /* @__PURE__ */ s(cm, { className: "w-4 h-4" })
                  ]
                }
              ),
              e?.isAdmin && /* @__PURE__ */ d(
                D.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: () => r?.(g),
                  className: "flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-shadow mt-2",
                  children: [
                    "Edit Product",
                    /* @__PURE__ */ s(Sm, { className: "w-4 h-4" })
                  ]
                }
              ),
              e?.isAdmin && /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: () => b0(g),
                  disabled: f0 === g.id,
                  className: "flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors mt-2 disabled:opacity-60",
                  children: f0 === g.id ? "Deleting..." : "Delete Product"
                }
              )
            ] })
          ]
        },
        g.id
      )) }),
      v.length === 0 && /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "text-center py-16",
          children: /* @__PURE__ */ s("p", { className: "text-gray-500 text-lg", children: "No products found in this category" })
        }
      ),
      /* @__PURE__ */ s(
        D.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.5 },
          className: "mt-12 p-6 bg-white rounded-2xl shadow-md text-center",
          children: /* @__PURE__ */ d("p", { className: "text-gray-600 text-sm", children: [
            "🐾 ",
            /* @__PURE__ */ s("strong", { children: "Note:" }),
            " These are curated recommendations to help you find great products for your pet. We may earn a small commission from purchases made through these links, which helps support our directory at no extra cost to you."
          ] })
        }
      )
    ] })
  ] });
}
function xf({ imageUrl: t, onSave: e, onClose: r, isOpen: n }) {
  const [i, o] = E(!1), [a, l] = E(!1), [c, u] = E(null), h = Ne(null), [p, m] = E({ x: 50, y: 50, width: 400, height: 256 }), [f, v] = E(!1), [g, b] = E({ x: 0, y: 0 });
  U(() => {
    if (!n) return;
    const S = new Image();
    S.crossOrigin = "anonymous", S.onload = () => {
      u(S);
      const C = 400 / 256;
      let R = Math.min(S.width, 400), M = R / C;
      M > S.height && (M = S.height, R = M * C), m({
        x: (S.width - R) / 2,
        y: (S.height - M) / 2,
        width: R,
        height: M
      }), l(!0);
    }, S.src = t;
  }, [t, n]), U(() => {
    if (!c || !h.current) return;
    const S = h.current, C = S.getContext("2d");
    if (!C) return;
    const M = Math.min(1, 600 / c.width);
    S.width = c.width * M, S.height = c.height * M, C.drawImage(c, 0, 0, S.width, S.height), C.fillStyle = "rgba(0, 0, 0, 0.5)", C.fillRect(0, 0, S.width, S.height), C.clearRect(
      p.x * M,
      p.y * M,
      p.width * M,
      p.height * M
    ), C.drawImage(
      c,
      p.x,
      p.y,
      p.width,
      p.height,
      p.x * M,
      p.y * M,
      p.width * M,
      p.height * M
    ), C.strokeStyle = "#8b5cf6", C.lineWidth = 3, C.strokeRect(
      p.x * M,
      p.y * M,
      p.width * M,
      p.height * M
    );
    const k = 12;
    C.fillStyle = "#8b5cf6", [
      { x: p.x * M, y: p.y * M },
      { x: (p.x + p.width) * M, y: p.y * M },
      { x: p.x * M, y: (p.y + p.height) * M },
      { x: (p.x + p.width) * M, y: (p.y + p.height) * M }
    ].forEach((z) => {
      C.fillRect(z.x - k / 2, z.y - k / 2, k, k);
    });
  }, [c, p]);
  const w = (S) => {
    if (!h.current || !c) return;
    const C = h.current, R = C.getBoundingClientRect(), M = C.width / c.width, k = (S.clientX - R.left) / M, I = (S.clientY - R.top) / M;
    k >= p.x && k <= p.x + p.width && I >= p.y && I <= p.y + p.height && (v(!0), b({ x: k - p.x, y: I - p.y }));
  }, x = (S) => {
    if (!f || !h.current || !c) return;
    const C = h.current, R = C.getBoundingClientRect(), M = C.width / c.width, k = (S.clientX - R.left) / M, I = (S.clientY - R.top) / M, z = Math.max(0, Math.min(k - g.x, c.width - p.width)), ee = Math.max(0, Math.min(I - g.y, c.height - p.height));
    m((G) => ({ ...G, x: z, y: ee }));
  }, T = () => {
    v(!1);
  }, P = async () => {
    if (c) {
      o(!0);
      try {
        const S = document.createElement("canvas"), C = S.getContext("2d");
        if (!C) throw new Error("Failed to get canvas context");
        S.width = p.width, S.height = p.height, C.drawImage(
          c,
          p.x,
          p.y,
          p.width,
          p.height,
          0,
          0,
          p.width,
          p.height
        );
        const R = await new Promise((z) => {
          S.toBlob((ee) => {
            ee && z(ee);
          }, "image/jpeg", 0.95);
        }), M = new FormData();
        M.append("file", R), M.append("upload_preset", "pet-services-photos");
        const k = await fetch(
          "https://api.cloudinary.com/v1_1/da3pbhktf/image/upload",
          {
            method: "POST",
            body: M
          }
        );
        if (!k.ok)
          throw new Error("Upload failed");
        const I = await k.json();
        e(I.secure_url);
      } catch (S) {
        console.error("Crop/upload error:", S), alert("Failed to crop and upload image");
      } finally {
        o(!1);
      }
    }
  };
  if (!n) return null;
  const N = 400 / 256;
  return /* @__PURE__ */ s("div", { className: "fixed inset-0 bg-black/70 flex items-center justify-center z-[60] p-4", children: /* @__PURE__ */ d(
    D.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      className: "bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ s("h2", { className: "text-2xl text-purple-600", children: "Crop Image for Product Card" }),
          /* @__PURE__ */ s(
            "button",
            {
              onClick: r,
              className: "text-gray-500 hover:text-gray-700 transition-colors",
              children: /* @__PURE__ */ s(we, { className: "w-6 h-6" })
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: "p-6", children: a && c ? /* @__PURE__ */ d(ie, { children: [
          /* @__PURE__ */ d("div", { className: "mb-4 text-center", children: [
            /* @__PURE__ */ s("p", { className: "text-gray-600 text-sm", children: "👆 Click and drag the purple box to adjust your crop area" }),
            /* @__PURE__ */ s("p", { className: "text-purple-600 text-xs mt-1", children: "Crop maintains product card aspect ratio (400:256)" })
          ] }),
          /* @__PURE__ */ s("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ s(
            "canvas",
            {
              ref: h,
              onMouseDown: w,
              onMouseMove: x,
              onMouseUp: T,
              onMouseLeave: T,
              className: "border-2 border-gray-300 rounded-lg cursor-move max-w-full",
              style: { maxHeight: "500px" }
            }
          ) }),
          /* @__PURE__ */ d("div", { className: "space-y-4 mb-6", children: [
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ d("label", { className: "block text-gray-700 mb-2", children: [
                "Crop Size: ",
                Math.round(p.width),
                " x ",
                Math.round(p.height),
                " px"
              ] }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "range",
                  min: "200",
                  max: Math.min(c.width, c.height * N),
                  value: p.width,
                  onChange: (S) => {
                    const C = parseInt(S.target.value), R = C / N;
                    m((M) => ({
                      x: Math.min(M.x, c.width - C),
                      y: Math.min(M.y, c.height - R),
                      width: C,
                      height: R
                    }));
                  },
                  className: "w-full"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    let S = c.width, C = S / N;
                    C > c.height && (C = c.height, S = C * N), m({
                      x: (c.width - S) / 2,
                      y: (c.height - C) / 2,
                      width: S,
                      height: C
                    });
                  },
                  className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
                  children: "Fit to Image"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const S = Math.min(c.width, 400), C = S / N;
                    m({
                      x: (c.width - S) / 2,
                      y: (c.height - C) / 2,
                      width: S,
                      height: C
                    });
                  },
                  className: "px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors",
                  children: "Standard Size (400x256)"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: r,
                disabled: i,
                className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: P,
                disabled: i,
                className: "flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 flex items-center justify-center gap-2",
                children: i ? /* @__PURE__ */ d(ie, { children: [
                  /* @__PURE__ */ s(Pn, { className: "w-5 h-5 animate-spin" }),
                  "Uploading..."
                ] }) : /* @__PURE__ */ d(ie, { children: [
                  /* @__PURE__ */ s(Zp, { className: "w-5 h-5" }),
                  "Save Cropped Image"
                ] })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ s("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ s(Pn, { className: "w-8 h-8 animate-spin text-purple-600" }) }) })
      ]
    }
  ) });
}
function eo({ editProduct: t, onClose: e }) {
  const [r, n] = E({
    name: "",
    category: "treats",
    about: "",
    whyWeLoveIt: "",
    affiliateLink: "",
    price: "",
    photos: []
  }), [i, o] = E(!1), [a, l] = E(""), [c, u] = E(!1), [h, p] = E(""), [m, f] = E(null);
  U(() => {
    t && n({
      name: t.name || "",
      category: t.category || "treats",
      about: t.about || "",
      whyWeLoveIt: t.whyWeLoveIt || "",
      affiliateLink: t.affiliateLink || "",
      price: t.price || "",
      photos: t.photos || []
    });
  }, [t]);
  const v = async (P) => {
    const N = P.target.files;
    if (!(!N || N.length === 0)) {
      o(!0), l("");
      try {
        const S = Array.from(N).map(async (R) => {
          const M = new FormData();
          M.append("file", R), M.append("upload_preset", "pet-services-photos");
          const k = await fetch(
            "https://api.cloudinary.com/v1_1/da3pbhktf/image/upload",
            {
              method: "POST",
              body: M
            }
          );
          if (!k.ok)
            throw new Error("Upload failed");
          return (await k.json()).secure_url;
        }), C = await Promise.all(S);
        n((R) => ({
          ...R,
          photos: [...R.photos, ...C]
        }));
      } catch (S) {
        console.error("Upload error:", S), l("Failed to upload photos. Please try again.");
      } finally {
        o(!1);
      }
    }
  }, g = (P) => {
    n((N) => ({
      ...N,
      photos: N.photos.filter((S, C) => C !== P)
    }));
  }, b = (P, N) => {
    p(P), f(N), u(!0);
  }, w = (P) => {
    m !== null && n((N) => ({
      ...N,
      photos: N.photos.map(
        (S, C) => C === m ? P : S
      )
    })), u(!1), p(""), f(null);
  }, x = async (P) => {
    if (P.preventDefault(), !r.name.trim()) {
      l("Product name is required");
      return;
    }
    if (!r.about.trim()) {
      l("About section is required");
      return;
    }
    if (!r.whyWeLoveIt.trim()) {
      l("Why We Love It section is required");
      return;
    }
    if (!r.affiliateLink.trim()) {
      l("Affiliate link is required");
      return;
    }
    o(!0), l("");
    try {
      console.log("🛍️ Saving product to Airtable:", r), t ? (await yf(t.id, r), console.log("✅ Product updated successfully")) : (await gf(r), console.log("✅ Product created successfully")), e();
    } catch (N) {
      console.error("❌ Error saving product:", N), l(N instanceof Error ? N.message : "Failed to save product");
    } finally {
      o(!1);
    }
  }, T = [
    { id: "treats", label: "Treats & Food" },
    { id: "toys", label: "Toys" },
    { id: "beds", label: "Beds & Comfort" },
    { id: "grooming", label: "Grooming" },
    { id: "bowls", label: "Bowls & Feeders" },
    { id: "walking", label: "Walking & Travel" }
  ];
  return /* @__PURE__ */ d("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto", children: [
    /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8",
        children: [
          /* @__PURE__ */ d("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
            /* @__PURE__ */ s("h2", { className: "text-2xl text-purple-600", children: t ? "Edit Product" : "Add New Product" }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: e,
                className: "text-gray-500 hover:text-gray-700 transition-colors",
                children: /* @__PURE__ */ s(we, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ d("form", { onSubmit: x, className: "p-6 space-y-6", children: [
            a && /* @__PURE__ */ s("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg text-red-600", children: a }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Product Photos" }),
              /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4", children: r.photos.map((P, N) => /* @__PURE__ */ d("div", { className: "relative group", children: [
                /* @__PURE__ */ s(
                  "img",
                  {
                    src: P,
                    alt: `Product ${N + 1}`,
                    className: "w-full h-32 object-cover rounded-lg"
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => b(P, N),
                    className: "absolute top-2 left-2 p-1 bg-purple-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                    title: "Crop & Resize",
                    children: /* @__PURE__ */ s(om, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => g(N),
                    className: "absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                    children: /* @__PURE__ */ s(Lt, { className: "w-4 h-4" })
                  }
                )
              ] }, N)) }),
              /* @__PURE__ */ s("label", { className: "flex items-center justify-center gap-2 p-4 border-2 border-dashed border-purple-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors", children: i ? /* @__PURE__ */ d(ie, { children: [
                /* @__PURE__ */ s(Pn, { className: "w-5 h-5 animate-spin text-purple-600" }),
                /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Uploading..." })
              ] }) : /* @__PURE__ */ d(ie, { children: [
                /* @__PURE__ */ s(ml, { className: "w-5 h-5 text-purple-600" }),
                /* @__PURE__ */ s("span", { className: "text-purple-600", children: "Upload Photos" }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "file",
                    multiple: !0,
                    accept: "image/*",
                    onChange: v,
                    className: "hidden"
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Product Name *" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  value: r.name,
                  onChange: (P) => n({ ...r, name: P.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                  placeholder: "e.g., Premium Dog Treats"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Category *" }),
              /* @__PURE__ */ s(
                "select",
                {
                  value: r.category,
                  onChange: (P) => n({ ...r, category: P.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                  children: T.map((P) => /* @__PURE__ */ s("option", { value: P.id, children: P.label }, P.id))
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Price (optional)" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  value: r.price,
                  onChange: (P) => n({ ...r, price: P.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                  placeholder: "e.g., $12.99"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "About *" }),
              /* @__PURE__ */ s(
                "textarea",
                {
                  value: r.about,
                  onChange: (P) => n({ ...r, about: P.target.value }),
                  rows: 4,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none",
                  placeholder: "Describe the product in detail..."
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Why We Love It *" }),
              /* @__PURE__ */ s(
                "textarea",
                {
                  value: r.whyWeLoveIt,
                  onChange: (P) => n({ ...r, whyWeLoveIt: P.target.value }),
                  rows: 4,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none",
                  placeholder: "One reason per line (e.g. durable, easy to clean, dogs love it)"
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Affiliate Link *" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "url",
                  value: r.affiliateLink,
                  onChange: (P) => n({ ...r, affiliateLink: P.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                  placeholder: "https://..."
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-4 pt-4", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: e,
                  className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "submit",
                  disabled: i,
                  className: "flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50",
                  children: t ? "Update Product" : "Add Product"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ s(
      xf,
      {
        isOpen: c,
        imageUrl: h,
        onSave: w,
        onClose: () => u(!1)
      }
    )
  ] });
}
function renderBlogBlock(block, slug, index, onNavigate, imageLayout = "default") {
  const key = `${slug}-block-${index}`, bodyStyle = { color: "#44403c" }, headingStyle = { color: "#6b1e2a" }, linkStyle = { color: "#8e2c32" };
  if (typeof block === "string")
    return /* @__PURE__ */ s("p", { className: "text-sm md:text-base leading-relaxed", style: bodyStyle, children: block }, key);
  switch (block.type) {
    case "p":
      return /* @__PURE__ */ s("p", { className: "text-sm md:text-base leading-relaxed", style: bodyStyle, children: block.text }, key);
    case "h2":
      return /* @__PURE__ */ s("h2", { className: "text-xl md:text-2xl font-semibold leading-snug mt-8 mb-3 first:mt-0", style: headingStyle, children: block.text }, key);
    case "h3":
      return /* @__PURE__ */ s("h3", { className: "text-lg md:text-xl font-semibold leading-snug mt-6 mb-2", style: headingStyle, children: block.text }, key);
    case "ul":
      return /* @__PURE__ */ s("ul", { className: "list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed", style: bodyStyle, children: (block.items || []).map((item, i) => /* @__PURE__ */ s("li", { className: "pl-1", children: typeof item === "string" ? item : /* @__PURE__ */ d(ie, { children: [
        item.label && /* @__PURE__ */ s("strong", { style: { color: "#6b1e2a" }, children: `${item.label} ` }),
        item.text
      ] }) }, `${key}-li-${i}`)) }, key);
    case "ol":
      return /* @__PURE__ */ s("ol", { className: "list-decimal pl-5 space-y-2 text-sm md:text-base leading-relaxed", style: bodyStyle, children: (block.items || []).map((item, i) => /* @__PURE__ */ s("li", { className: "pl-1", children: item }, `${key}-li-${i}`)) }, key);
    case "img": {
      const imgClassName = `blog-article-image${block.imageClass ? ` ${block.imageClass}` : ""}`;
      const imgProps = { src: block.src, alt: block.alt || "", loading: "eager", fetchPriority: "high", decoding: "async" };
      if (imageLayout === "hero")
        return /* @__PURE__ */ d("figure", { className: "blog-hero-figure", children: [
          /* @__PURE__ */ s("img", { ...imgProps, className: `blog-hero-image${block.imageClass ? ` ${block.imageClass}` : ""}` }),
          block.caption && /* @__PURE__ */ s("figcaption", { className: "text-xs text-center mt-2", style: { color: "#8f5c5c" }, children: block.caption })
        ] }, key);
      if (imageLayout === "magazine-left")
        return /* @__PURE__ */ d("figure", { className: "blog-magazine-figure-left", children: [
          /* @__PURE__ */ s("img", { ...imgProps, className: `blog-magazine-image${block.imageClass ? ` ${block.imageClass}` : ""}` }),
          block.caption && /* @__PURE__ */ s("figcaption", { className: "blog-magazine-caption", children: block.caption })
        ] }, key);
      if (imageLayout === "magazine-right")
        return /* @__PURE__ */ d("figure", { className: "blog-magazine-figure-right", children: [
          /* @__PURE__ */ s("img", { ...imgProps, className: `blog-magazine-image${block.imageClass ? ` ${block.imageClass}` : ""}` }),
          block.caption && /* @__PURE__ */ s("figcaption", { className: "blog-magazine-caption", children: block.caption })
        ] }, key);
      return /* @__PURE__ */ d("figure", { className: "my-6 blog-article-figure", children: [
        /* @__PURE__ */ s("img", { ...imgProps, className: imgClassName, style: { width: "100%", height: "auto", maxHeight: "none", objectFit: "contain", objectPosition: "center", display: "block", borderRadius: "0.75rem" } }),
        block.caption && /* @__PURE__ */ s("figcaption", { className: "text-xs text-center mt-2", style: { color: "#8f5c5c" }, children: block.caption })
      ] }, key);
    }
    case "blockquote":
      return /* @__PURE__ */ d("blockquote", { className: "my-6 pl-4 py-3 pr-4 rounded-r-xl text-sm md:text-base leading-relaxed", style: { borderLeft: "4px solid #8e2c32", backgroundColor: "#f9ecea", color: "#5c3a38" }, children: [
        block.label && /* @__PURE__ */ s("strong", { className: "block mb-1", style: { color: "#6b1e2a" }, children: block.label }),
        /* @__PURE__ */ s("span", { children: block.text }),
        block.linkHref && /* @__PURE__ */ s("a", { href: block.linkHref, target: "_blank", rel: "noopener noreferrer", className: "block mt-2 font-medium hover:underline", style: linkStyle, children: block.linkText || block.linkHref })
      ] }, key);
    case "cta":
      return /* @__PURE__ */ d("div", { className: "mt-10 p-6 rounded-2xl", style: { background: "linear-gradient(135deg, #f9ecea 0%, #f5ddd8 100%)", border: "1px solid #d4938e" }, children: [
        block.heading && /* @__PURE__ */ s("h2", { className: "text-lg md:text-xl font-semibold mb-3", style: headingStyle, children: block.heading }),
        ...(block.paragraphs || []).map((text, i) => /* @__PURE__ */ s("p", { className: "text-sm md:text-base leading-relaxed mb-3 last:mb-0", style: bodyStyle, children: text }, `${key}-cta-p-${i}`)),
        block.buttonText && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => onNavigate(block.navigate || "grooming"),
            className: "mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium text-sm md:text-base hover:opacity-90 transition-opacity",
            style: { background: "linear-gradient(135deg, #b84a48 0%, #6b1e2a 100%)" },
            children: block.buttonText
          }
        )
      ] }, key);
    default:
      return block.text ? /* @__PURE__ */ s("p", { className: "text-sm md:text-base leading-relaxed", style: bodyStyle, children: block.text }, key) : null;
  }
}
function renderMagazineArticleBody(blocks, slug, onNavigate) {
  const elements = [];
  let bodyImageCount = 0;
  for (let i = 0; i < blocks.length; ) {
    const block = blocks[i];
    if (typeof block == "object" && block?.type === "img") {
      bodyImageCount++;
      const imgIndex = i;
      if (bodyImageCount === 1 || bodyImageCount === 2) {
        const side = bodyImageCount === 1 ? "magazine-left" : "magazine-right";
        i++;
        const sectionBlocks = [];
        while (i < blocks.length && !(typeof blocks[i] == "object" && blocks[i]?.type === "img")) {
          sectionBlocks.push({ block: blocks[i], index: i });
          i++;
        }
        elements.push(/* @__PURE__ */ d("div", { className: "blog-magazine-section", children: [
          renderBlogBlock(block, slug, imgIndex, onNavigate, side),
          ...sectionBlocks.map(({ block: sectionBlock, index: sectionIndex }) => renderBlogBlock(sectionBlock, slug, sectionIndex, onNavigate))
        ] }, `${slug}-magazine-${bodyImageCount}`));
        continue;
      }
      elements.push(renderBlogBlock(block, slug, imgIndex, onNavigate));
      i++;
      continue;
    }
    elements.push(renderBlogBlock(block, slug, i, onNavigate));
    i++;
  }
  return elements;
}
function dailyWag({ onNavigate: t }) {
  const decodeBlogSlug = (value) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }, blogSlugFromLocation = () => {
    const pathname = window.location.pathname.replace(/\/$/, "") || "/";
    if (pathname.startsWith("/blog/") && pathname.length > 6)
      return decodeBlogSlug(pathname.slice(6));
    if (pathname === "/blog")
      return null;
    const hash = window.location.hash.slice(1);
    if (hash.startsWith("blog/") && hash.length > 5)
      return decodeBlogSlug(hash.slice(5));
    if (hash === "blog")
      return null;
    // Figma runtime strips pathname/hash on boot; sessionStorage is set by the
    // pre-runtime boot script so a refreshed article can be restored.
    try {
      return sessionStorage.getItem("pawsitively_blog_slug") || null;
    } catch {
      return null;
    }
  }, loadBlogPosts = async () => {
    if (typeof window < "u" && typeof window.__peedeeLoadBlogPosts == "function")
      return window.__peedeeLoadBlogPosts();
    const g = await fetch("/blog/posts.json", { cache: "no-store" });
    if (!g.ok) throw new Error("Failed to load");
    const b = await g.json();
    return Array.isArray(b.posts) ? b.posts : [];
  }, blogAssetUrl = (src, version) => {
    if (!src) return src;
    if (!version) return src;
    const joiner = src.includes("?") ? "&" : "?";
    return `${src}${joiner}v=${encodeURIComponent(version)}`;
  }, [posts, setPosts] = E([]), [loading, setLoading] = E(!0), [error, setError] = E(""), [selectedSlug, setSelectedSlug] = E(() => blogSlugFromLocation());
  U(() => {
    (async () => {
      setLoading(!0), setError("");
      try {
        setPosts(await loadBlogPosts());
      } catch {
        setError("Could not load articles right now. Please try again later.");
      } finally {
        setLoading(!1);
      }
    })();
  }, []);
  U(() => {
    const sync = () => setSelectedSlug(blogSlugFromLocation());
    sync();
    return window.addEventListener("popstate", sync), window.addEventListener("hashchange", sync), window.addEventListener("pageshow", sync), () => {
      window.removeEventListener("popstate", sync), window.removeEventListener("hashchange", sync), window.removeEventListener("pageshow", sync);
    };
  }, []);
  const openPost = (g) => {
    try {
      sessionStorage.setItem("pawsitively_blog_slug", g);
    } catch {}
    setSelectedSlug(g), window.history.pushState({ blogSlug: g }, "", "/blog/" + g), window.scrollTo(0, 0);
  }, backToList = () => {
    try {
      sessionStorage.removeItem("pawsitively_blog_slug");
    } catch {}
    setSelectedSlug(null), window.history.pushState({}, "", "/blog"), window.scrollTo(0, 0);
  }, formatDate = (g) => {
    try {
      return new Date(g).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    } catch {
      return g;
    }
  }, selected = posts.find((g) => g.slug === selectedSlug);
  const selectedBlocks = selected ? selected.blocks || selected.body || [] : [];
  const firstImageIndex = selectedBlocks.findIndex((block) => typeof block == "object" && block?.type === "img");
  const firstImageBlock = firstImageIndex >= 0 ? selectedBlocks[firstImageIndex] : null;
  const articleBodyBlocks = firstImageIndex >= 0 ? selectedBlocks.filter((_, index) => index !== firstImageIndex) : selectedBlocks;
  U(() => {
    typeof window < "u" && typeof window.__peedeeApplyBlogSeo == "function" && window.__peedeeApplyBlogSeo(selected || null);
  }, [selected, posts]);
  return /* @__PURE__ */ d("div", { className: "min-h-screen", style: { backgroundColor: "#f9ecea" }, children: [
    /* @__PURE__ */ s("section", { className: "h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", style: { background: "linear-gradient(135deg, #dea5a0 0%, #b84a48 20%, #8e2c32 48%, #6b1e2a 75%, #461018 100%)", color: "#fff8f5" }, children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[10px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: !1,
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[320px] mx-auto px-1", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", style: { color: "#fffaf5" }, children: "The Daily Wag" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center leading-tight mt-0.5", style: { color: "rgba(255,250,245,0.92)" }, children: "Pee Dee Pet Tips" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center leading-snug mt-1.5", style: { color: "rgba(255,250,245,0.78)" }, children: "Guides from Peedee Pet Care — a free directory, not a service provider." })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(D.div, { animate: { rotate: [0, 8, -8, 0] }, transition: { duration: 2, repeat: 1 / 0 }, className: "md:text-4xl", children: "📰" }),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", style: { color: "#fffaf5" }, children: "The Daily Wag" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:block max-w-2xl mx-auto mt-1", children: [
            /* @__PURE__ */ s("p", { className: "md:text-base leading-relaxed", style: { color: "#fffaf5" }, children: "Pee Dee Pet Tips — helpful articles on grooming, training, boarding, and everyday pet care in Darlington, Hartsville, and Florence." }),
            /* @__PURE__ */ s("p", { className: "text-sm leading-relaxed mt-2", style: { color: "rgba(255,250,245,0.88)" }, children: "Published by Peedee Pet Care, a free local directory — we do not provide grooming, training, boarding, or sitting services." })
          ] })
        ]
      }
    ) }) }),
    !loading && selected && /* @__PURE__ */ s("aside", { className: "blog-article-aside", children: /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: backToList,
        className: "blog-article-back-link font-medium hover:underline",
        style: { color: "#8e2c32" },
        children: "← Back to The Daily Wag"
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12", style: { backgroundColor: "#f9ecea", width: "100%" }, children: [
      error && /* @__PURE__ */ s("div", { className: "mb-6 p-4 rounded-lg border", style: { backgroundColor: "#fef2f2", color: "#b91c1c", borderColor: "#fecaca" }, children: error }),
      loading && /* @__PURE__ */ s("p", { className: "text-center py-12", style: { color: "#8f5c5c" }, children: "Loading articles…" }),
      !loading && selectedSlug && selected && /* @__PURE__ */ d("article", { className: "blog-article-card rounded-2xl p-6 md:p-8", style: { backgroundColor: "#ffffff", border: "1px solid #d4938e", boxShadow: "0 4px 6px -1px rgba(110,26,40,0.14)" }, children: [
        firstImageBlock && renderBlogBlock(firstImageBlock, selected.slug, firstImageIndex, t, "hero"),
        /* @__PURE__ */ s("h2", { className: "text-2xl md:text-3xl font-semibold leading-snug mb-3", style: { color: "#6b1e2a" }, children: selected.title }),
        /* @__PURE__ */ d("p", { className: "text-sm mb-6", style: { color: "#8f5c5c" }, children: [
          formatDate(selected.date),
          selected.readMinutes ? ` · ${selected.readMinutes} min read` : ""
        ] }),
        /* @__PURE__ */ s("div", { className: "space-y-4 blog-magazine-article", children: renderMagazineArticleBody(articleBodyBlocks, selected.slug, t) })
      ] }),
      !loading && selectedSlug && !selected && /* @__PURE__ */ s("p", { className: "text-center py-12", style: { color: "#8f5c5c" }, children: error || "That article could not be found." }),
      !loading && !selectedSlug && /* @__PURE__ */ s("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full", children: [
        posts.length === 0 && !error && /* @__PURE__ */ s("p", { className: "text-center py-12 col-span-1 md:col-span-2", style: { color: "#8f5c5c" }, children: "New articles coming soon." }),
        posts.map((g, b) => /* @__PURE__ */ s(
          D.a,
          {
            href: `/blog/${g.slug}`,
            initial: !1,
            whileHover: { y: -5 },
            onClick: (ev) => {
              ev.preventDefault(), openPost(g.slug);
            },
            className: "bg-white rounded-xl shadow-md border border-gray-100 md:border-0 p-4 md:p-6 hover:shadow-xl transition-all flex flex-col no-underline text-left",
            children: [
              /* @__PURE__ */ s("div", { className: "mb-3 -mx-4 -mt-4 md:-mx-6 md:-mt-6 rounded-t-xl bg-white overflow-hidden", children: /* @__PURE__ */ s("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s(
                "img",
                {
                  src: blogAssetUrl(g.coverImage, g.dateModified || g.date) || Wr,
                  alt: g.title,
                  loading: b < 4 ? "eager" : "lazy",
                  fetchPriority: b < 2 ? "high" : "auto",
                  decoding: "async",
                  className: `absolute inset-0 w-full h-full rounded-t-xl ${g.coverImage ? "object-cover" : "object-contain bg-gradient-to-br from-rose-100 to-red-100"}`
                }
              ) }) }),
              /* @__PURE__ */ s("h3", { className: "text-gray-900 mb-2", style: { color: "#111827", fontSize: "1rem", fontWeight: 500, lineHeight: "1.5", margin: 0, marginBottom: "8px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }, children: g.title }),
              /* @__PURE__ */ s("p", { className: "text-gray-500", style: { color: "#6b7280", fontSize: "0.875rem", fontWeight: 400, lineHeight: "1.5", margin: 0 }, children: [
                formatDate(g.date),
                g.readMinutes ? ` · ${g.readMinutes} min read` : "",
                " · Read more →"
              ].join("") })
            ]
          },
          g.slug
        ))
      ] })
    ] })
  ] });
}
function bf({ onNavigate: t, user: e }) {
  const [r, n] = E([]), [i, o] = E(!1), [a, l] = E(""), [c, u] = E(""), [h, p] = E(!1), [m, f] = E("");
  U(() => {
    v();
  }, [e]);
  const v = () => {
    bl(e);
    const x = fr(e);
    console.log("📖 Loaded shortlist in Shortlist page:", x), console.log("📊 Shortlist count:", x.length), x.length > 0 && console.log("🔍 First item:", x[0]), n(x);
  }, g = (x) => {
    xl(e, x), n(r.filter((T) => T.id !== x)), f("Removed from Shortlist"), p(!0);
  }, b = (x) => {
    switch (x) {
      case "grooming":
        return "✂️";
      case "training":
        return "🎓";
      case "boarding":
        return "🏠";
      case "sitters":
        return "🦮";
      case "vet":
        return "⚕️";
      default:
        return "🐾";
    }
  }, w = () => {
    a && (t(a), o(!1));
  };
  return /* @__PURE__ */ d("div", { className: "min-h-screen bg-white md:bg-transparent", children: [
    /* @__PURE__ */ s("section", { className: "bg-gradient-to-br from-pink-400 via-purple-500 to-purple-600 text-white h-auto md:py-10 py-1.5 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-7xl mx-auto pt-[18px] pb-[10px] md:pt-0 md:pb-0", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        className: "text-center",
        children: [
          /* @__PURE__ */ d("div", { className: "md:hidden max-w-[300px] mx-auto", children: [
            /* @__PURE__ */ s("h1", { className: "mb-0.5 text-2xl leading-[1.15] text-center", children: "Your Shortlist" }),
            /* @__PURE__ */ s("p", { className: "text-xs text-center opacity-90 leading-tight mt-0.5", children: "Your saved pet service providers" })
          ] }),
          /* @__PURE__ */ d("div", { className: "hidden md:flex items-center justify-center gap-4 md:mb-2", children: [
            /* @__PURE__ */ s(
              D.div,
              {
                animate: {
                  scale: [1, 1.2, 1]
                },
                transition: { duration: 2, repeat: 1 / 0 },
                className: "md:text-4xl",
                children: "❤️"
              }
            ),
            /* @__PURE__ */ s("h1", { className: "mb-0 md:text-5xl md:leading-normal", children: "Your Shortlist" })
          ] }),
          /* @__PURE__ */ s("p", { className: "hidden md:block max-w-2xl mx-auto md:text-base", children: "All your shortlisted pet service providers in one place! Quick access to the grooming, training, boarding, and vet care you're interested in." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ s("section", { className: "py-8 md:py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto", children: r.length === 0 ? /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center py-16",
        children: [
          /* @__PURE__ */ s("div", { className: "mb-6 text-6xl", children: "💼" }),
          /* @__PURE__ */ s("h2", { className: "text-2xl text-gray-800 mb-4", children: "Your shortlist is empty" }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 mb-8", children: "Start exploring our pet services and save your favorites!" }),
          /* @__PURE__ */ d(
            D.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => o(!0),
              className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-shadow",
              children: [
                /* @__PURE__ */ s(mr, { className: "w-5 h-5" }),
                "Browse Services"
              ]
            }
          )
        ]
      }
    ) : /* @__PURE__ */ s("div", { className: "grid gap-6", children: r.map((x, T) => /* @__PURE__ */ s(
      D.div,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: T * 0.1 },
        className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
        children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row", children: [
          /* @__PURE__ */ s("div", { className: "md:w-48 h-48 md:h-auto bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center", children: x.photoUrl ? /* @__PURE__ */ s(
            "img",
            {
              src: x.photoUrl,
              alt: x.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ s("div", { className: "text-6xl", children: b(x.category) }) }),
          /* @__PURE__ */ d("div", { className: "flex-1 p-6", children: [
            /* @__PURE__ */ d("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ s("span", { className: "text-2xl", children: b(x.category) }),
                  /* @__PURE__ */ s("h3", { className: "text-xl text-gray-800", children: x.name })
                ] }),
                x.rating && /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ s("div", { className: "flex items-center", children: [...Array(5)].map((P, N) => /* @__PURE__ */ s(
                    Ct,
                    {
                      className: `w-4 h-4 ${N < Math.floor(x.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`
                    },
                    N
                  )) }),
                  /* @__PURE__ */ s("span", { className: "text-sm text-gray-600", children: x.rating.toFixed(1) })
                ] })
              ] }),
              /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.9 },
                  onClick: () => g(x.id),
                  className: "p-2 rounded-full hover:bg-red-50 transition-colors",
                  "aria-label": "Remove from shortlist",
                  children: /* @__PURE__ */ s(we, { className: "w-5 h-5 text-red-500" })
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "space-y-2 text-gray-600 text-sm", children: [
              x.address && /* @__PURE__ */ d("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ s(ar, { className: "w-4 h-4 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ d("span", { children: [
                  x.address,
                  x.city ? `, ${x.city}` : "",
                  x.zipCode ? ` ${x.zipCode}` : ""
                ] })
              ] }),
              !x.address && x.city && /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(ar, { className: "w-4 h-4" }),
                /* @__PURE__ */ s("span", { children: x.city })
              ] }),
              x.phone && /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s(Dn, { className: "w-4 h-4" }),
                /* @__PURE__ */ s("a", { href: `tel:${x.phone}`, className: "hover:text-purple-600", children: x.phone })
              ] })
            ] }),
            /* @__PURE__ */ s(
              D.button,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                onClick: () => t(x.category),
                className: "mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-shadow",
                children: "View Details"
              }
            )
          ] })
        ] })
      },
      x.id
    )) }) }) }),
    i && /* @__PURE__ */ s("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ d(
      D.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-white rounded-2xl p-8 max-w-md w-full",
        children: [
          /* @__PURE__ */ d("div", { className: "flex justify-between items-center mb-6", children: [
            /* @__PURE__ */ s("h3", { className: "text-2xl text-gray-800", children: "Browse Services" }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: () => o(!1),
                className: "p-2 hover:bg-gray-100 rounded-full",
                children: /* @__PURE__ */ s(we, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "space-y-4", children: [
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ s("label", { className: "block text-sm text-gray-600 mb-2", children: "Service Type" }),
              /* @__PURE__ */ d(
                "select",
                {
                  value: a,
                  onChange: (x) => l(x.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500",
                  children: [
                    /* @__PURE__ */ s("option", { value: "", children: "Select a service..." }),
                    /* @__PURE__ */ s("option", { value: "grooming", children: "✂️ Grooming" }),
                    /* @__PURE__ */ s("option", { value: "training", children: "🎓 Training" }),
                    /* @__PURE__ */ s("option", { value: "boarding", children: "🏠 Boarding & Daycare" }),
                    /* @__PURE__ */ s("option", { value: "sitters", children: "🦮 Sitters & Walkers" }),
                    /* @__PURE__ */ s("option", { value: "vet", children: "⚕️ Veterinary" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ s(
              D.button,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                onClick: w,
                disabled: !a,
                className: "w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed",
                children: "Search"
              }
            )
          ] })
        ]
      }
    ) }),
    h && /* @__PURE__ */ s(
      yl,
      {
        message: m,
        onClose: () => p(!1)
      }
    )
  ] });
}
function wf({ isOpen: t, onClose: e, onSuccess: r, defaultRole: n = "guest", defaultMode: i = "signup", resetToken: B0 = null }) {
  const [view, setView] = E(i === "login" ? "login" : "signup"), [l, c] = E(""), [u, h] = E(""), [R0, M0] = E(""), [p, m] = E(""), [f, v] = E(n), [g, b] = E(""), [successMsg, setSuccessMsg] = E(""), [resetTok, setResetTok] = E(""), [w, x] = E(!1);
  if (U(() => {
    t && (v(n), b(""), setSuccessMsg(""), M0(""), B0 ? (setResetTok(B0), setView("reset")) : (setResetTok(""), setView(i === "login" ? "login" : "signup")));
  }, [t, n, i, B0]), !t) return null;
  const k0 = (P) => {
    if (P.length < 8)
      return "Password must be at least 8 characters.";
    if (!/[A-Za-z]/.test(P))
      return "Password must include at least one letter.";
    if (!/[0-9]/.test(P))
      return "Password must include at least one number.";
    return null;
  }, T = async (P) => {
    P.preventDefault(), b(""), setSuccessMsg(""), x(!0);
    try {
      if (view === "login") {
        const N = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: l.trim().toLowerCase(), password: u })
        }), S = await N.json().catch(() => ({}));
        if (!N.ok)
          throw new Error(S.error || "Invalid email or password");
        r(S.user, S.accessToken, S.refreshToken, S.shortlist), e();
      } else if (view === "signup") {
        const N = k0(u);
        if (N)
          throw new Error(N);
        if (u !== R0)
          throw new Error("Passwords do not match. Please re-enter them.");
        const S = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: l.trim().toLowerCase(), password: u, name: p, role: f })
        }), C = await S.json().catch(() => ({}));
        if (!S.ok)
          throw new Error(C.error || "Could not create account");
        r(C.user, C.accessToken, C.refreshToken, C.shortlist), e();
      } else if (view === "forgot") {
        const N = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: l.trim().toLowerCase() })
        }), S = await N.json().catch(() => ({}));
        if (!N.ok)
          throw new Error(S.error || "Could not send reset email.");
        setSuccessMsg(S.message || "If an account exists for that email, password reset instructions have been sent.");
      } else if (view === "reset") {
        const N = k0(u);
        if (N)
          throw new Error(N);
        if (u !== R0)
          throw new Error("Passwords do not match. Please re-enter them.");
        const S = await fetch("/api/auth/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: resetTok || B0, password: u })
        }), C = await S.json().catch(() => ({}));
        if (!S.ok)
          throw new Error(C.error || "Could not reset password.");
        setSuccessMsg(C.message || "Your password has been updated. You can log in now."), setView("login"), h(""), M0("");
      }
    } catch (N) {
      b(N.message || "Something went wrong");
    } finally {
      x(!1);
    }
  }, I0 = view === "login" ? "Log In" : view === "signup" ? "Create Account" : view === "forgot" ? "Forgot Password" : "Set New Password", z0 = view === "forgot" ? "Send Reset Link" : view === "reset" ? "Update Password" : view === "login" ? "Log In" : "Create Account";
  return /* @__PURE__ */ s(
    D.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
      onClick: e,
      children: /* @__PURE__ */ d(
        D.div,
        {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
          onClick: (P) => P.stopPropagation(),
          className: "bg-white rounded-[20px] max-w-[380px] w-full px-7 pt-6 pb-7 shadow-xl",
          children: [
            /* @__PURE__ */ d("div", { className: "relative mb-6", children: [
              /* @__PURE__ */ s("h2", { className: "text-purple-500 text-center text-2xl font-semibold leading-tight", children: I0 }),
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: e,
                  className: "absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors",
                  children: /* @__PURE__ */ s(we, { className: "w-6 h-6" })
                }
              )
            ] }),
            /* @__PURE__ */ d("form", { onSubmit: T, className: "flex flex-col gap-3", children: [
              view === "signup" && /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "block text-gray-600 text-sm mb-2", children: "Name" }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "text",
                    value: p,
                    onChange: (P) => m(P.target.value),
                    className: "w-full h-[46px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                    required: !0
                  }
                )
              ] }),
              view !== "reset" && /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "block text-gray-600 text-sm mb-2", children: "Email" }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "email",
                    value: l,
                    onChange: (P) => c(P.target.value),
                    className: "w-full h-[46px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                    required: !0
                  }
                ),
                view === "forgot" && /* @__PURE__ */ s("p", { className: "text-xs text-gray-500 mt-2 leading-relaxed", children: "We'll email you a secure link to reset your password." })
              ] }),
              (view === "login" || view === "signup" || view === "reset") && /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "block text-gray-600 text-sm mb-2", children: view === "reset" ? "New Password" : "Password" }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "password",
                    value: u,
                    onChange: (P) => h(P.target.value),
                    className: "w-full h-[46px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                    required: !0,
                    minLength: view === "login" ? 1 : 8,
                    autoComplete: view === "login" ? "current-password" : "new-password"
                  }
                ),
                view === "login" && /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setView("forgot"), b(""), setSuccessMsg("");
                    },
                    className: "text-xs text-purple-600 hover:text-purple-700 mt-2 transition-colors",
                    children: "Forgot password?"
                  }
                ),
                (view === "signup" || view === "reset") && /* @__PURE__ */ s("p", { className: "text-xs text-gray-500 mt-2 leading-relaxed", children: "Use at least 8 characters with one letter and one number." })
              ] }),
              (view === "signup" || view === "reset") && /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "block text-gray-600 text-sm mb-2", children: "Confirm Password" }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "password",
                    value: R0,
                    onChange: (P) => M0(P.target.value),
                    className: "w-full h-[46px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",
                    required: !0,
                    minLength: 8,
                    autoComplete: "new-password"
                  }
                )
              ] }),
              view === "signup" && /* @__PURE__ */ s("div", { className: "h-px bg-gray-200/10 my-5" }),
              view === "signup" && /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ s("label", { className: "block text-gray-600 text-sm mb-2", children: "Account Type" }),
                /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => v("guest"),
                      className: `flex-1 h-10 rounded-full transition-all ${f === "guest" ? "bg-purple-50 border border-purple-500 text-purple-600" : "bg-white border border-gray-300 text-gray-600"}`,
                      children: "Pet Owner"
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      onClick: () => v("business"),
                      className: `flex-1 h-10 rounded-full transition-all ${f === "business" ? "bg-purple-50 border border-purple-500 text-purple-600" : "bg-white border border-gray-300 text-gray-600"}`,
                      children: "Business Owner"
                    }
                  )
                ] })
              ] }),
              successMsg && /* @__PURE__ */ s("div", { className: "bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm mt-3", children: successMsg }),
              g && /* @__PURE__ */ s("div", { className: "bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm mt-3", children: g }),
              /* @__PURE__ */ s("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ s(
                D.button,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  type: "submit",
                  disabled: w,
                  className: "bg-purple-600 hover:bg-purple-700 text-white h-[48px] w-[75%] rounded-[15px] transition-all disabled:opacity-50 flex items-center justify-center",
                  children: w ? "Processing..." : z0
                }
              ) })
            ] }),
            view === "login" && /* @__PURE__ */ d("div", { className: "mt-3.5 text-center text-sm", children: [
              /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Don't have an account? " }),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setView("signup"), b(""), setSuccessMsg(""), M0("");
                  },
                  className: "text-purple-600 hover:text-purple-700 transition-colors",
                  children: "Sign up"
                }
              )
            ] }),
            view === "signup" && /* @__PURE__ */ d("div", { className: "mt-3.5 text-center text-sm", children: [
              /* @__PURE__ */ s("span", { className: "text-gray-600", children: "Already have an account? " }),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setView("login"), b(""), setSuccessMsg(""), M0("");
                  },
                  className: "text-purple-600 hover:text-purple-700 transition-colors",
                  children: "Log in"
                }
              )
            ] }),
            (view === "forgot" || view === "reset") && /* @__PURE__ */ d("div", { className: "mt-3.5 text-center text-sm", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setView("login"), b(""), setSuccessMsg(""), M0("");
                  },
                  className: "text-purple-600 hover:text-purple-700 transition-colors",
                  children: "Back to Log in"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function Nf({
  isOpen: t,
  onClose: e,
  currentPage: r,
  onNavigate: n,
  user: i,
  onLogin: o,
  onLogout: a,
  onAddBusiness: l
}) {
  const [c, u] = E(null), [h, p] = E(null), m = (b) => {
    p(null), u(b.targetTouches[0].clientX);
  }, f = (b) => {
    p(b.targetTouches[0].clientX);
  }, v = () => {
    if (!c || !h) return;
    c - h < -50 && e();
  }, g = (b) => {
    n(b), e();
  };
  return /* @__PURE__ */ s(Pt, { children: t && /* @__PURE__ */ d(ie, { children: [
    /* @__PURE__ */ s(
      D.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50",
        onClick: e
      }
    ),
    /* @__PURE__ */ d(
      D.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 25, stiffness: 200 },
        className: "fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-50 shadow-2xl overflow-y-auto",
        onTouchStart: m,
        onTouchMove: f,
        onTouchEnd: v,
        children: [
          /* @__PURE__ */ d("div", { className: "bg-[#fce5c1] p-6 flex justify-between items-center", children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => g("home"),
                  className: "text-3xl hover:scale-110 transition-transform active:scale-95",
                  children: "🐾"
                }
              ),
              /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => g("home"),
                  className: "hover:opacity-80 transition-opacity active:opacity-60",
                  children: /* @__PURE__ */ s("h2", { className: "text-purple-600 font-semibold", children: "Home" })
                }
              ) })
            ] }),
            /* @__PURE__ */ s(
              "button",
              {
                onClick: e,
                className: "text-gray-600 hover:text-gray-800 transition-colors",
                children: /* @__PURE__ */ s(we, { className: "w-6 h-6" })
              }
            )
          ] }),
          i && /* @__PURE__ */ d("div", { className: "p-4 bg-purple-50 border-b border-purple-100", children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ s(fl, { className: "w-5 h-5 text-purple-600" }),
              /* @__PURE__ */ s("span", { className: "text-gray-700 font-medium", children: i.name })
            ] }),
            /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
              i.isAdmin && /* @__PURE__ */ s("span", { className: "text-xs bg-red-600 text-white px-2 py-1 rounded-full", children: "👑 Admin" }),
              i.role === "business" && !i.isAdmin && /* @__PURE__ */ s("span", { className: "text-xs bg-purple-600 text-white px-2 py-1 rounded-full", children: "Business" })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: "p-4 space-y-2", children: [
            /* @__PURE__ */ d(
              "a",
              {
                href: "/grooming",
                onClick: (b) => {
                  b.preventDefault(), g("grooming");
                },
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 no-underline ${r === "grooming" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "✂️" }),
                  /* @__PURE__ */ s("span", { children: "Grooming" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "a",
              {
                href: "/training",
                onClick: (b) => {
                  b.preventDefault(), g("training");
                },
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 no-underline ${r === "training" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "🎓" }),
                  /* @__PURE__ */ s("span", { children: "Training" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "a",
              {
                href: "/boarding",
                onClick: (b) => {
                  b.preventDefault(), g("boarding");
                },
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 no-underline ${r === "boarding" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "🏠" }),
                  /* @__PURE__ */ s("span", { children: "Boarding & Daycare" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "a",
              {
                href: "/sitters",
                onClick: (b) => {
                  b.preventDefault(), g("sitters");
                },
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 no-underline ${r === "sitters" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "🦮" }),
                  /* @__PURE__ */ s("span", { children: "Sitters & Walkers" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "a",
              {
                href: "/vet-care",
                onClick: (b) => {
                  b.preventDefault(), g("vet");
                },
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 no-underline ${r === "vet" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "⚕️" }),
                  /* @__PURE__ */ s("span", { children: "Vet Care" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => g("products"),
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${r === "products" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "🛍️" }),
                  /* @__PURE__ */ s("span", { children: "Pet Products" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => g("shortlist"),
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${r === "shortlist" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "❤️" }),
                  /* @__PURE__ */ s("span", { children: "Shortlist" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => g("blog"),
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${r === "blog" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "📰" }),
                  /* @__PURE__ */ s("span", { children: "The Daily Wag" })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => g("about"),
                className: `w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${r === "about" ? "bg-purple-600 text-white" : "hover:bg-purple-50 text-gray-700"}`,
                children: [
                  /* @__PURE__ */ s("span", { className: "text-xl", children: "ℹ️" }),
                  /* @__PURE__ */ s("span", { children: "About" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ s("div", { className: "h-px bg-gray-200 mx-4 my-2" }),
          /* @__PURE__ */ s("div", { className: "p-4 space-y-2", children: i ? /* @__PURE__ */ d(ie, { children: [
            i.isAdmin && /* @__PURE__ */ s(
              "button",
              {
                onClick: () => {
                  l(), e();
                },
                className: "w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 justify-center",
                children: /* @__PURE__ */ s("span", { children: "+ Add Business" })
              }
            ),
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => {
                  a(), e();
                },
                className: "w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2 justify-center",
                children: [
                  /* @__PURE__ */ s(pl, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s("span", { children: "Logout" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ d(
            "button",
            {
              onClick: () => {
                o(), e();
              },
              className: "w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 justify-center",
              children: [
                /* @__PURE__ */ s(hl, { className: "w-4 h-4" }),
                /* @__PURE__ */ s("span", { children: "Login" })
              ]
            }
          ) })
        ]
      }
    )
  ] }) });
}
var An = function(t, e) {
  return An = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, An(t, e);
};
function Cf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  An(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ne = function() {
  return ne = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ne.apply(this, arguments);
};
function wl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ur, to;
function Sf() {
  if (to) return Ur;
  to = 1;
  var t = !1, e, r, n, i, o, a, l, c, u, h, p, m, f, v, g;
  function b() {
    if (!t) {
      t = !0;
      var x = navigator.userAgent, T = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(x), P = /(Mac OS X)|(Windows)|(Linux)/.exec(x);
      if (m = /\b(iPhone|iP[ao]d)/.exec(x), f = /\b(iP[ao]d)/.exec(x), h = /Android/i.exec(x), v = /FBAN\/\w+;/i.exec(x), g = /Mobile/i.exec(x), p = !!/Win64/.exec(x), T) {
        e = T[1] ? parseFloat(T[1]) : T[5] ? parseFloat(T[5]) : NaN, e && document && document.documentMode && (e = document.documentMode);
        var N = /(?:Trident\/(\d+.\d+))/.exec(x);
        a = N ? parseFloat(N[1]) + 4 : e, r = T[2] ? parseFloat(T[2]) : NaN, n = T[3] ? parseFloat(T[3]) : NaN, i = T[4] ? parseFloat(T[4]) : NaN, i ? (T = /(?:Chrome\/(\d+\.\d+))/.exec(x), o = T && T[1] ? parseFloat(T[1]) : NaN) : o = NaN;
      } else
        e = r = n = o = i = NaN;
      if (P) {
        if (P[1]) {
          var S = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(x);
          l = S ? parseFloat(S[1].replace("_", ".")) : !0;
        } else
          l = !1;
        c = !!P[2], u = !!P[3];
      } else
        l = c = u = !1;
    }
  }
  var w = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return b() || e;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return b() || a > e;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return w.ie() && p;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return b() || r;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return b() || n;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return b() || i;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return w.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return b() || o;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return b() || c;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return b() || l;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return b() || u;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return b() || m;
    },
    mobile: function() {
      return b() || m || f || h || g;
    },
    nativeApp: function() {
      return b() || v;
    },
    android: function() {
      return b() || h;
    },
    ipad: function() {
      return b() || f;
    }
  };
  return Ur = w, Ur;
}
var Gr, ro;
function Tf() {
  if (ro) return Gr;
  ro = 1;
  var t = !!(typeof window < "u" && window.document && window.document.createElement), e = {
    canUseDOM: t,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
    canUseViewport: t && !!window.screen,
    isInWorker: !t
    // For now, this is true - might change in the future.
  };
  return Gr = e, Gr;
}
var qr, no;
function Pf() {
  if (no) return qr;
  no = 1;
  var t = Tf(), e;
  t.canUseDOM && (e = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function r(n, i) {
    if (!t.canUseDOM || i && !("addEventListener" in document))
      return !1;
    var o = "on" + n, a = o in document;
    if (!a) {
      var l = document.createElement("div");
      l.setAttribute(o, "return;"), a = typeof l[o] == "function";
    }
    return !a && e && n === "wheel" && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
  }
  return qr = r, qr;
}
var Kr, io;
function Df() {
  if (io) return Kr;
  io = 1;
  var t = Sf(), e = Pf(), r = 10, n = 40, i = 800;
  function o(a) {
    var l = 0, c = 0, u = 0, h = 0;
    return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (l = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (l = c, c = 0), u = l * r, h = c * r, "deltaY" in a && (h = a.deltaY), "deltaX" in a && (u = a.deltaX), (u || h) && a.deltaMode && (a.deltaMode == 1 ? (u *= n, h *= n) : (u *= i, h *= i)), u && !l && (l = u < 1 ? -1 : 1), h && !c && (c = h < 1 ? -1 : 1), {
      spinX: l,
      spinY: c,
      pixelX: u,
      pixelY: h
    };
  }
  return o.getEventType = function() {
    return t.firefox() ? "DOMMouseScroll" : e("wheel") ? "wheel" : "mousewheel";
  }, Kr = o, Kr;
}
var Yr, so;
function kf() {
  return so || (so = 1, Yr = Df()), Yr;
}
var Af = kf();
const Ef = /* @__PURE__ */ wl(Af);
function Mf(t, e, r, n, i, o) {
  o === void 0 && (o = 0);
  var a = ct(t, e, o), l = a.width, c = a.height, u = Math.min(l, r), h = Math.min(c, n);
  return u > h * i ? {
    width: h * i,
    height: h
  } : {
    width: u,
    height: u / i
  };
}
function Rf(t) {
  return t.width > t.height ? t.width / t.naturalWidth : t.height / t.naturalHeight;
}
function bt(t, e, r, n, i) {
  i === void 0 && (i = 0);
  var o = ct(e.width, e.height, i), a = o.width, l = o.height;
  return {
    x: oo(t.x, a, r.width, n),
    y: oo(t.y, l, r.height, n)
  };
}
function oo(t, e, r, n) {
  var i = Math.abs(e * n / 2 - r / 2);
  return gr(t, -i, i);
}
function ao(t, e) {
  return Math.sqrt(Math.pow(t.y - e.y, 2) + Math.pow(t.x - e.x, 2));
}
function lo(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x) * 180 / Math.PI;
}
function If(t, e, r, n, i, o, a) {
  o === void 0 && (o = 0), a === void 0 && (a = !0);
  var l = a ? Of : Ff, c = ct(e.width, e.height, o), u = ct(e.naturalWidth, e.naturalHeight, o), h = {
    x: l(100, ((c.width - r.width / i) / 2 - t.x / i) / c.width * 100),
    y: l(100, ((c.height - r.height / i) / 2 - t.y / i) / c.height * 100),
    width: l(100, r.width / c.width * 100 / i),
    height: l(100, r.height / c.height * 100 / i)
  }, p = Math.round(l(u.width, h.width * u.width / 100)), m = Math.round(l(u.height, h.height * u.height / 100)), f = u.width >= u.height * n, v = f ? {
    width: Math.round(m * n),
    height: m
  } : {
    width: p,
    height: Math.round(p / n)
  }, g = ne(ne({}, v), {
    x: Math.round(l(u.width - v.width, h.x * u.width / 100)),
    y: Math.round(l(u.height - v.height, h.y * u.height / 100))
  });
  return {
    croppedAreaPercentages: h,
    croppedAreaPixels: g
  };
}
function Of(t, e) {
  return Math.min(t, Math.max(0, e));
}
function Ff(t, e) {
  return e;
}
function _f(t, e, r, n, i, o) {
  var a = ct(e.width, e.height, r), l = gr(n.width / a.width * (100 / t.width), i, o), c = {
    x: l * a.width / 2 - n.width / 2 - a.width * l * (t.x / 100),
    y: l * a.height / 2 - n.height / 2 - a.height * l * (t.y / 100)
  };
  return {
    crop: c,
    zoom: l
  };
}
function Lf(t, e, r) {
  var n = Rf(e);
  return r.height > r.width ? r.height / (t.height * n) : r.width / (t.width * n);
}
function Bf(t, e, r, n, i, o) {
  r === void 0 && (r = 0);
  var a = ct(e.naturalWidth, e.naturalHeight, r), l = gr(Lf(t, e, n), i, o), c = n.height > n.width ? n.height / t.height : n.width / t.width, u = {
    x: ((a.width - t.width) / 2 - t.x) * c,
    y: ((a.height - t.height) / 2 - t.y) * c
  };
  return {
    crop: u,
    zoom: l
  };
}
function co(t, e) {
  return {
    x: (e.x + t.x) / 2,
    y: (e.y + t.y) / 2
  };
}
function $f(t) {
  return t * Math.PI / 180;
}
function ct(t, e, r) {
  var n = $f(r);
  return {
    width: Math.abs(Math.cos(n) * t) + Math.abs(Math.sin(n) * e),
    height: Math.abs(Math.sin(n) * t) + Math.abs(Math.cos(n) * e)
  };
}
function gr(t, e, r) {
  return Math.min(Math.max(t, e), r);
}
function Yt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.filter(function(r) {
    return typeof r == "string" && r.length > 0;
  }).join(" ").trim();
}
var Vf = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, jf = 1, Hf = 3, zf = 1, Wf = (
  /** @class */
  (function(t) {
    Cf(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.cropperRef = kr(), r.imageRef = kr(), r.videoRef = kr(), r.containerPosition = {
        x: 0,
        y: 0
      }, r.containerRef = null, r.styleRef = null, r.containerRect = null, r.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, r.dragStartPosition = {
        x: 0,
        y: 0
      }, r.dragStartCrop = {
        x: 0,
        y: 0
      }, r.gestureZoomStart = 0, r.gestureRotationStart = 0, r.isTouching = !1, r.lastPinchDistance = 0, r.lastPinchRotation = 0, r.rafDragTimeout = null, r.rafPinchTimeout = null, r.wheelTimer = null, r.currentDoc = typeof document < "u" ? document : null, r.currentWindow = typeof window < "u" ? window : null, r.resizeObserver = null, r.previousCropSize = null, r.isInitialized = !1, r.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, r.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !r.containerRef)) {
          var n = !0;
          r.resizeObserver = new window.ResizeObserver(function(i) {
            if (n) {
              n = !1;
              return;
            }
            r.computeSizes();
          }), r.resizeObserver.observe(r.containerRef);
        }
      }, r.preventZoomSafari = function(n) {
        return n.preventDefault();
      }, r.cleanEvents = function() {
        r.currentDoc && (r.currentDoc.removeEventListener("mousemove", r.onMouseMove), r.currentDoc.removeEventListener("mouseup", r.onDragStopped), r.currentDoc.removeEventListener("touchmove", r.onTouchMove), r.currentDoc.removeEventListener("touchend", r.onDragStopped), r.currentDoc.removeEventListener("gesturechange", r.onGestureChange), r.currentDoc.removeEventListener("gestureend", r.onGestureEnd), r.currentDoc.removeEventListener("scroll", r.onScroll));
      }, r.clearScrollEvent = function() {
        r.containerRef && r.containerRef.removeEventListener("wheel", r.onWheel), r.wheelTimer && clearTimeout(r.wheelTimer);
      }, r.onMediaLoad = function() {
        var n = r.computeSizes();
        n && (r.previousCropSize = n, r.emitCropData(), r.setInitialCrop(n), r.isInitialized = !0), r.props.onMediaLoaded && r.props.onMediaLoaded(r.mediaSize);
      }, r.setInitialCrop = function(n) {
        if (r.props.initialCroppedAreaPercentages) {
          var i = _f(r.props.initialCroppedAreaPercentages, r.mediaSize, r.props.rotation, n, r.props.minZoom, r.props.maxZoom), o = i.crop, a = i.zoom;
          r.props.onCropChange(o), r.props.onZoomChange && r.props.onZoomChange(a);
        } else if (r.props.initialCroppedAreaPixels) {
          var l = Bf(r.props.initialCroppedAreaPixels, r.mediaSize, r.props.rotation, n, r.props.minZoom, r.props.maxZoom), o = l.crop, a = l.zoom;
          r.props.onCropChange(o), r.props.onZoomChange && r.props.onZoomChange(a);
        }
      }, r.computeSizes = function() {
        var n, i, o, a, l, c, u = r.imageRef.current || r.videoRef.current;
        if (u && r.containerRef) {
          r.containerRect = r.containerRef.getBoundingClientRect(), r.saveContainerPosition();
          var h = r.containerRect.width / r.containerRect.height, p = ((n = r.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((i = r.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, m = ((o = r.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((a = r.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, f = u.offsetWidth < p || u.offsetHeight < m, v = p / m, g = void 0;
          if (f)
            switch (r.state.mediaObjectFit) {
              default:
              case "contain":
                g = h > v ? {
                  width: r.containerRect.height * v,
                  height: r.containerRect.height
                } : {
                  width: r.containerRect.width,
                  height: r.containerRect.width / v
                };
                break;
              case "horizontal-cover":
                g = {
                  width: r.containerRect.width,
                  height: r.containerRect.width / v
                };
                break;
              case "vertical-cover":
                g = {
                  width: r.containerRect.height * v,
                  height: r.containerRect.height
                };
                break;
            }
          else
            g = {
              width: u.offsetWidth,
              height: u.offsetHeight
            };
          r.mediaSize = ne(ne({}, g), {
            naturalWidth: p,
            naturalHeight: m
          }), r.props.setMediaSize && r.props.setMediaSize(r.mediaSize);
          var b = r.props.cropSize ? r.props.cropSize : Mf(r.mediaSize.width, r.mediaSize.height, r.containerRect.width, r.containerRect.height, r.props.aspect, r.props.rotation);
          return (((l = r.state.cropSize) === null || l === void 0 ? void 0 : l.height) !== b.height || ((c = r.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== b.width) && r.props.onCropSizeChange && r.props.onCropSizeChange(b), r.setState({
            cropSize: b
          }, r.recomputeCropPosition), r.props.setCropSize && r.props.setCropSize(b), b;
        }
      }, r.saveContainerPosition = function() {
        if (r.containerRef) {
          var n = r.containerRef.getBoundingClientRect();
          r.containerPosition = {
            x: n.left,
            y: n.top
          };
        }
      }, r.onMouseDown = function(n) {
        r.currentDoc && (n.preventDefault(), r.currentDoc.addEventListener("mousemove", r.onMouseMove), r.currentDoc.addEventListener("mouseup", r.onDragStopped), r.saveContainerPosition(), r.onDragStart(e.getMousePoint(n)));
      }, r.onMouseMove = function(n) {
        return r.onDrag(e.getMousePoint(n));
      }, r.onScroll = function(n) {
        r.currentDoc && (n.preventDefault(), r.saveContainerPosition());
      }, r.onTouchStart = function(n) {
        r.currentDoc && (r.isTouching = !0, !(r.props.onTouchRequest && !r.props.onTouchRequest(n)) && (r.currentDoc.addEventListener("touchmove", r.onTouchMove, {
          passive: !1
        }), r.currentDoc.addEventListener("touchend", r.onDragStopped), r.saveContainerPosition(), n.touches.length === 2 ? r.onPinchStart(n) : n.touches.length === 1 && r.onDragStart(e.getTouchPoint(n.touches[0]))));
      }, r.onTouchMove = function(n) {
        n.preventDefault(), n.touches.length === 2 ? r.onPinchMove(n) : n.touches.length === 1 && r.onDrag(e.getTouchPoint(n.touches[0]));
      }, r.onGestureStart = function(n) {
        r.currentDoc && (n.preventDefault(), r.currentDoc.addEventListener("gesturechange", r.onGestureChange), r.currentDoc.addEventListener("gestureend", r.onGestureEnd), r.gestureZoomStart = r.props.zoom, r.gestureRotationStart = r.props.rotation);
      }, r.onGestureChange = function(n) {
        if (n.preventDefault(), !r.isTouching) {
          var i = e.getMousePoint(n), o = r.gestureZoomStart - 1 + n.scale;
          if (r.setNewZoom(o, i, {
            shouldUpdatePosition: !0
          }), r.props.onRotationChange) {
            var a = r.gestureRotationStart + n.rotation;
            r.props.onRotationChange(a);
          }
        }
      }, r.onGestureEnd = function(n) {
        r.cleanEvents();
      }, r.onDragStart = function(n) {
        var i, o, a = n.x, l = n.y;
        r.dragStartPosition = {
          x: a,
          y: l
        }, r.dragStartCrop = ne({}, r.props.crop), (o = (i = r.props).onInteractionStart) === null || o === void 0 || o.call(i);
      }, r.onDrag = function(n) {
        var i = n.x, o = n.y;
        r.currentWindow && (r.rafDragTimeout && r.currentWindow.cancelAnimationFrame(r.rafDragTimeout), r.rafDragTimeout = r.currentWindow.requestAnimationFrame(function() {
          if (r.state.cropSize && !(i === void 0 || o === void 0)) {
            var a = i - r.dragStartPosition.x, l = o - r.dragStartPosition.y, c = {
              x: r.dragStartCrop.x + a,
              y: r.dragStartCrop.y + l
            }, u = r.props.restrictPosition ? bt(c, r.mediaSize, r.state.cropSize, r.props.zoom, r.props.rotation) : c;
            r.props.onCropChange(u);
          }
        }));
      }, r.onDragStopped = function() {
        var n, i;
        r.isTouching = !1, r.cleanEvents(), r.emitCropData(), (i = (n = r.props).onInteractionEnd) === null || i === void 0 || i.call(n);
      }, r.onWheel = function(n) {
        if (r.currentWindow && !(r.props.onWheelRequest && !r.props.onWheelRequest(n))) {
          n.preventDefault();
          var i = e.getMousePoint(n), o = Ef(n).pixelY, a = r.props.zoom - o * r.props.zoomSpeed / 200;
          r.setNewZoom(a, i, {
            shouldUpdatePosition: !0
          }), r.state.hasWheelJustStarted || r.setState({
            hasWheelJustStarted: !0
          }, function() {
            var l, c;
            return (c = (l = r.props).onInteractionStart) === null || c === void 0 ? void 0 : c.call(l);
          }), r.wheelTimer && clearTimeout(r.wheelTimer), r.wheelTimer = r.currentWindow.setTimeout(function() {
            return r.setState({
              hasWheelJustStarted: !1
            }, function() {
              var l, c;
              return (c = (l = r.props).onInteractionEnd) === null || c === void 0 ? void 0 : c.call(l);
            });
          }, 250);
        }
      }, r.getPointOnContainer = function(n, i) {
        var o = n.x, a = n.y;
        if (!r.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: r.containerRect.width / 2 - (o - i.x),
          y: r.containerRect.height / 2 - (a - i.y)
        };
      }, r.getPointOnMedia = function(n) {
        var i = n.x, o = n.y, a = r.props, l = a.crop, c = a.zoom;
        return {
          x: (i + l.x) / c,
          y: (o + l.y) / c
        };
      }, r.setNewZoom = function(n, i, o) {
        var a = o === void 0 ? {} : o, l = a.shouldUpdatePosition, c = l === void 0 ? !0 : l;
        if (!(!r.state.cropSize || !r.props.onZoomChange)) {
          var u = gr(n, r.props.minZoom, r.props.maxZoom);
          if (c) {
            var h = r.getPointOnContainer(i, r.containerPosition), p = r.getPointOnMedia(h), m = {
              x: p.x * u - h.x,
              y: p.y * u - h.y
            }, f = r.props.restrictPosition ? bt(m, r.mediaSize, r.state.cropSize, u, r.props.rotation) : m;
            r.props.onCropChange(f);
          }
          r.props.onZoomChange(u);
        }
      }, r.getCropData = function() {
        if (!r.state.cropSize)
          return null;
        var n = r.props.restrictPosition ? bt(r.props.crop, r.mediaSize, r.state.cropSize, r.props.zoom, r.props.rotation) : r.props.crop;
        return If(n, r.mediaSize, r.state.cropSize, r.getAspect(), r.props.zoom, r.props.rotation, r.props.restrictPosition);
      }, r.emitCropData = function() {
        var n = r.getCropData();
        if (n) {
          var i = n.croppedAreaPercentages, o = n.croppedAreaPixels;
          r.props.onCropComplete && r.props.onCropComplete(i, o), r.props.onCropAreaChange && r.props.onCropAreaChange(i, o);
        }
      }, r.emitCropAreaChange = function() {
        var n = r.getCropData();
        if (n) {
          var i = n.croppedAreaPercentages, o = n.croppedAreaPixels;
          r.props.onCropAreaChange && r.props.onCropAreaChange(i, o);
        }
      }, r.recomputeCropPosition = function() {
        var n, i;
        if (r.state.cropSize) {
          var o = r.props.crop;
          if (r.isInitialized && (!((n = r.previousCropSize) === null || n === void 0) && n.width) && (!((i = r.previousCropSize) === null || i === void 0) && i.height)) {
            var a = Math.abs(r.previousCropSize.width - r.state.cropSize.width) > 1e-6 || Math.abs(r.previousCropSize.height - r.state.cropSize.height) > 1e-6;
            if (a) {
              var l = r.state.cropSize.width / r.previousCropSize.width, c = r.state.cropSize.height / r.previousCropSize.height;
              o = {
                x: r.props.crop.x * l,
                y: r.props.crop.y * c
              };
            }
          }
          var u = r.props.restrictPosition ? bt(o, r.mediaSize, r.state.cropSize, r.props.zoom, r.props.rotation) : o;
          r.previousCropSize = r.state.cropSize, r.props.onCropChange(u), r.emitCropData();
        }
      }, r.onKeyDown = function(n) {
        var i, o, a = r.props, l = a.crop, c = a.onCropChange, u = a.keyboardStep, h = a.zoom, p = a.rotation, m = u;
        if (r.state.cropSize) {
          n.shiftKey && (m *= 0.2);
          var f = ne({}, l);
          switch (n.key) {
            case "ArrowUp":
              f.y -= m, n.preventDefault();
              break;
            case "ArrowDown":
              f.y += m, n.preventDefault();
              break;
            case "ArrowLeft":
              f.x -= m, n.preventDefault();
              break;
            case "ArrowRight":
              f.x += m, n.preventDefault();
              break;
            default:
              return;
          }
          r.props.restrictPosition && (f = bt(f, r.mediaSize, r.state.cropSize, h, p)), n.repeat || (o = (i = r.props).onInteractionStart) === null || o === void 0 || o.call(i), c(f);
        }
      }, r.onKeyUp = function(n) {
        var i, o;
        switch (n.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            n.preventDefault();
            break;
          default:
            return;
        }
        r.emitCropData(), (o = (i = r.props).onInteractionEnd) === null || o === void 0 || o.call(i);
      }, r;
    }
    return e.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Vf, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, e.prototype.componentWillUnmount = function() {
      var r, n;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (r = this.resizeObserver) === null || r === void 0 || r.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((n = this.styleRef.parentNode) === null || n === void 0 || n.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, e.prototype.componentDidUpdate = function(r) {
      var n, i, o, a, l, c, u, h, p;
      r.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : r.aspect !== this.props.aspect ? this.computeSizes() : r.objectFit !== this.props.objectFit ? this.computeSizes() : r.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((n = r.cropSize) === null || n === void 0 ? void 0 : n.height) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.height) || ((o = r.cropSize) === null || o === void 0 ? void 0 : o.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((l = r.crop) === null || l === void 0 ? void 0 : l.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((u = r.crop) === null || u === void 0 ? void 0 : u.y) !== ((h = this.props.crop) === null || h === void 0 ? void 0 : h.y)) && this.emitCropAreaChange(), r.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), r.video !== this.props.video && ((p = this.videoRef.current) === null || p === void 0 || p.load());
      var m = this.getObjectFit();
      m !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: m
      }, this.computeSizes);
    }, e.prototype.getAspect = function() {
      var r = this.props, n = r.cropSize, i = r.aspect;
      return n ? n.width / n.height : i;
    }, e.prototype.getObjectFit = function() {
      var r, n, i, o;
      if (this.props.objectFit === "cover") {
        var a = this.imageRef.current || this.videoRef.current;
        if (a && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var l = this.containerRect.width / this.containerRect.height, c = ((r = this.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((n = this.videoRef.current) === null || n === void 0 ? void 0 : n.videoWidth) || 0, u = ((i = this.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((o = this.videoRef.current) === null || o === void 0 ? void 0 : o.videoHeight) || 0, h = c / u;
          return h < l ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, e.prototype.onPinchStart = function(r) {
      var n = e.getTouchPoint(r.touches[0]), i = e.getTouchPoint(r.touches[1]);
      this.lastPinchDistance = ao(n, i), this.lastPinchRotation = lo(n, i), this.onDragStart(co(n, i));
    }, e.prototype.onPinchMove = function(r) {
      var n = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var i = e.getTouchPoint(r.touches[0]), o = e.getTouchPoint(r.touches[1]), a = co(i, o);
        this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var l = ao(i, o), c = n.props.zoom * (l / n.lastPinchDistance);
          n.setNewZoom(c, a, {
            shouldUpdatePosition: !1
          }), n.lastPinchDistance = l;
          var u = lo(i, o), h = n.props.rotation + (u - n.lastPinchRotation);
          n.props.onRotationChange && n.props.onRotationChange(h), n.lastPinchRotation = u;
        });
      }
    }, e.prototype.render = function() {
      var r = this, n, i = this.props, o = i.image, a = i.video, l = i.mediaProps, c = i.cropperProps, u = i.transform, h = i.crop, p = h.x, m = h.y, f = i.rotation, v = i.zoom, g = i.cropShape, b = i.showGrid, w = i.roundCropAreaPixels, x = i.style, T = x.containerStyle, P = x.cropAreaStyle, N = x.mediaStyle, S = i.classes, C = S.containerClassName, R = S.cropAreaClassName, M = S.mediaClassName, k = (n = this.state.mediaObjectFit) !== null && n !== void 0 ? n : this.getObjectFit();
      return Pe("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(z) {
          return r.containerRef = z;
        },
        "data-testid": "container",
        style: T,
        className: Yt("reactEasyCrop_Container", C)
      }, o ? Pe("img", ne({
        alt: "",
        className: Yt("reactEasyCrop_Image", k === "contain" && "reactEasyCrop_Contain", k === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", k === "vertical-cover" && "reactEasyCrop_Cover_Vertical", M)
      }, l, {
        src: o,
        ref: this.imageRef,
        style: ne(ne({}, N), {
          transform: u || "translate(".concat(p, "px, ").concat(m, "px) rotate(").concat(f, "deg) scale(").concat(v, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && Pe("video", ne({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Yt("reactEasyCrop_Video", k === "contain" && "reactEasyCrop_Contain", k === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", k === "vertical-cover" && "reactEasyCrop_Cover_Vertical", M)
      }, l, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: ne(ne({}, N), {
          transform: u || "translate(".concat(p, "px, ").concat(m, "px) rotate(").concat(f, "deg) scale(").concat(v, ")")
        }),
        controls: !1
      }), (Array.isArray(a) ? a : [{
        src: a
      }]).map(function(I) {
        return Pe("source", ne({
          key: I.src
        }, I));
      })), this.state.cropSize && Pe("div", ne({
        ref: this.cropperRef,
        style: ne(ne({}, P), {
          width: w ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: w ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Yt("reactEasyCrop_CropArea", g === "round" && "reactEasyCrop_CropAreaRound", b && "reactEasyCrop_CropAreaGrid", R)
      }, c)));
    }, e.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Hf,
      minZoom: jf,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0,
      keyboardStep: zf
    }, e.getMousePoint = function(r) {
      return {
        x: Number(r.clientX),
        y: Number(r.clientY)
      };
    }, e.getTouchPoint = function(r) {
      return {
        x: Number(r.clientX),
        y: Number(r.clientY)
      };
    }, e;
  })(Fn)
);
const Nl = _e({
  dragDropManager: void 0
});
function fe(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var uo = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})(), ho = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, po = {
  INIT: "@@redux/INIT" + ho(),
  REPLACE: "@@redux/REPLACE" + ho()
};
function Uf(t) {
  if (typeof t != "object" || t === null) return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function Cl(t, e, r) {
  var n;
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(fe(0));
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(fe(1));
    return r(Cl)(t, e);
  }
  if (typeof t != "function")
    throw new Error(fe(2));
  var i = t, o = e, a = [], l = a, c = !1;
  function u() {
    l === a && (l = a.slice());
  }
  function h() {
    if (c)
      throw new Error(fe(3));
    return o;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(fe(4));
    if (c)
      throw new Error(fe(5));
    var b = !0;
    return u(), l.push(g), function() {
      if (b) {
        if (c)
          throw new Error(fe(6));
        b = !1, u();
        var x = l.indexOf(g);
        l.splice(x, 1), a = null;
      }
    };
  }
  function m(g) {
    if (!Uf(g))
      throw new Error(fe(7));
    if (typeof g.type > "u")
      throw new Error(fe(8));
    if (c)
      throw new Error(fe(9));
    try {
      c = !0, o = i(o, g);
    } finally {
      c = !1;
    }
    for (var b = a = l, w = 0; w < b.length; w++) {
      var x = b[w];
      x();
    }
    return g;
  }
  function f(g) {
    if (typeof g != "function")
      throw new Error(fe(10));
    i = g, m({
      type: po.REPLACE
    });
  }
  function v() {
    var g, b = p;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error(fe(11));
        function T() {
          x.next && x.next(h());
        }
        T();
        var P = b(T);
        return {
          unsubscribe: P
        };
      }
    }, g[uo] = function() {
      return this;
    }, g;
  }
  return m({
    type: po.INIT
  }), n = {
    dispatch: m,
    subscribe: p,
    getState: h,
    replaceReducer: f
  }, n[uo] = v, n;
}
function $(t, e, ...r) {
  if (Gf() && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    let n;
    if (e === void 0)
      n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let i = 0;
      n = new Error(e.replace(/%s/g, function() {
        return r[i++];
      })), n.name = "Invariant Violation";
    }
    throw n.framesToPop = 1, n;
  }
}
function Gf() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function qf(t, e, r) {
  return e.split(".").reduce(
    (n, i) => n && n[i] ? n[i] : r || null,
    t
  );
}
function Kf(t, e) {
  return t.filter(
    (r) => r !== e
  );
}
function Sl(t) {
  return typeof t == "object";
}
function Yf(t, e) {
  const r = /* @__PURE__ */ new Map(), n = (o) => {
    r.set(o, r.has(o) ? r.get(o) + 1 : 1);
  };
  t.forEach(n), e.forEach(n);
  const i = [];
  return r.forEach((o, a) => {
    o === 1 && i.push(a);
  }), i;
}
function Xf(t, e) {
  return t.filter(
    (r) => e.indexOf(r) > -1
  );
}
const Ci = "dnd-core/INIT_COORDS", yr = "dnd-core/BEGIN_DRAG", Si = "dnd-core/PUBLISH_DRAG_SOURCE", vr = "dnd-core/HOVER", xr = "dnd-core/DROP", br = "dnd-core/END_DRAG";
function mo(t, e) {
  return {
    type: Ci,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
const Zf = {
  type: Ci,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Jf(t) {
  return function(r = [], n = {
    publishSource: !0
  }) {
    const { publishSource: i = !0, clientOffset: o, getSourceClientOffset: a } = n, l = t.getMonitor(), c = t.getRegistry();
    t.dispatch(mo(o)), Qf(r, l, c);
    const u = rg(r, l);
    if (u == null) {
      t.dispatch(Zf);
      return;
    }
    let h = null;
    if (o) {
      if (!a)
        throw new Error("getSourceClientOffset must be defined");
      eg(a), h = a(u);
    }
    t.dispatch(mo(o, h));
    const m = c.getSource(u).beginDrag(l, u);
    if (m == null)
      return;
    tg(m), c.pinSource(u);
    const f = c.getSourceType(u);
    return {
      type: yr,
      payload: {
        itemType: f,
        item: m,
        sourceId: u,
        clientOffset: o || null,
        sourceClientOffset: h || null,
        isSourcePublic: !!i
      }
    };
  };
}
function Qf(t, e, r) {
  $(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(n) {
    $(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function eg(t) {
  $(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function tg(t) {
  $(Sl(t), "Item must be an object.");
}
function rg(t, e) {
  let r = null;
  for (let n = t.length - 1; n >= 0; n--)
    if (e.canDragSource(t[n])) {
      r = t[n];
      break;
    }
  return r;
}
function ng(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function ig(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      ng(t, i, r[i]);
    });
  }
  return t;
}
function sg(t) {
  return function(r = {}) {
    const n = t.getMonitor(), i = t.getRegistry();
    og(n), cg(n).forEach((a, l) => {
      const c = ag(a, l, i, n), u = {
        type: xr,
        payload: {
          dropResult: ig({}, r, c)
        }
      };
      t.dispatch(u);
    });
  };
}
function og(t) {
  $(t.isDragging(), "Cannot call drop while not dragging."), $(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function ag(t, e, r, n) {
  const i = r.getTarget(t);
  let o = i ? i.drop(n, t) : void 0;
  return lg(o), typeof o > "u" && (o = e === 0 ? {} : n.getDropResult()), o;
}
function lg(t) {
  $(typeof t > "u" || Sl(t), "Drop result must either be an object or undefined.");
}
function cg(t) {
  const e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function dg(t) {
  return function() {
    const r = t.getMonitor(), n = t.getRegistry();
    ug(r);
    const i = r.getSourceId();
    return i != null && (n.getSource(i, !0).endDrag(r, i), n.unpinSource()), {
      type: br
    };
  };
}
function ug(t) {
  $(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function En(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(
    (r) => r === e
  ) : t === e;
}
function hg(t) {
  return function(r, { clientOffset: n } = {}) {
    pg(r);
    const i = r.slice(0), o = t.getMonitor(), a = t.getRegistry(), l = o.getItemType();
    return fg(i, a, l), mg(i, o, a), gg(i, o, a), {
      type: vr,
      payload: {
        targetIds: i,
        clientOffset: n || null
      }
    };
  };
}
function pg(t) {
  $(Array.isArray(t), "Expected targetIds to be an array.");
}
function mg(t, e, r) {
  $(e.isDragging(), "Cannot call hover while not dragging."), $(!e.didDrop(), "Cannot call hover after drop.");
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    $(t.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    const o = r.getTarget(i);
    $(o, "Expected targetIds to be registered.");
  }
}
function fg(t, e, r) {
  for (let n = t.length - 1; n >= 0; n--) {
    const i = t[n], o = e.getTargetType(i);
    En(o, r) || t.splice(n, 1);
  }
}
function gg(t, e, r) {
  t.forEach(function(n) {
    r.getTarget(n).hover(e, n);
  });
}
function yg(t) {
  return function() {
    if (t.getMonitor().isDragging())
      return {
        type: Si
      };
  };
}
function vg(t) {
  return {
    beginDrag: Jf(t),
    publishDragSource: yg(t),
    hover: hg(t),
    drop: sg(t),
    endDrag: dg(t)
  };
}
class xg {
  receiveBackend(e) {
    this.backend = e;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const e = this, { dispatch: r } = this.store;
    function n(o) {
      return (...a) => {
        const l = o.apply(e, a);
        typeof l < "u" && r(l);
      };
    }
    const i = vg(this);
    return Object.keys(i).reduce((o, a) => {
      const l = i[a];
      return o[a] = n(l), o;
    }, {});
  }
  dispatch(e) {
    this.store.dispatch(e);
  }
  constructor(e, r) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      const n = this.store.getState().refCount > 0;
      this.backend && (n && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !n && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = e, this.monitor = r, e.subscribe(this.handleRefCountChange);
  }
}
function bg(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function Tl(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function wg(t) {
  const { clientOffset: e, initialClientOffset: r, initialSourceClientOffset: n } = t;
  return !e || !r || !n ? null : Tl(bg(e, n), r);
}
function Ng(t) {
  const { clientOffset: e, initialClientOffset: r } = t;
  return !e || !r ? null : Tl(e, r);
}
const Et = [], Ti = [];
Et.__IS_NONE__ = !0;
Ti.__IS_ALL__ = !0;
function Cg(t, e) {
  return t === Et ? !1 : t === Ti || typeof e > "u" ? !0 : Xf(e, t).length > 0;
}
class Sg {
  subscribeToStateChange(e, r = {}) {
    const { handlerIds: n } = r;
    $(typeof e == "function", "listener must be a function."), $(typeof n > "u" || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
    let i = this.store.getState().stateId;
    const o = () => {
      const a = this.store.getState(), l = a.stateId;
      try {
        l === i || l === i + 1 && !Cg(a.dirtyHandlerIds, n) || e();
      } finally {
        i = l;
      }
    };
    return this.store.subscribe(o);
  }
  subscribeToOffsetChange(e) {
    $(typeof e == "function", "listener must be a function.");
    let r = this.store.getState().dragOffset;
    const n = () => {
      const i = this.store.getState().dragOffset;
      i !== r && (r = i, e());
    };
    return this.store.subscribe(n);
  }
  canDragSource(e) {
    if (!e)
      return !1;
    const r = this.registry.getSource(e);
    return $(r, `Expected to find a valid source. sourceId=${e}`), this.isDragging() ? !1 : r.canDrag(this, e);
  }
  canDropOnTarget(e) {
    if (!e)
      return !1;
    const r = this.registry.getTarget(e);
    if ($(r, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop())
      return !1;
    const n = this.registry.getTargetType(e), i = this.getItemType();
    return En(n, i) && r.canDrop(this, e);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(e) {
    if (!e)
      return !1;
    const r = this.registry.getSource(e, !0);
    if ($(r, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    const n = this.registry.getSourceType(e), i = this.getItemType();
    return n !== i ? !1 : r.isDragging(this, e);
  }
  isOverTarget(e, r = {
    shallow: !1
  }) {
    if (!e)
      return !1;
    const { shallow: n } = r;
    if (!this.isDragging())
      return !1;
    const i = this.registry.getTargetType(e), o = this.getItemType();
    if (o && !En(i, o))
      return !1;
    const a = this.getTargetIds();
    if (!a.length)
      return !1;
    const l = a.indexOf(e);
    return n ? l === a.length - 1 : l > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return !!this.store.getState().dragOperation.isSourcePublic;
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return wg(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return Ng(this.store.getState().dragOffset);
  }
  constructor(e, r) {
    this.store = e, this.registry = r;
  }
}
const fo = typeof global < "u" ? global : self, Pl = fo.MutationObserver || fo.WebKitMutationObserver;
function Dl(t) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), t();
    }
  };
}
function Tg(t) {
  let e = 1;
  const r = new Pl(t), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    e = -e, n.data = e;
  };
}
const Pg = typeof Pl == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  Tg
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  Dl
);
class Dg {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(e) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = e;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: e } = this;
      for (; this.index < e.length; ) {
        const r = this.index;
        if (this.index++, e[r].call(), this.index > this.capacity) {
          for (let n = 0, i = e.length - this.index; n < i; n++)
            e[n] = e[n + this.index];
          e.length -= this.index, this.index = 0;
        }
      }
      e.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (e) => {
      this.pendingErrors.push(e), this.requestErrorThrow();
    }, this.requestFlush = Pg(this.flush), this.requestErrorThrow = Dl(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class kg {
  call() {
    try {
      this.task && this.task();
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(e, r) {
    this.onError = e, this.release = r, this.task = null;
  }
}
class Ag {
  create(e) {
    const r = this.freeTasks, n = r.length ? r.pop() : new kg(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = e, n;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const kl = new Dg(), Eg = new Ag(kl.registerPendingError);
function Mg(t) {
  kl.enqueueTask(Eg.create(t));
}
const Pi = "dnd-core/ADD_SOURCE", Di = "dnd-core/ADD_TARGET", ki = "dnd-core/REMOVE_SOURCE", wr = "dnd-core/REMOVE_TARGET";
function Rg(t) {
  return {
    type: Pi,
    payload: {
      sourceId: t
    }
  };
}
function Ig(t) {
  return {
    type: Di,
    payload: {
      targetId: t
    }
  };
}
function Og(t) {
  return {
    type: ki,
    payload: {
      sourceId: t
    }
  };
}
function Fg(t) {
  return {
    type: wr,
    payload: {
      targetId: t
    }
  };
}
function _g(t) {
  $(typeof t.canDrag == "function", "Expected canDrag to be a function."), $(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), $(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function Lg(t) {
  $(typeof t.canDrop == "function", "Expected canDrop to be a function."), $(typeof t.hover == "function", "Expected hover to be a function."), $(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function Mn(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(
      (r) => Mn(r, !1)
    );
    return;
  }
  $(typeof t == "string" || typeof t == "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var ye;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(ye || (ye = {}));
let Bg = 0;
function $g() {
  return Bg++;
}
function Vg(t) {
  const e = $g().toString();
  switch (t) {
    case ye.SOURCE:
      return `S${e}`;
    case ye.TARGET:
      return `T${e}`;
    default:
      throw new Error(`Unknown Handler Role: ${t}`);
  }
}
function go(t) {
  switch (t[0]) {
    case "S":
      return ye.SOURCE;
    case "T":
      return ye.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${t}`);
  }
}
function yo(t, e) {
  const r = t.entries();
  let n = !1;
  do {
    const { done: i, value: [, o] } = r.next();
    if (o === e)
      return !0;
    n = !!i;
  } while (!n);
  return !1;
}
class jg {
  addSource(e, r) {
    Mn(e), _g(r);
    const n = this.addHandler(ye.SOURCE, e, r);
    return this.store.dispatch(Rg(n)), n;
  }
  addTarget(e, r) {
    Mn(e, !0), Lg(r);
    const n = this.addHandler(ye.TARGET, e, r);
    return this.store.dispatch(Ig(n)), n;
  }
  containsHandler(e) {
    return yo(this.dragSources, e) || yo(this.dropTargets, e);
  }
  getSource(e, r = !1) {
    return $(this.isSourceId(e), "Expected a valid source ID."), r && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
  getTarget(e) {
    return $(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
  }
  getSourceType(e) {
    return $(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
  }
  getTargetType(e) {
    return $(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
  }
  isSourceId(e) {
    return go(e) === ye.SOURCE;
  }
  isTargetId(e) {
    return go(e) === ye.TARGET;
  }
  removeSource(e) {
    $(this.getSource(e), "Expected an existing source."), this.store.dispatch(Og(e)), Mg(() => {
      this.dragSources.delete(e), this.types.delete(e);
    });
  }
  removeTarget(e) {
    $(this.getTarget(e), "Expected an existing target."), this.store.dispatch(Fg(e)), this.dropTargets.delete(e), this.types.delete(e);
  }
  pinSource(e) {
    const r = this.getSource(e);
    $(r, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = r;
  }
  unpinSource() {
    $(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(e, r, n) {
    const i = Vg(e);
    return this.types.set(i, r), e === ye.SOURCE ? this.dragSources.set(i, n) : e === ye.TARGET && this.dropTargets.set(i, n), i;
  }
  constructor(e) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
  }
}
const Hg = (t, e) => t === e;
function zg(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function Wg(t, e, r = Hg) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; ++n)
    if (!r(t[n], e[n]))
      return !1;
  return !0;
}
function Ug(t = Et, e) {
  switch (e.type) {
    case vr:
      break;
    case Pi:
    case Di:
    case wr:
    case ki:
      return Et;
    case yr:
    case Si:
    case br:
    case xr:
    default:
      return Ti;
  }
  const { targetIds: r = [], prevTargetIds: n = [] } = e.payload, i = Yf(r, n);
  if (!(i.length > 0 || !Wg(r, n)))
    return Et;
  const a = n[n.length - 1], l = r[r.length - 1];
  return a !== l && (a && i.push(a), l && i.push(l)), i;
}
function Gg(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function qg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      Gg(t, i, r[i]);
    });
  }
  return t;
}
const vo = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Kg(t = vo, e) {
  const { payload: r } = e;
  switch (e.type) {
    case Ci:
    case yr:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case vr:
      return zg(t.clientOffset, r.clientOffset) ? t : qg({}, t, {
        clientOffset: r.clientOffset
      });
    case br:
    case xr:
      return vo;
    default:
      return t;
  }
}
function Yg(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Je(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      Yg(t, i, r[i]);
    });
  }
  return t;
}
const Xg = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function Zg(t = Xg, e) {
  const { payload: r } = e;
  switch (e.type) {
    case yr:
      return Je({}, t, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Si:
      return Je({}, t, {
        isSourcePublic: !0
      });
    case vr:
      return Je({}, t, {
        targetIds: r.targetIds
      });
    case wr:
      return t.targetIds.indexOf(r.targetId) === -1 ? t : Je({}, t, {
        targetIds: Kf(t.targetIds, r.targetId)
      });
    case xr:
      return Je({}, t, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case br:
      return Je({}, t, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return t;
  }
}
function Jg(t = 0, e) {
  switch (e.type) {
    case Pi:
    case Di:
      return t + 1;
    case ki:
    case wr:
      return t - 1;
    default:
      return t;
  }
}
function Qg(t = 0) {
  return t + 1;
}
function e0(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function t0(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      e0(t, i, r[i]);
    });
  }
  return t;
}
function r0(t = {}, e) {
  return {
    dirtyHandlerIds: Ug(t.dirtyHandlerIds, {
      type: e.type,
      payload: t0({}, e.payload, {
        prevTargetIds: qf(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Kg(t.dragOffset, e),
    refCount: Jg(t.refCount, e),
    dragOperation: Zg(t.dragOperation, e),
    stateId: Qg(t.stateId)
  };
}
function n0(t, e = void 0, r = {}, n = !1) {
  const i = i0(n), o = new Sg(i, new jg(i)), a = new xg(i, o), l = t(a, e, r);
  return a.receiveBackend(l), a;
}
function i0(t) {
  const e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Cl(r0, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function s0(t, e) {
  if (t == null) return {};
  var r = o0(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function o0(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
let xo = 0;
const tr = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var a0 = /* @__PURE__ */ ec(function(e) {
  var { children: r } = e, n = s0(e, [
    "children"
  ]);
  const [i, o] = l0(n);
  return U(() => {
    if (o) {
      const a = Al();
      return ++xo, () => {
        --xo === 0 && (a[tr] = null);
      };
    }
  }, []), /* @__PURE__ */ s(Nl.Provider, {
    value: i,
    children: r
  });
});
function l0(t) {
  if ("manager" in t)
    return [
      {
        dragDropManager: t.manager
      },
      !1
    ];
  const e = c0(t.backend, t.context, t.options, t.debugMode), r = !t.context;
  return [
    e,
    r
  ];
}
function c0(t, e = Al(), r, n) {
  const i = e;
  return i[tr] || (i[tr] = {
    dragDropManager: n0(t, e, r, n)
  }), i[tr];
}
function Al() {
  return typeof global < "u" ? global : window;
}
var Xr, bo;
function d0() {
  return bo || (bo = 1, Xr = function t(e, r) {
    if (e === r) return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return !1;
      var n, i, o;
      if (Array.isArray(e)) {
        if (n = e.length, n != r.length) return !1;
        for (i = n; i-- !== 0; )
          if (!t(e[i], r[i])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length) return !1;
      for (i = n; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
      for (i = n; i-- !== 0; ) {
        var a = o[i];
        if (!t(e[a], r[a])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  }), Xr;
}
var u0 = d0();
const h0 = /* @__PURE__ */ wl(u0), Ge = typeof window < "u" ? Mo : U;
function p0(t, e, r) {
  const [n, i] = E(
    () => e(t)
  ), o = lr(() => {
    const a = e(t);
    h0(n, a) || (i(a), r && r());
  }, [
    n,
    t,
    r
  ]);
  return Ge(o), [
    n,
    o
  ];
}
function m0(t, e, r) {
  const [n, i] = p0(t, e, r);
  return Ge(function() {
    const a = t.getHandlerId();
    if (a != null)
      return t.subscribeToStateChange(i, {
        handlerIds: [
          a
        ]
      });
  }, [
    t,
    i
  ]), n;
}
function El(t, e, r) {
  return m0(
    e,
    t || (() => ({})),
    () => r.reconnect()
  );
}
function Ml(t, e) {
  const r = [];
  return typeof t != "function" && r.push(t), Q(() => typeof t == "function" ? t() : t, r);
}
function f0(t) {
  return Q(
    () => t.hooks.dragSource(),
    [
      t
    ]
  );
}
function g0(t) {
  return Q(
    () => t.hooks.dragPreview(),
    [
      t
    ]
  );
}
let Zr = !1, Jr = !1;
class y0 {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    $(!Zr, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Zr = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      Zr = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    $(!Jr, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Jr = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      Jr = !1;
    }
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  isDraggingSource(e) {
    return this.internalMonitor.isDraggingSource(e);
  }
  isOverTarget(e, r) {
    return this.internalMonitor.isOverTarget(e, r);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(e) {
    return this.internalMonitor.subscribeToOffsetChange(e);
  }
  canDragSource(e) {
    return this.internalMonitor.canDragSource(e);
  }
  canDropOnTarget(e) {
    return this.internalMonitor.canDropOnTarget(e);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.sourceId = null, this.internalMonitor = e.getMonitor();
  }
}
let Qr = !1;
class v0 {
  receiveHandlerId(e) {
    this.targetId = e;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    $(!Qr, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return Qr = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Qr = !1;
    }
  }
  isOver(e) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, e) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.targetId = null, this.internalMonitor = e.getMonitor();
  }
}
function x0(t, e, r) {
  const n = r.getRegistry(), i = n.addTarget(t, e);
  return [
    i,
    () => n.removeTarget(i)
  ];
}
function b0(t, e, r) {
  const n = r.getRegistry(), i = n.addSource(t, e);
  return [
    i,
    () => n.removeSource(i)
  ];
}
function Rn(t, e, r, n) {
  let i;
  if (i !== void 0)
    return !!i;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  const o = Object.keys(t), a = Object.keys(e);
  if (o.length !== a.length)
    return !1;
  const l = Object.prototype.hasOwnProperty.bind(e);
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    if (!l(u))
      return !1;
    const h = t[u], p = e[u];
    if (i = void 0, i === !1 || i === void 0 && h !== p)
      return !1;
  }
  return !0;
}
function In(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function w0(t) {
  if (typeof t.type == "string")
    return;
  const e = t.type.displayName || t.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function N0(t) {
  return (e = null, r = null) => {
    if (!Ao(e)) {
      const o = e;
      return t(o, r), o;
    }
    const n = e;
    return w0(n), C0(n, r ? (o) => t(o, r) : t);
  };
}
function Rl(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (r.endsWith("Ref"))
      e[r] = t[r];
    else {
      const i = N0(n);
      e[r] = () => i;
    }
  }), e;
}
function wo(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function C0(t, e) {
  const r = t.ref;
  return $(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? rn(t, {
    ref: (n) => {
      wo(r, n), wo(e, n);
    }
  }) : rn(t, {
    ref: e
  });
}
class S0 {
  receiveHandlerId(e) {
    this.handlerId !== e && (this.handlerId = e, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(e) {
    this.dragSourceOptionsInternal = e;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(e) {
    this.dragPreviewOptionsInternal = e;
  }
  reconnect() {
    const e = this.reconnectDragSource();
    this.reconnectDragPreview(e);
  }
  reconnectDragSource() {
    const e = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return r && this.disconnectDragSource(), this.handlerId ? e ? (r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), r) : (this.lastConnectedDragSource = e, r) : r;
  }
  reconnectDragPreview(e = !1) {
    const r = this.dragPreview, n = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (n && this.disconnectDragPreview(), !!this.handlerId) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !Rn(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !Rn(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(e) {
    this.hooks = Rl({
      dragSource: (r, n) => {
        this.clearDragSource(), this.dragSourceOptions = n || null, In(r) ? this.dragSourceRef = r : this.dragSourceNode = r, this.reconnectDragSource();
      },
      dragPreview: (r, n) => {
        this.clearDragPreview(), this.dragPreviewOptions = n || null, In(r) ? this.dragPreviewRef = r : this.dragPreviewNode = r, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
  }
}
class T0 {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    e && this.disconnectDropTarget();
    const r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
    }
  }
  receiveHandlerId(e) {
    e !== this.handlerId && (this.handlerId = e, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(e) {
    this.dropTargetOptionsInternal = e;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !Rn(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(e) {
    this.hooks = Rl({
      dropTarget: (r, n) => {
        this.clearDropTarget(), this.dropTargetOptions = n, In(r) ? this.dropTargetRef = r : this.dropTargetNode = r, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
  }
}
function pt() {
  const { dragDropManager: t } = re(Nl);
  return $(t != null, "Expected drag drop context"), t;
}
function P0(t, e) {
  const r = pt(), n = Q(
    () => new S0(r.getBackend()),
    [
      r
    ]
  );
  return Ge(() => (n.dragSourceOptions = t || null, n.reconnect(), () => n.disconnectDragSource()), [
    n,
    t
  ]), Ge(() => (n.dragPreviewOptions = e || null, n.reconnect(), () => n.disconnectDragPreview()), [
    n,
    e
  ]), n;
}
function D0() {
  const t = pt();
  return Q(
    () => new y0(t),
    [
      t
    ]
  );
}
class k0 {
  beginDrag() {
    const e = this.spec, r = this.monitor;
    let n = null;
    return typeof e.item == "object" ? n = e.item : typeof e.item == "function" ? n = e.item(r) : n = {}, n ?? null;
  }
  canDrag() {
    const e = this.spec, r = this.monitor;
    return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag == "function" ? e.canDrag(r) : !0;
  }
  isDragging(e, r) {
    const n = this.spec, i = this.monitor, { isDragging: o } = n;
    return o ? o(i) : r === e.getSourceId();
  }
  endDrag() {
    const e = this.spec, r = this.monitor, n = this.connector, { end: i } = e;
    i && i(r.getItem(), r), n.reconnect();
  }
  constructor(e, r, n) {
    this.spec = e, this.monitor = r, this.connector = n;
  }
}
function A0(t, e, r) {
  const n = Q(
    () => new k0(t, e, r),
    [
      e,
      r
    ]
  );
  return U(() => {
    n.spec = t;
  }, [
    t
  ]), n;
}
function E0(t) {
  return Q(() => {
    const e = t.type;
    return $(e != null, "spec.type must be defined"), e;
  }, [
    t
  ]);
}
function M0(t, e, r) {
  const n = pt(), i = A0(t, e, r), o = E0(t);
  Ge(function() {
    if (o != null) {
      const [l, c] = b0(o, i, n);
      return e.receiveHandlerId(l), r.receiveHandlerId(l), c;
    }
  }, [
    n,
    e,
    r,
    i,
    o
  ]);
}
function R0(t, e) {
  const r = Ml(t);
  $(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const n = D0(), i = P0(r.options, r.previewOptions);
  return M0(r, n, i), [
    El(r.collect, n, i),
    f0(i),
    g0(i)
  ];
}
function I0(t) {
  return Q(
    () => t.hooks.dropTarget(),
    [
      t
    ]
  );
}
function O0(t) {
  const e = pt(), r = Q(
    () => new T0(e.getBackend()),
    [
      e
    ]
  );
  return Ge(() => (r.dropTargetOptions = t || null, r.reconnect(), () => r.disconnectDropTarget()), [
    t
  ]), r;
}
function F0() {
  const t = pt();
  return Q(
    () => new v0(t),
    [
      t
    ]
  );
}
function _0(t) {
  const { accept: e } = t;
  return Q(() => ($(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [
    e
  ]), [
    e
  ]);
}
class L0 {
  canDrop() {
    const e = this.spec, r = this.monitor;
    return e.canDrop ? e.canDrop(r.getItem(), r) : !0;
  }
  hover() {
    const e = this.spec, r = this.monitor;
    e.hover && e.hover(r.getItem(), r);
  }
  drop() {
    const e = this.spec, r = this.monitor;
    if (e.drop)
      return e.drop(r.getItem(), r);
  }
  constructor(e, r) {
    this.spec = e, this.monitor = r;
  }
}
function B0(t, e) {
  const r = Q(
    () => new L0(t, e),
    [
      e
    ]
  );
  return U(() => {
    r.spec = t;
  }, [
    t
  ]), r;
}
function $0(t, e, r) {
  const n = pt(), i = B0(t, e), o = _0(t);
  Ge(function() {
    const [l, c] = x0(o, i, n);
    return e.receiveHandlerId(l), r.receiveHandlerId(l), c;
  }, [
    n,
    e,
    i,
    r,
    o.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function V0(t, e) {
  const r = Ml(t), n = F0(), i = O0(r.options);
  return $0(r, n, i), [
    El(r.collect, n, i),
    I0(i)
  ];
}
function Il(t) {
  let e = null;
  return () => (e == null && (e = t()), e);
}
function j0(t, e) {
  return t.filter(
    (r) => r !== e
  );
}
function H0(t, e) {
  const r = /* @__PURE__ */ new Set(), n = (o) => r.add(o);
  t.forEach(n), e.forEach(n);
  const i = [];
  return r.forEach(
    (o) => i.push(o)
  ), i;
}
class z0 {
  enter(e) {
    const r = this.entered.length, n = (i) => this.isNodeInDocument(i) && (!i.contains || i.contains(e));
    return this.entered = H0(this.entered.filter(n), [
      e
    ]), r === 0 && this.entered.length > 0;
  }
  leave(e) {
    const r = this.entered.length;
    return this.entered = j0(this.entered.filter(this.isNodeInDocument), e), r > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(e) {
    this.entered = [], this.isNodeInDocument = e;
  }
}
class W0 {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((e) => {
      Object.defineProperty(this.item, e, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(e) {
    if (e) {
      const r = {};
      Object.keys(this.config.exposeProperties).forEach((n) => {
        const i = this.config.exposeProperties[n];
        i != null && (r[n] = {
          value: i(e, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, r);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(e, r) {
    return r === e.getSourceId();
  }
  endDrag() {
  }
  constructor(e) {
    this.config = e, this.item = {}, this.initializeExposedProperties();
  }
}
const Ol = "__NATIVE_FILE__", Fl = "__NATIVE_URL__", _l = "__NATIVE_TEXT__", Ll = "__NATIVE_HTML__", No = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Ol,
  HTML: Ll,
  TEXT: _l,
  URL: Fl
}, Symbol.toStringTag, { value: "Module" }));
function en(t, e, r) {
  const n = e.reduce(
    (i, o) => i || t.getData(o),
    ""
  );
  return n ?? r;
}
const On = {
  [Ol]: {
    exposeProperties: {
      files: (t) => Array.prototype.slice.call(t.files),
      items: (t) => t.items,
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Files"
    ]
  },
  [Ll]: {
    exposeProperties: {
      html: (t, e) => en(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [Fl]: {
    exposeProperties: {
      urls: (t, e) => en(t, e, "").split(`
`),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [_l]: {
    exposeProperties: {
      text: (t, e) => en(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function U0(t, e) {
  const r = On[t];
  if (!r)
    throw new Error(`native type ${t} has no configuration`);
  const n = new W0(r);
  return n.loadDataTransfer(e), n;
}
function tn(t) {
  if (!t)
    return null;
  const e = Array.prototype.slice.call(t.types || []);
  return Object.keys(On).filter((r) => {
    const n = On[r];
    return n?.matchesTypes ? n.matchesTypes.some(
      (i) => e.indexOf(i) > -1
    ) : !1;
  })[0] || null;
}
const G0 = Il(
  () => /firefox/i.test(navigator.userAgent)
), Bl = Il(
  () => !!window.safari
);
class Co {
  interpolate(e) {
    const { xs: r, ys: n, c1s: i, c2s: o, c3s: a } = this;
    let l = r.length - 1;
    if (e === r[l])
      return n[l];
    let c = 0, u = a.length - 1, h;
    for (; c <= u; ) {
      h = Math.floor(0.5 * (c + u));
      const f = r[h];
      if (f < e)
        c = h + 1;
      else if (f > e)
        u = h - 1;
      else
        return n[h];
    }
    l = Math.max(0, u);
    const p = e - r[l], m = p * p;
    return n[l] + i[l] * p + o[l] * m + a[l] * p * m;
  }
  constructor(e, r) {
    const { length: n } = e, i = [];
    for (let f = 0; f < n; f++)
      i.push(f);
    i.sort(
      (f, v) => e[f] < e[v] ? -1 : 1
    );
    const o = [], a = [];
    let l, c;
    for (let f = 0; f < n - 1; f++)
      l = e[f + 1] - e[f], c = r[f + 1] - r[f], o.push(l), a.push(c / l);
    const u = [
      a[0]
    ];
    for (let f = 0; f < o.length - 1; f++) {
      const v = a[f], g = a[f + 1];
      if (v * g <= 0)
        u.push(0);
      else {
        l = o[f];
        const b = o[f + 1], w = l + b;
        u.push(3 * w / ((w + b) / v + (w + l) / g));
      }
    }
    u.push(a[a.length - 1]);
    const h = [], p = [];
    let m;
    for (let f = 0; f < u.length - 1; f++) {
      m = a[f];
      const v = u[f], g = 1 / o[f], b = v + u[f + 1] - m - m;
      h.push((m - v - b) * g), p.push(b * g * g);
    }
    this.xs = e, this.ys = r, this.c1s = u, this.c2s = h, this.c3s = p;
  }
}
const q0 = 1;
function $l(t) {
  const e = t.nodeType === q0 ? t : t.parentElement;
  if (!e)
    return null;
  const { top: r, left: n } = e.getBoundingClientRect();
  return {
    x: n,
    y: r
  };
}
function Xt(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function K0(t) {
  var e;
  return t.nodeName === "IMG" && (G0() || !(!((e = document.documentElement) === null || e === void 0) && e.contains(t)));
}
function Y0(t, e, r, n) {
  let i = t ? e.width : r, o = t ? e.height : n;
  return Bl() && t && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function X0(t, e, r, n, i) {
  const o = K0(e), l = $l(o ? t : e), c = {
    x: r.x - l.x,
    y: r.y - l.y
  }, { offsetWidth: u, offsetHeight: h } = t, { anchorX: p, anchorY: m } = n, { dragPreviewWidth: f, dragPreviewHeight: v } = Y0(o, e, u, h), g = () => {
    let S = new Co([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      c.y,
      // Align at the center
      c.y / h * v,
      // Dock to the bottom
      c.y + v - h
    ]).interpolate(m);
    return Bl() && o && (S += (window.devicePixelRatio - 1) * v), S;
  }, b = () => new Co([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    c.x,
    // Align at the center
    c.x / u * f,
    // Dock to the right
    c.x + f - u
  ]).interpolate(p), { offsetX: w, offsetY: x } = i, T = w === 0 || w, P = x === 0 || x;
  return {
    x: T ? w : b(),
    y: P ? x : g()
  };
}
class Z0 {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var e;
    return !((e = this.globalContext) === null || e === void 0) && e.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var e;
    return ((e = this.optionsArgs) === null || e === void 0 ? void 0 : e.rootElement) || this.window;
  }
  constructor(e, r) {
    this.ownerDocument = null, this.globalContext = e, this.optionsArgs = r;
  }
}
function J0(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function So(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    }))), n.forEach(function(i) {
      J0(t, i, r[i]);
    });
  }
  return t;
}
class Q0 {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var e, r;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((e = this.dragStartSourceIds) === null || e === void 0 ? void 0 : e.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const e = this.rootElement;
    if (e !== void 0) {
      if (e.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
    }
  }
  teardown() {
    const e = this.rootElement;
    if (e !== void 0 && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var r;
      (r = this.window) === null || r === void 0 || r.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(e, r, n) {
    return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, r), () => {
      this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
    };
  }
  connectDragSource(e, r, n) {
    this.sourceNodes.set(e, r), this.sourceNodeOptions.set(e, n);
    const i = (a) => this.handleDragStart(a, e), o = (a) => this.handleSelectStart(a);
    return r.setAttribute("draggable", "true"), r.addEventListener("dragstart", i), r.addEventListener("selectstart", o), () => {
      this.sourceNodes.delete(e), this.sourceNodeOptions.delete(e), r.removeEventListener("dragstart", i), r.removeEventListener("selectstart", o), r.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(e, r) {
    const n = (a) => this.handleDragEnter(a, e), i = (a) => this.handleDragOver(a, e), o = (a) => this.handleDrop(a, e);
    return r.addEventListener("dragenter", n), r.addEventListener("dragover", i), r.addEventListener("drop", o), () => {
      r.removeEventListener("dragenter", n), r.removeEventListener("dragover", i), r.removeEventListener("drop", o);
    };
  }
  addEventListeners(e) {
    e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(e) {
    e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const e = this.monitor.getSourceId(), r = this.sourceNodeOptions.get(e);
    return So({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, r || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const e = this.monitor.getSourceId(), r = this.sourcePreviewNodeOptions.get(e);
    return So({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, r || {});
  }
  isDraggingNativeItem() {
    const e = this.monitor.getItemType();
    return Object.keys(No).some(
      (r) => No[r] === e
    );
  }
  beginDragNativeItem(e, r) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = U0(e, r), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(e) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
    const r = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var n;
      return (n = this.rootElement) === null || n === void 0 ? void 0 : n.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, r);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var e;
        (e = this.window) === null || e === void 0 || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, r) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(r));
  }
  handleDragEnter(e, r) {
    this.dragEnterTargetIds.unshift(r);
  }
  handleDragOver(e, r) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(r);
  }
  handleDrop(e, r) {
    this.dropTargetIds.unshift(r);
  }
  constructor(e, r, n) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (i) => {
      const o = this.sourceNodes.get(i);
      return o && $l(o) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (i) => !!(i && this.document && this.document.body && this.document.body.contains(i)), this.endDragIfSourceWasRemovedFromDOM = () => {
      const i = this.currentDragSourceNode;
      i == null || this.isNodeInDocument(i) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (i) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(i || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (i) => {
      if (i.defaultPrevented)
        return;
      const { dragStartSourceIds: o } = this;
      this.dragStartSourceIds = null;
      const a = Xt(i);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(o || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: a
      });
      const { dataTransfer: l } = i, c = tn(l);
      if (this.monitor.isDragging()) {
        if (l && typeof l.setDragImage == "function") {
          const h = this.monitor.getSourceId(), p = this.sourceNodes.get(h), m = this.sourcePreviewNodes.get(h) || p;
          if (m) {
            const { anchorX: f, anchorY: v, offsetX: g, offsetY: b } = this.getCurrentSourcePreviewNodeOptions(), T = X0(p, m, a, {
              anchorX: f,
              anchorY: v
            }, {
              offsetX: g,
              offsetY: b
            });
            l.setDragImage(m, T.x, T.y);
          }
        }
        try {
          l?.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(i.target);
        const { captureDraggingState: u } = this.getCurrentSourcePreviewNodeOptions();
        u ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (c)
        this.beginDragNativeItem(c);
      else {
        if (l && !l.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
          return;
        i.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (i) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(i.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(i.target) || this.monitor.isDragging())
        return;
      const { dataTransfer: l } = i, c = tn(l);
      c && this.beginDragNativeItem(c, l);
    }, this.handleTopDragEnter = (i) => {
      const { dragEnterTargetIds: o } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = i.altKey, o.length > 0 && this.actions.hover(o, {
        clientOffset: Xt(i)
      }), o.some(
        (l) => this.monitor.canDropOnTarget(l)
      ) && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (i) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(i.dataTransfer);
      }
    }, this.handleTopDragOver = (i) => {
      const { dragOverTargetIds: o } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = i.altKey, this.lastClientOffset = Xt(i), this.scheduleHover(o), (o || []).some(
        (l) => this.monitor.canDropOnTarget(l)
      ) ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (i) => {
      this.isDraggingNativeItem() && i.preventDefault(), this.enterLeaveCounter.leave(i.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (i) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        i.preventDefault(), (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(i.dataTransfer);
      } else tn(i.dataTransfer) && i.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (i) => {
      const { dropTargetIds: o } = this;
      this.dropTargetIds = [], this.actions.hover(o, {
        clientOffset: Xt(i)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (i) => {
      const o = i.target;
      typeof o.dragDrop == "function" && (o.tagName === "INPUT" || o.tagName === "SELECT" || o.tagName === "TEXTAREA" || o.isContentEditable || (i.preventDefault(), o.dragDrop()));
    }, this.options = new Z0(r, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new z0(this.isNodeInDocument);
  }
}
const ey = function(e, r, n) {
  return new Q0(e, r, n);
}, ty = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], ry = (t) => new Promise((e, r) => {
  const n = new Image();
  n.addEventListener("load", () => e(n)), n.addEventListener("error", (i) => r(i)), n.setAttribute("crossOrigin", "anonymous"), n.src = t;
});
async function ny(t, e, r) {
  const n = await ry(t), i = document.createElement("canvas"), o = i.getContext("2d");
  if (!o)
    throw new Error("No 2d context");
  return i.width = e.width, i.height = e.height, o.drawImage(
    n,
    e.x,
    e.y,
    e.width,
    e.height,
    0,
    0,
    e.width,
    e.height
  ), new Promise((a, l) => {
    i.toBlob((c) => {
      if (!c) {
        l(new Error("Canvas is empty"));
        return;
      }
      const u = new File([c], r, {
        type: "image/jpeg",
        lastModified: Date.now()
      });
      a(u);
    }, "image/jpeg", 0.95);
  });
}
function businessMatchesCityFilter(t, e) {
  const r = String(t || "").trim(), n = String(e || "").trim();
  if (!n || n === "all") return !0;
  if (r === n) return !0;
  const i = r.toLowerCase(), o = n.toLowerCase();
  return i === o || o === "florence" && i === "effingham" || o === "hartsville" && ["timmonsville", "cades"].includes(i);
}
function isMakorK9Training(t) {
  const e = String(t?.name || "").toLowerCase();
  return e.includes("makor") && e.includes("k9");
}
function trainingMatchesCityFilter(t, e) {
  const r = String(e || "").trim();
  return !r || r === "all" ? !0 : isMakorK9Training(t) && r.toLowerCase() === "florence" ? !0 : businessMatchesCityFilter(t?.city, e);
}
function getTrainingCityFilterOptions(t) {
  return [...new Set(t.map((e) => e.city).filter(Boolean))].filter((e) => !["scranton", "effingham"].includes(String(e).toLowerCase())).sort((e, r) => String(e).localeCompare(String(r)));
}
function getDetailGalleryPhotos(t) {
  if (!t)
    return [];
  const e = window.innerWidth < 768 && Array.isArray(t.mobilePhotos) && t.mobilePhotos.length > 0, r = e ? t.mobilePhotos : t.photos;
  if (!Array.isArray(r) || r.length === 0)
    return [];
  if (e)
    return r;
  const n = t.cardPhotoIndex || 0;
  return r.filter((i, o) => o !== n);
}
function getMobileDetailCropAspect() {
  if (typeof window > "u")
    return 1;
  const t = window.innerWidth < 768 ? window.innerWidth : 390;
  return Math.max((t - 32) / 320, 0.85);
}
function To({ src: t, alt: e, index: r, onMove: n, onRemove: i, badge: o, badgeColor: a, isCardPhoto: l, onSetAsCard: c, showCardControls: u0 = !0 }) {
  const [{ isDragging: u }, h] = R0({
    type: "PHOTO",
    item: { index: r },
    collect: (m) => ({
      isDragging: m.isDragging()
    })
  }), [, p] = V0({
    accept: "PHOTO",
    hover: (m) => {
      m.index !== r && (n(m.index, r), m.index = r);
    }
  });
  return /* @__PURE__ */ d(
    "div",
    {
      ref: (m) => h(p(m)),
      className: `relative group cursor-move ${u ? "opacity-50" : "opacity-100"}`,
      children: [
        /* @__PURE__ */ s("div", { className: `relative w-full ${l ? "ring-4 ring-yellow-400" : ""}`, style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ s(
          "img",
          {
            src: t,
            alt: e,
            className: "absolute inset-0 w-full h-full object-cover rounded-lg"
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "absolute top-2 left-2 p-1 bg-white/90 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ s(mm, { className: "w-4 h-4 text-gray-600" }) }),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => i(r),
            className: "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ s(we, { className: "w-4 h-4" })
          }
        ),
        u0 && (l ? /* @__PURE__ */ s("div", { className: "absolute bottom-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs rounded flex items-center gap-1", children: "⭐ Card Photo" }) : /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: () => c(r),
            className: "absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-yellow-100",
            children: "Set as Card Photo"
          }
        )),
        /* @__PURE__ */ s("div", { className: `absolute bottom-2 right-2 px-2 py-1 ${a} text-white text-xs rounded`, children: o })
      ]
    }
  );
}
function iy({ editBusiness: t, onClose: e }) {
  const { user: r, accessToken: n } = vi(), [accountStats, setAccountStats] = E(null), [businessAudit, setBusinessAudit] = E([]), [pendingClaims, setPendingClaims] = E([]), [i, o] = E({
    name: "",
    description: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    website: "",
    facebookPage: "",
    servicesOffered: [""],
    priceRange: "",
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "10:00 AM - 3:00 PM",
      sunday: "Closed"
    },
    callForHours: !1,
    mobileService: !1,
    inHomeTraining: !1,
    groupClassesAvailable: !1,
    daycareAvailable: !1,
    emergency24x7: !1,
    acceptsWalkins: !1,
    notAcceptingClients: !1,
    insuredBonded: !1,
    petCprCertified: !1,
    backgroundChecked: !1,
    professionalMember: !1,
    medicationAdmin: !1,
    photoUpdates: !1,
    paymentMethods: [],
    specialFeatures: [""],
    category: "grooming",
    mobilePhotos: []
  }), [a, l] = E([]), [c, u] = E([]), [h, p] = E([]), [L, j] = E([]), [q, Z] = E([]), [Y0, X0] = E([]), [m, f] = E(0), [v, g] = E(!1), [b, w] = E(""), [x, T] = E(!1), [P, N] = E(null), [S, C] = E(""), [R, M] = E({ x: 0, y: 0 }), [k, I] = E(1), [z, ee] = E(null), [Jt, Qt] = E("desktop");
  U(() => {
    if (!r?.isAdmin || !n)
      return;
    Promise.all([
      fetch("/api/admin/user-stats", { headers: { Authorization: `Bearer ${n}` } }),
      fetch("/api/admin/business-audit?limit=30", { headers: { Authorization: `Bearer ${n}` } }),
      fetch("/api/admin/claims?status=pending", { headers: { Authorization: `Bearer ${n}` } })
    ]).then(async ([A, O, V]) => {
      A.ok && setAccountStats(await A.json()), O.ok && setBusinessAudit((await O.json()).entries || []), V.ok && setPendingClaims((await V.json()).requests || []);
    }).catch(() => {
    });
  }, [r?.isAdmin, n]);
  const reviewClaim = async (claimId, action) => {
    try {
      const result = await Oe.reviewBusinessClaim(claimId, action);
      if (action === "approve" && result.ownerId && result.request?.businessId) {
        ce.setBusinessOwner(result.request.businessId, result.ownerId);
      }
      setPendingClaims((claims) => claims.filter((c) => c.id !== claimId));
      alert(action === "approve" ? "Business link approved." : "Request denied.");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Could not update request.");
    }
  };
  U(() => {
    if (t) {
      const A = {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 3:00 PM",
        sunday: "Closed"
      };
      o({
        name: t.name || "",
        description: t.description || "",
        address: t.address || "",
        city: t.city || "",
        zipCode: t.zipCode || "",
        phone: t.phone || "",
        email: t.email || "",
        website: t.website || "",
        facebookPage: t.facebookPage || "",
        servicesOffered: t.servicesOffered?.length > 0 ? t.servicesOffered : [""],
        priceRange: t.priceRange || "",
        hours: {
          monday: t.hours?.monday || A.monday,
          tuesday: t.hours?.tuesday || A.tuesday,
          wednesday: t.hours?.wednesday || A.wednesday,
          thursday: t.hours?.thursday || A.thursday,
          friday: t.hours?.friday || A.friday,
          saturday: t.hours?.saturday || A.saturday,
          sunday: t.hours?.sunday || A.sunday
        },
        callForHours: t.callForHours || !1,
        mobileService: t.mobileService || !1,
        inHomeTraining: t.inHomeTraining || !1,
        groupClassesAvailable: t.groupClassesAvailable || !1,
        daycareAvailable: t.daycareAvailable || !1,
        emergency24x7: t.emergency24x7 || t.emergency || !1,
        acceptsWalkins: t.acceptsWalkins || !1,
        notAcceptingClients: t.notAcceptingClients || !1,
        insuredBonded: t.insuredBonded || !1,
        petCprCertified: t.petCprCertified || !1,
        backgroundChecked: t.backgroundChecked || !1,
        professionalMember: t.professionalMember || !1,
        medicationAdmin: t.medicationAdmin || !1,
        photoUpdates: t.photoUpdates || !1,
        paymentMethods: t.paymentMethods || [],
        specialFeatures: t.specialFeatures?.length > 0 ? t.specialFeatures : [""],
        category: t.category || "grooming",
        mobilePhotos: t.mobilePhotos || []
      }), p(t.photos || []), Z(t.mobilePhotos || []), f(t.cardPhotoIndex || 0);
    }
  }, [t]);
  const G = (A, O) => {
    o((V) => ({ ...V, [A]: O }));
  }, pe = (A, O) => {
    o((V) => ({
      ...V,
      hours: { ...V.hours, [A]: O }
    }));
  }, Ee = () => {
    o((A) => ({
      ...A,
      servicesOffered: [...A.servicesOffered, ""]
    }));
  }, W = (A) => {
    o((O) => ({
      ...O,
      servicesOffered: O.servicesOffered.filter((V, H) => H !== A)
    }));
  }, te = (A, O) => {
    o((V) => ({
      ...V,
      servicesOffered: V.servicesOffered.map((H, se) => se === A ? O : H)
    }));
  }, ae = () => {
    o((A) => ({
      ...A,
      specialFeatures: [...A.specialFeatures, ""]
    }));
  }, ue = (A) => {
    o((O) => ({
      ...O,
      specialFeatures: O.specialFeatures.filter((V, H) => H !== A)
    }));
  }, Me = (A, O) => {
    o((V) => ({
      ...V,
      specialFeatures: V.specialFeatures.map((H, se) => se === A ? O : H)
    }));
  }, qe = (A) => {
    o((O) => ({
      ...O,
      paymentMethods: O.paymentMethods.includes(A) ? O.paymentMethods.filter((V) => V !== A) : [...O.paymentMethods, A]
    }));
  }, Ke = (A, O = "desktop") => {
    const V = Array.from(A.target.files || []);
    if (V.length > 0) {
      const H = V[0];
      Qt(O), C(H.name);
      const se = new FileReader();
      se.onloadend = () => {
        N(se.result), T(!0);
      }, se.readAsDataURL(H);
    }
    A.target.value = "";
  }, Ht = (A, O) => {
    ee(O);
  }, Re = async () => {
    if (!(!P || !z))
      try {
        const A = await ny(
          P,
          z,
          S
        );
        Jt === "mobile" ? j((V) => [...V, A]) : l((V) => [...V, A]);
        const O = new FileReader();
        O.onloadend = () => {
          Jt === "mobile" ? X0((V) => [...V, O.result]) : u((V) => [...V, O.result]);
        }, O.readAsDataURL(A), T(!1), N(null), M({ x: 0, y: 0 }), I(1), ee(null);
      } catch (A) {
        console.error("Error cropping image:", A);
      }
  }, Ye = () => {
    T(!1), N(null), M({ x: 0, y: 0 }), I(1), ee(null), Qt("desktop");
  }, Be = (A) => {
    l((O) => O.filter((V, H) => H !== A)), u((O) => O.filter((V, H) => H !== A));
  }, wt = (A) => {
    j((O) => O.filter((V, H) => H !== A)), X0((O) => O.filter((V, H) => H !== A));
  }, wt0 = (A) => {
    Z((O) => O.filter((V, H) => H !== A));
  }, mt = (A) => {
    p((O) => O.filter((V, H) => H !== A)), A === m ? f(0) : A < m && f(m - 1);
  }, Nr = (A, O) => {
    p((V) => {
      const H = [...V], [se] = H.splice(A, 1);
      return H.splice(O, 0, se), H;
    });
  }, Xe = (A, O) => {
    l((V) => {
      const H = [...V], [se] = H.splice(A, 1);
      return H.splice(O, 0, se), H;
    }), u((V) => {
      const H = [...V], [se] = H.splice(A, 1);
      return H.splice(O, 0, se), H;
    });
  }, Bt = (A, O) => {
    j((V) => {
      const H = [...V], [se] = H.splice(A, 1);
      return H.splice(O, 0, se), H;
    }), X0((V) => {
      const H = [...V], [se] = H.splice(A, 1);
      return H.splice(O, 0, se), H;
    });
  }, Bt0 = (A, O) => {
    Z((V) => {
      const H = [...V], [se] = H.splice(A, 1);
      return H.splice(O, 0, se), H;
    });
  }, ft = async (A) => {
    A.preventDefault(), console.log("🚀 FORM SUBMIT STARTED"), console.log("   - Edit mode:", !!t), console.log("   - Business ID:", t?.id), console.log("   - Form data:", i), g(!0), w("");
    try {
      if (!n) {
        w("Error: Your session expired. Please log out and log in again.");
        return;
      }
      if (!t && !r?.isAdmin) {
        w("Error: Only admin can add new business listings.");
        return;
      }
      const O = [], V = [];
      console.log("📸 Starting photo upload. Number of new photos:", a.length);
      for (const se of a) {
        const Ze = new FormData();
        Ze.append("file", se), Ze.append("upload_preset", "pet-services-photos"), Ze.append("folder", "pet-directory-photos"), console.log("📸 Uploading photo to Cloudinary...");
        const $e = await fetch(
          "https://api.cloudinary.com/v1_1/da3pbhktf/image/upload",
          {
            method: "POST",
            body: Ze
          }
        );
        if (!$e.ok) {
          const gt = await $e.json().catch(() => ({ error: "Unknown error" }));
          throw console.error("Photo upload failed:", gt), new Error(`Failed to upload photo: ${gt.error?.message || "Unknown error"}`);
        }
        const zt = await $e.json();
        console.log("✅ Photo uploaded:", zt.secure_url), O.push(zt.secure_url);
      }
      console.log("📱 Starting mobile photo upload. Number of new photos:", L.length);
      for (const se of L) {
        const Ze = new FormData();
        Ze.append("file", se), Ze.append("upload_preset", "pet-services-photos"), Ze.append("folder", "pet-directory-mobile-photos"), console.log("📱 Uploading mobile photo to Cloudinary...");
        const $e = await fetch(
          "https://api.cloudinary.com/v1_1/da3pbhktf/image/upload",
          {
            method: "POST",
            body: Ze
          }
        );
        if (!$e.ok) {
          const gt = await $e.json().catch(() => ({ error: "Unknown error" }));
          throw console.error("Mobile photo upload failed:", gt), new Error(`Failed to upload mobile photo: ${gt.error?.message || "Unknown error"}`);
        }
        const zt = await $e.json();
        console.log("✅ Mobile photo uploaded:", zt.secure_url), V.push(zt.secure_url);
      }
      const H = {
        ...i,
        servicesOffered: i.servicesOffered.filter((se) => se.trim() !== ""),
        specialFeatures: i.specialFeatures.filter((se) => se.trim() !== ""),
        photos: [...h, ...O],
        mobilePhotos: [...q, ...V],
        cardPhotoIndex: m,
        id: t?.id
        // Include ID if editing
      };
      w("💾 Saving...");
      const se = await Oe.saveBusiness(H, n || void 0);
      console.log("✅ api.saveBusiness returned:", se), se.error ? (w(`Error: ${se.error}`), g(!1)) : t ? (w(se.cloudWarning ? `⚠️ ${se.cloudWarning}` : "Business listing updated successfully! 🎉"), setTimeout(() => {
        e && e();
      }, 1500)) : (w(se.cloudWarning ? `⚠️ ${se.cloudWarning}` : "Business listing created successfully! 🎉"), o({
        name: "",
        description: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
        website: "",
        facebookPage: "",
        servicesOffered: [""],
        priceRange: "",
        hours: {
          monday: "9:00 AM - 5:00 PM",
          tuesday: "9:00 AM - 5:00 PM",
          wednesday: "9:00 AM - 5:00 PM",
          thursday: "9:00 AM - 5:00 PM",
          friday: "9:00 AM - 5:00 PM",
          saturday: "10:00 AM - 3:00 PM",
          sunday: "Closed"
        },
        callForHours: !1,
        mobileService: !1,
        inHomeTraining: !1,
        groupClassesAvailable: !1,
        daycareAvailable: !1,
        emergency24x7: !1,
        acceptsWalkins: !1,
        notAcceptingClients: !1,
        insuredBonded: !1,
        petCprCertified: !1,
        backgroundChecked: !1,
        professionalMember: !1,
        medicationAdmin: !1,
        photoUpdates: !1,
        paymentMethods: [],
        specialFeatures: [""],
        category: "grooming",
        mobilePhotos: []
      }), l([]), u([]), p([]), Z([]), j([]), X0([]));
    } catch (O) {
      console.error("Error saving business:", O), w(`Error: ${O instanceof Error ? O.message : "Failed to save business listing"}`);
    } finally {
      g(!1);
    }
  };
  if (!t && !r?.isAdmin)
    return /* @__PURE__ */ s("div", { className: "min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-12 px-4", children: /* @__PURE__ */ d("div", { className: "max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center", children: [
      /* @__PURE__ */ s("h1", { className: "text-xl font-semibold text-red-700 mb-2", children: "Access denied" }),
      /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6", children: "Only admin can add new business listings." }),
      e && /* @__PURE__ */ s("button", { onClick: e, className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700", children: "Go back" })
    ] }) });
  if (t && !r?.isAdmin) {
    const deniedOwner = t.ownerId || ce.getBusinessOwner(t.id) || t.createdByUserId;
    if (deniedOwner !== r?.id)
      return /* @__PURE__ */ s("div", { className: "min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-12 px-4", children: /* @__PURE__ */ d("div", { className: "max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center", children: [
        /* @__PURE__ */ s("h1", { className: "text-xl font-semibold text-red-700 mb-2", children: "Access denied" }),
        /* @__PURE__ */ s("p", { className: "text-gray-600 mb-6", children: "You do not have permission to edit this listing." }),
        e && /* @__PURE__ */ s("button", { onClick: e, className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700", children: "Go back" })
      ] }) });
  }
  return /* @__PURE__ */ s(a0, { backend: ey, children: /* @__PURE__ */ s("div", { className: "min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-12 px-4", children: /* @__PURE__ */ d("div", { className: "max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8", children: [
    e && /* @__PURE__ */ d(
      "button",
      {
        onClick: e,
        className: "flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-4",
        children: [
          /* @__PURE__ */ s(Gp, { className: "w-5 h-5" }),
          "Back"
        ]
      }
    ),
    r?.isAdmin && accountStats && /* @__PURE__ */ d("div", { className: "mb-6 p-4 rounded-xl bg-purple-50 border border-purple-200", children: [
      /* @__PURE__ */ d("div", { className: "text-center mb-4", children: [
        /* @__PURE__ */ s("p", { className: "text-sm text-purple-700 font-medium mb-1", children: "Registered accounts" }),
        /* @__PURE__ */ s("p", { className: "text-3xl font-semibold text-purple-600", children: accountStats.totalAccounts }),
        /* @__PURE__ */ d("p", { className: "text-xs text-gray-600 mt-2", children: [
          accountStats.guestAccounts,
          " guest · ",
          accountStats.businessAccounts,
          " business"
        ] })
      ] }),
      Array.isArray(accountStats.accounts) && accountStats.accounts.length > 0 ? /* @__PURE__ */ d("div", { className: "border-t border-purple-200 pt-4", children: [
        /* @__PURE__ */ s("p", { className: "text-sm font-medium text-purple-700 mb-3", children: "Account emails" }),
        /* @__PURE__ */ s("div", { className: "max-h-56 overflow-y-auto space-y-2", children: accountStats.accounts.map((A) => /* @__PURE__ */ d("div", { className: "bg-white rounded-lg px-3 py-2 text-left text-sm border border-purple-100", children: [
          /* @__PURE__ */ d("div", { className: "flex justify-between gap-2 items-start", children: [
            /* @__PURE__ */ s("span", { className: "font-medium text-gray-800", children: A.name }),
            /* @__PURE__ */ s("span", { className: "text-xs text-purple-600 whitespace-nowrap", children: A.role === "business" ? "Business" : "Pet Owner" })
          ] }),
          /* @__PURE__ */ s("p", { className: "text-gray-600 break-all mt-1", children: A.email }),
          A.createdAt && /* @__PURE__ */ s("p", { className: "text-xs text-gray-400 mt-1", children: new Date(A.createdAt).toLocaleDateString() })
        ] }, A.id)) })
      ] }) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 text-center border-t border-purple-200 pt-4", children: "No registered accounts yet." })
    ] }),
    r?.isAdmin && pendingClaims.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6 p-4 rounded-xl bg-green-50 border border-green-200", children: [
      /* @__PURE__ */ s("p", { className: "text-sm font-medium text-green-800 mb-3", children: "Pending business link requests" }),
      /* @__PURE__ */ s("div", { className: "max-h-64 overflow-y-auto space-y-2", children: pendingClaims.map((A) => /* @__PURE__ */ d("div", { className: "bg-white rounded-lg px-3 py-3 text-left text-sm border border-green-100", children: [
        /* @__PURE__ */ d("div", { className: "flex justify-between gap-2 items-start", children: [
          /* @__PURE__ */ s("span", { className: "font-medium text-gray-800", children: A.businessName || A.businessId }),
          /* @__PURE__ */ s("span", { className: "text-xs text-green-700 whitespace-nowrap", children: "Pending" })
        ] }),
        /* @__PURE__ */ d("p", { className: "text-gray-600 mt-1", children: [
          "Requested by ",
          A.userName || A.userEmail || "Unknown"
        ] }),
        A.message && /* @__PURE__ */ s("p", { className: "text-gray-500 text-xs mt-1 italic", children: A.message }),
        /* @__PURE__ */ d("div", { className: "flex gap-2 mt-3", children: [
          /* @__PURE__ */ s("button", { type: "button", onClick: () => reviewClaim(A.id, "approve"), className: "px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700", children: "Approve" }),
          /* @__PURE__ */ s("button", { type: "button", onClick: () => reviewClaim(A.id, "deny"), className: "px-3 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-lg hover:bg-gray-300", children: "Deny" })
        ] })
      ] }, A.id)) })
    ] }),
    r?.isAdmin && businessAudit.length > 0 && /* @__PURE__ */ d("div", { className: "mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200", children: [
      /* @__PURE__ */ s("p", { className: "text-sm font-medium text-blue-800 mb-3", children: "Recent listing activity" }),
      /* @__PURE__ */ s("div", { className: "max-h-64 overflow-y-auto space-y-2", children: businessAudit.map((A) => /* @__PURE__ */ d("div", { className: "bg-white rounded-lg px-3 py-2 text-left text-sm border border-blue-100", children: [
        /* @__PURE__ */ d("div", { className: "flex justify-between gap-2 items-start", children: [
          /* @__PURE__ */ s("span", { className: "font-medium text-gray-800", children: A.businessName || "Unnamed listing" }),
          /* @__PURE__ */ s("span", { className: "text-xs text-blue-700 whitespace-nowrap capitalize", children: A.action })
        ] }),
        /* @__PURE__ */ d("p", { className: "text-gray-600 mt-1", children: [
          "By ",
          A.actorEmail || A.actorName || "Unknown",
          A.actorIsAdmin ? " (admin)" : ""
        ] }),
        /* @__PURE__ */ d("p", { className: "text-xs text-gray-400 mt-1", children: [
          A.businessCategory || "listing",
          " · ",
          A.createdAt ? new Date(A.createdAt).toLocaleString() : ""
        ] })
      ] }, `${A.createdAt}-${A.businessId}-${A.action}`)) })
    ] }),
    /* @__PURE__ */ s("h1", { className: "text-purple-600 text-center mb-2", children: t ? "Edit Business Listing" : "Add New Business Listing" }),
    /* @__PURE__ */ s("p", { className: "text-gray-600 text-center mb-8", children: t ? "Update your business information below" : "Fill in the details below to add a business to the directory" }),
    b && /* @__PURE__ */ s("div", { className: `mb-6 p-4 rounded-lg text-sm font-medium ${b.startsWith("Error") || b.startsWith("❌") ? "bg-red-50 text-red-700 border border-red-200" : b.startsWith("⚠️") ? "bg-yellow-50 text-yellow-800 border border-yellow-200" : "bg-green-50 text-green-700 border border-green-200"}`, children: b }),
    /* @__PURE__ */ d("form", { onSubmit: ft, className: "space-y-8", children: [
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Category *" }),
        /* @__PURE__ */ d(
          "select",
          {
            value: i.category,
            onChange: (A) => G("category", A.target.value),
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
            required: !0,
            children: [
              /* @__PURE__ */ s("option", { value: "grooming", children: "Grooming" }),
              /* @__PURE__ */ s("option", { value: "training", children: "Training" }),
              /* @__PURE__ */ s("option", { value: "boarding", children: "Boarding & Daycare" }),
              /* @__PURE__ */ s("option", { value: "sitters", children: "Sitters & Walkers" }),
              /* @__PURE__ */ s("option", { value: "vet", children: "Vet Care" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Basic Information" }),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Business Name *" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: i.name,
              onChange: (A) => G("name", A.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Description *" }),
          /* @__PURE__ */ s(
            "textarea",
            {
              value: i.description,
              onChange: (A) => G("description", A.target.value),
              rows: 4,
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "Tell us about the business...",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Address *" }),
            /* @__PURE__ */ s(
              "input",
              {
                type: "text",
                value: i.address,
                onChange: (A) => G("address", A.target.value),
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "City *" }),
            /* @__PURE__ */ s(
              "input",
              {
                type: "text",
                value: i.city,
                onChange: (A) => G("city", A.target.value),
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                required: !0
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "ZIP Code *" }),
            /* @__PURE__ */ s(
              "input",
              {
                type: "text",
                value: i.zipCode,
                onChange: (A) => G("zipCode", A.target.value),
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Phone *" }),
            /* @__PURE__ */ s(
              "input",
              {
                type: "tel",
                value: i.phone,
                onChange: (A) => G("phone", A.target.value),
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Email (optional)" }),
            /* @__PURE__ */ s(
              "input",
              {
                type: "email",
                value: i.email,
                onChange: (A) => G("email", A.target.value),
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Website (optional)" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "url",
              value: i.website,
              onChange: (A) => G("website", A.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "https://"
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Facebook Page (optional)" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "url",
              value: i.facebookPage,
              onChange: (A) => G("facebookPage", A.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "https://www.facebook.com/yourpage"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Services Offered" }),
        i.servicesOffered.map((A, O) => /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: A,
              onChange: (V) => te(O, V.target.value),
              className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "e.g., Full Grooming, Nail Trimming, Teeth Cleaning"
            }
          ),
          i.servicesOffered.length > 1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => W(O),
              className: "px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",
              children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
            }
          )
        ] }, O)),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            onClick: Ee,
            className: "flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors",
            children: [
              /* @__PURE__ */ s(kn, { className: "w-4 h-4" }),
              "Add Another Service"
            ]
          }
        ),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("label", { className: "block text-gray-700 mb-2", children: "Price Range *" }),
          /* @__PURE__ */ d(
            "select",
            {
              value: i.priceRange,
              onChange: (A) => G("priceRange", A.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              required: !0,
              children: [
                /* @__PURE__ */ s("option", { value: "", children: "Select price range" }),
                /* @__PURE__ */ s("option", { value: "$", children: "$ - Budget Friendly" }),
                /* @__PURE__ */ s("option", { value: "$$", children: "$$ - Moderate" }),
                /* @__PURE__ */ s("option", { value: "$$$", children: "$$$ - Premium" }),
                /* @__PURE__ */ s("option", { value: "$$$$", children: "$$$$ - Luxury" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Hours of Operation" }),
        /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.callForHours,
              onChange: (A) => G("callForHours", A.target.checked),
              className: "w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "📞 Please Call for Hours of Operation" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if you prefer customers to call for your hours instead of listing specific times" })
          ] })
        ] }),
        !i.callForHours && /* @__PURE__ */ s(ie, { children: ty.map((A) => /* @__PURE__ */ d("div", { className: "grid grid-cols-3 gap-4 items-center", children: [
          /* @__PURE__ */ s("label", { className: "text-gray-700 capitalize", children: A }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: i.hours[A],
              onChange: (O) => pe(A, O.target.value),
              className: "col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "e.g., 9:00 AM - 5:00 PM or Closed"
            }
          )
        ] }, A)) }),
        /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg cursor-pointer hover:bg-green-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.mobileService,
              onChange: (A) => G("mobileService", A.target.checked),
              className: "w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: i.category === "sitters" ? "🚗 Comes to You" : "🚐 Mobile Service Available" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: i.category === "sitters" ? "Travels to the client's home or neighborhood for visits and walks" : "Check this box if you offer mobile services that come to the customer's location" })
          ] })
        ] }),
        /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.notAcceptingClients,
              onChange: (A) => G("notAcceptingClients", A.target.checked),
              className: "w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "🚫 Not Accepting New Clients" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if you are not currently accepting new clients" })
          ] })
        ] }),
        i.category === "training" && /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.inHomeTraining,
              onChange: (A) => G("inHomeTraining", A.target.checked),
              className: "w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "🏠 In-Home Training (Training)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if this trainer offers in-home training sessions" })
          ] })
        ] }),
        i.category === "training" && /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-cyan-50 border-2 border-cyan-200 rounded-lg cursor-pointer hover:bg-cyan-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.groupClassesAvailable,
              onChange: (A) => G("groupClassesAvailable", A.target.checked),
              className: "w-5 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "👥 Group Classes Available (Training)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if this trainer offers group class sessions" })
          ] })
        ] }),
        /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-teal-50 border-2 border-teal-200 rounded-lg cursor-pointer hover:bg-teal-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.daycareAvailable,
              onChange: (A) => G("daycareAvailable", A.target.checked),
              className: "w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "🏠 Daycare Available (Boarding)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if this boarding listing offers daycare" })
          ] })
        ] }),
        i.category === "vet" && /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.acceptsWalkins,
              onChange: (A) => G("acceptsWalkins", A.target.checked),
              className: "w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "🚶 Accepts Walk-Ins (Vet Care)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if this vet clinic accepts walk-in visits" })
          ] })
        ] }),
        i.category === "vet" && /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors mt-4", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.emergency24x7,
              onChange: (A) => G("emergency24x7", A.target.checked),
              className: "w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            }
          ),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: "🚨 24/7 Emergency Services (Vet Care)" }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 mt-1", children: "Check this box if this vet clinic provides 24/7 emergency care" })
          ] })
        ] })
      ] }),
      i.category === "sitters" && /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Sitter & Walker Credentials" }),
        /* @__PURE__ */ s("p", { className: "text-sm text-gray-600", children: "These power the Sitters & Walkers page filters. Check all that apply." }),
        /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
          [{ key: "insuredBonded", label: "🛡️ Insured & Bonded" }, { key: "petCprCertified", label: "❤️ Pet CPR / First Aid Certified" }, { key: "backgroundChecked", label: "✅ Background Checked" }, { key: "professionalMember", label: "🏅 Professional Association Member" }, { key: "medicationAdmin", label: "💊 Medication Administration" }, { key: "photoUpdates", label: "📸 Photo / GPS Updates" }].map((A) => /* @__PURE__ */ d("label", { className: "flex items-center gap-3 p-4 bg-pink-50 border-2 border-pink-200 rounded-lg cursor-pointer hover:bg-pink-100 transition-colors", children: [
            /* @__PURE__ */ s("input", { type: "checkbox", checked: !!i[A.key], onChange: (O) => G(A.key, O.target.checked), className: "w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500" }),
            /* @__PURE__ */ s("span", { className: "text-gray-800", children: A.label })
          ] }, A.key))
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Payment Methods" }),
        /* @__PURE__ */ s("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: ["Cash", "Credit Card", "Debit Card", "Venmo", "PayPal", "Check", "Apple Pay", "Google Pay"].map((A) => /* @__PURE__ */ d("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              checked: i.paymentMethods.includes(A),
              onChange: () => qe(A),
              className: "w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            }
          ),
          /* @__PURE__ */ s("span", { className: "text-gray-700", children: A })
        ] }, A)) })
      ] }),
      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Special Features" }),
        i.specialFeatures.map((A, O) => /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: A,
              onChange: (V) => Me(O, V.target.value),
              className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
              placeholder: "e.g., Mobile Grooming, Breed Specialist, Organic Products"
            }
          ),
          i.specialFeatures.length > 1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => ue(O),
              className: "px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",
              children: /* @__PURE__ */ s(Lt, { className: "w-5 h-5" })
            }
          )
        ] }, O)),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            onClick: ae,
            className: "flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors",
            children: [
              /* @__PURE__ */ s(kn, { className: "w-4 h-4" }),
              "Add Another Feature"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s("h2", { className: "text-purple-600 border-b-2 border-purple-200 pb-2", children: "Photos" }),
        /* @__PURE__ */ d("p", { className: "text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded-lg p-3", children: [
          "⭐ ",
          /* @__PURE__ */ s("strong", { children: "Card Photo:" }),
          ' Designate one photo as your "Card Photo" - this will be the main photo displayed on your business listing card. Other photos will be shown when customers view your full details. Click "Set as Card Photo" on any image to change your selection.'
        ] }),
        h.length > 0 && /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-3", children: "Current Photos" }),
          /* @__PURE__ */ s("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: h.map((A, O) => /* @__PURE__ */ s(
            To,
            {
              src: A,
              alt: `Existing ${O + 1}`,
              index: O,
              onMove: Nr,
              onRemove: mt,
              badge: "Saved",
              badgeColor: "bg-blue-600",
              isCardPhoto: O === m,
              onSetAsCard: f
            },
            O
          )) })
        ] }),
        /* @__PURE__ */ d("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "file",
              accept: "image/*",
              multiple: !0,
              onChange: (A) => Ke(A, "desktop"),
              className: "hidden",
              id: "photo-upload"
            }
          ),
          /* @__PURE__ */ d("label", { htmlFor: "photo-upload", className: "cursor-pointer", children: [
            /* @__PURE__ */ s(ml, { className: "w-12 h-12 mx-auto text-gray-400 mb-4" }),
            /* @__PURE__ */ d("p", { className: "text-gray-600", children: [
              "Click to upload ",
              h.length > 0 ? "more " : "",
              "photos"
            ] }),
            /* @__PURE__ */ s("p", { className: "text-sm text-gray-400 mt-2", children: "PNG, JPG up to 10MB each" })
          ] })
        ] }),
        c.length > 0 && /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700 mb-3", children: "New Photos to Upload" }),
          /* @__PURE__ */ s("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: c.map((A, O) => /* @__PURE__ */ s(
            To,
            {
              src: A,
              alt: `Preview ${O + 1}`,
              index: O,
              onMove: Xe,
              onRemove: Be,
              badge: "New",
              badgeColor: "bg-green-600",
              isCardPhoto: h.length + O === m,
              onSetAsCard: (V) => f(h.length + V)
            },
            O
          )) })
        ] }),
        /* @__PURE__ */ d("div", { className: "mt-8 pt-6 border-t border-purple-100 space-y-4", children: [
          /* @__PURE__ */ s("h3", { className: "text-gray-700", children: "Mobile Detail Carousel Photos (Optional)" }),
          /* @__PURE__ */ s("p", { className: "text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3", children: "Upload mobile-specific cropped photos for detail modals. These photos only appear in mobile detail carousels and help center subjects for smaller screens." }),
          q.length > 0 && /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("h4", { className: "text-gray-700 mb-3", children: "Current Mobile Photos" }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: q.map((A, O) => /* @__PURE__ */ s(
              To,
              {
                src: A,
                alt: `Mobile ${O + 1}`,
                index: O,
                onMove: Bt0,
                onRemove: wt0,
                badge: "Mobile",
                badgeColor: "bg-indigo-600",
                isCardPhoto: !1,
                onSetAsCard: () => {
                },
                showCardControls: !1
              },
              O
            )) })
          ] }),
          /* @__PURE__ */ d("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors", children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "file",
                accept: "image/*",
                multiple: !0,
                onChange: (A) => Ke(A, "mobile"),
                className: "hidden",
                id: "photo-upload-mobile"
              }
            ),
            /* @__PURE__ */ d("label", { htmlFor: "photo-upload-mobile", className: "cursor-pointer", children: [
              /* @__PURE__ */ s(ml, { className: "w-12 h-12 mx-auto text-gray-400 mb-4" }),
              /* @__PURE__ */ s("p", { className: "text-gray-600", children: "Click to upload mobile detail photos" }),
              /* @__PURE__ */ s("p", { className: "text-sm text-gray-400 mt-2", children: "Use this crop for the mobile modal carousel" })
            ] })
          ] }),
          Y0.length > 0 && /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ s("h4", { className: "text-gray-700 mb-3", children: "New Mobile Photos to Upload" }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Y0.map((A, O) => /* @__PURE__ */ s(
              To,
              {
                src: A,
                alt: `Mobile Preview ${O + 1}`,
                index: O,
                onMove: Bt,
                onRemove: wt,
                badge: "Mobile New",
                badgeColor: "bg-teal-600",
                isCardPhoto: !1,
                onSetAsCard: () => {
                },
                showCardControls: !1
              },
              O
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "flex justify-center pt-6", children: /* @__PURE__ */ s(
        "button",
        {
          type: "submit",
          disabled: v,
          className: "px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
          children: v ? t ? "Updating Listing..." : "Creating Listing..." : t ? "🐾 Update Business Listing" : "🐾 Create Business Listing"
        }
      ) })
    ] }),
    x && P && /* @__PURE__ */ s("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4", children: /* @__PURE__ */ d("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden", children: [
      /* @__PURE__ */ d("div", { className: "bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ s("h3", { className: "text-white", children: Jt === "mobile" ? "Crop Your Mobile Detail Photo" : "Crop Your Desktop Photo" }),
        /* @__PURE__ */ s(
          "button",
          {
            onClick: Ye,
            className: "text-white hover:bg-white/20 p-2 rounded-full transition-colors",
            children: /* @__PURE__ */ s(we, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "relative h-96 bg-gray-900", children: /* @__PURE__ */ s(
        Wf,
        {
          image: P,
          crop: R,
          zoom: k,
          aspect: Jt === "mobile" ? getMobileDetailCropAspect() : 16 / 9,
          onCropChange: M,
          onZoomChange: I,
          onCropComplete: Ht
        }
      ) }),
      /* @__PURE__ */ d("div", { className: "p-6 space-y-4", children: [
        Jt === "mobile" && /* @__PURE__ */ s("p", { className: "text-sm text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2", children: "Mobile crop matches detail modal ratio." }),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ s("label", { className: "block text-sm text-gray-700 mb-2", children: "Zoom" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "range",
              min: 1,
              max: 3,
              step: 0.01,
              value: k,
              onChange: (A) => I(parseFloat(A.target.value)),
              className: "w-full"
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "flex gap-3 justify-end", children: [
          /* @__PURE__ */ s(
            "button",
            {
              onClick: Ye,
              className: "px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              onClick: Re,
              className: "px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all",
              children: "Save Photo"
            }
          )
        ] })
      ] })
    ] }) })
  ] }) }) });
}
function sy() {
  console.log("🌱 Seeding real business data from spreadsheet..."), console.log("🔍 BEFORE SEEDING - Checking localStorage:");
  const t = localStorage.getItem("pawsitively_businesses_grooming");
  if (t) {
    const r = JSON.parse(t);
    console.log(`   Found ${r.length} existing grooming businesses:`, r.map((n) => ({ id: n.id, name: n.name })));
  } else
    console.log("   No existing grooming businesses found");
  const e = [
    // DARLINGTON AREA - GROOMING
    {
      id: "business-001",
      name: "The Dog House Grooming Salon",
      category: "grooming",
      description: "Professional pet grooming services for all breeds. Experienced groomers dedicated to making your pet look and feel their best.",
      address: "221 Ash St",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 621-0086",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Ear Cleaning"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: [],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-002",
      name: "Holly's Pooch Pawlor",
      category: "grooming",
      description: "Convenient mobile grooming service bringing professional pet care right to your door. Serving the Darlington area.",
      address: "Mobile Service",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 495-8769",
      email: "",
      website: "",
      servicesOffered: ["Mobile Grooming", "Full Grooming", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$",
      hours: {
        monday: "By Appointment",
        tuesday: "By Appointment",
        wednesday: "By Appointment",
        thursday: "By Appointment",
        friday: "By Appointment",
        saturday: "By Appointment",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !0,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Mobile Service"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-003",
      name: "Ernestine's Pet Grooming",
      category: "grooming",
      description: "Quality pet grooming with personalized attention for each pet. Family-owned and operated.",
      address: "1016 Riverview Rd",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 393-7280",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Ear Cleaning"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: [],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-004",
      name: "The Dog House Grooming and Boarding",
      category: "grooming",
      description: "Full-service grooming and boarding facility. Your pets home away from home with professional grooming services.",
      address: "1837 Timmonsville Hwy",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 395-0652",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Boarding Available"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Boarding Available"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-004-boarding",
      name: "The Dog House Grooming and Boarding",
      category: "boarding",
      description: "Full-service grooming and boarding facility. Your pets home away from home with professional grooming services.",
      address: "1837 Timmonsville Hwy",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 395-0652",
      email: "",
      website: "",
      servicesOffered: ["Dog Boarding", "Cat Boarding", "Daycare", "Grooming Available"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Grooming Available"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-005",
      name: "Pet Styles Grooming and Boutique",
      category: "grooming",
      description: "Stylish grooming services with a boutique shopping experience. Premium pet products and accessories available.",
      address: "1710 S. Main St",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 413-2056",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Luxury Spa Services", "Nail Trimming", "Boutique Shopping"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Boutique", "Retail Products"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-006",
      name: "Pampered Pets Mobile Grooming",
      category: "grooming",
      description: "Professional mobile grooming bringing salon-quality services to your doorstep. Convenient and stress-free for your pets.",
      address: "Mobile Service",
      city: "Darlington",
      zipCode: "29532",
      phone: "(843) 758-5996",
      email: "",
      website: "",
      servicesOffered: ["Mobile Grooming", "Full Grooming", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$",
      hours: {
        monday: "By Appointment",
        tuesday: "By Appointment",
        wednesday: "By Appointment",
        thursday: "By Appointment",
        friday: "By Appointment",
        saturday: "By Appointment",
        sunday: "By Appointment"
      },
      callForHours: !0,
      mobileService: !0,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Mobile Service", "Flexible Scheduling"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    // HARTSVILLE AREA - GROOMING
    {
      id: "business-007",
      name: "Totally Paws Pet Grooming",
      category: "grooming",
      description: "Complete pet grooming services with experienced staff. Specializing in all breeds and sizes.",
      address: "201 N. 5th St",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 861-4400",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Ear Cleaning", "De-shedding"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: [],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-008",
      name: "Hartsville Veterinary Hospital",
      category: "grooming",
      description: "Veterinary hospital offering professional grooming services alongside comprehensive pet healthcare.",
      address: "1313 W. Bobo Newsom Hwy",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 332-4585",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Medical Grooming"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Veterinary Services Available"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-009",
      name: "Wags to Riches Pet Salon",
      category: "grooming",
      description: "Upscale pet salon providing luxury grooming services. Your pets deserve the royal treatment!",
      address: "1015 S. 4th St",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 383-3647",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Luxury Spa", "Nail Trimming", "Creative Styling"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Luxury Services"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-010",
      name: "The Groom Room",
      category: "grooming",
      description: "Professional grooming in a clean, comfortable environment. Personalized care for every pet.",
      address: "1142 S. 5th St",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 383-9247",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Teeth Brushing"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: [],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-011",
      name: "Posh Paws and Claws",
      category: "grooming",
      description: "Boutique grooming salon specializing in both dogs and cats. Premium grooming with a personal touch.",
      address: "404 S. 6th St",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 858-4029",
      email: "",
      website: "",
      servicesOffered: ["Dog Grooming", "Cat Grooming", "Nail Trimming", "Special Occasion Styling"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Cat Grooming", "Dog Grooming"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-012",
      name: "Canine Clips",
      category: "grooming",
      description: "Reliable dog grooming services at affordable prices. Walk-ins welcome!",
      address: "1304 W. Carolina Ave",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 332-2034",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Walk-ins Welcome"],
      priceRange: "$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Walk-ins Welcome", "Budget Friendly"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-013",
      name: "Precious Paws Mobile Grooming",
      category: "grooming",
      description: "Full-service mobile grooming bringing professional care to your home. Reduced stress for anxious pets.",
      address: "Mobile Service",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 307-3278",
      email: "",
      website: "",
      servicesOffered: ["Mobile Grooming", "Full Grooming", "Bath & Brush", "Nail Trimming", "Senior Pet Care"],
      priceRange: "$$",
      hours: {
        monday: "By Appointment",
        tuesday: "By Appointment",
        wednesday: "By Appointment",
        thursday: "By Appointment",
        friday: "By Appointment",
        saturday: "By Appointment",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !0,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Mobile Service", "Senior Pet Specialist"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-014",
      name: "Shaggy to Chic Pet Grooming",
      category: "grooming",
      description: "Transforming your pet from shaggy to chic! Expert grooming for all breeds and temperaments.",
      address: "927 S. 5th St",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 332-8364",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Creative Styling", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: [],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-015",
      name: "Fur-Ever Friends Pet Grooming",
      category: "grooming",
      description: "Where your pet becomes part of our family. Gentle, caring grooming services.",
      address: "722 S. 4th St",
      city: "Hartsville",
      zipCode: "29550",
      phone: "(843) 639-4496",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Ear Cleaning"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Family Friendly"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    // CHESTERFIELD - GROOMING
    {
      id: "business-016",
      name: "Tails and Trails Pet Grooming",
      category: "grooming",
      description: "Professional pet grooming services in Chesterfield. Quality care at reasonable prices.",
      address: "105 Main St",
      city: "Chesterfield",
      zipCode: "29709",
      phone: "(843) 623-7297",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Flea Treatments"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: [],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    // FLORENCE AREA - GROOMING
    {
      id: "business-017",
      name: "PetSmart Grooming",
      category: "grooming",
      description: "National pet grooming chain with certified groomers. Full range of grooming services and packages.",
      address: "2701 David H. McLeod Blvd",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 667-9916",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Teeth Brushing", "Walk-ins Welcome"],
      priceRange: "$$",
      hours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM"
      },
      callForHours: !1,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card", "Debit Card"],
      specialFeatures: ["Walk-ins Welcome", "National Chain", "Certified Groomers"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-018",
      name: "Petco Grooming",
      category: "grooming",
      description: "Trusted pet grooming services from the Petco team. Professional groomers with flexible scheduling.",
      address: "2660 David H. McLeod Blvd",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 665-5456",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Teeth Brushing"],
      priceRange: "$$",
      hours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM"
      },
      callForHours: !1,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card", "Debit Card"],
      specialFeatures: ["National Chain", "Online Booking"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-019",
      name: "Pampered Paws Pet Salon",
      category: "grooming",
      description: "Boutique pet salon offering personalized grooming experiences. Your pet will love the pampering!",
      address: "3440 W. Palmetto St",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 292-2293",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Spa Services", "Nail Trimming", "Creative Styling"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Boutique", "Spa Services"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-020",
      name: "Classy Canine Grooming",
      category: "grooming",
      description: "Elegant grooming services for the distinguished pet. Specializing in show cuts and breed standards.",
      address: "2122 TV Rd",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 662-6959",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Show Cuts", "Breed Standard Grooming", "Nail Trimming"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Show Grooming", "Breed Specialist"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-021",
      name: "The Barking Lot Grooming Salon",
      category: "grooming",
      description: "Fun and friendly grooming salon where pets and people both have a great time!",
      address: "2945 W. Palmetto St",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 669-4368",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Ear Cleaning"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Family Friendly"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-022",
      name: "Doggie Do's and Pussycat Clips",
      category: "grooming",
      description: "Grooming services for both dogs and cats. Experienced in handling all temperaments with care.",
      address: "630 E. Cheves St",
      city: "Florence",
      zipCode: "29506",
      phone: "(843) 667-5155",
      email: "",
      website: "",
      servicesOffered: ["Dog Grooming", "Cat Grooming", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Cat Grooming", "Dog Grooming"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-023",
      name: "Top Dog Grooming Salon",
      category: "grooming",
      description: "Premier grooming salon committed to excellence. Your dog deserves top dog treatment!",
      address: "1810 2nd Loop Rd",
      city: "Florence",
      zipCode: "29505",
      phone: "(843) 292-9133",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Premium Services", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Premium Services"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-024",
      name: "A Cut Above Pet Grooming",
      category: "grooming",
      description: "Exceptional grooming services that go above and beyond. Attention to detail in every groom.",
      address: "3053 TV Rd",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 409-8900",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Detail Work", "Bath & Brush", "Nail Trimming", "Creative Styling"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Detail Oriented"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-025",
      name: "Happy Tails Pet Grooming",
      category: "grooming",
      description: "Making tails wag with every groom! Friendly service in a stress-free environment.",
      address: "1956 2nd Loop Rd",
      city: "Florence",
      zipCode: "29505",
      phone: "(843) 667-7387",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Ear Cleaning"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Low Stress Environment"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-026",
      name: "Paws and Relax Grooming Spa",
      category: "grooming",
      description: "Relaxing spa atmosphere for your pet. Grooming services designed to soothe and beautify.",
      address: "2319 W. Lucas St",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 407-0080",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Spa Services", "Bath & Brush", "Aromatherapy", "Massage"],
      priceRange: "$$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Spa Services", "Aromatherapy"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-027",
      name: "Furry Friends Grooming Salon",
      category: "grooming",
      description: "Where furry friends come first! Compassionate grooming for pets of all sizes.",
      address: "1211 S. Irby St",
      city: "Florence",
      zipCode: "29505",
      phone: "(843) 665-4949",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Bath & Brush", "Nail Trimming", "Large Breed Specialist"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Large Breed Specialist"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-028",
      name: "Scrub-A-Dub Dog",
      category: "grooming",
      description: "Self-service and full-service grooming options. Fun DIY experience or let our pros handle it!",
      address: "1843 W. Evans St",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 407-2489",
      email: "",
      website: "",
      servicesOffered: ["Self-Service Grooming", "Full Grooming", "Bath & Brush", "Nail Trimming"],
      priceRange: "$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Self-Service Option", "Budget Friendly"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-029",
      name: "Pristine Paws Grooming",
      category: "grooming",
      description: "Meticulous grooming for pets who deserve perfection. Clean, modern facility with expert groomers.",
      address: "815 S. Irby St",
      city: "Florence",
      zipCode: "29505",
      phone: "(843) 678-8880",
      email: "",
      website: "",
      servicesOffered: ["Full Grooming", "Precision Cuts", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$",
      hours: {
        monday: "Call for hours",
        tuesday: "Call for hours",
        wednesday: "Call for hours",
        thursday: "Call for hours",
        friday: "Call for hours",
        saturday: "Call for hours",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !1,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Modern Facility"],
      photos: [],
      rating: 0,
      reviewCount: 0
    },
    {
      id: "business-030",
      name: "Wagging Tails Mobile Grooming",
      category: "grooming",
      description: "Full-service mobile grooming throughout Florence area. Convenient at-home grooming experience.",
      address: "Mobile Service",
      city: "Florence",
      zipCode: "29501",
      phone: "(843) 260-6776",
      email: "",
      website: "",
      servicesOffered: ["Mobile Grooming", "Full Grooming", "Bath & Brush", "Nail Trimming"],
      priceRange: "$$",
      hours: {
        monday: "By Appointment",
        tuesday: "By Appointment",
        wednesday: "By Appointment",
        thursday: "By Appointment",
        friday: "By Appointment",
        saturday: "By Appointment",
        sunday: "Closed"
      },
      callForHours: !0,
      mobileService: !0,
      notAcceptingClients: !1,
      paymentMethods: ["Cash", "Credit Card"],
      specialFeatures: ["Mobile Service"],
      photos: [],
      rating: 0,
      reviewCount: 0
    }
  ];
  e.forEach((r) => {
    const n = ce.getBusinessesByCategory(r.category).find((o) => o.id === r.id), i = n ? ce.getBusinessOwner(n.id) : null;
    if (n && (i || n.userEdited)) {
      console.log(`⏭️  SKIPPING seed for "${r.name}" - already claimed/edited`);
      return;
    }
    ce.saveBusiness(r);
  }), console.log(`✅ Successfully seeded ${e.length} businesses (skipped claimed/edited ones)!`);
}
function oy() {
  const decodeBlogSlug = (value) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  }, blogPathname = () => window.location.pathname.replace(/\/$/, "") || "/", isBlogPathname = (pathname) => pathname === "/blog" || pathname.startsWith("/blog/") && pathname.length > 6;
  const [t, e] = E(() => {
    const pathname = blogPathname();
    if (isBlogPathname(pathname))
      return console.log("✅ Using pathname for blog:", pathname), "blog";
    const k = window.location.hash.slice(1);
    console.log("🎬 Initializing - URL hash:", k);
    const I = sessionStorage.getItem("pawsitively_current_page");
    console.log("🎬 Initializing - sessionStorage:", I);
    const z = ["home", "products", "grooming", "training", "boarding", "sitters", "vet", "about", "shortlist", "blog"], A0 = (k) => k && (k === "blog" || k.startsWith("blog/")) ? "blog" : k && z.includes(k) && !(k === "about" && window.innerWidth >= 768) ? k : null;
    return A0(k) ? (console.log("✅ Using hash:", k), A0(k)) : A0(I) ? (console.log("✅ Using sessionStorage:", I), A0(I)) : (console.log("📍 No valid page found, defaulting to home"), "home");
  }), [r, n] = E(() => {
    const pathname = blogPathname();
    if (isBlogPathname(pathname))
      return [pathname.startsWith("/blog/") && pathname.length > 6 ? "blog/" + decodeBlogSlug(pathname.slice(6)) : "blog"];
    const k = window.location.hash.slice(1), I = sessionStorage.getItem("pawsitively_current_page"), z = ["home", "products", "grooming", "training", "boarding", "sitters", "vet", "about", "shortlist", "blog"], A0 = (G) => G && (G === "blog" || G.startsWith("blog/")) ? "blog" : G && z.includes(G) && !(G === "about" && window.innerWidth >= 768) ? G : null;
    return A0(k) ? [k] : A0(I) ? [I] : ["home"];
  }), [i, o] = E(!1), [a, l] = E(!1), [c, u] = E("guest"), [h, p] = E("signup"), [m, f] = E(null), [v, g] = E(null), [b, w] = E(!1), [x, T] = E(0), [Pv, Nv] = E(null), [Iv, zv] = E(null), { user: P, login: N, logout: S } = vi(), C = (k) => {
    n((I) => [...I, k]), e(k);
  }, R = () => {
    const pathname = window.location.pathname.replace(/\/$/, "") || "/";
    if (window.innerWidth < 768 && t === "blog" && pathname.startsWith("/blog/") && pathname.length > 6) {
      try {
        sessionStorage.removeItem("pawsitively_blog_slug");
      } catch {}
      window.history.pushState({}, "", "/blog");
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo(0, 0);
      return;
    }
    if (r.length > 1) {
      const k = [...r];
      k.pop(), n(k), e(k[k.length - 1]);
    } else
      e("home");
  };
  if (typeof window < "u") {
    document.querySelectorAll('meta[name="theme-color"]').forEach((z) => z.remove());
    const I = document.createElement("meta");
    I.name = "theme-color", I.content = "#FBE3B7", document.head.insertBefore(I, document.head.firstChild);
  }
  U(() => {
    if (window.innerWidth < 768) {
      let k = document.querySelector('meta[name="viewport"]');
      k || (k = document.createElement("meta"), k.setAttribute("name", "viewport"), document.head.appendChild(k)), k.setAttribute("content", "width=device-width, initial-scale=1, viewport-fit=cover");
    }
  }, []), U(() => {
    const k = new URLSearchParams(window.location.search).get("reset");
    k && (zv(k), o(!0), window.history.replaceState({}, "", window.location.pathname + window.location.hash));
  }, []), Mo(() => {
    if (isBlogPathname(blogPathname())) {
      sessionStorage.setItem("pawsitively_current_page", "blog");
      e("blog");
    }
  }, []), U(() => {
    const pathname = blogPathname();
    if (t === "blog") {
      sessionStorage.setItem("pawsitively_current_page", "blog");
      if (isBlogPathname(pathname))
        return;
      const k = window.location.hash.slice(1);
      let restoredSlug = k.startsWith("blog/") && k.length > 5 ? decodeBlogSlug(k.slice(5)) : "";
      if (!restoredSlug) {
        try {
          restoredSlug = sessionStorage.getItem("pawsitively_blog_slug") || "";
        } catch {}
      }
      window.history.replaceState({}, "", restoredSlug ? "/blog/" + restoredSlug : "/blog");
      window.dispatchEvent(new Event("popstate"));
      return;
    }
    try {
      sessionStorage.removeItem("pawsitively_blog_slug");
    } catch {}
    if (isBlogPathname(pathname)) {
      window.history.replaceState({}, "", t === "home" ? "/" : "/#" + t);
    }
    console.log("📝 Updating hash to:", t), window.location.hash = t, sessionStorage.setItem("pawsitively_current_page", t), console.log("💾 Saved to sessionStorage:", t);
    typeof window.__peedeeRefreshRouteSeo == "function" ? window.__peedeeRefreshRouteSeo(t) : typeof window.__peedeeRestoreDefaultSeo == "function" && window.__peedeeRestoreDefaultSeo();
  }, [t]), U(() => {
    console.log("🔍 Checking if we need to seed data...");
    const k = ["grooming", "training", "boarding", "sitters", "vet"];
    let I = !1, z = !1;
    for (const ee of k) {
      const G = localStorage.getItem(`pawsitively_businesses_${ee}`);
      if (G && (I = !0, JSON.parse(G).some((W) => W.userEdited || W.ownerId))) {
        z = !0, console.log(`🔒 Found edited/claimed data in ${ee} - will NOT seed!`);
        break;
      }
    }
    I ? console.log(z ? "🔒 USER EDITS DETECTED - Seed blocked to preserve edits!" : "✅ Found existing data - not re-seeding") : (console.log("🌱 COMPLETELY EMPTY - First time ever, loading initial data..."), sy(), console.log("✅ Initial data loaded!"));
  }, []), U(() => {
    window.scrollTo(0, 0);
  }, [t]), U(() => {
    t === "about" && window.innerWidth >= 768 && e("home");
  }, [t]), U(() => {
    t === "home" && (async () => {
      try {
        sessionStorage.getItem("pawsitively_visit_recorded") || (await fetch("/api/stats/visits", { method: "POST" }), sessionStorage.setItem("pawsitively_visit_recorded", "1"));
        const k = await fetch("/api/stats/visits");
        if (k.ok) {
          const I = await k.json();
          typeof I.visits == "number" && Nv(I.visits);
        }
      } catch {
      }
    })();
  }, [t]);
  const M = () => {
    switch (t) {
      case "home":
        return /* @__PURE__ */ s(Qs, { onNavigate: C, visitCount: Pv });
      case "products":
        return /* @__PURE__ */ s(
          vf,
          {
            onNavigate: C,
            user: P,
            onEditProduct: (k) => {
              g(k), w(!0);
            },
            onAddProduct: () => {
              g(null), w(!0);
            },
            refreshKey: x
          }
        );
      case "grooming":
        return /* @__PURE__ */ s(
          of,
          {
            onEditBusiness: (k) => {
              f(k), C("admin");
            },
            onNavigate: C,
            onOpenLogin: () => {
              p("login"), o(!0);
            }
          }
        );
      case "training":
        return /* @__PURE__ */ s(
          af,
          {
            onEditBusiness: (k) => {
              f(k), C("admin");
            },
            onNavigate: C
          }
        );
      case "boarding":
        return /* @__PURE__ */ s(
          lf,
          {
            onEditBusiness: (k) => {
              f(k), C("admin");
            },
            onNavigate: C
          }
        );
      case "sitters":
        return /* @__PURE__ */ s(
          sittersCat,
          {
            onEditBusiness: (k) => {
              f(k), C("admin");
            },
            onNavigate: C,
            onOpenLogin: () => {
              p("login"), o(!0);
            }
          }
        );
      case "vet":
        return /* @__PURE__ */ s(
          cf,
          {
            onEditBusiness: (k) => {
              f(k), C("admin");
            },
            onNavigate: C
          }
        );
      case "about":
        return /* @__PURE__ */ s(
          df,
          {
            onNavigate: C,
            onOpenSignup: (k) => {
              u(k), o(!0);
            }
          }
        );
      case "shortlist":
        return /* @__PURE__ */ s(bf, { onNavigate: C, user: P });
      case "blog":
        return /* @__PURE__ */ s(dailyWag, { onNavigate: C });
      case "admin":
        return !m && !P?.isAdmin ? (e("home"), null) : /* @__PURE__ */ s(
          iy,
          {
            editBusiness: m,
            onClose: () => {
              e(m ? m.category : "home"), f(null);
            }
          }
        );
      case "productForm":
        return /* @__PURE__ */ s(
          eo,
          {
            editProduct: v,
            onClose: () => {
              e("products"), g(null);
            }
          }
        );
      default:
        return /* @__PURE__ */ s(Qs, { onNavigate: C, visitCount: Pv });
    }
  };
  return /* @__PURE__ */ d("div", { className: "relative min-h-screen md:bg-gradient-to-b md:from-blue-50 md:to-purple-50", style: {
    background: window.innerWidth < 768 ? "linear-gradient(to bottom, #FFFFFF 0%, #F3FAFF 50%, #FAF5FF 100%)" : void 0
  }, children: [
    /* @__PURE__ */ d("div", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ s("nav", { className: "bg-[#fce5c1]", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto md:px-4 md:sm:px-6 md:lg:px-8", children: [
      /* @__PURE__ */ d("div", { className: "md:hidden flex justify-between items-center h-[56px] px-4", children: [
        ["grooming", "training", "boarding", "sitters", "vet", "about", "products", "shortlist", "blog"].includes(t) ? /* @__PURE__ */ s(
          "button",
          {
            className: "text-gray-700 hover:text-purple-600",
            onClick: R,
            children: /* @__PURE__ */ s("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ s("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
          }
        ) : /* @__PURE__ */ s("div", { className: "w-6" }),
        /* @__PURE__ */ s(
          "button",
          {
            className: "text-gray-700 hover:text-purple-600",
            onClick: () => l(!0),
            children: /* @__PURE__ */ s("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ s("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "hidden md:block px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ d("div", { className: "flex items-center h-20", children: [
          /* @__PURE__ */ d(
            "button",
            {
              onClick: () => C("home"),
              className: "flex items-center space-x-2 hover:opacity-80 transition-opacity shrink-0",
              style: { marginLeft: "-10px" },
              children: [
                /* @__PURE__ */ s("span", { className: "text-4xl", children: "🐾" }),
                /* @__PURE__ */ d("div", { className: "whitespace-nowrap", children: [
                  /* @__PURE__ */ s("h1", { className: "text-purple-600 text-2xl", children: "Pawsitively Fabulous" }),
                  /* @__PURE__ */ s("p", { className: "text-xs text-gray-600 whitespace-nowrap", children: "Darlington/Florence Area" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ d("div", { className: "flex items-center justify-evenly flex-1 min-w-0", style: { marginLeft: "2.25rem" }, children: [
          /* @__PURE__ */ s(
            "a",
            {
              href: "/grooming",
              onClick: (k) => {
                k.preventDefault(), C("grooming");
              },
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap no-underline ${t === "grooming" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "✂️ Grooming"
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "/training",
              onClick: (k) => {
                k.preventDefault(), C("training");
              },
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap no-underline ${t === "training" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "🎓 Training"
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "/boarding",
              onClick: (k) => {
                k.preventDefault(), C("boarding");
              },
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap no-underline ${t === "boarding" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "🏠 Boarding & Daycare"
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "/sitters",
              onClick: (k) => {
                k.preventDefault(), C("sitters");
              },
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap no-underline ${t === "sitters" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "🦮 Sitters & Walkers"
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "/vet-care",
              onClick: (k) => {
                k.preventDefault(), C("vet");
              },
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap no-underline ${t === "vet" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "⚕️ Vet Care"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => C("products"),
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap ${t === "products" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "🛍️ Pet Products"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              onClick: () => C("blog"),
              className: `px-4 py-2 rounded-full transition-all whitespace-nowrap ${t === "blog" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
              children: "📰 The Daily Wag"
            }
          )
        ] }) ] })
      ] })
    ] }) }),
    /* @__PURE__ */ d("div", { className: "hidden md:block md:bg-white", style: { paddingTop: "6px" }, children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto md:px-4 md:sm:px-6 md:lg:px-8", children: /* @__PURE__ */ d("div", { className: "px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ d("div", { className: "flex items-center", children: [
          /* @__PURE__ */ d("div", { className: "flex items-center space-x-2 shrink-0 pointer-events-none select-none", style: { visibility: "hidden", marginLeft: "-10px" }, "aria-hidden": "true", children: [
            /* @__PURE__ */ s("span", { className: "text-4xl", children: "🐾" }),
            /* @__PURE__ */ d("div", { className: "whitespace-nowrap", children: [
              /* @__PURE__ */ s("h1", { className: "text-purple-600 text-2xl", children: "Pawsitively Fabulous" }),
              /* @__PURE__ */ s("p", { className: "text-xs text-gray-600 whitespace-nowrap", children: "Darlington/Florence Area" })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", alignItems: "center", flex: 1, minWidth: 0, marginLeft: "2.25rem", paddingTop: "4px" }, children: [
          /* @__PURE__ */ s("span", { style: { visibility: "hidden", padding: "8px 16px", whiteSpace: "nowrap", justifySelf: "center" }, "aria-hidden": "true", children: "✂️ Grooming" }),
          /* @__PURE__ */ s("span", { style: { visibility: "hidden", padding: "8px 16px", whiteSpace: "nowrap", justifySelf: "center" }, "aria-hidden": "true", children: "🎓 Training" }),
          /* @__PURE__ */ s("span", { style: { visibility: "hidden", padding: "8px 16px", whiteSpace: "nowrap", justifySelf: "center" }, "aria-hidden": "true", children: "🏠 Boarding & Daycare" }),
          /* @__PURE__ */ s("span", { style: { visibility: "hidden", padding: "8px 16px", whiteSpace: "nowrap", justifySelf: "center" }, "aria-hidden": "true", children: "🦮 Sitters & Walkers" }),
          /* @__PURE__ */ s("span", { style: { visibility: "hidden", padding: "8px 16px", whiteSpace: "nowrap", justifySelf: "center" }, "aria-hidden": "true", children: "⚕️ Vet Care" }),
          P ? /* @__PURE__ */ d("div", { style: { gridColumn: "6 / 8", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", columnGap: "8px" }, children: [
            /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "center", alignItems: "center" }, children: /* @__PURE__ */ s(
              "button",
              {
                onClick: () => C("shortlist"),
                className: `px-4 py-2 rounded-full transition-all whitespace-nowrap ${t === "shortlist" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
                children: "❤️ Shortlist"
              }
            ) }),
            /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }, children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-full", children: [
                /* @__PURE__ */ s(fl, { className: "w-4 h-4 text-purple-600" }),
                /* @__PURE__ */ s("span", { className: "text-gray-700 whitespace-nowrap", children: P.name }),
                P.isAdmin && /* @__PURE__ */ s("span", { className: "text-xs bg-red-600 text-white px-2 py-1 rounded-full whitespace-nowrap", children: "👑 Admin" }),
                P.role === "business" && !P.isAdmin && /* @__PURE__ */ s("span", { className: "text-xs bg-purple-600 text-white px-2 py-1 rounded-full whitespace-nowrap", children: "Business" })
              ] }),
              P.isAdmin && /* @__PURE__ */ s(
                "button",
                {
                  onClick: () => {
                    f(null), C("admin");
                  },
                  className: "px-3 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors whitespace-nowrap text-sm",
                  children: "+ Add Business"
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  onClick: S,
                  className: "flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap text-sm",
                  children: [
                    /* @__PURE__ */ s(pl, { className: "w-4 h-4" }),
                    "Logout"
                  ]
                }
              )
            ] })
          ] }) : [
            /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "center", alignItems: "center" }, children: /* @__PURE__ */ s(
              "button",
              {
                onClick: () => C("shortlist"),
                className: `px-4 py-2 rounded-full transition-all whitespace-nowrap ${t === "shortlist" ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-gray-700"}`,
                children: "❤️ Shortlist"
              }
            ) }),
            /* @__PURE__ */ d("div", { style: { display: "flex", justifyContent: "center", alignItems: "center" }, children: /* @__PURE__ */ d(
              "button",
              {
                onClick: () => o(!0),
                className: "flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap",
                children: [
                  /* @__PURE__ */ s(hl, { className: "w-4 h-4" }),
                  "Login"
                ]
              }
            ) })
          ]
        ] }) ] }) }) }) }),
    ] }),
    /* @__PURE__ */ s(
      Nf,
      {
        isOpen: a,
        onClose: () => l(!1),
        currentPage: t,
        onNavigate: C,
        user: P,
        onLogin: () => o(!0),
        onLogout: S,
        onAddBusiness: P?.isAdmin ? () => {
          f(null), C("admin");
        } : void 0
      }
    ),
    /* @__PURE__ */ s("main", { className: "md:pb-0", children: M() }),
    b && /* @__PURE__ */ s(
      eo,
      {
        editProduct: v,
        onClose: () => {
          w(!1), g(null), T((k) => k + 1);
        }
      }
    ),
    /* @__PURE__ */ s(
      wf,
      {
        isOpen: i,
        onClose: () => {
          o(!1), zv(null);
        },
        resetToken: Iv,
        onSuccess: (k, I, z, A) => {
          console.log("🎯 AuthModal onSuccess called in App.tsx!"), console.log("   - userData:", k), console.log("   - token:", I.substring(0, 20) + "..."), console.log("   - About to call login()..."), N(k, I, z, A), console.log("   - login() called successfully!"), o(!1);
        },
        defaultRole: c,
        defaultMode: h
      }
    ),
    /* @__PURE__ */ d("footer", { className: "relative bg-[#fce5c1] text-purple-900 py-3 px-4 md:py-8 md:px-0 mt-0 md:mt-16 border-t border-purple-100/60 md:border-t-0", children: [
      /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8 text-center relative", children: [
      /* @__PURE__ */ d("div", { className: "md:hidden flex flex-col items-center gap-1", children: [
        /* @__PURE__ */ d("p", { className: "text-sm font-medium text-purple-900", children: [
          /* @__PURE__ */ s("span", { className: "text-base", children: "🐾" }),
          " Pawsitively Fabulous"
        ] }),
        /* @__PURE__ */ d("p", { className: "text-xs text-purple-500/70", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Pawsitively Fabulous. All rights reserved."
        ] }),
        /* @__PURE__ */ s("p", { className: "text-xs text-purple-500/70", children: "Privacy • Terms • Contact" })
      ] })
    ] }),
      /* @__PURE__ */ d("div", { className: "hidden md:block relative w-full", children: [
        /* @__PURE__ */ d("div", { style: { position: "absolute", left: "2.5rem", bottom: "10px", display: "flex", alignItems: "flex-end", gap: "10px" }, children: [
          /* @__PURE__ */ s(
            "a",
            {
              href: "https://www.youtube.com/@peedeepetcare",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "YouTube",
              className: "inline-flex items-center justify-center rounded-full text-white transition-transform hover:scale-110",
              style: {
                width: "2.5rem",
                height: "2.5rem",
                flexShrink: 0,
                background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
                boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
              },
              children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 18, height: 18, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) })
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "https://www.facebook.com/peedeepetcare/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Facebook",
              className: "inline-flex items-center justify-center rounded-full text-white transition-transform hover:scale-110",
              style: {
                width: "2.5rem",
                height: "2.5rem",
                flexShrink: 0,
                background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
                boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
              },
              children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 18, height: 18, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "#",
              "aria-label": "Instagram",
              className: "inline-flex items-center justify-center rounded-full text-white transition-transform hover:scale-110",
              style: {
                width: "2.5rem",
                height: "2.5rem",
                flexShrink: 0,
                background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
                boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
              },
              children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 18, height: 18, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }) })
            }
          ),
          /* @__PURE__ */ s(
            "a",
            {
              href: "#",
              "aria-label": "TikTok",
              className: "inline-flex items-center justify-center rounded-full text-white transition-transform hover:scale-110",
              style: {
                width: "2.5rem",
                height: "2.5rem",
                flexShrink: 0,
                background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
                boxShadow: "0 4px 10px -2px rgba(147, 51, 234, 0.4), 0 2px 4px -1px rgba(236, 72, 153, 0.25)"
              },
              children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 18, height: 18, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 0012.68 0V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" }) })
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "text-center max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ s("p", { className: "text-2xl mb-2", children: "🐾 Pawsitively Fabulous 🐾" }),
          /* @__PURE__ */ s("p", { children: "Free Local Pet Services Directory" })
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "hidden md:block relative w-full mt-4", style: { minHeight: "3.25rem" }, children: [
        /* @__PURE__ */ d("div", { style: { position: "absolute", left: "2.5rem", top: "calc(50% - 6px)" }, children: [
          /* @__PURE__ */ d("p", { className: "text-xs text-purple-600/90 leading-snug", style: { margin: 0, transform: "translateY(-50%)" }, children: [
            "Email us at ",
            /* @__PURE__ */ s("a", { href: "mailto:hello@peedeepetcare.com", className: "text-purple-700 hover:text-purple-900 underline underline-offset-2", children: "hello@peedeepetcare.com" })
          ] }),
          /* @__PURE__ */ d("div", { style: { position: "absolute", bottom: "100%", left: 0, paddingBottom: "8px" }, children: [
            /* @__PURE__ */ s("p", { className: "text-xs text-purple-600/90 leading-snug", style: { margin: 0, marginBottom: "2px" }, children: "Questions?" })
          ] })
        ] }),
        /* @__PURE__ */ s("p", { className: "text-purple-600 text-center absolute left-0 right-0 top-1/2", style: { transform: "translateY(-50%)", margin: 0 }, children: "All Your Pet Needs in Darlington/Florence Area" }),
        t === "home" && Pv != null && /* @__PURE__ */ s("p", { className: "absolute top-1/2 -translate-y-1/2 text-xs text-purple-500/70 tracking-wide pointer-events-none whitespace-nowrap", style: { right: "1.75rem" }, children: `${Pv.toLocaleString()} visits and counting` })
      ] })
    ] })
  ] });
}
function ay() {
  return /* @__PURE__ */ s(rf, { children: /* @__PURE__ */ s(oy, {}) });
}
const ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ay
}, Symbol.toStringTag, { value: "Module" }));
export {
  dy as Code0_8
};
