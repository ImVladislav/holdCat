import { a as b } from "./chunk-CUI6OBQA.mjs";
import { a as H } from "./chunk-OPEZPNPR.mjs";
import "./chunk-HGNFJJQS.mjs";
import { a as Y, b as U, c as q, d as K } from "./chunk-VZINQ5XF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as R,
  Ba as X,
  L as P,
  N as S,
  Z as I,
  aa as v,
  ba as k,
  c as o,
  da as Q,
  ea as Z,
  fa as O,
  g as j,
  ia as n,
  ka as a,
  l as L,
  m as A,
  n as V,
  p as W,
  ra as E,
  t as e,
  u as p,
  va as i,
  wa as c,
  ya as t,
  z as G,
  za as D,
} from "./chunk-BC6VH6JS.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-VXMCXQ66.mjs";
import "./chunk-RIUMFBNJ.mjs";
var oe = R(Y),
  ne = R(H),
  se = {
    cMVNajzep: "(min-width: 810px) and (max-width: 1919px)",
    G8mlCGAyF: "(max-width: 809px)",
    WdXs2dc2F: "(min-width: 1920px)",
  },
  B = () => typeof document < "u",
  le = "framer-FYI3N",
  fe = {
    cMVNajzep: "framer-v-1xf4p2",
    G8mlCGAyF: "framer-v-15npxo2",
    WdXs2dc2F: "framer-v-1fpt63t",
  },
  z = (d, s) => `translate(-50%, -50%) ${s}`,
  m = (d, s) => `translateX(-50%) ${s}`,
  M = (d, s) => `translateY(-50%) ${s}`,
  Ye = b(),
  pe = { Desktop: "WdXs2dc2F", Phone: "G8mlCGAyF", Tablet: "cMVNajzep" },
  me = ({ height: d, id: s, width: h, ...u }) => {
    var g, x;
    return {
      ...u,
      variant:
        (x = (g = pe[u.variant]) !== null && g !== void 0 ? g : u.variant) !==
          null && x !== void 0
          ? x
          : "WdXs2dc2F",
    };
  },
  ce = j(function (d, s) {
    let { activeLocale: h, setLocale: u } = S(),
      { style: g, className: x, layoutId: N, variant: J, ..._ } = me(d);
    L(() => {
      let l = b(void 0, h);
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
      V(() => {
        let l = b(void 0, h);
        if (((document.title = l.title || ""), l.viewport)) {
          var f;
          (f = document.querySelector('meta[name="viewport"]')) === null ||
            f === void 0 ||
            f.setAttribute("content", l.viewport);
        }
        let T = l.bodyClassName;
        if (T) {
          let F = document.body;
          F.classList.forEach(
            (C) => C.startsWith("framer-body-") && F.classList.remove(C)
          ),
            F.classList.add(`${l.bodyClassName}-framer-FYI3N`);
        }
        return () => {
          T &&
            document.body.classList.remove(`${l.bodyClassName}-framer-FYI3N`);
        };
      }, [void 0, h]);
    let [r, he] = E(J, se, !1),
      ge = void 0,
      $ = I(le, ...[K]),
      ee = W(null),
      te = P("tK_woO7HU"),
      re = W(null),
      ae = () => !B() || r === "G8mlCGAyF",
      y = () => (B() ? r !== "G8mlCGAyF" : !0),
      ie = A();
    return (
      Z({}),
      e(O.Provider, {
        value: { primaryVariantId: "WdXs2dc2F", variantClassNames: fe },
        children: p(G, {
          id: N ?? ie,
          children: [
            p(i, {
              ..._,
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
              className: I($, "framer-1fpt63t", x),
              ref: s ?? ee,
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
                  className: "framer-1hb9vah",
                  "data-framer-name": "noise",
                  name: "noise",
                }),
                e(a, {
                  breakpoint: r,
                  overrides: { G8mlCGAyF: { y: 632 } },
                  children: e(v, {
                    height: 207,
                    width: "189px",
                    y: -282,
                    children: e(k, {
                      className: "framer-ca4ysu-container",
                      children: e(Y, {
                        height: "100%",
                        id: "P_2mdekrG",
                        layoutId: "P_2mdekrG",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(a, {
                  breakpoint: r,
                  overrides: {
                    cMVNajzep: {
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
                      transformTemplate: z,
                    },
                    G8mlCGAyF: {
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
                    className: "framer-rv8h27",
                    children: [
                      p("div", {
                        className: "framer-1tdlwyb",
                        children: [
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              cMVNajzep: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "UZ5mkeAxt",
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
                              G8mlCGAyF: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "UZ5mkeAxt",
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
                                  children: e(n, {
                                    href: { webPageId: "augiA20Il" },
                                    nodeId: "UZ5mkeAxt",
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
                              className: "framer-hnlo1u",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),

                          e(a, {
                            breakpoint: r,
                            overrides: {
                              cMVNajzep: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "KHGtEuIPk",
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
                              G8mlCGAyF: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(n, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "KHGtEuIPk",
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
                                  children: e(n, {
                                    href: { webPageId: "wkg8xGODr" },
                                    nodeId: "KHGtEuIPk",
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
                              className: "framer-13e0od7",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              cMVNajzep: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "cOt43RIzw",
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
                              G8mlCGAyF: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "cOt43RIzw",
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
                                  children: e(n, {
                                    href: { webPageId: "rXmFTlZAf" },
                                    nodeId: "cOt43RIzw",
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
                              className: "framer-3vbgay",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              cMVNajzep: {
                                children: e(o, {
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
                                      nodeId: "BDHRFNyNG",
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
                              G8mlCGAyF: {
                                children: e(o, {
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
                                      nodeId: "BDHRFNyNG",
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
                                  children: e(n, {
                                    href: { webPageId: "fQwylL6Ek" },
                                    nodeId: "BDHRFNyNG",
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
                              className: "framer-ug22qz",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(a, {
                            breakpoint: r,
                            overrides: {
                              cMVNajzep: {
                                children: e(o, {
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
                                      nodeId: "SsX341U40",
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
                              G8mlCGAyF: {
                                children: e(o, {
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
                                      nodeId: "SsX341U40",
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
                                  children: e(n, {
                                    href: { webPageId: "FVEMS5VK5" },
                                    nodeId: "SsX341U40",
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
                              className: "framer-2cv3gh",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-v1o0sz",
                        children: p("div", {
                          className: "framer-15ohx0w",
                          children: [
                            p("div", {
                              className: "framer-1v3uarl",
                              id: te,
                              ref: re,
                              children: [
                                e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    cMVNajzep: {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(365.50000000000006),
                                        pixelHeight: 164,
                                        pixelWidth: 163,
                                        positionX: "left",
                                        positionY: "top",
                                        src: "https://framerusercontent.com/images/Le1SCcsOaOsc2goYJU08zzEKZHk.png",
                                      },
                                    },
                                    G8mlCGAyF: {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(781.5000000000005),
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
                                      loading: t(358),
                                      pixelHeight: 164,
                                      pixelWidth: 163,
                                      positionX: "left",
                                      positionY: "top",
                                      src: "https://framerusercontent.com/images/Le1SCcsOaOsc2goYJU08zzEKZHk.png",
                                    },
                                    className: "framer-10xqcbk",
                                    "data-framer-name": "bg",
                                    name: "bg",
                                  }),
                                }),
                                e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    cMVNajzep: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 250,
                                        intrinsicWidth: 256,
                                        loading: t(340),
                                        pixelHeight: 250,
                                        pixelWidth: 256,
                                        src: "https://framerusercontent.com/images/HlYUgkrsnZcWcnCHH64pJWLTM.gif",
                                      },
                                    },
                                    G8mlCGAyF: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 250,
                                        intrinsicWidth: 256,
                                        loading: t(742.0000000000002),
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
                                      loading: t(278),
                                      pixelHeight: 250,
                                      pixelWidth: 256,
                                      src: "https://framerusercontent.com/images/HlYUgkrsnZcWcnCHH64pJWLTM.gif",
                                    },
                                    className: "framer-1n4pkr3",
                                    "data-framer-name": "logo",
                                    name: "logo",
                                    transformTemplate: m,
                                  }),
                                }),
                                e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    cMVNajzep: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 234.44445065510143,
                                        intrinsicWidth: 555.5555702727522,
                                        loading: t(679),
                                        pixelHeight: 211,
                                        pixelWidth: 500,
                                        src: "https://framerusercontent.com/images/NFggO88PZKYooqbQr7boN6mlc.gif",
                                      },
                                    },
                                    G8mlCGAyF: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 234.44445065510143,
                                        intrinsicWidth: 555.5555702727522,
                                        loading: t(1099.0000000000002),
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
                                      loading: t(726),
                                      pixelHeight: 211,
                                      pixelWidth: 500,
                                      src: "https://framerusercontent.com/images/NFggO88PZKYooqbQr7boN6mlc.gif",
                                    },
                                    className: "framer-nf2xbg",
                                    "data-framer-name": "2",
                                    name: "2",
                                  }),
                                }),
                                e(v, {
                                  children: e(k, {
                                    className: "framer-1q8bo5d-container",
                                    children: e(H, {
                                      height: "100%",
                                      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embed Transparent Website</title>
    <style>
        body {
            margin: 0;
            background-color: transparent;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
            background-color: transparent;
        }
    </style>
</head>
<body>
    <iframe 
        src="https://wars.thumb.fun/test" 
        allowtransparency="true" 
        style="background: transparent;">
    </iframe>
</body>
</html>`,
                                      id: "c7Ebc2B7R",
                                      layoutId: "c7Ebc2B7R",
                                      style: { height: "100%", width: "100%" },
                                      type: "url",
                                      url: "https://wars.thumb.fun/test",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                p("div", {
                                  className: "framer-i1udft",
                                  children: [
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 120.00000317891447,
                                            intrinsicWidth: 160.00000423855263,
                                            loading: t(388.00000000000006),
                                            pixelHeight: 108,
                                            pixelWidth: 144,
                                            src: "https://framerusercontent.com/images/CC7qT4DpcKgUtY28zZhe3QQpU.gif",
                                          },
                                        },
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 120.00000317891447,
                                            intrinsicWidth: 160.00000423855263,
                                            loading: t(791.0000000000002),
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
                                          loading: t(401),
                                          pixelHeight: 108,
                                          pixelWidth: 144,
                                          src: "https://framerusercontent.com/images/CC7qT4DpcKgUtY28zZhe3QQpU.gif",
                                        },
                                        className: "framer-swzi1",
                                        "data-framer-name": "4",
                                        name: "4",
                                      }),
                                    }),
                                    ae() &&
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          G8mlCGAyF: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 70,
                                              intrinsicWidth: 105,
                                              loading: t(1321.0000000000002),
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
                                            "framer-1uiczcd hidden-1fpt63t hidden-1xf4p2",
                                          "data-framer-name": "vs",
                                          name: "vs",
                                          transformTemplate: m,
                                        }),
                                      }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(572),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                        },
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(1438.0061179298964),
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
                                          loading: t(824),
                                          pixelHeight: 100,
                                          pixelWidth: 80,
                                          src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                        },
                                        className: "framer-lo5k1r",
                                        "data-framer-name": "3",
                                        name: "3",
                                        style: { rotate: 18 },
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(408.00000000000006),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                        },
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(809.0000000000002),
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
                                          loading: t(420),
                                          pixelHeight: 120,
                                          pixelWidth: 160,
                                          src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                        },
                                        className: "framer-1ofb6h4",
                                        "data-framer-name": "1",
                                        name: "1",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(407.00000000000006),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                        },
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 133.33333686546052,
                                            intrinsicWidth: 177.7777824872807,
                                            loading: t(1077.0000000000005),
                                            pixelHeight: 120,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                          },
                                          transformTemplate: M,
                                        },
                                      },
                                      children: e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 133.33333686546052,
                                          intrinsicWidth: 177.7777824872807,
                                          loading: t(427),
                                          pixelHeight: 120,
                                          pixelWidth: 160,
                                          src: "https://framerusercontent.com/images/biL2kchTOcopOqHTEM66i4Dt70.gif",
                                        },
                                        className: "framer-gz1ik7",
                                        "data-framer-name": "1",
                                        name: "1",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(574),
                                            pixelHeight: 100,
                                            pixelWidth: 80,
                                            src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                          },
                                        },
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 111.11111405455044,
                                            intrinsicWidth: 88.88889124364034,
                                            loading: t(1136.9957407311504),
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
                                          loading: t(844),
                                          pixelHeight: 100,
                                          pixelWidth: 80,
                                          src: "https://framerusercontent.com/images/WihDaFzZRfDjkrDqqgixaIESvWo.gif",
                                        },
                                        className: "framer-1jtm1ze",
                                        "data-framer-name": "3",
                                        name: "3",
                                        style: { rotate: -15 },
                                      }),
                                    }),
                                  ],
                                }),
                                e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    cMVNajzep: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 648.8889060785746,
                                        intrinsicWidth: 1156.66669730787,
                                        loading: t(541),
                                        pixelHeight: 584,
                                        pixelWidth: 1041,
                                        sizes: "312px",
                                        src: "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=512 512w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png 1041w",
                                      },
                                    },
                                    G8mlCGAyF: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 648.8889060785746,
                                        intrinsicWidth: 1156.66669730787,
                                        loading: t(1614.0000000000005),
                                        pixelHeight: 584,
                                        pixelWidth: 1041,
                                        sizes: "290px",
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
                                      loading: t(700),
                                      pixelHeight: 584,
                                      pixelWidth: 1041,
                                      sizes: "483px",
                                      src: "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png",
                                      srcSet:
                                        "https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=512 512w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SoTUrRWWLERQlMKthRXn2b6p3To.png 1041w",
                                    },
                                    className: "framer-faw852",
                                    "data-framer-name": "logo 2",
                                    name: "logo 2",
                                  }),
                                }),
                                e(n, {
                                  href: {
                                    hash: ":jeuHpaKMG",
                                    webPageId: "pSNv7nGIN",
                                  },
                                  nodeId: "Vnup1du7f",
                                  openInNewTab: !1,
                                  children: e("a", {
                                    className: "framer-10d54ff framer-etpibo",
                                    "data-border": !0,
                                    "data-framer-name": "button",
                                    name: "button",
                                    children: e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
                                          children: e(o, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7TmV3c3JlYWRlci1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Newsreader", "Newsreader Placeholder", serif',
                                                "--framer-font-size": "20px",
                                                "--framer-text-color":
                                                  "rgb(236, 99, 83)",
                                              },
                                              children: "Rankings",
                                            }),
                                          }),
                                        },
                                        G8mlCGAyF: {
                                          children: e(o, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7TmV3c3JlYWRlci1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Newsreader", "Newsreader Placeholder", serif',
                                                "--framer-font-size": "23px",
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
                                        className: "framer-195mvtg",
                                        fonts: ["GF;Newsreader-regular"],
                                        transformTemplate: z,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            p("div", {
                              className: "framer-bc53ac",
                              "data-framer-name": "top half",
                              name: "top half",
                              children: [
                                e(a, {
                                  breakpoint: r,
                                  overrides: {
                                    cMVNajzep: {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(-203.56260162601615),
                                        pixelHeight: 418,
                                        pixelWidth: 416,
                                        positionX: "left",
                                        positionY: "top",
                                        src: "https://framerusercontent.com/images/Zg2VKTfF1lIriBQapfOg6MYmUZo.png",
                                      },
                                    },
                                    G8mlCGAyF: {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.5,
                                        fit: "tile",
                                        loading: t(151.00000000000034),
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
                                    className: "framer-1jwp2hc",
                                    "data-framer-name": "top bg",
                                    name: "top bg",
                                  }),
                                }),
                                p("div", {
                                  className: "framer-1nmf4v7",
                                  children: [
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        G8mlCGAyF: {
                                          children: e(o, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7TmV3c3JlYWRlci02MDBpdGFsaWM=",
                                                "--framer-font-family":
                                                  '"Newsreader", "Newsreader Placeholder", serif',
                                                "--framer-font-size": "51px",
                                                "--framer-font-style": "italic",
                                                "--framer-font-weight": "600",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "TO THE END",
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
                                        className: "framer-65oa7x",
                                        fonts: ["GF;Newsreader-600italic"],
                                        transformTemplate: m,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 124.4444477410965,
                                            intrinsicWidth: 124.4444477410965,
                                            loading: t(164.00000000000023),
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
                                        className: "framer-86ftla",
                                        "data-framer-name": "Top",
                                        name: "Top",
                                      }),
                                    }),
                                    y() &&
                                      e(a, {
                                        breakpoint: r,
                                        overrides: {
                                          cMVNajzep: {
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
                                            transformTemplate: M,
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
                                          className:
                                            "framer-111mlsb hidden-15npxo2",
                                          "data-framer-name": "14",
                                          name: "14",
                                          style: { rotate: 36 },
                                        }),
                                      }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 144.44444827091556,
                                            intrinsicWidth: 587.7777933485718,
                                            loading: t(201.00000000000023),
                                            pixelHeight: 130,
                                            pixelWidth: 529,
                                            sizes: "571px",
                                            src: "https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif",
                                            srcSet:
                                              "https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif?scale-down-to=512 512w,https://framerusercontent.com/images/lMW1LzisLp41VTLBojM8fMpyRLY.gif 529w",
                                          },
                                          transformTemplate: void 0,
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
                                        className: "framer-ecy9vo",
                                        "data-framer-name": "3",
                                        name: "3",
                                        transformTemplate: m,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 155.55555967637062,
                                            intrinsicWidth: 131.11111458436952,
                                            loading: t(377.5000000000004),
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
                                        className: "framer-f6guuf",
                                        "data-framer-name": "35",
                                        name: "35",
                                        transformTemplate: z,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 142.22222598982455,
                                            intrinsicWidth: 72.22222413545778,
                                            loading: t(443.0000000000002),
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
                                        className: "framer-khgdjp",
                                        "data-framer-name": "32",
                                        name: "32",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 142.22222598982455,
                                            intrinsicWidth: 72.22222413545778,
                                            loading: t(444.0000000000002),
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
                                        className: "framer-dtq112",
                                        "data-framer-name": "32",
                                        name: "32",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 148.8888928330976,
                                            intrinsicWidth: 103.3333360707319,
                                            loading: t(617.0000000000002),
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
                                        className: "framer-1ggfcdx",
                                        "data-framer-name": "40",
                                        name: "40",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 83.33333554091283,
                                            intrinsicWidth: 83.33333554091283,
                                            loading: t(176.00000000000023),
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
                                        className: "framer-jz1ckj",
                                        "data-framer-name": "20",
                                        name: "20",
                                        transformTemplate: M,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 35.55555649745614,
                                            intrinsicWidth: 104.4444472112774,
                                            loading: t(175.00000000000023),
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
                                        className: "framer-1qcj3h",
                                        "data-framer-name": "24",
                                        name: "24",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 172.2222267845532,
                                            intrinsicWidth: 208.8888944225548,
                                            loading: t(684.0000000000002),
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
                                        className: "framer-uwsger",
                                        "data-framer-name": "8",
                                        name: "8",
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 135.55555914655153,
                                            intrinsicWidth: 391.11112147201754,
                                            loading: t(193.00000000000023),
                                            pixelHeight: 122,
                                            pixelWidth: 352,
                                            src: "https://framerusercontent.com/images/oGDzfPLy27g6c6RPLv5T4ABc.png",
                                          },
                                          transformTemplate: void 0,
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
                                        className: "framer-18krizh",
                                        "data-framer-name": "6",
                                        name: "6",
                                        transformTemplate: m,
                                      }),
                                    }),
                                    e(a, {
                                      breakpoint: r,
                                      overrides: {
                                        cMVNajzep: {
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
                                        G8mlCGAyF: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 55.55555702727522,
                                            intrinsicWidth: 147.77778169255208,
                                            loading: t(560.0000000000002),
                                            pixelHeight: 50,
                                            pixelWidth: 133,
                                            src: "https://framerusercontent.com/images/DNckZVH1sbun4f4viWTGFZZOhI.gif",
                                          },
                                          transformTemplate: m,
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
                                        className: "framer-3nyzdj",
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
                          cMVNajzep: {
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
                          G8mlCGAyF: {
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
                          className: "framer-1s5s070",
                          "data-framer-name": "100",
                          name: "100",
                        }),
                      }),
                      y() &&
                        e(a, {
                          breakpoint: r,
                          overrides: {
                            cMVNajzep: {
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
                            className: "framer-sm6mru hidden-15npxo2",
                            "data-framer-name": "100",
                            name: "100",
                          }),
                        }),
                      e(a, {
                        breakpoint: r,
                        overrides: {
                          cMVNajzep: {
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
                          G8mlCGAyF: {
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
                          className: "framer-12vplx9",
                          "data-framer-name": "100",
                          name: "100",
                        }),
                      }),
                      y() &&
                        e(a, {
                          breakpoint: r,
                          overrides: {
                            cMVNajzep: {
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
                            className: "framer-ddsn4k hidden-15npxo2",
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
  de = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-FYI3N.framer-etpibo, .framer-FYI3N .framer-etpibo { dis2: block; }",
    ".framer-FYI3N.framer-1fpt63t { align-content: center; align-items: center; dis2: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 1080px; overflow: visible; padding: 0px; position: relative; width: 1920px; }",
    ".framer-FYI3N .framer-1hb9vah { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; opacity: 0.12; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 3; }",
    ".framer-FYI3N .framer-ca4ysu-container { aspect-ratio: 0.9110169491525424 / 1; bottom: 75px; flex: none; height: var(--framer-aspect-ratio-supported, 207px); position: absolute; right: 37px; width: 189px; z-index: 2; }",
    ".framer-FYI3N .framer-rv8h27 { flex: none; height: 828px; left: calc(50.00000000000002% - 1348px / 2); overflow: visible; position: absolute; top: calc(44.53703703703706% - 828px / 2); width: 1348px; z-index: 1; }",
    ".framer-FYI3N .framer-1tdlwyb { align-content: center; align-items: center; dis2: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; left: 6px; opacity: 0.8; overflow: hidden; padding: 0px; position: absolute; top: 97px; width: 464px; }",
    ".framer-FYI3N .framer-hnlo1u, .framer-FYI3N .framer-is0sic, .framer-FYI3N .framer-13e0od7, .framer-FYI3N .framer-3vbgay, .framer-FYI3N .framer-ug22qz, .framer-FYI3N .framer-2cv3gh { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-FYI3N .framer-v1o0sz { bottom: 36px; flex: none; height: 615px; left: calc(50.00000000000002% - 1334px / 2); overflow: auto; position: absolute; width: 1334px; }",
    ".framer-FYI3N .framer-15ohx0w { flex: none; height: 1228px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-FYI3N .framer-1v3uarl { bottom: 0px; flex: none; height: 633px; left: 0px; overflow: hidden; position: absolute; right: -18px; }",
    ".framer-FYI3N .framer-10xqcbk { flex: none; height: 642px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 1334px; z-index: 0; }",
    ".framer-FYI3N .framer-1n4pkr3 { aspect-ratio: 1.024 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 446px); left: 49%; overflow: visible; position: absolute; top: -80px; transform: translateX(-50%); width: 457px; }",
    ".framer-FYI3N .framer-nf2xbg { aspect-ratio: 2.3696682464454977 / 1; bottom: 197px; flex: none; height: var(--framer-aspect-ratio-supported, 68px); left: 719px; overflow: visible; position: absolute; width: 162px; }",
    ".framer-FYI3N .framer-1q8bo5d-container { bottom: 0px; flex: none; left: -14px; position: absolute; top: 0px; width: 1337px; }",
    ".framer-FYI3N .framer-i1udft { -webkit-user-select: none; bottom: -6px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; right: -8px; top: 0px; user-select: none; }",
    ".framer-FYI3N .framer-swzi1 { aspect-ratio: 1.3333333333333335 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 65px); left: 331px; overflow: visible; position: absolute; top: 43px; width: 87px; }",
    ".framer-FYI3N .framer-1uiczcd { -webkit-filter: drop-shadow(0px 0px 5px rgba(255, 0, 0, 0.83)); aspect-ratio: 1.5 / 1; bottom: 98px; filter: drop-shadow(0px 0px 5px rgba(255, 0, 0, 0.83)); flex: none; height: var(--framer-aspect-ratio-supported, 131px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 196px; }",
    ".framer-FYI3N .framer-lo5k1r { aspect-ratio: 0.7999999999999999 / 1; bottom: 33px; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: -1px; overflow: visible; position: absolute; width: 112px; }",
    ".framer-FYI3N .framer-1ofb6h4 { aspect-ratio: 1.3383458646616542 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 133px); left: 1185px; overflow: visible; pointer-events: none; position: absolute; top: 62px; width: 178px; }",
    ".framer-FYI3N .framer-gz1ik7 { aspect-ratio: 1.3383458646616542 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 133px); left: -41px; overflow: visible; pointer-events: none; position: absolute; top: 69px; width: 178px; }",
    ".framer-FYI3N .framer-1jtm1ze { aspect-ratio: 0.7999999999999999 / 1; bottom: 13px; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 1215px; overflow: visible; position: absolute; width: 112px; }",
    ".framer-FYI3N .framer-faw852 { -webkit-user-select: none; bottom: 0px; flex: none; height: 291px; left: calc(50.03745318352062% - 483px / 2); overflow: visible; position: absolute; user-select: none; width: 483px; }",
    ".framer-FYI3N .framer-10d54ff { --border-bottom-width: 2px; --border-color: var(--token-8cc5dcc3-b8e9-433a-9df9-ccbcecd8ae91, #261d18); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: #692c26; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 43px; left: 1107px; overflow: hidden; position: absolute; text-decoration: none; top: 47px; width: 141px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-FYI3N .framer-195mvtg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 53%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-FYI3N .framer-bc53ac { bottom: 613px; flex: none; left: 0px; overflow: hidden; position: absolute; right: -2px; top: 0px; }",
    ".framer-FYI3N .framer-1jwp2hc { flex: none; height: 624px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -13px; }",
    ".framer-FYI3N .framer-1nmf4v7 { flex: none; height: 576px; left: -67px; overflow: hidden; position: absolute; top: -1px; width: 1347px; }",
    ".framer-FYI3N .framer-65oa7x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 186px; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-FYI3N .framer-86ftla { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 123px); left: 1022px; overflow: visible; position: absolute; top: 0px; width: 123px; }",
    ".framer-FYI3N .framer-111mlsb { aspect-ratio: 0.7999999999999999 / 1; bottom: 20px; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 31px; overflow: visible; position: absolute; width: 112px; }",
    ".framer-FYI3N .framer-ecy9vo { aspect-ratio: 4.069230769230769 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 144px); left: 50%; overflow: hidden; position: absolute; top: 41px; transform: translateX(-50%); width: 588px; }",
    ".framer-FYI3N .framer-f6guuf { aspect-ratio: 0.8428571428571429 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 157px); left: 50%; overflow: visible; position: absolute; top: 47%; transform: translate(-50%, -50%); width: 132px; }",
    ".framer-FYI3N .framer-khgdjp { aspect-ratio: 0.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 198px; overflow: visible; position: absolute; top: 54px; width: 71px; }",
    ".framer-FYI3N .framer-dtq112 { aspect-ratio: 0.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 140px); left: 1198px; overflow: visible; position: absolute; top: 54px; width: 71px; }",
    ".framer-FYI3N .framer-1ggfcdx { aspect-ratio: 0.6940298507462686 / 1; bottom: 44px; flex: none; height: var(--framer-aspect-ratio-supported, 148px); left: 342px; overflow: visible; position: absolute; width: 103px; }",
    ".framer-FYI3N .framer-jz1ckj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 83px); left: 422px; overflow: visible; position: absolute; top: 48%; transform: translateY(-50%); width: 83px; }",
    ".framer-FYI3N .framer-1qcj3h { aspect-ratio: 2.9375 / 1; bottom: 79px; flex: none; height: var(--framer-aspect-ratio-supported, 35px); left: 1122px; overflow: visible; position: absolute; width: 103px; }",
    ".framer-FYI3N .framer-uwsger { aspect-ratio: 1.2129032258064516 / 1; bottom: 15px; flex: none; height: var(--framer-aspect-ratio-supported, 171px); left: 830px; overflow: visible; position: absolute; width: 207px; }",
    ".framer-FYI3N .framer-18krizh { aspect-ratio: 2.8852459016393444 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 136px); left: 50%; overflow: visible; position: absolute; top: 33px; transform: translateX(-50%); width: 392px; }",
    ".framer-FYI3N .framer-3nyzdj { aspect-ratio: 2.66 / 1; bottom: 232px; flex: none; height: var(--framer-aspect-ratio-supported, 55px); overflow: visible; position: absolute; right: 0px; width: 147px; }",
    ".framer-FYI3N .framer-1s5s070 { aspect-ratio: 13.5 / 1; bottom: 18px; flex: none; height: var(--framer-aspect-ratio-supported, 49px); left: 6px; overflow: visible; position: absolute; width: 664px; z-index: 1; }",
    ".framer-FYI3N .framer-sm6mru { aspect-ratio: 13.5 / 1; bottom: 17px; flex: none; height: var(--framer-aspect-ratio-supported, 50px); left: 660px; overflow: visible; position: absolute; width: 681px; z-index: 1; }",
    ".framer-FYI3N .framer-12vplx9 { aspect-ratio: 13.5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); left: 6px; overflow: visible; position: absolute; top: 143px; width: 664px; z-index: 1; }",
    ".framer-FYI3N .framer-ddsn4k { aspect-ratio: 13.5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 51px); left: 660px; overflow: visible; position: absolute; top: 143px; width: 682px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-FYI3N.framer-1fpt63t, .framer-FYI3N .framer-1tdlwyb { gap: 0px; } .framer-FYI3N.framer-1fpt63t > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-FYI3N.framer-1fpt63t > :first-child { margin-top: 0px; } .framer-FYI3N.framer-1fpt63t > :last-child { margin-bottom: 0px; } .framer-FYI3N .framer-1tdlwyb > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-FYI3N .framer-1tdlwyb > :first-child { margin-left: 0px; } .framer-FYI3N .framer-1tdlwyb > :last-child { margin-right: 0px; } }",
    ...q,
    '.framer-FYI3N[data-border="true"]::after, .framer-FYI3N [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@media (max-width: 809px) { .framer-FYI3N.framer-1fpt63t { height: 854px; width: 390px; } .framer-FYI3N .framer-ca4ysu-container { bottom: 15px; right: 7px; } .framer-FYI3N .framer-rv8h27 { height: 750px; left: calc(50.00000000000002% - 354px / 2); overflow: hidden; top: calc(50.00000000000002% - 750px / 2); width: 354px; } .framer-FYI3N .framer-1tdlwyb { gap: 10px; left: 13px; top: 60px; width: 314px; } .framer-FYI3N .framer-v1o0sz { bottom: 18px; height: 619px; left: calc(50.56497175141244% - 349px / 2); width: 349px; } .framer-FYI3N .framer-15ohx0w { height: 1623px; left: -2px; right: unset; width: 350px; } .framer-FYI3N .framer-1v3uarl { height: 1006px; right: unset; width: 348px; } .framer-FYI3N .framer-10xqcbk { height: 1101px; left: calc(49.71264367816094% - 347px / 2); top: calc(54.67196819085489% - 1101px / 2); width: 347px; } .framer-FYI3N .framer-1n4pkr3 { height: var(--framer-aspect-ratio-supported, 344px); left: 51%; top: -40px; width: 352px; } .framer-FYI3N .framer-nf2xbg { bottom: unset; height: var(--framer-aspect-ratio-supported, 54px); left: 257px; top: 317px; width: 129px; } .framer-FYI3N .framer-1q8bo5d-container { bottom: 83px; left: 0px; top: 284px; width: 350px; } .framer-FYI3N .framer-i1udft { bottom: unset; height: 781px; left: -3px; right: unset; top: -13px; width: 350px; } .framer-FYI3N .framer-swzi1 { height: var(--framer-aspect-ratio-supported, 48px); left: 181px; top: 22px; width: 64px; } .framer-FYI3N .framer-lo5k1r { bottom: -9px; height: var(--framer-aspect-ratio-supported, 121px); left: -39px; width: 97px; } .framer-FYI3N .framer-1ofb6h4 { height: var(--framer-aspect-ratio-supported, 81px); left: 227px; top: 40px; width: 109px; } .framer-FYI3N .framer-gz1ik7 { height: var(--framer-aspect-ratio-supported, 94px); left: -24px; top: 45%; transform: translateY(-50%); width: 126px; } .framer-FYI3N .framer-1jtm1ze { bottom: 284px; height: var(--framer-aspect-ratio-supported, 129px); left: 287px; width: 103px; } .framer-FYI3N .framer-faw852 { bottom: unset; height: 174px; left: calc(49.42528735632186% - 290px / 2); top: calc(91.35188866799207% - 174px / 2); width: 290px; } .framer-FYI3N .framer-10d54ff { height: 48px; left: calc(52.87356321839083% - 157px / 2); top: 243px; width: 157px; } .framer-FYI3N .framer-195mvtg { left: 50%; top: 52%; } .framer-FYI3N .framer-bc53ac { bottom: 1002px; left: -2px; right: 1px; top: -1px; } .framer-FYI3N .framer-1jwp2hc { height: 642px; left: calc(49.857549857549884% - 351px / 2); right: unset; top: calc(49.51768488745983% - 642px / 2); width: 351px; } .framer-FYI3N .framer-1nmf4v7 { height: 605px; left: 0px; top: 0px; width: 351px; } .framer-FYI3N .framer-65oa7x { left: 48%; top: 174px; } .framer-FYI3N .framer-86ftla { height: var(--framer-aspect-ratio-supported, 95px); left: 48%; transform: translateX(-50%); width: 95px; } .framer-FYI3N .framer-ecy9vo { height: var(--framer-aspect-ratio-supported, 140px); left: -126px; right: -94px; top: 37px; transform: unset; width: unset; } .framer-FYI3N .framer-f6guuf { left: 45%; top: 48%; } .framer-FYI3N .framer-khgdjp { bottom: 186px; left: 271px; top: unset; } .framer-FYI3N .framer-dtq112 { bottom: 185px; left: 2px; top: unset; } .framer-FYI3N .framer-1ggfcdx { bottom: 4px; left: 238px; } .framer-FYI3N .framer-jz1ckj { left: -45px; top: 12px; transform: unset; } .framer-FYI3N .framer-1qcj3h { bottom: unset; left: 239px; top: 11px; } .framer-FYI3N .framer-uwsger { height: var(--framer-aspect-ratio-supported, 70px); left: 5px; width: 85px; } .framer-FYI3N .framer-18krizh { height: var(--framer-aspect-ratio-supported, 130px); left: -34px; top: 29px; transform: unset; width: 375px; } .framer-FYI3N .framer-3nyzdj { bottom: 154px; left: 45%; right: unset; transform: translateX(-50%); } .framer-FYI3N .framer-1s5s070 { bottom: 7px; height: var(--framer-aspect-ratio-supported, 26px); left: 50%; transform: translateX(-50%); width: 347px; } .framer-FYI3N .framer-12vplx9 { height: var(--framer-aspect-ratio-supported, 26px); left: 50%; top: 94px; transform: translateX(-50%); width: 347px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-FYI3N .framer-1tdlwyb { gap: 0px; } .framer-FYI3N .framer-1tdlwyb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-FYI3N .framer-1tdlwyb > :first-child { margin-left: 0px; } .framer-FYI3N .framer-1tdlwyb > :last-child { margin-right: 0px; } }}",
    "@media (min-width: 810px) and (max-width: 1919px) { .framer-FYI3N.framer-1fpt63t { width: 810px; } .framer-FYI3N .framer-rv8h27 { aspect-ratio: 1.6280193236714975 / 1; height: var(--framer-aspect-ratio-supported, 474px); left: 50%; top: 50%; transform: translate(-50%, -50%); width: 772px; } .framer-FYI3N .framer-1tdlwyb { gap: 10px; left: 13px; top: 53px; width: 314px; } .framer-FYI3N .framer-v1o0sz { bottom: 19px; height: 358px; left: calc(50.00000000000002% - 764px / 2); width: 764px; } .framer-FYI3N .framer-15ohx0w { height: 869px; left: -4px; right: unset; width: 767px; } .framer-FYI3N .framer-1v3uarl { height: 363px; left: calc(49.80443285528033% - 770px / 2); right: unset; width: 770px; } .framer-FYI3N .framer-10xqcbk { height: 365px; left: calc(50.00000000000002% - 764px / 2); top: calc(50.13774104683198% - 365px / 2); width: 764px; } .framer-FYI3N .framer-1n4pkr3 { height: var(--framer-aspect-ratio-supported, 196px); left: 50%; top: -26px; width: 200px; } .framer-FYI3N .framer-nf2xbg { bottom: 11px; height: var(--framer-aspect-ratio-supported, 39px); width: 94px; } .framer-FYI3N .framer-1q8bo5d-container { bottom: unset; height: 349px; left: unset; right: 0px; top: 7px; width: 762px; } .framer-FYI3N .framer-i1udft { bottom: unset; height: 356px; right: -1px; top: calc(50.13774104683198% - 356px / 2); } .framer-FYI3N .framer-swzi1 { height: var(--framer-aspect-ratio-supported, 41px); left: 474px; top: 18px; width: 55px; } .framer-FYI3N .framer-lo5k1r { bottom: 14px; left: -22px; } .framer-FYI3N .framer-1ofb6h4 { height: var(--framer-aspect-ratio-supported, 83px); left: 652px; top: 38px; width: 111px; } .framer-FYI3N .framer-gz1ik7 { height: var(--framer-aspect-ratio-supported, 83px); left: 2px; top: 37px; width: 111px; } .framer-FYI3N .framer-1jtm1ze { bottom: 12px; left: 684px; } .framer-FYI3N .framer-faw852 { height: 188px; left: calc(50.06553079947578% - 312px / 2); width: 312px; } .framer-FYI3N .framer-10d54ff { height: 37px; left: calc(50.00000000000002% - 121px / 2); top: calc(46.831955922865035% - 37px / 2); width: 121px; } .framer-FYI3N .framer-bc53ac { bottom: unset; height: 511px; left: calc(49.80443285528033% - 770px / 2); right: unset; width: 770px; } .framer-FYI3N .framer-1jwp2hc { left: calc(50.649350649350666% - 781px / 2); right: unset; top: calc(48.617886178861816% - 624px / 2); width: 781px; } .framer-FYI3N .framer-1nmf4v7 { left: 0px; right: 0px; width: unset; } .framer-FYI3N .framer-65oa7x { left: 51%; top: 166px; } .framer-FYI3N .framer-86ftla { height: var(--framer-aspect-ratio-supported, 87px); left: 51%; top: 18px; transform: translateX(-50%); width: 87px; } .framer-FYI3N .framer-111mlsb { bottom: unset; left: -1px; top: 53%; transform: translateY(-50%); } .framer-FYI3N .framer-ecy9vo { height: var(--framer-aspect-ratio-supported, 145px); left: 51%; } .framer-FYI3N .framer-f6guuf, .framer-FYI3N .framer-18krizh { left: 51%; } .framer-FYI3N .framer-khgdjp { left: 136px; } .framer-FYI3N .framer-dtq112 { left: 584px; } .framer-FYI3N .framer-1ggfcdx { bottom: 214px; height: var(--framer-aspect-ratio-supported, 88px); left: 161px; width: 61px; } .framer-FYI3N .framer-jz1ckj { left: 0px; top: 26px; transform: unset; } .framer-FYI3N .framer-1qcj3h { left: unset; right: -463px; } .framer-FYI3N .framer-uwsger { height: var(--framer-aspect-ratio-supported, 170px); left: unset; right: -275px; } .framer-FYI3N .framer-3nyzdj { bottom: 231px; } .framer-FYI3N .framer-1s5s070 { bottom: 13px; height: var(--framer-aspect-ratio-supported, 28px); left: 5px; width: 379px; } .framer-FYI3N .framer-sm6mru { bottom: 13px; height: var(--framer-aspect-ratio-supported, 29px); left: 379px; width: 389px; } .framer-FYI3N .framer-12vplx9 { height: var(--framer-aspect-ratio-supported, 28px); left: 4px; top: 81px; width: 379px; } .framer-FYI3N .framer-ddsn4k { height: var(--framer-aspect-ratio-supported, 29px); left: 378px; top: 81px; width: 389px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-FYI3N .framer-1tdlwyb { gap: 0px; } .framer-FYI3N .framer-1tdlwyb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-FYI3N .framer-1tdlwyb > :first-child { margin-left: 0px; } .framer-FYI3N .framer-1tdlwyb > :last-child { margin-right: 0px; } }}",
  ],
  w = Q(ce, de, "framer-FYI3N"),
  He = w;
w.dis2Name = "2";
w.defaultProps = { height: 1080, width: 1920 };
D(
  w,
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
    ...oe,
    ...ne,
    ...X(U),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ze = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameriUQfGh2VC",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1920",
        framerComponentViewportWidth: "true",
        framerDis2ContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"G8mlCGAyF":{"layout":["fixed","fixed"]},"cMVNajzep":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "1080",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { ze as __FramerMetadata__, He as default };
//# sourceMappingURL=f4h3o5uaFgEH40iMyGZtJz55i7ZoVYJTa5JDVc74L44.I3ATK3TY.mjs.map
