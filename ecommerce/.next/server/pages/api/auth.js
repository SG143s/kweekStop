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
exports.id = "pages/api/auth";
exports.ids = ["pages/api/auth"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/auth/index.js":
/*!*********************************!*\
  !*** ./pages/api/auth/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// const { PrismaClient } = require('@prisma/client')\n// const prisma = new PrismaClient()\n// export default async function handler(req, res) {\n//     const data = await prisma.product.findMany()\n//     return res.status(200).json(data)\n// }\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { username , userpassword  } = req.query;\n        const data = await prisma.$queryRaw`\r\n        SELECT * FROM kweekstop_ecommerce.users where name = ${username} and userpassword = ${userpassword};\r\n    `;\n        return res.status(200).json(data);\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBQXFEO0FBQ3JELG9DQUFvQztBQUVwQyxvREFBb0Q7QUFDcEQsbURBQW1EO0FBQ25ELHdDQUF3QztBQUN4QyxJQUFJO0FBRUosTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLGFBQVksRUFBQyxHQUFHSCxJQUFJSTtRQUV0QyxNQUFNQyxPQUFPLE1BQU1QLE9BQU9RLFNBQVMsQ0FBQzs2REFDcUIsRUFBRUosU0FBUyxvQkFBb0IsRUFBRUMsYUFBYTtJQUN2RyxDQUFDO1FBRUQsT0FBT0YsSUFBSU0sT0FBTyxLQUFLQyxLQUFLSDtJQUM5QixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsTUFBTUE7UUFDZCxPQUFPUixJQUFJTSxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUF3QjtJQUMvRCxTQUFVO1FBQ1IsTUFBTVgsT0FBT2E7SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL2F1dGgvaW5kZXguanM/MzY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKVxyXG4vLyBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5maW5kTWFueSgpXHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcclxuLy8gfVxyXG5cclxuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoJ0BwcmlzbWEvY2xpZW50Jyk7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgdXNlcnBhc3N3b3JkfSA9IHJlcS5xdWVyeTsgXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS4kcXVlcnlSYXdgXHJcbiAgICAgICAgU0VMRUNUICogRlJPTSBrd2Vla3N0b3BfZWNvbW1lcmNlLnVzZXJzIHdoZXJlIG5hbWUgPSAke3VzZXJuYW1lfSBhbmQgdXNlcnBhc3N3b3JkID0gJHt1c2VycGFzc3dvcmR9O1xyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcXVpcmUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJ1c2VycGFzc3dvcmQiLCJxdWVyeSIsImRhdGEiLCIkcXVlcnlSYXciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/index.js"));
module.exports = __webpack_exports__;

})();