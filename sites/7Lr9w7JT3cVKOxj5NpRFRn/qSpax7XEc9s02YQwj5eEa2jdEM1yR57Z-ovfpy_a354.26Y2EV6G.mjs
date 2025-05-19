import { a as z } from "./chunk-BZ5MKCKE.mjs";
import { a as L, b as le, c as me, d as pe } from "./chunk-VZINQ5XF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as re,
  Aa as R,
  Ba as oe,
  N as I,
  Z as y,
  aa as S,
  ba as Z,
  c as i,
  da as A,
  ea as ae,
  fa as ie,
  g as W,
  ia as n,
  k as B,
  ka as a,
  l as E,
  m as k,
  n as D,
  o as K,
  p as H,
  q as $,
  ra as ne,
  s as ee,
  t as e,
  ta as se,
  u as d,
  va as s,
  wa as g,
  x as X,
  y as te,
  ya as t,
  z as N,
  za as C,
} from "./chunk-BC6VH6JS.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-VXMCXQ66.mjs";
import "./chunk-RIUMFBNJ.mjs";
var be = "framer-pvv2c",
  ye = { jp67Wxg4D: "framer-v-1azpmek" };
var we = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ve = ({ value: l, children: o }) => {
    let p = B(X),
      f = l ?? p.transition,
      h = K(() => ({ ...p, transition: f }), [JSON.stringify(f)]);
    return e(X.Provider, { value: h, children: o });
  },
  We = te(i),
  Ee = ({ height: l, id: o, width: p, ...f }) => ({ ...f }),
  ke = (l, o) =>
    l.layoutDependency ? o.join("-") + l.layoutDependency : o.join("-"),
  He = W(function (l, o) {
    let { activeLocale: p, setLocale: f } = I(),
      { style: h, className: x, layoutId: u, variant: T, ...J } = Ee(l),
      {
        baseVariant: r,
        classNames: Y,
        clearLoadingGesture: ge,
        gestureHandlers: Q,
        gestureVariant: q,
        isLoading: _,
        setGestureState: G,
        setVariant: c,
        variants: m,
      } = se({
        defaultVariant: "jp67Wxg4D",
        variant: T,
        variantClassNames: ye,
      }),
      w = ke(l, m),
      b = H(null),
      v = k(),
      xe = [],
      j = re();
    return e(N, {
      id: u ?? v,
      children: e(We, {
        animate: m,
        initial: !1,
        children: e(ve, {
          value: we,
          children: e(s, {
            ...J,
            ...Q,
            background: {
              alt: "",
              fit: "fill",
              intrinsicHeight: 44,
              intrinsicWidth: 32,
              loading: t(j?.y || 0),
              pixelHeight: 44,
              pixelWidth: 32,
              src: "https://framerusercontent.com/images/VE7azko0zjMkDlOoaImX9nEcu3I.png",
            },
            className: y(be, ...xe, "framer-1azpmek", x, Y),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "jp67Wxg4D",
            ref: o ?? b,
            style: { ...h },
          }),
        }),
      }),
    });
  }),
  Ne = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pvv2c.framer-z3vm4g, .framer-pvv2c .framer-z3vm4g { display: block; }",
    ".framer-pvv2c.framer-1azpmek { height: 44px; overflow: visible; position: relative; width: 32px; }",
  ],
  M = A(He, Ne, "framer-pvv2c"),
  O = M;
M.displayName = "Thumb Cursor";
M.defaultProps = { height: 44, width: 32 };
C(M, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Ie = {
  container: {
    fontFamily: "'Abhaya Libre', serif",
    fontSize: "36px",
    textAlign: "center",
    color: "#fff",
    textShadow: "2px 2px 4px #000, 0 0 10px rgba(255, 255, 255, 0.8)",
    animation: "breathing 2s ease-in-out infinite",
    transition: "transform 0.5s ease-in-out",
  },
};
function P() {
  let l = [
      "Price cant down if hodlcat stay up",
      "Loading new horizons...",
      "Hodlcat high, moon nearby",
      "Hold the hodlcat, dodge the slump",
      "Hodlcat steady, profits ready",
      "Buy the dip, or cry and sip",
      "Hodlcat go brrrrr, market purr",
      "Stonks? No, hodlcat go bonk",
      "No FUD, just hodlcat thud.",
      "WAGMI with hodlcat army",
      "Degen? Nah, hodlcat's a legend",
      "Buy high, hodlcat fly",
      "Diamond hands, smooth brain",
      "One does not simply sell low",
    ],
    [o, p] = $("");
  return (
    E(() => {
      let f = l[Math.floor(Math.random() * l.length)];
      p(f);
    }, []),
    d(ee, {
      children: [
        e("style", {
          children: `
                @keyframes breathing {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `,
        }),
        e("div", { style: Ie.container, children: o }),
      ],
    })
  );
}
var Ae = R(L),
  Ce = R(P),
  Re = R(O),
  ze = {
    EZJ2Ah9W5: "(max-width: 809px)",
    HzCHxNot0: "(min-width: 810px) and (max-width: 1919px)",
    WQLkyLRf1: "(min-width: 1920px)",
  };
var Me = "framer-Esaai",
  Ve = {
    EZJ2Ah9W5: "framer-v-1tyyxiv",
    HzCHxNot0: "framer-v-13cawlj",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  U = (l, o) => `translate(-50%, -50%) ${o}`,
  V = (l, o) => `translateX(-50%) ${o}`,
  he = (l, o) => `translateY(-50%) ${o}`,
  rt = z(),
  Fe = { Desktop: "WQLkyLRf1", Phone: "EZJ2Ah9W5", Tablet: "HzCHxNot0" },
  Te = ({ height: l, id: o, width: p, ...f }) => {
    var h, x;
    return {
      ...f,
      variant:
        (x = (h = Fe[f.variant]) !== null && h !== void 0 ? h : f.variant) !==
          null && x !== void 0
          ? x
          : "WQLkyLRf1",
    };
  },
  Je = { component: O, variant: "jp67Wxg4D" },
  je = W(function (l, o) {
    let { activeLocale: p, setLocale: f } = I(),
      { style: h, className: x, layoutId: u, variant: T, ...J } = Te(l);
    E(() => {
      let c = z(void 0, p);
      if (c.robots) {
        let m = document.querySelector('meta[name="robots"]');
        m
          ? m.setAttribute("content", c.robots)
          : ((m = document.createElement("meta")),
            m.setAttribute("name", "robots"),
            m.setAttribute("content", c.robots),
            document.head.appendChild(m));
      }
    }, [void 0, p]),
      D(() => {
        let c = z(void 0, p);
        if (((document.title = c.title || ""), c.viewport)) {
          var m;
          (m = document.querySelector('meta[name="viewport"]')) === null ||
            m === void 0 ||
            m.setAttribute("content", c.viewport);
        }
        let w = c.bodyClassName;
        if (w) {
          let b = document.body;
          b.classList.forEach(
            (v) => v.startsWith("framer-body-") && b.classList.remove(v)
          ),
            b.classList.add(`${c.bodyClassName}-framer-Esaai`);
        }
        return () => {
          w &&
            document.body.classList.remove(`${c.bodyClassName}-framer-Esaai`);
        };
      }, [void 0, p]);
    let [r, Y] = ne(T, ze, !1),
      ge = void 0,
      q = y(Me, ...[pe]),
      _ = H(null),
      G = k();
    return (
      ae({ "1a9u8lo": Je }),
      e(ie.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Ve },
        children: d(N, {
          id: u ?? G,
          children: [
            d(s, {
              ...J,
              background: {
                alt: "",
                fit: "fill",
                loading: t(0),
                pixelHeight: 1080,
                pixelWidth: 1920,
                sizes: "100vw",
                src: "https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png",
                srcSet:
                  "https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png?scale-down-to=512 512w,https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png 1920w",
              },
              className: y(q, "framer-72rtr7", x),
              ref: o ?? _,
              style: { ...h },
              children: [
                e(s, {
                  background: {
                    alt: "",
                    backgroundSize: 2,
                    fit: "tile",
                    loading: t(0),
                    pixelHeight: 256,
                    pixelWidth: 256,
                    positionX: "left",
                    positionY: "top",
                    src: "https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png",
                  },
                  className: "framer-tp0opv",
                  "data-framer-name": "noise",
                  name: "noise",
                }),
                e(a, {
                  breakpoint: r,
                  overrides: { EZJ2Ah9W5: { y: 632 }, HzCHxNot0: { y: -282 } },
                  children: e(S, {
                    height: 207,
                    width: "189px",
                    y: 798,
                    children: e(Z, {
                      className: "framer-y71vrp-container",
                      children: e(L, {
                        height: "100%",
                        id: "E6GPkhC7Q",
                        layoutId: "E6GPkhC7Q",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(a, {
                  breakpoint: r,
                  overrides: {
                    EZJ2Ah9W5: {
                      "data-hide-scrollbars": void 0,
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: t(52.00000000000017),
                        pixelHeight: 750,
                        pixelWidth: 354,
                        sizes: "354px",
                        src: "https://framerusercontent.com/images/bHotXoDNWdnNodfRhv1gdOtYvJc.png",
                        srcSet:
                          "https://framerusercontent.com/images/bHotXoDNWdnNodfRhv1gdOtYvJc.png 354w",
                      },
                    },
                    HzCHxNot0: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: t(-237),
                        pixelHeight: 830,
                        pixelWidth: 1348,
                        sizes: "772px",
                        src: "https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png",
                        srcSet:
                          "https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png?scale-down-to=512 512w,https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png 1348w",
                      },
                      transformTemplate: U,
                    },
                  },
                  children: d(s, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: t(67.00000000000023),
                      pixelHeight: 830,
                      pixelWidth: 1348,
                      sizes: "1348px",
                      src: "https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png",
                      srcSet:
                        "https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png?scale-down-to=512 512w,https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/2OaczHXzToSfcqNM1a6MpJyV1cM.png 1348w",
                    },
                    className: "framer-1qanxkr",
                    "data-hide-scrollbars": !0,
                    children: [
                      d("div", {
                        className: "framer-1vyfrru",
                        children: [
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              EZJ2Ah9W5: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "QVP8HtCKQ",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Home",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              HzCHxNot0: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "QVP8HtCKQ",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Home",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(g, {
                              __fromCanvasComponent: !0,
                              children: e(i, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-color": "rgb(0, 0, 255)",
                                  },
                                  children: e(n, {
                                    href: { webPageId: "augiA20Il" },
                                    nodeId: "QVP8HtCKQ",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1491jsp",
                                      "data-styles-preset": "a4wMR6OXt",
                                      children: "Home",
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-zljmkr",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),


                          e(a, {
                            breakpoint: r,
                            overrides: {
                              EZJ2Ah9W5: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "xHJWYltjm",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Guestbook",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              HzCHxNot0: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "xHJWYltjm",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Guestbook",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(g, {
                              __fromCanvasComponent: !0,
                              children: e(i, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                  },
                                  children: e(n, {
                                    href: { webPageId: "wkg8xGODr" },
                                    nodeId: "xHJWYltjm",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1491jsp",
                                      "data-styles-preset": "a4wMR6OXt",
                                      children: "Guestbook",
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-1tn5w0x",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              EZJ2Ah9W5: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "QJPZdmag6",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Twitter",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              HzCHxNot0: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "QJPZdmag6",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Twitter",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(g, {
                              __fromCanvasComponent: !0,
                              children: e(i, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                  },
                                  children: e(n, {
                                    href: { webPageId: "rXmFTlZAf" },
                                    nodeId: "QJPZdmag6",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1491jsp",
                                      "data-styles-preset": "a4wMR6OXt",
                                      children: "Twitter",
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-1gl2gx0",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              EZJ2Ah9W5: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "b_Os_CUkq",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Telegram",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              HzCHxNot0: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "b_Os_CUkq",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Telegram",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(g, {
                              __fromCanvasComponent: !0,
                              children: e(i, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(n, {
                                    href: { webPageId: "fQwylL6Ek" },
                                    nodeId: "b_Os_CUkq",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1491jsp",
                                      "data-styles-preset": "a4wMR6OXt",
                                      children: "Telegram",
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-10vm3j8",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              EZJ2Ah9W5: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "FVEMS5VK5" },
                                      nodeId: "BnVaAAeIb",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Chart",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              HzCHxNot0: {
                                children: e(i, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "FVEMS5VK5" },
                                      nodeId: "BnVaAAeIb",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Chart",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(g, {
                              __fromCanvasComponent: !0,
                              children: e(i, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(n, {
                                    href: { webPageId: "FVEMS5VK5" },
                                    nodeId: "BnVaAAeIb",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1491jsp",
                                      "data-styles-preset": "a4wMR6OXt",
                                      children: "Chart",
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-121pqgg",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      d("div", {
                        background: { alt: "", fit: "fill" },
                        className: "framer-1myp2xm",
                        children: [
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              EZJ2Ah9W5: {
                                background: {
                                  alt: "",
                                  backgroundSize: 2,
                                  fit: "tile",
                                  loading: t(135.00000000000034),
                                  pixelHeight: 234,
                                  pixelWidth: 304,
                                  positionX: "left",
                                  positionY: "top",
                                  src: "https://framerusercontent.com/images/9LTofXJlQoaGNNllZmYO1MJ5k4s.png",
                                },
                              },
                              HzCHxNot0: {
                                background: {
                                  alt: "",
                                  backgroundSize: 2,
                                  fit: "tile",
                                  loading: t(-211.5000000000001),
                                  pixelHeight: 234,
                                  pixelWidth: 304,
                                  positionX: "left",
                                  positionY: "top",
                                  src: "https://framerusercontent.com/images/9LTofXJlQoaGNNllZmYO1MJ5k4s.png",
                                },
                              },
                            },
                            children: e(s, {
                              background: {
                                alt: "",
                                backgroundSize: 2,
                                fit: "tile",
                                loading: t(227.50000000000045),
                                pixelHeight: 234,
                                pixelWidth: 304,
                                positionX: "left",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/9LTofXJlQoaGNNllZmYO1MJ5k4s.png",
                              },
                              className: "framer-172l4yj",
                              "data-framer-cursor": "1a9u8lo",
                              "data-framer-name": "bg",
                              name: "bg",
                            }),
                          }),
                          d("div", {
                            className: "framer-el8gpp",
                            children: [
                              e(n, {
                                href: "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/f419c20a64aa39386cb5b5abd48aa4c6.jpg",
                                nodeId: "rpo8tUQ7G",
                                children: e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    EZJ2Ah9W5: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 88,
                                        intrinsicWidth: 88,
                                        loading: t(310.0000000000002),
                                        pixelHeight: 88,
                                        pixelWidth: 88,
                                        src: "https://framerusercontent.com/images/UwPTilsStLkzvX5PGxqJCgMxSE.gif",
                                      },
                                      transformTemplate: V,
                                    },
                                    HzCHxNot0: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 88,
                                        intrinsicWidth: 88,
                                        loading: t(-60),
                                        pixelHeight: 88,
                                        pixelWidth: 88,
                                        src: "https://framerusercontent.com/images/UwPTilsStLkzvX5PGxqJCgMxSE.gif",
                                      },
                                    },
                                  },
                                  children: e(s, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 88,
                                      intrinsicWidth: 88,
                                      loading: t(331.0000000000002),
                                      pixelHeight: 88,
                                      pixelWidth: 88,
                                      src: "https://framerusercontent.com/images/UwPTilsStLkzvX5PGxqJCgMxSE.gif",
                                    },
                                    className: "framer-fx03if framer-lux5qc",
                                    "data-framer-name": "1",
                                    name: "1",
                                  }),
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 48,
                                      intrinsicWidth: 48,
                                      loading: t(212.00000000000023),
                                      pixelHeight: 48,
                                      pixelWidth: 48,
                                      src: "https://framerusercontent.com/images/UHtZOrd0f1h4piOdcNwyapVisM.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 48,
                                      intrinsicWidth: 48,
                                      loading: t(44),
                                      pixelHeight: 48,
                                      pixelWidth: 48,
                                      src: "https://framerusercontent.com/images/UHtZOrd0f1h4piOdcNwyapVisM.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 48,
                                    intrinsicWidth: 48,
                                    loading: t(435.0000000000002),
                                    pixelHeight: 48,
                                    pixelWidth: 48,
                                    src: "https://framerusercontent.com/images/UHtZOrd0f1h4piOdcNwyapVisM.gif",
                                  },
                                  className: "framer-4hlsih",
                                  "data-framer-name": "16",
                                  name: "16",
                                }),
                              }),
                              
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 200,
                                      intrinsicWidth: 200,
                                      loading: t(873.0000000000002),
                                      pixelHeight: 200,
                                      pixelWidth: 200,
                                      src: "https://framerusercontent.com/images/MG5OMwDBpj0Liw0geTpQLmXtXaE.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 200,
                                      intrinsicWidth: 200,
                                      loading: t(384),
                                      pixelHeight: 200,
                                      pixelWidth: 200,
                                      src: "https://framerusercontent.com/images/MG5OMwDBpj0Liw0geTpQLmXtXaE.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 200,
                                    intrinsicWidth: 200,
                                    loading: t(775.0000000000002),
                                    pixelHeight: 200,
                                    pixelWidth: 200,
                                    src: "https://framerusercontent.com/images/MG5OMwDBpj0Liw0geTpQLmXtXaE.gif",
                                  },
                                  className: "framer-1kiemz1",
                                  "data-framer-name": "5",
                                  name: "5",
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 86,
                                      intrinsicWidth: 126,
                                      loading: t(972.0000000000002),
                                      pixelHeight: 86,
                                      pixelWidth: 126,
                                      src: "https://framerusercontent.com/images/448BlJfwnrwAWe6RrtuMALkRyE.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 86,
                                      intrinsicWidth: 126,
                                      loading: t(1003),
                                      pixelHeight: 86,
                                      pixelWidth: 126,
                                      src: "https://framerusercontent.com/images/448BlJfwnrwAWe6RrtuMALkRyE.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 86,
                                    intrinsicWidth: 126,
                                    loading: t(1338.0000000000002),
                                    pixelHeight: 86,
                                    pixelWidth: 126,
                                    src: "https://framerusercontent.com/images/448BlJfwnrwAWe6RrtuMALkRyE.gif",
                                  },
                                  className: "framer-idf4eu",
                                  "data-framer-name": "9",
                                  name: "9",
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 40,
                                      intrinsicWidth: 480,
                                      loading: t(177.00000000000023),
                                      pixelHeight: 40,
                                      pixelWidth: 480,
                                      src: "https://framerusercontent.com/images/GzmyaHjwy7sI7iWzJcS7m3Pefyg.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 40,
                                      intrinsicWidth: 480,
                                      loading: t(-130),
                                      pixelHeight: 40,
                                      pixelWidth: 480,
                                      src: "https://framerusercontent.com/images/GzmyaHjwy7sI7iWzJcS7m3Pefyg.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 40,
                                    intrinsicWidth: 480,
                                    loading: t(261.0000000000002),
                                    pixelHeight: 40,
                                    pixelWidth: 480,
                                    src: "https://framerusercontent.com/images/GzmyaHjwy7sI7iWzJcS7m3Pefyg.gif",
                                  },
                                  className: "framer-1kukpnw",
                                  "data-framer-name": "19",
                                  name: "19",
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 106,
                                      intrinsicWidth: 114,
                                      loading: t(1098.0000000000002),
                                      pixelHeight: 106,
                                      pixelWidth: 114,
                                      src: "https://framerusercontent.com/images/Dlmo2NM4TgK786JaJkhjUCeHnmg.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 106,
                                      intrinsicWidth: 114,
                                      loading: t(1303),
                                      pixelHeight: 106,
                                      pixelWidth: 114,
                                      src: "https://framerusercontent.com/images/Dlmo2NM4TgK786JaJkhjUCeHnmg.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 106,
                                    intrinsicWidth: 114,
                                    loading: t(1633.0000000000002),
                                    pixelHeight: 106,
                                    pixelWidth: 114,
                                    src: "https://framerusercontent.com/images/Dlmo2NM4TgK786JaJkhjUCeHnmg.gif",
                                  },
                                  className: "framer-1syui13",
                                  "data-framer-name": "28",
                                  name: "28",
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 40,
                                      intrinsicWidth: 40,
                                      loading: t(529.0000000000002),
                                      pixelHeight: 40,
                                      pixelWidth: 40,
                                      src: "https://framerusercontent.com/images/gT0CKbfo7Mray2czLbZeavC8Q.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 40,
                                      intrinsicWidth: 40,
                                      loading: t(224),
                                      pixelHeight: 40,
                                      pixelWidth: 40,
                                      src: "https://framerusercontent.com/images/gT0CKbfo7Mray2czLbZeavC8Q.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 40,
                                    intrinsicWidth: 40,
                                    loading: t(615.0000000000002),
                                    pixelHeight: 40,
                                    pixelWidth: 40,
                                    src: "https://framerusercontent.com/images/gT0CKbfo7Mray2czLbZeavC8Q.gif",
                                  },
                                  className: "framer-1xm7wzq",
                                  "data-framer-name": "10",
                                  name: "10",
                                }),
                              }),
                              e(n, {
                                href: "https://lunarregistry.com/buy-moon-land/sea-of-tranquility-mare-tranquillitatis",
                                nodeId: "ExH8xdTy0",
                                children: e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    EZJ2Ah9W5: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 82,
                                        intrinsicWidth: 106,
                                        loading: t(166.00000000000023),
                                        pixelHeight: 82,
                                        pixelWidth: 106,
                                        src: "https://framerusercontent.com/images/XA3GaioEdPpFUWQrIK3yCMzaEEc.gif",
                                      },
                                    },
                                    HzCHxNot0: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 82,
                                        intrinsicWidth: 106,
                                        loading: t(-126),
                                        pixelHeight: 82,
                                        pixelWidth: 106,
                                        src: "https://framerusercontent.com/images/XA3GaioEdPpFUWQrIK3yCMzaEEc.gif",
                                      },
                                    },
                                  },
                                  children: e(s, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 82,
                                      intrinsicWidth: 106,
                                      loading: t(265.0000000000002),
                                      pixelHeight: 82,
                                      pixelWidth: 106,
                                      src: "https://framerusercontent.com/images/XA3GaioEdPpFUWQrIK3yCMzaEEc.gif",
                                    },
                                    className: "framer-l088w2 framer-lux5qc",
                                    "data-framer-name": "20",
                                    name: "20",
                                  }),
                                }),
                              }),
                              e(n, {
                                href: "https://lunarregistry.com/buy-moon-land",
                                nodeId: "IYJlvrd4l",
                                children: e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    EZJ2Ah9W5: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 160,
                                        intrinsicWidth: 168,
                                        loading: t(624.5000000000005),
                                        pixelHeight: 160,
                                        pixelWidth: 168,
                                        src: "https://framerusercontent.com/images/dWUa58OkNBIc0mopzER90CjJE.gif",
                                      },
                                      transformTemplate: he,
                                    },
                                    HzCHxNot0: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 160,
                                        intrinsicWidth: 168,
                                        loading: t(318),
                                        pixelHeight: 160,
                                        pixelWidth: 168,
                                        src: "https://framerusercontent.com/images/dWUa58OkNBIc0mopzER90CjJE.gif",
                                      },
                                    },
                                  },
                                  children: e(s, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 160,
                                      intrinsicWidth: 168,
                                      loading: t(709.0000000000002),
                                      pixelHeight: 160,
                                      pixelWidth: 168,
                                      src: "https://framerusercontent.com/images/dWUa58OkNBIc0mopzER90CjJE.gif",
                                    },
                                    className: "framer-1f2uk06 framer-lux5qc",
                                    "data-framer-name": "18",
                                    name: "18",
                                  }),
                                }),
                              }),
                              e(n, {
                                href: "https://dexscreener.com/solana/b47xx5wgk9vue6une7bmduxwr7fqguwkh8u14hwvf72y",
                                nodeId: "k1bYmKFnn",
                                children: e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    EZJ2Ah9W5: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 26,
                                        intrinsicWidth: 100,
                                        loading: t(975.0000000000002),
                                        pixelHeight: 26,
                                        pixelWidth: 100,
                                        src: "https://framerusercontent.com/images/EGcns0MnlGEo22Gr2sgOwk4YRBY.gif",
                                      },
                                    },
                                    HzCHxNot0: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 26,
                                        intrinsicWidth: 100,
                                        loading: t(717),
                                        pixelHeight: 26,
                                        pixelWidth: 100,
                                        src: "https://framerusercontent.com/images/EGcns0MnlGEo22Gr2sgOwk4YRBY.gif",
                                      },
                                    },
                                  },
                                  children: e(s, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 26,
                                      intrinsicWidth: 100,
                                      loading: t(1076.0000000000002),
                                      pixelHeight: 26,
                                      pixelWidth: 100,
                                      src: "https://framerusercontent.com/images/EGcns0MnlGEo22Gr2sgOwk4YRBY.gif",
                                    },
                                    className: "framer-y90uv framer-lux5qc",
                                    "data-framer-name": "arrow",
                                    name: "arrow",
                                  }),
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 42,
                                      intrinsicWidth: 94,
                                      loading: t(245.00000000000023),
                                      pixelHeight: 42,
                                      pixelWidth: 94,
                                      src: "https://framerusercontent.com/images/Y9UgvY9E3ajT98ExvAuiKLg1pw.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 42,
                                      intrinsicWidth: 94,
                                      loading: t(-99),
                                      pixelHeight: 42,
                                      pixelWidth: 94,
                                      src: "https://framerusercontent.com/images/Y9UgvY9E3ajT98ExvAuiKLg1pw.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 42,
                                    intrinsicWidth: 94,
                                    loading: t(292.0000000000002),
                                    pixelHeight: 42,
                                    pixelWidth: 94,
                                    src: "https://framerusercontent.com/images/Y9UgvY9E3ajT98ExvAuiKLg1pw.gif",
                                  },
                                  className: "framer-4e9seg",
                                  "data-framer-name": "15",
                                  name: "15",
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 80,
                                      intrinsicWidth: 80,
                                      loading: t(664.0000000000005),
                                      pixelHeight: 80,
                                      pixelWidth: 80,
                                      src: "https://framerusercontent.com/images/kooLxksXSAQ6KHGo28hr7uUNUA0.gif",
                                    },
                                    transformTemplate: U,
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 80,
                                      intrinsicWidth: 80,
                                      loading: t(907),
                                      pixelHeight: 80,
                                      pixelWidth: 80,
                                      src: "https://framerusercontent.com/images/kooLxksXSAQ6KHGo28hr7uUNUA0.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 80,
                                    intrinsicWidth: 80,
                                    loading: t(1244.0000000000002),
                                    pixelHeight: 80,
                                    pixelWidth: 80,
                                    src: "https://framerusercontent.com/images/kooLxksXSAQ6KHGo28hr7uUNUA0.gif",
                                  },
                                  className: "framer-1szatur",
                                  "data-framer-name": "16 (1)",
                                  name: "16 (1)",
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 76,
                                      intrinsicWidth: 80,
                                      loading: t(649.0000000000005),
                                      pixelHeight: 76,
                                      pixelWidth: 80,
                                      src: "https://framerusercontent.com/images/uwUUEFym22zWvYsZaqrWF5FiA4.png",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 76,
                                      intrinsicWidth: 80,
                                      loading: t(566.5000000000003),
                                      pixelHeight: 76,
                                      pixelWidth: 80,
                                      src: "https://framerusercontent.com/images/uwUUEFym22zWvYsZaqrWF5FiA4.png",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 76,
                                    intrinsicWidth: 80,
                                    loading: t(932.0000000000006),
                                    pixelHeight: 76,
                                    pixelWidth: 80,
                                    src: "https://framerusercontent.com/images/uwUUEFym22zWvYsZaqrWF5FiA4.png",
                                  },
                                  className: "framer-1gtd705",
                                  "data-framer-name": "14",
                                  name: "14",
                                  transformTemplate: he,
                                }),
                              }),
                            ],
                          }),
                          d("div", {
                            className: "framer-1egxdjg",
                            "data-framer-name": "MAIN",
                            name: "MAIN",
                            children: [
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    children: e(i, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QWJoYXlhIExpYnJlLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Abhaya Libre", "Abhaya Libre Placeholder", serif',
                                          "--framer-font-size": "24px",
                                          "--framer-text-alignment": "justify",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Born in the darkest alleys of the blockchain, HodlCat lives by one simple rule: Grab. Hold. Never Let Go. This cat doesn’t flinch at red candles — it sharpens its claws on them!
While others panic and sell, HodlCat peacefully naps, dreaming of bull runs and moonshots. It’s not just a meme — it’s a way of life. Ready to join the pride?",
                                      }),
                                    }),
                                  },
                                  HzCHxNot0: {
                                    children: e(i, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QWJoYXlhIExpYnJlLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Abhaya Libre", "Abhaya Libre Placeholder", serif',
                                          "--framer-font-size": "40px",
                                          "--framer-text-alignment": "justify",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Born in the darkest alleys of the blockchain, HodlCat lives by one simple rule: Grab. Hold. Never Let Go. This cat doesn’t flinch at red candles — it sharpens its claws on them!
While others panic and sell, HodlCat peacefully naps, dreaming of bull runs and moonshots. It’s not just a meme — it’s a way of life. Ready to join the pride?",
                                      }),
                                    }),
                                  },
                                },
                                children: e(g, {
                                  __fromCanvasComponent: !0,
                                  children: e(i, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7QWJoYXlhIExpYnJlLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Abhaya Libre", "Abhaya Libre Placeholder", serif',
                                        "--framer-font-size": "46px",
                                        "--framer-text-alignment": "justify",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Born in the darkest alleys of the blockchain, HodlCat lives by one simple rule: Grab. Hold. Never Let Go. This cat doesn’t flinch at red candles — it sharpens its claws on them!
While others panic and sell, HodlCat peacefully naps, dreaming of bull runs and moonshots. It’s not just a meme — it’s a way of life. Ready to join the pride?",
                                    }),
                                  }),
                                  className: "framer-1b2jiad",
                                  fonts: ["GF;Abhaya Libre-regular"],
                                  transformTemplate: V,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 82.72727093420743,
                                      intrinsicWidth: 253.63635813894362,
                                      loading: t(225.00000000000023),
                                      pixelHeight: 94,
                                      pixelWidth: 269,
                                      src: "https://framerusercontent.com/images/WVWJHCB3hcD29TvQhlAtkdlo48.gif",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 82.72727093420743,
                                      intrinsicWidth: 253.63635813894362,
                                      loading: t(-127),
                                      pixelHeight: 94,
                                      pixelWidth: 269,
                                      src: "https://framerusercontent.com/images/WVWJHCB3hcD29TvQhlAtkdlo48.gif",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 82.72727093420743,
                                    intrinsicWidth: 253.63635813894362,
                                    loading: t(281.0000000000002),
                                    pixelHeight: 94,
                                    pixelWidth: 269,
                                    src: "https://framerusercontent.com/images/WVWJHCB3hcD29TvQhlAtkdlo48.gif",
                                  },
                                  className: "framer-mj9bgg",
                                  "data-framer-name": "thumb logo",
                                  name: "hodlcat logo",
                                  transformTemplate: V,
                                }),
                              }),
                              e(a, {
                                breakpoint: r,
                                overrides: {
                                  EZJ2Ah9W5: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 909.0908893868947,
                                      intrinsicWidth: 909.0908893868947,
                                      loading: t(367.0000000000002),
                                      pixelHeight: 1e3,
                                      pixelWidth: 1e3,
                                      sizes: "292px",
                                      src: "https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png",
                                      srcSet:
                                        "https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png?scale-down-to=512 512w,https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png 800w",
                                    },
                                  },
                                  HzCHxNot0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 909.0908893868947,
                                      intrinsicWidth: 909.0908893868947,
                                      loading: t(88),
                                      pixelHeight: 1e3,
                                      pixelWidth: 1e3,
                                      sizes: "604px",
                                      src: "https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png",
                                      srcSet:
                                        "https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png?scale-down-to=512 512w,https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png 800w",
                                    },
                                  },
                                },
                                children: e(s, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 909.0908893868947,
                                    intrinsicWidth: 909.0908893868947,
                                    loading: t(505.0000000000002),
                                    pixelHeight: 1e3,
                                    pixelWidth: 1e3,
                                    sizes: "604px",
                                    src: "https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png?scale-down-to=512 512w,https://framerusercontent.com/images/SMvxJm7llcR6WfV7MyXCzgmrIM.png 800w",
                                  },
                                  className: "framer-18vflo1",
                                  "data-framer-name": "pfp",
                                  name: "pfp",
                                  transformTemplate: V,
                                }),
                              }),
                            ],
                          }),
                          e(S, {
                            children: e(a, {
                              breakpoint: r,
                              overrides: {
                                EZJ2Ah9W5: { transformTemplate: U },
                              },
                              children: e(Z, {
                                className: "framer-j0fhsf-container",
                                style: { rotate: -12 },
                                children: e(P, {
                                  height: "100%",
                                  id: "jWONHA55S",
                                  layoutId: "jWONHA55S",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Xe = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Esaai.framer-lux5qc, .framer-Esaai .framer-lux5qc { display: block; }",
    ".framer-Esaai.framer-72rtr7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1080px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1920px; }",
    ".framer-Esaai .framer-tp0opv { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; opacity: 0.12; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 3; }",
    ".framer-Esaai .framer-y71vrp-container { bottom: 75px; flex: none; height: 207px; position: absolute; right: 37px; width: 189px; z-index: 2; }",
    ".framer-Esaai .framer-1qanxkr { flex: none; height: 828px; left: calc(50.00000000000002% - 1348px / 2); overflow: hidden; position: absolute; top: calc(44.53703703703706% - 828px / 2); width: 1348px; z-index: 1; }",
    ".framer-Esaai .framer-1vyfrru { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; left: 6px; opacity: 0.8; overflow: hidden; padding: 0px; position: absolute; top: 97px; width: 464px; }",
    ".framer-Esaai .framer-zljmkr, .framer-Esaai .framer-9u8ejt, .framer-Esaai .framer-1tn5w0x, .framer-Esaai .framer-1gl2gx0, .framer-Esaai .framer-10vm3j8, .framer-Esaai .framer-121pqgg { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-Esaai .framer-1myp2xm { bottom: 43px; flex: none; height: 608px; left: calc(50.14836795252228% - 1328px / 2); overflow: auto; position: absolute; width: 1328px; z-index: 1; }",
    ".framer-Esaai .framer-172l4yj { flex: none; height: 1643px; left: calc(49.3975903614458% - 1313px / 2); overflow: hidden; position: absolute; top: calc(132.40131578947373% - 1643px / 2); width: 1313px; }",
    ".framer-Esaai .framer-el8gpp { flex: none; height: 1478px; left: calc(49.0963855421687% - 1255px / 2); overflow: hidden; position: absolute; top: 17px; width: 1255px; }",
    ".framer-Esaai .framer-fx03if { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 88px); left: 1081px; overflow: visible; position: absolute; text-decoration: none; top: 70px; width: 88px; }",
    ".framer-Esaai .framer-4hlsih { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); left: 828px; overflow: visible; pointer-events: none; position: absolute; top: 174px; width: 48px; }",
    ".framer-Esaai .framer-15z8s8a { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); left: 211px; overflow: visible; pointer-events: none; position: absolute; top: 354px; width: 50px; }",
    ".framer-Esaai .framer-1kiemz1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 117px); left: 967px; overflow: visible; pointer-events: none; position: absolute; top: 514px; width: 117px; }",
    ".framer-Esaai .framer-idf4eu { aspect-ratio: 1.4651162790697674 / 1; bottom: 315px; flex: none; height: var(--framer-aspect-ratio-supported, 86px); left: 46px; overflow: visible; pointer-events: none; position: absolute; width: 126px; }",
    ".framer-Esaai .framer-1kukpnw { aspect-ratio: 12 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; width: 480px; }",
    ".framer-Esaai .framer-1syui13 { aspect-ratio: 1.0754716981132075 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 106px); left: 1049px; overflow: visible; pointer-events: none; position: absolute; width: 114px; }",
    ".framer-Esaai .framer-1xm7wzq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 1178px; overflow: visible; pointer-events: none; position: absolute; top: 354px; width: 40px; }",
    ".framer-Esaai .framer-l088w2 { aspect-ratio: 1.2926829268292683 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 82px); left: 7px; overflow: visible; position: absolute; text-decoration: none; top: 4px; width: 106px; }",
    ".framer-Esaai .framer-1f2uk06 { aspect-ratio: 1.05 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 160px); left: 0px; overflow: visible; position: absolute; text-decoration: none; top: 448px; width: 168px; }",
    ".framer-Esaai .framer-y90uv { aspect-ratio: 3.8461538461538463 / 1; bottom: 637px; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 26px); left: 161px; overflow: visible; position: absolute; text-decoration: none; width: 100px; }",
    ".framer-Esaai .framer-4e9seg { aspect-ratio: 2.238095238095238 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); left: 313px; overflow: visible; pointer-events: none; position: absolute; top: 31px; width: 94px; z-index: 1; }",
    ".framer-Esaai .framer-1szatur { aspect-ratio: 1 / 1; bottom: 415px; flex: none; height: var(--framer-aspect-ratio-supported, 80px); left: 1119px; overflow: visible; pointer-events: none; position: absolute; width: 80px; z-index: 1; }",
    ".framer-Esaai .framer-1gtd705 { aspect-ratio: 1.0526315789473684 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 76px); left: 1078px; overflow: visible; pointer-events: none; position: absolute; top: 48%; transform: translateY(-50%); width: 80px; z-index: 1; }",
    ".framer-Esaai .framer-1egxdjg { flex: none; height: 1519px; left: calc(47.59036144578315% - 758px / 2); overflow: hidden; position: absolute; top: 37px; width: 758px; }",
    ".framer-Esaai .framer-1b2jiad { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 0px; flex: none; height: auto; left: 50%; pointer-events: none; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 757px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Esaai .framer-mj9bgg { aspect-ratio: 3.0659340659340657 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 132px); left: 51%; overflow: visible; pointer-events: none; position: absolute; top: 0px; transform: translateX(-50%); width: 406px; }",
    ".framer-Esaai .framer-18vflo1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 604px); left: 51%; overflow: visible; pointer-events: none; position: absolute; top: 224px; transform: translateX(-50%); width: 604px; }",
    ".framer-Esaai .framer-j0fhsf-container { flex: none; height: auto; left: 220px; position: absolute; top: 245px; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Esaai.framer-72rtr7, .framer-Esaai .framer-1vyfrru { gap: 0px; } .framer-Esaai.framer-72rtr7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Esaai.framer-72rtr7 > :first-child { margin-top: 0px; } .framer-Esaai.framer-72rtr7 > :last-child { margin-bottom: 0px; } .framer-Esaai .framer-1vyfrru > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-Esaai .framer-1vyfrru > :first-child { margin-left: 0px; } .framer-Esaai .framer-1vyfrru > :last-child { margin-right: 0px; } }",
    ...me,
    '.framer-Esaai[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-Esaai [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-Esaai[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-Esaai [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
    "@media (max-width: 809px) { .framer-Esaai.framer-72rtr7 { height: 854px; width: 390px; } .framer-Esaai .framer-y71vrp-container { bottom: 15px; right: 7px; } .framer-Esaai .framer-1qanxkr { height: 750px; left: calc(50.00000000000002% - 354px / 2); top: calc(50.00000000000002% - 750px / 2); width: 354px; } .framer-Esaai .framer-1vyfrru { gap: 10px; left: 13px; top: 60px; width: 314px; } .framer-Esaai .framer-1myp2xm { bottom: 18px; height: 620px; left: calc(50.00000000000002% - 347px / 2); width: 347px; } .framer-Esaai .framer-172l4yj { height: 1092px; left: calc(48.70317002881846% - 336px / 2); top: calc(83.38709677419357% - 1092px / 2); width: 336px; } .framer-Esaai .framer-el8gpp { height: 1063px; left: 0px; top: 0px; width: 345px; } .framer-Esaai .framer-fx03if { height: var(--framer-aspect-ratio-supported, 20px); left: 52%; top: 146px; transform: translateX(-50%); width: 20px; } .framer-Esaai .framer-4hlsih { height: var(--framer-aspect-ratio-supported, 21px); left: 245px; top: 48px; width: 21px; } .framer-Esaai .framer-15z8s8a { bottom: -14px; height: var(--framer-aspect-ratio-supported, 83px); left: 41px; top: unset; width: 83px; } .framer-Esaai .framer-1kiemz1 { bottom: 303px; height: var(--framer-aspect-ratio-supported, 51px); left: unset; right: -6px; top: unset; width: 51px; } .framer-Esaai .framer-idf4eu { bottom: 217px; height: var(--framer-aspect-ratio-supported, 38px); left: 225px; width: 55px; } .framer-Esaai .framer-1kukpnw { height: var(--framer-aspect-ratio-supported, 10px); left: 30px; right: unset; top: 13px; width: 125px; } .framer-Esaai .framer-1syui13 { bottom: 83px; height: var(--framer-aspect-ratio-supported, 46px); left: unset; right: -10px; width: 50px; } .framer-Esaai .framer-1xm7wzq { height: var(--framer-aspect-ratio-supported, 18px); left: unset; right: -8px; top: 365px; width: 18px; } .framer-Esaai .framer-l088w2 { height: var(--framer-aspect-ratio-supported, 69px); left: 46px; top: 2px; width: 89px; } .framer-Esaai .framer-1f2uk06 { height: var(--framer-aspect-ratio-supported, 69px); left: 16px; top: 47%; transform: translateY(-50%); width: 72px; } .framer-Esaai .framer-y90uv { bottom: 241px; height: var(--framer-aspect-ratio-supported, 11px); left: 43px; width: 44px; } .framer-Esaai .framer-4e9seg { height: var(--framer-aspect-ratio-supported, 18px); left: 289px; top: 81px; width: 41px; } .framer-Esaai .framer-1szatur { bottom: unset; height: var(--framer-aspect-ratio-supported, 36px); left: 50%; top: 49%; transform: translate(-50%, -50%); width: 36px; } .framer-Esaai .framer-1gtd705 { height: var(--framer-aspect-ratio-supported, 70px); left: 258px; mix-blend-mode: screen; top: 49%; width: 74px; } .framer-Esaai .framer-1egxdjg { height: 873px; left: calc(50.144092219020195% - 298px / 2); top: 61px; width: 298px; } .framer-Esaai .framer-1b2jiad { bottom: -64px; width: 287px; } .framer-Esaai .framer-mj9bgg { height: var(--framer-aspect-ratio-supported, 96px); left: 50%; width: 295px; } .framer-Esaai .framer-18vflo1 { height: var(--framer-aspect-ratio-supported, 292px); left: 50%; top: 142px; width: 292px; } .framer-Esaai .framer-j0fhsf-container { left: 36%; top: 36%; transform: translate(-50%, -50%); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Esaai .framer-1vyfrru { gap: 0px; } .framer-Esaai .framer-1vyfrru > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Esaai .framer-1vyfrru > :first-child { margin-left: 0px; } .framer-Esaai .framer-1vyfrru > :last-child { margin-right: 0px; } }}",
    "@media (min-width: 810px) and (max-width: 1919px) { .framer-Esaai.framer-72rtr7 { height: min-content; min-height: 1080px; width: 810px; } .framer-Esaai .framer-1qanxkr { aspect-ratio: 1.628691983122363 / 1; height: var(--framer-aspect-ratio-supported, 474px); left: 50%; top: 50%; transform: translate(-50%, -50%); width: 772px; } .framer-Esaai .framer-1vyfrru { gap: 10px; left: 13px; top: 53px; width: 314px; } .framer-Esaai .framer-1myp2xm { bottom: 23px; height: 350px; left: calc(50.00000000000002% - 762px / 2); width: 762px; } .framer-Esaai .framer-172l4yj { height: 1629px; left: calc(49.60629921259845% - 769px / 2); top: calc(211.1428571428571% - 1629px / 2); width: 769px; } .framer-Esaai .framer-el8gpp { height: 1500px; left: -1px; top: 6px; width: 746px; } .framer-Esaai .framer-fx03if { height: var(--framer-aspect-ratio-supported, 53px); left: 668px; width: 53px; } .framer-Esaai .framer-4hlsih { height: var(--framer-aspect-ratio-supported, 29px); left: 502px; width: 29px; } .framer-Esaai .framer-15z8s8a { height: var(--framer-aspect-ratio-supported, 30px); left: 128px; width: 30px; } .framer-Esaai .framer-1kiemz1 { height: var(--framer-aspect-ratio-supported, 71px); left: 586px; width: 71px; } .framer-Esaai .framer-idf4eu { height: var(--framer-aspect-ratio-supported, 52px); left: 28px; width: 76px; } .framer-Esaai .framer-1kukpnw { height: var(--framer-aspect-ratio-supported, 24px); left: 134px; right: unset; width: 291px; } .framer-Esaai .framer-1syui13 { bottom: 2px; height: var(--framer-aspect-ratio-supported, 65px); left: 648px; width: 70px; } .framer-Esaai .framer-1xm7wzq { height: var(--framer-aspect-ratio-supported, 24px); left: unset; right: -5px; width: 24px; } .framer-Esaai .framer-l088w2 { height: var(--framer-aspect-ratio-supported, 50px); left: 4px; width: 64px; } .framer-Esaai .framer-1f2uk06 { height: var(--framer-aspect-ratio-supported, 97px); width: 102px; } .framer-Esaai .framer-y90uv { height: var(--framer-aspect-ratio-supported, 16px); left: 97px; width: 61px; } .framer-Esaai .framer-4e9seg { height: var(--framer-aspect-ratio-supported, 25px); left: 190px; width: 56px; } .framer-Esaai .framer-1szatur { height: var(--framer-aspect-ratio-supported, 48px); left: 691px; width: 48px; } .framer-Esaai .framer-1gtd705 { height: var(--framer-aspect-ratio-supported, 47px); left: 666px; mix-blend-mode: screen; top: 48%; width: 49px; } .framer-Esaai .framer-1egxdjg { height: 1556px; left: 0px; top: 0px; width: 745px; } .framer-Esaai .framer-1b2jiad { bottom: 11px; width: 561px; } .framer-Esaai .framer-mj9bgg { height: var(--framer-aspect-ratio-supported, 155px); top: 9px; width: 474px; } .framer-Esaai .framer-j0fhsf-container { left: 20px; top: 245px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Esaai .framer-1vyfrru { gap: 0px; } .framer-Esaai .framer-1vyfrru > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Esaai .framer-1vyfrru > :first-child { margin-left: 0px; } .framer-Esaai .framer-1vyfrru > :last-child { margin-right: 0px; } }}",
  ],
  F = A(je, Xe, "framer-Esaai"),
  at = F;
F.displayName = "Home";
F.defaultProps = { height: 1080, width: 1920 };
C(
  F,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "W95FA Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/f7jD4by27JB9lH7vRVXRZSYPo0.woff2",
        },
        {
          family: "Abhaya Libre",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/abhayalibre/v17/e3tmeuGtX-Co5MNzeAOqinEgfkPWovdU4w.woff2",
          weight: "400",
        },
      ],
    },
    ...Ae,
    ...Ce,
    ...Re,
    ...oe(le),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var it = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "1920",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"EZJ2Ah9W5":{"layout":["fixed","fixed"]},"HzCHxNot0":{"layout":["fixed","auto"]}}}',
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "1080",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { it as __FramerMetadata__, at as default };
//# sourceMappingURL=qSpax7XEc9s02YQwj5eEa2jdEM1yR57Z-ovfpy_a354.26Y2EV6G.mjs.map
