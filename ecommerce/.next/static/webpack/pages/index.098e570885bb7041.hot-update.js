"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/component/landing page/ThumbnailProduct.js":
/*!********************************************************!*\
  !*** ./src/component/landing page/ThumbnailProduct.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _ProductGroup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductGroup.css */ \"./src/component/landing page/ProductGroup.css\");\n/* harmony import */ var _ProductGroup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProductGroup_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// import ProductImage from '../png components/products/A white electronic device with a game controller on it..png'\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ThumbnailProduct = function(param) {\n    var product = param.product;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var handleClick = function(productId) {\n        router.push(\"/single-product?id=\".concat(productId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"product-preview\",\n        children: product.map(function(p) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-review\",\n                onClick: function() {\n                    return handleClick(p.base.pid);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: p.imgpath,\n                            width: 120,\n                            height: 95\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"product-name\",\n                                children: p.base.pname\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"category\",\n                                children: p.base.pcat\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"feedback\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"star\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                                lineNumber: 26,\n                                                columnNumber: 49\n                                            }, _this),\n                                            p.base.prate\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"review\",\n                                        children: [\n                                            \"| \",\n                                            p.base.psrev,\n                                            \"+ reviews\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-price\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"discount-price\",\n                                        children: [\n                                            \"Rp\",\n                                            parseInt(p.discprice).toLocaleString(\"en-US\", {\n                                                useGrouping: true\n                                            }).replace(\",\", \".\"),\n                                            \",-\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"discount-price\",\n                                        children: \"p.discprice-\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"actual-price\",\n                                        children: [\n                                            \"Rp\",\n                                            parseInt(p.base.orprice * 1.2).toLocaleString(\"en-US\", {\n                                                useGrouping: true\n                                            }).replace(\",\", \".\"),\n                                            \",-\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, p.base.pid, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\kweekStop - Copy\\\\ecommerce\\\\src\\\\component\\\\landing page\\\\ThumbnailProduct.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, _this);\n};\n_s(ThumbnailProduct, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ThumbnailProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThumbnailProduct);\nvar _c;\n$RefreshReg$(_c, \"ThumbnailProduct\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2xhbmRpbmcgcGFnZS9UaHVtYm5haWxQcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0hBQW9IOzs7O0FBQ3hFO0FBQ2hCO0FBQ0Y7QUFDSztBQUNTO0FBRXhDLElBQU1JLG1CQUFtQjtRQUFFQyxnQkFBQUE7O0lBQ3ZCLElBQU1DLFNBQVNILHNEQUFTQTtJQUV4QixJQUFNSSxjQUFjLFNBQUNDO1FBQ2pCRixPQUFPRyxLQUFLLHNCQUFnQyxPQUFWRDtJQUN0QztJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNWTixRQUFRTyxJQUFJLFNBQUNDO2lDQUNWLDhEQUFDSDtnQkFBSUMsV0FBVTtnQkFBa0NHLFNBQVM7MkJBQU1QLFlBQVlNLEVBQUVFLEtBQUtDOzs7a0NBQy9FLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1QsbURBQUtBOzRCQUFDZSxLQUFLSixFQUFFSzs0QkFBU0MsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7a0NBRS9DLDhEQUFDVjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFnQkUsRUFBRUUsS0FBS007Ozs7OzswQ0FDcEMsOERBQUNSO2dDQUFFRixXQUFVOzBDQUFZRSxFQUFFRSxLQUFLTzs7Ozs7OzBDQUNoQyw4REFBQ1o7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRTt3Q0FBRUYsV0FBVTs7MERBQU8sOERBQUNYLHNEQUFVQTs7Ozs7NENBQUlhLEVBQUVFLEtBQUtROzs7Ozs7O2tEQUMxQyw4REFBQ1Y7d0NBQUVGLFdBQVU7OzRDQUFTOzRDQUFHRSxFQUFFRSxLQUFLUzs0Q0FBTTs7Ozs7Ozs7Ozs7OzswQ0FFMUMsOERBQUNkO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0U7d0NBQUVGLFdBQVU7OzRDQUFpQjs0Q0FBR2MsU0FBU1osRUFBRWEsV0FBV0MsZUFBZSxTQUFTO2dEQUFFQyxhQUFhOzRDQUFLLEdBQUdDLFFBQVEsS0FBSzs0Q0FBSzs7Ozs7OztrREFDeEgsOERBQUNoQjt3Q0FBRUYsV0FBVTtrREFBaUI7Ozs7OztrREFDOUIsOERBQUNFO3dDQUFFRixXQUFVOzs0Q0FBZTs0Q0FBR2MsU0FBU1osRUFBRUUsS0FBS2UsVUFBUSxLQUFLSCxlQUFlLFNBQVM7Z0RBQUVDLGFBQWE7NENBQUssR0FBR0MsUUFBUSxLQUFLOzRDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWRwR2hCLEVBQUVFLEtBQUtDOzs7Ozs7Ozs7OztBQXFCNUQ7R0EvQk1aOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUFpQ04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L2xhbmRpbmcgcGFnZS9UaHVtYm5haWxQcm9kdWN0LmpzPzg0MGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFByb2R1Y3RJbWFnZSBmcm9tICcuLi9wbmcgY29tcG9uZW50cy9wcm9kdWN0cy9BIHdoaXRlIGVsZWN0cm9uaWMgZGV2aWNlIHdpdGggYSBnYW1lIGNvbnRyb2xsZXIgb24gaXQuLnBuZydcclxuaW1wb3J0IHsgQWlGaWxsU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgJy4vUHJvZHVjdEdyb3VwLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBUaHVtYm5haWxQcm9kdWN0ID0gKHtwcm9kdWN0fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocHJvZHVjdElkKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zaW5nbGUtcHJvZHVjdD9pZD0ke3Byb2R1Y3RJZH1gKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdcIj5cclxuICAgICAgICAgICAge3Byb2R1Y3QubWFwKChwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1yZXZpZXcnIGtleT17cC5iYXNlLnBpZH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socC5iYXNlLnBpZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cC5pbWdwYXRofSB3aWR0aD17MTIwfSBoZWlnaHQ9ezk1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9kdWN0LW5hbWUnPntwLmJhc2UucG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhdGVnb3J5Jz57cC5iYXNlLnBjYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVlZGJhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGFyJz48QWlGaWxsU3RhciAvPntwLmJhc2UucHJhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZXZpZXcnPnwge3AuYmFzZS5wc3Jldn0rIHJldmlld3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rpc2NvdW50LXByaWNlJz5ScHtwYXJzZUludChwLmRpc2NwcmljZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB1c2VHcm91cGluZzogdHJ1ZSB9KS5yZXBsYWNlKCcsJywgJy4nKX0sLTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGlzY291bnQtcHJpY2UnPnAuZGlzY3ByaWNlLTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWN0dWFsLXByaWNlJz5ScHtwYXJzZUludChwLmJhc2Uub3JwcmljZSoxLjIpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgdXNlR3JvdXBpbmc6IHRydWUgfSkucmVwbGFjZSgnLCcsICcuJyl9LC08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsUHJvZHVjdDsiXSwibmFtZXMiOlsiQWlGaWxsU3RhciIsIlJlYWN0IiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJUaHVtYm5haWxQcm9kdWN0IiwicHJvZHVjdCIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwicHJvZHVjdElkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInAiLCJvbkNsaWNrIiwiYmFzZSIsInBpZCIsInNyYyIsImltZ3BhdGgiLCJ3aWR0aCIsImhlaWdodCIsInBuYW1lIiwicGNhdCIsInByYXRlIiwicHNyZXYiLCJwYXJzZUludCIsImRpc2NwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJyZXBsYWNlIiwib3JwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/landing page/ThumbnailProduct.js\n"));

/***/ })

});