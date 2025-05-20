import { a as R } from "./chunk-4VC5IUFA.mjs";
import { a as I } from "./chunk-A34ASDXO.mjs";
import "./chunk-HGNFJJQS.mjs";
import { a as j, b as ie, c as ae, d as ne } from "./chunk-VZINQ5XF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as F,
  Ba as re,
  N as D,
  U as _,
  X as J,
  Z as E,
  _ as G,
  aa as W,
  ba as v,
  c as o,
  da as Q,
  ea as B,
  fa as $,
  g as Z,
  ia as n,
  ka as i,
  l as U,
  m as S,
  n as X,
  p as N,
  q as K,
  ra as ee,
  t as e,
  u as f,
  va as a,
  wa as u,
  ya as t,
  z as O,
  za as te,
} from "./chunk-BC6VH6JS.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-VXMCXQ66.mjs";
import "./chunk-RIUMFBNJ.mjs";
function P(h) {
  let { image: s } = h,
    [d, b] = K([]),
    [g, m] = K(!1),
    x = N({ x: 0, y: 0 }),
    M = 100,
    H = 60;
  return e("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      cursor: "none",
    },
    onMouseMove: (p) => {
      let w = p.currentTarget.getBoundingClientRect(),
        y = { x: p.clientX - w.left - M / 2, y: p.clientY - w.top - H / 2 };
      y.x < x.current.x ? m(!0) : y.x > x.current.x && m(!1),
        b((V) => [...V, y].slice(-60)),
        (x.current = y);
    },
    children: d.map((p, w) =>
      e(
        "img",
        {
          src: s,
          alt: "pasted",
          style: {
            position: "absolute",
            left: p.x,
            top: p.y,
            width: s ? `${M}px` : "0px",
            height: s ? `${H}px` : "0px",
            objectFit: "cover",
            display: s ? "block" : "none",
            transform: g ? "scaleX(1)" : "scaleX(-1)",
          },
        },
        `${p.x}-${p.y}-${w}`
      )
    ),
  });
}
J(P, { image: { type: _.Image, title: "Image" } });
var pe = F(j),
  fe = F(P),
  me = G(a),
  he = F(I),
  de = {
    E1PNcLPhI: "(min-width: 1920px)",
    rEPoe4Ktw: "(max-width: 809px)",
    uW9oKq3ho: "(min-width: 810px) and (max-width: 1919px)",
  };
var ge = "framer-Myach",
  xe = {
    E1PNcLPhI: "framer-v-1vtd1u5",
    rEPoe4Ktw: "framer-v-1bpwrd9",
    uW9oKq3ho: "framer-v-132qlnx",
  },
  k = (h, s) => `translateX(-50%) ${s}`,
  T = (h, s) => `translateY(-50%) ${s}`,
  A = (h, s) => `translate(-50%, -50%) ${s}`,
  ue = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  be = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Te = R(),
  we = { Desktop: "E1PNcLPhI", Phone: "rEPoe4Ktw", Tablet: "uW9oKq3ho" },
  ye = ({ height: h, id: s, width: d, ...b }) => {
    var g, m;
    return {
      ...b,
      variant:
        (m = (g = we[b.variant]) !== null && g !== void 0 ? g : b.variant) !==
          null && m !== void 0
          ? m
          : "E1PNcLPhI",
    };
  },
  We = Z(function (h, s) {
    let { activeLocale: d, setLocale: b } = D(),
      { style: g, className: m, layoutId: x, variant: M, ...H } = ye(h);
    U(() => {
      let l = R(void 0, d);
      if (l.robots) {
        let c = document.querySelector('meta[name="robots"]');
        c
          ? c.setAttribute("content", l.robots)
          : ((c = document.createElement("meta")),
            c.setAttribute("name", "robots"),
            c.setAttribute("content", l.robots),
            document.head.appendChild(c));
      }
    }, [void 0, d]),
      X(() => {
        let l = R(void 0, d);
        if (((document.title = l.title || ""), l.viewport)) {
          var c;
          (c = document.querySelector('meta[name="viewport"]')) === null ||
            c === void 0 ||
            c.setAttribute("content", l.viewport);
        }
        let L = l.bodyClassName;
        if (L) {
          let z = document.body;
          z.classList.forEach(
            (Y) => Y.startsWith("framer-body-") && z.classList.remove(Y)
          ),
            z.classList.add(`${l.bodyClassName}-framer-Myach`);
        }
        return () => {
          L &&
            document.body.classList.remove(`${l.bodyClassName}-framer-Myach`);
        };
      }, [void 0, d]);
    let [r, p] = ee(M, de, !1),
      w = void 0,
      V = E(ge, ...[ne]),
      C = N(null),
      oe = S();
    return (
      B({}),
      e($.Provider, {
        value: { primaryVariantId: "E1PNcLPhI", variantClassNames: xe },
        children: f(O, {
          id: x ?? oe,
          children: [
            f(a, {
              ...H,
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
              className: E(V, "framer-1vtd1u5", m),
              ref: s ?? C,
              style: { ...g },
              children: [
                e(a, {
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
                  className: "framer-hnvawe",
                  "data-framer-name": "noise",
                  name: "noise",
                }),
                e(i, {
                  breakpoint: r,
                  overrides: { rEPoe4Ktw: { y: 632 }, uW9oKq3ho: { y: -282 } },
                  children: e(W, {
                    height: 207,
                    width: "189px",
                    y: 798,
                    children: e(v, {
                      className: "framer-15i2frr-container",
                      children: e(j, {
                        height: "100%",
                        id: "pNKv83upm",
                        layoutId: "pNKv83upm",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(i, {
                  breakpoint: r,
                  overrides: {
                    rEPoe4Ktw: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: t(52.00000000000017),
                        pixelHeight: 750,
                        pixelWidth: 354,
                        sizes: "354px",
                        src: "https://framerusercontent.com/images/7tiXdutwHFNmYozsOjwLaO1qf4.png",
                        srcSet:
                          "./images/7tiXdutwHFNmYozsOjwLaO1qf4.png 354w",
                      },
                    },
                    uW9oKq3ho: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: t(-237),
                        pixelHeight: 830,
                        pixelWidth: 1348,
                        sizes: "772px",
                        src: "https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png",
                        srcSet:
                          "https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png?scale-down-to=512 512w,https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png 1348w",
                      },
                    },
                  },
                  children: f(a, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: t(67.00000000000023),
                      pixelHeight: 830,
                      pixelWidth: 1348,
                      sizes: "1348px",
                      src: "https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png",
                      srcSet:
                        "https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png?scale-down-to=512 512w,https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/NmPeeVufZFMiPb67xIj79lpuYgg.png 1348w",
                    },
                    className: "framer-1p6uj9m",
                    children: [
                      f("div", {
                        className: "framer-2cu6pm",
                        children: [
                          e(i, {
                            breakpoint: r,
                            overrides: {
                              rEPoe4Ktw: {
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
                                      nodeId: "EHGICkzTm",
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
                              uW9oKq3ho: {
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
                                      nodeId: "EHGICkzTm",
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
                            children: e(u, {
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
                                    nodeId: "EHGICkzTm",
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
                              className: "framer-1wsdxlq",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),

                          e(i, {
                            breakpoint: r,
                            overrides: {
                              rEPoe4Ktw: {
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
                                      nodeId: "pjcL4AVW9",
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
                              uW9oKq3ho: {
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
                                      nodeId: "pjcL4AVW9",
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
                            children: e(u, {
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
                                    nodeId: "pjcL4AVW9",
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
                              className: "framer-2itszc",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: r,
                            overrides: {
                              rEPoe4Ktw: {
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
                                      nodeId: "LFv9N4R1e",
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
                              uW9oKq3ho: {
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
                                      nodeId: "LFv9N4R1e",
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
                            children: e(u, {
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
                                    nodeId: "LFv9N4R1e",
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
                              className: "framer-1yp9s4e",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: r,
                            overrides: {
                              rEPoe4Ktw: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "wh1lxTK4R",
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
                              uW9oKq3ho: {
                                children: e(o, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(n, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "wh1lxTK4R",
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
                            children: e(u, {
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
                                    "--framer-text-color": "rgb(0, 0, 255)",
                                  },
                                  children: e(n, {
                                    href: { webPageId: "fQwylL6Ek" },
                                    nodeId: "wh1lxTK4R",
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
                              className: "framer-bnrr6o",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: r,
                            overrides: {
                              rEPoe4Ktw: {
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
                                      nodeId: "xig3xFcnk",
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
                              uW9oKq3ho: {
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
                                      nodeId: "xig3xFcnk",
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
                            children: e(u, {
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
                                    nodeId: "xig3xFcnk",
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
                              className: "framer-1khqmmh",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e("div", {
                        background: { alt: "", fit: "fill" },
                        className: "framer-1guq5cn",
                        children: e(i, {
                          breakpoint: r,
                          overrides: {
                            rEPoe4Ktw: {
                              background: {
                                alt: "",
                                backgroundSize: 2,
                                fit: "tile",
                                loading: t(165.00000000000023),
                                pixelHeight: 159,
                                pixelWidth: 168,
                                positionX: "left",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/YnQ3C1Nd8NxYjQoXLwGgqIUE.png",
                              },
                            },
                            uW9oKq3ho: {
                              background: {
                                alt: "",
                                backgroundSize: 2,
                                fit: "tile",
                                loading: t(-136),
                                pixelHeight: 159,
                                pixelWidth: 168,
                                positionX: "left",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/YnQ3C1Nd8NxYjQoXLwGgqIUE.png",
                              },
                            },
                          },
                          children: f(a, {
                            background: {
                              alt: "",
                              backgroundSize: 2,
                              fit: "tile",
                              loading: t(244.00000000000023),
                              pixelHeight: 159,
                              pixelWidth: 168,
                              positionX: "left",
                              positionY: "top",
                              src: "https://framerusercontent.com/images/YnQ3C1Nd8NxYjQoXLwGgqIUE.png",
                            },
                            className: "framer-u372td",
                            children: [
                              e(i, {
                                breakpoint: r,
                                overrides: {
                                  rEPoe4Ktw: {
                                    background: {
                                      alt: "",
                                      backgroundSize: 2,
                                      fit: "tile",
                                      loading: t(1018.0000000000002),
                                      pixelHeight: 150,
                                      pixelWidth: 150,
                                      positionX: "left",
                                      positionY: "top",
                                      src: "https://framerusercontent.com/images/UYF3OigqsLrl0HRMImnktQUZs.gif",
                                    },
                                  },
                                  uW9oKq3ho: {
                                    background: {
                                      alt: "",
                                      backgroundSize: 2,
                                      fit: "tile",
                                      loading: t(497),
                                      pixelHeight: 150,
                                      pixelWidth: 150,
                                      positionX: "left",
                                      positionY: "top",
                                      src: "https://framerusercontent.com/images/UYF3OigqsLrl0HRMImnktQUZs.gif",
                                    },
                                  },
                                },
                                children: e(a, {
                                  background: {
                                    alt: "",
                                    backgroundSize: 2,
                                    fit: "tile",
                                    loading: t(1087.0000000000002),
                                    pixelHeight: 150,
                                    pixelWidth: 150,
                                    positionX: "left",
                                    positionY: "top",
                                    src: "https://framerusercontent.com/images/UYF3OigqsLrl0HRMImnktQUZs.gif",
                                  },
                                  className: "framer-3b6ctp",
                                  "data-framer-name": "3rd bg",
                                  name: "3rd bg",
                                }),
                              }),
                              f("div", {
                                className: "framer-jcwt1x",
                                "data-framer-name": "animals",
                                name: "animals",
                                children: [
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 64,
                                          intrinsicWidth: 141,
                                          loading: t(746.0000000000002),
                                          pixelHeight: 64,
                                          pixelWidth: 141,
                                          src: "https://framerusercontent.com/images/PELzP4zqhugogE4gu7i2Hu7AAc.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 64,
                                          intrinsicWidth: 141,
                                          loading: t(158),
                                          pixelHeight: 64,
                                          pixelWidth: 141,
                                          src: "https://framerusercontent.com/images/PELzP4zqhugogE4gu7i2Hu7AAc.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 64,
                                        intrinsicWidth: 141,
                                        loading: t(815.0000000000002),
                                        pixelHeight: 64,
                                        pixelWidth: 141,
                                        src: "https://framerusercontent.com/images/PELzP4zqhugogE4gu7i2Hu7AAc.png",
                                      },
                                      className: "framer-315kq3",
                                      "data-framer-name": "30",
                                      name: "30",
                                      transformTemplate: k,
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 43,
                                          intrinsicWidth: 63,
                                          loading: t(1163.0000000000002),
                                          pixelHeight: 43,
                                          pixelWidth: 63,
                                          src: "https://framerusercontent.com/images/KYNVEtjN4nu35zpqeQD3VQCucFA.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 43,
                                          intrinsicWidth: 63,
                                          loading: t(592),
                                          pixelHeight: 43,
                                          pixelWidth: 63,
                                          src: "https://framerusercontent.com/images/KYNVEtjN4nu35zpqeQD3VQCucFA.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 43,
                                        intrinsicWidth: 63,
                                        loading: t(1232.0000000000002),
                                        pixelHeight: 43,
                                        pixelWidth: 63,
                                        src: "https://framerusercontent.com/images/KYNVEtjN4nu35zpqeQD3VQCucFA.png",
                                      },
                                      className: "framer-19dte49",
                                      "data-framer-name": "22 (1)",
                                      name: "22 (1)",
                                      transformTemplate: k,
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 100,
                                          intrinsicWidth: 290,
                                          loading: t(903.0000000000005),
                                          pixelHeight: 100,
                                          pixelWidth: 290,
                                          src: "https://framerusercontent.com/images/FMPqp9rWqiOzOJWMrhYKRbGFNUU.gif",
                                        },
                                        transformTemplate: A,
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 100,
                                          intrinsicWidth: 290,
                                          loading: t(424),
                                          pixelHeight: 100,
                                          pixelWidth: 290,
                                          src: "https://framerusercontent.com/images/FMPqp9rWqiOzOJWMrhYKRbGFNUU.gif",
                                        },
                                        transformTemplate: void 0,
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 290,
                                        loading: t(972.0000000000005),
                                        pixelHeight: 100,
                                        pixelWidth: 290,
                                        src: "https://framerusercontent.com/images/FMPqp9rWqiOzOJWMrhYKRbGFNUU.gif",
                                      },
                                      className: "framer-p57rn2",
                                      "data-framer-name": "8",
                                      name: "8",
                                      transformTemplate: T,
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 52,
                                          intrinsicWidth: 138,
                                          loading: t(681.0000000000002),
                                          pixelHeight: 52,
                                          pixelWidth: 138,
                                          src: "https://framerusercontent.com/images/qEsy0zjz7qZVkK5MyNU2osfNFgU.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 52,
                                          intrinsicWidth: 138,
                                          loading: t(93),
                                          pixelHeight: 52,
                                          pixelWidth: 138,
                                          src: "https://framerusercontent.com/images/qEsy0zjz7qZVkK5MyNU2osfNFgU.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 52,
                                        intrinsicWidth: 138,
                                        loading: t(750.0000000000002),
                                        pixelHeight: 52,
                                        pixelWidth: 138,
                                        src: "https://framerusercontent.com/images/qEsy0zjz7qZVkK5MyNU2osfNFgU.png",
                                      },
                                      className: "framer-gov37q",
                                      "data-framer-name": "15",
                                      name: "15",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 30,
                                          intrinsicWidth: 54,
                                          loading: t(932.0000000000005),
                                          pixelHeight: 30,
                                          pixelWidth: 54,
                                          src: "https://framerusercontent.com/images/GfVB18GDF68tNVTwxNbKVFuKn8.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 30,
                                          intrinsicWidth: 54,
                                          loading: t(312.05447070914715),
                                          pixelHeight: 30,
                                          pixelWidth: 54,
                                          src: "https://framerusercontent.com/images/GfVB18GDF68tNVTwxNbKVFuKn8.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 30,
                                        intrinsicWidth: 54,
                                        loading: t(1001.0000000000005),
                                        pixelHeight: 30,
                                        pixelWidth: 54,
                                        src: "https://framerusercontent.com/images/GfVB18GDF68tNVTwxNbKVFuKn8.png",
                                      },
                                      className: "framer-18lhcra",
                                      "data-framer-name": "12 (1)",
                                      name: "12 (1)",
                                      transformTemplate: T,
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 174,
                                          intrinsicWidth: 32,
                                          loading: t(1144.0000000000002),
                                          pixelHeight: 174,
                                          pixelWidth: 32,
                                          src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 174,
                                          intrinsicWidth: 32,
                                          loading: t(573),
                                          pixelHeight: 174,
                                          pixelWidth: 32,
                                          src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 174,
                                        intrinsicWidth: 32,
                                        loading: t(1213.0000000000002),
                                        pixelHeight: 174,
                                        pixelWidth: 32,
                                        src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                      },
                                      className: "framer-193uq6k",
                                      "data-framer-name": "7 (1)",
                                      name: "7 (1)",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 174,
                                          intrinsicWidth: 32,
                                          loading: t(1144.0000000000002),
                                          pixelHeight: 174,
                                          pixelWidth: 32,
                                          src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 174,
                                          intrinsicWidth: 32,
                                          loading: t(573),
                                          pixelHeight: 174,
                                          pixelWidth: 32,
                                          src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 174,
                                        intrinsicWidth: 32,
                                        loading: t(1213.0000000000002),
                                        pixelHeight: 174,
                                        pixelWidth: 32,
                                        src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                      },
                                      className: "framer-908c5c",
                                      "data-framer-name": "7 (1)",
                                      name: "7 (1)",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 174,
                                          intrinsicWidth: 32,
                                          loading: t(1144.0000000000002),
                                          pixelHeight: 174,
                                          pixelWidth: 32,
                                          src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                        },
                                        transformTemplate: k,
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 174,
                                          intrinsicWidth: 32,
                                          loading: t(573),
                                          pixelHeight: 174,
                                          pixelWidth: 32,
                                          src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 174,
                                        intrinsicWidth: 32,
                                        loading: t(1213.0000000000002),
                                        pixelHeight: 174,
                                        pixelWidth: 32,
                                        src: "https://framerusercontent.com/images/v3j5sMf5Dhnz1pbrODzh5e7oPfo.gif",
                                      },
                                      className: "framer-10ekypb",
                                      "data-framer-name": "7 (1)",
                                      name: "7 (1)",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 192,
                                          intrinsicWidth: 249,
                                          loading: t(1210.8915961840653),
                                          pixelHeight: 192,
                                          pixelWidth: 249,
                                          src: "https://framerusercontent.com/images/AgESKNJsvhLYgb30l8vd5qpPJk.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 192,
                                          intrinsicWidth: 249,
                                          loading: t(586),
                                          pixelHeight: 192,
                                          pixelWidth: 249,
                                          src: "https://framerusercontent.com/images/AgESKNJsvhLYgb30l8vd5qpPJk.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 192,
                                        intrinsicWidth: 249,
                                        loading: t(1226.0000000000002),
                                        pixelHeight: 192,
                                        pixelWidth: 249,
                                        src: "https://framerusercontent.com/images/AgESKNJsvhLYgb30l8vd5qpPJk.gif",
                                      },
                                      className: "framer-baued6",
                                      "data-framer-name": "22",
                                      name: "22",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 192,
                                          intrinsicWidth: 249,
                                          loading: t(1210.8915961840653),
                                          pixelHeight: 192,
                                          pixelWidth: 249,
                                          src: "https://framerusercontent.com/images/AgESKNJsvhLYgb30l8vd5qpPJk.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 192,
                                          intrinsicWidth: 249,
                                          loading: t(586),
                                          pixelHeight: 192,
                                          pixelWidth: 249,
                                          src: "https://framerusercontent.com/images/AgESKNJsvhLYgb30l8vd5qpPJk.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 192,
                                        intrinsicWidth: 249,
                                        loading: t(1226.0000000000002),
                                        pixelHeight: 192,
                                        pixelWidth: 249,
                                        src: "https://framerusercontent.com/images/AgESKNJsvhLYgb30l8vd5qpPJk.gif",
                                      },
                                      className: "framer-npw3z0",
                                      "data-framer-name": "22",
                                      name: "22",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(1236.1715916383134),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(638.9967041015625),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 69,
                                        intrinsicWidth: 109,
                                        loading: t(1278.9967041015627),
                                        pixelHeight: 69,
                                        pixelWidth: 109,
                                        src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                      },
                                      className: "framer-f8jbw8",
                                      "data-framer-name": "9 (1)",
                                      name: "9 (1)",
                                      style: { rotate: 16 },
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(1243.1715916383137),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                        transformTemplate: k,
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(638.9967041015625),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 69,
                                        intrinsicWidth: 109,
                                        loading: t(1278.9967041015627),
                                        pixelHeight: 69,
                                        pixelWidth: 109,
                                        src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                      },
                                      className: "framer-1u8s4vb",
                                      "data-framer-name": "9 (1)",
                                      name: "9 (1)",
                                      style: { rotate: 16 },
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(1257.1715916383137),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(668.9966662082995),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 69,
                                        intrinsicWidth: 109,
                                        loading: t(1308.9967041015627),
                                        pixelHeight: 69,
                                        pixelWidth: 109,
                                        src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                      },
                                      className: "framer-sluiy2",
                                      "data-framer-name": "9 (1)",
                                      name: "9 (1)",
                                      style: { rotate: 16 },
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(1267.1715916383137),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(685.9966662082993),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 69,
                                        intrinsicWidth: 109,
                                        loading: t(1325.9967041015627),
                                        pixelHeight: 69,
                                        pixelWidth: 109,
                                        src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                      },
                                      className: "framer-1664m5j",
                                      "data-framer-name": "9 (1)",
                                      name: "9 (1)",
                                      style: { rotate: 16 },
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(1270.1715916383134),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 109,
                                          loading: t(673.9967041015625),
                                          pixelHeight: 69,
                                          pixelWidth: 109,
                                          src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 69,
                                        intrinsicWidth: 109,
                                        loading: t(1313.9967041015627),
                                        pixelHeight: 69,
                                        pixelWidth: 109,
                                        src: "https://framerusercontent.com/images/rslFLHhZMzHA7S8lwi4e2CnxR8k.gif",
                                      },
                                      className: "framer-1dhtyri",
                                      "data-framer-name": "9 (1)",
                                      name: "9 (1)",
                                      style: { rotate: 16 },
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 83,
                                          intrinsicWidth: 273,
                                          loading: t(460.0000000000002),
                                          pixelHeight: 83,
                                          pixelWidth: 273,
                                          src: "https://framerusercontent.com/images/b2dYc8GAhU4LuplIMcnjZsvv8ug.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 83,
                                          intrinsicWidth: 273,
                                          loading: t(402),
                                          pixelHeight: 83,
                                          pixelWidth: 273,
                                          src: "https://framerusercontent.com/images/b2dYc8GAhU4LuplIMcnjZsvv8ug.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 83,
                                        intrinsicWidth: 273,
                                        loading: t(515.0000000000002),
                                        pixelHeight: 83,
                                        pixelWidth: 273,
                                        src: "https://framerusercontent.com/images/b2dYc8GAhU4LuplIMcnjZsvv8ug.png",
                                      },
                                      className: "framer-ogesij",
                                      "data-framer-name": "mermaid",
                                      name: "mermaid",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 37,
                                          intrinsicWidth: 100,
                                          loading: t(1317.0000000000002),
                                          pixelHeight: 37,
                                          pixelWidth: 100,
                                          src: "https://framerusercontent.com/images/5nF5vOWEZyDes1GM94lZjOWdw.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 37,
                                          intrinsicWidth: 100,
                                          loading: t(726),
                                          pixelHeight: 37,
                                          pixelWidth: 100,
                                          src: "https://framerusercontent.com/images/5nF5vOWEZyDes1GM94lZjOWdw.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 37,
                                        intrinsicWidth: 100,
                                        loading: t(1366.0000000000002),
                                        pixelHeight: 37,
                                        pixelWidth: 100,
                                        src: "https://framerusercontent.com/images/5nF5vOWEZyDes1GM94lZjOWdw.png",
                                      },
                                      className: "framer-gcoaz0",
                                      "data-framer-name": "crab",
                                      name: "crab",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 45,
                                          intrinsicWidth: 150,
                                          loading: t(570.0000000000002),
                                          pixelHeight: 45,
                                          pixelWidth: 150,
                                          src: "https://framerusercontent.com/images/FkScW3Y2kuR43dVWm8vrnM5uw.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 45,
                                          intrinsicWidth: 150,
                                          loading: t(-18),
                                          pixelHeight: 45,
                                          pixelWidth: 150,
                                          src: "https://framerusercontent.com/images/FkScW3Y2kuR43dVWm8vrnM5uw.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 45,
                                        intrinsicWidth: 150,
                                        loading: t(639.0000000000002),
                                        pixelHeight: 45,
                                        pixelWidth: 150,
                                        src: "https://framerusercontent.com/images/FkScW3Y2kuR43dVWm8vrnM5uw.gif",
                                      },
                                      className: "framer-1i8fpxa",
                                      "data-framer-name": "fish",
                                      name: "fish",
                                    }),
                                  }),
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 72,
                                          intrinsicWidth: 67,
                                          loading: t(512.0000000000002),
                                          pixelHeight: 72,
                                          pixelWidth: 67,
                                          src: "https://framerusercontent.com/images/kXmfjKQj9RNtsxxOVn3phpB2G0M.gif",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 72,
                                          intrinsicWidth: 67,
                                          loading: t(144),
                                          pixelHeight: 72,
                                          pixelWidth: 67,
                                          src: "https://framerusercontent.com/images/kXmfjKQj9RNtsxxOVn3phpB2G0M.gif",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 72,
                                        intrinsicWidth: 67,
                                        loading: t(721.0000000000002),
                                        pixelHeight: 72,
                                        pixelWidth: 67,
                                        src: "https://framerusercontent.com/images/kXmfjKQj9RNtsxxOVn3phpB2G0M.gif",
                                      },
                                      className: "framer-14ogbwi",
                                      "data-framer-name": "fish",
                                      name: "fish",
                                    }),
                                  }),
                                ],
                              }),
                              e(W, {
                                children: e(v, {
                                  className: "framer-1457pnq-container",
                                  children: e(P, {
                                    height: "100%",
                                    id: "NduNsZ0vK",
                                    image:
                                      "https://framerusercontent.com/images/PqrBX1ynhNDDv9i6kM0RlbH9kE.gif",
                                    layoutId: "NduNsZ0vK",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(i, {
                                breakpoint: r,
                                overrides: {
                                  rEPoe4Ktw: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 105,
                                      intrinsicWidth: 150,
                                      loading: t(593.5000000000005),
                                      pixelHeight: 105,
                                      pixelWidth: 150,
                                      src: "https://framerusercontent.com/images/bXuwCrr2VXo31DRHJZcGC3ueog.png",
                                    },
                                  },
                                  uW9oKq3ho: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 105,
                                      intrinsicWidth: 150,
                                      loading: t(243.71477272727287),
                                      pixelHeight: 105,
                                      pixelWidth: 150,
                                      src: "https://framerusercontent.com/images/bXuwCrr2VXo31DRHJZcGC3ueog.png",
                                    },
                                  },
                                },
                                children: e(a, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 105,
                                    intrinsicWidth: 150,
                                    loading: t(657.5000000000005),
                                    pixelHeight: 105,
                                    pixelWidth: 150,
                                    src: "https://framerusercontent.com/images/bXuwCrr2VXo31DRHJZcGC3ueog.png",
                                  },
                                  className: "framer-1vtbc22",
                                  "data-framer-name": "sub",
                                  name: "sub",
                                  transformTemplate: A,
                                }),
                              }),
                              e(n, {
                                href: "T.me/hodlcatlife",
                                nodeId: "G9TRFo3Pv",
                                children: e(i, {
                                  breakpoint: r,
                                  overrides: {
                                    rEPoe4Ktw: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 125,
                                        intrinsicWidth: 661,
                                        loading: t(728.0000000000005),
                                        pixelHeight: 125,
                                        pixelWidth: 661,
                                        sizes: "192px",
                                        src: "https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png?scale-down-to=512 512w,https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png 661w",
                                      },
                                      transformTemplate: void 0,
                                    },
                                    uW9oKq3ho: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 125,
                                        intrinsicWidth: 661,
                                        loading: t(384),
                                        pixelHeight: 125,
                                        pixelWidth: 661,
                                        sizes: "192px",
                                        src: "https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png?scale-down-to=512 512w,https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png 661w",
                                      },
                                      transformTemplate: void 0,
                                    },
                                  },
                                  children: e(me, {
                                    __framer__loop: be,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: ue,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 125,
                                      intrinsicWidth: 661,
                                      loading: t(818.0000000000005),
                                      pixelHeight: 125,
                                      pixelWidth: 661,
                                      sizes: "192px",
                                      src: "https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png",
                                      srcSet:
                                        "https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png?scale-down-to=512 512w,https://framerusercontent.com/images/oqJcj9Z1RzDlzYWqFVUlUxx0.png 661w",
                                    },
                                    className: "framer-7yktae framer-1o8ii4p",
                                    "data-framer-name":
                                      "Cool Text - TELEGRAM 467058691924183",
                                    name: "Cool Text - TELEGRAM 467058691924183",
                                    style: { rotate: -15 },
                                    transformTemplate: A,
                                  }),
                                }),
                              }),
                              e(W, {
                                children: e(v, {
                                  className: "framer-hkbr8h-container",
                                  children: e(I, {
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: "100%",
                                    id: "C28DN2J_S",
                                    isMixedBorderRadius: !1,
                                    layoutId: "C28DN2J_S",
                                    loop: !0,
                                    muted: !0,
                                    objectFit: "cover",
                                    playing: !0,
                                    posterEnabled: !0,
                                    srcFile:
                                      "https://framerusercontent.com/assets/TjrfA0Gf3EH2pLaC4qPWgGOupKI.mp4",
                                    srcType: "Upload",
                                    srcUrl:
                                      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                    startTime: 0,
                                    style: { height: "100%", width: "100%" },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(W, {
                                children: e(i, {
                                  breakpoint: r,
                                  overrides: {
                                    rEPoe4Ktw: { style: { rotate: 183 } },
                                    uW9oKq3ho: { style: { rotate: 179 } },
                                  },
                                  children: e(v, {
                                    className: "framer-14tol28-container",
                                    style: { rotate: 197 },
                                    children: e(I, {
                                      backgroundColor: "rgba(0, 0, 0, 0)",
                                      borderRadius: 0,
                                      bottomLeftRadius: 0,
                                      bottomRightRadius: 0,
                                      controls: !1,
                                      height: "100%",
                                      id: "WnPmxtWCf",
                                      isMixedBorderRadius: !1,
                                      layoutId: "WnPmxtWCf",
                                      loop: !0,
                                      muted: !0,
                                      objectFit: "cover",
                                      playing: !0,
                                      posterEnabled: !0,
                                      srcFile:
                                        "https://framerusercontent.com/assets/TjrfA0Gf3EH2pLaC4qPWgGOupKI.mp4",
                                      srcType: "Upload",
                                      srcUrl:
                                        "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                      startTime: 0,
                                      style: { height: "100%", width: "100%" },
                                      topLeftRadius: 0,
                                      topRightRadius: 0,
                                      volume: 25,
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              f("div", {
                                className: "framer-9gcv39",
                                children: [
                                  e(i, {
                                    breakpoint: r,
                                    overrides: {
                                      rEPoe4Ktw: {
                                        background: {
                                          alt: "",
                                          backgroundSize: 1.35,
                                          fit: "tile",
                                          loading: t(151.00000000000023),
                                          pixelHeight: 360,
                                          pixelWidth: 48,
                                          positionX: "left",
                                          positionY: "top",
                                          src: "https://framerusercontent.com/images/DDIzY5aLfxYO9LN14a4qPYdNfQ.png",
                                        },
                                      },
                                      uW9oKq3ho: {
                                        background: {
                                          alt: "",
                                          backgroundSize: 1.35,
                                          fit: "tile",
                                          loading: t(-150),
                                          pixelHeight: 360,
                                          pixelWidth: 48,
                                          positionX: "left",
                                          positionY: "top",
                                          src: "https://framerusercontent.com/images/DDIzY5aLfxYO9LN14a4qPYdNfQ.png",
                                        },
                                      },
                                    },
                                    children: e(a, {
                                      background: {
                                        alt: "",
                                        backgroundSize: 1.35,
                                        fit: "tile",
                                        loading: t(244.00000000000023),
                                        pixelHeight: 360,
                                        pixelWidth: 48,
                                        positionX: "left",
                                        positionY: "top",
                                        src: "https://framerusercontent.com/images/DDIzY5aLfxYO9LN14a4qPYdNfQ.png",
                                      },
                                      className: "framer-1c6r6uo",
                                    }),
                                  }),
                                  f("div", {
                                    className: "framer-19g3aqh",
                                    "data-framer-name": "animals",
                                    name: "animals",
                                    children: [
                                      e(i, {
                                        breakpoint: r,
                                        overrides: {
                                          rEPoe4Ktw: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 70,
                                              intrinsicWidth: 70,
                                              loading: t(177.00000000000023),
                                              pixelHeight: 70,
                                              pixelWidth: 70,
                                              src: "https://framerusercontent.com/images/CHbnmys6cGCTxrSzzdqqddlhf6I.png",
                                            },
                                          },
                                          uW9oKq3ho: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 70,
                                              intrinsicWidth: 70,
                                              loading: t(-124),
                                              pixelHeight: 70,
                                              pixelWidth: 70,
                                              src: "https://framerusercontent.com/images/CHbnmys6cGCTxrSzzdqqddlhf6I.png",
                                            },
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 70,
                                            intrinsicWidth: 70,
                                            loading: t(270.0000000000002),
                                            pixelHeight: 70,
                                            pixelWidth: 70,
                                            src: "https://framerusercontent.com/images/CHbnmys6cGCTxrSzzdqqddlhf6I.png",
                                          },
                                          className: "framer-1htc2ip",
                                          "data-framer-name": "8",
                                          name: "8",
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: r,
                                        overrides: {
                                          rEPoe4Ktw: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 41,
                                              intrinsicWidth: 210,
                                              loading: t(307.0000000000002),
                                              pixelHeight: 41,
                                              pixelWidth: 210,
                                              src: "https://framerusercontent.com/images/n90iauImHwYwh4mGi3X5f6e3NI.gif",
                                            },
                                            transformTemplate: void 0,
                                          },
                                          uW9oKq3ho: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 41,
                                              intrinsicWidth: 210,
                                              loading: t(6),
                                              pixelHeight: 41,
                                              pixelWidth: 210,
                                              src: "https://framerusercontent.com/images/n90iauImHwYwh4mGi3X5f6e3NI.gif",
                                            },
                                            transformTemplate: void 0,
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 41,
                                            intrinsicWidth: 210,
                                            loading: t(400.0000000000002),
                                            pixelHeight: 41,
                                            pixelWidth: 210,
                                            src: "https://framerusercontent.com/images/n90iauImHwYwh4mGi3X5f6e3NI.gif",
                                          },
                                          className: "framer-zdurv7",
                                          "data-framer-name": "111111111",
                                          name: "111111111",
                                          transformTemplate: k,
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: r,
                                        overrides: {
                                          rEPoe4Ktw: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 61,
                                              intrinsicWidth: 88,
                                              loading: t(274.5000000000003),
                                              pixelHeight: 61,
                                              pixelWidth: 88,
                                              src: "https://framerusercontent.com/images/L6Kuz2Tlf6g8E9hcednBMsq64M.gif",
                                            },
                                          },
                                          uW9oKq3ho: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 61,
                                              intrinsicWidth: 88,
                                              loading: t(-26.499999999999957),
                                              pixelHeight: 61,
                                              pixelWidth: 88,
                                              src: "https://framerusercontent.com/images/L6Kuz2Tlf6g8E9hcednBMsq64M.gif",
                                            },
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 61,
                                            intrinsicWidth: 88,
                                            loading: t(367.5000000000003),
                                            pixelHeight: 61,
                                            pixelWidth: 88,
                                            src: "https://framerusercontent.com/images/L6Kuz2Tlf6g8E9hcednBMsq64M.gif",
                                          },
                                          className: "framer-ron2g5",
                                          "data-framer-name": "4544",
                                          name: "4544",
                                          transformTemplate: T,
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: r,
                                        overrides: {
                                          rEPoe4Ktw: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 81,
                                              intrinsicWidth: 132,
                                              loading: t(307.0000000000002),
                                              pixelHeight: 81,
                                              pixelWidth: 132,
                                              src: "https://framerusercontent.com/images/HRh0kb7JX7xbUsvjW3F8IjjBFw8.png",
                                            },
                                          },
                                          uW9oKq3ho: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 81,
                                              intrinsicWidth: 132,
                                              loading: t(6),
                                              pixelHeight: 81,
                                              pixelWidth: 132,
                                              src: "https://framerusercontent.com/images/HRh0kb7JX7xbUsvjW3F8IjjBFw8.png",
                                            },
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 81,
                                            intrinsicWidth: 132,
                                            loading: t(400.0000000000002),
                                            pixelHeight: 81,
                                            pixelWidth: 132,
                                            src: "https://framerusercontent.com/images/HRh0kb7JX7xbUsvjW3F8IjjBFw8.png",
                                          },
                                          className: "framer-1eptw59",
                                          "data-framer-name": "17 (1)",
                                          name: "17 (1)",
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: r,
                                        overrides: {
                                          rEPoe4Ktw: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 160,
                                              loading: t(296.0000000000002),
                                              pixelHeight: 40,
                                              pixelWidth: 160,
                                              src: "https://framerusercontent.com/images/s4dHoeeLwIYxq9VdKNFvWtrUL4.gif",
                                            },
                                          },
                                          uW9oKq3ho: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 40,
                                              intrinsicWidth: 160,
                                              loading: t(-5),
                                              pixelHeight: 40,
                                              pixelWidth: 160,
                                              src: "https://framerusercontent.com/images/s4dHoeeLwIYxq9VdKNFvWtrUL4.gif",
                                            },
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 40,
                                            intrinsicWidth: 160,
                                            loading: t(389.0000000000002),
                                            pixelHeight: 40,
                                            pixelWidth: 160,
                                            src: "https://framerusercontent.com/images/s4dHoeeLwIYxq9VdKNFvWtrUL4.gif",
                                          },
                                          className: "framer-osalkd",
                                          "data-framer-name": "111111",
                                          name: "111111",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
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
  ve = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Myach.framer-1o8ii4p, .framer-Myach .framer-1o8ii4p { display: block; }",
    ".framer-Myach.framer-1vtd1u5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1080px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1920px; }",
    ".framer-Myach .framer-hnvawe { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; opacity: 0.12; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 3; }",
    ".framer-Myach .framer-15i2frr-container { aspect-ratio: 0.9110169491525424 / 1; bottom: 75px; flex: none; height: var(--framer-aspect-ratio-supported, 207px); position: absolute; right: 37px; width: 189px; z-index: 2; }",
    ".framer-Myach .framer-1p6uj9m { flex: none; height: 828px; left: calc(50.00000000000002% - 1348px / 2); overflow: hidden; position: absolute; top: calc(44.53703703703706% - 828px / 2); width: 1348px; z-index: 1; }",
    ".framer-Myach .framer-2cu6pm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; left: 6px; opacity: 0.8; overflow: hidden; padding: 0px; position: absolute; top: 97px; width: 464px; }",
    ".framer-Myach .framer-1wsdxlq, .framer-Myach .framer-1w39ltk, .framer-Myach .framer-2itszc, .framer-Myach .framer-1yp9s4e, .framer-Myach .framer-bnrr6o, .framer-Myach .framer-1khqmmh { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-Myach .framer-1guq5cn { bottom: 42px; flex: none; height: 609px; left: calc(49.77744807121664% - 1338px / 2); overflow: auto; position: absolute; width: 1338px; z-index: 1; }",
    ".framer-Myach .framer-u372td { bottom: -548px; flex: none; left: 7px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-Myach .framer-3b6ctp { bottom: 0px; flex: none; height: 314px; left: -2px; overflow: hidden; position: absolute; right: -18px; }",
    ".framer-Myach .framer-jcwt1x { bottom: -87px; flex: none; height: 973px; left: -24px; overflow: hidden; position: absolute; right: -52px; }",
    ".framer-Myach .framer-315kq3 { aspect-ratio: 2.203125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); left: 50%; overflow: visible; position: absolute; top: 300px; transform: translateX(-50%); width: 141px; }",
    ".framer-Myach .framer-19dte49 { aspect-ratio: 1.4651162790697674 / 1; bottom: 213px; flex: none; height: var(--framer-aspect-ratio-supported, 43px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 63px; }",
    ".framer-Myach .framer-p57rn2 { aspect-ratio: 2.9 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 100px); left: 884px; overflow: visible; position: absolute; top: 52%; transform: translateY(-50%); width: 290px; }",
    ".framer-Myach .framer-gov37q { aspect-ratio: 2.6538461538461537 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 52px); left: 320px; overflow: visible; position: absolute; top: 235px; width: 138px; }",
    ".framer-Myach .framer-18lhcra { aspect-ratio: 1.8 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); left: 321px; overflow: visible; position: absolute; top: 51%; transform: translateY(-50%); width: 54px; }",
    ".framer-Myach .framer-193uq6k { aspect-ratio: 0.1839080459770115 / 1; bottom: 101px; flex: none; height: var(--framer-aspect-ratio-supported, 174px); left: 443px; overflow: visible; position: absolute; width: 32px; }",
    ".framer-Myach .framer-908c5c { aspect-ratio: 0.1839080459770115 / 1; bottom: 101px; flex: none; height: var(--framer-aspect-ratio-supported, 174px); left: 883px; overflow: visible; position: absolute; width: 32px; }",
    ".framer-Myach .framer-10ekypb { aspect-ratio: 0.1839080459770115 / 1; bottom: 101px; flex: none; height: var(--framer-aspect-ratio-supported, 174px); left: 973px; overflow: visible; position: absolute; width: 32px; }",
    ".framer-Myach .framer-baued6 { aspect-ratio: 1.296875 / 1; bottom: 70px; flex: none; height: var(--framer-aspect-ratio-supported, 192px); left: 455px; overflow: visible; position: absolute; width: 249px; }",
    ".framer-Myach .framer-npw3z0 { aspect-ratio: 1.296875 / 1; bottom: 70px; flex: none; height: var(--framer-aspect-ratio-supported, 192px); overflow: visible; position: absolute; right: 0px; width: 249px; }",
    ".framer-Myach .framer-f8jbw8 { aspect-ratio: 1.5797101449275361 / 1; bottom: 74px; flex: none; height: var(--framer-aspect-ratio-supported, 135px); left: 15px; overflow: visible; position: absolute; width: 213px; }",
    ".framer-Myach .framer-1u8s4vb { aspect-ratio: 1.5797101449275361 / 1; bottom: 74px; flex: none; height: var(--framer-aspect-ratio-supported, 135px); left: 864px; overflow: visible; position: absolute; width: 213px; }",
    ".framer-Myach .framer-sluiy2 { aspect-ratio: 1.5797101449275361 / 1; bottom: 44px; flex: none; height: var(--framer-aspect-ratio-supported, 135px); left: 954px; overflow: visible; position: absolute; width: 213px; }",
    ".framer-Myach .framer-1664m5j { aspect-ratio: 1.5797101449275361 / 1; bottom: 27px; flex: none; height: var(--framer-aspect-ratio-supported, 135px); left: 744px; overflow: visible; position: absolute; width: 213px; }",
    ".framer-Myach .framer-1dhtyri { aspect-ratio: 1.5797101449275361 / 1; bottom: 39px; flex: none; height: var(--framer-aspect-ratio-supported, 135px); left: 183px; overflow: visible; position: absolute; width: 213px; }",
    ".framer-Myach .framer-ogesij { aspect-ratio: 3.289156626506024 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 83px); left: 740px; overflow: visible; position: absolute; top: 0px; width: 273px; }",
    ".framer-Myach .framer-gcoaz0 { aspect-ratio: 2.7027027027027026 / 1; bottom: 85px; flex: none; height: var(--framer-aspect-ratio-supported, 37px); left: 396px; overflow: visible; position: absolute; width: 100px; }",
    ".framer-Myach .framer-1i8fpxa { aspect-ratio: 3.3333333333333335 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 45px); left: 58px; overflow: visible; position: absolute; top: 124px; width: 150px; }",
    ".framer-Myach .framer-14ogbwi { aspect-ratio: 0.9305555555555556 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 72px); left: 1120px; overflow: visible; position: absolute; top: 206px; width: 67px; z-index: 1; }",
    ".framer-Myach .framer-1457pnq-container { bottom: 0px; flex: none; height: 920px; left: -7px; position: absolute; right: 0px; }",
    ".framer-Myach .framer-1vtbc22 { aspect-ratio: 1.4285714285714286 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 267px); left: 50%; overflow: visible; pointer-events: none; position: absolute; top: 47%; transform: translate(-50%, -50%); width: 381px; }",
    ".framer-Myach .framer-7yktae { aspect-ratio: 5.288 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); left: 51%; overflow: visible; position: absolute; text-decoration: none; top: 51%; transform: translate(-50%, -50%); width: 192px; }",
    ".framer-Myach .framer-hkbr8h-container { flex: none; height: 252px; left: calc(51.21765601217658% - 500px / 2); mix-blend-mode: color-dodge; pointer-events: none; position: absolute; top: 297px; width: 500px; }",
    ".framer-Myach .framer-14tol28-container { bottom: 247px; flex: none; height: 252px; left: 302px; mix-blend-mode: color-dodge; pointer-events: none; position: absolute; width: 500px; }",
    ".framer-Myach .framer-9gcv39 { flex: none; height: 237px; left: -10px; overflow: hidden; position: absolute; right: -18px; top: 0px; }",
    ".framer-Myach .framer-1c6r6uo { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-Myach .framer-19g3aqh { bottom: 0px; flex: none; height: 211px; left: calc(50.67064083457529% - 1301px / 2); overflow: hidden; position: absolute; width: 1301px; }",
    ".framer-Myach .framer-1htc2ip { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); left: 960px; overflow: visible; position: absolute; top: 0px; width: 70px; }",
    ".framer-Myach .framer-zdurv7 { aspect-ratio: 5.121951219512195 / 1; bottom: 13px; flex: none; height: var(--framer-aspect-ratio-supported, 68px); left: 46%; overflow: visible; position: absolute; transform: translateX(-50%); width: 349px; }",
    ".framer-Myach .framer-ron2g5 { aspect-ratio: 1.4426229508196722 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 35px); left: 345px; overflow: visible; position: absolute; top: 55%; transform: translateY(-50%); width: 50px; }",
    ".framer-Myach .framer-1eptw59 { aspect-ratio: 1.6296296296296295 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 81px); overflow: visible; position: absolute; right: 0px; width: 132px; }",
    ".framer-Myach .framer-osalkd { aspect-ratio: 4 / 1; bottom: 52px; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 0px; overflow: visible; position: absolute; width: 160px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Myach.framer-1vtd1u5, .framer-Myach .framer-2cu6pm { gap: 0px; } .framer-Myach.framer-1vtd1u5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Myach.framer-1vtd1u5 > :first-child { margin-top: 0px; } .framer-Myach.framer-1vtd1u5 > :last-child { margin-bottom: 0px; } .framer-Myach .framer-2cu6pm > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-Myach .framer-2cu6pm > :first-child { margin-left: 0px; } .framer-Myach .framer-2cu6pm > :last-child { margin-right: 0px; } }",
    ...ae,
    "@media (max-width: 809px) { .framer-Myach.framer-1vtd1u5 { height: 854px; width: 390px; } .framer-Myach .framer-15i2frr-container { bottom: 15px; right: 7px; } .framer-Myach .framer-1p6uj9m { height: 750px; left: calc(50.00000000000002% - 354px / 2); top: calc(50.00000000000002% - 750px / 2); width: 354px; } .framer-Myach .framer-2cu6pm { gap: 10px; left: 13px; top: 60px; width: 314px; } .framer-Myach .framer-1guq5cn { bottom: 18px; height: 633px; left: -7px; width: 357px; } .framer-Myach .framer-u372td { left: 11px; top: 14px; } .framer-Myach .framer-3b6ctp { left: -14px; right: -13px; } .framer-Myach .framer-jcwt1x { left: -28px; right: unset; width: 363px; } .framer-Myach .framer-p57rn2 { left: 50%; transform: translate(-50%, -50%); } .framer-Myach .framer-18lhcra { left: 291px; } .framer-Myach .framer-193uq6k { left: unset; right: 0px; } .framer-Myach .framer-908c5c { left: 0px; } .framer-Myach .framer-10ekypb { left: 50%; transform: translateX(-50%); } .framer-Myach .framer-baued6 { bottom: 80px; height: var(--framer-aspect-ratio-supported, 128px); left: -44px; width: 166px; } .framer-Myach .framer-npw3z0 { bottom: 80px; height: var(--framer-aspect-ratio-supported, 128px); right: -67px; width: 166px; } .framer-Myach .framer-f8jbw8 { bottom: 93px; height: var(--framer-aspect-ratio-supported, 90px); left: 88px; width: 142px; } .framer-Myach .framer-1u8s4vb { bottom: 86px; height: var(--framer-aspect-ratio-supported, 90px); left: 54%; transform: translateX(-50%); width: 142px; } .framer-Myach .framer-sluiy2 { bottom: 72px; height: var(--framer-aspect-ratio-supported, 90px); left: 24px; width: 142px; } .framer-Myach .framer-1664m5j { bottom: 62px; height: var(--framer-aspect-ratio-supported, 90px); left: 156px; width: 142px; } .framer-Myach .framer-1dhtyri { bottom: 59px; height: var(--framer-aspect-ratio-supported, 90px); left: unset; right: -39px; width: 142px; } .framer-Myach .framer-ogesij { height: var(--framer-aspect-ratio-supported, 55px); left: 61px; top: 14px; width: 181px; } .framer-Myach .framer-gcoaz0 { bottom: 65px; left: 246px; } .framer-Myach .framer-14ogbwi { left: 268px; top: 66px; } .framer-Myach .framer-1457pnq-container { left: -11px; right: unset; width: 294px; } .framer-Myach .framer-1vtbc22 { height: var(--framer-aspect-ratio-supported, 213px); left: 50%; top: 46%; width: 304px; } .framer-Myach .framer-7yktae { aspect-ratio: unset; height: 36px; left: calc(50.151975683890605% - 192px / 2); top: calc(49.78577549271639% - 36px / 2); transform: unset; } .framer-Myach .framer-hkbr8h-container { height: 186px; left: unset; right: -10px; top: 355px; width: 331px; } .framer-Myach .framer-14tol28-container { bottom: 281px; height: 204px; left: -67px; right: -9px; width: unset; } .framer-Myach .framer-9gcv39 { left: 0px; right: -13px; top: -14px; } .framer-Myach .framer-19g3aqh { left: 0px; right: -47px; width: unset; } .framer-Myach .framer-1htc2ip { left: unset; right: -672px; } .framer-Myach .framer-zdurv7 { left: -15px; transform: unset; } .framer-Myach .framer-ron2g5 { left: unset; right: -37px; } .framer-Myach .framer-osalkd { left: -7px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Myach .framer-2cu6pm { gap: 0px; } .framer-Myach .framer-2cu6pm > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Myach .framer-2cu6pm > :first-child { margin-left: 0px; } .framer-Myach .framer-2cu6pm > :last-child { margin-right: 0px; } }}",
    "@media (min-width: 810px) and (max-width: 1919px) { .framer-Myach.framer-1vtd1u5 { height: min-content; min-height: 1080px; width: 810px; } .framer-Myach .framer-1p6uj9m { height: 474px; left: calc(50.00000000000002% - 772px / 2); top: calc(50.00000000000002% - 474px / 2); width: 772px; } .framer-Myach .framer-2cu6pm { gap: 10px; left: 13px; top: 53px; width: 314px; } .framer-Myach .framer-1guq5cn { bottom: 24px; height: 349px; left: calc(50.00000000000002% - 763px / 2); width: 763px; } .framer-Myach .framer-u372td { left: 0px; right: -7px; } .framer-Myach .framer-3b6ctp { height: 264px; left: -14px; right: -14px; } .framer-Myach .framer-jcwt1x { height: unset; left: 0px; right: 0px; top: -6px; } .framer-Myach .framer-p57rn2 { bottom: 346px; height: var(--framer-aspect-ratio-supported, 78px); left: 4px; top: unset; transform: unset; width: 226px; } .framer-Myach .framer-gov37q { left: 460px; } .framer-Myach .framer-18lhcra { left: 121px; top: 47%; } .framer-Myach .framer-193uq6k { left: 13px; } .framer-Myach .framer-908c5c { left: 453px; } .framer-Myach .framer-10ekypb { left: 543px; } .framer-Myach .framer-baued6 { left: 475px; } .framer-Myach .framer-npw3z0 { right: -20px; } .framer-Myach .framer-sluiy2 { bottom: 44px; left: 374px; } .framer-Myach .framer-1664m5j { bottom: 27px; left: 163px; } .framer-Myach .framer-ogesij { bottom: 399px; height: var(--framer-aspect-ratio-supported, 47px); left: 559px; top: unset; width: 155px; } .framer-Myach .framer-14ogbwi { left: 25px; top: 286px; } .framer-Myach .framer-1457pnq-container { left: -11px; right: unset; width: 294px; } .framer-Myach .framer-1vtbc22 { height: var(--framer-aspect-ratio-supported, 213px); left: 52%; top: 54%; width: 304px; } .framer-Myach .framer-7yktae { aspect-ratio: unset; bottom: 341px; height: 36px; left: calc(50.996015936255% - 192px / 2); top: unset; transform: unset; } .framer-Myach .framer-hkbr8h-container { height: 186px; left: calc(52.972258916776774% - 331px / 2); top: 263px; width: 331px; } .framer-Myach .framer-14tol28-container { bottom: 152px; height: 143px; left: calc(47.29194187582565% - 254px / 2); width: 254px; } .framer-Myach .framer-9gcv39 { left: 0px; right: -13px; top: -14px; } .framer-Myach .framer-19g3aqh { left: 0px; right: -47px; width: unset; } .framer-Myach .framer-1htc2ip { left: unset; right: -672px; } .framer-Myach .framer-zdurv7 { left: -15px; transform: unset; } .framer-Myach .framer-ron2g5 { left: unset; right: -37px; } .framer-Myach .framer-osalkd { left: -7px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Myach .framer-2cu6pm { gap: 0px; } .framer-Myach .framer-2cu6pm > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Myach .framer-2cu6pm > :first-child { margin-left: 0px; } .framer-Myach .framer-2cu6pm > :last-child { margin-right: 0px; } }}",
  ],
  q = Q(We, ve, "framer-Myach"),
  Ae = q;
q.displayName = "Page";
q.defaultProps = { height: 1080, width: 1920 };
te(
  q,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "W95FA Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/f7jD4by27JB9lH7vRVXRZSYPo0.woff2",
        },
      ],
    },
    ...pe,
    ...fe,
    ...he,
    ...re(ie),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ce = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerfQwylL6Ek",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"rEPoe4Ktw":{"layout":["fixed","fixed"]},"uW9oKq3ho":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "1080",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1920",
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Ce as __FramerMetadata__, Ae as default };
//# sourceMappingURL=yTCh2Gi8OUWYrrXygnst9bllZoNueylaoimmSf5MWrk.6DMMK4VC.mjs.map
