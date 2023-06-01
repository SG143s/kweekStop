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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// const { PrismaClient } = require('@prisma/client')\n// const prisma = new PrismaClient()\n// export default async function handler(req, res) {\n//     const data = await prisma.product.findMany()\n//     return res.status(200).json(data)\n// }\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const data = await prisma.$queryRaw`\r\n      SELECT *\r\n      FROM product\r\n      JOIN categoryprod ON product.id = categoryprod.productid\r\n      JOIN category ON category.id = categoryprod.categoryid;\r\n    `;\n        return res.status(200).json(data);\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFxRDtBQUNyRCxvQ0FBb0M7QUFFcEMsb0RBQW9EO0FBQ3BELG1EQUFtRDtBQUNuRCx3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU0sRUFBRUEsYUFBWSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQ2pDLE1BQU1DLFNBQVMsSUFBSUY7QUFFSixlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUosT0FBT0ssU0FBUyxDQUFDOzs7OztJQUtwQyxDQUFDO1FBRUQsT0FBT0YsSUFBSUcsT0FBTyxLQUFLQyxLQUFLSDtJQUM5QixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsTUFBTUE7UUFDZCxPQUFPTCxJQUFJRyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUF3QjtJQUMvRCxTQUFVO1FBQ1IsTUFBTVIsT0FBT1U7SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL2luZGV4LmpzPzU5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoJ0BwcmlzbWEvY2xpZW50JylcclxuLy8gY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoKVxyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXHJcbi8vIH1cclxuXHJcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEuJHF1ZXJ5UmF3YFxyXG4gICAgICBTRUxFQ1QgKlxyXG4gICAgICBGUk9NIHByb2R1Y3RcclxuICAgICAgSk9JTiBjYXRlZ29yeXByb2QgT04gcHJvZHVjdC5pZCA9IGNhdGVnb3J5cHJvZC5wcm9kdWN0aWRcclxuICAgICAgSk9JTiBjYXRlZ29yeSBPTiBjYXRlZ29yeS5pZCA9IGNhdGVnb3J5cHJvZC5jYXRlZ29yeWlkO1xyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcXVpcmUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIiRxdWVyeVJhdyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();