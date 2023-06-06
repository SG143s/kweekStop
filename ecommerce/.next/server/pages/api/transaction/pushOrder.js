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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Import PrismaClient\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { userid , order_id , transaction_id , payment_type , status_code , gross_amount , items  } = req.body;\n        const status = \"paid\";\n        try {\n            const createPaymentDetails = await prisma.paymentdetails.create({\n                data: {\n                    id: transaction_id,\n                    total: gross_amount,\n                    status\n                }\n            });\n            const createPaymentService = await prisma.paymentservice.create({\n                data: {\n                    id: transaction_id,\n                    name: payment_type,\n                    fee: gross_amount\n                }\n            });\n            const createdOrder = await prisma.orders.create({\n                data: {\n                    id: order_id,\n                    userid,\n                    paydetid: transaction_id,\n                    payserviceid: transaction_id\n                }\n            });\n            res.status(200).json({\n                message: \"Success\",\n                order: createdOrder\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"Error\",\n                error: error.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24vcHVzaE9yZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFDdEIsTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxXQUFXLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRUMsZUFBYyxFQUFFQyxhQUFZLEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFQyxNQUFLLEVBQUUsR0FBR1QsSUFBSVU7UUFFakcsTUFBTUMsU0FBUztRQUVmLElBQUk7WUFDRixNQUFNQyx1QkFBdUIsTUFBTWQsT0FBT2UsZUFBZUMsT0FBTztnQkFDOURDLE1BQU07b0JBQ0pDLElBQUlYO29CQUNKWSxPQUFPVDtvQkFDUEc7Z0JBQ0Y7WUFDRjtZQUVBLE1BQU1PLHVCQUF1QixNQUFNcEIsT0FBT3FCLGVBQWVMLE9BQU87Z0JBQzlEQyxNQUFNO29CQUNKQyxJQUFJWDtvQkFDSmUsTUFBTWQ7b0JBQ05lLEtBQUtiO2dCQUNQO1lBQ0Y7WUFFQSxNQUFNYyxlQUFlLE1BQU14QixPQUFPeUIsT0FBT1QsT0FBTztnQkFDOUNDLE1BQU07b0JBQ0pDLElBQUlaO29CQUNKRDtvQkFDQXFCLFVBQVVuQjtvQkFDVm9CLGNBQWNwQjtnQkFDaEI7WUFDRjtZQUVBSixJQUFJVSxPQUFPLEtBQUtlLEtBQUs7Z0JBQUVDLFNBQVM7Z0JBQVdDLE9BQU9OO1lBQWE7UUFDakUsRUFBRSxPQUFPTyxPQUFPO1lBQ2Q1QixJQUFJVSxPQUFPLEtBQUtlLEtBQUs7Z0JBQUVDLFNBQVM7Z0JBQVNFLE9BQU9BLE1BQU1GO1lBQVE7UUFDaEU7SUFDRixPQUFPO1FBQ0wxQixJQUFJVSxPQUFPLEtBQUtlLEtBQUs7WUFBRUMsU0FBUztRQUFxQjtJQUN2RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dlZWtzdG9wLy4vcGFnZXMvYXBpL3RyYW5zYWN0aW9uL3B1c2hPcmRlci5qcz9hZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBQcmlzbWFDbGllbnRcclxuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoJ0BwcmlzbWEvY2xpZW50Jyk7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IHVzZXJpZCwgb3JkZXJfaWQsIHRyYW5zYWN0aW9uX2lkLCBwYXltZW50X3R5cGUsIHN0YXR1c19jb2RlLCBncm9zc19hbW91bnQsIGl0ZW1zIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXMgPSBcInBhaWRcIjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjcmVhdGVQYXltZW50RGV0YWlscyA9IGF3YWl0IHByaXNtYS5wYXltZW50ZGV0YWlscy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgIHRvdGFsOiBncm9zc19hbW91bnQsXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZVBheW1lbnRTZXJ2aWNlID0gYXdhaXQgcHJpc21hLnBheW1lbnRzZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgICAgbmFtZTogcGF5bWVudF90eXBlLFxyXG4gICAgICAgICAgZmVlOiBncm9zc19hbW91bnRcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZWRPcmRlciA9IGF3YWl0IHByaXNtYS5vcmRlcnMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogb3JkZXJfaWQsXHJcbiAgICAgICAgICB1c2VyaWQsXHJcbiAgICAgICAgICBwYXlkZXRpZDogdHJhbnNhY3Rpb25faWQsXHJcbiAgICAgICAgICBwYXlzZXJ2aWNlaWQ6IHRyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcycsIG9yZGVyOiBjcmVhdGVkT3JkZXIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvcicsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxdWlyZSIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyaWQiLCJvcmRlcl9pZCIsInRyYW5zYWN0aW9uX2lkIiwicGF5bWVudF90eXBlIiwic3RhdHVzX2NvZGUiLCJncm9zc19hbW91bnQiLCJpdGVtcyIsImJvZHkiLCJzdGF0dXMiLCJjcmVhdGVQYXltZW50RGV0YWlscyIsInBheW1lbnRkZXRhaWxzIiwiY3JlYXRlIiwiZGF0YSIsImlkIiwidG90YWwiLCJjcmVhdGVQYXltZW50U2VydmljZSIsInBheW1lbnRzZXJ2aWNlIiwibmFtZSIsImZlZSIsImNyZWF0ZWRPcmRlciIsIm9yZGVycyIsInBheWRldGlkIiwicGF5c2VydmljZWlkIiwianNvbiIsIm1lc3NhZ2UiLCJvcmRlciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction/pushOrder.js\n");

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