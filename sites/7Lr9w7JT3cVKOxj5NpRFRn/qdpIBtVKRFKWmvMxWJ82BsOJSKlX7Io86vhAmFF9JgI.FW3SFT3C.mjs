import { a as w } from "./chunk-5HZSIDFR.mjs";
import { a as k, b as Z, c as X, d as U } from "./chunk-VZINQ5XF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as Q,
  Ba as O,
  N as K,
  Z as W,
  aa as q,
  ba as M,
  c as o,
  da as C,
  ea as P,
  fa as A,
  g as V,
  ia as s,
  ka as a,
  l as T,
  m as j,
  n as I,
  p as L,
  ra as E,
  t as e,
  u as p,
  va as i,
  wa as c,
  ya as t,
  z,
  za as S,
} from "./chunk-BC6VH6JS.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-VXMCXQ66.mjs";
import "./chunk-RIUMFBNJ.mjs";
var re = Q(k),
  ae = {
    E7IV_BsVa: "(min-width: 1920px)",
    juHEfs4qV: "(max-width: 809px)",
    r8tV49FKK: "(min-width: 810px) and (max-width: 1919px)",
  },
  D = () => typeof document < "u",
  ie = "framer-H0fNt",
  oe = {
    E7IV_BsVa: "framer-v-1eu2i7q",
    juHEfs4qV: "framer-v-owchsb",
    r8tV49FKK: "framer-v-28remv",
  },
  u = (d, n) => `translate(-50%, -50%) ${n}`,
  m = (d, n) => `translateX(-50%) ${n}`,
  se = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  Y = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: se,
  },
  J = (d, n) => `translateY(-50%) ${n}`,
  We = w(),
  ne = { Desktop: "E7IV_BsVa", Phone: "juHEfs4qV", Tablet: "r8tV49FKK" },
  le = ({ height: d, id: n, width: h, ...b }) => {
    var g, x;
    return {
      ...b,
      variant:
        (x = (g = ne[b.variant]) !== null && g !== void 0 ? g : b.variant) !==
          null && x !== void 0
          ? x
          : "E7IV_BsVa",
    };
  },
  fe = V(function (d, n) {
    let { activeLocale: h, setLocale: b } = K(),
      { style: g, className: x, layoutId: N, variant: B, ...G } = le(d);
    T(() => {
      let l = w(void 0, h);
      if (l.robots) {
        let f = document.querySelector('meta[name="robots"]');
        f
          ? f.setAttribute("content", l.robots)
          : ((f = document.createElement("meta")),
            f.setAttribute("name", "robots"),
            f.setAttribute("content", l.robots),
            document.head.appendChild(f));
      }
    }, [void 0, h]),
      I(() => {
        let l = w(void 0, h);
        if (((document.title = l.title || ""), l.viewport)) {
          var f;
          (f = document.querySelector('meta[name="viewport"]')) === null ||
            f === void 0 ||
            f.setAttribute("content", l.viewport);
        }
        let R = l.bodyClassName;
        if (R) {
          let v = document.body;
          v.classList.forEach(
            (F) => F.startsWith("framer-body-") && v.classList.remove(F)
          ),
            v.classList.add(`${l.bodyClassName}-framer-H0fNt`);
        }
        return () => {
          R &&
            document.body.classList.remove(`${l.bodyClassName}-framer-H0fNt`);
        };
      }, [void 0, h]);
    let [r, me] = E(B, ae, !1),
      ce = void 0,
      _ = W(ie, ...[U]),
      $ = L(null),
      ee = () => !D() || r === "juHEfs4qV",
      y = () => (D() ? r !== "juHEfs4qV" : !0),
      te = j();
    return (
      P({}),
      e(A.Provider, {
        value: { primaryVariantId: "E7IV_BsVa", variantClassNames: oe },
        children: p(z, {
          id: N ?? te,
          children: [
            p(i, {
              ...G,
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
              className: W(_, "framer-1eu2i7q", x),
              ref: n ?? $,
              style: { ...g },
              children: [
                e(i, {
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
                  className: "framer-1sl895h",
                  "data-framer-name": "noise",
                  name: "noise",
                }),
                e(a, {
                  breakpoint: r,
                  overrides: { juHEfs4qV: { y: 632 } },
                  children: e(q, {
                    height: 207,
                    width: "189px",
                    y: -282,
                    children: e(M, {
                      className: "framer-17187cu-container",
                      children: e(k, {
                        height: "100%",
                        id: "PFxX2tNFa",
                        layoutId: "PFxX2tNFa",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(a, {
                  breakpoint: r,
                  overrides: {
                    juHEfs4qV: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: t(52.00000000000017),
                        pixelHeight: 750,
                        pixelWidth: 354,
                        sizes: "354px",
                        src: "https://framerusercontent.com/images/9p292XQceiVgkJvi2TOVZ2zj5I.png",
                        srcSet:
                          "https://framerusercontent.com/images/9p292XQceiVgkJvi2TOVZ2zj5I.png 354w",
                      },
                    },
                    r8tV49FKK: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: t(-237),
                        pixelHeight: 830,
                        pixelWidth: 1348,
                        sizes: "772px",
                        src: "https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png",
                        srcSet:
                          "https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png?scale-down-to=512 512w,https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png 1348w",
                      },
                      transformTemplate: u,
                    },
                  },
                  children: p(i, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: t(-414),
                      pixelHeight: 830,
                      pixelWidth: 1348,
                      sizes: "1348px",
                      src: "https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png",
                      srcSet:
                        "https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png?scale-down-to=512 512w,https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/C5aaGaMUeATWpW6P3I2dGLHx4.png 1348w",
                    },
                    className: "framer-1fw7vpz",
                    children: [
                      p("div", {
                        className: "framer-1ub6l2u",
                        children: [
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              juHEfs4qV: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(s, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "Pd_zfxLFt",
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
                              r8tV49FKK: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(s, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "Pd_zfxLFt",
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
                            children: e(c, {
                              __fromCanvasComponent: !0,
                              children: e(o, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                  },
                                  children: e(s, {
                                    href: { webPageId: "augiA20Il" },
                                    nodeId: "Pd_zfxLFt",
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
                              className: "framer-f6alkv",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              juHEfs4qV: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "aAGgQCaw8" },
                                      nodeId: "OUf2kBFnf",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Play2",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              r8tV49FKK: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "aAGgQCaw8" },
                                      nodeId: "OUf2kBFnf",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "Play2",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(c, {
                              __fromCanvasComponent: !0,
                              children: e(o, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-color": "rgb(0, 0, 255)",
                                  },
                                  children: e(s, {
                                    href: { webPageId: "aAGgQCaw8" },
                                    nodeId: "OUf2kBFnf",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1491jsp",
                                      "data-styles-preset": "a4wMR6OXt",
                                      children: "Play2",
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-1mipjz",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              juHEfs4qV: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(s, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "e0_js5Vh9",
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
                              r8tV49FKK: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(s, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "e0_js5Vh9",
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
                            children: e(c, {
                              __fromCanvasComponent: !0,
                              children: e(o, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                  },
                                  children: e(s, {
                                    href: { webPageId: "wkg8xGODr" },
                                    nodeId: "e0_js5Vh9",
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
                              className: "framer-1nayhw1",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              juHEfs4qV: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "MQLJRONCy",
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
                              r8tV49FKK: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "MQLJRONCy",
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
                            children: e(c, {
                              __fromCanvasComponent: !0,
                              children: e(o, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(s, {
                                    href: { webPageId: "rXmFTlZAf" },
                                    nodeId: "MQLJRONCy",
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
                              className: "framer-1qysjqy",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              juHEfs4qV: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "Z9Wniztwx",
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
                              r8tV49FKK: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "Z9Wniztwx",
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
                            children: e(c, {
                              __fromCanvasComponent: !0,
                              children: e(o, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(s, {
                                    href: { webPageId: "fQwylL6Ek" },
                                    nodeId: "Z9Wniztwx",
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
                              className: "framer-35w8kk",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              juHEfs4qV: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "FVEMS5VK5" },
                                      nodeId: "TNq2J1P_p",
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
                              r8tV49FKK: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(s, {
                                      href: { webPageId: "FVEMS5VK5" },
                                      nodeId: "TNq2J1P_p",
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
                            children: e(c, {
                              __fromCanvasComponent: !0,
                              children: e(o, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(s, {
                                    href: { webPageId: "FVEMS5VK5" },
                                    nodeId: "TNq2J1P_p",
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
                              className: "framer-1apfemj",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-1be3evs",
                        children: p("div", {
                          className: "framer-1416e5p",
                          children: [
                            p("div", {
                              className: "framer-12idkjx",
                              "data-framer-name": "bottom half",
                              name: "bottom half",
                              children: [
                                e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    juHEfs4qV: {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(-140.49999999999955),
                                        pixelHeight: 164,
                                        pixelWidth: 163,
                                        positionX: "left",
                                        positionY: "top",
                                        src: "https://framerusercontent.com/images/Le1SCcsOaOsc2goYJU08zzEKZHk.png",
                                      },
                                    },
                                    r8tV49FKK: {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(356.5000000000001),
                                        pixelHeight: 164,
                                        pixelWidth: 163,
                                        positionX: "left",
                                        positionY: "top",
                                        src: "https://framerusercontent.com/images/Le1SCcsOaOsc2goYJU08zzEKZHk.png",
                                      },
                                    },
                                  },
                                  children: e(i, {
                                    background: {
                                      alt: "",
                                      backgroundSize: 1.5,
                                      fit: "tile",
                                      loading: t(349),
                                      pixelHeight: 164,
                                      pixelWidth: 163,
                                      positionX: "left",
                                      positionY: "top",
                                      src: "https://framerusercontent.com/images/Le1SCcsOaOsc2goYJU08zzEKZHk.png",
                                    },
                                    className: "framer-1qiw1c0",
                                    "data-framer-name": "bg",
                                    name: "bg",
                                  }),
                                }),
                                p("div", {
                                  className: "framer-1vvg8jn",
                                  children: [
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 250,
                                            intrinsicWidth: 256,
                                            loading: t(-127.99999999999977),
                                            pixelHeight: 250,
                                            pixelWidth: 256,
                                            src: "https://framerusercontent.com/images/HlYUgkrsnZcWcnCHH64pJWLTM.gif",
                                          },
                                          transformTemplate: m,
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 250,
                                            intrinsicWidth: 256,
                                            loading: t(444.5000000000001),
                                            pixelHeight: 250,
                                            pixelWidth: 256,
                                            src: "https://framerusercontent.com/images/HlYUgkrsnZcWcnCHH64pJWLTM.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 250,
                                          intrinsicWidth: 256,
                                          loading: t(293.0000000000002),
                                          pixelHeight: 250,
                                          pixelWidth: 256,
                                          src: "https://framerusercontent.com/images/HlYUgkrsnZcWcnCHH64pJWLTM.gif",
                                        },
                                        className: "framer-13oygjl",
                                        "data-framer-name": "logo",
                                        name: "logo",
                                        transformTemplate: u,
                                      }),
                                    }),
                                    e(s, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "j2CBvMgFh",
                                      children: e("a", {
                                        className:
                                          "framer-1tr0jpm framer-bmragn",
                                        "data-border": !0,
                                        "data-framer-name": "button",
                                        name: "button",
                                        children: e(a, {
                                          breakpoint: r,
                                          overrides: {
                                            juHEfs4qV: {
                                              children: e(o, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TmV3c3JlYWRlci1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Newsreader", "Newsreader Placeholder", serif',
                                                    "--framer-font-size":
                                                      "18px",
                                                    "--framer-text-color":
                                                      "rgb(236, 99, 83)",
                                                  },
                                                  children: "Rankings",
                                                }),
                                              }),
                                            },
                                          },
                                          children: e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(o, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TmV3c3JlYWRlci1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Newsreader", "Newsreader Placeholder", serif',
                                                  "--framer-font-size": "22px",
                                                  "--framer-text-color":
                                                    "rgb(236, 99, 83)",
                                                },
                                                children: "Rankings",
                                              }),
                                            }),
                                            className: "framer-174zjii",
                                            fonts: ["GF;Newsreader-regular"],
                                            transformTemplate: u,
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 120.00000317891447,
                                            intrinsicWidth: 160.00000423855263,
                                            loading: t(-105.99999999999977),
                                            pixelHeight: 108,
                                            pixelWidth: 144,
                                            src: "https://framerusercontent.com/images/CC7qT4DpcKgUtY28zZhe3QQpU.gif",
                                          },
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 120.00000317891447,
                                            intrinsicWidth: 160.00000423855263,
                                            loading: t(713),
                                            pixelHeight: 108,
                                            pixelWidth: 144,
                                            src: "https://framerusercontent.com/images/CC7qT4DpcKgUtY28zZhe3QQpU.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 120.00000317891447,
                                          intrinsicWidth: 160.00000423855263,
                                          loading: t(416),
                                          pixelHeight: 108,
                                          pixelWidth: 144,
                                          src: "https://framerusercontent.com/images/CC7qT4DpcKgUtY28zZhe3QQpU.gif",
                                        },
                                        className: "framer-1r2xl3m",
                                        "data-framer-name": "4",
                                        name: "4",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: t(278.00000000000045),
                                            pixelHeight: 501,
                                            pixelWidth: 500,
                                            src: "https://framerusercontent.com/images/EeaOxFYDpPykunogSlaDt2BYZY0.png",
                                          },
                                          transformTemplate: u,
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: t(580),
                                            pixelHeight: 501,
                                            pixelWidth: 500,
                                            src: "https://framerusercontent.com/images/EeaOxFYDpPykunogSlaDt2BYZY0.png",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: t(502),
                                          pixelHeight: 501,
                                          pixelWidth: 500,
                                          src: "https://framerusercontent.com/images/EeaOxFYDpPykunogSlaDt2BYZY0.png",
                                        },
                                        className: "framer-1dsyq1l",
                                        "data-border": !0,
                                        "data-framer-name": "option 1",
                                        name: "option 1",
                                        whileHover: Y,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: t(508.0000000000002),
                                            pixelHeight: 200,
                                            pixelWidth: 600,
                                            sizes: "190px",
                                            src: "https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png",
                                            srcSet:
                                              "https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png 600w",
                                          },
                                          transformTemplate: m,
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: t(580),
                                            pixelHeight: 200,
                                            pixelWidth: 600,
                                            sizes: "218px",
                                            src: "https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png",
                                            srcSet:
                                              "https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png 600w",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: t(502),
                                          pixelHeight: 200,
                                          pixelWidth: 600,
                                          sizes: "410px",
                                          src: "https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png",
                                          srcSet:
                                            "https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/NJOAZxJAFL6n3s9StUqo4y2XlQ.png 600w",
                                        },
                                        className: "framer-w9ihi4",
                                        "data-border": !0,
                                        "data-framer-name": "option 2",
                                        name: "option 2",
                                        whileHover: Y,
                                      }),
                                    }),
                                    ee() &&
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          juHEfs4qV: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 70,
                                              intrinsicWidth: 105,
                                              loading: t(444.0000000000002),
                                              pixelHeight: 70,
                                              pixelWidth: 105,
                                              src: "https://framerusercontent.com/images/WCvyVFqsP7cm7yPrqyVjwDdcO8.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 70,
                                            intrinsicWidth: 105,
                                            pixelHeight: 70,
                                            pixelWidth: 105,
                                            src: "https://framerusercontent.com/images/WCvyVFqsP7cm7yPrqyVjwDdcO8.gif",
                                          },
                                          className:
                                            "framer-ngun4 hidden-1eu2i7q hidden-28remv",
                                          "data-framer-name": "vs",
                                          name: "vs",
                                          transformTemplate: m,
                                        }),
                                      }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(242.00611792989616),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(776),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 111.11111405455044,
                                          intrinsicWidth: 88.88889124364034,
                                          loading: t(839),
                                          pixelHeight: 100,
                                          pixelWidth: 80,
                                          src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                        },
                                        className: "framer-ye9d42",
                                        "data-framer-name": "3",
                                        name: "3",
                                        style: { rotate: 18 },
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(-87.99999999999977),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(567),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 133.33333686546052,
                                          intrinsicWidth: 177.7777824872807,
                                          loading: t(405),
                                          pixelHeight: 120,
                                          pixelWidth: 160,
                                          src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                        },
                                        className: "framer-13yknln",
                                        "data-framer-name": "1",
                                        name: "1",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(180.00000000000023),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(564),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 133.33333686546052,
                                          intrinsicWidth: 177.7777824872807,
                                          loading: t(412),
                                          pixelHeight: 120,
                                          pixelWidth: 160,
                                          src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                        },
                                        className: "framer-15ilmtv",
                                        "data-framer-name": "1",
                                        name: "1",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 234.44445065510143,
                                            intrinsicWidth: 555.5555702727522,
                                            loading: t(189.00000000000023),
                                            pixelHeight: 211,
                                            pixelWidth: 500,
                                            src: "https://framerusercontent.com/images/NFggO88PZKYooqbQr7boN6mlc.gif",
                                          },
                                          transformTemplate: void 0,
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 234.44445065510143,
                                            intrinsicWidth: 555.5555702727522,
                                            loading: t(683),
                                            pixelHeight: 211,
                                            pixelWidth: 500,
                                            src: "https://framerusercontent.com/images/NFggO88PZKYooqbQr7boN6mlc.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 234.44445065510143,
                                          intrinsicWidth: 555.5555702727522,
                                          loading: t(891),
                                          pixelHeight: 211,
                                          pixelWidth: 500,
                                          src: "https://framerusercontent.com/images/NFggO88PZKYooqbQr7boN6mlc.gif",
                                        },
                                        className: "framer-14lluzc",
                                        "data-framer-name": "2",
                                        name: "2",
                                        transformTemplate: m,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(561.9914814623005),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(776),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 111.11111405455044,
                                          intrinsicWidth: 88.88889124364034,
                                          loading: t(859),
                                          pixelHeight: 100,
                                          pixelWidth: 80,
                                          src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                        },
                                        className: "framer-1prbtaq",
                                        "data-framer-name": "3",
                                        name: "3",
                                        style: { rotate: -15 },
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        juHEfs4qV: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 648.8889060785746,
                                            intrinsicWidth: 1156.66669730787,
                                            loading: t(803.0000000000002),
                                            pixelHeight: 584,
                                            pixelWidth: 1041,
                                            sizes: "290px",
                                            src: "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png",
                                            srcSet:
                                              "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=512 512w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png 1041w",
                                          },
                                        },
                                        r8tV49FKK: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 648.8889060785746,
                                            intrinsicWidth: 1156.66669730787,
                                            loading: t(597),
                                            pixelHeight: 584,
                                            pixelWidth: 1041,
                                            sizes: "453px",
                                            src: "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png",
                                            srcSet:
                                              "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=512 512w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png 1041w",
                                          },
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 648.8889060785746,
                                          intrinsicWidth: 1156.66669730787,
                                          loading: t(664),
                                          pixelHeight: 584,
                                          pixelWidth: 1041,
                                          sizes: "574px",
                                          src: "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png",
                                          srcSet:
                                            "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=512 512w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png 1041w",
                                        },
                                        className: "framer-ph6o9k",
                                        "data-framer-name": "logo 2",
                                        name: "logo 2",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y() &&
                              p("div", {
                                className: "framer-1mzyl7l hidden-owchsb",
                                "data-framer-name": "top half",
                                name: "top half",
                                children: [
                                  e(a, {
                                    breakpoint: r,
                                    overrides: {
                                      r8tV49FKK: {
                                        background: {
                                          alt: "",
                                          backgroundSize: 1.5,
                                          fit: "tile",
                                          loading: t(-152.99999999999983),
                                          pixelHeight: 418,
                                          pixelWidth: 416,
                                          positionX: "left",
                                          positionY: "top",
                                          src: "https://framerusercontent.com/images/Zg2VKTfF1lIriBQapfOg6MYmUZo.png",
                                        },
                                      },
                                    },
                                    children: e(i, {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(-250),
                                        pixelHeight: 418,
                                        pixelWidth: 416,
                                        positionX: "left",
                                        positionY: "top",
                                        src: "https://framerusercontent.com/images/Zg2VKTfF1lIriBQapfOg6MYmUZo.png",
                                      },
                                      className: "framer-1msbca2",
                                      "data-framer-name": "top bg",
                                      name: "top bg",
                                    }),
                                  }),
                                  p("div", {
                                    className: "framer-nnrgvs",
                                    children: [
                                      e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(o, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TmV3c3JlYWRlci02MDBpdGFsaWM=",
                                              "--framer-font-family":
                                                '"Newsreader", "Newsreader Placeholder", serif',
                                              "--framer-font-size": "63px",
                                              "--framer-font-style": "italic",
                                              "--framer-font-weight": "600",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "TO THE END",
                                          }),
                                        }),
                                        className: "framer-u4n6zv",
                                        fonts: ["GF;Newsreader-600italic"],
                                        transformTemplate: m,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 124.4444477410965,
                                              intrinsicWidth: 124.4444477410965,
                                              loading: t(-123),
                                              pixelHeight: 112,
                                              pixelWidth: 112,
                                              src: "https://framerusercontent.com/images/NLBiah4LLpBHsBmLigx7TZTt6A.gif",
                                            },
                                            transformTemplate: m,
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 124.4444477410965,
                                            intrinsicWidth: 124.4444477410965,
                                            loading: t(-238),
                                            pixelHeight: 112,
                                            pixelWidth: 112,
                                            src: "https://framerusercontent.com/images/NLBiah4LLpBHsBmLigx7TZTt6A.gif",
                                          },
                                          className: "framer-1jmaybp",
                                          "data-framer-name": "Top",
                                          name: "Top",
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 111.11111405455044,
                                              intrinsicWidth: 88.88889124364034,
                                              loading: t(95.00000000000011),
                                              pixelHeight: 100,
                                              pixelWidth: 80,
                                              src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                            },
                                            transformTemplate: J,
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(178.0000000000001),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                          className: "framer-839svg",
                                          "data-framer-name": "14",
                                          name: "14",
                                          style: { rotate: 36 },
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 144.44444827091556,
                                              intrinsicWidth: 587.7777933485718,
                                              loading: t(-100),
                                              pixelHeight: 130,
                                              pixelWidth: 529,
                                              sizes: "588px",
                                              src: "https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif",
                                              srcSet:
                                                "https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif?scale-down-to=512 512w,https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif 529w",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 144.44444827091556,
                                            intrinsicWidth: 587.7777933485718,
                                            loading: t(-197),
                                            pixelHeight: 130,
                                            pixelWidth: 529,
                                            sizes: "588px",
                                            src: "https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif",
                                            srcSet:
                                              "https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif?scale-down-to=512 512w,https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif 529w",
                                          },
                                          className: "framer-1ffft6r",
                                          "data-framer-name": "3",
                                          name: "3",
                                          transformTemplate: m,
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 155.55555967637062,
                                              intrinsicWidth: 131.11111458436952,
                                              loading: t(52.500000000000114),
                                              pixelHeight: 140,
                                              pixelWidth: 118,
                                              src: "https://framerusercontent.com/images/tav29fDVCGFhguIEaoxfl458.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 155.55555967637062,
                                            intrinsicWidth: 131.11111458436952,
                                            loading: t(-44.499999999999886),
                                            pixelHeight: 140,
                                            pixelWidth: 118,
                                            src: "https://framerusercontent.com/images/tav29fDVCGFhguIEaoxfl458.gif",
                                          },
                                          className: "framer-7iw7ff",
                                          "data-framer-name": "35",
                                          name: "35",
                                          transformTemplate: u,
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 142.22222598982455,
                                              intrinsicWidth: 72.22222413545778,
                                              loading: t(-87),
                                              pixelHeight: 128,
                                              pixelWidth: 65,
                                              src: "https://framerusercontent.com/images/bToqA26lB1PFgo4i103m9DMnpQ.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 142.22222598982455,
                                            intrinsicWidth: 72.22222413545778,
                                            loading: t(-184),
                                            pixelHeight: 128,
                                            pixelWidth: 65,
                                            src: "https://framerusercontent.com/images/bToqA26lB1PFgo4i103m9DMnpQ.gif",
                                          },
                                          className: "framer-1qt00qj",
                                          "data-framer-name": "32",
                                          name: "32",
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 142.22222598982455,
                                              intrinsicWidth: 72.22222413545778,
                                              loading: t(-87),
                                              pixelHeight: 128,
                                              pixelWidth: 65,
                                              src: "https://framerusercontent.com/images/bToqA26lB1PFgo4i103m9DMnpQ.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 142.22222598982455,
                                            intrinsicWidth: 72.22222413545778,
                                            loading: t(-184),
                                            pixelHeight: 128,
                                            pixelWidth: 65,
                                            src: "https://framerusercontent.com/images/bToqA26lB1PFgo4i103m9DMnpQ.gif",
                                          },
                                          className: "framer-wetq4y",
                                          "data-framer-name": "32",
                                          name: "32",
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 148.8888928330976,
                                              intrinsicWidth: 103.3333360707319,
                                              loading: t(133),
                                              pixelHeight: 134,
                                              pixelWidth: 93,
                                              src: "https://framerusercontent.com/images/Dgna6nWMoFuFcpkdJ4qInmfmPg.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 148.8888928330976,
                                            intrinsicWidth: 103.3333360707319,
                                            loading: t(146),
                                            pixelHeight: 134,
                                            pixelWidth: 93,
                                            src: "https://framerusercontent.com/images/Dgna6nWMoFuFcpkdJ4qInmfmPg.gif",
                                          },
                                          className: "framer-wutrx9",
                                          "data-framer-name": "40",
                                          name: "40",
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 83.33333554091283,
                                              intrinsicWidth: 83.33333554091283,
                                              loading: t(-115),
                                              pixelHeight: 75,
                                              pixelWidth: 75,
                                              src: "https://framerusercontent.com/images/4RD06KZZcbIlHFwqlCzMjoERHA.gif",
                                            },
                                            transformTemplate: void 0,
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 83.33333554091283,
                                            intrinsicWidth: 83.33333554091283,
                                            loading: t(-2.4999999999998863),
                                            pixelHeight: 75,
                                            pixelWidth: 75,
                                            src: "https://framerusercontent.com/images/4RD06KZZcbIlHFwqlCzMjoERHA.gif",
                                          },
                                          className: "framer-ujqy2d",
                                          "data-framer-name": "20",
                                          name: "20",
                                          transformTemplate: J,
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 35.55555649745614,
                                              intrinsicWidth: 104.4444472112774,
                                              loading: t(321),
                                              pixelHeight: 32,
                                              pixelWidth: 94,
                                              src: "https://framerusercontent.com/images/yNDg26SzORmtofQNpQ6J0B1PUk.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 35.55555649745614,
                                            intrinsicWidth: 104.4444472112774,
                                            loading: t(224),
                                            pixelHeight: 32,
                                            pixelWidth: 94,
                                            src: "https://framerusercontent.com/images/yNDg26SzORmtofQNpQ6J0B1PUk.gif",
                                          },
                                          className: "framer-mc4gxo",
                                          "data-framer-name": "24",
                                          name: "24",
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 172.2222267845532,
                                              intrinsicWidth: 208.8888944225548,
                                              loading: t(250),
                                              pixelHeight: 155,
                                              pixelWidth: 188,
                                              src: "https://framerusercontent.com/images/RGq5O9dlQMe5giRDx6JAfp5DGA.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 172.2222267845532,
                                            intrinsicWidth: 208.8888944225548,
                                            loading: t(152),
                                            pixelHeight: 155,
                                            pixelWidth: 188,
                                            src: "https://framerusercontent.com/images/RGq5O9dlQMe5giRDx6JAfp5DGA.gif",
                                          },
                                          className: "framer-1bdjj0d",
                                          "data-framer-name": "8",
                                          name: "8",
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 135.55555914655153,
                                              intrinsicWidth: 391.11112147201754,
                                              loading: t(-108),
                                              pixelHeight: 122,
                                              pixelWidth: 352,
                                              src: "https://framerusercontent.com/images/oGDzfPLy27g6c6RPLv5T4ABc.png",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 135.55555914655153,
                                            intrinsicWidth: 391.11112147201754,
                                            loading: t(-205),
                                            pixelHeight: 122,
                                            pixelWidth: 352,
                                            src: "https://framerusercontent.com/images/oGDzfPLy27g6c6RPLv5T4ABc.png",
                                          },
                                          className: "framer-12355",
                                          "data-framer-name": "6",
                                          name: "6",
                                          transformTemplate: m,
                                        }),
                                      }),
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          r8tV49FKK: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 55.55555702727522,
                                              intrinsicWidth: 147.77778169255208,
                                              loading: t(148),
                                              pixelHeight: 50,
                                              pixelWidth: 133,
                                              src: "https://framerusercontent.com/images/DNckZVH1sbun4f4viWTGFZZOhI.gif",
                                            },
                                          },
                                        },
                                        children: e(i, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 55.55555702727522,
                                            intrinsicWidth: 147.77778169255208,
                                            loading: t(51.375),
                                            pixelHeight: 50,
                                            pixelWidth: 133,
                                            src: "https://framerusercontent.com/images/DNckZVH1sbun4f4viWTGFZZOhI.gif",
                                          },
                                          className: "framer-1p14ftq",
                                          "data-framer-name": "44",
                                          name: "44",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      e(a, {
                        breakpoint: r,
                        overrides: {
                          juHEfs4qV: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 46.666667902911186,
                              intrinsicWidth: 630.000016689301,
                              loading: t(769.0000000000002),
                              pixelHeight: 42,
                              pixelWidth: 567,
                              sizes: "347px",
                              src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                              srcSet:
                                "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                            },
                            transformTemplate: m,
                          },
                          r8tV49FKK: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 46.666667902911186,
                              intrinsicWidth: 630.000016689301,
                              loading: t(196.06687898089172),
                              pixelHeight: 42,
                              pixelWidth: 567,
                              sizes: "379.2156px",
                              src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                              srcSet:
                                "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                            },
                          },
                        },
                        children: e(i, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 46.666667902911186,
                            intrinsicWidth: 630.000016689301,
                            loading: t(347),
                            pixelHeight: 42,
                            pixelWidth: 567,
                            sizes: "664px",
                            src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                            srcSet:
                              "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                          },
                          className: "framer-17061nl",
                          "data-framer-name": "100",
                          name: "100",
                        }),
                      }),
                      y() &&
                        e(a, {
                          breakpoint: r,
                          overrides: {
                            r8tV49FKK: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 46.666667902911186,
                                intrinsicWidth: 630.000016689301,
                                loading: t(195.4968152866242),
                                pixelHeight: 42,
                                pixelWidth: 567,
                                sizes: "388.9244px",
                                src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                                srcSet:
                                  "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                              },
                            },
                          },
                          children: e(i, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 46.666667902911186,
                              intrinsicWidth: 630.000016689301,
                              loading: t(347),
                              pixelHeight: 42,
                              pixelWidth: 567,
                              sizes: "681px",
                              src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                              srcSet:
                                "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                            },
                            className: "framer-g9xktu hidden-owchsb",
                            "data-framer-name": "100",
                            name: "100",
                          }),
                        }),
                      e(a, {
                        breakpoint: r,
                        overrides: {
                          juHEfs4qV: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 46.666667902911186,
                              intrinsicWidth: 630.000016689301,
                              loading: t(146.00000000000017),
                              pixelHeight: 42,
                              pixelWidth: 567,
                              sizes: "347px",
                              src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                              srcSet:
                                "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                            },
                            transformTemplate: m,
                          },
                          r8tV49FKK: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 46.666667902911186,
                              intrinsicWidth: 630.000016689301,
                              loading: t(-156),
                              pixelHeight: 42,
                              pixelWidth: 567,
                              sizes: "379.2156px",
                              src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                              srcSet:
                                "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                            },
                          },
                        },
                        children: e(i, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 46.666667902911186,
                            intrinsicWidth: 630.000016689301,
                            loading: t(-271),
                            pixelHeight: 42,
                            pixelWidth: 567,
                            sizes: "664.272px",
                            src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                            srcSet:
                              "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                          },
                          className: "framer-zd57sw",
                          "data-framer-name": "100",
                          name: "100",
                        }),
                      }),
                      y() &&
                        e(a, {
                          breakpoint: r,
                          overrides: {
                            r8tV49FKK: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 46.666667902911186,
                                intrinsicWidth: 630.000016689301,
                                loading: t(-156),
                                pixelHeight: 42,
                                pixelWidth: 567,
                                sizes: "389.4955px",
                                src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                                srcSet:
                                  "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                              },
                            },
                          },
                          children: e(i, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 46.666667902911186,
                              intrinsicWidth: 630.000016689301,
                              loading: t(-271),
                              pixelHeight: 42,
                              pixelWidth: 567,
                              sizes: "682px",
                              src: "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif",
                              srcSet:
                                "https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/QPzCWliy8pyaMoKatujLRfbbgg.gif 567w",
                            },
                            className: "framer-ubcjtf hidden-owchsb",
                            "data-framer-name": "100",
                            name: "100",
                          }),
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
  pe = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-H0fNt.framer-bmragn, .framer-H0fNt .framer-bmragn { display: block; }",
    ".framer-H0fNt.framer-1eu2i7q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 1080px; overflow: visible; padding: 0px; position: relative; width: 1920px; }",
    ".framer-H0fNt .framer-1sl895h { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; opacity: 0.12; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 3; }",
    ".framer-H0fNt .framer-17187cu-container { aspect-ratio: 0.9110169491525424 / 1; bottom: 75px; flex: none; height: var(--framer-aspect-ratio-supported, 207px); position: absolute; right: 37px; width: 189px; z-index: 2; }",
    ".framer-H0fNt .framer-1fw7vpz { flex: none; height: 828px; left: calc(50.00000000000002% - 1348px / 2); overflow: visible; position: absolute; top: calc(44.53703703703706% - 828px / 2); width: 1348px; z-index: 1; }",
    ".framer-H0fNt .framer-1ub6l2u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; left: 6px; opacity: 0.8; overflow: hidden; padding: 0px; position: absolute; top: 97px; width: 464px; }",
    ".framer-H0fNt .framer-f6alkv, .framer-H0fNt .framer-1mipjz, .framer-H0fNt .framer-1nayhw1, .framer-H0fNt .framer-1qysjqy, .framer-H0fNt .framer-35w8kk, .framer-H0fNt .framer-1apfemj { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-H0fNt .framer-1be3evs { bottom: 36px; flex: none; height: 615px; left: calc(50.00000000000002% - 1334px / 2); overflow: auto; position: absolute; width: 1334px; }",
    ".framer-H0fNt .framer-1416e5p { flex: none; height: 1228px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-H0fNt .framer-12idkjx { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; top: 611px; width: 1318px; }",
    ".framer-H0fNt .framer-1qiw1c0 { flex: none; height: 642px; left: 0px; overflow: hidden; position: absolute; top: -25px; width: 1334px; z-index: 0; }",
    ".framer-H0fNt .framer-1vvg8jn { bottom: -21px; flex: none; left: -20px; overflow: hidden; position: absolute; right: -26px; top: -308px; }",
    ".framer-H0fNt .framer-13oygjl { aspect-ratio: 1.024 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 446px); left: 51%; overflow: visible; position: absolute; top: 48%; transform: translate(-50%, -50%); width: 457px; }",
    ".framer-H0fNt .framer-1tr0jpm { --border-bottom-width: 2px; --border-color: var(--token-8cc5dcc3-b8e9-433a-9df9-ccbcecd8ae91, #261d18); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #692c26; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 43px; left: 1127px; overflow: hidden; position: absolute; text-decoration: none; top: 354px; width: 141px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-H0fNt .framer-174zjii { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 53%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-H0fNt .framer-1r2xl3m { aspect-ratio: 1.3333333333333335 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 65px); left: 351px; overflow: visible; position: absolute; top: 350px; width: 87px; }",
    ".framer-H0fNt .framer-1dsyq1l { --border-bottom-width: 10px; --border-color: var(--token-8cc5dcc3-b8e9-433a-9df9-ccbcecd8ae91, #261d18); --border-left-width: 10px; --border-right-width: 10px; --border-style: solid; --border-top-width: 10px; aspect-ratio: 1 / 1; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: 100px; box-shadow: 0px 0px 30px 4px #7a0f0f; flex: none; height: var(--framer-aspect-ratio-supported, 410px); left: 94px; overflow: hidden; position: absolute; width: 410px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-H0fNt .framer-w9ihi4 { --border-bottom-width: 10px; --border-color: var(--token-8cc5dcc3-b8e9-433a-9df9-ccbcecd8ae91, #261d18); --border-left-width: 10px; --border-right-width: 10px; --border-style: solid; --border-top-width: 10px; aspect-ratio: 1 / 1; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: 100px; box-shadow: 0px 0px 30px 4px #7a0f0f; flex: none; height: var(--framer-aspect-ratio-supported, 410px); left: 856px; overflow: hidden; position: absolute; width: 410px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-H0fNt .framer-ngun4 { -webkit-filter: drop-shadow(0px 0px 5px rgba(255, 0, 0, 0.83)); aspect-ratio: 1.5 / 1; bottom: 441px; filter: drop-shadow(0px 0px 5px rgba(255, 0, 0, 0.83)); flex: none; height: var(--framer-aspect-ratio-supported, 92px); left: 49%; overflow: visible; position: absolute; transform: translateX(-50%); width: 138px; }",
    ".framer-H0fNt .framer-ye9d42 { aspect-ratio: 0.7999999999999999 / 1; bottom: 33px; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 19px; overflow: visible; position: absolute; width: 112px; }",
    ".framer-H0fNt .framer-13yknln { aspect-ratio: 1.3383458646616542 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 133px); left: 1175px; overflow: visible; pointer-events: none; position: absolute; top: 339px; width: 178px; }",
    ".framer-H0fNt .framer-15ilmtv { aspect-ratio: 1.3383458646616542 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 133px); left: 9px; overflow: visible; pointer-events: none; position: absolute; top: 346px; width: 178px; }",
    ".framer-H0fNt .framer-14lluzc { aspect-ratio: 2.3696682464454977 / 1; bottom: 53px; flex: none; height: var(--framer-aspect-ratio-supported, 68px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 162px; }",
    ".framer-H0fNt .framer-1prbtaq { aspect-ratio: 0.7999999999999999 / 1; bottom: 13px; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 1235px; overflow: visible; position: absolute; width: 112px; }",
    ".framer-H0fNt .framer-ph6o9k { -webkit-user-select: none; bottom: 2px; flex: none; height: 346px; left: calc(49.706744868035216% - 574px / 2); overflow: visible; position: absolute; user-select: none; width: 574px; }",
    ".framer-H0fNt .framer-1mzyl7l { bottom: 613px; flex: none; left: 0px; overflow: hidden; position: absolute; right: -2px; top: 0px; }",
    ".framer-H0fNt .framer-1msbca2 { flex: none; height: 624px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -13px; }",
    ".framer-H0fNt .framer-nnrgvs { flex: none; height: 576px; left: -67px; overflow: hidden; position: absolute; top: -1px; width: 1347px; }",
    ".framer-H0fNt .framer-u4n6zv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 186px; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-H0fNt .framer-1jmaybp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 123px); left: 1022px; overflow: visible; position: absolute; top: 0px; width: 123px; }",
    ".framer-H0fNt .framer-839svg { aspect-ratio: 0.7999999999999999 / 1; bottom: 20px; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 31px; overflow: visible; position: absolute; width: 112px; }",
    ".framer-H0fNt .framer-1ffft6r { aspect-ratio: 4.069230769230769 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 144px); left: 50%; overflow: hidden; position: absolute; top: 41px; transform: translateX(-50%); width: 588px; }",
    ".framer-H0fNt .framer-7iw7ff { aspect-ratio: 0.8428571428571429 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 157px); left: 50%; overflow: visible; position: absolute; top: 47%; transform: translate(-50%, -50%); width: 132px; }",
    ".framer-H0fNt .framer-1qt00qj { aspect-ratio: 0.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 198px; overflow: visible; position: absolute; top: 54px; width: 71px; }",
    ".framer-H0fNt .framer-wetq4y { aspect-ratio: 0.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 1198px; overflow: visible; position: absolute; top: 54px; width: 71px; }",
    ".framer-H0fNt .framer-wutrx9 { aspect-ratio: 0.6940298507462686 / 1; bottom: 44px; flex: none; height: var(--framer-aspect-ratio-supported, 148px); left: 342px; overflow: visible; position: absolute; width: 103px; }",
    ".framer-H0fNt .framer-ujqy2d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 83px); left: 422px; overflow: visible; position: absolute; top: 48%; transform: translateY(-50%); width: 83px; }",
    ".framer-H0fNt .framer-mc4gxo { aspect-ratio: 2.9375 / 1; bottom: 79px; flex: none; height: var(--framer-aspect-ratio-supported, 35px); left: 1122px; overflow: visible; position: absolute; width: 103px; }",
    ".framer-H0fNt .framer-1bdjj0d { aspect-ratio: 1.2129032258064516 / 1; bottom: 15px; flex: none; height: var(--framer-aspect-ratio-supported, 171px); left: 830px; overflow: visible; position: absolute; width: 207px; }",
    ".framer-H0fNt .framer-12355 { aspect-ratio: 2.8852459016393444 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 136px); left: 50%; overflow: visible; position: absolute; top: 33px; transform: translateX(-50%); width: 392px; }",
    ".framer-H0fNt .framer-1p14ftq { aspect-ratio: 2.66 / 1; bottom: 232px; flex: none; height: var(--framer-aspect-ratio-supported, 55px); overflow: visible; position: absolute; right: 0px; width: 147px; }",
    ".framer-H0fNt .framer-17061nl { aspect-ratio: 13.5 / 1; bottom: 18px; flex: none; height: var(--framer-aspect-ratio-supported, 49px); left: 6px; overflow: visible; position: absolute; width: 664px; z-index: 1; }",
    ".framer-H0fNt .framer-g9xktu { aspect-ratio: 13.5 / 1; bottom: 17px; flex: none; height: var(--framer-aspect-ratio-supported, 50px); left: 660px; overflow: visible; position: absolute; width: 681px; z-index: 1; }",
    ".framer-H0fNt .framer-zd57sw { aspect-ratio: 13.5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); left: 6px; overflow: visible; position: absolute; top: 143px; width: 664px; z-index: 1; }",
    ".framer-H0fNt .framer-ubcjtf { aspect-ratio: 13.5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 51px); left: 660px; overflow: visible; position: absolute; top: 143px; width: 682px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-H0fNt.framer-1eu2i7q, .framer-H0fNt .framer-1ub6l2u { gap: 0px; } .framer-H0fNt.framer-1eu2i7q > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-H0fNt.framer-1eu2i7q > :first-child { margin-top: 0px; } .framer-H0fNt.framer-1eu2i7q > :last-child { margin-bottom: 0px; } .framer-H0fNt .framer-1ub6l2u > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-H0fNt .framer-1ub6l2u > :first-child { margin-left: 0px; } .framer-H0fNt .framer-1ub6l2u > :last-child { margin-right: 0px; } }",
    ...X,
    '.framer-H0fNt[data-border="true"]::after, .framer-H0fNt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@media (max-width: 809px) { .framer-H0fNt.framer-1eu2i7q { height: 854px; width: 390px; } .framer-H0fNt .framer-17187cu-container { bottom: 15px; right: 7px; } .framer-H0fNt .framer-1fw7vpz { height: 750px; left: calc(50.00000000000002% - 354px / 2); overflow: hidden; top: calc(50.00000000000002% - 750px / 2); width: 354px; } .framer-H0fNt .framer-1ub6l2u { gap: 10px; left: 13px; top: 60px; width: 314px; } .framer-H0fNt .framer-1be3evs { bottom: 18px; height: 619px; left: calc(50.56497175141244% - 349px / 2); width: 349px; } .framer-H0fNt .framer-1416e5p { height: 1711px; left: -2px; right: unset; width: 350px; } .framer-H0fNt .framer-12idkjx { bottom: 899px; left: 1px; top: -280px; width: 348px; } .framer-H0fNt .framer-1qiw1c0 { height: 1117px; left: calc(49.71264367816094% - 347px / 2); top: calc(48.80952380952383% - 1117px / 2); width: 347px; } .framer-H0fNt .framer-1vvg8jn { bottom: 0px; left: -3px; right: unset; top: -13px; width: 350px; } .framer-H0fNt .framer-13oygjl { height: var(--framer-aspect-ratio-supported, 331px); left: 49%; top: 0px; transform: translateX(-50%); width: 339px; } .framer-H0fNt .framer-1tr0jpm { height: 34px; left: calc(50.00000000000002% - 111px / 2); top: 270px; width: 111px; } .framer-H0fNt .framer-174zjii { left: 50%; top: 53%; } .framer-H0fNt .framer-1r2xl3m { height: var(--framer-aspect-ratio-supported, 33px); left: 90px; top: 22px; width: 44px; } .framer-H0fNt .framer-1dsyq1l { --border-bottom-width: 5px; --border-left-width: 5px; --border-right-width: 5px; --border-top-width: 5px; bottom: unset; height: var(--framer-aspect-ratio-supported, 190px); left: 50%; top: 45%; transform: translate(-50%, -50%); width: 190px; } .framer-H0fNt .framer-w9ihi4 { --border-bottom-width: 5px; --border-left-width: 5px; --border-right-width: 5px; --border-top-width: 5px; bottom: 279px; height: var(--framer-aspect-ratio-supported, 190px); left: 50%; transform: translateX(-50%); width: 190px; } .framer-H0fNt .framer-ye9d42 { bottom: unset; height: var(--framer-aspect-ratio-supported, 146px); left: -36px; top: 370px; width: 117px; } .framer-H0fNt .framer-13yknln { height: var(--framer-aspect-ratio-supported, 81px); left: 227px; top: 40px; width: 109px; } .framer-H0fNt .framer-15ilmtv { height: var(--framer-aspect-ratio-supported, 94px); left: -24px; top: 308px; width: 126px; } .framer-H0fNt .framer-14lluzc { bottom: unset; height: var(--framer-aspect-ratio-supported, 54px); left: 257px; top: 317px; transform: unset; width: 129px; } .framer-H0fNt .framer-1prbtaq { bottom: 252px; height: var(--framer-aspect-ratio-supported, 163px); left: 256px; width: 130px; } .framer-H0fNt .framer-ph6o9k { bottom: 0px; height: 174px; left: calc(50.00000000000002% - 290px / 2); width: 290px; } .framer-H0fNt .framer-17061nl { bottom: 7px; height: var(--framer-aspect-ratio-supported, 26px); left: 50%; transform: translateX(-50%); width: 347px; } .framer-H0fNt .framer-zd57sw { height: var(--framer-aspect-ratio-supported, 26px); left: 50%; top: 94px; transform: translateX(-50%); width: 347px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-H0fNt .framer-1ub6l2u { gap: 0px; } .framer-H0fNt .framer-1ub6l2u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-H0fNt .framer-1ub6l2u > :first-child { margin-left: 0px; } .framer-H0fNt .framer-1ub6l2u > :last-child { margin-right: 0px; } }}",
    "@media (min-width: 810px) and (max-width: 1919px) { .framer-H0fNt.framer-1eu2i7q { width: 810px; } .framer-H0fNt .framer-1fw7vpz { aspect-ratio: 1.6280193236714975 / 1; height: var(--framer-aspect-ratio-supported, 474px); left: 50%; top: 50%; transform: translate(-50%, -50%); width: 772px; } .framer-H0fNt .framer-1ub6l2u { gap: 10px; left: 13px; top: 53px; width: 314px; } .framer-H0fNt .framer-1be3evs { bottom: 19px; height: 358px; left: calc(50.00000000000002% - 764px / 2); width: 764px; } .framer-H0fNt .framer-1416e5p { height: 1010px; left: -4px; right: unset; width: 767px; } .framer-H0fNt .framer-12idkjx { left: 4px; top: 589px; width: 763px; } .framer-H0fNt .framer-1qiw1c0 { height: 513px; left: calc(49.93446920052427% - 764px / 2); top: calc(38.95486935866986% - 513px / 2); width: 764px; } .framer-H0fNt .framer-1vvg8jn { bottom: 0px; right: 0px; top: -236px; } .framer-H0fNt .framer-13oygjl { height: var(--framer-aspect-ratio-supported, 277px); left: 51%; top: 56%; width: 283px; } .framer-H0fNt .framer-1tr0jpm { left: 602px; top: calc(47.94520547945208% - 43px / 2); } .framer-H0fNt .framer-1r2xl3m { bottom: 92px; left: 461px; top: unset; } .framer-H0fNt .framer-1dsyq1l { bottom: 72px; height: var(--framer-aspect-ratio-supported, 218px); left: 48px; width: 218px; } .framer-H0fNt .framer-w9ihi4 { bottom: 72px; height: var(--framer-aspect-ratio-supported, 218px); left: 526px; right: 39px; width: unset; } .framer-H0fNt .framer-ye9d42 { bottom: -46px; left: -11px; } .framer-H0fNt .framer-13yknln { height: var(--framer-aspect-ratio-supported, 83px); left: 682px; top: 354px; width: 111px; } .framer-H0fNt .framer-15ilmtv { bottom: 223px; height: var(--framer-aspect-ratio-supported, 83px); left: 3px; top: unset; width: 111px; } .framer-H0fNt .framer-14lluzc { bottom: 148px; height: var(--framer-aspect-ratio-supported, 39px); left: 39%; width: 94px; } .framer-H0fNt .framer-1prbtaq { bottom: -46px; left: 695px; } .framer-H0fNt .framer-ph6o9k { bottom: 0px; height: 273px; left: calc(49.6807151979566% - 453px / 2); width: 453px; } .framer-H0fNt .framer-1mzyl7l { bottom: 395px; left: -3px; right: 0px; } .framer-H0fNt .framer-1msbca2 { left: calc(50.649350649350666% - 781px / 2); right: unset; top: calc(48.617886178861816% - 624px / 2); width: 781px; } .framer-H0fNt .framer-nnrgvs { left: 0px; right: 0px; width: unset; } .framer-H0fNt .framer-u4n6zv { left: 51%; top: 166px; } .framer-H0fNt .framer-1jmaybp { height: var(--framer-aspect-ratio-supported, 87px); left: 51%; top: 18px; transform: translateX(-50%); width: 87px; } .framer-H0fNt .framer-839svg { bottom: unset; left: -1px; top: 53%; transform: translateY(-50%); } .framer-H0fNt .framer-1ffft6r { height: var(--framer-aspect-ratio-supported, 145px); left: 51%; } .framer-H0fNt .framer-7iw7ff, .framer-H0fNt .framer-12355 { left: 51%; } .framer-H0fNt .framer-1qt00qj { left: 136px; } .framer-H0fNt .framer-wetq4y { left: 584px; } .framer-H0fNt .framer-wutrx9 { bottom: 214px; height: var(--framer-aspect-ratio-supported, 88px); left: 161px; width: 61px; } .framer-H0fNt .framer-ujqy2d { left: 0px; top: 26px; transform: unset; } .framer-H0fNt .framer-mc4gxo { left: unset; right: -463px; } .framer-H0fNt .framer-1bdjj0d { height: var(--framer-aspect-ratio-supported, 170px); left: unset; right: -275px; } .framer-H0fNt .framer-1p14ftq { bottom: 231px; } .framer-H0fNt .framer-17061nl { bottom: 13px; height: var(--framer-aspect-ratio-supported, 28px); left: 5px; width: 379px; } .framer-H0fNt .framer-g9xktu { bottom: 13px; height: var(--framer-aspect-ratio-supported, 29px); left: 379px; width: 389px; } .framer-H0fNt .framer-zd57sw { height: var(--framer-aspect-ratio-supported, 28px); left: 4px; top: 81px; width: 379px; } .framer-H0fNt .framer-ubcjtf { height: var(--framer-aspect-ratio-supported, 29px); left: 378px; top: 81px; width: 389px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-H0fNt .framer-1ub6l2u { gap: 0px; } .framer-H0fNt .framer-1ub6l2u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-H0fNt .framer-1ub6l2u > :first-child { margin-left: 0px; } .framer-H0fNt .framer-1ub6l2u > :last-child { margin-right: 0px; } }}",
  ],
  H = C(fe, pe, "framer-H0fNt"),
  ke = H;
H.displayName = "Page";
H.defaultProps = { height: 1080, width: 1920 };
S(
  H,
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
          family: "Newsreader",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/newsreader/v20/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438weI_ACexEPjCggA.woff2",
          weight: "400",
        },
        {
          family: "Newsreader",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/newsreader/v20/cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMz2SOZFHDWwgECi.woff2",
          weight: "600",
        },
      ],
    },
    ...re,
    ...O(Z),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Re = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraAGgQCaw8",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"juHEfs4qV":{"layout":["fixed","fixed"]},"r8tV49FKK":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "1080",
        framerResponsiveScreen: "",
        framerIntrinsicWidth: "1920",
        framerContractVersion: "1",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Re as __FramerMetadata__, ke as default };
//# sourceMappingURL=qdpIBtVKRFKWmvMxWJ82BsOJSKlX7Io86vhAmFF9JgI.FW3SFT3C.mjs.map
