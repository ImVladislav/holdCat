import { a as w } from "./chunk-DCYGQDAO.mjs";
import { a as k } from "./chunk-OPEZPNPR.mjs";
import "./chunk-HGNFJJQS.mjs";
import { a as H, b as K, c as Y, d as G } from "./chunk-VZINQ5XF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as B,
  Ba as z,
  N as j,
  Z as I,
  aa as V,
  ba as R,
  c as n,
  da as U,
  ea as D,
  fa as Z,
  g as C,
  ia as o,
  ka as i,
  l as A,
  m as P,
  n as X,
  p as J,
  ra as O,
  t as e,
  u as s,
  va as a,
  wa as f,
  ya as r,
  z as M,
  za as q,
} from "./chunk-BC6VH6JS.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-VXMCXQ66.mjs";
import "./chunk-RIUMFBNJ.mjs";
var te = B(H),
  ae = B(k),
  ie = {
    fNoRgHPwI: "(max-width: 1199px)",
    lmNoVbrbL: "(min-width: 1200px) and (max-width: 1919px)",
    x60iAZPCX: "(min-width: 1920px)",
  },
  T = () => typeof document < "u",
  ne = "framer-omuhB",
  oe = {
    fNoRgHPwI: "framer-v-1xubyyi",
    lmNoVbrbL: "framer-v-4bu2og",
    x60iAZPCX: "framer-v-1hciier",
  },
  S = (x, p) => `translateX(-50%) ${p}`,
  v = (x, p) => `translateY(-50%) ${p}`,
  Ve = w(),
  se = { "in between": "lmNoVbrbL", Desktop: "x60iAZPCX", Phone: "fNoRgHPwI" },
  le = ({ height: x, id: p, width: c, ...u }) => {
    var h, d;
    return {
      ...u,
      variant:
        (d = (h = se[u.variant]) !== null && h !== void 0 ? h : u.variant) !==
          null && d !== void 0
          ? d
          : "x60iAZPCX",
    };
  },
  me = C(function (x, p) {
    let { activeLocale: c, setLocale: u } = j(),
      { style: h, className: d, layoutId: N, variant: _, ...Q } = le(x);
    A(() => {
      let l = w(void 0, c);
      if (l.robots) {
        let m = document.querySelector('meta[name="robots"]');
        m
          ? m.setAttribute("content", l.robots)
          : ((m = document.createElement("meta")),
            m.setAttribute("name", "robots"),
            m.setAttribute("content", l.robots),
            document.head.appendChild(m));
      }
    }, [void 0, c]),
      X(() => {
        let l = w(void 0, c);
        if (((document.title = l.title || ""), l.viewport)) {
          var m;
          (m = document.querySelector('meta[name="viewport"]')) === null ||
            m === void 0 ||
            m.setAttribute("content", l.viewport);
        }
        let L = l.bodyClassName;
        if (L) {
          let W = document.body;
          W.classList.forEach(
            (E) => E.startsWith("framer-body-") && W.classList.remove(E)
          ),
            W.classList.add(`${l.bodyClassName}-framer-omuhB`);
        }
        return () => {
          L &&
            document.body.classList.remove(`${l.bodyClassName}-framer-omuhB`);
        };
      }, [void 0, c]);
    let [t, fe] = O(_, ie, !1),
      ce = void 0,
      $ = I(ne, ...[G]),
      ee = J(null),
      b = () => (T() ? !["fNoRgHPwI", "lmNoVbrbL"].includes(t) : !0),
      g = () => !T() || t === "lmNoVbrbL",
      F = () => !!(!T() || ["fNoRgHPwI", "lmNoVbrbL"].includes(t)),
      re = P();
    return (
      D({}),
      e(Z.Provider, {
        value: { primaryVariantId: "x60iAZPCX", variantClassNames: oe },
        children: s(M, {
          id: N ?? re,
          children: [
            s(a, {
              ...Q,
              background: {
                alt: "",
                fit: "fill",
                loading: r(0),
                pixelHeight: 1080,
                pixelWidth: 1920,
                sizes: "100vw",
                src: "https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png",
                srcSet:
                  "https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png?scale-down-to=512 512w,https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/UUMLm528uIjyCfqAT4A7mS0dyqI.png 1920w",
              },
              className: I($, "framer-1hciier", d),
              ref: p ?? ee,
              style: { ...h },
              children: [
                e(a, {
                  background: {
                    alt: "",
                    backgroundSize: 2,
                    fit: "tile",
                    loading: r(0),
                    pixelHeight: 256,
                    pixelWidth: 256,
                    positionX: "left",
                    positionY: "top",
                    src: "https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png",
                  },
                  className: "framer-1bjny0b",
                  "data-framer-name": "noise",
                  name: "noise",
                }),
                e(i, {
                  breakpoint: t,
                  overrides: { fNoRgHPwI: { y: 632 } },
                  children: e(V, {
                    height: 207,
                    width: "189px",
                    y: -282,
                    children: e(R, {
                      className: "framer-g25u5u-container",
                      children: e(H, {
                        height: "100%",
                        id: "z_QC6nna4",
                        layoutId: "z_QC6nna4",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(i, {
                  breakpoint: t,
                  overrides: {
                    fNoRgHPwI: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: r(52.00000000000017),
                        pixelHeight: 750,
                        pixelWidth: 354,
                        sizes: "354px",
                        src: "https://framerusercontent.com/images/pjEKLkkKdGSYVfLSmGTWealZxM.png",
                        srcSet:
                          "https://framerusercontent.com/images/pjEKLkkKdGSYVfLSmGTWealZxM.png 354w",
                      },
                    },
                    lmNoVbrbL: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: r(-237),
                        pixelHeight: 830,
                        pixelWidth: 1348,
                        sizes: "772px",
                        src: "https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png",
                        srcSet:
                          "https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png?scale-down-to=512 512w,https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png 1348w",
                      },
                    },
                  },
                  children: s(a, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: r(-414),
                      pixelHeight: 830,
                      pixelWidth: 1348,
                      sizes: "1348px",
                      src: "https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png",
                      srcSet:
                        "https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png?scale-down-to=512 512w,https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8xvpb1eMrEh0Dan3Gyj5j2UVut4.png 1348w",
                    },
                    className: "framer-874v48",
                    children: [
                      s("div", {
                        className: "framer-1nsivv8",
                        children: [
                          e(i, {
                            breakpoint: t,
                            overrides: {
                              fNoRgHPwI: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(o, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "s4Ie9w3Ul",
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
                              lmNoVbrbL: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(o, {
                                      href: { webPageId: "augiA20Il" },
                                      nodeId: "s4Ie9w3Ul",
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
                            children: e(f, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                  },
                                  children: e(o, {
                                    href: { webPageId: "augiA20Il" },
                                    nodeId: "s4Ie9w3Ul",
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
                              className: "framer-17bvboi",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: t,
                            overrides: {
                              fNoRgHPwI: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(o, {
                                      href: { webPageId: "iUQfGh2VC" },
                                      nodeId: "Lb0od5Gsn",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "2",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              lmNoVbrbL: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(o, {
                                      href: { webPageId: "iUQfGh2VC" },
                                      nodeId: "Lb0od5Gsn",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1491jsp",
                                        "data-styles-preset": "a4wMR6OXt",
                                        children: "2",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },

                          e(i, {
                            breakpoint: t,
                            overrides: {
                              fNoRgHPwI: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(o, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "KBe0JrVsh",
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
                              lmNoVbrbL: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    },
                                    children: e(o, {
                                      href: { webPageId: "wkg8xGODr" },
                                      nodeId: "KBe0JrVsh",
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
                            children: e(f, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                  },
                                  children: e(o, {
                                    href: { webPageId: "wkg8xGODr" },
                                    nodeId: "KBe0JrVsh",
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
                              className: "framer-z7o465",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: t,
                            overrides: {
                              fNoRgHPwI: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(o, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "s_VjNfBTr",
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
                              lmNoVbrbL: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(o, {
                                      href: { webPageId: "rXmFTlZAf" },
                                      nodeId: "s_VjNfBTr",
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
                            children: e(f, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(o, {
                                    href: { webPageId: "rXmFTlZAf" },
                                    nodeId: "s_VjNfBTr",
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
                              className: "framer-1y4aqjg",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: t,
                            overrides: {
                              fNoRgHPwI: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(o, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "hg68Jw2Ae",
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
                              lmNoVbrbL: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                    },
                                    children: e(o, {
                                      href: { webPageId: "fQwylL6Ek" },
                                      nodeId: "hg68Jw2Ae",
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
                            children: e(f, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-text-alignment": "left",
                                  },
                                  children: e(o, {
                                    href: { webPageId: "fQwylL6Ek" },
                                    nodeId: "hg68Jw2Ae",
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
                              className: "framer-1i147ld",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: t,
                            overrides: {
                              fNoRgHPwI: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(o, {
                                      href: { webPageId: "FVEMS5VK5" },
                                      nodeId: "b9ND4zNgM",
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
                              lmNoVbrbL: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1c5NUZBIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"W95FA Regular", "W95FA Regular Placeholder", sans-serif',
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(0, 0, 255)",
                                    },
                                    children: e(o, {
                                      href: { webPageId: "FVEMS5VK5" },
                                      nodeId: "b9ND4zNgM",
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
                            children: e(f, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
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
                                  children: e(o, {
                                    href: { webPageId: "FVEMS5VK5" },
                                    nodeId: "b9ND4zNgM",
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
                              className: "framer-e5wcem",
                              fonts: ["CUSTOM;W95FA Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e("div", {
                        background: { alt: "", fit: "fill" },
                        className: "framer-1o720tm",
                        children: e(i, {
                          breakpoint: t,
                          overrides: {
                            fNoRgHPwI: {
                              background: {
                                alt: "",
                                backgroundSize: 2,
                                fit: "tile",
                                loading: r(166.00000000000023),
                                pixelHeight: 105,
                                pixelWidth: 156,
                                positionX: "left",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/9eqxWWgm8zKvsV2JfTXsci8x3Y.png",
                              },
                            },
                            lmNoVbrbL: {
                              background: {
                                alt: "",
                                backgroundSize: 2,
                                fit: "tile",
                                loading: r(-137),
                                pixelHeight: 105,
                                pixelWidth: 156,
                                positionX: "left",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/9eqxWWgm8zKvsV2JfTXsci8x3Y.png",
                              },
                            },
                          },
                          children: s(a, {
                            background: {
                              alt: "",
                              backgroundSize: 2,
                              fit: "tile",
                              loading: r(-237),
                              pixelHeight: 105,
                              pixelWidth: 156,
                              positionX: "left",
                              positionY: "top",
                              src: "https://framerusercontent.com/images/9eqxWWgm8zKvsV2JfTXsci8x3Y.png",
                            },
                            className: "framer-5fga9f",
                            children: [
                              e(i, {
                                breakpoint: t,
                                overrides: {
                                  fNoRgHPwI: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 104,
                                      intrinsicWidth: 443,
                                      loading: r(183.00000000000023),
                                      pixelHeight: 104,
                                      pixelWidth: 443,
                                      src: "https://framerusercontent.com/images/AHo1wLFsBeolLs0EzCjuRc36534.png",
                                    },
                                  },
                                  lmNoVbrbL: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 104,
                                      intrinsicWidth: 443,
                                      loading: r(-112),
                                      pixelHeight: 104,
                                      pixelWidth: 443,
                                      src: "https://framerusercontent.com/images/AHo1wLFsBeolLs0EzCjuRc36534.png",
                                    },
                                  },
                                },
                                children: e(a, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 104,
                                    intrinsicWidth: 443,
                                    loading: r(-158),
                                    pixelHeight: 104,
                                    pixelWidth: 443,
                                    src: "https://framerusercontent.com/images/AHo1wLFsBeolLs0EzCjuRc36534.png",
                                  },
                                  className: "framer-1upmx9r",
                                  "data-framer-name":
                                    "Cool Text - CHART 467058379275707",
                                  name: "Cool Text - CHART 467058379275707",
                                  transformTemplate: S,
                                }),
                              }),
                              s("div", {
                                className: "framer-qjbb0r",
                                children: [
                                  e(V, {
                                    children: e(R, {
                                      className: "framer-80fwek-container",
                                      children: e(i, {
                                        breakpoint: t,
                                        overrides: {
                                          fNoRgHPwI: {
                                            html: `<style>
    #dexscreener-embed {
        position: relative;
        width: 100%;
        padding-bottom: 250%; /* Doubled from 125% */
    }
    @media (min-width: 300px) {
        #dexscreener-embed {
            padding-bottom: 130%; /* Doubled from 65% */
        }
    }
    #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
    }
</style>
<div id="dexscreener-embed">
    <iframe src="https://dexscreener.com/solana/6xpkxC44h8XZaZDd1GHumL9gUNWpANgm32PrpaQVpump?embed=1&theme=dark"></iframe>
</div>
`,
                                          },
                                          lmNoVbrbL: {
                                            html: `<style>
    #dexscreener-embed {
        position: relative;
        width: 100%;
        padding-bottom: 250%; /* Doubled from 125% */
    }
    @media (min-width: 300px) {
        #dexscreener-embed {
            padding-bottom: 130%; /* Doubled from 65% */
        }
    }
    #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
    }
</style>
<div id="dexscreener-embed">
    <iframe src="https://dexscreener.com/solana/B47xX5WgK9vUE6unE7BMDuxwR7fqGuwKh8U14hwvF72Y?embed=1&theme=dark"></iframe>
</div>
`,
                                          },
                                        },
                                        children: e(k, {
                                          height: "100%",
                                          html: '<style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style><div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/B47xX5WgK9vUE6unE7BMDuxwR7fqGuwKh8U14hwvF72Y?embed=1&theme=dark"></iframe></div>',
                                          id: "MJA72vc4a",
                                          layoutId: "MJA72vc4a",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          type: "html",
                                          url: "",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                  s("div", {
                                    className: "framer-px3yjo",
                                    children: [
                                      s("div", {
                                        className: "framer-19d8elg",
                                        children: [
                                          b() &&
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 11,
                                                intrinsicWidth: 237,
                                                loading: r(353.5000000000004),
                                                pixelHeight: 11,
                                                pixelWidth: 237,
                                                src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                              },
                                              className:
                                                "framer-1khktgu hidden-1xubyyi hidden-4bu2og",
                                              "data-framer-name": "3 (1)",
                                              name: "3 (1)",
                                              style: { rotate: 90 },
                                            }),
                                          b() &&
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 11,
                                                intrinsicWidth: 237,
                                                loading: r(426.5000000000006),
                                                pixelHeight: 11,
                                                pixelWidth: 237,
                                                src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                              },
                                              className:
                                                "framer-kphjxw hidden-1xubyyi hidden-4bu2og",
                                              "data-framer-name": "3 (1)",
                                              name: "3 (1)",
                                              style: {
                                                rotate: 90,
                                                rotateX: 180,
                                              },
                                              transformTemplate: v,
                                            }),
                                          e(i, {
                                            breakpoint: t,
                                            overrides: {
                                              fNoRgHPwI: {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  loading: r(416.8045043945315),
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                              },
                                              lmNoVbrbL: {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  loading:
                                                    r(151.42968750000034),
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                              },
                                            },
                                            children: e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 11,
                                                intrinsicWidth: 237,
                                                loading: r(353.5000000000004),
                                                pixelHeight: 11,
                                                pixelWidth: 237,
                                                src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                              },
                                              className: "framer-1oit24l",
                                              "data-framer-name": "3 (1)",
                                              name: "3 (1)",
                                              style: { rotate: 90 },
                                            }),
                                          }),
                                          e(i, {
                                            breakpoint: t,
                                            overrides: {
                                              fNoRgHPwI: {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  loading: r(484.6730769230773),
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                                transformTemplate: v,
                                              },
                                              lmNoVbrbL: {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  loading: r(378.5000000000005),
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                                transformTemplate: v,
                                              },
                                            },
                                            children: e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 11,
                                                intrinsicWidth: 237,
                                                loading: r(439.50000000000045),
                                                pixelHeight: 11,
                                                pixelWidth: 237,
                                                src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                              },
                                              className: "framer-r92nt7",
                                              "data-framer-name": "3 (1)",
                                              name: "3 (1)",
                                              style: {
                                                rotate: 90,
                                                rotateX: 180,
                                              },
                                            }),
                                          }),
                                          g() &&
                                            e(i, {
                                              breakpoint: t,
                                              overrides: {
                                                lmNoVbrbL: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 11,
                                                    intrinsicWidth: 237,
                                                    loading:
                                                      r(628.4296875000003),
                                                    pixelHeight: 11,
                                                    pixelWidth: 237,
                                                    src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                  },
                                                },
                                              },
                                              children: e(a, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                                className:
                                                  "framer-rhcth3 hidden-1hciier hidden-1xubyyi",
                                                "data-framer-name": "3 (1)",
                                                name: "3 (1)",
                                                style: {
                                                  rotate: 90,
                                                  rotateX: 180,
                                                },
                                              }),
                                            }),
                                          F() &&
                                            e(i, {
                                              breakpoint: t,
                                              overrides: {
                                                fNoRgHPwI: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 11,
                                                    intrinsicWidth: 237,
                                                    loading:
                                                      r(505.50000000000034),
                                                    pixelHeight: 11,
                                                    pixelWidth: 237,
                                                    src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                  },
                                                },
                                                lmNoVbrbL: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 11,
                                                    intrinsicWidth: 237,
                                                    loading:
                                                      r(355.5000000000005),
                                                    pixelHeight: 11,
                                                    pixelWidth: 237,
                                                    src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                  },
                                                },
                                              },
                                              children: e(a, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                                className:
                                                  "framer-pm3zf2 hidden-1hciier",
                                                "data-framer-name": "3 (1)",
                                                name: "3 (1)",
                                                style: {
                                                  rotate: 90,
                                                  rotateX: 180,
                                                },
                                                transformTemplate: v,
                                              }),
                                            }),
                                          F() &&
                                            e(i, {
                                              breakpoint: t,
                                              overrides: {
                                                fNoRgHPwI: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 11,
                                                    intrinsicWidth: 237,
                                                    loading:
                                                      r(430.9296875000002),
                                                    pixelHeight: 11,
                                                    pixelWidth: 237,
                                                    src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                  },
                                                },
                                                lmNoVbrbL: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 11,
                                                    intrinsicWidth: 237,
                                                    loading:
                                                      r(155.42968750000034),
                                                    pixelHeight: 11,
                                                    pixelWidth: 237,
                                                    src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                  },
                                                },
                                              },
                                              children: e(a, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                                className:
                                                  "framer-13mi8vb hidden-1hciier",
                                                "data-framer-name": "3 (1)",
                                                name: "3 (1)",
                                                style: { rotate: 90 },
                                              }),
                                            }),
                                          g() &&
                                            e(i, {
                                              breakpoint: t,
                                              overrides: {
                                                lmNoVbrbL: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 11,
                                                    intrinsicWidth: 237,
                                                    loading:
                                                      r(642.4296875000003),
                                                    pixelHeight: 11,
                                                    pixelWidth: 237,
                                                    src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                  },
                                                },
                                              },
                                              children: e(a, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 11,
                                                  intrinsicWidth: 237,
                                                  pixelHeight: 11,
                                                  pixelWidth: 237,
                                                  src: "https://framerusercontent.com/images/yoDLUMCurEF8N9ZTilOnDbXoSfw.png",
                                                },
                                                className:
                                                  "framer-165fui8 hidden-1hciier hidden-1xubyyi",
                                                "data-framer-name": "3 (1)",
                                                name: "3 (1)",
                                                style: { rotate: 90 },
                                              }),
                                            }),
                                        ],
                                      }),
                                      b() &&
                                        s("div", {
                                          className:
                                            "framer-kv6rh7 hidden-1xubyyi hidden-4bu2og",
                                          children: [
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(-6.499999999999773),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                              className: "framer-1jdeqh",
                                              "data-framer-name": "3",
                                              name: "3",
                                            }),
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(-6.499999999999773),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                              className: "framer-71g3c6",
                                              "data-framer-name": "3",
                                              name: "3",
                                            }),
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(-6.499999999999773),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                              className: "framer-ttcrtv",
                                              "data-framer-name": "3",
                                              name: "3",
                                            }),
                                          ],
                                        }),
                                      b() &&
                                        s("div", {
                                          className:
                                            "framer-18xd3qo hidden-1xubyyi hidden-4bu2og",
                                          children: [
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(749.5000000000002),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                              className: "framer-4a21r0",
                                              "data-framer-name": "3",
                                              name: "3",
                                            }),
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(749.5000000000002),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                              className: "framer-23feb7",
                                              "data-framer-name": "3",
                                              name: "3",
                                            }),
                                            e(a, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(749.5000000000002),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                              className: "framer-v7541q",
                                              "data-framer-name": "3",
                                              name: "3",
                                            }),
                                          ],
                                        }),
                                      g() &&
                                        e(i, {
                                          breakpoint: t,
                                          overrides: {
                                            lmNoVbrbL: {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(766.0000000000002),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                            },
                                          },
                                          children: e(a, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            className:
                                              "framer-1nk6su7 hidden-1hciier hidden-1xubyyi",
                                            "data-framer-name": "3",
                                            name: "3",
                                          }),
                                        }),
                                      g() &&
                                        e(i, {
                                          breakpoint: t,
                                          overrides: {
                                            lmNoVbrbL: {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(766.0000000000002),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                            },
                                          },
                                          children: e(a, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            className:
                                              "framer-1nu8sjk hidden-1hciier hidden-1xubyyi",
                                            "data-framer-name": "3",
                                            name: "3",
                                          }),
                                        }),
                                      e(i, {
                                        breakpoint: t,
                                        overrides: {
                                          fNoRgHPwI: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(661.0000000000002),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                          },
                                          lmNoVbrbL: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(767.0000000000002),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 65,
                                            intrinsicWidth: 414,
                                            loading: r(749.5000000000002),
                                            pixelHeight: 65,
                                            pixelWidth: 414,
                                            src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                          },
                                          className: "framer-1y9irfx",
                                          "data-framer-name": "3",
                                          name: "3",
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: t,
                                        overrides: {
                                          fNoRgHPwI: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(661.0000000000002),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            transformTemplate: void 0,
                                          },
                                          lmNoVbrbL: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(767.0000000000002),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            transformTemplate: void 0,
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 65,
                                            intrinsicWidth: 414,
                                            loading: r(749.5000000000002),
                                            pixelHeight: 65,
                                            pixelWidth: 414,
                                            src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                          },
                                          className: "framer-15n4bzz",
                                          "data-framer-name": "3",
                                          name: "3",
                                          transformTemplate: S,
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: t,
                                        overrides: {
                                          fNoRgHPwI: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(246.00000000000023),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                          },
                                          lmNoVbrbL: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(-17.999999999999638),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 65,
                                            intrinsicWidth: 414,
                                            loading: r(-6.499999999999773),
                                            pixelHeight: 65,
                                            pixelWidth: 414,
                                            src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                          },
                                          className: "framer-ifpxwl",
                                          "data-framer-name": "3",
                                          name: "3",
                                        }),
                                      }),
                                      e(i, {
                                        breakpoint: t,
                                        overrides: {
                                          fNoRgHPwI: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(246.00000000000023),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            transformTemplate: void 0,
                                          },
                                          lmNoVbrbL: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              loading: r(-17.999999999999638),
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            transformTemplate: void 0,
                                          },
                                        },
                                        children: e(a, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 65,
                                            intrinsicWidth: 414,
                                            loading: r(-6.499999999999773),
                                            pixelHeight: 65,
                                            pixelWidth: 414,
                                            src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                          },
                                          className: "framer-1akitvv",
                                          "data-framer-name": "3",
                                          name: "3",
                                          transformTemplate: S,
                                        }),
                                      }),
                                      g() &&
                                        e(i, {
                                          breakpoint: t,
                                          overrides: {
                                            lmNoVbrbL: {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 65,
                                                intrinsicWidth: 414,
                                                loading: r(-17.999999999999638),
                                                pixelHeight: 65,
                                                pixelWidth: 414,
                                                src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                              },
                                            },
                                          },
                                          children: e(a, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 65,
                                              intrinsicWidth: 414,
                                              pixelHeight: 65,
                                              pixelWidth: 414,
                                              src: "https://framerusercontent.com/images/TESWvJgS9owReVqKl93JL3ypcbI.png",
                                            },
                                            className:
                                              "framer-znmfnt hidden-1hciier hidden-1xubyyi",
                                            "data-framer-name": "3",
                                            name: "3",
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
  pe = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-omuhB.framer-yfwat4, .framer-omuhB .framer-yfwat4 { dis2: block; }",
    ".framer-omuhB.framer-1hciier { align-content: center; align-items: center; dis2: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 1080px; overflow: visible; padding: 0px; position: relative; width: 1920px; }",
    ".framer-omuhB .framer-1bjny0b { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; opacity: 0.12; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 3; }",
    ".framer-omuhB .framer-g25u5u-container { aspect-ratio: 0.9110169491525424 / 1; bottom: 75px; flex: none; height: var(--framer-aspect-ratio-supported, 207px); position: absolute; right: 37px; width: 189px; z-index: 2; }",
    ".framer-omuhB .framer-874v48 { flex: none; height: 828px; left: calc(50.00000000000002% - 1348px / 2); overflow: hidden; position: absolute; top: calc(44.53703703703706% - 828px / 2); width: 1348px; z-index: 1; }",
    ".framer-omuhB .framer-1nsivv8 { align-content: center; align-items: center; dis2: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; left: 6px; opacity: 0.8; overflow: hidden; padding: 0px; position: absolute; top: 97px; width: 464px; }",
    ".framer-omuhB .framer-17bvboi, .framer-omuhB .framer-10cq58d, .framer-omuhB .framer-z7o465, .framer-omuhB .framer-1y4aqjg, .framer-omuhB .framer-1i147ld, .framer-omuhB .framer-e5wcem { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-omuhB .framer-1o720tm { bottom: 44px; flex: none; height: 607px; left: calc(49.77744807121664% - 1338px / 2); overflow: auto; position: absolute; width: 1338px; z-index: 1; }",
    ".framer-omuhB .framer-5fga9f { bottom: -552px; flex: none; left: 7px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-omuhB .framer-1upmx9r { aspect-ratio: 4.259615384615385 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 132px); left: 49%; overflow: visible; position: absolute; top: 79px; transform: translateX(-50%); width: 561px; }",
    ".framer-omuhB .framer-qjbb0r { flex: none; height: 805px; left: calc(50.00000000000002% - 1175px / 2); overflow: hidden; position: absolute; top: calc(54.01207937877482% - 805px / 2); width: 1175px; }",
    ".framer-omuhB .framer-80fwek-container { bottom: 42px; flex: none; left: 23px; position: absolute; right: 22px; top: 28px; }",
    ".framer-omuhB .framer-px3yjo { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 1174px; }",
    ".framer-omuhB .framer-19d8elg { flex: none; height: 730px; left: calc(49.65928449744466% - 1165px / 2); overflow: hidden; position: absolute; top: calc(52.795031055900644% - 730px / 2); width: 1165px; }",
    ".framer-omuhB .framer-1khktgu { aspect-ratio: 21.545454545454547 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); left: -306px; overflow: visible; position: absolute; top: 307px; width: 643px; }",
    ".framer-omuhB .framer-kphjxw { aspect-ratio: 21.545454545454547 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); left: -296px; overflow: visible; position: absolute; top: 54%; transform: translateY(-50%); width: 643px; }",
    ".framer-omuhB .framer-1oit24l { aspect-ratio: 21.545454545454547 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: visible; position: absolute; right: -304px; top: 307px; width: 643px; }",
    ".framer-omuhB .framer-r92nt7 { aspect-ratio: 21.545454545454547 / 1; bottom: 307px; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: visible; position: absolute; right: -306px; width: 643px; }",
    ".framer-omuhB .framer-rhcth3 { aspect-ratio: 21.545454545454547 / 1; bottom: 177px; flex: none; height: var(--framer-aspect-ratio-supported, 16px); overflow: visible; position: absolute; right: -154px; width: 342px; }",
    ".framer-omuhB .framer-pm3zf2 { aspect-ratio: 21.545454545454547 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); left: -160px; overflow: visible; position: absolute; top: 49%; transform: translateY(-50%); width: 342px; }",
    ".framer-omuhB .framer-13mi8vb { aspect-ratio: 21.545454545454547 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); left: -160px; overflow: visible; position: absolute; top: 181px; width: 342px; }",
    ".framer-omuhB .framer-165fui8 { aspect-ratio: 21.545454545454547 / 1; bottom: 163px; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: -160px; overflow: visible; position: absolute; width: 342px; }",
    ".framer-omuhB .framer-kv6rh7 { flex: none; height: 42px; left: calc(50.170357751277706% - 1169px / 2); overflow: hidden; position: absolute; top: 7px; width: 1169px; }",
    ".framer-omuhB .framer-1jdeqh, .framer-omuhB .framer-4a21r0 { aspect-ratio: 6.369230769230769 / 1; bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 268px); }",
    ".framer-omuhB .framer-71g3c6, .framer-omuhB .framer-23feb7 { aspect-ratio: 6.369230769230769 / 1; bottom: 0px; flex: none; left: 663px; overflow: visible; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 268px); }",
    ".framer-omuhB .framer-ttcrtv, .framer-omuhB .framer-v7541q { aspect-ratio: 6.369230769230769 / 1; bottom: 0px; flex: none; overflow: visible; position: absolute; right: 0px; top: 0px; width: var(--framer-aspect-ratio-supported, 267px); }",
    ".framer-omuhB .framer-18xd3qo { bottom: 0px; flex: none; height: 42px; left: calc(50.170357751277706% - 1169px / 2); overflow: hidden; position: absolute; width: 1169px; }",
    ".framer-omuhB .framer-1nk6su7 { bottom: 25px; flex: none; left: calc(84.96350364963506% - 150px / 2); overflow: visible; position: absolute; top: 808px; width: 150px; }",
    ".framer-omuhB .framer-1nu8sjk { bottom: 25px; flex: none; left: calc(63.50364963503652% - 150px / 2); overflow: visible; position: absolute; top: 808px; width: 150px; }",
    ".framer-omuhB .framer-1y9irfx { aspect-ratio: 6.369230769230769 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 42px); left: 247px; overflow: visible; position: absolute; width: 268px; }",
    ".framer-omuhB .framer-15n4bzz { aspect-ratio: 6.369230769230769 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 42px); left: 48%; overflow: visible; position: absolute; transform: translateX(-50%); width: 268px; }",
    ".framer-omuhB .framer-ifpxwl { aspect-ratio: 6.369230769230769 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); left: 247px; overflow: visible; position: absolute; top: 7px; width: 268px; }",
    ".framer-omuhB .framer-1akitvv { aspect-ratio: 6.369230769230769 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); left: 48%; overflow: visible; position: absolute; top: 7px; transform: translateX(-50%); width: 268px; }",
    ".framer-omuhB .framer-znmfnt { flex: none; height: 34px; left: calc(80.58394160583944% - 220px / 2); overflow: visible; position: absolute; top: calc(4.7235023041474875% - 34px / 2); width: 220px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-omuhB.framer-1hciier, .framer-omuhB .framer-1nsivv8 { gap: 0px; } .framer-omuhB.framer-1hciier > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-omuhB.framer-1hciier > :first-child { margin-top: 0px; } .framer-omuhB.framer-1hciier > :last-child { margin-bottom: 0px; } .framer-omuhB .framer-1nsivv8 > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-omuhB .framer-1nsivv8 > :first-child { margin-left: 0px; } .framer-omuhB .framer-1nsivv8 > :last-child { margin-right: 0px; } }",
    ...Y,
    "@media (max-width: 1199px) { .framer-omuhB.framer-1hciier { height: 854px; width: 390px; } .framer-omuhB .framer-g25u5u-container { bottom: 15px; right: 7px; } .framer-omuhB .framer-874v48 { height: 750px; left: calc(50.00000000000002% - 354px / 2); top: calc(50.00000000000002% - 750px / 2); width: 354px; } .framer-omuhB .framer-1nsivv8 { gap: 10px; left: 13px; top: 60px; width: 314px; } .framer-omuhB .framer-1o720tm { bottom: 17px; height: 634px; left: calc(50.28248587570624% - 348px / 2); width: 348px; } .framer-omuhB .framer-5fga9f { bottom: 1px; left: 0px; right: 2px; top: 15px; } .framer-omuhB .framer-1upmx9r { height: var(--framer-aspect-ratio-supported, 49px); left: 49%; top: 17px; width: 209px; } .framer-omuhB .framer-qjbb0r { bottom: -1px; height: 542px; left: unset; right: -4px; top: unset; width: 346px; } .framer-omuhB .framer-80fwek-container { bottom: 121px; left: 14px; right: 19px; top: 24px; } .framer-omuhB .framer-px3yjo { left: -1px; right: 0px; top: -4px; width: unset; } .framer-omuhB .framer-19d8elg { bottom: -1px; height: 536px; left: unset; right: 0px; top: unset; width: 345px; } .framer-omuhB .framer-1oit24l { height: var(--framer-aspect-ratio-supported, 16px); right: -153px; top: 167px; width: 342px; } .framer-omuhB .framer-r92nt7 { bottom: unset; height: var(--framer-aspect-ratio-supported, 16px); right: -154px; top: 45%; transform: translateY(-50%); width: 342px; } .framer-omuhB .framer-pm3zf2, .framer-omuhB .framer-13mi8vb { height: var(--framer-aspect-ratio-supported, 16px); } .framer-omuhB .framer-1y9irfx { bottom: 97px; height: var(--framer-aspect-ratio-supported, 27px); left: 167px; width: 170px; } .framer-omuhB .framer-15n4bzz { bottom: 97px; height: var(--framer-aspect-ratio-supported, 27px); left: 9px; transform: unset; width: 170px; } .framer-omuhB .framer-ifpxwl { height: var(--framer-aspect-ratio-supported, 31px); left: 3px; width: 198px; } .framer-omuhB .framer-1akitvv { height: var(--framer-aspect-ratio-supported, 31px); left: 142px; transform: unset; width: 198px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-omuhB .framer-1nsivv8 { gap: 0px; } .framer-omuhB .framer-1nsivv8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-omuhB .framer-1nsivv8 > :first-child { margin-left: 0px; } .framer-omuhB .framer-1nsivv8 > :last-child { margin-right: 0px; } }}",
    "@media (min-width: 1200px) and (max-width: 1919px) { .framer-omuhB.framer-1hciier { width: 1200px; } .framer-omuhB .framer-874v48 { height: 474px; left: calc(50.00000000000002% - 772px / 2); top: calc(50.00000000000002% - 474px / 2); width: 772px; } .framer-omuhB .framer-1nsivv8 { gap: 10px; left: 13px; top: 53px; width: 314px; } .framer-omuhB .framer-1o720tm { bottom: 25px; height: 349px; left: calc(50.1295336787565% - 763px / 2); width: 763px; } .framer-omuhB .framer-5fga9f { bottom: -590px; left: -1px; right: -18px; } .framer-omuhB .framer-1upmx9r { height: var(--framer-aspect-ratio-supported, 61px); left: 50%; top: 25px; width: 259px; } .framer-omuhB .framer-qjbb0r { bottom: 0px; height: 864px; left: calc(50.065359477124204% - 683px / 2); top: unset; width: 683px; } .framer-omuhB .framer-80fwek-container { bottom: 382px; left: 27px; right: 40px; top: 410px; } .framer-omuhB .framer-px3yjo { bottom: unset; height: 868px; left: calc(48.16983894582725% - 685px / 2); top: calc(52.54629629629631% - 868px / 2); width: 685px; } .framer-omuhB .framer-19d8elg { height: 837px; left: calc(50.802919708029215% - 652px / 2); top: calc(51.267281105990804% - 837px / 2); width: 652px; } .framer-omuhB .framer-1oit24l { height: var(--framer-aspect-ratio-supported, 16px); right: -154px; top: 167px; width: 342px; } .framer-omuhB .framer-r92nt7 { bottom: unset; height: var(--framer-aspect-ratio-supported, 16px); right: -155px; top: 48%; transform: translateY(-50%); width: 342px; } .framer-omuhB .framer-pm3zf2 { height: var(--framer-aspect-ratio-supported, 16px); left: -157px; top: 45%; } .framer-omuhB .framer-13mi8vb { height: var(--framer-aspect-ratio-supported, 16px); left: -157px; top: 171px; } .framer-omuhB .framer-1y9irfx { aspect-ratio: unset; bottom: 25px; height: 34px; left: 203px; width: 171px; } .framer-omuhB .framer-15n4bzz { aspect-ratio: unset; bottom: 25px; height: 34px; left: 32px; transform: unset; width: 172px; } .framer-omuhB .framer-ifpxwl { aspect-ratio: unset; height: 34px; left: calc(19.416058394160608% - 220px / 2); top: calc(4.7235023041474875% - 34px / 2); width: 220px; } .framer-omuhB .framer-1akitvv { aspect-ratio: unset; height: 34px; left: calc(49.927007299270095% - 220px / 2); top: calc(4.7235023041474875% - 34px / 2); transform: unset; width: 220px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-omuhB .framer-1nsivv8 { gap: 0px; } .framer-omuhB .framer-1nsivv8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-omuhB .framer-1nsivv8 > :first-child { margin-left: 0px; } .framer-omuhB .framer-1nsivv8 > :last-child { margin-right: 0px; } }}",
  ],
  y = U(me, pe, "framer-omuhB"),
  Re = y;
y.dis2Name = "Page";
y.defaultProps = { height: 1080, width: 1920 };
q(
  y,
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
    ...te,
    ...ae,
    ...z(K),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Be = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerFVEMS5VK5",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "1920",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"fNoRgHPwI":{"layout":["fixed","fixed"]},"lmNoVbrbL":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "1080",
        framerComponentViewportWidth: "true",
        framerDis2ContentsDiv: "false",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Be as __FramerMetadata__, Re as default };
//# sourceMappingURL=Nr0NJa5-xCGeu2ss2hXcZOD0YOJe5JcHETf7xeRF2Ro.YUOCGNXX.mjs.map
