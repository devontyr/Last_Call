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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/NavBar.module.css":
/*!******************************************!*\
  !*** ./src/components/NavBar.module.css ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navBarStyle\": \"NavBar_navBarStyle__WWT9Q\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmd1YWdlLXRhYmxlcy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5tb2R1bGUuY3NzPzY0NDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2QmFyU3R5bGVcIjogXCJOYXZCYXJfbmF2QmFyU3R5bGVfX1dXVDlRXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.module.css\n");

/***/ }),

/***/ "./src/styles/Home.module.scss":
/*!*************************************!*\
  !*** ./src/styles/Home.module.scss ***!
  \*************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmd1YWdlLXRhYmxlcy8uL3NyYy9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz80ZTE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/Home.module.scss\n");

/***/ }),

/***/ "./src/components/Login.jsx":
/*!**********************************!*\
  !*** ./src/components/Login.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-oauth/google */ \"@react-oauth/google\");\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);\n// import { GoogleLogin } from 'react-google-login';\n// import { gapi } from 'gapi-script';\n\n\n\n\nfunction Login(props) {\n    const childRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { 0: childState , 1: setChildState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleChange(e) {\n        // console.log()\n        props.setName(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n            onSuccess: (credentialResponse)=>{\n                console.log(credentialResponse);\n                var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(credentialResponse.credential);\n                console.log(decoded.name);\n                handleChange(decoded.name);\n            // props.setSignedIn(true)\n            },\n            onError: ()=>{\n                console.log(\"Login Failed\");\n            }\n        }, void 0, false, {\n            fileName: \"/Users/desktop/Coding/Last_Call/src/components/Login.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/components/Login.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW9EO0FBQ3BELHNDQUFzQztBQUN0QztBQUF3RTtBQUN0QjtBQUNkO0FBRXBDLFNBQVNPLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO0lBQ2xCLE1BQU1DLFFBQVEsR0FBR04sNkNBQU0sRUFBRTtJQUN6QixNQUFNLEtBQUNPLFVBQVUsTUFBRUMsYUFBYSxNQUFJUCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUUvQyxTQUFTUSxZQUFZLENBQUNDLENBQUMsRUFBRTtRQUNyQixnQkFBZ0I7UUFDaEJMLEtBQUssQ0FBQ00sT0FBTyxDQUFDRCxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QscUJBQ0ksOERBQUNFLEtBQUc7a0JBQ0EsNEVBQUNWLDREQUFXO1lBQ1JXLFNBQVMsRUFBRSxDQUFDQyxrQkFBa0IsR0FBSztnQkFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJRyxPQUFPLEdBQUdkLGlEQUFVLENBQUNXLGtCQUFrQixDQUFDSSxVQUFVLENBQUM7Z0JBQ3ZESCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDRSxJQUFJLENBQUMsQ0FBQztnQkFDMUJWLFlBQVksQ0FBQ1EsT0FBTyxDQUFDRSxJQUFJLENBQUMsQ0FBQztZQUMzQiwwQkFBMEI7WUFDOUIsQ0FBQztZQUNEQyxPQUFPLEVBQUUsSUFBTTtnQkFDWEwsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEMsQ0FBQzs7Ozs7Z0JBQ0g7Ozs7O1lBQ0EsQ0FDUjtBQUNOLENBQUM7QUFFRCxpRUFBZVosS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL2NvbXBvbmVudHMvTG9naW4uanN4PzI5ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xuLy8gaW1wb3J0IHsgZ2FwaSB9IGZyb20gJ2dhcGktc2NyaXB0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gXCJAcmVhY3Qtb2F1dGgvZ29vZ2xlXCI7XG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICAgIGNvbnN0IGNoaWxkUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2NoaWxkU3RhdGUsIHNldENoaWxkU3RhdGVdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgIHByb3BzLnNldE5hbWUoZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9eyhjcmVkZW50aWFsUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlZGVudGlhbFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY29kZWQgPSBqd3RfZGVjb2RlKGNyZWRlbnRpYWxSZXNwb25zZS5jcmVkZW50aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVjb2RlZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGRlY29kZWQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByb3BzLnNldFNpZ25lZEluKHRydWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkVycm9yPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gRmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJHb29nbGVMb2dpbiIsImp3dF9kZWNvZGUiLCJMb2dpbiIsInByb3BzIiwiY2hpbGRSZWYiLCJjaGlsZFN0YXRlIiwic2V0Q2hpbGRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXROYW1lIiwiZGl2Iiwib25TdWNjZXNzIiwiY3JlZGVudGlhbFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRlY29kZWQiLCJjcmVkZW50aWFsIiwibmFtZSIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Login.jsx\n");

/***/ }),

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.css */ \"./src/components/NavBar.module.css\");\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction NavBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navBarStyle),\n        children: \"this is the nav bar\"\n    }, void 0, false, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/components/NavBar.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFFeEMsU0FBU0MsTUFBTSxHQUFHO0lBQ2QscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFSCx1RUFBa0I7a0JBQUUscUJBQW1COzs7OztZQUFNLENBQ2hFO0FBQ0wsQ0FBQztBQUVELGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85MTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2QmFyLm1vZHVsZS5jc3NcIlxuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJhclN0eWxlfT50aGlzIGlzIHRoZSBuYXYgYmFyPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsic3R5bGVzIiwiTmF2QmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2QmFyU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ \"react-select\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.jsx\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login */ \"./src/components/Login.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction Home() {\n    const { 0: crushName , 1: setCrushName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: isSignedIn , 1: setSignedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: recievedName , 1: setRecievedName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: myName , 1: setMyName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"n/a\");\n    const saveCrush = async ()=>{\n        const response = await fetch(\"/api/saveValue\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                myName: myName,\n                crushName: crushName\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        getCrushList();\n        return data;\n    };\n    const getCrushList = async ()=>{\n        const response = await fetch(\"/api/getValue\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                user: myName\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        setRecievedName(data);\n        return data;\n    };\n    const handleCrushName = (e)=>{\n        console.log(e.target.value);\n        setCrushName(e.target.value);\n    };\n    const setNameFunction = (name)=>{\n        setMyName(name);\n        getCrushList();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            myName == \"n/a\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" \",\n                    \"Please sign in:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        setName: setNameFunction,\n                        setSignedIn: setSignedIn\n                    }, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: myName\n            }, void 0, false, {\n                fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    \"Crush Name: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleCrushName\n                    }, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>saveCrush(),\n                        children: \"Save Crush\"\n                    }, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    \"Your Crushes:\",\n                    recievedName != undefined ? recievedName.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                value.crushEmail,\n                                \" \"\n                            ]\n                        }, value.id, true, {\n                            fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 27\n                        }, this)) : \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2EsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFLElBQU01QixTQUFTLEVBQUU7a0NBQUUsWUFBVTs7Ozs7NEJBQVM7a0NBQ3ZELDhEQUFDd0IsSUFBRTs7Ozs0QkFBTTtrQ0FDVCw4REFBQ0EsSUFBRTs7Ozs0QkFBTTtvQkFBQSxlQUVUO29CQUFDNUIsWUFBWSxJQUFJaUMsU0FBUyxHQUNwQmpDLFlBQVksQ0FBQ2tDLEdBQUcsQ0FBQyxDQUFDYixLQUFLLGlCQUNuQiw4REFBQ0csS0FBRzs7Z0NBQWdCLEdBQUM7Z0NBQUNILEtBQUssQ0FBQ2MsVUFBVTtnQ0FBQyxHQUFDOzsyQkFBOUJkLEtBQUssQ0FBQ2UsRUFBRTs7OztnQ0FBNEIsQ0FDaEQsR0FDRixHQUFHOzs7Ozs7b0JBQ1A7Ozs7OztZQUNKLENBQ1I7QUFDTixDQUFDO0FBRUQsaUVBQWV6QyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5ndWFnZS10YWJsZXMvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtjcnVzaE5hbWUsIHNldENydXNoTmFtZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtpc1NpZ25lZEluLCBzZXRTaWduZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlY2lldmVkTmFtZSwgc2V0UmVjaWV2ZWROYW1lXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbXlOYW1lLCBzZXRNeU5hbWVdID0gdXNlU3RhdGUoXCJuL2FcIik7XG5cbiAgICBjb25zdCBzYXZlQ3J1c2ggPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3NhdmVWYWx1ZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG15TmFtZTogbXlOYW1lLFxuICAgICAgICAgICAgICAgIGNydXNoTmFtZTogY3J1c2hOYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGdldENydXNoTGlzdCgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q3J1c2hMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZXRWYWx1ZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXI6IG15TmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRSZWNpZXZlZE5hbWUoZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDcnVzaE5hbWUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldENydXNoTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE5hbWVGdW5jdGlvbiA9IChuYW1lKSA9PiB7XG4gICAgICAgIHNldE15TmFtZShuYW1lKTtcbiAgICAgICAgZ2V0Q3J1c2hMaXN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogdGVybmFyeSBleHByZXNzaW9uIGlmKG15TmFtZSA9IG4vYSksIHRoZW4gc2hvdyBsb2dpbiBidXR0b24sIGVsc2UsIHNob3cgbmFtZSBvZiB1c2VyIGxvZ2dlZCBpbiAqL31cbiAgICAgICAgICAgIHtteU5hbWUgPT0gXCJuL2FcIiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBzaWduIGluOlxuICAgICAgICAgICAgICAgICAgICA8TG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9e3NldE5hbWVGdW5jdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpZ25lZEluPXtzZXRTaWduZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdj57bXlOYW1lfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICBDcnVzaCBOYW1lOiA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNydXNoTmFtZX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNhdmVDcnVzaCgpfT5TYXZlIENydXNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgWW91ciBDcnVzaGVzOlxuICAgICAgICAgICAgICAgIHtyZWNpZXZlZE5hbWUgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gcmVjaWV2ZWROYW1lLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3ZhbHVlLmlkfT4ge3ZhbHVlLmNydXNoRW1haWx9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIDogXCIgXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VGb3JtIiwiQ29udHJvbGxlciIsIkhlYWQiLCJTZWxlY3QiLCJzdHlsZXMiLCJOYXZCYXIiLCJMb2dpbiIsIkhvbWUiLCJjcnVzaE5hbWUiLCJzZXRDcnVzaE5hbWUiLCJpc1NpZ25lZEluIiwic2V0U2lnbmVkSW4iLCJyZWNpZXZlZE5hbWUiLCJzZXRSZWNpZXZlZE5hbWUiLCJteU5hbWUiLCJzZXRNeU5hbWUiLCJzYXZlQ3J1c2giLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0Q3J1c2hMaXN0IiwidXNlciIsImhhbmRsZUNydXNoTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldE5hbWVGdW5jdGlvbiIsIm5hbWUiLCJkaXYiLCJzZXROYW1lIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYnIiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCIsIm1hcCIsImNydXNoRW1haWwiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "@react-oauth/google":
/*!**************************************!*\
  !*** external "@react-oauth/google" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();