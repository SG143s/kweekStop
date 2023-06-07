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
exports.id = "pages/api/deliveryservice/getFee";
exports.ids = ["pages/api/deliveryservice/getFee"];
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

/***/ "(api)/./pages/api/deliveryservice/getFee.js":
/*!*********************************************!*\
  !*** ./pages/api/deliveryservice/getFee.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_1__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { origin , destination , weight , courier  } = req.body;\n        const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.rajaongkir.com/starter/cost\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Key\": \"376ef3362b6b3ee67aff4bc0641f4aad\"\n            },\n            body: JSON.stringify({\n                \"origin\": origin,\n                \"destination\": destination,\n                \"weight\": 170,\n                \"courier\": \"jne\"\n            })\n        });\n        const data = await response.json();\n        res.status(200).json({\n            message: \"Success\",\n            data\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            message: \"Internal Server Error\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsaXZlcnlzZXJ2aWNlL2dldEZlZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFFL0IsTUFBTUUsU0FBUyxJQUFJRix3REFBWUE7QUFFaEIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUk7UUFDQSxNQUFNLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHTCxJQUFJTTtRQUNyRCxNQUFNQyxXQUFXLE1BQU1WLHNEQUFLQSxDQUFDLDJDQUEyQztZQUNwRVcsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsT0FBTztZQUNUO1lBQ0FILE1BQU1JLEtBQUtDLFVBQVU7Z0JBQ25CLFVBQVVUO2dCQUNWLGVBQWVDO2dCQUNmLFVBQVU7Z0JBQ1YsV0FBVztZQUNiO1FBQ0Y7UUFFQSxNQUFNUyxPQUFPLE1BQU1MLFNBQVNNO1FBRWhDWixJQUFJYSxPQUFPLEtBQUtELEtBQUs7WUFBRUUsU0FBUztZQUFXSDtRQUFLO0lBQ2xELEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRRCxNQUFNQTtRQUNkZixJQUFJYSxPQUFPLEtBQUtELEtBQUs7WUFBRUUsU0FBUztRQUF3QjtJQUMxRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL2RlbGl2ZXJ5c2VydmljZS9nZXRGZWUuanM/MmNiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBvcmlnaW4sIGRlc3RpbmF0aW9uLCB3ZWlnaHQsIGNvdXJpZXIgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnJhamFvbmdraXIuY29tL3N0YXJ0ZXIvY29zdCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdLZXknOiAnMzc2ZWYzMzYyYjZiM2VlNjdhZmY0YmMwNjQxZjRhYWQnLCBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIFwib3JpZ2luXCI6IG9yaWdpbiwgXHJcbiAgICAgICAgICAgICAgXCJkZXN0aW5hdGlvblwiOiBkZXN0aW5hdGlvbiwgXHJcbiAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogMTcwLCBcclxuICAgICAgICAgICAgICBcImNvdXJpZXJcIjogXCJqbmVcIlxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcycsIGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH1cclxuICB9XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJmZXRjaCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsIndlaWdodCIsImNvdXJpZXIiLCJib2R5IiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/deliveryservice/getFee.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deliveryservice/getFee.js"));
module.exports = __webpack_exports__;

})();