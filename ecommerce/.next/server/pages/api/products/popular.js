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
exports.id = "pages/api/products/popular";
exports.ids = ["pages/api/products/popular"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ "(api)/./pages/api/products/popular.js":
/*!***************************************!*\
  !*** ./pages/api/products/popular.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    try {\n        const apiUrl = \"http://localhost:8000/products#sort=popular\";\n        const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(apiUrl, {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (response.ok) {\n            const data = await response.json();\n            const sortedData = data.prods.sort((a, b)=>b.base.prate - a.base.prate);\n            prisma.$disconnect(); // Menutup koneksi Prisma\n            return res.status(200).json(sortedData);\n        } else {\n            const errorData = await response.json();\n            prisma.$disconnect(); // Menutup koneksi Prisma\n            return res.status(401).json({\n                error: errorData.error\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        prisma.$disconnect(); // Menutup koneksi Prisma\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvcG9wdWxhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ2U7QUFFOUMsTUFBTUUsU0FBUyxJQUFJRCx3REFBWUE7QUFFaEIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUk7UUFDRixNQUFNQyxTQUFTO1FBRWYsTUFBTUMsV0FBVyxNQUFNUCxzREFBS0EsQ0FBQ00sUUFBUTtZQUNuQ0UsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUEsSUFBSUYsU0FBU0csSUFBSTtZQUNmLE1BQU1DLE9BQU8sTUFBTUosU0FBU0s7WUFDNUIsTUFBTUMsYUFBYUYsS0FBS0csTUFBTUMsS0FBSyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxLQUFLQyxRQUFRSCxFQUFFRSxLQUFLQztZQUNuRWpCLE9BQU9rQixlQUFlLHlCQUF5QjtZQUMvQyxPQUFPZixJQUFJZ0IsT0FBTyxLQUFLVCxLQUFLQztRQUM5QixPQUFPO1lBQ0wsTUFBTVMsWUFBWSxNQUFNZixTQUFTSztZQUNqQ1YsT0FBT2tCLGVBQWUseUJBQXlCO1lBQy9DLE9BQU9mLElBQUlnQixPQUFPLEtBQUtULEtBQUs7Z0JBQUVXLE9BQU9ELFVBQVVDO1lBQU07UUFDdkQ7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZEMsUUFBUUQsTUFBTUE7UUFDZHJCLE9BQU9rQixlQUFlLHlCQUF5QjtRQUMvQyxPQUFPZixJQUFJZ0IsT0FBTyxLQUFLVCxLQUFLO1lBQUVXLE9BQU87UUFBd0I7SUFDL0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2t3ZWVrc3RvcC8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9wb3B1bGFyLmpzP2ZjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMjc29ydD1wb3B1bGFyJztcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5wcm9kcy5zb3J0KChhLCBiKSA9PiBiLmJhc2UucHJhdGUgLSBhLmJhc2UucHJhdGUpO1xyXG4gICAgICBwcmlzbWEuJGRpc2Nvbm5lY3QoKTsgLy8gTWVudXR1cCBrb25la3NpIFByaXNtYVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oc29ydGVkRGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHByaXNtYS4kZGlzY29ubmVjdCgpOyAvLyBNZW51dHVwIGtvbmVrc2kgUHJpc21hXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBlcnJvckRhdGEuZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcHJpc21hLiRkaXNjb25uZWN0KCk7IC8vIE1lbnV0dXAga29uZWtzaSBQcmlzbWFcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZldGNoIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFwaVVybCIsInJlc3BvbnNlIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiZGF0YSIsImpzb24iLCJzb3J0ZWREYXRhIiwicHJvZHMiLCJzb3J0IiwiYSIsImIiLCJiYXNlIiwicHJhdGUiLCIkZGlzY29ubmVjdCIsInN0YXR1cyIsImVycm9yRGF0YSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/popular.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/popular.js"));
module.exports = __webpack_exports__;

})();