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
exports.id = "pages/api/deliveryservice/createFee";
exports.ids = ["pages/api/deliveryservice/createFee"];
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

/***/ "(api)/./pages/api/deliveryservice/createFee.js":
/*!************************************************!*\
  !*** ./pages/api/deliveryservice/createFee.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_1__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            // Ambil nilai fee dari API RajaOngkir\n            const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.rajaongkir.com/starter/city\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Key\": \"376ef3362b6b3ee67aff4bc0641f4aad\"\n                }\n            });\n            const data = await response.json();\n            //   const fee = data.fee; // Ganti dengan properti yang sesuai dengan respons API RajaOngkir\n            //   // Buat entri baru di tabel deliveryservice menggunakan Prisma\n            //   const createdDeliveryService = await prisma.deliveryservice.create({\n            //     data: {\n            //       fee,\n            //     },\n            //   });\n            res.status(200).json({\n                message: \"Success\",\n                data\n            });\n        //   res.status(200).json({ message: 'Success', deliveryService: createdDeliveryService });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsaXZlcnlzZXJ2aWNlL2NyZWF0ZUZlZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFFL0IsTUFBTUUsU0FBUyxJQUFJRix3REFBWUE7QUFFaEIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN4QixJQUFJO1lBQ0Ysc0NBQXNDO1lBQ3RDLE1BQU1DLFdBQVcsTUFBTU4sc0RBQUtBLENBQUMsMkNBQTJDO2dCQUN0RUssUUFBUTtnQkFDUkUsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCLE9BQU87Z0JBQ1Q7WUFDRjtZQUNBLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0c7WUFDOUIsNkZBQTZGO1lBRTdGLG1FQUFtRTtZQUNuRSx5RUFBeUU7WUFDekUsY0FBYztZQUNkLGFBQWE7WUFDYixTQUFTO1lBQ1QsUUFBUTtZQUVOTCxJQUFJTSxPQUFPLEtBQUtELEtBQUs7Z0JBQUVFLFNBQVM7Z0JBQVdIO1lBQUs7UUFDbEQsMkZBQTJGO1FBQzNGLEVBQUUsT0FBT0ksT0FBTztZQUNkQyxRQUFRRCxNQUFNQTtZQUNkUixJQUFJTSxPQUFPLEtBQUtELEtBQUs7Z0JBQUVFLFNBQVM7WUFBd0I7UUFDMUQ7SUFDRixPQUFPO1FBQ0xQLElBQUlNLE9BQU8sS0FBS0QsS0FBSztZQUFFRSxTQUFTO1FBQXFCO0lBQ3ZEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2Vla3N0b3AvLi9wYWdlcy9hcGkvZGVsaXZlcnlzZXJ2aWNlL2NyZWF0ZUZlZS5qcz82OTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQW1iaWwgbmlsYWkgZmVlIGRhcmkgQVBJIFJhamFPbmdraXJcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkucmFqYW9uZ2tpci5jb20vc3RhcnRlci9jaXR5Jywge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdLZXknOiAnMzc2ZWYzMzYyYjZiM2VlNjdhZmY0YmMwNjQxZjRhYWQnLCAvLyBHYW50aSBkZW5nYW4gQVBJIEtleSBSYWphT25na2lyIEFuZGFcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgY29uc3QgZmVlID0gZGF0YS5mZWU7IC8vIEdhbnRpIGRlbmdhbiBwcm9wZXJ0aSB5YW5nIHNlc3VhaSBkZW5nYW4gcmVzcG9ucyBBUEkgUmFqYU9uZ2tpclxyXG5cclxuICAgIC8vICAgLy8gQnVhdCBlbnRyaSBiYXJ1IGRpIHRhYmVsIGRlbGl2ZXJ5c2VydmljZSBtZW5nZ3VuYWthbiBQcmlzbWFcclxuICAgIC8vICAgY29uc3QgY3JlYXRlZERlbGl2ZXJ5U2VydmljZSA9IGF3YWl0IHByaXNtYS5kZWxpdmVyeXNlcnZpY2UuY3JlYXRlKHtcclxuICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAvLyAgICAgICBmZWUsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdTdWNjZXNzJywgZGF0YSB9KTtcclxuICAgIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcycsIGRlbGl2ZXJ5U2VydmljZTogY3JlYXRlZERlbGl2ZXJ5U2VydmljZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZmV0Y2giLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/deliveryservice/createFee.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deliveryservice/createFee.js"));
module.exports = __webpack_exports__;

})();