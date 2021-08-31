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
exports.id = "pages/events";
exports.ids = ["pages/events"];
exports.modules = {

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/lf73051/lifan/my/learn_nextJs/pages/events/index.js\";\n\n\n\n\nconst AllEventsPage = ({\n  bannerList,\n  localNavList,\n  subNavList,\n  salesBox,\n  gridNav\n}) => {\n  const goBack = () => {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().back();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default().box),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"Events(\\u9759\\u6001\\u8DEF\\u7531)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerBox),\n      children: bannerList.map((item, index) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: item.icon\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 32\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      onClick: goBack,\n      type: \"primary\",\n      children: \"\\u8FD4 \\u56DE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};\n\nAllEventsPage.getInitialProps = async ({\n  req\n}) => {\n  // 本地开发localhost: 3000 有跨域问题，server.js 配置了跨域\n  const baseUrl = 'https://www.devio.org/io/flutter_app/json/home_page.json';\n  let url =  true ? '/io/flutter_app/json/home_page.json' : 0;\n  const res = await fetch(url);\n  const json = await res.json();\n  const result = {\n    bannerList: json.bannerList,\n    localNavList: json.localNavList,\n    subNavList: json.subNavList,\n    salesBox: json.salesBox,\n    gridNav: json.gridNav\n  };\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllEventsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsYUFBYSxHQUFHLENBQUM7QUFBQ0MsRUFBQUEsVUFBRDtBQUFhQyxFQUFBQSxZQUFiO0FBQTJCQyxFQUFBQSxVQUEzQjtBQUF1Q0MsRUFBQUEsUUFBdkM7QUFBaURDLEVBQUFBO0FBQWpELENBQUQsS0FBK0Q7QUFDakYsUUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakJSLElBQUFBLHVEQUFBO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsb0VBQWhCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsZ0JBRVFFLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUM1Qiw0QkFBTztBQUFpQixhQUFHLEVBQUVELElBQUksQ0FBQ0U7QUFBM0IsV0FBVUQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0gsT0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFTSSw4REFBQyx3Q0FBRDtBQUFRLGFBQU8sRUFBRU4sTUFBakI7QUFBeUIsVUFBSSxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0FqQkQ7O0FBbUJBTixhQUFhLENBQUNjLGVBQWQsR0FBZ0MsT0FBTztBQUFDQyxFQUFBQTtBQUFELENBQVAsS0FBaUI7QUFDN0M7QUFDQSxRQUFNQyxPQUFPLEdBQUcsMERBQWhCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLFFBQXlDLHFDQUF6QyxHQUFpRkQsQ0FBM0Y7QUFDQSxRQUFNRSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQXZCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUNBLFFBQU1DLE1BQU0sR0FBRztBQUNYcEIsSUFBQUEsVUFBVSxFQUFFbUIsSUFBSSxDQUFDbkIsVUFETjtBQUVYQyxJQUFBQSxZQUFZLEVBQUVrQixJQUFJLENBQUNsQixZQUZSO0FBR1hDLElBQUFBLFVBQVUsRUFBRWlCLElBQUksQ0FBQ2pCLFVBSE47QUFJWEMsSUFBQUEsUUFBUSxFQUFFZ0IsSUFBSSxDQUFDaEIsUUFKSjtBQUtYQyxJQUFBQSxPQUFPLEVBQUVlLElBQUksQ0FBQ2Y7QUFMSCxHQUFmO0FBT0EsU0FBT2dCLE1BQVA7QUFDSCxDQWREOztBQWtCQSxpRUFBZXJCLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybl9uZXh0anMvLi9wYWdlcy9ldmVudHMvaW5kZXguanM/YWNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFsbEV2ZW50c1BhZ2UgPSAoe2Jhbm5lckxpc3QsIGxvY2FsTmF2TGlzdCwgc3ViTmF2TGlzdCwgc2FsZXNCb3gsIGdyaWROYXZ9KSA9PiB7XG4gICAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIuYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICAgICAgPGRpdj5FdmVudHMo6Z2Z5oCB6Lev55SxKTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVyQm94fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhbm5lckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpdGVtLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dvQmFja30gdHlwZT1cInByaW1hcnlcIj7ov5Qg5ZuePC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuQWxsRXZlbnRzUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcbiAgICAvLyDmnKzlnLDlvIDlj5Fsb2NhbGhvc3Q6IDMwMDAg5pyJ6Leo5Z+f6Zeu6aKY77yMc2VydmVyLmpzIOmFjee9ruS6hui3qOWfn1xuICAgIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly93d3cuZGV2aW8ub3JnL2lvL2ZsdXR0ZXJfYXBwL2pzb24vaG9tZV9wYWdlLmpzb24nXG4gICAgbGV0IHVybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gJy9pby9mbHV0dGVyX2FwcC9qc29uL2hvbWVfcGFnZS5qc29uJyA6IGJhc2VVcmw7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGJhbm5lckxpc3Q6IGpzb24uYmFubmVyTGlzdCxcbiAgICAgICAgbG9jYWxOYXZMaXN0OiBqc29uLmxvY2FsTmF2TGlzdCxcbiAgICAgICAgc3ViTmF2TGlzdDoganNvbi5zdWJOYXZMaXN0LFxuICAgICAgICBzYWxlc0JveDoganNvbi5zYWxlc0JveCxcbiAgICAgICAgZ3JpZE5hdjoganNvbi5ncmlkTmF2LFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQWxsRXZlbnRzUGFnZTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiUm91dGVyIiwiY2xhc3NlcyIsIkFsbEV2ZW50c1BhZ2UiLCJiYW5uZXJMaXN0IiwibG9jYWxOYXZMaXN0Iiwic3ViTmF2TGlzdCIsInNhbGVzQm94IiwiZ3JpZE5hdiIsImdvQmFjayIsImJhY2siLCJib3giLCJiYW5uZXJCb3giLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpY29uIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwiYmFzZVVybCIsInVybCIsInJlcyIsImZldGNoIiwianNvbiIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/index.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/events/index.js"));
module.exports = __webpack_exports__;

})();