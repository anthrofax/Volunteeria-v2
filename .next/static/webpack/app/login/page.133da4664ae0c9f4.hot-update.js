"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/utils/supabase/authApi.ts":
/*!***************************************!*\
  !*** ./src/utils/supabase/authApi.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSession: function() { return /* binding */ getSession; },\n/* harmony export */   getUser: function() { return /* binding */ getUser; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   logout: function() { return /* binding */ logout; },\n/* harmony export */   signup: function() { return /* binding */ signup; }\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"(app-pages-browser)/./src/utils/supabase/client.ts\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ \"(app-pages-browser)/./src/utils/supabase/server.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/cache */ \"(app-pages-browser)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\n\nconst supabase = (0,_client__WEBPACK_IMPORTED_MODULE_0__.createClient)();\nasync function getSession(whereToUse) {\n    const supabase = whereToUse === \"server\" ? await (0,_server__WEBPACK_IMPORTED_MODULE_1__.createClient)() : (0,_client__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n    const { data: { session }, error } = await supabase.auth.getSession();\n    return {\n        session,\n        error\n    };\n}\nasync function logout() {\n    let { error } = await supabase.auth.signOut();\n    if (error) {\n        throw new Error(error.message);\n    }\n    return {\n        error\n    };\n}\nasync function getUser() {\n    const { data: { user } } = await supabase.auth.getUser();\n    return user;\n}\nasync function login(formData) {\n    const supabase = (0,_client__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n    // type-casting here for convenience\n    // in practice, you should validate your inputs\n    const data = {\n        email: formData.get(\"email\"),\n        password: formData.get(\"password\")\n    };\n    const { error } = await supabase.auth.signInWithPassword(data);\n    if (error) {\n        throw new Error(\"Terdapat kesalahan saat login\");\n    }\n    return {\n        successMessage: \"Anda telah berhasil login\"\n    };\n// revalidatePath(\"/volunteers\", \"layout\");\n// redirect(\"/volunteers\");\n// return { isError: false };\n// } catch (error) {\n//   console.log(\"test\");\n//   return { isError: true };\n// }\n}\nasync function signup(formData) {\n    const supabase = (0,_client__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n    // type-casting here for convenience\n    // in practice, you should validate your inputs\n    const data = {\n        email: formData.get(\"email\"),\n        password: formData.get(\"password\")\n    };\n    const { error } = await supabase.auth.signUp(data);\n    if (error) {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Telah terjadi kesalahan\");\n    }\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_3__.revalidatePath)(\"/\", \"layout\");\n    (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)(\"/login\");\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9zdXBhYmFzZS9hdXRoQXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2dCO0FBRWI7QUFDQztBQUNSO0FBRXBDLE1BQU1LLFdBQVdMLHFEQUFZQTtBQUV0QixlQUFlTSxXQUFXQyxVQUErQjtJQUM5RCxNQUFNRixXQUNKRSxlQUFlLFdBQVcsTUFBTU4scURBQVlBLEtBQUtELHFEQUFZQTtJQUUvRCxNQUFNLEVBQ0pRLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQ2pCQyxLQUFLLEVBQ04sR0FBRyxNQUFNTCxTQUFTTSxJQUFJLENBQUNMLFVBQVU7SUFFbEMsT0FBTztRQUFFRztRQUFTQztJQUFNO0FBSTFCO0FBRU8sZUFBZUU7SUFDcEIsSUFBSSxFQUFFRixLQUFLLEVBQUUsR0FBRyxNQUFNTCxTQUFTTSxJQUFJLENBQUNFLE9BQU87SUFFM0MsSUFBSUgsT0FBTztRQUNULE1BQU0sSUFBSUksTUFBTUosTUFBTUssT0FBTztJQUMvQjtJQUVBLE9BQU87UUFBRUw7SUFBTTtBQUNqQjtBQUVPLGVBQWVNO0lBQ3BCLE1BQU0sRUFDSlIsTUFBTSxFQUFFUyxJQUFJLEVBQUUsRUFDZixHQUFHLE1BQU1aLFNBQVNNLElBQUksQ0FBQ0ssT0FBTztJQUUvQixPQUFPQztBQUNUO0FBRU8sZUFBZUMsTUFBTUMsUUFBa0I7SUFDNUMsTUFBTWQsV0FBV0wscURBQVlBO0lBRTdCLG9DQUFvQztJQUNwQywrQ0FBK0M7SUFDL0MsTUFBTVEsT0FBTztRQUNYWSxPQUFPRCxTQUFTRSxHQUFHLENBQUM7UUFDcEJDLFVBQVVILFNBQVNFLEdBQUcsQ0FBQztJQUN6QjtJQUVBLE1BQU0sRUFBRVgsS0FBSyxFQUFFLEdBQUcsTUFBTUwsU0FBU00sSUFBSSxDQUFDWSxrQkFBa0IsQ0FBQ2Y7SUFFekQsSUFBSUUsT0FBTztRQUNULE1BQU0sSUFBSUksTUFBTTtJQUNsQjtJQUVBLE9BQU87UUFBQ1UsZ0JBQWdCO0lBQTJCO0FBQ25ELDJDQUEyQztBQUMzQywyQkFBMkI7QUFFM0IsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsOEJBQThCO0FBQzlCLElBQUk7QUFDTjtBQUVPLGVBQWVDLE9BQU9OLFFBQWtCO0lBQzdDLE1BQU1kLFdBQVdMLHFEQUFZQTtJQUU3QixvQ0FBb0M7SUFDcEMsK0NBQStDO0lBQy9DLE1BQU1RLE9BQU87UUFDWFksT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBQ3BCQyxVQUFVSCxTQUFTRSxHQUFHLENBQUM7SUFDekI7SUFFQSxNQUFNLEVBQUVYLEtBQUssRUFBRSxHQUFHLE1BQU1MLFNBQVNNLElBQUksQ0FBQ2UsTUFBTSxDQUFDbEI7SUFFN0MsSUFBSUUsT0FBTztRQUNUTix1REFBS0EsQ0FBQ00sS0FBSyxDQUFDO0lBQ2Q7SUFFQVAsMERBQWNBLENBQUMsS0FBSztJQUNwQkQseURBQVFBLENBQUM7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvc3VwYWJhc2UvYXV0aEFwaS50cz84NmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiLi9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCBhcyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24od2hlcmVUb1VzZTogXCJjbGllbnRcIiB8IFwic2VydmVyXCIpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPVxuICAgIHdoZXJlVG9Vc2UgPT09IFwic2VydmVyXCIgPyBhd2FpdCBjcmVhdGVTZXJ2ZXIoKSA6IGNyZWF0ZUNsaWVudCgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNlc3Npb24gfSxcbiAgICBlcnJvcixcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xuXG4gIHJldHVybiB7IHNlc3Npb24sIGVycm9yIH0gYXMge1xuICAgIHNlc3Npb246IGFueTtcbiAgICBlcnJvcjogYW55O1xuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCkge1xuICBsZXQgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHsgZXJyb3IgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KCk7XG5cbiAgLy8gdHlwZS1jYXN0aW5nIGhlcmUgZm9yIGNvbnZlbmllbmNlXG4gIC8vIGluIHByYWN0aWNlLCB5b3Ugc2hvdWxkIHZhbGlkYXRlIHlvdXIgaW5wdXRzXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZW1haWw6IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZyxcbiAgICBwYXNzd29yZDogZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nLFxuICB9O1xuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKGRhdGEpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRlcmRhcGF0IGtlc2FsYWhhbiBzYWF0IGxvZ2luXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtzdWNjZXNzTWVzc2FnZTogXCJBbmRhIHRlbGFoIGJlcmhhc2lsIGxvZ2luXCJ9XG4gIC8vIHJldmFsaWRhdGVQYXRoKFwiL3ZvbHVudGVlcnNcIiwgXCJsYXlvdXRcIik7XG4gIC8vIHJlZGlyZWN0KFwiL3ZvbHVudGVlcnNcIik7XG5cbiAgLy8gcmV0dXJuIHsgaXNFcnJvcjogZmFsc2UgfTtcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gIC8vICAgcmV0dXJuIHsgaXNFcnJvcjogdHJ1ZSB9O1xuICAvLyB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWdudXAoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KCk7XG5cbiAgLy8gdHlwZS1jYXN0aW5nIGhlcmUgZm9yIGNvbnZlbmllbmNlXG4gIC8vIGluIHByYWN0aWNlLCB5b3Ugc2hvdWxkIHZhbGlkYXRlIHlvdXIgaW5wdXRzXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZW1haWw6IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZyxcbiAgICBwYXNzd29yZDogZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nLFxuICB9O1xuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnblVwKGRhdGEpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKFwiVGVsYWggdGVyamFkaSBrZXNhbGFoYW5cIik7XG4gIH1cblxuICByZXZhbGlkYXRlUGF0aChcIi9cIiwgXCJsYXlvdXRcIik7XG4gIHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0ZVNlcnZlciIsInJlZGlyZWN0IiwicmV2YWxpZGF0ZVBhdGgiLCJ0b2FzdCIsInN1cGFiYXNlIiwiZ2V0U2Vzc2lvbiIsIndoZXJlVG9Vc2UiLCJkYXRhIiwic2Vzc2lvbiIsImVycm9yIiwiYXV0aCIsImxvZ291dCIsInNpZ25PdXQiLCJFcnJvciIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwidXNlciIsImxvZ2luIiwiZm9ybURhdGEiLCJlbWFpbCIsImdldCIsInBhc3N3b3JkIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic3VjY2Vzc01lc3NhZ2UiLCJzaWdudXAiLCJzaWduVXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/supabase/authApi.ts\n"));

/***/ })

});