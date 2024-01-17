"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-latest";
exports.ids = ["vendor-chunks/use-latest"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-latest/dist/use-latest.cjs.dev.js":
/*!************************************************************!*\
  !*** ./node_modules/use-latest/dist/use-latest.cjs.dev.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar useIsomorphicLayoutEffect = __webpack_require__(/*! use-isomorphic-layout-effect */ \"(ssr)/./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.cjs.js\");\n\nfunction _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }\n\nfunction _interopNamespace(e) {\n  if (e && e.__esModule) return e;\n  var n = Object.create(null);\n  if (e) {\n    Object.keys(e).forEach(function (k) {\n      if (k !== 'default') {\n        var d = Object.getOwnPropertyDescriptor(e, k);\n        Object.defineProperty(n, k, d.get ? d : {\n          enumerable: true,\n          get: function () { return e[k]; }\n        });\n      }\n    });\n  }\n  n[\"default\"] = e;\n  return Object.freeze(n);\n}\n\nvar React__namespace = /*#__PURE__*/_interopNamespace(React);\nvar useIsomorphicLayoutEffect__default = /*#__PURE__*/_interopDefault(useIsomorphicLayoutEffect);\n\nvar useLatest = function useLatest(value) {\n  var ref = React__namespace.useRef(value);\n  useIsomorphicLayoutEffect__default[\"default\"](function () {\n    ref.current = value;\n  });\n  return ref;\n};\n\nexports[\"default\"] = useLatest;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWxhdGVzdC9kaXN0L3VzZS1sYXRlc3QuY2pzLmRldi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELFlBQVksbUJBQU8sQ0FBQyx3R0FBTztBQUMzQixnQ0FBZ0MsbUJBQU8sQ0FBQyxnSUFBOEI7O0FBRXRFLCtCQUErQixpQ0FBaUM7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3VzZS1sYXRlc3QvZGlzdC91c2UtbGF0ZXN0LmNqcy5kZXYuanM/NmNkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHJlcXVpcmUoJ3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoZSkge1xuICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChrICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIGspO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgaywgZC5nZXQgPyBkIDoge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlW2tdOyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciBSZWFjdF9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKFJlYWN0KTtcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdCh1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KTtcblxudmFyIHVzZUxhdGVzdCA9IGZ1bmN0aW9uIHVzZUxhdGVzdCh2YWx1ZSkge1xuICB2YXIgcmVmID0gUmVhY3RfX25hbWVzcGFjZS51c2VSZWYodmFsdWUpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXShmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWY7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHVzZUxhdGVzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-latest/dist/use-latest.cjs.dev.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-latest/dist/use-latest.cjs.js":
/*!********************************************************!*\
  !*** ./node_modules/use-latest/dist/use-latest.cjs.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./use-latest.cjs.dev.js */ \"(ssr)/./node_modules/use-latest/dist/use-latest.cjs.dev.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWxhdGVzdC9kaXN0L3VzZS1sYXRlc3QuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxpSUFBbUQ7QUFDckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy91c2UtbGF0ZXN0L2Rpc3QvdXNlLWxhdGVzdC5janMuanM/YTYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi91c2UtbGF0ZXN0LmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi91c2UtbGF0ZXN0LmNqcy5kZXYuanNcIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-latest/dist/use-latest.cjs.js\n");

/***/ })

};
;