"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/ui/globals.css":
/*!********************************!*\
  !*** ./src/app/ui/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"93be87332aaa\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZ2xvYmFscy5jc3M/ZTQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjkzYmU4NzMzMmFhYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/utils/supabase/authApi.ts":
/*!***************************************!*\
  !*** ./src/utils/supabase/authApi.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSession: function() { return /* binding */ getSession; },\n/* harmony export */   getUser: function() { return /* binding */ getUser; },\n/* harmony export */   logout: function() { return /* binding */ logout; }\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"(app-pages-browser)/./src/utils/supabase/client.ts\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ \"(app-pages-browser)/./src/utils/supabase/server.ts\");\n/* harmony import */ var _contexts_RouteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/RouteContext */ \"(app-pages-browser)/./src/contexts/RouteContext.tsx\");\n\n\n\nconst supabase = (0,_client__WEBPACK_IMPORTED_MODULE_0__.createClient)();\nasync function getSession(whereToUse) {\n    const supabase = whereToUse === \"server\" ? await (0,_server__WEBPACK_IMPORTED_MODULE_1__.createClient)() : (0,_client__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n    const { data: { session }, error } = await supabase.auth.getSession();\n    return {\n        session,\n        error\n    };\n}\nasync function logout() {\n    const { setIsLoggedIn } = (0,_contexts_RouteContext__WEBPACK_IMPORTED_MODULE_2__.useRoute)();\n    let { error } = await supabase.auth.signOut();\n    if (error) {\n        throw new Error(error.message);\n    }\n    setIsLoggedIn(false);\n    return {\n        error\n    };\n}\nasync function getUser() {\n    const { data: { user } } = await supabase.auth.getUser();\n    return user;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9zdXBhYmFzZS9hdXRoQXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN3QztBQUNnQjtBQUVMO0FBRW5ELE1BQU1HLFdBQVdILHFEQUFZQTtBQUV0QixlQUFlSSxXQUFXQyxVQUErQjtJQUM5RCxNQUFNRixXQUNKRSxlQUFlLFdBQVcsTUFBTUoscURBQVlBLEtBQUtELHFEQUFZQTtJQUUvRCxNQUFNLEVBQ0pNLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQ2pCQyxLQUFLLEVBQ04sR0FBRyxNQUFNTCxTQUFTTSxJQUFJLENBQUNMLFVBQVU7SUFFbEMsT0FBTztRQUFFRztRQUFTQztJQUFNO0FBSTFCO0FBRU8sZUFBZUU7SUFDcEIsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR1QsZ0VBQVFBO0lBRWxDLElBQUksRUFBRU0sS0FBSyxFQUFFLEdBQUcsTUFBTUwsU0FBU00sSUFBSSxDQUFDRyxPQUFPO0lBRTNDLElBQUlKLE9BQU87UUFDVCxNQUFNLElBQUlLLE1BQU1MLE1BQU1NLE9BQU87SUFDL0I7SUFFQUgsY0FBYztJQUVkLE9BQU87UUFBRUg7SUFBTTtBQUNqQjtBQUVPLGVBQWVPO0lBQ3BCLE1BQU0sRUFDSlQsTUFBTSxFQUFFVSxJQUFJLEVBQUUsRUFDZixHQUFHLE1BQU1iLFNBQVNNLElBQUksQ0FBQ00sT0FBTztJQUUvQixPQUFPQztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9zdXBhYmFzZS9hdXRoQXBpLnRzPzg2ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCIuL2NsaWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZVNlcnZlciB9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tIFwiQC9jb250ZXh0cy9Sb3V0ZUNvbnRleHRcIjtcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24od2hlcmVUb1VzZTogXCJjbGllbnRcIiB8IFwic2VydmVyXCIpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPVxuICAgIHdoZXJlVG9Vc2UgPT09IFwic2VydmVyXCIgPyBhd2FpdCBjcmVhdGVTZXJ2ZXIoKSA6IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNlc3Npb24gfSxcbiAgICBlcnJvcixcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xuXG4gIHJldHVybiB7IHNlc3Npb24sIGVycm9yIH0gYXMge1xuICAgIHNlc3Npb246IGFueTtcbiAgICBlcnJvcjogYW55O1xuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCkge1xuICBjb25zdCB7IHNldElzTG9nZ2VkSW4gfSA9IHVzZVJvdXRlKCk7XG5cbiAgbGV0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgfVxuXG4gIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuXG4gIHJldHVybiB7IGVycm9yIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKCkge1xuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcblxuICByZXR1cm4gdXNlcjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVTZXJ2ZXIiLCJ1c2VSb3V0ZSIsInN1cGFiYXNlIiwiZ2V0U2Vzc2lvbiIsIndoZXJlVG9Vc2UiLCJkYXRhIiwic2Vzc2lvbiIsImVycm9yIiwiYXV0aCIsImxvZ291dCIsInNldElzTG9nZ2VkSW4iLCJzaWduT3V0IiwiRXJyb3IiLCJtZXNzYWdlIiwiZ2V0VXNlciIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/supabase/authApi.ts\n"));

/***/ })

});