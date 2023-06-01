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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// const { PrismaClient } = require('@prisma/client')\n// const prisma = new PrismaClient()\n// export default async function handler(req, res) {\n//     const data = await prisma.product.findMany()\n//     return res.status(200).json(data)\n// }\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { username , password  } = req.body; // Assuming you are using POST request to send the form data\n        // Query the database to check if the username and userpassword match any records\n        const user = await prisma.users.findFirst({\n            where: {\n                username,\n                password\n            }\n        });\n        if (user) {\n            // Username and password match, proceed with further logic\n            // You can perform additional operations or return a success response\n            return res.status(200).json(user);\n        } else {\n            // Username and password do not match\n            return res.status(401).json({\n                error: \"Invalid credentials\"\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBQXFEO0FBQ3JELG9DQUFvQztBQUVwQyxvREFBb0Q7QUFDcEQsbURBQW1EO0FBQ25ELHdDQUF3QztBQUN4QyxJQUFJO0FBRUosTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHSCxJQUFJSSxNQUFNLDREQUE0RDtRQUVyRyxpRkFBaUY7UUFDakYsTUFBTUMsT0FBTyxNQUFNUCxPQUFPUSxNQUFNQyxVQUFVO1lBQ3hDQyxPQUFPO2dCQUNMTjtnQkFDQUM7WUFDRjtRQUNGO1FBRUEsSUFBSUUsTUFBTTtZQUNSLDBEQUEwRDtZQUMxRCxxRUFBcUU7WUFDckUsT0FBT0osSUFBSVEsT0FBTyxLQUFLQyxLQUFLTDtRQUM5QixPQUFPO1lBQ0wscUNBQXFDO1lBQ3JDLE9BQU9KLElBQUlRLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsT0FBTztZQUFzQjtRQUM3RDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkQyxRQUFRRCxNQUFNQTtRQUNkLE9BQU9WLElBQUlRLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxPQUFPO1FBQXdCO0lBQy9ELFNBQVU7UUFDUixNQUFNYixPQUFPZTtJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2Vla3N0b3AvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcz8xMzE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpXHJcbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KClcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKVxyXG4vLyB9XHJcblxyXG5jb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKTtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7IC8vIEFzc3VtaW5nIHlvdSBhcmUgdXNpbmcgUE9TVCByZXF1ZXN0IHRvIHNlbmQgdGhlIGZvcm0gZGF0YVxyXG4gICAgXHJcbiAgICAvLyBRdWVyeSB0aGUgZGF0YWJhc2UgdG8gY2hlY2sgaWYgdGhlIHVzZXJuYW1lIGFuZCB1c2VycGFzc3dvcmQgbWF0Y2ggYW55IHJlY29yZHNcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlcnMuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAvLyBVc2VybmFtZSBhbmQgcGFzc3dvcmQgbWF0Y2gsIHByb2NlZWQgd2l0aCBmdXJ0aGVyIGxvZ2ljXHJcbiAgICAgIC8vIFlvdSBjYW4gcGVyZm9ybSBhZGRpdGlvbmFsIG9wZXJhdGlvbnMgb3IgcmV0dXJuIGEgc3VjY2VzcyByZXNwb25zZVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBVc2VybmFtZSBhbmQgcGFzc3dvcmQgZG8gbm90IG1hdGNoXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsInVzZXJzIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();