import {
  Button_default,
  CardContent_default,
  Card_default,
  Container_default,
  Grid_default,
  TextField_default,
  Typography_default,
  createSvgIcon,
  require_auth
} from "/build/_shared/chunk-Y2W5BDSO.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-WOT5WXSC.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-47EMXRLI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../services/_db.server
var require_db = __commonJS({
  "empty-module:../services/_db.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../services/weather.server
var require_weather = __commonJS({
  "empty-module:../services/weather.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_protected.Dashboard.tsx
var import_react = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/utils/createSvgIcon.js
"use client";

// node_modules/@mui/icons-material/esm/Delete.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
var Delete_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete");

// app/routes/_protected.Dashboard.tsx
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_weather = __toESM(require_weather(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_protected.Dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_protected.Dashboard.tsx"
  );
  import.meta.hot.lastModified = "1734512522955.9175";
}
function Dashboard() {
  _s();
  const {
    user,
    cities,
    weatherData
  } = useLoaderData();
  const [newCity, setNewCity] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h4", sx: {
      my: 2
    }, children: [
      "Welcome to the Weather App, ",
      user.username,
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/_protected.Dashboard.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { label: "Add City", value: newCity, onChange: (e) => setNewCity(e.target.value), variant: "outlined", sx: {
        mr: 2
      } }, void 0, false, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", variant: "contained", name: "_action", value: "add", disabled: cities.length >= 5, children: "Add City" }, void 0, false, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_protected.Dashboard.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { container: true, spacing: 3, sx: {
      mt: 2
    }, children: weatherData.map((weather, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h6", children: weather.location.name }, void 0, false, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 112,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: weather.current.condition.text }, void 0, false, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 113,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: weather.current.condition.icon, alt: "Weather Icon" }, void 0, false, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 114,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: [
        "Temp: ",
        weather.current.temp_c,
        "\xB0C"
      ] }, void 0, true, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 115,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: [
        "Humidity: ",
        weather.current.humidity,
        "%"
      ] }, void 0, true, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 116,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { children: [
        "Precipitation: ",
        weather.current.precip_mm,
        "mm"
      ] }, void 0, true, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 117,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "cityName", value: weather.location.name }, void 0, false, {
          fileName: "app/routes/_protected.Dashboard.tsx",
          lineNumber: 119,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", name: "_action", value: "delete", color: "error", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Delete_default, {}, void 0, false, {
          fileName: "app/routes/_protected.Dashboard.tsx",
          lineNumber: 120,
          columnNumber: 114
        }, this), children: "Remove" }, void 0, false, {
          fileName: "app/routes/_protected.Dashboard.tsx",
          lineNumber: 120,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_protected.Dashboard.tsx",
        lineNumber: 118,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_protected.Dashboard.tsx",
      lineNumber: 111,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/_protected.Dashboard.tsx",
      lineNumber: 110,
      columnNumber: 25
    }, this) }, cities[index].id, false, {
      fileName: "app/routes/_protected.Dashboard.tsx",
      lineNumber: 109,
      columnNumber: 54
    }, this)) }, void 0, false, {
      fileName: "app/routes/_protected.Dashboard.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_protected.Dashboard.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "RANhVg1je1LeihVrQISR7lA15as=", false, function() {
  return [useLoaderData];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/_protected.Dashboard-ORPUROUK.js.map
