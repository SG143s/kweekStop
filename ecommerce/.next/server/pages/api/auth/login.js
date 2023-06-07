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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n    try {\n        const { username , password  } = req.body;\n        const user = await prisma.users.findFirst({\n            where: {\n                username,\n                password\n            }\n        });\n        if (user) {\n            return res.status(200).json(user);\n        } else {\n            return res.status(401).json({\n                error: \"Invalid credentials\"\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n} // import fetch from 'node-fetch';\n // export default async function handler(req, res) {\n //   try {\n //     // const { luname, lpass } = req.body;\n //     const { username, password } = req.body;\n //     const luname = username;\n //     const lpass = password;\n //     const apiUrl = 'http://localhost:8000/login';\n //     const response = await fetch(apiUrl, {\n //       method: 'POST',\n //       body: JSON.stringify({\n //         \"luname\": \"bmulrooney8\",\n //         \"lpass\": \"MoQ7tnc7\"\n //     }),\n //       headers: {\n //         'Content-Type': 'application/json',\n //       },\n //     });\n //     if (response.ok) {\n //       const data = await response.json();\n //       console.log(\"datarrrrrrrr:\", data.profile)\n //       return res.status(200).json(data);\n //     } else {\n //       const errorData = await response.json();\n //       return res.status(401).json({ error: errorData.error });\n //     }\n //   } catch (error) {\n //     console.error(error);\n //     return res.status(500).json({ error: 'Internal Server Error' });\n //   }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsTUFBTUMsU0FBUyxJQUFJRjtBQUVKLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHSCxJQUFJSTtRQUVuQyxNQUFNQyxPQUFPLE1BQU1QLE9BQU9RLE1BQU1DLFVBQVU7WUFDeENDLE9BQU87Z0JBQ0xOO2dCQUNBQztZQUNGO1FBQ0Y7UUFFQSxJQUFJRSxNQUFNO1lBQ1IsT0FBT0osSUFBSVEsT0FBTyxLQUFLQyxLQUFLTDtRQUM5QixPQUFPO1lBQ0wsT0FBT0osSUFBSVEsT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxPQUFPO1lBQXNCO1FBQzdEO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBQ2RDLFFBQVFELE1BQU1BO1FBQ2QsT0FBT1YsSUFBSVEsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE9BQU87UUFBd0I7SUFDL0QsU0FBVTtRQUNSLE1BQU1iLE9BQU9lO0lBQ2Y7QUFDRixFQUVBLGtDQUFrQztDQUVsQyxvREFBb0Q7Q0FDcEQsVUFBVTtDQUNWLDZDQUE2QztDQUM3QywrQ0FBK0M7Q0FDL0MsK0JBQStCO0NBQy9CLDhCQUE4QjtDQUU5QixvREFBb0Q7Q0FFcEQsNkNBQTZDO0NBQzdDLHdCQUF3QjtDQUN4QiwrQkFBK0I7Q0FDL0IsbUNBQW1DO0NBQ25DLDhCQUE4QjtDQUM5QixVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLDhDQUE4QztDQUM5QyxXQUFXO0NBQ1gsVUFBVTtDQUVWLHlCQUF5QjtDQUN6Qiw0Q0FBNEM7Q0FDNUMsbURBQW1EO0NBQ25ELDJDQUEyQztDQUMzQyxlQUFlO0NBQ2YsaURBQWlEO0NBQ2pELGlFQUFpRTtDQUNqRSxRQUFRO0NBQ1Isc0JBQXNCO0NBQ3RCLDRCQUE0QjtDQUM1Qix1RUFBdUU7Q0FDdkUsTUFBTTtDQUNOLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2Vla3N0b3AvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcz8xMzE3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTsgXHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlcnMuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIC8vIGNvbnN0IHsgbHVuYW1lLCBscGFzcyB9ID0gcmVxLmJvZHk7XHJcbi8vICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbi8vICAgICBjb25zdCBsdW5hbWUgPSB1c2VybmFtZTtcclxuLy8gICAgIGNvbnN0IGxwYXNzID0gcGFzc3dvcmQ7XHJcblxyXG4vLyAgICAgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbic7XHJcblxyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuLy8gICAgICAgICBcImx1bmFtZVwiOiBcImJtdWxyb29uZXk4XCIsXHJcbi8vICAgICAgICAgXCJscGFzc1wiOiBcIk1vUTd0bmM3XCJcclxuLy8gICAgIH0pLFxyXG4vLyAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4vLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImRhdGFycnJycnJycjpcIiwgZGF0YS5wcm9maWxlKVxyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBlcnJvckRhdGEuZXJyb3IgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsInVzZXJzIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

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