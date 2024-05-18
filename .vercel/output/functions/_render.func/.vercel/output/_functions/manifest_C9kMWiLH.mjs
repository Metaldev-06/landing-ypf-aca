import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_sdYCWhHU.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"hotel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hotel","isIndex":false,"type":"page","pattern":"^\\/hotel\\/?$","segments":[[{"content":"hotel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hotel.astro","pathname":"/hotel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"menu/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/menu","isIndex":false,"type":"page","pattern":"^\\/menu\\/?$","segments":[[{"content":"menu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/menu.astro","pathname":"/menu","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/common/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/pages/hotel.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/hotel@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ferny/OneDrive/Escritorio/astro/landing-ypf-aca/src/pages/menu.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/menu@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_C9kMWiLH.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DuDNkgLt.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BMBplAmq.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_DD1qa6qA.mjs","\u0000@astro-page:src/pages/hotel@_@astro":"chunks/hotel_YaMu48FK.mjs","\u0000@astro-page:src/pages/menu@_@astro":"chunks/menu_CuDLWe5R.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CuGf78K8.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CzyCpVcV.js","/astro/hoisted.js?q=1":"_astro/hoisted.GdTcZkNB.js","/astro/hoisted.js?q=2":"_astro/hoisted.DlQLsKA2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-greek-ext-wght-normal.D5AYLNiq.woff2","/_astro/inter-cyrillic-wght-normal.BmJJXa8e.woff2","/_astro/inter-greek-wght-normal.DyIDNIyN.woff2","/_astro/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2","/_astro/inter-latin-ext-wght-normal.CN1pIXkb.woff2","/_astro/inter-vietnamese-wght-normal._GQuwPVU.woff2","/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2","/_astro/separator-4.CSZy1AMk.jpg","/_astro/separator-2.Cc5w886p.jpg","/_astro/separator-6.y4yBR8-m.jpg","/_astro/separator-3.NVKM1aRH.jpg","/_astro/separator-1.Cm8x4cge.jpg","/_astro/separator-5.D47JUHTV.jpg","/_astro/applestore-icon.BjZOdKdo.png","/_astro/playstore-icon.DkTBTgO4.png","/_astro/banner-person.C4iZj4WR.png","/_astro/logo-aca.BYfbRIEc.svg","/_astro/logo-diaz-servicios.vPTUrxnY.svg","/_astro/hero-image.CuHT3OZt.jpg","/_astro/background-footer.B2vXidUm.jpg","/_astro/product-1.DJDNCinI.jpg","/_astro/product-3.C-Kv7pkx.jpg","/_astro/product-2.Bq0bwzEf.jpg","/_astro/contact.BnwSqvkh.css","/_astro/index.CwtePqJt.css","/favicon.svg","/_astro/hoisted.CzyCpVcV.js","/_astro/hoisted.DlQLsKA2.js","/_astro/hoisted.GdTcZkNB.js","/img/applestore-icon.png","/img/arrow-1.webp","/img/arrow-2.webp","/img/back-5.webp","/img/background-footer.jpg","/img/background-menu.jpg","/img/banner-person.png","/img/cafe-1.webp","/img/cafe-10.webp","/img/cafe-2.webp","/img/cafe-3.webp","/img/cafe-4.webp","/img/hero-image.jpg","/img/hotel-background.jpg","/img/logo-aca.svg","/img/logo-diaz-servicios.svg","/img/logo-ypf.svg","/img/playstore-icon.png","/img/product-1.jpg","/img/product-2.jpg","/img/product-3.jpg","/img/separator-1.jpg","/img/separator-2.jpg","/img/separator-3.jpg","/img/separator-4.jpg","/img/separator-5.jpg","/img/separator-6.jpg","/img/service-1.jpg","/img/service-2.jpg","/img/service-3.jpg","/fonts/Full.otf","/img/iconified/apple-touch-icon-114x114.png","/img/iconified/apple-touch-icon-120x120.png","/img/iconified/apple-touch-icon-144x144.png","/img/iconified/apple-touch-icon-152x152.png","/img/iconified/apple-touch-icon-180x180.png","/img/iconified/apple-touch-icon-57x57.png","/img/iconified/apple-touch-icon-72x72.png","/img/iconified/apple-touch-icon-76x76.png","/img/iconified/apple-touch-icon.png","/img/iconified/favicon.ico","/img/iconified/iconifier-readme.txt","/404.html","/contact/index.html","/hotel/index.html","/menu/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
