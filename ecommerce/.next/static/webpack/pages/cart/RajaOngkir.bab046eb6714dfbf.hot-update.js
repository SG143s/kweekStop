"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart/RajaOngkir",{

/***/ "./pages/cart/RajaOngkir.js":
/*!**********************************!*\
  !*** ./pages/cart/RajaOngkir.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar RajaOngkir = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), cities = _useState[0], setCities = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), originCity = _useState1[0], setOriginCity = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n                var response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                fetch(\"/api/deliveryservice/getCityID\")\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            if (response.ok) {\n                                setCities(data.data.rajaongkir.results);\n                            } else {\n                                console.error(data.message);\n                            }\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Error:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (cities.length > 0) {\n            setOriginCity(cities[0]);\n        }\n    }, [\n        cities\n    ]);\n    console.log(\"origin city: \", originCity);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\pages\\\\cart\\\\RajaOngkir.js\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, _this);\n};\n_s(RajaOngkir, \"fwNPuGfFY7u9k+STyR+HhazK4Rk=\");\n_c = RajaOngkir;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RajaOngkir);\nvar _c;\n$RefreshReg$(_c, \"RajaOngkir\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0L1JhamFPbmdraXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUM1QyxJQUFNRSxhQUFhOztJQUNmLElBQTRCRCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUFoQ0UsU0FBcUJGLGNBQWJHLFlBQWFIO0lBQzVCLElBQW9DQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBdENJLGFBQTZCSixlQUFqQkssZ0JBQWlCTDtJQUVwQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFNTzt1QkFBWTtvQkFFUkMsVUFDQUMsTUFNQ0M7Ozs7Ozs7Ozs7NEJBUFU7O2dDQUFNQyxNQUFNOzs7NEJBQXZCSCxXQUFXOzRCQUNKOztnQ0FBTUEsU0FBU0k7Ozs0QkFBdEJILE9BQU87NEJBQ2IsSUFBSUQsU0FBU0ssSUFBSTtnQ0FDZlQsVUFBVUssS0FBS0EsS0FBS0ssV0FBV0M7NEJBQ2pDLE9BQU87Z0NBQ0xDLFFBQVFOLE1BQU1ELEtBQUtROzRCQUNyQjs7Ozs7OzRCQUNPUDs0QkFDUE0sUUFBUU4sTUFBTSxVQUFVQTs7Ozs7Ozs7Ozs7WUFFNUI7NEJBWk1IOzs7O1FBY05BO0lBQ0YsR0FBRyxFQUFFO0lBRUxQLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUcsT0FBT2UsU0FBUyxHQUFHO1lBQ3JCWixjQUFjSCxNQUFNLENBQUMsRUFBRTtRQUN6QjtJQUNGLEdBQUc7UUFBQ0E7S0FBTztJQUVYYSxRQUFRRyxJQUFJLGlCQUFpQmQ7SUFFN0IscUJBQ0UsOERBQUNlOzs7OztBQUlMO0dBbkNJbEI7S0FBQUE7QUFzQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC9SYWphT25na2lyLmpzP2Y2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgUmFqYU9uZ2tpciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjaXRpZXMsIHNldENpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbb3JpZ2luQ2l0eSwgc2V0T3JpZ2luQ2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kZWxpdmVyeXNlcnZpY2UvZ2V0Q2l0eUlEJyk7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHNldENpdGllcyhkYXRhLmRhdGEucmFqYW9uZ2tpci5yZXN1bHRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICBcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRPcmlnaW5DaXR5KGNpdGllc1swXSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtjaXRpZXNdKTtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKFwib3JpZ2luIGNpdHk6IFwiLCBvcmlnaW5DaXR5KTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgey8qIFJlbmRlciB5b3VyIGNvbXBvbmVudCBjb250ZW50ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWphT25na2lyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJhamFPbmdraXIiLCJjaXRpZXMiLCJzZXRDaXRpZXMiLCJvcmlnaW5DaXR5Iiwic2V0T3JpZ2luQ2l0eSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2giLCJqc29uIiwib2siLCJyYWphb25na2lyIiwicmVzdWx0cyIsImNvbnNvbGUiLCJtZXNzYWdlIiwibGVuZ3RoIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart/RajaOngkir.js\n"));

/***/ })

});