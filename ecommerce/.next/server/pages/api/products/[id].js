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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { id  } = req.query;\n        const data = await prisma.$queryRaw`\r\n            SELECT *\r\n            FROM product\r\n            JOIN categoryprod ON product.id = categoryprod.productid\r\n            JOIN category ON category.id = categoryprod.categoryid\r\n            JOIN productimg ON productimg.productid = product.id\r\n            WHERE product.id = ${id};\r\n        `;\n        if (data.length > 0) {\n            return res.status(200).json(data[0]);\n        } else {\n            return res.status(401).json({\n                error: \"Invalid id\"\n            });\n        }\n    } catch (error) {\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0YsSUFBSUc7UUFFbkIsTUFBTUMsT0FBTyxNQUFNTixPQUFPTyxTQUFTLENBQUM7Ozs7OzsrQkFNYixFQUFFSCxHQUFHO1FBQzVCLENBQUM7UUFFRCxJQUFJRSxLQUFLRSxTQUFTLEdBQUc7WUFDbkIsT0FBT0wsSUFBSU0sT0FBTyxLQUFLQyxLQUFLSixJQUFJLENBQUMsRUFBRTtRQUNyQyxPQUFPO1lBQ0wsT0FBT0gsSUFBSU0sT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxPQUFPO1lBQWE7UUFDcEQ7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZCxPQUFPUixJQUFJTSxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUF3QjtJQUMvRCxTQUFVO1FBQ1IsTUFBTVgsT0FBT1k7SUFDZjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0uanM/ODJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKTtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7IFxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLiRxdWVyeVJhd2BcclxuICAgICAgICAgICAgU0VMRUNUICpcclxuICAgICAgICAgICAgRlJPTSBwcm9kdWN0XHJcbiAgICAgICAgICAgIEpPSU4gY2F0ZWdvcnlwcm9kIE9OIHByb2R1Y3QuaWQgPSBjYXRlZ29yeXByb2QucHJvZHVjdGlkXHJcbiAgICAgICAgICAgIEpPSU4gY2F0ZWdvcnkgT04gY2F0ZWdvcnkuaWQgPSBjYXRlZ29yeXByb2QuY2F0ZWdvcnlpZFxyXG4gICAgICAgICAgICBKT0lOIHByb2R1Y3RpbWcgT04gcHJvZHVjdGltZy5wcm9kdWN0aWQgPSBwcm9kdWN0LmlkXHJcbiAgICAgICAgICAgIFdIRVJFIHByb2R1Y3QuaWQgPSAke2lkfTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIGlkJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgICB9XHJcbiAgfSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJkYXRhIiwiJHF1ZXJ5UmF3IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();