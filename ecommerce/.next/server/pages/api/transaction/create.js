"use strict";
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
exports.id = "pages/api/transaction/create";
exports.ids = ["pages/api/transaction/create"];
exports.modules = {

/***/ "midtrans-client":
/*!**********************************!*\
  !*** external "midtrans-client" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("midtrans-client");

/***/ }),

/***/ "(api)/./pages/api/transaction/create.js":
/*!*****************************************!*\
  !*** ./pages/api/transaction/create.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var midtrans_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! midtrans-client */ \"midtrans-client\");\n/* harmony import */ var midtrans_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(midtrans_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const snap = new (midtrans_client__WEBPACK_IMPORTED_MODULE_0___default().Snap)({\n            isProduction: false,\n            serverKey: process.env.MIDTRANS_SERVER_KEY,\n            clientKey: process.env.MIDTRANS_CLIENT_KEY\n        });\n        const parameter = req.body;\n        const transaction = await snap.createTransaction(parameter).then((transaction)=>{\n            const transactionToken = transaction.token;\n            console.log(transactionToken);\n            res.status(200).json({\n                token: transactionToken,\n                transaction: transaction\n            });\n        }).catch((e)=>{\n            res.status(500).json({\n                message: \"Error\",\n                e: e\n            });\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUV4QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsV0FBVyxRQUFRO1FBQ3ZCLE1BQU1DLE9BQU8sSUFBSUwsNkRBQWFNLENBQUM7WUFDM0JDLGNBQWM7WUFDZEMsV0FBV0MsUUFBUUMsSUFBSUM7WUFDdkJDLFdBQVdILFFBQVFDLElBQUlHO1FBQzNCO1FBRUEsTUFBTUMsWUFBWVosSUFBSWE7UUFFdEIsTUFBTUMsY0FBYyxNQUFNWCxLQUFLWSxrQkFBa0JILFdBQzVDSSxLQUFLLENBQUNGO1lBQ0gsTUFBTUcsbUJBQW1CSCxZQUFZSTtZQUNyQ0MsUUFBUUMsSUFBSUg7WUFDWmhCLElBQUlvQixPQUFPLEtBQUtDLEtBQUs7Z0JBQUVKLE9BQU9EO2dCQUFrQkgsYUFBYUE7WUFBWTtRQUM3RSxHQUNDUyxNQUFNLENBQUNDO1lBQ0p2QixJQUFJb0IsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRyxTQUFTO2dCQUFTRCxHQUFHQTtZQUFFO1FBQ2xEO0lBQ1IsT0FBTztRQUNIdkIsSUFBSW9CLE9BQU8sS0FBS0MsS0FBSztZQUFFRyxTQUFTO1FBQXFCO0lBQ3pEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2Vla3N0b3AvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vY3JlYXRlLmpzPzNiMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1pZHRyYW5zIGZyb20gXCJtaWR0cmFucy1jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBzbmFwID0gbmV3IE1pZHRyYW5zLlNuYXAoe1xyXG4gICAgICAgICAgICBpc1Byb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzZXJ2ZXJLZXk6IHByb2Nlc3MuZW52Lk1JRFRSQU5TX1NFUlZFUl9LRVksXHJcbiAgICAgICAgICAgIGNsaWVudEtleTogcHJvY2Vzcy5lbnYuTUlEVFJBTlNfQ0xJRU5UX0tFWVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBzbmFwLmNyZWF0ZVRyYW5zYWN0aW9uKHBhcmFtZXRlcilcclxuICAgICAgICAgICAgLnRoZW4oKHRyYW5zYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRva2VuID0gdHJhbnNhY3Rpb24udG9rZW47XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvblRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG9rZW46IHRyYW5zYWN0aW9uVG9rZW4sIHRyYW5zYWN0aW9uOiB0cmFuc2FjdGlvbiB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJFcnJvclwiLCBlOiBlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk1pZHRyYW5zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNuYXAiLCJTbmFwIiwiaXNQcm9kdWN0aW9uIiwic2VydmVyS2V5IiwicHJvY2VzcyIsImVudiIsIk1JRFRSQU5TX1NFUlZFUl9LRVkiLCJjbGllbnRLZXkiLCJNSURUUkFOU19DTElFTlRfS0VZIiwicGFyYW1ldGVyIiwiYm9keSIsInRyYW5zYWN0aW9uIiwiY3JlYXRlVHJhbnNhY3Rpb24iLCJ0aGVuIiwidHJhbnNhY3Rpb25Ub2tlbiIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction/create.js"));
module.exports = __webpack_exports__;

})();