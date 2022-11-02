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
exports.id = "pages/api/saveValue";
exports.ids = ["pages/api/saveValue"];
exports.modules = {

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "(api)/./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/***/ ((module) => {

eval("// Update with your config settings.\n/**\n * @type { Object.<string, import(\"knex\").Knex.Config> }\n */ \nmodule.exports = {\n    development: {\n        client: \"sqlite3\",\n        connection: {\n            filename: \"./dev.sqlite3\",\n            useNullAsDefault: true\n        }\n    },\n    staging: {\n        client: \"postgresql\",\n        connection: {\n            database: \"my_db\",\n            user: \"username\",\n            password: \"password\"\n        },\n        pool: {\n            min: 2,\n            max: 10\n        },\n        migrations: {\n            tableName: \"knex_migrations\"\n        }\n    },\n    production: {\n        client: \"postgresql\",\n        connection: {\n            database: \"my_db\",\n            user: \"username\",\n            password: \"password\"\n        },\n        pool: {\n            min: 2,\n            max: 10\n        },\n        migrations: {\n            tableName: \"knex_migrations\"\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9rbmV4ZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFFcEM7O0NBRUMsR0FDREE7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7SUFDZkMsV0FBVyxFQUFFO1FBQ1hDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCQyxVQUFVLEVBQUU7WUFDVkMsUUFBUSxFQUFFLGVBQWU7WUFDekJDLGdCQUFnQixFQUFFLElBQUk7U0FDdkI7S0FDRjtJQUVEQyxPQUFPLEVBQUU7UUFDUEosTUFBTSxFQUFFLFlBQVk7UUFDcEJDLFVBQVUsRUFBRTtZQUNWSSxRQUFRLEVBQUUsT0FBTztZQUNqQkMsSUFBSSxFQUFFLFVBQVU7WUFDaEJDLFFBQVEsRUFBRSxVQUFVO1NBQ3JCO1FBQ0RDLElBQUksRUFBRTtZQUNKQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxHQUFHLEVBQUUsRUFBRTtTQUNSO1FBQ0RDLFVBQVUsRUFBRTtZQUNWQyxTQUFTLEVBQUUsaUJBQWlCO1NBQzdCO0tBQ0Y7SUFFREMsVUFBVSxFQUFFO1FBQ1ZiLE1BQU0sRUFBRSxZQUFZO1FBQ3BCQyxVQUFVLEVBQUU7WUFDVkksUUFBUSxFQUFFLE9BQU87WUFDakJDLElBQUksRUFBRSxVQUFVO1lBQ2hCQyxRQUFRLEVBQUUsVUFBVTtTQUNyQjtRQUNEQyxJQUFJLEVBQUU7WUFDSkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNEQyxVQUFVLEVBQUU7WUFDVkMsU0FBUyxFQUFFLGlCQUFpQjtTQUM3QjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmd1YWdlLXRhYmxlcy8uL2tuZXhmaWxlLmpzPzIzMzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXBkYXRlIHdpdGggeW91ciBjb25maWcgc2V0dGluZ3MuXG5cbi8qKlxuICogQHR5cGUgeyBPYmplY3QuPHN0cmluZywgaW1wb3J0KFwia25leFwiKS5LbmV4LkNvbmZpZz4gfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGV2ZWxvcG1lbnQ6IHtcbiAgICBjbGllbnQ6IFwic3FsaXRlM1wiLFxuICAgIGNvbm5lY3Rpb246IHtcbiAgICAgIGZpbGVuYW1lOiBcIi4vZGV2LnNxbGl0ZTNcIixcbiAgICAgIHVzZU51bGxBc0RlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBzdGFnaW5nOiB7XG4gICAgY2xpZW50OiBcInBvc3RncmVzcWxcIixcbiAgICBjb25uZWN0aW9uOiB7XG4gICAgICBkYXRhYmFzZTogXCJteV9kYlwiLFxuICAgICAgdXNlcjogXCJ1c2VybmFtZVwiLFxuICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcbiAgICB9LFxuICAgIHBvb2w6IHtcbiAgICAgIG1pbjogMixcbiAgICAgIG1heDogMTAsXG4gICAgfSxcbiAgICBtaWdyYXRpb25zOiB7XG4gICAgICB0YWJsZU5hbWU6IFwia25leF9taWdyYXRpb25zXCIsXG4gICAgfSxcbiAgfSxcblxuICBwcm9kdWN0aW9uOiB7XG4gICAgY2xpZW50OiBcInBvc3RncmVzcWxcIixcbiAgICBjb25uZWN0aW9uOiB7XG4gICAgICBkYXRhYmFzZTogXCJteV9kYlwiLFxuICAgICAgdXNlcjogXCJ1c2VybmFtZVwiLFxuICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcbiAgICB9LFxuICAgIHBvb2w6IHtcbiAgICAgIG1pbjogMixcbiAgICAgIG1heDogMTAsXG4gICAgfSxcbiAgICBtaWdyYXRpb25zOiB7XG4gICAgICB0YWJsZU5hbWU6IFwia25leF9taWdyYXRpb25zXCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwiY2xpZW50IiwiY29ubmVjdGlvbiIsImZpbGVuYW1lIiwidXNlTnVsbEFzRGVmYXVsdCIsInN0YWdpbmciLCJkYXRhYmFzZSIsInVzZXIiLCJwYXNzd29yZCIsInBvb2wiLCJtaW4iLCJtYXgiLCJtaWdyYXRpb25zIiwidGFibGVOYW1lIiwicHJvZHVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./knexfile.js\n");

/***/ }),

/***/ "(api)/./src/lib/backend/database-utils.js":
/*!*******************************************!*\
  !*** ./src/lib/backend/database-utils.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFunction\": () => (/* binding */ getFunction),\n/* harmony export */   \"saveFunction\": () => (/* binding */ saveFunction)\n/* harmony export */ });\n/* harmony import */ var _knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knex */ \"(api)/./src/lib/backend/knex.js\");\n/**\n * Backend databse utililty functions\n */ \nasync function saveFunction(user, crush) {\n    console.log(\"in save function\", user);\n    const review = await (0,_knex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"emailTable\").insert({\n        userEmail: user,\n        crushEmail: crush\n    });\n    return {\n        data: review\n    };\n}\nasync function getFunction(user) {\n    const review = await (0,_knex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"emailTable\").where({\n        userEmail: user\n    });\n    return review;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2JhY2tlbmQvZGF0YWJhc2UtdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0NBRUMsR0FFeUI7QUFFbkIsZUFBZUMsWUFBWSxDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtJQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVILElBQUksQ0FBQyxDQUFDO0lBQ3RDLE1BQU1JLE1BQU0sR0FBRyxNQUFNTixpREFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDTyxNQUFNLENBQUM7UUFDM0NDLFNBQVMsRUFBRU4sSUFBSTtRQUNmTyxVQUFVLEVBQUVOLEtBQUs7S0FDcEIsQ0FBQztJQUNGLE9BQU87UUFBRU8sSUFBSSxFQUFFSixNQUFNO0tBQUUsQ0FBQztBQUM1QixDQUFDO0FBRU0sZUFBZUssV0FBVyxDQUFDVCxJQUFJLEVBQUU7SUFDcEMsTUFBTUksTUFBTSxHQUFHLE1BQU1OLGlEQUFJLENBQUMsWUFBWSxDQUFDLENBQUNZLEtBQUssQ0FBQztRQUMxQ0osU0FBUyxFQUFFTixJQUFJO0tBQ2xCLENBQUM7SUFFRixPQUFPSSxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmd1YWdlLXRhYmxlcy8uL3NyYy9saWIvYmFja2VuZC9kYXRhYmFzZS11dGlscy5qcz9iMjgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFja2VuZCBkYXRhYnNlIHV0aWxpbHR5IGZ1bmN0aW9uc1xuICovXG5cbmltcG9ydCBrbmV4IGZyb20gXCIuL2tuZXhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVGdW5jdGlvbih1c2VyLCBjcnVzaCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW4gc2F2ZSBmdW5jdGlvblwiLCB1c2VyKTtcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBrbmV4KFwiZW1haWxUYWJsZVwiKS5pbnNlcnQoe1xuICAgICAgICB1c2VyRW1haWw6IHVzZXIsXG4gICAgICAgIGNydXNoRW1haWw6IGNydXNoLFxuICAgIH0pO1xuICAgIHJldHVybiB7IGRhdGE6IHJldmlldyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RnVuY3Rpb24odXNlcikge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IGtuZXgoXCJlbWFpbFRhYmxlXCIpLndoZXJlKHtcbiAgICAgICAgdXNlckVtYWlsOiB1c2VyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldmlldztcbn1cbiJdLCJuYW1lcyI6WyJrbmV4Iiwic2F2ZUZ1bmN0aW9uIiwidXNlciIsImNydXNoIiwiY29uc29sZSIsImxvZyIsInJldmlldyIsImluc2VydCIsInVzZXJFbWFpbCIsImNydXNoRW1haWwiLCJkYXRhIiwiZ2V0RnVuY3Rpb24iLCJ3aGVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/backend/database-utils.js\n");

/***/ }),

/***/ "(api)/./src/lib/backend/knex.js":
/*!*********************************!*\
  !*** ./src/lib/backend/knex.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _knexfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../knexfile.js */ \"(api)/./knexfile.js\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knex */ \"knex\");\n\n\nconst knex = knex__WEBPACK_IMPORTED_MODULE_1__(_knexfile_js__WEBPACK_IMPORTED_MODULE_0__[\"development\" || 0]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2JhY2tlbmQva25leC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDWDtBQUVuQyxNQUFNRSxJQUFJLEdBQUdELGlDQUFlLENBQzFCRCx5Q0FBVSxDQUFDRyxhQUpBLElBSXdCLENBQWEsQ0FBQyxDQUNsRDtBQUVELGlFQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5ndWFnZS10YWJsZXMvLi9zcmMvbGliL2JhY2tlbmQva25leC5qcz9mNjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbmV4Q29uZmlnIGZyb20gXCIuLi8uLi8uLi9rbmV4ZmlsZS5qc1wiO1xuaW1wb3J0IGtuZXhJbml0aWFsaXplciBmcm9tIFwia25leFwiO1xuXG5jb25zdCBrbmV4ID0ga25leEluaXRpYWxpemVyKFxuICBrbmV4Q29uZmlnW3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIl1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGtuZXg7Il0sIm5hbWVzIjpbImtuZXhDb25maWciLCJrbmV4SW5pdGlhbGl6ZXIiLCJrbmV4IiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/backend/knex.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/saveValue.js":
/*!************************************!*\
  !*** ./src/pages/api/saveValue.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_backend_database_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/backend/database-utils */ \"(api)/./src/lib/backend/database-utils.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst handler = async (req, res)=>{\n    try {\n        console.log(\"in saveValue\", req.body);\n        const data = await (0,_lib_backend_database_utils__WEBPACK_IMPORTED_MODULE_0__.saveFunction)(req.body.myName, req.body.crushName);\n        console.log(data);\n        res.status(200).end(JSON.stringify(data));\n    } catch (e) {\n        console.log(e);\n        res.status(500).end(\"Something went wrong\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NhdmVWYWx1ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUNiO0FBRWhFLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNoQyxJQUFJO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRUgsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNQyxJQUFJLEdBQUcsTUFBTVAseUVBQVksQ0FBQ0UsR0FBRyxDQUFDSSxJQUFJLENBQUNFLE1BQU0sRUFBRU4sR0FBRyxDQUFDSSxJQUFJLENBQUNHLFNBQVMsQ0FBQztRQUNwRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQ2xCSixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLE9BQU9PLENBQUMsRUFBRTtRQUNSVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsQ0FBQyxDQUFDLENBQUM7UUFDZlgsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVWLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmd1YWdlLXRhYmxlcy8uL3NyYy9wYWdlcy9hcGkvc2F2ZVZhbHVlLmpzPzE5NjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IHNhdmVGdW5jdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvYmFja2VuZC9kYXRhYmFzZS11dGlsc1wiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBzYXZlVmFsdWVcIiwgcmVxLmJvZHkpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2F2ZUZ1bmN0aW9uKHJlcS5ib2R5Lm15TmFtZSwgcmVxLmJvZHkuY3J1c2hOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbInNhdmVGdW5jdGlvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImRhdGEiLCJteU5hbWUiLCJjcnVzaE5hbWUiLCJzdGF0dXMiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/saveValue.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/saveValue.js"));
module.exports = __webpack_exports__;

})();