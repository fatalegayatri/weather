import {
  Box_default,
  Button_default,
  Container_default,
  TextField_default,
  Typography_default,
  require_auth
} from "/build/_shared/chunk-Y2W5BDSO.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-WOT5WXSC.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-47EMXRLI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.login.tsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_auth.login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_auth.login.tsx"
  );
  import.meta.hot.lastModified = "1734512536152.3853";
}
function LoginPage() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { component: "h1", variant: "h5", children: "Sign in" }, void 0, false, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, label: "Username", name: "username" }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password" }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { color: "error", children: actionData.error }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 64,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", fullWidth: true, variant: "contained", color: "primary", sx: {
        mt: 3
      }, children: "Sign In" }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = LoginPage;
var _c;
$RefreshReg$(_c, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/_auth.login-TA6VQRKH.js.map
