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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// const { PrismaClient } = require('@prisma/client')\n// const prisma = new PrismaClient()\n// export default async function handler(req, res) {\n//     const data = await prisma.product.findMany()\n//     return res.status(200).json(data)\n// }\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const data = await prisma.$queryRaw`\r\n      SELECT *\r\n      FROM product\r\n      JOIN categoryprod ON product.id = categoryprod.productid\r\n      JOIN category ON category.id = categoryprod.categoryid;\r\n    `;\n        // const data = await prisma.product.findMany();\n        return res.status(200).json(data);\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFxRDtBQUNyRCxvQ0FBb0M7QUFFcEMsb0RBQW9EO0FBQ3BELG1EQUFtRDtBQUNuRCx3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU0sRUFBRUEsYUFBWSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQ2pDLE1BQU1DLFNBQVMsSUFBSUY7QUFFSixlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUosT0FBT0ssU0FBUyxDQUFDOzs7OztJQUtwQyxDQUFDO1FBQ0QsZ0RBQWdEO1FBRWhELE9BQU9GLElBQUlHLE9BQU8sS0FBS0MsS0FBS0g7SUFDOUIsRUFBRSxPQUFPSSxPQUFPO1FBQ2RDLFFBQVFELE1BQU1BO1FBQ2QsT0FBT0wsSUFBSUcsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE9BQU87UUFBd0I7SUFDL0QsU0FBVTtRQUNSLE1BQU1SLE9BQU9VO0lBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2t3ZWVrc3RvcC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC5qcz81OTczIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpXHJcbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KClcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKVxyXG4vLyB9XHJcblxyXG5jb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKTtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLiRxdWVyeVJhd2BcclxuICAgICAgU0VMRUNUICpcclxuICAgICAgRlJPTSBwcm9kdWN0XHJcbiAgICAgIEpPSU4gY2F0ZWdvcnlwcm9kIE9OIHByb2R1Y3QuaWQgPSBjYXRlZ29yeXByb2QucHJvZHVjdGlkXHJcbiAgICAgIEpPSU4gY2F0ZWdvcnkgT04gY2F0ZWdvcnkuaWQgPSBjYXRlZ29yeXByb2QuY2F0ZWdvcnlpZDtcclxuICAgIGA7XHJcbiAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcXVpcmUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIiRxdWVyeVJhdyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

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