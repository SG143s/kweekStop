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
exports.id = "pages/api/products/categories";
exports.ids = ["pages/api/products/categories"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/products/categories.js":
/*!******************************************!*\
  !*** ./pages/api/products/categories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    try {\n        const data = await prisma.category.findMany();\n        return res.status(200).json(data);\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFaEIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1KLE9BQU9LLFNBQVNDO1FBRW5DLE9BQU9ILElBQUlJLE9BQU8sS0FBS0MsS0FBS0o7SUFDOUIsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELE1BQU1BO1FBQ2QsT0FBT04sSUFBSUksT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE9BQU87UUFBd0I7SUFDL0QsU0FBVTtRQUNSLE1BQU1ULE9BQU9XO0lBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2t3ZWVrc3RvcC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9jYXRlZ29yaWVzLmpzPzVmNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcnkuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiY2F0ZWdvcnkiLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/categories.js"));
module.exports = __webpack_exports__;

})();