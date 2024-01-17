"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-whitespace";
exports.ids = ["vendor-chunks/micromark-factory-whitespace"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-whitespace/dev/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-factory-whitespace/dev/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryWhitespace: () => (/* binding */ factoryWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n */\n\n\n\n\n\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   line endings or spaces in markdown are often optional, in which case this\n *     factory can be used and `ok` will be switched to whether spaces were found\n *     or not\n * *   one line ending or space can be detected with\n *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @returns\n *   Start state.\n */\nfunction factoryWhitespace(effects, ok) {\n  /** @type {boolean} */\n  let seen\n\n  return start\n\n  /** @type {State} */\n  function start(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownLineEnding)(code)) {\n      effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding)\n      seen = true\n      return start\n    }\n\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__.factorySpace)(\n        effects,\n        start,\n        seen ? micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.linePrefix : micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_1__.types.lineSuffix\n      )(code)\n    }\n\n    return ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYSxzQ0FBc0M7QUFDbkQ7O0FBRW9EO0FBQ3NCO0FBQ3RCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUIsb0JBQW9CLGlFQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLGlFQUFLO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVFQUFhO0FBQ3JCLGFBQWEscUVBQVk7QUFDekI7QUFDQTtBQUNBLGVBQWUsaUVBQUssY0FBYyxpRUFBSztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmJvYXJkLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2UvZGV2L2luZGV4LmpzPzIyYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7dHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC90eXBlcy5qcydcblxuLyoqXG4gKiBQYXJzZSBzcGFjZXMgYW5kIHRhYnMuXG4gKlxuICogVGhlcmUgaXMgbm8gYG5va2AgcGFyYW1ldGVyOlxuICpcbiAqICogICBsaW5lIGVuZGluZ3Mgb3Igc3BhY2VzIGluIG1hcmtkb3duIGFyZSBvZnRlbiBvcHRpb25hbCwgaW4gd2hpY2ggY2FzZSB0aGlzXG4gKiAgICAgZmFjdG9yeSBjYW4gYmUgdXNlZCBhbmQgYG9rYCB3aWxsIGJlIHN3aXRjaGVkIHRvIHdoZXRoZXIgc3BhY2VzIHdlcmUgZm91bmRcbiAqICAgICBvciBub3RcbiAqICogICBvbmUgbGluZSBlbmRpbmcgb3Igc3BhY2UgY2FuIGJlIGRldGVjdGVkIHdpdGhcbiAqICAgICBgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKWAgcmlnaHQgYmVmb3JlIHVzaW5nIGBmYWN0b3J5V2hpdGVzcGFjZWBcbiAqXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEByZXR1cm5zXG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeVdoaXRlc3BhY2UoZWZmZWN0cywgb2spIHtcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICBsZXQgc2VlblxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgc2VlbiA9IHRydWVcbiAgICAgIHJldHVybiBzdGFydFxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc2VlbiA/IHR5cGVzLmxpbmVQcmVmaXggOiB0eXBlcy5saW5lU3VmZml4XG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-whitespace/dev/index.js\n");

/***/ })

};
;