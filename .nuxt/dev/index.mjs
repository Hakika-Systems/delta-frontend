import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getQuery as getQuery$1, readBody, getResponseStatusText } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/devalue/index.js';
import destr from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/vue/server-renderer/index.mjs';
import { hash } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/ohash/dist/index.mjs';
import { propsToString, renderSSRHead } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/defu/dist/defu.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/consola/dist/index.mjs';
import { getContext } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/unctx/dist/index.mjs';
import * as vue$1 from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/vue/index.mjs';
import { isVNode, version, unref } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/vue/index.mjs';
import BaseStyle$h from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/@primevue/core/base/style/index.mjs';
import { Theme } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/@primeuix/styled/index.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://C:/Users/user/Documents/GitHub/okzimbabwe/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": true,
      "autoImport": true,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "options": {
        "theme": {
          "preset": {
            "primitive": {
              "borderRadius": {
                "none": "0",
                "xs": "2px",
                "sm": "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px"
              },
              "emerald": {
                "50": "#ecfdf5",
                "100": "#d1fae5",
                "200": "#a7f3d0",
                "300": "#6ee7b7",
                "400": "#34d399",
                "500": "#10b981",
                "600": "#059669",
                "700": "#047857",
                "800": "#065f46",
                "900": "#064e3b",
                "950": "#022c22"
              },
              "green": {
                "50": "#f0fdf4",
                "100": "#dcfce7",
                "200": "#bbf7d0",
                "300": "#86efac",
                "400": "#4ade80",
                "500": "#22c55e",
                "600": "#16a34a",
                "700": "#15803d",
                "800": "#166534",
                "900": "#14532d",
                "950": "#052e16"
              },
              "lime": {
                "50": "#f7fee7",
                "100": "#ecfccb",
                "200": "#d9f99d",
                "300": "#bef264",
                "400": "#a3e635",
                "500": "#84cc16",
                "600": "#65a30d",
                "700": "#4d7c0f",
                "800": "#3f6212",
                "900": "#365314",
                "950": "#1a2e05"
              },
              "red": {
                "50": "#fef2f2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d",
                "950": "#450a0a"
              },
              "orange": {
                "50": "#fff7ed",
                "100": "#ffedd5",
                "200": "#fed7aa",
                "300": "#fdba74",
                "400": "#fb923c",
                "500": "#f97316",
                "600": "#ea580c",
                "700": "#c2410c",
                "800": "#9a3412",
                "900": "#7c2d12",
                "950": "#431407"
              },
              "amber": {
                "50": "#fffbeb",
                "100": "#fef3c7",
                "200": "#fde68a",
                "300": "#fcd34d",
                "400": "#fbbf24",
                "500": "#f59e0b",
                "600": "#d97706",
                "700": "#b45309",
                "800": "#92400e",
                "900": "#78350f",
                "950": "#451a03"
              },
              "yellow": {
                "50": "#fefce8",
                "100": "#fef9c3",
                "200": "#fef08a",
                "300": "#fde047",
                "400": "#facc15",
                "500": "#eab308",
                "600": "#ca8a04",
                "700": "#a16207",
                "800": "#854d0e",
                "900": "#713f12",
                "950": "#422006"
              },
              "teal": {
                "50": "#f0fdfa",
                "100": "#ccfbf1",
                "200": "#99f6e4",
                "300": "#5eead4",
                "400": "#2dd4bf",
                "500": "#14b8a6",
                "600": "#0d9488",
                "700": "#0f766e",
                "800": "#115e59",
                "900": "#134e4a",
                "950": "#042f2e"
              },
              "cyan": {
                "50": "#ecfeff",
                "100": "#cffafe",
                "200": "#a5f3fc",
                "300": "#67e8f9",
                "400": "#22d3ee",
                "500": "#06b6d4",
                "600": "#0891b2",
                "700": "#0e7490",
                "800": "#155e75",
                "900": "#164e63",
                "950": "#083344"
              },
              "sky": {
                "50": "#f0f9ff",
                "100": "#e0f2fe",
                "200": "#bae6fd",
                "300": "#7dd3fc",
                "400": "#38bdf8",
                "500": "#0ea5e9",
                "600": "#0284c7",
                "700": "#0369a1",
                "800": "#075985",
                "900": "#0c4a6e",
                "950": "#082f49"
              },
              "blue": {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554"
              },
              "indigo": {
                "50": "#eef2ff",
                "100": "#e0e7ff",
                "200": "#c7d2fe",
                "300": "#a5b4fc",
                "400": "#818cf8",
                "500": "#6366f1",
                "600": "#4f46e5",
                "700": "#4338ca",
                "800": "#3730a3",
                "900": "#312e81",
                "950": "#1e1b4b"
              },
              "violet": {
                "50": "#f5f3ff",
                "100": "#ede9fe",
                "200": "#ddd6fe",
                "300": "#c4b5fd",
                "400": "#a78bfa",
                "500": "#8b5cf6",
                "600": "#7c3aed",
                "700": "#6d28d9",
                "800": "#5b21b6",
                "900": "#4c1d95",
                "950": "#2e1065"
              },
              "purple": {
                "50": "#faf5ff",
                "100": "#f3e8ff",
                "200": "#e9d5ff",
                "300": "#d8b4fe",
                "400": "#c084fc",
                "500": "#a855f7",
                "600": "#9333ea",
                "700": "#7e22ce",
                "800": "#6b21a8",
                "900": "#581c87",
                "950": "#3b0764"
              },
              "fuchsia": {
                "50": "#fdf4ff",
                "100": "#fae8ff",
                "200": "#f5d0fe",
                "300": "#f0abfc",
                "400": "#e879f9",
                "500": "#d946ef",
                "600": "#c026d3",
                "700": "#a21caf",
                "800": "#86198f",
                "900": "#701a75",
                "950": "#4a044e"
              },
              "pink": {
                "50": "#fdf2f8",
                "100": "#fce7f3",
                "200": "#fbcfe8",
                "300": "#f9a8d4",
                "400": "#f472b6",
                "500": "#ec4899",
                "600": "#db2777",
                "700": "#be185d",
                "800": "#9d174d",
                "900": "#831843",
                "950": "#500724"
              },
              "rose": {
                "50": "#fff1f2",
                "100": "#ffe4e6",
                "200": "#fecdd3",
                "300": "#fda4af",
                "400": "#fb7185",
                "500": "#f43f5e",
                "600": "#e11d48",
                "700": "#be123c",
                "800": "#9f1239",
                "900": "#881337",
                "950": "#4c0519"
              },
              "slate": {
                "50": "#f8fafc",
                "100": "#f1f5f9",
                "200": "#e2e8f0",
                "300": "#cbd5e1",
                "400": "#94a3b8",
                "500": "#64748b",
                "600": "#475569",
                "700": "#334155",
                "800": "#1e293b",
                "900": "#0f172a",
                "950": "#020617"
              },
              "gray": {
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712"
              },
              "zinc": {
                "50": "#fafafa",
                "100": "#f4f4f5",
                "200": "#e4e4e7",
                "300": "#d4d4d8",
                "400": "#a1a1aa",
                "500": "#71717a",
                "600": "#52525b",
                "700": "#3f3f46",
                "800": "#27272a",
                "900": "#18181b",
                "950": "#09090b"
              },
              "neutral": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#e5e5e5",
                "300": "#d4d4d4",
                "400": "#a3a3a3",
                "500": "#737373",
                "600": "#525252",
                "700": "#404040",
                "800": "#262626",
                "900": "#171717",
                "950": "#0a0a0a"
              },
              "stone": {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09"
              }
            },
            "semantic": {
              "transitionDuration": "0.2s",
              "focusRing": {
                "width": "1px",
                "style": "solid",
                "color": "{primary.color}",
                "offset": "2px",
                "shadow": "none"
              },
              "disabledOpacity": "0.6",
              "iconSize": "1rem",
              "anchorGutter": "2px",
              "primary": {
                "50": "{emerald.50}",
                "100": "{emerald.100}",
                "200": "{emerald.200}",
                "300": "{emerald.300}",
                "400": "{emerald.400}",
                "500": "{emerald.500}",
                "600": "{emerald.600}",
                "700": "{emerald.700}",
                "800": "{emerald.800}",
                "900": "{emerald.900}",
                "950": "{emerald.950}"
              },
              "formField": {
                "paddingX": "0.75rem",
                "paddingY": "0.5rem",
                "borderRadius": "{border.radius.md}",
                "focusRing": {
                  "width": "0",
                  "style": "none",
                  "color": "transparent",
                  "offset": "0",
                  "shadow": "none"
                },
                "transitionDuration": "{transition.duration}"
              },
              "list": {
                "padding": "0.25rem 0.25rem",
                "gap": "2px",
                "header": {
                  "padding": "0.5rem 1rem 0.25rem 1rem"
                },
                "option": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}"
                },
                "optionGroup": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                }
              },
              "content": {
                "borderRadius": "{border.radius.md}"
              },
              "mask": {
                "transitionDuration": "0.15s"
              },
              "navigation": {
                "list": {
                  "padding": "0.25rem 0.25rem",
                  "gap": "2px"
                },
                "item": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}",
                  "gap": "0.5rem"
                },
                "submenuLabel": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                },
                "submenuIcon": {
                  "size": "0.875rem"
                }
              },
              "overlay": {
                "select": {
                  "borderRadius": "{border.radius.md}",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "popover": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0.75rem",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "modal": {
                  "borderRadius": "{border.radius.xl}",
                  "padding": "1.25rem",
                  "shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                },
                "navigation": {
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                }
              },
              "colorScheme": {
                "light": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{slate.50}",
                    "100": "{slate.100}",
                    "200": "{slate.200}",
                    "300": "{slate.300}",
                    "400": "{slate.400}",
                    "500": "{slate.500}",
                    "600": "{slate.600}",
                    "700": "{slate.700}",
                    "800": "{slate.800}",
                    "900": "{slate.900}",
                    "950": "{slate.950}"
                  },
                  "primary": {
                    "color": "{primary.500}",
                    "contrastColor": "#ffffff",
                    "hoverColor": "{primary.600}",
                    "activeColor": "{primary.700}"
                  },
                  "highlight": {
                    "background": "{primary.50}",
                    "focusBackground": "{primary.100}",
                    "color": "{primary.700}",
                    "focusColor": "{primary.800}"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.4)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.0}",
                    "disabledBackground": "{surface.200}",
                    "filledBackground": "{surface.50}",
                    "filledFocusBackground": "{surface.50}",
                    "borderColor": "{surface.300}",
                    "hoverBorderColor": "{surface.400}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.400}",
                    "color": "{surface.700}",
                    "disabledColor": "{surface.500}",
                    "placeholderColor": "{surface.500}",
                    "floatLabelColor": "{surface.500}",
                    "floatLabelFocusColor": "{surface.500}",
                    "floatLabelInvalidColor": "{red.400}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.700}",
                    "hoverColor": "{surface.800}",
                    "mutedColor": "{surface.500}",
                    "hoverMutedColor": "{surface.600}"
                  },
                  "content": {
                    "background": "{surface.0}",
                    "hoverBackground": "{surface.100}",
                    "borderColor": "{surface.200}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.100}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.100}",
                      "activeBackground": "{surface.100}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}",
                        "activeColor": "{surface.500}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.400}",
                      "focusColor": "{surface.500}",
                      "activeColor": "{surface.500}"
                    }
                  }
                },
                "dark": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{zinc.50}",
                    "100": "{zinc.100}",
                    "200": "{zinc.200}",
                    "300": "{zinc.300}",
                    "400": "{zinc.400}",
                    "500": "{zinc.500}",
                    "600": "{zinc.600}",
                    "700": "{zinc.700}",
                    "800": "{zinc.800}",
                    "900": "{zinc.900}",
                    "950": "{zinc.950}"
                  },
                  "primary": {
                    "color": "{primary.400}",
                    "contrastColor": "{surface.900}",
                    "hoverColor": "{primary.300}",
                    "activeColor": "{primary.200}"
                  },
                  "highlight": {
                    "background": "color-mix(in srgb, {primary.400}, transparent 84%)",
                    "focusBackground": "color-mix(in srgb, {primary.400}, transparent 76%)",
                    "color": "rgba(255,255,255,.87)",
                    "focusColor": "rgba(255,255,255,.87)"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.6)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.950}",
                    "disabledBackground": "{surface.700}",
                    "filledBackground": "{surface.800}",
                    "filledFocusBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "hoverBorderColor": "{surface.600}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.300}",
                    "color": "{surface.0}",
                    "disabledColor": "{surface.400}",
                    "placeholderColor": "{surface.400}",
                    "floatLabelColor": "{surface.400}",
                    "floatLabelFocusColor": "{surface.400}",
                    "floatLabelInvalidColor": "{red.300}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.0}",
                    "hoverColor": "{surface.0}",
                    "mutedColor": "{surface.400}",
                    "hoverMutedColor": "{surface.300}"
                  },
                  "content": {
                    "background": "{surface.900}",
                    "hoverBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.800}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.800}",
                      "activeBackground": "{surface.800}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}",
                        "activeColor": "{surface.400}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.500}",
                      "focusColor": "{surface.400}",
                      "activeColor": "{surface.400}"
                    }
                  }
                }
              }
            },
            "components": {
              "accordion": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}"
                },
                "header": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{text.color}",
                  "padding": "1.125rem",
                  "fontWeight": "600",
                  "borderRadius": "0",
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "hoverBackground": "{content.background}",
                  "activeBackground": "{content.background}",
                  "activeHoverBackground": "{content.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "toggleIcon": {
                    "color": "{text.muted.color}",
                    "hoverColor": "{text.color}",
                    "activeColor": "{text.color}",
                    "activeHoverColor": "{text.color}"
                  },
                  "first": {
                    "topBorderRadius": "{content.border.radius}",
                    "borderWidth": "0"
                  },
                  "last": {
                    "bottomBorderRadius": "{content.border.radius}",
                    "activeBottomBorderRadius": "0"
                  }
                },
                "content": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "color": "{text.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "autocomplete": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    }
                  }
                }
              },
              "avatar": {
                "root": {
                  "width": "2rem",
                  "height": "2rem",
                  "fontSize": "1rem",
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.background}",
                  "offset": "-1rem"
                },
                "lg": {
                  "width": "3rem",
                  "height": "3rem",
                  "fontSize": "1.5rem"
                },
                "xl": {
                  "width": "4rem",
                  "height": "4rem",
                  "fontSize": "2rem"
                }
              },
              "badge": {
                "root": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0 0.5rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "700",
                  "minWidth": "1.5rem",
                  "height": "1.5rem"
                },
                "dot": {
                  "size": "0.5rem"
                },
                "sm": {
                  "fontSize": "0.625rem",
                  "minWidth": "1.25rem",
                  "height": "1.25rem"
                },
                "lg": {
                  "fontSize": "0.875rem",
                  "minWidth": "1.75rem",
                  "height": "1.75rem"
                },
                "xl": {
                  "fontSize": "1rem",
                  "minWidth": "2rem",
                  "height": "2rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.500}",
                      "color": "{surface.0}"
                    },
                    "info": {
                      "background": "{sky.500}",
                      "color": "{surface.0}"
                    },
                    "warn": {
                      "background": "{orange.500}",
                      "color": "{surface.0}"
                    },
                    "danger": {
                      "background": "{red.500}",
                      "color": "{surface.0}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "{green.400}",
                      "color": "{green.950}"
                    },
                    "info": {
                      "background": "{sky.400}",
                      "color": "{sky.950}"
                    },
                    "warn": {
                      "background": "{orange.400}",
                      "color": "{orange.950}"
                    },
                    "danger": {
                      "background": "{red.400}",
                      "color": "{red.950}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "blockui": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                }
              },
              "breadcrumb": {
                "root": {
                  "padding": "1rem",
                  "background": "{content.background}",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "item": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "hoverColor": "{navigation.item.icon.focus.color}"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "separator": {
                  "color": "{navigation.item.icon.color}"
                }
              },
              "button": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "gap": "0.5rem",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "iconOnlyWidth": "2.5rem",
                  "sm": {
                    "fontSize": "0.875rem",
                    "paddingX": "0.625rem",
                    "paddingY": "0.375rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem",
                    "paddingX": "0.875rem",
                    "paddingY": "0.625rem"
                  },
                  "label": {
                    "fontWeight": "500"
                  },
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  },
                  "badgeSize": "1rem",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.100}",
                        "hoverBackground": "{surface.200}",
                        "activeBackground": "{surface.300}",
                        "borderColor": "{surface.100}",
                        "hoverBorderColor": "{surface.200}",
                        "activeBorderColor": "{surface.300}",
                        "color": "{surface.600}",
                        "hoverColor": "{surface.700}",
                        "activeColor": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.500}",
                        "hoverBackground": "{sky.600}",
                        "activeBackground": "{sky.700}",
                        "borderColor": "{sky.500}",
                        "hoverBorderColor": "{sky.600}",
                        "activeBorderColor": "{sky.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{sky.500}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.500}",
                        "hoverBackground": "{green.600}",
                        "activeBackground": "{green.700}",
                        "borderColor": "{green.500}",
                        "hoverBorderColor": "{green.600}",
                        "activeBorderColor": "{green.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.500}",
                        "hoverBackground": "{orange.600}",
                        "activeBackground": "{orange.700}",
                        "borderColor": "{orange.500}",
                        "hoverBorderColor": "{orange.600}",
                        "activeBorderColor": "{orange.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{orange.500}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.500}",
                        "hoverBackground": "{purple.600}",
                        "activeBackground": "{purple.700}",
                        "borderColor": "{purple.500}",
                        "hoverBorderColor": "{purple.600}",
                        "activeBorderColor": "{purple.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{purple.500}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.500}",
                        "hoverBackground": "{red.600}",
                        "activeBackground": "{red.700}",
                        "borderColor": "{red.500}",
                        "hoverBorderColor": "{red.600}",
                        "activeBorderColor": "{red.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.950}",
                        "hoverBackground": "{surface.900}",
                        "activeBackground": "{surface.800}",
                        "borderColor": "{surface.950}",
                        "hoverBorderColor": "{surface.900}",
                        "activeBorderColor": "{surface.800}",
                        "color": "{surface.0}",
                        "hoverColor": "{surface.0}",
                        "activeColor": "{surface.0}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "borderColor": "{primary.200}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "borderColor": "{green.200}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "borderColor": "{sky.200}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "borderColor": "{orange.200}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "borderColor": "{purple.200}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "borderColor": "{red.200}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.700}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.700}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "color": "{red.500}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.700}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.800}",
                        "hoverBackground": "{surface.700}",
                        "activeBackground": "{surface.600}",
                        "borderColor": "{surface.800}",
                        "hoverBorderColor": "{surface.700}",
                        "activeBorderColor": "{surface.600}",
                        "color": "{surface.300}",
                        "hoverColor": "{surface.200}",
                        "activeColor": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.400}",
                        "hoverBackground": "{sky.300}",
                        "activeBackground": "{sky.200}",
                        "borderColor": "{sky.400}",
                        "hoverBorderColor": "{sky.300}",
                        "activeBorderColor": "{sky.200}",
                        "color": "{sky.950}",
                        "hoverColor": "{sky.950}",
                        "activeColor": "{sky.950}",
                        "focusRing": {
                          "color": "{sky.400}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.400}",
                        "hoverBackground": "{green.300}",
                        "activeBackground": "{green.200}",
                        "borderColor": "{green.400}",
                        "hoverBorderColor": "{green.300}",
                        "activeBorderColor": "{green.200}",
                        "color": "{green.950}",
                        "hoverColor": "{green.950}",
                        "activeColor": "{green.950}",
                        "focusRing": {
                          "color": "{green.400}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.400}",
                        "hoverBackground": "{orange.300}",
                        "activeBackground": "{orange.200}",
                        "borderColor": "{orange.400}",
                        "hoverBorderColor": "{orange.300}",
                        "activeBorderColor": "{orange.200}",
                        "color": "{orange.950}",
                        "hoverColor": "{orange.950}",
                        "activeColor": "{orange.950}",
                        "focusRing": {
                          "color": "{orange.400}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.400}",
                        "hoverBackground": "{purple.300}",
                        "activeBackground": "{purple.200}",
                        "borderColor": "{purple.400}",
                        "hoverBorderColor": "{purple.300}",
                        "activeBorderColor": "{purple.200}",
                        "color": "{purple.950}",
                        "hoverColor": "{purple.950}",
                        "activeColor": "{purple.950}",
                        "focusRing": {
                          "color": "{purple.400}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.400}",
                        "hoverBackground": "{red.300}",
                        "activeBackground": "{red.200}",
                        "borderColor": "{red.400}",
                        "hoverBorderColor": "{red.300}",
                        "activeBorderColor": "{red.200}",
                        "color": "{red.950}",
                        "hoverColor": "{red.950}",
                        "activeColor": "{red.950}",
                        "focusRing": {
                          "color": "{red.400}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.0}",
                        "hoverBackground": "{surface.100}",
                        "activeBackground": "{surface.200}",
                        "borderColor": "{surface.0}",
                        "hoverBorderColor": "{surface.100}",
                        "activeBorderColor": "{surface.200}",
                        "color": "{surface.950}",
                        "hoverColor": "{surface.950}",
                        "activeColor": "{surface.950}",
                        "focusRing": {
                          "color": "{surface.0}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "borderColor": "{primary.700}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "rgba(255,255,255,0.04)",
                        "activeBackground": "rgba(255,255,255,0.16)",
                        "borderColor": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "borderColor": "{green.700}",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "borderColor": "{sky.700}",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "borderColor": "{orange.700}",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {help.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {help.400}, transparent 84%)",
                        "borderColor": "{purple.700}",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {danger.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {danger.400}, transparent 84%)",
                        "borderColor": "{red.700}",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.500}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.600}",
                        "color": "{surface.0}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "color": "{red.400}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  }
                }
              },
              "datepicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "{overlay.popover.padding}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "padding": "0 0 0.5rem 0",
                  "fontWeight": "500",
                  "gap": "0.5rem"
                },
                "title": {
                  "gap": "0.5rem",
                  "fontWeight": "500"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "inputIcon": {
                  "color": "{form.field.icon.color}"
                },
                "selectMonth": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "selectYear": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.border.color}",
                  "gap": "{overlay.popover.padding}"
                },
                "dayView": {
                  "margin": "0.5rem 0 0 0"
                },
                "weekDay": {
                  "padding": "0.25rem",
                  "fontWeight": "500",
                  "color": "{content.color}"
                },
                "date": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{primary.color}",
                  "rangeSelectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{primary.contrast.color}",
                  "rangeSelectedColor": "{highlight.color}",
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "50%",
                  "padding": "0.25rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "monthView": {
                  "margin": "0.5rem 0 0 0"
                },
                "month": {
                  "borderRadius": "{content.border.radius}"
                },
                "yearView": {
                  "margin": "0.5rem 0 0 0"
                },
                "year": {
                  "borderRadius": "{content.border.radius}"
                },
                "buttonbar": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}"
                },
                "timePicker": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}",
                  "gap": "0.5rem",
                  "buttonGap": "0.25rem"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    },
                    "today": {
                      "background": "{surface.200}",
                      "color": "{surface.900}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    },
                    "today": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "card": {
                "root": {
                  "background": "{content.background}",
                  "borderRadius": "{border.radius.xl}",
                  "color": "{content.color}",
                  "shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
                },
                "body": {
                  "padding": "1.25rem",
                  "gap": "0.5rem"
                },
                "caption": {
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "500"
                },
                "subtitle": {
                  "color": "{text.muted.color}"
                }
              },
              "carousel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "gap": "0.25rem"
                },
                "indicatorList": {
                  "padding": "1rem",
                  "gap": "0.5rem"
                },
                "indicator": {
                  "width": "2rem",
                  "height": "0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "indicator": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}",
                      "activeBackground": "{primary.color}"
                    }
                  },
                  "dark": {
                    "indicator": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "activeBackground": "{primary.color}"
                    }
                  }
                }
              },
              "cascadeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "icon": {
                    "color": "{list.option.icon.color}",
                    "focusColor": "{list.option.icon.focus.color}",
                    "size": "0.875rem"
                  }
                }
              },
              "checkbox": {
                "root": {
                  "borderRadius": "{border.radius.sm}",
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "icon": {
                  "size": "0.875rem",
                  "color": "{form.field.color}",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}"
                }
              },
              "chip": {
                "root": {
                  "borderRadius": "16px",
                  "paddingX": "0.75rem",
                  "paddingY": "0.5rem",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "image": {
                  "width": "2rem",
                  "height": "2rem"
                },
                "icon": {
                  "size": "1rem"
                },
                "removeIcon": {
                  "size": "1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "color": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.800}"
                    },
                    "removeIcon": {
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.800}",
                      "color": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.0}"
                    },
                    "removeIcon": {
                      "color": "{surfaec.0}"
                    }
                  }
                }
              },
              "colorpicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "width": "1.5rem",
                  "height": "1.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "panel": {
                  "shadow": "{overlay.popover.shadow}",
                  "borderRadius": "{overlay.popover.borderRadius}"
                },
                "colorScheme": {
                  "light": {
                    "panel": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.900}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "panel": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "confirmdialog": {
                "icon": {
                  "size": "2rem",
                  "color": "{overlay.modal.color}"
                },
                "content": {
                  "gap": "1rem"
                }
              },
              "confirmpopup": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "1rem"
                },
                "icon": {
                  "size": "1.5rem",
                  "color": "{overlay.popover.color}"
                },
                "footer": {
                  "gap": "0.5rem",
                  "padding": "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
                }
              },
              "contextmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "dataview": {
                "root": {
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "padding": "0"
                },
                "header": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "padding": "0",
                  "borderRadius": "0"
                },
                "footer": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0"
                }
              },
              "datatable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{datatable.border.color}",
                  "padding": "0.75rem 1rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "dropPointColor": "{primary.color}",
                "columnResizerWidth": "0.5rem",
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "rowToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "filter": {
                  "inlineGap": "0.5rem",
                  "overlaySelect": {
                    "background": "{overlay.select.background}",
                    "borderColor": "{overlay.select.border.color}",
                    "borderRadius": "{overlay.select.border.radius}",
                    "color": "{overlay.select.color}",
                    "shadow": "{overlay.select.shadow}"
                  },
                  "overlayPopover": {
                    "background": "{overlay.popover.background}",
                    "borderColor": "{overlay.popover.border.color}",
                    "borderRadius": "{overlay.popover.border.radius}",
                    "color": "{overlay.popover.color}",
                    "shadow": "{overlay.popover.shadow}",
                    "padding": "{overlay.popover.padding}",
                    "gap": "0.5rem"
                  },
                  "rule": {
                    "borderColor": "{content.border.color}"
                  },
                  "constraintList": {
                    "padding": "{list.padding}",
                    "gap": "{list.gap}"
                  },
                  "constraint": {
                    "focusBackground": "{list.option.focus.background}",
                    "selectedBackground": "{list.option.selected.background}",
                    "selectedFocusBackground": "{list.option.selected.focus.background}",
                    "color": "{list.option.color}",
                    "focusColor": "{list.option.focus.color}",
                    "selectedColor": "{list.option.selected.color}",
                    "selectedFocusColor": "{list.option.selected.focus.color}",
                    "separator": {
                      "borderColor": "{content.border.color}"
                    },
                    "padding": "{list.option.padding}",
                    "borderRadius": "{list.option.border.radius}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "row": {
                      "stripedBackground": "{surface.50}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "row": {
                      "stripedBackground": "{surface.950}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "dialog": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                  "gap": "0.5rem"
                }
              },
              "divider": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{text.color}"
                },
                "horizontal": {
                  "margin": "1rem 0",
                  "padding": "0 1rem",
                  "content": {
                    "padding": "0 0.5rem"
                  }
                },
                "vertical": {
                  "margin": "0 1rem",
                  "padding": "0.5rem 0",
                  "content": {
                    "padding": "0.5rem 0"
                  }
                }
              },
              "dock": {
                "root": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "borderColor": "rgba(255, 255, 255, 0.2)",
                  "padding": "0.5rem",
                  "borderRadius": "{border.radius.xl}"
                },
                "item": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "0.5rem",
                  "size": "3rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "drawer": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}"
                },
                "title": {
                  "fontSize": "1.5rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                }
              },
              "editor": {
                "toolbar": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "toolbarItem": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}",
                  "padding": "{list.padding}"
                },
                "overlayOption": {
                  "focusBackground": "{list.option.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "content": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                }
              },
              "fieldset": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem",
                  "transitionDuration": "{transition.duration}"
                },
                "legend": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem",
                  "fontWeight": "600",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "toggleIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "content": {
                  "padding": "0"
                }
              },
              "fileupload": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "gap": "0.5rem"
                },
                "content": {
                  "highlightBorderColor": "{primary.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                },
                "file": {
                  "padding": "1rem",
                  "gap": "1rem",
                  "borderColor": "{content.border.color}",
                  "info": {
                    "gap": "0.5rem"
                  }
                },
                "progressbar": {
                  "height": "0.25rem"
                },
                "basic": {
                  "gap": "0.5rem"
                }
              },
              "floatlabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s"
                }
              },
              "galleria": {
                "root": {
                  "borderWidth": "1px",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.100}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "prev": {
                    "borderRadius": "50%"
                  },
                  "next": {
                    "borderRadius": "50%"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "navIcon": {
                  "size": "1.5rem"
                },
                "thumbnailsContent": {
                  "background": "{content.background}",
                  "padding": "1rem 0.25rem"
                },
                "thumbnailNavButton": {
                  "size": "2rem",
                  "borderRadius": "{content.border.radius}",
                  "gutter": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "thumbnailNavButtonIcon": {
                  "size": "1rem"
                },
                "caption": {
                  "background": "rgba(0, 0, 0, 0.5)",
                  "color": "{surface.100}",
                  "padding": "1rem"
                },
                "indicatorList": {
                  "gap": "0.5rem",
                  "padding": "1rem"
                },
                "indicatorButton": {
                  "width": "1rem",
                  "height": "1rem",
                  "activeBackground": "{primary.color}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "insetIndicatorList": {
                  "background": "rgba(0, 0, 0, 0.5)"
                },
                "insetIndicatorButton": {
                  "background": "rgba(255, 255, 255, 0.4)",
                  "hoverBackground": "rgba(255, 255, 255, 0.6)",
                  "activeBackground": "rgba(255, 255, 255, 0.9)"
                },
                "mask": {
                  "background": "{mask.background}",
                  "color": "{mask.color}"
                },
                "closeButton": {
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "closeButtonIcon": {
                  "size": "1.5rem"
                },
                "colorScheme": {
                  "light": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.100}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}"
                    },
                    "indicatorButton": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}"
                    }
                  },
                  "dark": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.700}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.0}"
                    },
                    "indicatorButton": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}"
                    }
                  }
                }
              },
              "iconfield": {
                "icon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "image": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "icon": {
                    "size": "1.5rem"
                  },
                  "mask": {
                    "background": "{mask.background}",
                    "color": "{mask.color}"
                  }
                },
                "toolbar": {
                  "position": {
                    "left": "auto",
                    "right": "1rem",
                    "top": "1rem",
                    "bottom": "auto"
                  },
                  "blur": "8px",
                  "background": "rgba(255,255,255,0.1)",
                  "borderColor": "rgba(255,255,255,0.2)",
                  "borderWidth": "1px",
                  "borderRadius": "30px",
                  "padding": ".5rem",
                  "gap": "0.5rem"
                },
                "action": {
                  "hoverBackground": "rgba(255,255,255,0.1)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "iconSize": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "inlinemessage": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  }
                }
              },
              "inplace": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "display": {
                  "hoverBackground": "{content.hover.background}",
                  "hoverColor": "{content.hover.color}"
                }
              },
              "inputchips": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "inputgroup": {
                "addon": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.icon.color}",
                  "borderRadius": "{form.field.border.radius}"
                }
              },
              "inputnumber": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "button": {
                  "width": "2.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "verticalPadding": "{form.field.padding.y}"
                },
                "colorScheme": {
                  "light": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.100}",
                      "activeBackground": "{surface.200}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.500}",
                      "activeColor": "{surface.600}"
                    }
                  },
                  "dark": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.800}",
                      "activeBackground": "{surface.700}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "activeColor": "{surface.200}"
                    }
                  }
                }
              },
              "inputtext": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "0.875rem",
                    "paddingX": "0.625rem",
                    "paddingY": "0.375rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem",
                    "paddingX": "0.875rem",
                    "paddingY": "0.625rem"
                  }
                }
              },
              "knob": {
                "root": {
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "value": {
                  "background": "{primary.color}"
                },
                "range": {
                  "background": "{content.border.color}"
                },
                "text": {
                  "color": "{text.muted.color}"
                }
              },
              "listbox": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "option": {
                      "stripedBackground": "{surface.50}"
                    }
                  },
                  "dark": {
                    "option": {
                      "stripedBackground": "{surface.900}"
                    }
                  }
                }
              },
              "megamenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "verticalOrientation": {
                    "padding": "{navigation.list.padding}",
                    "gap": "0"
                  },
                  "horizontalOrientation": {
                    "padding": "0.5rem 0.75rem"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "overlay": {
                  "padding": "0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "{overlay.navigation.shadow}",
                  "gap": "0.5rem"
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background.}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.muted.hover.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "menu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "menubar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.muted.hover.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "message": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontSize": "1rem",
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1.125rem"
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                }
              },
              "metergroup": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "gap": "1rem"
                },
                "meters": {
                  "background": "{content.border.color}",
                  "size": "0.5rem"
                },
                "label": {
                  "gap": "0.5rem"
                },
                "labelMarker": {
                  "size": "0.5rem"
                },
                "labelIcon": {
                  "size": "1rem"
                },
                "labelList": {
                  "verticalGap": "0.5rem",
                  "horizontalGap": "1rem"
                }
              },
              "multiselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "gap": "0.5rem"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "orderlist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "organizationchart": {
                "root": {
                  "gutter": "0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "selectedColor": "{highlight.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.75rem 1rem",
                  "toggleablePadding": "0.75rem 1rem 1.25rem 1rem",
                  "borderRadius": "{content.border.radius}"
                },
                "nodeToggleButton": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "connector": {
                  "color": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "24px"
                }
              },
              "overlaybadge": {
                "root": {
                  "outline": {
                    "width": "2px",
                    "color": "{content.background}"
                  }
                }
              },
              "popover": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}"
                }
              },
              "paginator": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}",
                  "width": "2.5rem",
                  "height": "2.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "currentPageReport": {
                  "color": "{text.muted.color}"
                },
                "jumpToPageInput": {
                  "maxWidth": "2.5rem"
                }
              },
              "password": {
                "meter": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": ".75rem"
                },
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "color": "{overlay.popover.color}",
                  "padding": "{overlay.popover.padding}",
                  "shadow": "{overlay.popover.shadow}"
                },
                "content": {
                  "gap": "0.5rem"
                },
                "colorScheme": {
                  "light": {
                    "strength": {
                      "weakBackground": "{red.500}",
                      "mediumBackground": "{amber.500}",
                      "strongBackground": "{green.500}"
                    }
                  },
                  "dark": {
                    "strength": {
                      "weakBackground": "{red.400}",
                      "mediumBackground": "{amber.400}",
                      "strongBackground": "{green.400}"
                    }
                  }
                }
              },
              "panel": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "borderRadius": "0"
                },
                "toggleableHeader": {
                  "padding": "0.375rem 1.125rem"
                },
                "title": {
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                },
                "footer": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "panelmenu": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px",
                  "color": "{content.color}",
                  "padding": "0.25rem 0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "first": {
                    "borderWidth": "1px",
                    "topBorderRadius": "{content.border.radius}"
                  },
                  "last": {
                    "borderWidth": "1px",
                    "bottomBorderRadius": "{content.border.radius}"
                  }
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "gap": "0.5rem",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenu": {
                  "indent": "1rem"
                },
                "submenuIcon": {
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                }
              },
              "picklist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "progressbar": {
                "root": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "1.25rem"
                },
                "value": {
                  "background": "{primary.color}"
                },
                "label": {
                  "color": "{primary.contrast.color}",
                  "fontSize": "0.75rem",
                  "fontWeight": "600"
                }
              },
              "progressspinner": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "color.1": "{red.500}",
                      "color.2": "{blue.500}",
                      "color.3": "{green.500}",
                      "color.4": "{yellow.500}"
                    }
                  },
                  "dark": {
                    "root": {
                      "color.1": "{red.400}",
                      "color.2": "{blue.400}",
                      "color.3": "{green.400}",
                      "color.4": "{yellow.400}"
                    }
                  }
                }
              },
              "radiobutton": {
                "root": {
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "icon": {
                  "size": "0.75rem",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}"
                }
              },
              "rating": {
                "root": {
                  "gap": "0.25rem",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "scrollpanel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "bar": {
                  "size": "9px",
                  "borderRadius": "{border.radius.sm}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "bar": {
                      "background": "{surface.100}"
                    }
                  },
                  "dark": {
                    "bar": {
                      "background": "{surface.800}"
                    }
                  }
                }
              },
              "select": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "selectbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  }
                }
              },
              "skeleton": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.200}",
                      "animationBackground": "rgba(255,255,255,0.4)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255, 255, 255, 0.06)",
                      "animationBackground": "rgba(255, 255, 255, 0.04)"
                    }
                  }
                }
              },
              "slider": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "track": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "size": "3px"
                },
                "range": {
                  "background": "{primary.color}"
                },
                "handle": {
                  "width": "20px",
                  "height": "20px",
                  "borderRadius": "50%",
                  "background": "{content.border.color}",
                  "hoverBackground": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "hoverBackground": "{content.background}",
                    "width": "16px",
                    "height": "16px",
                    "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "handle": {
                      "contentBackground": "{surface.0}"
                    }
                  },
                  "dark": {
                    "handle": {
                      "contentBackground": "{surface.950}"
                    }
                  }
                }
              },
              "speeddial": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                }
              },
              "splitter": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "gutter": {
                  "background": "{content.border.color}"
                },
                "handle": {
                  "size": "24px",
                  "background": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "splitbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }
              },
              "stepper": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}",
                  "activeBackground": "{primary.color}",
                  "margin": "0 0 0 1.625rem",
                  "size": "2px"
                },
                "step": {
                  "padding": "0.5rem",
                  "gap": "1rem"
                },
                "stepHeader": {
                  "padding": "0",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "stepTitle": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "stepNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                },
                "steppanels": {
                  "padding": "0.875rem 0.5rem 1.125rem 0.5rem"
                },
                "steppanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0 0 0 1rem"
                }
              },
              "steps": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}"
                },
                "itemLink": {
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "itemLabel": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "itemNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                }
              },
              "tabmenu": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "item": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "itemIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                }
              },
              "tabs": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "tabpanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0.875rem 1.125rem 1.125rem 1.125rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "inset {focus.ring.shadow}"
                  }
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "width": "2.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "tabview": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tabList": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "tabPanel": {
                  "background": "{content.background}",
                  "color": "{content.color}"
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "textarea": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                }
              },
              "tieredmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background.}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "tag": {
                "root": {
                  "fontSize": "0.875rem",
                  "fontWeight": "700",
                  "padding": "0.25rem 0.5rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "roundedBorderRadius": "{border.radius.xl}"
                },
                "icon": {
                  "size": "0.75rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.100}",
                      "color": "{primary.700}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.100}",
                      "color": "{green.700}"
                    },
                    "info": {
                      "background": "{sky.100}",
                      "color": "{sky.700}"
                    },
                    "warn": {
                      "background": "{orange.100}",
                      "color": "{orange.700}"
                    },
                    "danger": {
                      "background": "{red.100}",
                      "color": "{red.700}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "color-mix(in srgb, {primary.500}, transparent 84%)",
                      "color": "{primary.300}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "color": "{green.300}"
                    },
                    "info": {
                      "background": "color-mix(in srgb, {sky.500}, transparent 84%)",
                      "color": "{sky.300}"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {orange.500}, transparent 84%)",
                      "color": "{orange.300}"
                    },
                    "danger": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "color": "{red.300}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "terminal": {
                "root": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "height": "18rem",
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{form.field.border.radius}"
                },
                "prompt": {
                  "gap": "0.25rem"
                },
                "commandResponse": {
                  "margin": "2px 0"
                }
              },
              "timeline": {
                "event": {
                  "minHeight": "5rem"
                },
                "horizontal": {
                  "eventContent": {
                    "padding": "1rem 0"
                  }
                },
                "vertical": {
                  "eventContent": {
                    "padding": "0 1rem"
                  }
                },
                "eventMarker": {
                  "size": "1.125rem",
                  "borderRadius": "50%",
                  "borderWidth": "2px",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "size": "0.375rem",
                    "background": "{primary.color}",
                    "insetShadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                  }
                },
                "eventConnector": {
                  "color": "{content.border.color}",
                  "size": "2px"
                }
              },
              "togglebutton": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "disabledBackground": "{form.field.disabled.background}",
                  "disabledBorderColor": "{form.field.disabled.background}",
                  "disabledColor": "{form.field.disabled.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "icon": {
                  "disabledColor": "{form.field.disabled.color}"
                },
                "content": {
                  "left": "0.25rem",
                  "top": "0.25rem",
                  "checkedShadow": "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "checkedBackground": "{surface.100}",
                      "hoverBackground": "{surface.100}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}",
                      "checkedBorderColor": "{surface.100}"
                    },
                    "content": {
                      "checkedBackground": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.950}",
                      "checkedBackground": "{surface.950}",
                      "hoverBackground": "{surface.950}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}",
                      "checkedBorderColor": "{surface.950}"
                    },
                    "content": {
                      "checkedBackground": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}"
                    }
                  }
                }
              },
              "toggleswitch": {
                "root": {
                  "width": "2.5rem",
                  "height": "1.5rem",
                  "borderRadius": "30px",
                  "gap": "0.25rem",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "checkedBorderColor": "transparent",
                  "checkedHoverBorderColor": "transparent",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "transitionDuration": "{form.field.transition.duration}",
                  "slideDuration": "0.2s",
                  "disabledBackground": "{form.field.disabled.background}"
                },
                "handle": {
                  "borderRadius": "50%",
                  "size": "1rem",
                  "disabledBackground": "{form.field.disabled.color}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.300}",
                      "hoverBackground": "{surface.400}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.0}",
                      "hoverBackground": "{surface.0}",
                      "checkedBackground": "{surface.0}",
                      "checkedHoverBackground": "{surface.0}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.400}",
                      "hoverBackground": "{surface.300}",
                      "checkedBackground": "{surface.900}",
                      "checkedHoverBackground": "{surface.900}"
                    }
                  }
                }
              },
              "tree": {
                "root": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "1rem",
                  "gap": "2px",
                  "indent": "1rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.color}",
                  "hoverColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.25rem"
                },
                "nodeIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}"
                },
                "nodeToggleButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedHoverColor": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "loadingIcon": {
                  "size": "2rem"
                }
              },
              "treeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "tree": {
                  "padding": "{list.padding}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                }
              },
              "treetable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{treetable.border.color}",
                  "padding": "0.75rem 1rem",
                  "gap": "0.5rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "columnResizerWidth": "0.5rem",
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "nodeToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "toast": {
                "root": {
                  "width": "25rem",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1.125rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "text": {
                  "gap": "0.5rem"
                },
                "summary": {
                  "fontWeight": "500",
                  "fontSize": "1rem"
                },
                "detail": {
                  "fontWeight": "500",
                  "fontSize": "0.875rem"
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "blur": "1.5px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "blur": "10px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "detailColor": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                }
              },
              "toolbar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem"
                }
              },
              "virtualscroller": {
                "loader": {
                  "mask": {
                    "background": "{content.background}",
                    "color": "{text.muted.color}"
                  },
                  "icon": {
                    "size": "2rem"
                  }
                }
              }
            },
            "directives": {
              "tooltip": {
                "root": {
                  "maxWidth": "12.5rem",
                  "gutter": "0.25rem",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{overlay.popover.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "ripple": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "rgba(0,0,0,0.1)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255,255,255,0.3)"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "components": [
        {
          "name": "AutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true
        },
        {
          "name": "Calendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true
        },
        {
          "name": "CascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true
        },
        {
          "name": "Checkbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true
        },
        {
          "name": "Chips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true
        },
        {
          "name": "ColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true
        },
        {
          "name": "DatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true
        },
        {
          "name": "Dropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true
        },
        {
          "name": "FloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true
        },
        {
          "name": "IconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true
        },
        {
          "name": "InputChips",
          "as": "InputChips",
          "from": "primevue/inputchips",
          "export": "default",
          "filePath": "primevue/inputchips",
          "global": true
        },
        {
          "name": "InputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true
        },
        {
          "name": "InputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true
        },
        {
          "name": "InputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true
        },
        {
          "name": "InputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true
        },
        {
          "name": "InputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true
        },
        {
          "name": "InputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true
        },
        {
          "name": "InputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true
        },
        {
          "name": "InputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true
        },
        {
          "name": "Knob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true
        },
        {
          "name": "Listbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true
        },
        {
          "name": "MultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true
        },
        {
          "name": "Password",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true
        },
        {
          "name": "RadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true
        },
        {
          "name": "Rating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true
        },
        {
          "name": "Select",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true
        },
        {
          "name": "SelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true
        },
        {
          "name": "Slider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true
        },
        {
          "name": "Textarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true
        },
        {
          "name": "ToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true
        },
        {
          "name": "ToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true
        },
        {
          "name": "TreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true
        },
        {
          "name": "Button",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true
        },
        {
          "name": "ButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true
        },
        {
          "name": "SpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true
        },
        {
          "name": "SplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true
        },
        {
          "name": "Column",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true
        },
        {
          "name": "Row",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true
        },
        {
          "name": "ColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true
        },
        {
          "name": "DataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true
        },
        {
          "name": "DataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true
        },
        {
          "name": "OrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true
        },
        {
          "name": "OrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true
        },
        {
          "name": "Paginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true
        },
        {
          "name": "PickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true
        },
        {
          "name": "Tree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true
        },
        {
          "name": "TreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true
        },
        {
          "name": "Timeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true
        },
        {
          "name": "VirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true
        },
        {
          "name": "Accordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true
        },
        {
          "name": "AccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true
        },
        {
          "name": "AccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true
        },
        {
          "name": "AccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true
        },
        {
          "name": "AccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true
        },
        {
          "name": "Card",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true
        },
        {
          "name": "DeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true
        },
        {
          "name": "Divider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true
        },
        {
          "name": "Fieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true
        },
        {
          "name": "Panel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true
        },
        {
          "name": "ScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true
        },
        {
          "name": "Splitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true
        },
        {
          "name": "SplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true
        },
        {
          "name": "Stepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true
        },
        {
          "name": "StepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true
        },
        {
          "name": "Step",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true
        },
        {
          "name": "StepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true
        },
        {
          "name": "StepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true
        },
        {
          "name": "StepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true
        },
        {
          "name": "StepperPanel",
          "as": "StepperPanel",
          "from": "primevue/stepperpanel",
          "export": "default",
          "filePath": "primevue/stepperpanel",
          "global": true
        },
        {
          "name": "TabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true
        },
        {
          "name": "Tabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true
        },
        {
          "name": "TabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true
        },
        {
          "name": "Tab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true
        },
        {
          "name": "TabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true
        },
        {
          "name": "TabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true
        },
        {
          "name": "Toolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true
        },
        {
          "name": "ConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true
        },
        {
          "name": "ConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true
        },
        {
          "name": "Dialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true
        },
        {
          "name": "Drawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true
        },
        {
          "name": "DynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true
        },
        {
          "name": "OverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true
        },
        {
          "name": "Popover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true
        },
        {
          "name": "Sidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true
        },
        {
          "name": "FileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true
        },
        {
          "name": "Breadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true
        },
        {
          "name": "ContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true
        },
        {
          "name": "Dock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true
        },
        {
          "name": "Menu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true
        },
        {
          "name": "Menubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true
        },
        {
          "name": "MegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true
        },
        {
          "name": "PanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true
        },
        {
          "name": "Steps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true
        },
        {
          "name": "TabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true
        },
        {
          "name": "TieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true
        },
        {
          "name": "Message",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true
        },
        {
          "name": "InlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true
        },
        {
          "name": "Toast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true
        },
        {
          "name": "Carousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true
        },
        {
          "name": "Galleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true
        },
        {
          "name": "Image",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true
        },
        {
          "name": "Avatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true
        },
        {
          "name": "AvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true
        },
        {
          "name": "Badge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true
        },
        {
          "name": "BlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true
        },
        {
          "name": "Chip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true
        },
        {
          "name": "Inplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true
        },
        {
          "name": "MeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true
        },
        {
          "name": "OverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true
        },
        {
          "name": "ScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true
        },
        {
          "name": "Skeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true
        },
        {
          "name": "ProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true
        },
        {
          "name": "ProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true
        },
        {
          "name": "Tag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true
        },
        {
          "name": "Terminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/user/Documents/GitHub/okzimbabwe/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\user\\Documents\\GitHub\\okzimbabwe","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\user\\Documents\\GitHub\\okzimbabwe\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\user\\Documents\\GitHub\\okzimbabwe\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\user\\Documents\\GitHub\\okzimbabwe\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\user\\Documents\\GitHub\\okzimbabwe\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _qPNxwPR69a = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "C:/Users/user/Documents/GitHub/okzimbabwe";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _0nDrbjBGtq = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const stack = getStack();
    if (stack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename: extractFilenameFromStack(stack),
      // Clean up file names in stack trace
      stack: normalizeFilenames(stack)
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      htmlContext.bodyAppend.unshift(`<script type="application/json" id="__NUXT_LOGS__">${stringify(ctx.logs, { ...devReducers, ...ctx.event.context._payloadReducers })}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /^.*at.*(\/node_modules\/(.*\/)?(nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/.*|core\/runtime\/nitro.*)$\n?/gm;
function getStack() {
  const stack = new Error();
  Error.captureStackTrace(stack);
  return stack.stack?.replace(EXCLUDE_TRACE_RE, "").replace(/^Error.*\n/, "") || "";
}
const FILENAME_RE = /at[^(]*\(([^:)]+)[):]/;
const FILENAME_RE_GLOBAL = /at[^(]*\(([^)]+)\)/g;
function extractFilenameFromStack(stacktrace) {
  return stacktrace.match(FILENAME_RE)?.[1].replace(withTrailingSlash(rootDir), "");
}
function normalizeFilenames(stacktrace) {
  return stacktrace.replace(FILENAME_RE_GLOBAL, (match, filename) => match.replace(filename, filename.replace("file:///", "/").replace(/:.*$/, "")));
}
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var usestyle_cjs = {};

var utils_cjs = {};

Object.defineProperty(utils_cjs, '__esModule', { value: true });

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike  ) { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$3(); }
function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray$3(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$3(arr); }
function _typeof$3$1(o) { "@babel/helpers - typeof"; return _typeof$3$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3$1(o); }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit$1(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var DomHandler = {
  innerWidth: function innerWidth(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  width: function width(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop: function getWindowScrollTop() {
    var doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    var doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth: function getOuterWidth(el, margin) {
    if (el) {
      var width = el.offsetWidth;
      if (margin) {
        var style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight: function getOuterHeight(el, margin) {
    if (el) {
      var height = el.offsetHeight;
      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight: function getClientHeight(el, margin) {
    if (el) {
      var height = el.clientHeight;
      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport: function getViewport() {
    var win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h
    };
  },
  getOffset: function getOffset(el) {
    if (el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: 'auto',
      left: 'auto'
    };
  },
  index: function index(element) {
    if (element) {
      var _this$getParentNode;
      var children = (_this$getParentNode = this.getParentNode(element)) === null || _this$getParentNode === void 0 ? void 0 : _this$getParentNode.childNodes;
      var num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] === element) return num;
        if (children[i].nodeType === 1) num++;
      }
    }
    return -1;
  },
  addMultipleClasses: function addMultipleClasses(element, classNames) {
    var _this = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach(function (cNames) {
        return cNames.split(' ').forEach(function (className) {
          return _this.addClass(element, className);
        });
      });
    }
  },
  removeMultipleClasses: function removeMultipleClasses(element, classNames) {
    var _this2 = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach(function (cNames) {
        return cNames.split(' ').forEach(function (className) {
          return _this2.removeClass(element, className);
        });
      });
    }
  },
  addClass: function addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList) element.classList.add(className);else element.className += ' ' + className;
    }
  },
  removeClass: function removeClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  hasClass: function hasClass(element, className) {
    if (element) {
      if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    return false;
  },
  addStyles: function addStyles(element) {
    var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (element) {
      Object.entries(styles).forEach(function (_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return element.style[key] = value;
      });
    }
  },
  find: function find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle: function findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  createElement: function createElement(type) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (type) {
      var element = document.createElement(type);
      this.setAttributes(element, attributes);
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      element.append.apply(element, children);
      return element;
    }
    return undefined;
  },
  setAttribute: function setAttribute(element) {
    var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var value = arguments.length > 2 ? arguments[2] : undefined;
    if (this.isElement(element) && value !== null && value !== undefined) {
      element.setAttribute(attribute, value);
    }
  },
  setAttributes: function setAttributes(element) {
    var _this3 = this;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.isElement(element)) {
      var computedStyles = function computedStyles(rule, value) {
        var _element$$attrs, _element$$attrs2;
        var styles = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
        return [value].flat().reduce(function (cv, v) {
          if (v !== null && v !== undefined) {
            var type = _typeof$3$1(v);
            if (type === 'string' || type === 'number') {
              cv.push(v);
            } else if (type === 'object') {
              var _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(function (_ref3) {
                var _ref4 = _slicedToArray$1(_ref3, 2),
                  _k = _ref4[0],
                  _v = _ref4[1];
                return rule === 'style' && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), ":").concat(_v) : !!_v ? _k : undefined;
              });
              cv = _cv.length ? cv.concat(_cv.filter(function (c) {
                return !!c;
              })) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(function (_ref5) {
        var _ref6 = _slicedToArray$1(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];
        if (value !== undefined && value !== null) {
          var matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === 'p-bind') {
            _this3.setAttributes(element, value);
          } else {
            value = key === 'class' ? _toConsumableArray$3(new Set(computedStyles('class', value))).join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  },
  getAttribute: function getAttribute(element, name) {
    if (this.isElement(element)) {
      var value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === 'true' || value === 'false') {
        return value === 'true';
      }
      return value;
    }
    return undefined;
  },
  isAttributeEquals: function isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false;
  },
  isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value);
  },
  getHeight: function getHeight(el) {
    if (el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth: function getWidth(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition: function absolutePosition(element, target) {
    var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top,
        left,
        origin = 'top';
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        origin = 'bottom';
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
      }
      if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
      element.style.top = top + 'px';
      element.style.left = left + 'px';
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  relativePosition: function relativePosition(element, target) {
    var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top,
        left,
        origin = 'top';
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        origin = 'bottom';
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
      }
      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        // element fits on screen (align with target)
        left = 0;
      }
      element.style.top = top + 'px';
      element.style.left = left + 'px';
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  nestedPosition: function nestedPosition(element, level) {
    if (element) {
      var parentItem = element.parentElement;
      var elementOffset = this.getOffset(parentItem);
      var viewport = this.getViewport();
      var sublistWidth = element.offsetParent ? element.offsetWidth : this.getHiddenElementOuterWidth(element);
      var itemOuterWidth = this.getOuterWidth(parentItem.children[0]);
      var left;
      if (parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - this.calculateScrollbarWidth()) {
        if (parseInt(elementOffset.left, 10) < sublistWidth) {
          // for too small screens
          if (level % 2 === 1) {
            left = parseInt(elementOffset.left, 10) ? '-' + parseInt(elementOffset.left, 10) + 'px' : '100%';
          } else if (level % 2 === 0) {
            left = viewport.width - sublistWidth - this.calculateScrollbarWidth() + 'px';
          }
        } else {
          left = '-100%';
        }
      } else {
        left = '100%';
      }
      element.style.top = '0px';
      element.style.left = left;
    }
  },
  getParentNode: function getParentNode(element) {
    var parent = element === null || element === void 0 ? void 0 : element.parentNode;
    if (parent && parent instanceof ShadowRoot && parent.host) {
      parent = parent.host;
    }
    return parent;
  },
  getParents: function getParents(element) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var parent = this.getParentNode(element);
    return parent === null ? parents : this.getParents(parent, parents.concat([parent]));
  },
  getScrollableParents: function getScrollableParents(element) {
    var scrollableParents = [];
    if (element) {
      var parents = this.getParents(element);
      var overflowRegex = /(auto|scroll)/;
      var overflowCheck = function overflowCheck(node) {
        try {
          var styleDeclaration = window['getComputedStyle'](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        } catch (err) {
          return false;
        }
      };
      var _iterator = _createForOfIteratorHelper$1(parents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var parent = _step.value;
          var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
          if (scrollSelectors) {
            var selectors = scrollSelectors.split(',');
            var _iterator2 = _createForOfIteratorHelper$1(selectors),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var selector = _step2.value;
                var el = this.findSingle(parent, selector);
                if (el && overflowCheck(el)) {
                  scrollableParents.push(el);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent)) {
            scrollableParents.push(parent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions: function getHiddenElementDimensions(element) {
    if (element) {
      var dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    }
    return 0;
  },
  fadeIn: function fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      var last = +new Date();
      var opacity = 0;
      var tick = function tick() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut: function fadeOut(element, ms) {
    if (element) {
      var opacity = 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;
      var fading = setInterval(function () {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent: function getUserAgent() {
    return navigator.userAgent;
  },
  appendChild: function appendChild(element, target) {
    if (this.isElement(target)) target.appendChild(element);else if (target.el && target.elElement) target.elElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
  },
  isElement: function isElement(obj) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$3$1(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && _typeof$3$1(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  },
  scrollInView: function scrollInView(container, item) {
    var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    var containerRect = container.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    var scroll = container.scrollTop;
    var elementHeight = container.clientHeight;
    var itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection: function clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document['selection'] && document['selection'].empty) {
      try {
        document['selection'].empty();
      } catch (error) {
        //ignore IE bug
      }
    }
  },
  getSelection: function getSelection() {
    if (window.getSelection) return window.getSelection().toString();else if (document.getSelection) return document.getSelection().toString();else if (document['selection']) return document['selection'].createRange().text;
    return null;
  },
  calculateScrollbarWidth: function calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
    var scrollDiv = document.createElement('div');
    this.addStyles(scrollDiv, {
      width: '100px',
      height: '100px',
      overflow: 'scroll',
      position: 'absolute',
      top: '-9999px'
    });
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  calculateBodyScrollbarWidth: function calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  },
  getBrowser: function getBrowser() {
    if (!this.browser) {
      var matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser['version'] = matched.version;
      }
      if (this.browser['chrome']) {
        this.browser['webkit'] = true;
      } else if (this.browser['webkit']) {
        this.browser['safari'] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent: function resolveUserAgent() {
    var ua = navigator.userAgent.toLowerCase();
    var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || '',
      version: match[2] || '0'
    };
  },
  isVisible: function isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod: function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist: function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element));
  },
  isClient: function isClient() {
    return !!("undefined" !== 'undefined'  );
  },
  focus: function focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement: function isFocusableElement(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return this.isElement(element) ? element.matches("button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector)) : false;
  },
  getFocusableElements: function getFocusableElements(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var focusableElements = this.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector));
    var visibleFocusableElements = [];
    var _iterator3 = _createForOfIteratorHelper$1(focusableElements),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var focusableElement = _step3.value;
        if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') visibleFocusableElements.push(focusableElement);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement: function getLastFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
    var focusableElements = this.getFocusableElements(container, selector);
    var index = focusableElements.length > 0 ? focusableElements.findIndex(function (el) {
      return el === element;
    }) : -1;
    var nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  getPreviousElementSibling: function getPreviousElementSibling(element, selector) {
    var previousElement = element.previousElementSibling;
    while (previousElement) {
      if (previousElement.matches(selector)) {
        return previousElement;
      } else {
        previousElement = previousElement.previousElementSibling;
      }
    }
    return null;
  },
  getNextElementSibling: function getNextElementSibling(element, selector) {
    var nextElement = element.nextElementSibling;
    while (nextElement) {
      if (nextElement.matches(selector)) {
        return nextElement;
      } else {
        nextElement = nextElement.nextElementSibling;
      }
    }
    return null;
  },
  isClickable: function isClickable(element) {
    if (element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === 'INPUT' || targetNode === 'TEXTAREA' || targetNode === 'BUTTON' || targetNode === 'A' || parentNode === 'INPUT' || parentNode === 'TEXTAREA' || parentNode === 'BUTTON' || parentNode === 'A' || !!element.closest('.p-button, .p-checkbox, .p-radiobutton') // @todo Add [data-pc-section="button"]
      ;
    }
    return false;
  },
  applyStyle: function applyStyle(element, style) {
    if (typeof style === 'string') {
      element.style.cssText = style;
    } else {
      for (var prop in style) {
        element.style[prop] = style[prop];
      }
    }
  },
  isIOS: function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
  },
  isAndroid: function isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice: function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  hasCSSAnimation: function hasCSSAnimation(element) {
    if (element) {
      var style = getComputedStyle(element);
      var animationDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
      return animationDuration > 0;
    }
    return false;
  },
  hasCSSTransition: function hasCSSTransition(element) {
    if (element) {
      var style = getComputedStyle(element);
      var transitionDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
      return transitionDuration > 0;
    }
    return false;
  },
  exportCSV: function exportCSV(csv, filename) {
    var blob = new Blob([csv], {
      type: 'application/csv;charset=utf-8;'
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + '.csv');
    } else {
      var link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', filename + '.csv');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = 'data:text/csv;charset=utf-8,' + csv;
        window.open(encodeURI(csv));
      }
    }
  },
  blockBodyScroll: function blockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden';
    document.body.style.setProperty('--scrollbar-width', this.calculateBodyScrollbarWidth() + 'px');
    this.addClass(document.body, className);
  },
  unblockBodyScroll: function unblockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden';
    document.body.style.removeProperty('--scrollbar-width');
    this.removeClass(document.body, className);
  }
};

function _typeof$2$1(o) { "@babel/helpers - typeof"; return _typeof$2$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2$1(o); }
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$1$1(descriptor.key), descriptor); } }
function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$1$1(t) { var i = _toPrimitive$1$1(t, "string"); return "symbol" == _typeof$2$1(i) ? i : String(i); }
function _toPrimitive$1$1(t, r) { if ("object" != _typeof$2$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r ); if ("object" != _typeof$2$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return (String )(t); }
var ConnectedOverlayScrollHandler = /*#__PURE__*/function () {
  function ConnectedOverlayScrollHandler(element) {
    var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    _classCallCheck$1(this, ConnectedOverlayScrollHandler);
    this.element = element;
    this.listener = listener;
  }
  _createClass$1(ConnectedOverlayScrollHandler, [{
    key: "bindScrollListener",
    value: function bindScrollListener() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element);
      for (var i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].addEventListener('scroll', this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollableParents) {
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].removeEventListener('scroll', this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);
  return ConnectedOverlayScrollHandler;
}();

function primebus() {
  var allHandlers = new Map();
  return {
    on: function on(type, handler) {
      var handlers = allHandlers.get(type);
      if (!handlers) handlers = [handler];else handlers.push(handler);
      allHandlers.set(type, handlers);
    },
    off: function off(type, handler) {
      var handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type, evt) {
      var handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(evt);
        });
      }
    }
  };
}

function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2(); }
function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit$2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2(); }
function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$2(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike  ) { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof$1$1(o) { "@babel/helpers - typeof"; return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1$1(o); }
var ObjectUtils = {
  equals: function equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
  },
  deepEquals: function deepEquals(a, b) {
    if (a === b) return true;
    if (a && b && _typeof$1$1(a) == 'object' && _typeof$1$1(b) == 'object') {
      var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i,
        length,
        key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData: function resolveFieldData(data, field) {
    if (!data || !field) {
      // short circuit if there is nothing to resolve
      return null;
    }
    try {
      var value = data[field];
      if (this.isNotEmpty(value)) return value;
    } catch (_unused) {
      // Performance optimization: https://github.com/primefaces/primereact/issues/4797
      // do nothing and continue to other methods to resolve field data
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf('.') === -1) {
        return data[field];
      } else {
        var fields = field.split('.');
        var _value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (_value == null) {
            return null;
          }
          _value = _value[fields[i]];
        }
        return _value;
      }
    }
    return null;
  },
  getItemValue: function getItemValue(obj) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
  },
  filter: function filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      var _iterator = _createForOfIteratorHelper(value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var _iterator2 = _createForOfIteratorHelper(fields),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var field = _step2.value;
              if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return filteredItems;
  },
  reorderArray: function reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList: function findIndexInList(value, list) {
    var index = -1;
    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains: function contains(value, list) {
    if (value != null && list && list.length) {
      var _iterator3 = _createForOfIteratorHelper(list),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var val = _step3.value;
          if (this.equals(value, val)) return true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return false;
  },
  insertIntoOrderedArray: function insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      var injected = false;
      for (var i = 0; i < arr.length; i++) {
        var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents: function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
    }
    return str;
  },
  getVNodeProp: function getVNodeProp(vnode, prop) {
    if (vnode) {
      var props = vnode.props;
      if (props) {
        var kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;
        return vnode.type["extends"].props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
      }
    }
    return null;
  },
  toFlatCase: function toFlatCase(str) {
    // convert snake, kebab, camel and pascal cases to flat case
    return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
  },
  toKebabCase: function toKebabCase(str) {
    // convert snake, camel and pascal cases to kebab case
    return this.isString(str) ? str.replace(/(_)/g, '-').replace(/[A-Z]/g, function (c, i) {
      return i === 0 ? c : '-' + c.toLowerCase();
    }).toLowerCase() : str;
  },
  toCapitalCase: function toCapitalCase(str) {
    return this.isString(str, {
      empty: false
    }) ? str[0].toUpperCase() + str.slice(1) : str;
  },
  isEmpty: function isEmpty(value) {
    return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$1$1(value) === 'object' && Object.keys(value).length === 0;
  },
  isNotEmpty: function isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isFunction: function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
  },
  isObject: function isObject(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  },
  isDate: function isDate(value) {
    return value instanceof Date && value.constructor === Date;
  },
  isArray: function isArray(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return Array.isArray(value) && (empty || value.length !== 0);
  },
  isString: function isString(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return typeof value === 'string' && (empty || value !== '');
  },
  isPrintableCharacter: function isPrintableCharacter() {
    var _char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function findLast(arr, callback) {
    var item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch (_unused2) {
        item = _toConsumableArray$2(arr).reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function findLastIndex(arr, callback) {
    var index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch (_unused3) {
        index = arr.lastIndexOf(_toConsumableArray$2(arr).reverse().find(callback));
      }
    }
    return index;
  },
  sort: function sort(value1, value2) {
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var comparator = arguments.length > 3 ? arguments[3] : undefined;
    var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var result = this.compare(value1, value2, comparator, order);
    var finalSortOrder = order;

    // nullSortOrder == 1 means Excel like sort nulls at bottom
    if (this.isEmpty(value1) || this.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  },
  compare: function compare(value1, value2, comparator) {
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var result = -1;
    var emptyValue1 = this.isEmpty(value1);
    var emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  },
  localeComparator: function localeComparator() {
    //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
    return new Intl.Collator(undefined, {
      numeric: true
    }).compare;
  },
  nestedKeys: function nestedKeys() {
    var _this = this;
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return Object.entries(obj).reduce(function (o, _ref) {
      var _ref2 = _slicedToArray$2(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      var currentKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
      _this.isObject(value) ? o = o.concat(_this.nestedKeys(value, currentKey)) : o.push(currentKey);
      return o;
    }, []);
  },
  stringify: function stringify(value) {
    var _this2 = this;
    var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var currentIndent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var currentIndentStr = ' '.repeat(currentIndent);
    var nextIndentStr = ' '.repeat(currentIndent + indent);
    if (this.isArray(value)) {
      return '[' + value.map(function (v) {
        return _this2.stringify(v, indent, currentIndent + indent);
      }).join(', ') + ']';
    } else if (this.isDate(value)) {
      return value.toISOString();
    } else if (this.isFunction(value)) {
      return value.toString();
    } else if (this.isObject(value)) {
      return '{\n' + Object.entries(value).map(function (_ref3) {
        var _ref4 = _slicedToArray$2(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];
        return "".concat(nextIndentStr).concat(k, ": ").concat(_this2.stringify(v, indent, currentIndent + indent));
      }).join(',\n') + "\n".concat(currentIndentStr) + '}';
    } else {
      return JSON.stringify(value);
    }
  }
};

function _typeof$4(o) { "@babel/helpers - typeof"; return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$4(o); }
function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }
function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$4(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty$4(obj, key, value) { key = _toPropertyKey$4(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$4(t) { var i = _toPrimitive$4(t, "string"); return "symbol" == _typeof$4(i) ? i : String(i); }
function _toPrimitive$4(t, r) { if ("object" != _typeof$4(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$4(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = /*#__PURE__*/function () {
  function _default(_ref) {
    var init = _ref.init,
      type = _ref.type;
    _classCallCheck(this, _default);
    _defineProperty$4(this, "helpers", void 0);
    _defineProperty$4(this, "type", void 0);
    this.helpers = new Set(init);
    this.type = type;
  }
  _createClass(_default, [{
    key: "add",
    value: function add(instance) {
      this.helpers.add(instance);
    }
  }, {
    key: "update",
    value: function update() {
      // @todo
    }
  }, {
    key: "delete",
    value: function _delete(instance) {
      this.helpers["delete"](instance);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.helpers.clear();
    }
  }, {
    key: "get",
    value: function get(parentInstance, slots) {
      var children = this._get(parentInstance, slots);
      var computed = children ? this._recursive(_toConsumableArray$1(this.helpers), children) : null;
      return ObjectUtils.isNotEmpty(computed) ? computed : null;
    }
  }, {
    key: "_isMatched",
    value: function _isMatched(instance, key) {
      var _parent$vnode;
      var parent = instance === null || instance === void 0 ? void 0 : instance.parent;
      return (parent === null || parent === void 0 || (_parent$vnode = parent.vnode) === null || _parent$vnode === void 0 ? void 0 : _parent$vnode.key) === key || parent && this._isMatched(parent, key) || false;
    }
  }, {
    key: "_get",
    value: function _get(parentInstance, slots) {
      var _ref2, _ref2$default;
      return ((_ref2 = slots || (parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$slots)) === null || _ref2 === void 0 || (_ref2$default = _ref2["default"]) === null || _ref2$default === void 0 ? void 0 : _ref2$default.call(_ref2)) || null;
    }
  }, {
    key: "_recursive",
    value: function _recursive() {
      var _this = this;
      var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var components = [];
      children.forEach(function (child) {
        if (child.children instanceof Array) {
          components = components.concat(_this._recursive(components, child.children));
        } else if (child.type.name === _this.type) {
          components.push(child);
        } else if (ObjectUtils.isNotEmpty(child.key)) {
          components = components.concat(helpers.filter(function (c) {
            return _this._isMatched(c, child.key);
          }).map(function (c) {
            return c.vnode;
          }));
        }
      });
      return components;
    }
  }]);
  return _default;
}();

var lastId = 0;
function UniqueComponentId () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pv_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$4(arr); }
function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function handler() {
  var zIndexes = [];
  var generateZIndex = function generateZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999;
    var lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key: key,
      value: newZIndex
    });
    return newZIndex;
  };
  var revertZIndex = function revertZIndex(zIndex) {
    zIndexes = zIndexes.filter(function (obj) {
      return obj.value !== zIndex;
    });
  };
  var getCurrentZIndex = function getCurrentZIndex(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };
  var getLastZIndex = function getLastZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return _toConsumableArray(zIndexes).reverse().find(function (obj) {
      return true ;
    }) || {
      key: key,
      value: baseZIndex
    };
  };
  var getZIndex = function getZIndex(el) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: function set(key, el, baseZIndex) {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
      }
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: function getCurrent(key) {
      return getCurrentZIndex(key, true);
    }
  };
}
var ZIndexUtils = handler();

utils_cjs.ConnectedOverlayScrollHandler = ConnectedOverlayScrollHandler;
utils_cjs.DomHandler = DomHandler;
utils_cjs.EventBus = primebus;
utils_cjs.HelperSet = _default;
utils_cjs.ObjectUtils = ObjectUtils;
utils_cjs.UniqueComponentId = UniqueComponentId;
utils_cjs.ZIndexUtils = ZIndexUtils;

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue$1);

Object.defineProperty(usestyle_cjs, '__esModule', { value: true });

var utils = utils_cjs;
var vue = require$$1;

function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$3(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$3(obj, key, value) { key = _toPropertyKey$3(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$3(i) ? i : String(i); }
function _toPrimitive$3(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (vue.getCurrentInstance()) vue.onMounted(fn);else if (sync) fn();else vue.nextTick(fn);
}
var _id = 0;
function useStyle(css) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isLoaded = vue.ref(false);
  var cssRef = vue.ref(css);
  var styleRef = vue.ref(null);
  var defaultDocument = utils.DomHandler.isClient() ? window.document : undefined;
  var _options$document = options.document,
    document = _options$document === void 0 ? defaultDocument : _options$document,
    _options$immediate = options.immediate,
    immediate = _options$immediate === void 0 ? true : _options$immediate,
    _options$manual = options.manual,
    manual = _options$manual === void 0 ? false : _options$manual,
    _options$name = options.name,
    name = _options$name === void 0 ? "style_".concat(++_id) : _options$name,
    _options$id = options.id,
    id = _options$id === void 0 ? undefined : _options$id,
    _options$media = options.media,
    media = _options$media === void 0 ? undefined : _options$media,
    _options$nonce = options.nonce,
    nonce = _options$nonce === void 0 ? undefined : _options$nonce,
    _options$props = options.props,
    props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop() {};

  /* @todo: Improve _options params */
  var load = function load(_css) {
    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread$1(_objectSpread$1({}, props), _props);
    var _name = _styleProps.name || name,
      _id = _styleProps.id || id,
      _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector("style[data-primevue-style-id=\"".concat(_name, "\"]")) || document.getElementById(_id) || document.createElement('style');
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css;
      utils.DomHandler.setAttributes(styleRef.value, {
        type: 'text/css',
        id: _id,
        media: media,
        nonce: _nonce
      });
      document.head.appendChild(styleRef.value);
      utils.DomHandler.setAttribute(styleRef.value, 'data-primevue-style-id', name);
      utils.DomHandler.setAttributes(styleRef.value, _styleProps);
    }
    if (isLoaded.value) return;
    stop = vue.watch(cssRef, function (value) {
      styleRef.value.textContent = value;
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload() {
    if (!document || !isLoaded.value) return;
    stop();
    utils.DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
  };
  if (immediate && !manual) tryOnMounted(load);

  /*if (!manual)
    tryOnScopeDispose(unload)*/

  return {
    id: id,
    name: name,
    css: cssRef,
    unload: unload,
    load: load,
    isLoaded: vue.readonly(isLoaded)
  };
}

usestyle_cjs.useStyle = useStyle;

var usestyle = usestyle_cjs;

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty$2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$2(obj, key, value) { key = _toPropertyKey$2(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : String(i); }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var css = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var classes$g = {};
var inlineStyles$3 = {};
var BaseStyle$g = {
  name: 'base',
  css: css,
  classes: classes$g,
  inlineStyles: inlineStyles$3,
  loadStyle: function loadStyle() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.css ? usestyle.useStyle(this.css, _objectSpread({
      name: this.name
    }, options)) : {};
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.css) {
      var _props = Object.entries(props).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        return acc.push("".concat(k, "=\"").concat(v, "\"")) && acc;
      }, []).join(' ');
      return "<style type=\"text/css\" data-primevue-style-id=\"".concat(this.name, "\" ").concat(_props, ">").concat(this.css).concat(extendedCSS, "</style>");
    }
    return '';
  },
  extend: function extend(style) {
    return _objectSpread(_objectSpread({}, this), {}, {
      css: undefined
    }, style);
  }
};

var basestyle_cjs = BaseStyle$g;

var BaseStyle$f = basestyle_cjs;

function _interopDefaultLegacy$f (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$f = /*#__PURE__*/_interopDefaultLegacy$f(BaseStyle$f);

var classes$f = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-radiobutton p-component', {
      'p-highlight': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle__default$f["default"].extend({
  name: 'radiobutton',
  classes: classes$f
});

var radiobuttonstyle_cjs = RadioButtonStyle;

const RadioButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(radiobuttonstyle_cjs);

var BaseStyle$e = basestyle_cjs;

function _interopDefaultLegacy$e (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$e = /*#__PURE__*/_interopDefaultLegacy$e(BaseStyle$e);

var classes$e = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtextarea p-inputtext p-component', {
      'p-filled': instance.filled,
      'p-inputtextarea-resizable ': props.autoResize,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  }
};
var TextareaStyle = BaseStyle__default$e["default"].extend({
  name: 'textarea',
  classes: classes$e
});

var textareastyle_cjs = TextareaStyle;

const TextareaStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(textareastyle_cjs);

var BaseStyle$d = basestyle_cjs;

function _interopDefaultLegacy$d (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$d = /*#__PURE__*/_interopDefaultLegacy$d(BaseStyle$d);

var classes$d = {
  root: 'p-confirm-dialog',
  icon: 'p-confirm-dialog-icon',
  message: 'p-confirm-dialog-message',
  rejectButton: function rejectButton(_ref) {
    var instance = _ref.instance;
    return ['p-confirm-dialog-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'p-button-text' : null];
  },
  acceptButton: 'p-confirm-dialog-accept'
};
var ConfirmDialogStyle = BaseStyle__default$d["default"].extend({
  name: 'confirmdialog',
  classes: classes$d
});

var confirmdialogstyle_cjs = ConfirmDialogStyle;

const ConfirmDialogStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(confirmdialogstyle_cjs);

var BaseStyle$c = basestyle_cjs;

function _interopDefaultLegacy$c (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$c = /*#__PURE__*/_interopDefaultLegacy$c(BaseStyle$c);

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : String(i); }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Position
var inlineStyles$2 = {
  root: function root(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes$c = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-toast p-component p-toast-' + props.position, {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  container: function container(_ref3) {
    var props = _ref3.props;
    return ['p-toast-message', {
      'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  content: 'p-toast-message-content',
  icon: function icon(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message-icon', _defineProperty$1(_defineProperty$1(_defineProperty$1(_defineProperty$1({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success')];
  },
  text: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-icon-close p-link',
  closeIcon: 'p-toast-icon-close-icon'
};
var ToastStyle = BaseStyle__default$c["default"].extend({
  name: 'toast',
  classes: classes$c,
  inlineStyles: inlineStyles$2
});

var toaststyle_cjs = ToastStyle;

const ToastStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(toaststyle_cjs);

var BaseStyle$b = basestyle_cjs;

function _interopDefaultLegacy$b (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$b = /*#__PURE__*/_interopDefaultLegacy$b(BaseStyle$b);

var classes$b = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.filled,
      'p-inputtext-sm': props.size === 'small',
      'p-inputtext-lg': props.size === 'large',
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  }
};
var InputTextStyle = BaseStyle__default$b["default"].extend({
  name: 'inputtext',
  classes: classes$b
});

var inputtextstyle_cjs = InputTextStyle;

const InputTextStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputtextstyle_cjs);

var BaseStyle$a = basestyle_cjs;

function _interopDefaultLegacy$a (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$a = /*#__PURE__*/_interopDefaultLegacy$a(BaseStyle$a);

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$a = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-button p-component', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-disabled': instance.$attrs.disabled || instance.$attrs.disabled === '' || props.loading,
      'p-button-loading': props.loading,
      'p-button-loading-label-only': props.loading && !instance.hasIcon && props.label,
      'p-button-link': props.link
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text), 'p-button-outlined', props.outlined), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain)];
  },
  loadingIcon: 'p-button-loading-icon pi-spin',
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-button-icon', {
      'p-button-icon-left': props.iconPos === 'left' && props.label,
      'p-button-icon-right': props.iconPos === 'right' && props.label,
      'p-button-icon-top': props.iconPos === 'top' && props.label,
      'p-button-icon-bottom': props.iconPos === 'bottom' && props.label
    }];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle__default$a["default"].extend({
  name: 'button',
  classes: classes$a
});

var buttonstyle_cjs = ButtonStyle;

const ButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(buttonstyle_cjs);

var BaseStyle$9 = basestyle_cjs;

function _interopDefaultLegacy$9 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$9 = /*#__PURE__*/_interopDefaultLegacy$9(BaseStyle$9);

var classes$9 = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle__default$9["default"].extend({
  name: 'inputgroup',
  classes: classes$9
});

var inputgroupstyle_cjs = InputGroupStyle;

const InputGroupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputgroupstyle_cjs);

var BaseStyle$8 = basestyle_cjs;

function _interopDefaultLegacy$8 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$8 = /*#__PURE__*/_interopDefaultLegacy$8(BaseStyle$8);

var inlineStyles$1 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none'
    };
  }
};
var classes$8 = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  start: 'p-tieredmenu-start',
  menu: 'p-tieredmenu-root-list',
  menuitem: function menuitem(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  text: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle__default$8["default"].extend({
  name: 'tieredmenu',
  classes: classes$8,
  inlineStyles: inlineStyles$1
});

var tieredmenustyle_cjs = TieredMenuStyle;

const TieredMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tieredmenustyle_cjs);

var BaseStyle$7 = basestyle_cjs;

function _interopDefaultLegacy$7 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$7 = /*#__PURE__*/_interopDefaultLegacy$7(BaseStyle$7);

var inlineStyles = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none'
    };
  }
};
var classes$7 = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  menubutton: 'p-megamenu-button',
  menu: 'p-megamenu-root-list',
  submenuHeader: function submenuHeader(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-header p-submenu-header', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  menuitem: function menuitem(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  panel: 'p-megamenu-panel',
  grid: 'p-megamenu-grid',
  column: function column(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-submenu-list p-megamenu-submenu',
  submenuLabel: 'p-menuitem-text',
  separator: 'p-menuitem-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle__default$7["default"].extend({
  name: 'megamenu',
  classes: classes$7,
  inlineStyles: inlineStyles
});

var megamenustyle_cjs = MegaMenuStyle;

const MegaMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(megamenustyle_cjs);

var BaseStyle$6 = basestyle_cjs;

function _interopDefaultLegacy$6 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$6 = /*#__PURE__*/_interopDefaultLegacy$6(BaseStyle$6);

var classes$6 = {
  root: 'p-badge p-component'
};
var BadgeDirectiveStyle = BaseStyle__default$6["default"].extend({
  name: 'badge',
  classes: classes$6
});

var badgedirectivestyle_cjs = BadgeDirectiveStyle;

const BadgeDirectiveStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(badgedirectivestyle_cjs);

var BaseStyle$5 = basestyle_cjs;

function _interopDefaultLegacy$5 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$5 = /*#__PURE__*/_interopDefaultLegacy$5(BaseStyle$5);

var classes$5 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel p-component', {
      'p-carousel-vertical': instance.isVertical(),
      'p-carousel-horizontal': !instance.isVertical()
    }];
  },
  header: 'p-carousel-header',
  content: 'p-carousel-content',
  container: 'p-carousel-container',
  previousButton: function previousButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-carousel-prev p-link', {
      'p-disabled': instance.backwardIsDisabled
    }];
  },
  previousButtonIcon: 'p-carousel-next-icon',
  itemsContent: 'p-carousel-items-content',
  itemsContainer: 'p-carousel-items-container',
  itemCloned: function itemCloned(_ref3) {
    var index = _ref3.index,
      value = _ref3.value,
      totalShiftedItems = _ref3.totalShiftedItems,
      d_numVisible = _ref3.d_numVisible;
    return ['p-carousel-item p-carousel-item-cloned', {
      'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
      'p-carousel-item-start': index === 0,
      'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-carousel-item', {
      'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
      'p-carousel-item-start': instance.firstIndex() === index,
      'p-carousel-item-end': instance.lastIndex() === index
    }];
  },
  nextButton: function nextButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-carousel-next p-link', {
      'p-disabled': instance.forwardIsDisabled
    }];
  },
  nextButtonIcon: 'p-carousel-prev-icon',
  indicators: 'p-carousel-indicators p-reset',
  indicator: function indicator(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index;
    return ['p-carousel-indicator', {
      'p-highlight': instance.d_page === index
    }];
  },
  indicatorButton: 'p-link',
  footer: 'p-carousel-footer'
};
var CarouselStyle = BaseStyle__default$5["default"].extend({
  name: 'carousel',
  classes: classes$5
});

var carouselstyle_cjs = CarouselStyle;

const CarouselStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(carouselstyle_cjs);

var BaseStyle$4 = basestyle_cjs;

function _interopDefaultLegacy$4 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$4 = /*#__PURE__*/_interopDefaultLegacy$4(BaseStyle$4);

var classes$4 = {
  root: 'p-float-label'
};
var FloatLabelStyle = BaseStyle__default$4["default"].extend({
  name: 'floatlabel',
  classes: classes$4
});

var floatlabelstyle_cjs = FloatLabelStyle;

const FloatLabelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(floatlabelstyle_cjs);

var BaseStyle$3 = basestyle_cjs;

function _interopDefaultLegacy$3 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$3 = /*#__PURE__*/_interopDefaultLegacy$3(BaseStyle$3);

var classes$3 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-dropdown p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
      'p-dropdown-clearable': props.showClear,
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.hasSelectedOption,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-overlay-open': state.overlayVisible
    }];
  },
  input: function input(_ref2) {
    var _instance$label;
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-dropdown-label p-inputtext', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-dropdown-clear-icon',
  trigger: 'p-dropdown-trigger',
  loadingicon: 'p-dropdown-trigger-icon',
  dropdownIcon: 'p-dropdown-trigger-icon',
  panel: function panel(_ref3) {
    _ref3.props;
      var instance = _ref3.instance;
    return ['p-dropdown-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  header: 'p-dropdown-header',
  filterContainer: 'p-dropdown-filter-container',
  filterInput: function filterInput(_ref4) {
    var props = _ref4.props,
      instance = _ref4.instance;
    return ['p-dropdown-filter p-inputtext p-component', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  filterIcon: 'p-dropdown-filter-icon',
  wrapper: 'p-dropdown-items-wrapper',
  list: 'p-dropdown-items',
  itemGroup: 'p-dropdown-item-group',
  itemGroupLabel: 'p-dropdown-item-group-label',
  item: function item(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      option = _ref5.option,
      focusedOption = _ref5.focusedOption;
    return ['p-dropdown-item', {
      'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  itemLabel: 'p-dropdown-item-label',
  checkIcon: 'p-dropdown-check-icon',
  blankIcon: 'p-dropdown-blank-icon',
  emptyMessage: 'p-dropdown-empty-message'
};
var DropdownStyle = BaseStyle__default$3["default"].extend({
  name: 'dropdown',
  classes: classes$3
});

var dropdownstyle_cjs = DropdownStyle;

const DropdownStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dropdownstyle_cjs);

var BaseStyle$2 = basestyle_cjs;

function _interopDefaultLegacy$2 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$2 = /*#__PURE__*/_interopDefaultLegacy$2(BaseStyle$2);

var classes$2 = {
  root: 'p-inputgroup-addon'
};
var InputGroupAddonStyle = BaseStyle__default$2["default"].extend({
  name: 'inputgroupaddon',
  classes: classes$2
});

var inputgroupaddonstyle_cjs = InputGroupAddonStyle;

const InputGroupAddonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputgroupaddonstyle_cjs);

var BaseStyle$1 = basestyle_cjs;

function _interopDefaultLegacy$1 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1 = /*#__PURE__*/_interopDefaultLegacy$1(BaseStyle$1);

var classes$1 = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-inline-message p-component p-inline-message-' + props.severity, {
      'p-inline-message-icon-only': !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ['p-inline-message-icon', props.icon];
  },
  text: 'p-inline-message-text'
};
var InlineMessageStyle = BaseStyle__default$1["default"].extend({
  name: 'inlinemessage',
  classes: classes$1
});

var inlinemessagestyle_cjs = InlineMessageStyle;

const InlineMessageStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inlinemessagestyle_cjs);

var BaseStyle = basestyle_cjs;

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default = /*#__PURE__*/_interopDefaultLegacy(BaseStyle);

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-overlaypanel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  content: 'p-overlaypanel-content',
  closeButton: 'p-overlaypanel-close p-link',
  closeIcon: 'p-overlaypanel-close-icon'
};
var OverlayPanelStyle = BaseStyle__default["default"].extend({
  name: 'overlaypanel',
  classes: classes
});

var overlaypanelstyle_cjs = OverlayPanelStyle;

const OverlayPanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(overlaypanelstyle_cjs);

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.primevue ?? {};
const { options = {} } = config;

const stylesToTop = [].join('');
const styleProps = {
  
};
const styles$2 = [
  ,
  BaseStyle$h && BaseStyle$h.getStyleSheet ? BaseStyle$h.getStyleSheet(undefined, styleProps) : '',RadioButtonStyle$1 && RadioButtonStyle$1.getStyleSheet ? RadioButtonStyle$1.getStyleSheet(undefined, styleProps) : '',TextareaStyle$1 && TextareaStyle$1.getStyleSheet ? TextareaStyle$1.getStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle$1 && ConfirmDialogStyle$1.getStyleSheet ? ConfirmDialogStyle$1.getStyleSheet(undefined, styleProps) : '',ToastStyle$1 && ToastStyle$1.getStyleSheet ? ToastStyle$1.getStyleSheet(undefined, styleProps) : '',InputTextStyle$1 && InputTextStyle$1.getStyleSheet ? InputTextStyle$1.getStyleSheet(undefined, styleProps) : '',ButtonStyle$1 && ButtonStyle$1.getStyleSheet ? ButtonStyle$1.getStyleSheet(undefined, styleProps) : '',InputGroupStyle$1 && InputGroupStyle$1.getStyleSheet ? InputGroupStyle$1.getStyleSheet(undefined, styleProps) : '',TieredMenuStyle$1 && TieredMenuStyle$1.getStyleSheet ? TieredMenuStyle$1.getStyleSheet(undefined, styleProps) : '',MegaMenuStyle$1 && MegaMenuStyle$1.getStyleSheet ? MegaMenuStyle$1.getStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle$1 && BadgeDirectiveStyle$1.getStyleSheet ? BadgeDirectiveStyle$1.getStyleSheet(undefined, styleProps) : '',CarouselStyle$1 && CarouselStyle$1.getStyleSheet ? CarouselStyle$1.getStyleSheet(undefined, styleProps) : '',FloatLabelStyle$1 && FloatLabelStyle$1.getStyleSheet ? FloatLabelStyle$1.getStyleSheet(undefined, styleProps) : '',DropdownStyle$1 && DropdownStyle$1.getStyleSheet ? DropdownStyle$1.getStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle$1 && InputGroupAddonStyle$1.getStyleSheet ? InputGroupAddonStyle$1.getStyleSheet(undefined, styleProps) : '',InlineMessageStyle$1 && InlineMessageStyle$1.getStyleSheet ? InlineMessageStyle$1.getStyleSheet(undefined, styleProps) : '',OverlayPanelStyle$1 && OverlayPanelStyle$1.getStyleSheet ? OverlayPanelStyle$1.getStyleSheet(undefined, styleProps) : ''
].join('');

Theme.setTheme(options?.theme);

const themes = [
    BaseStyle$h && BaseStyle$h.getCommonThemeStyleSheet ? BaseStyle$h.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle$h && BaseStyle$h.getThemeStyleSheet ? BaseStyle$h.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonStyle$1 && RadioButtonStyle$1.getThemeStyleSheet ? RadioButtonStyle$1.getThemeStyleSheet(undefined, styleProps) : '',TextareaStyle$1 && TextareaStyle$1.getThemeStyleSheet ? TextareaStyle$1.getThemeStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle$1 && ConfirmDialogStyle$1.getThemeStyleSheet ? ConfirmDialogStyle$1.getThemeStyleSheet(undefined, styleProps) : '',ToastStyle$1 && ToastStyle$1.getThemeStyleSheet ? ToastStyle$1.getThemeStyleSheet(undefined, styleProps) : '',InputTextStyle$1 && InputTextStyle$1.getThemeStyleSheet ? InputTextStyle$1.getThemeStyleSheet(undefined, styleProps) : '',ButtonStyle$1 && ButtonStyle$1.getThemeStyleSheet ? ButtonStyle$1.getThemeStyleSheet(undefined, styleProps) : '',InputGroupStyle$1 && InputGroupStyle$1.getThemeStyleSheet ? InputGroupStyle$1.getThemeStyleSheet(undefined, styleProps) : '',TieredMenuStyle$1 && TieredMenuStyle$1.getThemeStyleSheet ? TieredMenuStyle$1.getThemeStyleSheet(undefined, styleProps) : '',MegaMenuStyle$1 && MegaMenuStyle$1.getThemeStyleSheet ? MegaMenuStyle$1.getThemeStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle$1 && BadgeDirectiveStyle$1.getThemeStyleSheet ? BadgeDirectiveStyle$1.getThemeStyleSheet(undefined, styleProps) : '',CarouselStyle$1 && CarouselStyle$1.getThemeStyleSheet ? CarouselStyle$1.getThemeStyleSheet(undefined, styleProps) : '',FloatLabelStyle$1 && FloatLabelStyle$1.getThemeStyleSheet ? FloatLabelStyle$1.getThemeStyleSheet(undefined, styleProps) : '',DropdownStyle$1 && DropdownStyle$1.getThemeStyleSheet ? DropdownStyle$1.getThemeStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle$1 && InputGroupAddonStyle$1.getThemeStyleSheet ? InputGroupAddonStyle$1.getThemeStyleSheet(undefined, styleProps) : '',InlineMessageStyle$1 && InlineMessageStyle$1.getThemeStyleSheet ? InlineMessageStyle$1.getThemeStyleSheet(undefined, styleProps) : '',OverlayPanelStyle$1 && OverlayPanelStyle$1.getThemeStyleSheet ? OverlayPanelStyle$1.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _LbfdogAdQD = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles$2);
    html.head.push(themes);
  });
});

const plugins = [
  _qPNxwPR69a,
_0nDrbjBGtq,
_LbfdogAdQD
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_N5aQYl = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_N5aQYl, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_N5aQYl, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return "<!DOCTYPE html><html data-critters-container><head><title>" + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}h1,p,pre{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">` + messages.statusCode + '</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' + messages.description + '</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {};

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/Users/user/Documents/GitHub/okzimbabwe/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://C:/Users/user/Documents/GitHub/okzimbabwe/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      serverRendered: false
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    modules: /* @__PURE__ */ new Set(),
    set _registeredComponents(value) {
      this.modules = value;
    },
    get _registeredComponents() {
      return this.modules;
    },
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {
      link: [],
      style: []
    };
    for (const tag of await head.resolveTags()) {
      if (tag.tag === "link") {
        islandHead.link.push({ key: "island-link-" + hash(tag.props), ...tag.props });
      } else if (tag.tag === "style" && tag.innerHTML) {
        islandHead.style.push({ key: "island-style-" + hash(tag.innerHTML), innerHTML: tag.innerHTML });
      }
    }
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "id": opts.id,
    "innerHTML": contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid] || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
