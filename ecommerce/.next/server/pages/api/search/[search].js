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
exports.id = "pages/api/search/[search]";
exports.ids = ["pages/api/search/[search]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/search/[search].js":
/*!**************************************!*\
  !*** ./pages/api/search/[search].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { search  } = req.query;\n        const products = await prisma.product.findMany({\n            where: {\n                productname: {\n                    contains: search\n                }\n            },\n            include: {\n                categoryprod: {\n                    include: {\n                        category: true\n                    }\n                },\n                productimg: true\n            }\n        });\n        console.log(products);\n        if (products.length > 0) {\n            console.log(\"cari cari: \", products);\n            return res.status(200).json(products);\n        } else {\n            return res.status(401).json({\n                error: \"Invalid name\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Error executing raw query:\", error);\n        res.status(500).json({\n            message: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoL1tzZWFyY2hdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLGFBQVksRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUNqQyxNQUFNQyxTQUFTLElBQUlGO0FBRUosZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUk7UUFDQSxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRixJQUFJRztRQUV2QixNQUFNQyxXQUFXLE1BQU1OLE9BQU9PLFFBQVFDLFNBQVM7WUFDN0NDLE9BQU87Z0JBQ0xDLGFBQWE7b0JBQ1hDLFVBQVVQO2dCQUNaO1lBQ0Y7WUFDQVEsU0FBUztnQkFDUEMsY0FBYztvQkFDWkQsU0FBUzt3QkFDUEUsVUFBVTtvQkFDWjtnQkFDRjtnQkFDQUMsWUFBWTtZQUNkO1FBQ0Y7UUFFQUMsUUFBUUMsSUFBSVg7UUFFWixJQUFJQSxTQUFTWSxTQUFTLEdBQUc7WUFDckJGLFFBQVFDLElBQUksZUFBZVg7WUFDN0IsT0FBT0gsSUFBSWdCLE9BQU8sS0FBS0MsS0FBS2Q7UUFDOUIsT0FBTztZQUNMLE9BQU9ILElBQUlnQixPQUFPLEtBQUtDLEtBQUs7Z0JBQUVDLE9BQU87WUFBZTtRQUN0RDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkTCxRQUFRSyxNQUFNLDhCQUE4QkE7UUFDNUNsQixJQUFJZ0IsT0FBTyxLQUFLQyxLQUFLO1lBQUVFLFNBQVM7UUFBd0I7SUFDMUQsU0FBVTtRQUNSLE1BQU10QixPQUFPdUI7SUFDZjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL3NlYXJjaC9bc2VhcmNoXS5qcz8xZjYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgc2VhcmNoIH0gPSByZXEucXVlcnk7IFxyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RuYW1lOiB7XHJcbiAgICAgICAgICAgICAgY29udGFpbnM6IHNlYXJjaCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5cHJvZDoge1xyXG4gICAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RpbWc6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcmkgY2FyaTogXCIsIHByb2R1Y3RzKVxyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIG5hbWUnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleGVjdXRpbmcgcmF3IHF1ZXJ5OicsIGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgICB9XHJcbiAgfSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlYXJjaCIsInF1ZXJ5IiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInByb2R1Y3RuYW1lIiwiY29udGFpbnMiLCJpbmNsdWRlIiwiY2F0ZWdvcnlwcm9kIiwiY2F0ZWdvcnkiLCJwcm9kdWN0aW1nIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/search/[search].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search/[search].js"));
module.exports = __webpack_exports__;

})();