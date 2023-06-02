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
exports.id = "pages/api/cart";
exports.ids = ["pages/api/cart"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/cart/index.js":
/*!*********************************!*\
  !*** ./pages/api/cart/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { amount , productdata , userData  } = req.body;\n            const userid = userData.id;\n            const productid = productdata.productid;\n            const quantity = amount;\n            const cartItem = await prisma.cart.create({\n                data: {\n                    userid,\n                    productid,\n                    quantity\n                }\n            });\n            return res.status(200).json(cartItem);\n        } catch (error) {\n            console.error(error);\n            return res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        } finally{\n            await prisma.$disconnect();\n        }\n    }\n    return res.status(404).json({\n        error: \"Not Found\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FydC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFaEIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6QixJQUFJO1lBQ0EsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFFLEdBQUdMLElBQUlNO1lBQzlDLE1BQU1DLFNBQVNGLFNBQVNHO1lBQ3hCLE1BQU1DLFlBQVlMLFlBQVlLO1lBQzlCLE1BQU1DLFdBQVdQO1lBRXJCLE1BQU1RLFdBQVcsTUFBTWIsT0FBT2MsS0FBS0MsT0FBTztnQkFDdENDLE1BQU07b0JBQ0ZQO29CQUNBRTtvQkFDQUM7Z0JBQ0o7WUFDSjtZQUVFLE9BQU9ULElBQUljLE9BQU8sS0FBS0MsS0FBS0w7UUFDOUIsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELE1BQU1BO1lBQ2QsT0FBT2hCLElBQUljLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsT0FBTztZQUF3QjtRQUMvRCxTQUFVO1lBQ1IsTUFBTW5CLE9BQU9xQjtRQUNmO0lBQ0Y7SUFFQSxPQUFPbEIsSUFBSWMsT0FBTyxLQUFLQyxLQUFLO1FBQUVDLE9BQU87SUFBWTtBQUNuRCIsInNvdXJjZXMiOlsid2VicGFjazovL2t3ZWVrc3RvcC8uL3BhZ2VzL2FwaS9jYXJ0L2luZGV4LmpzPzIzY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQsIHByb2R1Y3RkYXRhLCB1c2VyRGF0YSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgdXNlcmlkID0gdXNlckRhdGEuaWQ7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdGlkID0gcHJvZHVjdGRhdGEucHJvZHVjdGlkO1xyXG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYW1vdW50O1xyXG5cclxuICAgIGNvbnN0IGNhcnRJdGVtID0gYXdhaXQgcHJpc21hLmNhcnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJpZCxcclxuICAgICAgICAgICAgcHJvZHVjdGlkLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oY2FydEl0ZW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdOb3QgRm91bmQnIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYW1vdW50IiwicHJvZHVjdGRhdGEiLCJ1c2VyRGF0YSIsImJvZHkiLCJ1c2VyaWQiLCJpZCIsInByb2R1Y3RpZCIsInF1YW50aXR5IiwiY2FydEl0ZW0iLCJjYXJ0IiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/cart/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cart/index.js"));
module.exports = __webpack_exports__;

})();