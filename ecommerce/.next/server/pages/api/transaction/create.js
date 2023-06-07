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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var midtrans_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! midtrans-client */ \"midtrans-client\");\n/* harmony import */ var midtrans_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(midtrans_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const snap = new (midtrans_client__WEBPACK_IMPORTED_MODULE_0___default().Snap)({\n            isProduction: false,\n            serverKey: process.env.MIDTRANS_SERVER_KEY,\n            clientKey: process.env.MIDTRANS_CLIENT_KEY\n        });\n        const parameter = req.body;\n        const transaction = await snap.createTransaction(parameter).then((transaction)=>{\n            const transactionToken = transaction.token;\n            console.log(transactionToken);\n            res.status(200).json({\n                token: transactionToken,\n                transaction: transaction\n            });\n        }).catch((e)=>{\n            res.status(500).json({\n                message: \"Error\",\n                e: e\n            });\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUV4QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsV0FBVyxRQUFRO1FBQ3ZCLE1BQU1DLE9BQU8sSUFBSUwsNkRBQWFNLENBQUM7WUFDM0JDLGNBQWM7WUFDZEMsV0FBV0MsUUFBUUMsSUFBSUM7WUFDdkJDLFdBQVdILFFBQVFDLElBQUlHO1FBQzNCO1FBRUEsTUFBTUMsWUFBWVosSUFBSWE7UUFFdEIsTUFBTUMsY0FBYyxNQUFNWCxLQUFLWSxrQkFBa0JILFdBQzVDSSxLQUFLLENBQUNGO1lBQ0gsTUFBTUcsbUJBQW1CSCxZQUFZSTtZQUNyQ0MsUUFBUUMsSUFBSUg7WUFDWmhCLElBQUlvQixPQUFPLEtBQUtDLEtBQUs7Z0JBQUVKLE9BQU9EO2dCQUFrQkgsYUFBYUE7WUFBWTtRQUM3RSxHQUNDUyxNQUFNLENBQUNDO1lBQ0p2QixJQUFJb0IsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRyxTQUFTO2dCQUFTRCxHQUFHQTtZQUFFO1FBQ2xEO0lBQ1IsT0FBTztRQUNIdkIsSUFBSW9CLE9BQU8sS0FBS0MsS0FBSztZQUFFRyxTQUFTO1FBQXFCO0lBQ3pEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2Vla3N0b3AvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vY3JlYXRlLmpzPzNiMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1pZHRyYW5zIGZyb20gXCJtaWR0cmFucy1jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc3Qgc25hcCA9IG5ldyBNaWR0cmFucy5TbmFwKHtcbiAgICAgICAgICAgIGlzUHJvZHVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBzZXJ2ZXJLZXk6IHByb2Nlc3MuZW52Lk1JRFRSQU5TX1NFUlZFUl9LRVksXG4gICAgICAgICAgICBjbGllbnRLZXk6IHByb2Nlc3MuZW52Lk1JRFRSQU5TX0NMSUVOVF9LRVlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcmVxLmJvZHk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBzbmFwLmNyZWF0ZVRyYW5zYWN0aW9uKHBhcmFtZXRlcilcbiAgICAgICAgICAgIC50aGVuKCh0cmFuc2FjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uVG9rZW4gPSB0cmFuc2FjdGlvbi50b2tlbjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvblRva2VuKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuOiB0cmFuc2FjdGlvblRva2VuLCB0cmFuc2FjdGlvbjogdHJhbnNhY3Rpb24gfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3JcIiwgZTogZSB9KVxuICAgICAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1pZHRyYW5zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNuYXAiLCJTbmFwIiwiaXNQcm9kdWN0aW9uIiwic2VydmVyS2V5IiwicHJvY2VzcyIsImVudiIsIk1JRFRSQU5TX1NFUlZFUl9LRVkiLCJjbGllbnRLZXkiLCJNSURUUkFOU19DTElFTlRfS0VZIiwicGFyYW1ldGVyIiwiYm9keSIsInRyYW5zYWN0aW9uIiwiY3JlYXRlVHJhbnNhY3Rpb24iLCJ0aGVuIiwidHJhbnNhY3Rpb25Ub2tlbiIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction/create.js\n");

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