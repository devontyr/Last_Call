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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import { gapi } from 'gapi-script';\n\nfunction Login() {\n    const handleLogin = async (googleData)=>{\n        const res = await fetch(\"/api/v1/auth/google\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                token: googleData.tokenId\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n    // store returned user somehow\n    };\n    // useEffect(() => {\n    // const initClient = () => {\n    //         gapi.client.init({\n    //         clientId: clientId,\n    //         scope: ''\n    //     });\n    //     };\n    //     gapi.load('client:auth2', initClient);\n    // });\n    // const onSuccess = (res) => {\n    //     console.log('success:', res);\n    // };\n    // const onFailure = (err) => {\n    //     console.log('failed:', err);\n    // };\n    return(// <GoogleLogin\n    //     clientId={clientId}\n    //     buttonText=\"Sign in with Google\"\n    //     onSuccess={onSuccess}\n    //     onFailure={onFailure}\n    //     cookiePolicy={'single_host_origin'}\n    //     isSignedIn={true}\n    // />\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {\n            clientId: \"596749184708-9paaqi0f7cqqqrd1tv1iht4kk6hb280b.apps.googleusercontent.com\",\n            buttonText: \"Log in with Google\",\n            onSuccess: handleLogin,\n            onFailure: handleLogin,\n            cookiePolicy: 'single_host_origin'\n        }, void 0, false, {\n            fileName: \"/Users/desktop/Coding/Last_Call/src/components/Login.jsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/components/Login.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQsRUFBc0M7QUFDQTtTQUc3QkcsS0FBSyxHQUFHLENBQUM7SUFDZCxLQUFLLENBQUNDLFdBQVcsVUFBU0MsVUFBVSxHQUFJLENBQUM7UUFDckMsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBcUIsc0JBQUUsQ0FBQztZQUM1Q0MsTUFBTSxFQUFFLENBQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QkMsS0FBSyxFQUFFUCxVQUFVLENBQUNRLE9BQU87WUFDM0IsQ0FBQztZQUNEQyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztRQUNILENBQUM7UUFDRCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNULEdBQUcsQ0FBQ1UsSUFBSTtJQUMzQixFQUE4QjtJQUNoQyxDQUFDO0lBQ0gsRUFBb0I7SUFDcEIsRUFBNkI7SUFDN0IsRUFBNkI7SUFDN0IsRUFBOEI7SUFDOUIsRUFBb0I7SUFDcEIsRUFBVTtJQUNWLEVBQVM7SUFDVCxFQUE2QztJQUM3QyxFQUFNO0lBR04sRUFBK0I7SUFDL0IsRUFBb0M7SUFDcEMsRUFBSztJQUNMLEVBQStCO0lBQy9CLEVBQW1DO0lBQ25DLEVBQUs7SUFFTCxNQUFNLENBQ04sRUFBZTtJQUNmLEVBQTBCO0lBQzFCLEVBQXVDO0lBQ3ZDLEVBQTRCO0lBQzVCLEVBQTRCO0lBQzVCLEVBQTBDO0lBQzFDLEVBQXdCO0lBQ3hCLEVBQUs7Z0ZBQ0pDLENBQUc7OEZBQ0hqQiwyREFBVztZQUNaa0IsUUFBUSxFQUFDLENBQTBFO1lBQ25GQyxVQUFVLEVBQUMsQ0FBb0I7WUFDL0JDLFNBQVMsRUFBRWhCLFdBQVc7WUFDdEJpQixTQUFTLEVBQUVqQixXQUFXO1lBQ3RCa0IsWUFBWSxFQUFFLENBQW9COzs7Ozs7Ozs7OztBQU10QyxDQUFDO0FBRUQsaUVBQWVuQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5ndWFnZS10YWJsZXMvLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3g/MjllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG4vLyBpbXBvcnQgeyBnYXBpIH0gZnJvbSAnZ2FwaS1zY3JpcHQnO1xuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyBnb29nbGVEYXRhID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3YxL2F1dGgvZ29vZ2xlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0b2tlbjogZ29vZ2xlRGF0YS50b2tlbklkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIC8vIHN0b3JlIHJldHVybmVkIHVzZXIgc29tZWhvd1xuICAgICAgfVxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgaW5pdENsaWVudCA9ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGdhcGkuY2xpZW50LmluaXQoe1xuICAgIC8vICAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxuICAgIC8vICAgICAgICAgc2NvcGU6ICcnXG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB9O1xuICAgIC8vICAgICBnYXBpLmxvYWQoJ2NsaWVudDphdXRoMicsIGluaXRDbGllbnQpO1xuICAgIC8vIH0pO1xuXG5cbiAgICAvLyBjb25zdCBvblN1Y2Nlc3MgPSAocmVzKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzOicsIHJlcyk7XG4gICAgLy8gfTtcbiAgICAvLyBjb25zdCBvbkZhaWx1cmUgPSAoZXJyKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdmYWlsZWQ6JywgZXJyKTtcbiAgICAvLyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAvLyA8R29vZ2xlTG9naW5cbiAgICAvLyAgICAgY2xpZW50SWQ9e2NsaWVudElkfVxuICAgIC8vICAgICBidXR0b25UZXh0PVwiU2lnbiBpbiB3aXRoIEdvb2dsZVwiXG4gICAgLy8gICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuICAgIC8vICAgICBvbkZhaWx1cmU9e29uRmFpbHVyZX1cbiAgICAvLyAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAvLyAgICAgaXNTaWduZWRJbj17dHJ1ZX1cbiAgICAvLyAvPlxuICAgIDxkaXY+XG4gICAgPEdvb2dsZUxvZ2luXG4gICAgY2xpZW50SWQ9XCI1OTY3NDkxODQ3MDgtOXBhYXFpMGY3Y3FxcXJkMXR2MWlodDRrazZoYjI4MGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgIGJ1dHRvblRleHQ9XCJMb2cgaW4gd2l0aCBHb29nbGVcIlxuICAgIG9uU3VjY2Vzcz17aGFuZGxlTG9naW59XG4gICAgb25GYWlsdXJlPXtoYW5kbGVMb2dpbn1cbiAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuLz5cblxuPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwiTG9naW4iLCJoYW5kbGVMb2dpbiIsImdvb2dsZURhdGEiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJ0b2tlbklkIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xpZW50SWQiLCJidXR0b25UZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiY29va2llUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Login.jsx\n");

/***/ }),

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.css */ \"./src/components/NavBar.module.css\");\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction NavBar() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navBarStyle),\n        children: \"this is the nav bar\"\n    }, void 0, false, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/components/NavBar.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztTQUUvQkMsTUFBTSxHQUFHLENBQUM7SUFDZixNQUFNLDZFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUgsdUVBQWtCO2tCQUFFLENBQW1COzs7Ozs7QUFFL0QsQ0FBQztBQUVELGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzeD85MTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2QmFyLm1vZHVsZS5jc3NcIlxuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkJhclN0eWxlfT50aGlzIGlzIHRoZSBuYXYgYmFyPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsic3R5bGVzIiwiTmF2QmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2QmFyU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ \"react-select\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.jsx\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login */ \"./src/components/Login.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction Home() {\n    const { 0: currentName , 1: setCurrentName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: recievedName , 1: setRecievedName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const saveUserName = async ()=>{\n        const response = await fetch(\"/api/saveValue\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                bodyData: {\n                    currentName\n                }\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        return data;\n    };\n    const getUserName = async ()=>{\n        const response = await fetch(\"/api/getValue\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                value: {\n                    currentName\n                }\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n        setRecievedName(data);\n        return data;\n    };\n    function handleInputChange(e) {\n        setCurrentName(e.target.value);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    \"DEMO\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>saveUserName()\n                        ,\n                        children: \" Set name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getUserName()\n                        ,\n                        children: \" Get name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, this),\n                    recievedName != undefined ? recievedName.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                value.exampleColumn,\n                                \" \"\n                            ]\n                        }, value.id, true, {\n                            fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 64\n                        }, this)\n                    ) : \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/pages/index.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNHO0FBQ3pCO0FBQ0s7QUFDYztBQUNOO0FBQ0Y7U0FHOUJVLElBQUksR0FBRyxDQUFDO0lBRWYsS0FBSyxNQUFFQyxXQUFXLE1BQUVDLGNBQWMsTUFBSVgsK0NBQVE7SUFDOUMsS0FBSyxNQUFFWSxZQUFZLE1BQUVDLGVBQWUsTUFBSWIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFbkQsS0FBSyxDQUFDYyxZQUFZLGFBQWUsQ0FBQztRQUNoQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFnQixpQkFBRSxDQUFDO1lBQzlDQyxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7Z0JBQ3BCQyxRQUFRLEVBQUUsQ0FBQ1g7b0JBQUFBLFdBQVc7Z0JBQUEsQ0FBQztZQUN6QixDQUFDO1lBQ0RZLE9BQU8sRUFBRSxDQUFDO2dCQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1IsUUFBUSxDQUFDUyxJQUFJO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtRQUNoQixNQUFNLENBQUNBLElBQUk7SUFFYixDQUFDO0lBR0QsS0FBSyxDQUFDSSxXQUFXLGFBQWUsQ0FBQztRQUMvQixLQUFLLENBQUNaLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFlLGdCQUFFLENBQUM7WUFDN0NDLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztnQkFDcEJRLEtBQUssRUFBRSxDQUFDbEI7b0JBQUFBLFdBQVc7Z0JBQUEsQ0FBQztZQUN0QixDQUFDO1lBQ0RZLE9BQU8sRUFBRSxDQUFDO2dCQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1IsUUFBUSxDQUFDUyxJQUFJO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSTtRQUNoQlYsZUFBZSxDQUFDVSxJQUFJO1FBQ3BCLE1BQU0sQ0FBQ0EsSUFBSTtJQUViLENBQUM7YUFFUU0saUJBQWlCLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQzdCbkIsY0FBYyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7SUFDL0IsQ0FBQztJQUdELE1BQU0sNkVBQ0hJLENBQUc7O3dGQUlEQSxDQUFHO2dCQUFDQyxTQUFTLEVBQUUzQiwyRUFBZ0I7O29CQUFFLENBRWxDO2dHQUFDNkIsQ0FBSzt3QkFBQ0MsUUFBUSxFQUFFUCxpQkFBaUI7Ozs7OztnR0FFakNRLENBQU07d0JBQUNDLE9BQU8sTUFBUXhCLFlBQVk7O2tDQUFJLENBQVM7Ozs7OztnR0FDL0N5QixDQUFFOzs7OztnR0FDRkYsQ0FBTTt3QkFBQ0MsT0FBTyxNQUFRWCxXQUFXOztrQ0FBSSxDQUFTOzs7Ozs7b0JBQzlDZixZQUFZLElBQUk0QixTQUFTLEdBQUc1QixZQUFZLENBQUM2QixHQUFHLEVBQUViLEtBQUssK0VBQU1JLENBQUc7O2dDQUFrQixDQUFDO2dDQUFDSixLQUFLLENBQUNjLGFBQWE7Z0NBQUMsQ0FBQzs7MkJBQWpDZCxLQUFLLENBQUNlLEVBQUU7Ozs7O3dCQUFtQyxDQUFHOzs7Ozs7O3dGQUVsSG5DLHlEQUFLOzs7Ozs7Ozs7OztBQUlaLENBQUM7QUFFRCxpRUFBZUMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZ3VhZ2UtdGFibGVzLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblwiO1xuXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2N1cnJlbnROYW1lLCBzZXRDdXJyZW50TmFtZV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtyZWNpZXZlZE5hbWUsIHNldFJlY2lldmVkTmFtZV0gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBzYXZlVXNlck5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc2F2ZVZhbHVlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGJvZHlEYXRhOiB7Y3VycmVudE5hbWV9LFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gZGF0YTtcblxuICB9O1xuXG5cbiAgY29uc3QgZ2V0VXNlck5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2V0VmFsdWVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdmFsdWU6IHtjdXJyZW50TmFtZX1cbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgc2V0UmVjaWV2ZWROYW1lKGRhdGEpXG4gICAgcmV0dXJuIGRhdGE7XG5cbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgc2V0Q3VycmVudE5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbnsvKiBcbiAgICAgIDxOYXZCYXIvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgREVNT1xuICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+XG4gICAgICA8L2lucHV0PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzYXZlVXNlck5hbWUoKX0+IFNldCBuYW1lPC9idXR0b24+XG4gICAgICA8YnIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRVc2VyTmFtZSgpfT4gR2V0IG5hbWU8L2J1dHRvbj5cbiAgICAgIHtyZWNpZXZlZE5hbWUgIT0gdW5kZWZpbmVkID8gcmVjaWV2ZWROYW1lLm1hcCgodmFsdWUpID0+IDxkaXYga2V5ID0ge3ZhbHVlLmlkfT4ge3ZhbHVlLmV4YW1wbGVDb2x1bW59IDwvZGl2PikgOiBcIiBcIn1cbiAgICA8L2Rpdj4gXG4gICAgICA8TG9naW4gLz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUZvcm0iLCJDb250cm9sbGVyIiwiSGVhZCIsIlNlbGVjdCIsInN0eWxlcyIsIk5hdkJhciIsIkxvZ2luIiwiSG9tZSIsImN1cnJlbnROYW1lIiwic2V0Q3VycmVudE5hbWUiLCJyZWNpZXZlZE5hbWUiLCJzZXRSZWNpZXZlZE5hbWUiLCJzYXZlVXNlck5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5RGF0YSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyTmFtZSIsInZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInVuZGVmaW5lZCIsIm1hcCIsImV4YW1wbGVDb2x1bW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

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

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-login");

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