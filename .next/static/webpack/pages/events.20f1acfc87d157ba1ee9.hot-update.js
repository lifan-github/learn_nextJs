"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/lf73051/lifan/my/learn_nextJs/pages/events/index.js\",\n    _this = undefined;\n\n\n\n // function AllEventsPage(){\n//     function goBack(){\n//         Router.back();\n//     }\n//     return(\n//         <div className={classes.box}>\n//             <div>Events(静态路由)</div>\n//             <Button onClick={goBack} type=\"primary\">返 回</Button>\n//         </div>\n//     )\n// }\n\nvar AllEventsPage = function AllEventsPage(_ref) {\n  var stars = _ref.stars;\n\n  var goBack = function goBack() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().back();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"Events(\\u9759\\u6001\\u8DEF\\u7531)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [\"Next stars: \", stars]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n      onClick: goBack,\n      type: \"primary\",\n      children: \"\\u8FD4 \\u56DE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = AllEventsPage;\n\nAllEventsPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = (0,_Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {\n    var req, res;\n    return _Users_lf73051_lifan_my_learn_nextJs_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            req = _ref2.req;\n            _context.next = 3;\n            return fetch('https://www.devio.org/io/flutter_app/json/home_page.json');\n\n          case 3:\n            res = _context.sent;\n            // const json = await res.json();\n            console.log(res, 'res---'); // return { stars: json.stargazers_count }\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllEventsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AllEventsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYTtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQkosSUFBQUEsdURBQUE7QUFDSCxHQUZEOztBQUdBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxvRUFBaEI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxpQ0FBa0JFLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0ksOERBQUMsd0NBQUQ7QUFBUSxhQUFPLEVBQUVDLE1BQWpCO0FBQXlCLFVBQUksRUFBQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FYRDs7S0FBTUY7O0FBYU5BLGFBQWEsQ0FBQ0ssZUFBZDtBQUFBLDhUQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsWUFBQUEsR0FBUixTQUFRQSxHQUFSO0FBQUE7QUFBQSxtQkFDVkMsS0FBSyxDQUFDLDBEQUFELENBREs7O0FBQUE7QUFDdEJDLFlBQUFBLEdBRHNCO0FBRTVCO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLFFBQWpCLEVBSDRCLENBSTVCOztBQUo0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFoQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSwrREFBZVIsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvaW5kZXguanM/YWNlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XG5cbi8vIGZ1bmN0aW9uIEFsbEV2ZW50c1BhZ2UoKXtcbi8vICAgICBmdW5jdGlvbiBnb0JhY2soKXtcbi8vICAgICAgICAgUm91dGVyLmJhY2soKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4oXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4vLyAgICAgICAgICAgICA8ZGl2PkV2ZW50cyjpnZnmgIHot6/nlLEpPC9kaXY+XG4vLyAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dvQmFja30gdHlwZT1cInByaW1hcnlcIj7ov5Qg5ZuePC9CdXR0b24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cblxuXG5jb25zdCBBbGxFdmVudHNQYWdlID0gKHtzdGFyc30pID0+IHtcbiAgICBjb25zdCBnb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5iYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICAgICAgICA8ZGl2PkV2ZW50cyjpnZnmgIHot6/nlLEpPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pk5leHQgc3RhcnM6IHtzdGFyc308L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z29CYWNrfSB0eXBlPVwicHJpbWFyeVwiPui/lCDlm548L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5BbGxFdmVudHNQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy5kZXZpby5vcmcvaW8vZmx1dHRlcl9hcHAvanNvbi9ob21lX3BhZ2UuanNvbicpO1xuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlcywgJ3Jlcy0tLScpO1xuICAgIC8vIHJldHVybiB7IHN0YXJzOiBqc29uLnN0YXJnYXplcnNfY291bnQgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQWxsRXZlbnRzUGFnZTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiUm91dGVyIiwiY2xhc3NlcyIsIkFsbEV2ZW50c1BhZ2UiLCJzdGFycyIsImdvQmFjayIsImJhY2siLCJib3giLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJmZXRjaCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/index.js\n");

/***/ })

});