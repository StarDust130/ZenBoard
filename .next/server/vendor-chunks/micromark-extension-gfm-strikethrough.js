"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-strikethrough";
exports.ids = ["vendor-chunks/micromark-extension-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughHtml: () => (/* binding */ gfmStrikethroughHtml)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */\n\n// To do: next major: expose function instead of object.\n\n/**\n * Extension for `micromark` that can be passed in `htmlExtensions`, to\n * support GFM strikethrough when serializing to HTML.\n *\n * @type {HtmlExtension}\n */\nconst gfmStrikethroughHtml = {\n  enter: {\n    strikethrough() {\n      this.tag('<del>')\n    }\n  },\n  exit: {\n    strikethrough() {\n      this.tag('</del>')\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSw4Q0FBOEM7QUFDM0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmJvYXJkLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gvZGV2L2xpYi9odG1sLmpzPzA4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkh0bWxFeHRlbnNpb259IEh0bWxFeHRlbnNpb25cbiAqL1xuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9uIGluc3RlYWQgb2Ygb2JqZWN0LlxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBodG1sRXh0ZW5zaW9uc2AsIHRvXG4gKiBzdXBwb3J0IEdGTSBzdHJpa2V0aHJvdWdoIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqXG4gKiBAdHlwZSB7SHRtbEV4dGVuc2lvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdmbVN0cmlrZXRocm91Z2hIdG1sID0ge1xuICBlbnRlcjoge1xuICAgIHN0cmlrZXRocm91Z2goKSB7XG4gICAgICB0aGlzLnRhZygnPGRlbD4nKVxuICAgIH1cbiAgfSxcbiAgZXhpdDoge1xuICAgIHN0cmlrZXRocm91Z2goKSB7XG4gICAgICB0aGlzLnRhZygnPC9kZWw+JylcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js":
/*!******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethrough: () => (/* binding */ gfmStrikethrough)\n/* harmony export */ });\n/* harmony import */ var uvu_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uvu/assert */ \"(ssr)/./node_modules/uvu/assert/index.mjs\");\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-classify-character */ \"(ssr)/./node_modules/micromark-util-classify-character/dev/index.js\");\n/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-resolve-all */ \"(ssr)/./node_modules/micromark-util-resolve-all/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"(ssr)/./node_modules/micromark-util-symbol/constants.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').Resolver} Resolver\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').Token} Token\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Tokenizer} Tokenizer\n *\n * @typedef Options\n *   Configuration (optional).\n * @property {boolean} [singleTilde=true]\n *   Whether to support strikethrough with a single tilde.\n *\n *   Single tildes work on github.com, but are technically prohibited by the\n *   GFM spec.\n */\n\n\n\n\n\n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM strikethrough syntax.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions`, to\n *   enable GFM strikethrough syntax.\n */\nfunction gfmStrikethrough(options) {\n  const options_ = options || {}\n  let single = options_.singleTilde\n  const tokenizer = {\n    tokenize: tokenizeStrikethrough,\n    resolveAll: resolveAllStrikethrough\n  }\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  return {\n    text: {[micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde]: tokenizer},\n    insideSpan: {null: [tokenizer]},\n    attentionMarkers: {null: [micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde]}\n  }\n\n  /**\n   * Take events and resolve strikethrough.\n   *\n   * @type {Resolver}\n   */\n  function resolveAllStrikethrough(events, context) {\n    let index = -1\n\n    // Walk through all events.\n    while (++index < events.length) {\n      // Find a token that can close.\n      if (\n        events[index][0] === 'enter' &&\n        events[index][1].type === 'strikethroughSequenceTemporary' &&\n        events[index][1]._close\n      ) {\n        let open = index\n\n        // Now walk back to find an opener.\n        while (open--) {\n          // Find a token that can open the closer.\n          if (\n            events[open][0] === 'exit' &&\n            events[open][1].type === 'strikethroughSequenceTemporary' &&\n            events[open][1]._open &&\n            // If the sizes are the same:\n            events[index][1].end.offset - events[index][1].start.offset ===\n              events[open][1].end.offset - events[open][1].start.offset\n          ) {\n            events[index][1].type = 'strikethroughSequence'\n            events[open][1].type = 'strikethroughSequence'\n\n            /** @type {Token} */\n            const strikethrough = {\n              type: 'strikethrough',\n              start: Object.assign({}, events[open][1].start),\n              end: Object.assign({}, events[index][1].end)\n            }\n\n            /** @type {Token} */\n            const text = {\n              type: 'strikethroughText',\n              start: Object.assign({}, events[open][1].end),\n              end: Object.assign({}, events[index][1].start)\n            }\n\n            // Opening.\n            /** @type {Array<Event>} */\n            const nextEvents = [\n              ['enter', strikethrough, context],\n              ['enter', events[open][1], context],\n              ['exit', events[open][1], context],\n              ['enter', text, context]\n            ]\n\n            const insideSpan = context.parser.constructs.insideSpan.null\n\n            if (insideSpan) {\n              // Between.\n              (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(\n                nextEvents,\n                nextEvents.length,\n                0,\n                (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__.resolveAll)(insideSpan, events.slice(open + 1, index), context)\n              )\n            }\n\n            // Closing.\n            (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(nextEvents, nextEvents.length, 0, [\n              ['exit', text, context],\n              ['enter', events[index][1], context],\n              ['exit', events[index][1], context],\n              ['exit', strikethrough, context]\n            ])\n\n            ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, open - 1, index - open + 3, nextEvents)\n\n            index = open + nextEvents.length - 2\n            break\n          }\n        }\n      }\n    }\n\n    index = -1\n\n    while (++index < events.length) {\n      if (events[index][1].type === 'strikethroughSequenceTemporary') {\n        events[index][1].type = micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.data\n      }\n    }\n\n    return events\n  }\n\n  /**\n   * @this {TokenizeContext}\n   * @type {Tokenizer}\n   */\n  function tokenizeStrikethrough(effects, ok, nok) {\n    const previous = this.previous\n    const events = this.events\n    let size = 0\n\n    return start\n\n    /** @type {State} */\n    function start(code) {\n      ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde, 'expected `~`')\n\n      if (\n        previous === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde &&\n        events[events.length - 1][1].type !== micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.characterEscape\n      ) {\n        return nok(code)\n      }\n\n      effects.enter('strikethroughSequenceTemporary')\n      return more(code)\n    }\n\n    /** @type {State} */\n    function more(code) {\n      const before = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(previous)\n\n      if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde) {\n        // If this is the third marker, exit.\n        if (size > 1) return nok(code)\n        effects.consume(code)\n        size++\n        return more\n      }\n\n      if (size < 2 && !single) return nok(code)\n      const token = effects.exit('strikethroughSequenceTemporary')\n      const after = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(code)\n      token._open =\n        !after || (after === micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(before))\n      token._close =\n        !before || (before === micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(after))\n      return ok(code)\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL3N5bnRheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0EsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSwwQ0FBMEM7QUFDdkQsYUFBYSx5Q0FBeUM7QUFDdEQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSxnREFBZ0Q7QUFDN0QsYUFBYSwwQ0FBMEM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDO0FBQ007QUFDc0I7QUFDZDtBQUNEO0FBQ1E7QUFDUjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxDQUFDLGlFQUFLLG1CQUFtQjtBQUNwQyxpQkFBaUIsa0JBQWtCO0FBQ25DLHVCQUF1QixPQUFPLGlFQUFLO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDhEQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzRUFBVTtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsWUFBWSw4REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksK0RBQU07O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxNQUFNLCtDQUFNLFVBQVUsaUVBQUs7O0FBRTNCO0FBQ0EscUJBQXFCLGlFQUFLO0FBQzFCLDhDQUE4QyxpRUFBSztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsT0FBTztBQUN0QjtBQUNBLHFCQUFxQixvRkFBaUI7O0FBRXRDLG1CQUFtQixpRUFBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvRkFBaUI7QUFDckM7QUFDQSw2QkFBNkIseUVBQVM7QUFDdEM7QUFDQSwrQkFBK0IseUVBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS1zdHJpa2V0aHJvdWdoL2Rldi9saWIvc3ludGF4LmpzPzMwNzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FeHRlbnNpb259IEV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5SZXNvbHZlcn0gUmVzb2x2ZXJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VufSBUb2tlblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2luZ2xlVGlsZGU9dHJ1ZV1cbiAqICAgV2hldGhlciB0byBzdXBwb3J0IHN0cmlrZXRocm91Z2ggd2l0aCBhIHNpbmdsZSB0aWxkZS5cbiAqXG4gKiAgIFNpbmdsZSB0aWxkZXMgd29yayBvbiBnaXRodWIuY29tLCBidXQgYXJlIHRlY2huaWNhbGx5IHByb2hpYml0ZWQgYnkgdGhlXG4gKiAgIEdGTSBzcGVjLlxuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICd1dnUvYXNzZXJ0J1xuaW1wb3J0IHtzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG5pbXBvcnQge2NsYXNzaWZ5Q2hhcmFjdGVyfSBmcm9tICdtaWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXInXG5pbXBvcnQge3Jlc29sdmVBbGx9IGZyb20gJ21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsJ1xuaW1wb3J0IHtjb2Rlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvZGVzLmpzJ1xuaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC9jb25zdGFudHMuanMnXG5pbXBvcnQge3R5cGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvdHlwZXMuanMnXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoIHN5bnRheC5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBleHRlbnNpb25zYCwgdG9cbiAqICAgZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoIHN5bnRheC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVN0cmlrZXRocm91Z2gob3B0aW9ucykge1xuICBjb25zdCBvcHRpb25zXyA9IG9wdGlvbnMgfHwge31cbiAgbGV0IHNpbmdsZSA9IG9wdGlvbnNfLnNpbmdsZVRpbGRlXG4gIGNvbnN0IHRva2VuaXplciA9IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVTdHJpa2V0aHJvdWdoLFxuICAgIHJlc29sdmVBbGw6IHJlc29sdmVBbGxTdHJpa2V0aHJvdWdoXG4gIH1cblxuICBpZiAoc2luZ2xlID09PSBudWxsIHx8IHNpbmdsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2luZ2xlID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiB7W2NvZGVzLnRpbGRlXTogdG9rZW5pemVyfSxcbiAgICBpbnNpZGVTcGFuOiB7bnVsbDogW3Rva2VuaXplcl19LFxuICAgIGF0dGVudGlvbk1hcmtlcnM6IHtudWxsOiBbY29kZXMudGlsZGVdfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgZXZlbnRzIGFuZCByZXNvbHZlIHN0cmlrZXRocm91Z2guXG4gICAqXG4gICAqIEB0eXBlIHtSZXNvbHZlcn1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc29sdmVBbGxTdHJpa2V0aHJvdWdoKGV2ZW50cywgY29udGV4dCkge1xuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICAvLyBXYWxrIHRocm91Z2ggYWxsIGV2ZW50cy5cbiAgICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBjbG9zZS5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknICYmXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0uX2Nsb3NlXG4gICAgICApIHtcbiAgICAgICAgbGV0IG9wZW4gPSBpbmRleFxuXG4gICAgICAgIC8vIE5vdyB3YWxrIGJhY2sgdG8gZmluZCBhbiBvcGVuZXIuXG4gICAgICAgIHdoaWxlIChvcGVuLS0pIHtcbiAgICAgICAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gb3BlbiB0aGUgY2xvc2VyLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVswXSA9PT0gJ2V4aXQnICYmXG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5fb3BlbiAmJlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNpemVzIGFyZSB0aGUgc2FtZTpcbiAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0ID09PVxuICAgICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2UnXG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0udHlwZSA9ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2UnXG5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gICAgICAgICAgICBjb25zdCBzdHJpa2V0aHJvdWdoID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaWtldGhyb3VnaCcsXG4gICAgICAgICAgICAgIHN0YXJ0OiBPYmplY3QuYXNzaWduKHt9LCBldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgICAgICAgICAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tpbmRleF1bMV0uZW5kKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiogQHR5cGUge1Rva2VufSAqL1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmlrZXRocm91Z2hUZXh0JyxcbiAgICAgICAgICAgICAgc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuXVsxXS5lbmQpLFxuICAgICAgICAgICAgICBlbmQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW5pbmcuXG4gICAgICAgICAgICAvKiogQHR5cGUge0FycmF5PEV2ZW50Pn0gKi9cbiAgICAgICAgICAgIGNvbnN0IG5leHRFdmVudHMgPSBbXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBzdHJpa2V0aHJvdWdoLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZW50ZXInLCB0ZXh0LCBjb250ZXh0XVxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjb25zdCBpbnNpZGVTcGFuID0gY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGxcblxuICAgICAgICAgICAgaWYgKGluc2lkZVNwYW4pIHtcbiAgICAgICAgICAgICAgLy8gQmV0d2Vlbi5cbiAgICAgICAgICAgICAgc3BsaWNlKFxuICAgICAgICAgICAgICAgIG5leHRFdmVudHMsXG4gICAgICAgICAgICAgICAgbmV4dEV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICByZXNvbHZlQWxsKGluc2lkZVNwYW4sIGV2ZW50cy5zbGljZShvcGVuICsgMSwgaW5kZXgpLCBjb250ZXh0KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsb3NpbmcuXG4gICAgICAgICAgICBzcGxpY2UobmV4dEV2ZW50cywgbmV4dEV2ZW50cy5sZW5ndGgsIDAsIFtcbiAgICAgICAgICAgICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0JywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIHN0cmlrZXRocm91Z2gsIGNvbnRleHRdXG4gICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICBzcGxpY2UoZXZlbnRzLCBvcGVuIC0gMSwgaW5kZXggLSBvcGVuICsgMywgbmV4dEV2ZW50cylcblxuICAgICAgICAgICAgaW5kZXggPSBvcGVuICsgbmV4dEV2ZW50cy5sZW5ndGggLSAyXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpIHtcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gdHlwZXMuZGF0YVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBldmVudHNcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICAgKiBAdHlwZSB7VG9rZW5pemVyfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9rZW5pemVTdHJpa2V0aHJvdWdoKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMucHJldmlvdXNcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50c1xuICAgIGxldCBzaXplID0gMFxuXG4gICAgcmV0dXJuIHN0YXJ0XG5cbiAgICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAgIGFzc2VydChjb2RlID09PSBjb2Rlcy50aWxkZSwgJ2V4cGVjdGVkIGB+YCcpXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXMgPT09IGNvZGVzLnRpbGRlICYmXG4gICAgICAgIGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0udHlwZSAhPT0gdHlwZXMuY2hhcmFjdGVyRXNjYXBlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgcmV0dXJuIG1vcmUoY29kZSlcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICAgIGZ1bmN0aW9uIG1vcmUoY29kZSkge1xuICAgICAgY29uc3QgYmVmb3JlID0gY2xhc3NpZnlDaGFyYWN0ZXIocHJldmlvdXMpXG5cbiAgICAgIGlmIChjb2RlID09PSBjb2Rlcy50aWxkZSkge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSB0aGlyZCBtYXJrZXIsIGV4aXQuXG4gICAgICAgIGlmIChzaXplID4gMSkgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgICAgc2l6ZSsrXG4gICAgICAgIHJldHVybiBtb3JlXG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplIDwgMiAmJiAhc2luZ2xlKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICBjb25zdCB0b2tlbiA9IGVmZmVjdHMuZXhpdCgnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JylcbiAgICAgIGNvbnN0IGFmdGVyID0gY2xhc3NpZnlDaGFyYWN0ZXIoY29kZSlcbiAgICAgIHRva2VuLl9vcGVuID1cbiAgICAgICAgIWFmdGVyIHx8IChhZnRlciA9PT0gY29uc3RhbnRzLmF0dGVudGlvblNpZGVBZnRlciAmJiBCb29sZWFuKGJlZm9yZSkpXG4gICAgICB0b2tlbi5fY2xvc2UgPVxuICAgICAgICAhYmVmb3JlIHx8IChiZWZvcmUgPT09IGNvbnN0YW50cy5hdHRlbnRpb25TaWRlQWZ0ZXIgJiYgQm9vbGVhbihhZnRlcikpXG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\n");

/***/ })

};
;