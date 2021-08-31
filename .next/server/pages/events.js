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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/lf73051/lifan/my/learn_nextJs/pages/events/index.js\";\n\n\n\n\n // ====== 前端渲染及数据获取 ========\n\n/**\nconst AllEventsPage = ({ bannerList, localNavList, subNavList, salesBox, gridNav }) => {\n    const goBack = () => {\n        Router.back();\n    }\n    return (\n        <div className={classes.box}>\n            <div>Events(静态路由)</div>\n            <div className={classes.bannerBox}>\n                {\n                    bannerList.length > 0 && bannerList.map((item, index) => {\n                        return <img key={index} src={item.icon} />\n                    })\n                }\n            </div>\n            <Button onClick={goBack} type=\"primary\">返 回</Button>\n        </div>\n    )\n}\n\nAllEventsPage.getInitialProps = async ({ req }) => {\n    // 本地开发localhost: 3000 有跨域问题，server.js 配置了跨域\n    const baseUrl = 'https://www.devio.org/io/flutter_app/json/home_page.json'\n    let url = process.env.NODE_ENV === 'development' ? '/io/flutter_app/json/home_page.json' : baseUrl;\n    const res = await fetch(url);\n    const json = await res.json();\n    return {\n        bannerList: json.bannerList,\n        localNavList: json.localNavList,\n        subNavList: json.subNavList,\n        salesBox: json.salesBox,\n        gridNav: json.gridNav,\n    }\n}\n\nexport default AllEventsPage;\n */\n// ====== 服务端预渲染及数据获取 ========\n\nconst AllEventsPage = props => {\n  const {\n    bannerList,\n    localNavList,\n    subNavList,\n    salesBox,\n    gridNav\n  } = props;\n\n  const goBack = () => {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().back();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().box),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"\\u670D\\u52A1\\u7AEF\\u9884\\u6E32\\u67D3\\u53CA\\u6570\\u636E\\u83B7\\u53D6\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerBox),\n      children: bannerList.map((item, index) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: item.icon\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 32\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      onClick: goBack,\n      type: \"primary\",\n      children: \"\\u8FD4 \\u56DE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, undefined);\n}; // 预渲染和数据获取\n\n\nfunction getStaticProps() {\n  console.log('再次生成页面...');\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'data', 'data1.json');\n  const jsonData = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(filePath);\n  const data = JSON.parse(jsonData);\n  console.log(data, 'data----');\n\n  if (JSON.stringify(data) == \"{}\") {\n    return {\n      notFound: true // 没有数据 进入配置的404页面\n\n    };\n  }\n\n  if (!data) {\n    // 重定向\n    return {\n      redirect: {\n        destination: \"/no-data\" // 重定向新的路由\n\n      }\n    };\n  }\n\n  return {\n    props: {\n      bannerList: data.bannerList,\n      localNavList: data.localNavList,\n      subNavList: data.subNavList\n    },\n    revalidate: 10 // 服务端10秒更新一次\n\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllEventsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQzs7QUFDRCxNQUFNSyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNO0FBQUVDLElBQUFBLFVBQUY7QUFBY0MsSUFBQUEsWUFBZDtBQUE0QkMsSUFBQUEsVUFBNUI7QUFBd0NDLElBQUFBLFFBQXhDO0FBQWtEQyxJQUFBQTtBQUFsRCxNQUE4REwsS0FBcEU7O0FBRUEsUUFBTU0sTUFBTSxHQUFHLE1BQU07QUFDakJULElBQUFBLHVEQUFBO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsb0VBQWhCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsZ0JBRVFHLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUM1Qiw0QkFBTztBQUFpQixhQUFHLEVBQUVELElBQUksQ0FBQ0U7QUFBM0IsV0FBVUQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0gsT0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFTSSw4REFBQyx3Q0FBRDtBQUFRLGFBQU8sRUFBRU4sTUFBakI7QUFBeUIsVUFBSSxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0FwQkQsRUFzQkE7OztBQUNPLFNBQVNRLGNBQVQsR0FBMEI7QUFDN0JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxRQUFNQyxRQUFRLEdBQUd0QixnREFBQSxDQUFVd0IsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsWUFBakMsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUd6QixzREFBQSxDQUFnQnFCLFFBQWhCLENBQWpCO0FBQ0EsUUFBTU0sSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osUUFBWCxDQUFiO0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFaLEVBQWtCLFVBQWxCOztBQUNBLE1BQUdDLElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxJQUFmLEtBQXdCLElBQTNCLEVBQWdDO0FBQzVCLFdBQU87QUFDSEksTUFBQUEsUUFBUSxFQUFFLElBRFAsQ0FDYTs7QUFEYixLQUFQO0FBR0g7O0FBRUQsTUFBRyxDQUFDSixJQUFKLEVBQVM7QUFBRTtBQUNQLFdBQU07QUFDRkssTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLFdBQVcsRUFBRSxVQURQLENBQ21COztBQURuQjtBQURSLEtBQU47QUFLSDs7QUFFRCxTQUFPO0FBQ0g3QixJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsVUFBVSxFQUFFc0IsSUFBSSxDQUFDdEIsVUFEZDtBQUVIQyxNQUFBQSxZQUFZLEVBQUVxQixJQUFJLENBQUNyQixZQUZoQjtBQUdIQyxNQUFBQSxVQUFVLEVBQUVvQixJQUFJLENBQUNwQjtBQUhkLEtBREo7QUFNSDJCLElBQUFBLFVBQVUsRUFBRSxFQU5ULENBTWE7O0FBTmIsR0FBUDtBQVNIO0FBRUQsaUVBQWUvQixhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5fbmV4dGpzLy4vcGFnZXMvZXZlbnRzL2luZGV4LmpzP2FjZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uLy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xuXG5cbi8vID09PT09PSDliY3nq6/muLLmn5Plj4rmlbDmja7ojrflj5YgPT09PT09PT1cbi8qKlxuY29uc3QgQWxsRXZlbnRzUGFnZSA9ICh7IGJhbm5lckxpc3QsIGxvY2FsTmF2TGlzdCwgc3ViTmF2TGlzdCwgc2FsZXNCb3gsIGdyaWROYXYgfSkgPT4ge1xuICAgIGNvbnN0IGdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLmJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgICAgIDxkaXY+RXZlbnRzKOmdmeaAgei3r+eUsSk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lckJveH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiYW5uZXJMaXN0Lmxlbmd0aCA+IDAgJiYgYmFubmVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBrZXk9e2luZGV4fSBzcmM9e2l0ZW0uaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z29CYWNrfSB0eXBlPVwicHJpbWFyeVwiPui/lCDlm548L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5BbGxFdmVudHNQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gICAgLy8g5pys5Zyw5byA5Y+RbG9jYWxob3N0OiAzMDAwIOaciei3qOWfn+mXrumimO+8jHNlcnZlci5qcyDphY3nva7kuobot6jln59cbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3LmRldmlvLm9yZy9pby9mbHV0dGVyX2FwcC9qc29uL2hvbWVfcGFnZS5qc29uJ1xuICAgIGxldCB1cmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICcvaW8vZmx1dHRlcl9hcHAvanNvbi9ob21lX3BhZ2UuanNvbicgOiBiYXNlVXJsO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFubmVyTGlzdDoganNvbi5iYW5uZXJMaXN0LFxuICAgICAgICBsb2NhbE5hdkxpc3Q6IGpzb24ubG9jYWxOYXZMaXN0LFxuICAgICAgICBzdWJOYXZMaXN0OiBqc29uLnN1Yk5hdkxpc3QsXG4gICAgICAgIHNhbGVzQm94OiBqc29uLnNhbGVzQm94LFxuICAgICAgICBncmlkTmF2OiBqc29uLmdyaWROYXYsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGxFdmVudHNQYWdlO1xuICovXG5cblxuIC8vID09PT09PSDmnI3liqHnq6/pooTmuLLmn5Plj4rmlbDmja7ojrflj5YgPT09PT09PT1cbmNvbnN0IEFsbEV2ZW50c1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGJhbm5lckxpc3QsIGxvY2FsTmF2TGlzdCwgc3ViTmF2TGlzdCwgc2FsZXNCb3gsIGdyaWROYXYgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIuYmFjaygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICAgICAgICA8ZGl2PuacjeWKoeerr+mihOa4suafk+WPiuaVsOaNruiOt+WPljwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVyQm94fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhbm5lckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpdGVtLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dvQmFja30gdHlwZT1cInByaW1hcnlcIj7ov5Qg5ZuePC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8g6aKE5riy5p+T5ZKM5pWw5o2u6I635Y+WXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc29sZS5sb2coJ+WGjeasoeeUn+aIkOmhtemdoi4uLicpO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ2RhdGExLmpzb24nKTtcbiAgICBjb25zdCBqc29uRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEsICdkYXRhLS0tLScpO1xuICAgIGlmKEpTT04uc3RyaW5naWZ5KGRhdGEpID09IFwie31cIil7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RGb3VuZDogdHJ1ZSwgLy8g5rKh5pyJ5pWw5o2uIOi/m+WFpemFjee9rueahDQwNOmhtemdolxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmKCFkYXRhKXsgLy8g6YeN5a6a5ZCRXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL25vLWRhdGFcIiwgLy8g6YeN5a6a5ZCR5paw55qE6Lev55SxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYmFubmVyTGlzdDogZGF0YS5iYW5uZXJMaXN0LFxuICAgICAgICAgICAgbG9jYWxOYXZMaXN0OiBkYXRhLmxvY2FsTmF2TGlzdCxcbiAgICAgICAgICAgIHN1Yk5hdkxpc3Q6IGRhdGEuc3ViTmF2TGlzdFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxMCwgLy8g5pyN5Yqh56uvMTDnp5Lmm7TmlrDkuIDmrKFcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsbEV2ZW50c1BhZ2U7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInBhdGgiLCJmcyIsIlJvdXRlciIsImNsYXNzZXMiLCJBbGxFdmVudHNQYWdlIiwicHJvcHMiLCJiYW5uZXJMaXN0IiwibG9jYWxOYXZMaXN0Iiwic3ViTmF2TGlzdCIsInNhbGVzQm94IiwiZ3JpZE5hdiIsImdvQmFjayIsImJhY2siLCJib3giLCJiYW5uZXJCb3giLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpY29uIiwiZ2V0U3RhdGljUHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm5vdEZvdW5kIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/index.js\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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