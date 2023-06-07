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
exports.id = "pages/api/products/products";
exports.ids = ["pages/api/products/products"];
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

/***/ "(api)/./pages/api/products/products.js":
/*!****************************************!*\
  !*** ./pages/api/products/products.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    try {\n        const apiUrl = \"http://localhost:8000/products\";\n        const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(apiUrl, {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (response.ok) {\n            const data = await response.json();\n            const sortedData = data.prods.sort((a, b)=>b.discprice - a.discprice);\n            prisma.$disconnect(); // Menutup koneksi Prisma\n            return res.status(200).json(data.prods);\n        } else {\n            const errorData = await response.json();\n            prisma.$disconnect(); // Menutup koneksi Prisma\n            return res.status(401).json({\n                error: errorData.error\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        prisma.$disconnect(); // Menutup koneksi Prisma\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNlO0FBRTlDLE1BQU1FLFNBQVMsSUFBSUQsd0RBQVlBO0FBRWhCLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsU0FBUztRQUVmLE1BQU1DLFdBQVcsTUFBTVAsc0RBQUtBLENBQUNNLFFBQVE7WUFDbkNFLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBLElBQUlGLFNBQVNHLElBQUk7WUFDZixNQUFNQyxPQUFPLE1BQU1KLFNBQVNLO1lBQzVCLE1BQU1DLGFBQWFGLEtBQUtHLE1BQU1DLEtBQUssQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRUMsWUFBWUYsRUFBRUU7WUFDN0RoQixPQUFPaUIsZUFBZSx5QkFBeUI7WUFDL0MsT0FBT2QsSUFBSWUsT0FBTyxLQUFLUixLQUFLRCxLQUFLRztRQUNuQyxPQUFPO1lBQ0wsTUFBTU8sWUFBWSxNQUFNZCxTQUFTSztZQUNqQ1YsT0FBT2lCLGVBQWUseUJBQXlCO1lBQy9DLE9BQU9kLElBQUllLE9BQU8sS0FBS1IsS0FBSztnQkFBRVUsT0FBT0QsVUFBVUM7WUFBTTtRQUN2RDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkQyxRQUFRRCxNQUFNQTtRQUNkcEIsT0FBT2lCLGVBQWUseUJBQXlCO1FBQy9DLE9BQU9kLElBQUllLE9BQU8sS0FBS1IsS0FBSztZQUFFVSxPQUFPO1FBQXdCO0lBQy9EO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2Vla3N0b3AvLi9wYWdlcy9hcGkvcHJvZHVjdHMvcHJvZHVjdHMuanM/MjZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cyc7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGEucHJvZHMuc29ydCgoYSwgYikgPT4gYi5kaXNjcHJpY2UgLSBhLmRpc2NwcmljZSk7XHJcbiAgICAgIHByaXNtYS4kZGlzY29ubmVjdCgpOyAvLyBNZW51dHVwIGtvbmVrc2kgUHJpc21hXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLnByb2RzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcHJpc21hLiRkaXNjb25uZWN0KCk7IC8vIE1lbnV0dXAga29uZWtzaSBQcmlzbWFcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IGVycm9yRGF0YS5lcnJvciB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICBwcmlzbWEuJGRpc2Nvbm5lY3QoKTsgLy8gTWVudXR1cCBrb25la3NpIFByaXNtYVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZmV0Y2giLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYXBpVXJsIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJkYXRhIiwianNvbiIsInNvcnRlZERhdGEiLCJwcm9kcyIsInNvcnQiLCJhIiwiYiIsImRpc2NwcmljZSIsIiRkaXNjb25uZWN0Iiwic3RhdHVzIiwiZXJyb3JEYXRhIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/products.js"));
module.exports = __webpack_exports__;

})();