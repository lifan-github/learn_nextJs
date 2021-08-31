/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/events/[...slug]";
exports.ids = ["pages/events/[...slug]"];
exports.modules = {

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/lf73051/lifan/my/learn_nextJs/pages/events/[...slug].js\";\n\n\n\n\n\nfunction FilteredEventPage() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  console.log(router, 'router');\n  let id = \"\";\n  id = router.query.id ? router.query.id : \"没有传参\";\n\n  function goBack() {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().back();\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().beforePopState(({\n      url,\n      as,\n      options\n    }) => {\n      // 我只允许这两条路线\n      alert('路由守卫');\n      return true;\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default().box),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"FilteredEventPage(\\u52A8\\u6001\\u5D4C\\u5957\\u4F20\\u53C2\\u8DEF\\u7531)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      onClick: goBack,\n      type: \"primary\",\n      children: \"\\u8FD4 \\u56DE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilteredEventPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0ksaUJBQVQsR0FBNkI7QUFDekIsUUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQUFvQixRQUFwQjtBQUNBLE1BQUlHLEVBQUUsR0FBRyxFQUFUO0FBQ0FBLEVBQUFBLEVBQUUsR0FBR0gsTUFBTSxDQUFDSSxLQUFQLENBQWFELEVBQWIsR0FBa0JILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRCxFQUEvQixHQUFvQyxNQUF6Qzs7QUFDQSxXQUFTRSxNQUFULEdBQWtCO0FBQ2RULElBQUFBLHVEQUFBO0FBQ0FBLElBQUFBLGlFQUFBLENBQXNCLENBQUM7QUFBRVksTUFBQUEsR0FBRjtBQUFPQyxNQUFBQSxFQUFQO0FBQVdDLE1BQUFBO0FBQVgsS0FBRCxLQUEwQjtBQUM1QztBQUNBQyxNQUFBQSxLQUFLLENBQUMsTUFBRCxDQUFMO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FKRDtBQUtIOztBQUlELHNCQUNJO0FBQUssYUFBUyxFQUFFYixvRUFBaEI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxnQkFBSUs7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyx3Q0FBRDtBQUFRLGFBQU8sRUFBRUUsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7QUFFRCxpRUFBZU4saUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybl9uZXh0anMvLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzPzlkZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uLy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xuXG5cbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRQYWdlKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnNvbGUubG9nKHJvdXRlciwgJ3JvdXRlcicpO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgaWQgPSByb3V0ZXIucXVlcnkuaWQgPyByb3V0ZXIucXVlcnkuaWQgOiBcIuayoeacieS8oOWPglwiO1xuICAgIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICAgICAgUm91dGVyLmJhY2soKTtcbiAgICAgICAgUm91dGVyLmJlZm9yZVBvcFN0YXRlKCh7IHVybCwgYXMsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICAgICAgLy8g5oiR5Y+q5YWB6K646L+Z5Lik5p2h6Lev57q/XG4gICAgICAgICAgICBhbGVydCgn6Lev55Sx5a6I5Y2rJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgICAgIDxkaXY+RmlsdGVyZWRFdmVudFBhZ2Uo5Yqo5oCB5bWM5aWX5Lyg5Y+C6Lev55SxKTwvZGl2PlxuICAgICAgICAgICAgPHA+e2lkfTwvcD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z29CYWNrfSB0eXBlPVwicHJpbWFyeVwiPui/lCDlm548L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50UGFnZTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiUm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsIkZpbHRlcmVkRXZlbnRQYWdlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlkIiwicXVlcnkiLCJnb0JhY2siLCJiYWNrIiwiYmVmb3JlUG9wU3RhdGUiLCJ1cmwiLCJhcyIsIm9wdGlvbnMiLCJhbGVydCIsImJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ }),

/***/ "./styles/home.module.css":
/*!********************************!*\
  !*** ./styles/home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"box\": \"home_box__3Tt-3\",\n\t\"pageContainer1\": \"home_pageContainer1__3tg3Q\",\n\t\"pageContainer2\": \"home_pageContainer2__378GF\",\n\t\"pageContainer3\": \"home_pageContainer3__33gSb\",\n\t\"pageContainer4\": \"home_pageContainer4__3v5_9\",\n\t\"btn1\": \"home_btn1__3jstu\",\n\t\"bannerBox\": \"home_bannerBox__3clYE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5fbmV4dGpzLy4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcz83NzJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJveFwiOiBcImhvbWVfYm94X18zVHQtM1wiLFxuXHRcInBhZ2VDb250YWluZXIxXCI6IFwiaG9tZV9wYWdlQ29udGFpbmVyMV9fM3RnM1FcIixcblx0XCJwYWdlQ29udGFpbmVyMlwiOiBcImhvbWVfcGFnZUNvbnRhaW5lcjJfXzM3OEdGXCIsXG5cdFwicGFnZUNvbnRhaW5lcjNcIjogXCJob21lX3BhZ2VDb250YWluZXIzX18zM2dTYlwiLFxuXHRcInBhZ2VDb250YWluZXI0XCI6IFwiaG9tZV9wYWdlQ29udGFpbmVyNF9fM3Y1XzlcIixcblx0XCJidG4xXCI6IFwiaG9tZV9idG4xX18zanN0dVwiLFxuXHRcImJhbm5lckJveFwiOiBcImhvbWVfYmFubmVyQm94X18zY2xZRVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/home.module.css\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/events/[...slug].js"));
module.exports = __webpack_exports__;

})();