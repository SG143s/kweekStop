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
exports.id = "pages/api/transaction/pushOrder";
exports.ids = ["pages/api/transaction/pushOrder"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/transaction/pushOrder.js":
/*!********************************************!*\
  !*** ./pages/api/transaction/pushOrder.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Import PrismaClient\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { userid , order_id , transaction_id , payment_type , status_code , gross_amount  } = req.body;\n        const status = \"paid\";\n        try {\n            const createPaymentDetails = await prisma.paymentdetails.create({\n                data: {\n                    id: transaction_id,\n                    total: gross_amount,\n                    status\n                }\n            });\n            const createPaymentService = await prisma.paymentservice.create({\n                data: {\n                    id: transaction_id,\n                    name: payment_type,\n                    fee: gross_amount\n                }\n            });\n            const createdOrder = await prisma.orders.create({\n                data: {\n                    id: order_id,\n                    userid,\n                    paydetid: transaction_id,\n                    payserviceid: transaction_id\n                }\n            });\n            res.status(200).json({\n                message: \"Success\",\n                order: createdOrder\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"Error\",\n                error: error.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vcHVzaE9yZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFDdEIsTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxXQUFXLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRUMsZUFBYyxFQUFFQyxhQUFZLEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFLEdBQUdSLElBQUlTO1FBRTFGLE1BQU1DLFNBQVM7UUFFZixJQUFJO1lBQ0YsTUFBTUMsdUJBQXVCLE1BQU1iLE9BQU9jLGVBQWVDLE9BQU87Z0JBQzlEQyxNQUFNO29CQUNKQyxJQUFJVjtvQkFDSlcsT0FBT1I7b0JBQ1BFO2dCQUNGO1lBQ0Y7WUFFQSxNQUFNTyx1QkFBdUIsTUFBTW5CLE9BQU9vQixlQUFlTCxPQUFPO2dCQUM5REMsTUFBTTtvQkFDSkMsSUFBSVY7b0JBQ0pjLE1BQU1iO29CQUNOYyxLQUFLWjtnQkFDUDtZQUNGO1lBRUEsTUFBTWEsZUFBZSxNQUFNdkIsT0FBT3dCLE9BQU9ULE9BQU87Z0JBQzlDQyxNQUFNO29CQUNKQyxJQUFJWDtvQkFDSkQ7b0JBQ0FvQixVQUFVbEI7b0JBQ1ZtQixjQUFjbkI7Z0JBQ2hCO1lBQ0Y7WUFFQUosSUFBSVMsT0FBTyxLQUFLZSxLQUFLO2dCQUFFQyxTQUFTO2dCQUFXQyxPQUFPTjtZQUFhO1FBQ2pFLEVBQUUsT0FBT08sT0FBTztZQUNkM0IsSUFBSVMsT0FBTyxLQUFLZSxLQUFLO2dCQUFFQyxTQUFTO2dCQUFTRSxPQUFPQSxNQUFNRjtZQUFRO1FBQ2hFO0lBQ0YsT0FBTztRQUNMekIsSUFBSVMsT0FBTyxLQUFLZSxLQUFLO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2t3ZWVrc3RvcC8uL3BhZ2VzL2FwaS90cmFuc2FjdGlvbi9wdXNoT3JkZXIuanM/YWU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgUHJpc21hQ2xpZW50XHJcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyB1c2VyaWQsIG9yZGVyX2lkLCB0cmFuc2FjdGlvbl9pZCwgcGF5bWVudF90eXBlLCBzdGF0dXNfY29kZSwgZ3Jvc3NfYW1vdW50IH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXMgPSBcInBhaWRcIjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjcmVhdGVQYXltZW50RGV0YWlscyA9IGF3YWl0IHByaXNtYS5wYXltZW50ZGV0YWlscy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgIHRvdGFsOiBncm9zc19hbW91bnQsXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZVBheW1lbnRTZXJ2aWNlID0gYXdhaXQgcHJpc21hLnBheW1lbnRzZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgICAgbmFtZTogcGF5bWVudF90eXBlLFxyXG4gICAgICAgICAgZmVlOiBncm9zc19hbW91bnRcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZWRPcmRlciA9IGF3YWl0IHByaXNtYS5vcmRlcnMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogb3JkZXJfaWQsXHJcbiAgICAgICAgICB1c2VyaWQsXHJcbiAgICAgICAgICBwYXlkZXRpZDogdHJhbnNhY3Rpb25faWQsXHJcbiAgICAgICAgICBwYXlzZXJ2aWNlaWQ6IHRyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcycsIG9yZGVyOiBjcmVhdGVkT3JkZXIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvcicsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxdWlyZSIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyaWQiLCJvcmRlcl9pZCIsInRyYW5zYWN0aW9uX2lkIiwicGF5bWVudF90eXBlIiwic3RhdHVzX2NvZGUiLCJncm9zc19hbW91bnQiLCJib2R5Iiwic3RhdHVzIiwiY3JlYXRlUGF5bWVudERldGFpbHMiLCJwYXltZW50ZGV0YWlscyIsImNyZWF0ZSIsImRhdGEiLCJpZCIsInRvdGFsIiwiY3JlYXRlUGF5bWVudFNlcnZpY2UiLCJwYXltZW50c2VydmljZSIsIm5hbWUiLCJmZWUiLCJjcmVhdGVkT3JkZXIiLCJvcmRlcnMiLCJwYXlkZXRpZCIsInBheXNlcnZpY2VpZCIsImpzb24iLCJtZXNzYWdlIiwib3JkZXIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction/pushOrder.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction/pushOrder.js"));
module.exports = __webpack_exports__;

})();