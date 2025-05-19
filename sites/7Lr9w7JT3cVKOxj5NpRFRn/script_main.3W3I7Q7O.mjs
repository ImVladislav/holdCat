import {
  Ca as P,
  I as g,
  J as p,
  K as a,
  M as y,
  O as F,
  P as R,
  Q as _,
  R as k,
  T as v,
  V as b,
  e as m,
  ga as w,
  i as h,
  ja as E,
  sa as I,
} from "./chunk-BC6VH6JS.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as r } from "./chunk-RIUMFBNJ.mjs";
var x = "default" in p ? g : p,
  d = {},
  S = x;
d.createRoot = S.createRoot;
d.hydrateRoot = S.hydrateRoot;
var z = d.createRoot,
  V = d.hydrateRoot;
var u = {
    augiA20Il: {
      elements: {},
      page: a(() =>
        import("./qSpax7XEc9s02YQwj5eEa2jdEM1yR57Z-ovfpy_a354.26Y2EV6G.mjs")
      ),
      path: "/",
    },
    wkg8xGODr: {
      elements: {},
      page: a(() =>
        import("./EYPSEQfk6I1StzRb6N9f5TBrD1AV7VAapJnmGZSKbAs.7M4YBIRK.mjs")
      ),
      path: "/guestbook",
    },
    rXmFTlZAf: {
      elements: {},
      page: a(() =>
        import("./qDKG6SWjNPfp1XZBzViMrU1fqh38_Uw5szkoSVwDRIg.Q5B7B4E7.mjs")
      ),
      path: "/twitter",
    },
    FVEMS5VK5: {
      elements: {},
      page: a(() =>
        import("./Nr0NJa5-xCGeu2ss2hXcZOD0YOJe5JcHETf7xeRF2Ro.YUOCGNXX.mjs")
      ),
      path: "/chart",
    },

    pSNv7nGIN: {
      elements: { jeuHpaKMG: "rankings" },
      page: a(() =>
        import("./S2c-1_9kWEt0UXElFxOXJWqXLfmxIFGowgc5YS8ZogU.H2HZLZQN.mjs")
      ),
      path: "/rankings",
    },
    fQwylL6Ek: {
      elements: {},
      page: a(() =>
        import("./yTCh2Gi8OUWYrrXygnst9bllZoNueylaoimmSf5MWrk.6DMMK4VC.mjs")
      ),
      path: "/telegram",
    },
    HBAeOtBya: {
      elements: {},
      page: a(() =>
        import("./KnO0u4DVShJGjyHtxvgnELVoJGJR0YuXNxA8MWW9Whc.JL6SDPFM.mjs")
      ),
      path: "/old-home-2",
    },
  },
  O = [{ code: "en-US", id: "default", name: "English", slug: "" }];
async function G({ routeId: t, pathVariables: n, localeId: s }) {
  await u[t].page.preload();
  let e = m(E, {
      isWebsite: !0,
      routeId: t,
      pathVariables: n,
      routes: u,
      collectionUtils: {},
      framerSiteId:
        "46568bda46fa461eee53ddd666a127e353f6462970d6bf995f9a11e1de58cc34",
      notFoundPage: a(() => import("./SitesNotFoundPage.js@1.1-FHOH63GS.mjs")),
      isReducedMotion: void 0,
      localeId: s,
      locales: O,
      preserveQueryParams: void 0,
    }),
    i = m(w, {
      children: e,
      value: {
        codeBoundaries: !1,
        editorBarMenu: !1,
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !1,
      },
    });
  return m(y, { children: i, value: { routes: {} } });
}
var B = typeof document < "u";
if (B) {
  (r.__framer_importFromPackage = (n, s) => () =>
    m(v, {
      error: 'Package component not supported: "' + s + '" in "' + n + '"',
    })),
    (r.process = {
      ...r.process,
      env: { ...(r.process ? r.process.env : void 0), NODE_ENV: "production" },
    }),
    (r.__framer_events = r.__framer_events || []),
    b();
  let t = document.getElementById("main");
  "framerHydrateV2" in t.dataset ? M(!0, t) : M(!1, t);
}
function N() {
  B && r.__framer_events.push(arguments);
}
async function M(t, n) {
  function s(e, i, c = !0) {
    if (e.caught || r.__framer_hadFatalError) return;
    let l = i?.componentStack;
    if (c) {
      if (
        (console.warn(
          `Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          l
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        "Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/"
      );
    N(
      c ? "published_site_load_recoverable_error" : "published_site_load_error",
      {
        message: String(e),
        componentStack: l,
        stack: l
          ? void 0
          : e instanceof Error && typeof e.stack == "string"
          ? e.stack
          : null,
      }
    );
  }
  try {
    let e, i, c, l;
    if (t) {
      let o = JSON.parse(n.dataset.framerHydrateV2);
      (e = o.routeId),
        (i = o.localeId),
        (c = o.pathVariables),
        (l = o.breakpoints);
    } else {
      let o = k(u, decodeURIComponent(location.pathname), !0, O);
      (e = o.routeId), (i = o.localeId), (c = o.pathVariables);
    }
    let f = await G({ routeId: e, localeId: i, pathVariables: c });
    t
      ? (P("framer-rewrite-breakpoints", () => {
          I(l), r.__framer_onRewriteBreakpoints?.(l);
        }),
        h(() => {
          _(), R(), F(), V(n, f, { onRecoverableError: s });
        }))
      : z(n, { onRecoverableError: s }).render(f);
  } catch (e) {
    throw (s(e, void 0, !1), e);
  }
}
export { G as getPageRoot };
//# sourceMappingURL=script_main.3W3I7Q7O.mjs.map
