"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-embedded";
exports.ids = ["vendor-chunks/hast-util-embedded"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-embedded/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/hast-util-embedded/lib/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   embedded: () => (/* binding */ embedded)\n/* harmony export */ });\n/* harmony import */ var hast_util_is_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-is-element */ \"(ssr)/./node_modules/hast-util-is-element/index.js\");\n/**\n * @typedef {import('hast').Element} Element\n */\n\n\n\n/**\n * Check if a node is a *embedded content*.\n *\n * @type {import('hast-util-is-element').AssertPredicate<Element & {tagName: 'audio' | 'canvas' | 'embed' | 'iframe' | 'img' | 'math' | 'object' | 'picture' | 'svg' | 'video'}>}\n * @param value\n *   Thing to check (typically `Node`).\n * @returns\n *   Whether `value` is an element considered embedded content.\n *\n *   The elements `audio`, `canvas`, `embed`, `iframe`, `img`, `math`,\n *   `object`, `picture`, `svg`, and `video` are embedded content.\n */\n// @ts-expect-error Sure, the assertion matches.\nconst embedded = (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_0__.convertElement)([\n  'audio',\n  'canvas',\n  'embed',\n  'iframe',\n  'img',\n  'math',\n  'object',\n  'picture',\n  'svg',\n  'video'\n])\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWVtYmVkZGVkL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7O0FBRW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBEQUEwRCwyR0FBMkc7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCLG9FQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZW1iZWRkZWQvbGliL2luZGV4LmpzPzdhZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICovXG5cbmltcG9ydCB7Y29udmVydEVsZW1lbnR9IGZyb20gJ2hhc3QtdXRpbC1pcy1lbGVtZW50J1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhICplbWJlZGRlZCBjb250ZW50Ki5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpLkFzc2VydFByZWRpY2F0ZTxFbGVtZW50ICYge3RhZ05hbWU6ICdhdWRpbycgfCAnY2FudmFzJyB8ICdlbWJlZCcgfCAnaWZyYW1lJyB8ICdpbWcnIHwgJ21hdGgnIHwgJ29iamVjdCcgfCAncGljdHVyZScgfCAnc3ZnJyB8ICd2aWRlbyd9Pn1cbiAqIEBwYXJhbSB2YWx1ZVxuICogICBUaGluZyB0byBjaGVjayAodHlwaWNhbGx5IGBOb2RlYCkuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGB2YWx1ZWAgaXMgYW4gZWxlbWVudCBjb25zaWRlcmVkIGVtYmVkZGVkIGNvbnRlbnQuXG4gKlxuICogICBUaGUgZWxlbWVudHMgYGF1ZGlvYCwgYGNhbnZhc2AsIGBlbWJlZGAsIGBpZnJhbWVgLCBgaW1nYCwgYG1hdGhgLFxuICogICBgb2JqZWN0YCwgYHBpY3R1cmVgLCBgc3ZnYCwgYW5kIGB2aWRlb2AgYXJlIGVtYmVkZGVkIGNvbnRlbnQuXG4gKi9cbi8vIEB0cy1leHBlY3QtZXJyb3IgU3VyZSwgdGhlIGFzc2VydGlvbiBtYXRjaGVzLlxuZXhwb3J0IGNvbnN0IGVtYmVkZGVkID0gY29udmVydEVsZW1lbnQoW1xuICAnYXVkaW8nLFxuICAnY2FudmFzJyxcbiAgJ2VtYmVkJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnbWF0aCcsXG4gICdvYmplY3QnLFxuICAncGljdHVyZScsXG4gICdzdmcnLFxuICAndmlkZW8nXG5dKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-embedded/lib/index.js\n");

/***/ })

};
;