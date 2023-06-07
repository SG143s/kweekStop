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
exports.id = "pages/api/cart/[userid]";
exports.ids = ["pages/api/cart/[userid]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/cart/[userid].js":
/*!************************************!*\
  !*** ./pages/api/cart/[userid].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { userid  } = req.query;\n        const data = await prisma.$queryRaw`\r\n            SELECT *\r\n            FROM cart\r\n            JOIN product ON product.id = cart.productid\r\n            JOIN productimg ON productimg.productid = product.id\r\n            WHERE cart.userid = ${userid};\r\n        `;\n        if (data.length > 0) {\n            return res.status(200).json(data);\n        } else {\n            return res.status(401).json({\n                error: \"Invalid userid\"\n            });\n        }\n    } catch (error) {\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FydC9bdXNlcmlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0YsSUFBSUc7UUFFdkIsTUFBTUMsT0FBTyxNQUFNTixPQUFPTyxTQUFTLENBQUM7Ozs7O2dDQUtaLEVBQUVILE9BQU87UUFDakMsQ0FBQztRQUVELElBQUlFLEtBQUtFLFNBQVMsR0FBRztZQUNuQixPQUFPTCxJQUFJTSxPQUFPLEtBQUtDLEtBQUtKO1FBQzlCLE9BQU87WUFDTCxPQUFPSCxJQUFJTSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVDLE9BQU87WUFBaUI7UUFDeEQ7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZCxPQUFPUixJQUFJTSxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUF3QjtJQUMvRCxTQUFVO1FBQ1IsTUFBTVgsT0FBT1k7SUFDZjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL2NhcnQvW3VzZXJpZF0uanM/MTcxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKTtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHVzZXJpZCB9ID0gcmVxLnF1ZXJ5OyBcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS4kcXVlcnlSYXdgXHJcbiAgICAgICAgICAgIFNFTEVDVCAqXHJcbiAgICAgICAgICAgIEZST00gY2FydFxyXG4gICAgICAgICAgICBKT0lOIHByb2R1Y3QgT04gcHJvZHVjdC5pZCA9IGNhcnQucHJvZHVjdGlkXHJcbiAgICAgICAgICAgIEpPSU4gcHJvZHVjdGltZyBPTiBwcm9kdWN0aW1nLnByb2R1Y3RpZCA9IHByb2R1Y3QuaWRcclxuICAgICAgICAgICAgV0hFUkUgY2FydC51c2VyaWQgPSAke3VzZXJpZH07XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCB1c2VyaWQnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAgIH1cclxuICB9Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcXVpcmUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcmlkIiwicXVlcnkiLCJkYXRhIiwiJHF1ZXJ5UmF3IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/cart/[userid].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cart/[userid].js"));
module.exports = __webpack_exports__;

})();