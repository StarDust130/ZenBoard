"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-task-list-item";
exports.ids = ["vendor-chunks/mdast-util-gfm-task-list-item"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/lib/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemFromMarkdown: () => (/* binding */ gfmTaskListItemFromMarkdown),\n/* harmony export */   gfmTaskListItemToMarkdown: () => (/* binding */ gfmTaskListItemToMarkdown)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_markdown_lib_handle_list_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/list-item.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/handle/list-item.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/track.js */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/track.js\");\n/**\n * @typedef {import('mdast').Content} Content\n * @typedef {import('mdast').ListItem} ListItem\n * @typedef {import('mdast').Paragraph} Paragraph\n * @typedef {import('mdast').Parent} Parent\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n */\n\n/**\n * @typedef {Extract<Root | Content, Parent>} Parents\n */\n\n\n\n\n// To do: next major: rename `context` -> `state`, `safeOptions` -> `info`, use\n// `track` from `state`.\n// To do: next major: replace exports with functions.\n// To do: next major: use `defaulthandlers.listItem`.\n\n/**\n * Extension for `mdast-util-from-markdown` to enable GFM task list items.\n *\n * @type {FromMarkdownExtension}\n */\nconst gfmTaskListItemFromMarkdown = {\n  exit: {\n    taskListCheckValueChecked: exitCheck,\n    taskListCheckValueUnchecked: exitCheck,\n    paragraph: exitParagraphWithTaskListItem\n  }\n}\n\n/**\n * Extension for `mdast-util-to-markdown` to enable GFM task list items.\n *\n * @type {ToMarkdownExtension}\n */\nconst gfmTaskListItemToMarkdown = {\n  unsafe: [{atBreak: true, character: '-', after: '[:|-]'}],\n  handlers: {listItem: listItemWithTaskListItem}\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitCheck(token) {\n  const node = /** @type {ListItem} */ (this.stack[this.stack.length - 2])\n  // We’re always in a paragraph, in a list item.\n  node.checked = token.type === 'taskListCheckValueChecked'\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitParagraphWithTaskListItem(token) {\n  const parent = /** @type {Parents} */ (this.stack[this.stack.length - 2])\n\n  if (\n    parent &&\n    parent.type === 'listItem' &&\n    typeof parent.checked === 'boolean'\n  ) {\n    const node = /** @type {Paragraph} */ (this.stack[this.stack.length - 1])\n    const head = node.children[0]\n\n    if (head && head.type === 'text') {\n      const siblings = parent.children\n      let index = -1\n      /** @type {Paragraph | undefined} */\n      let firstParaghraph\n\n      while (++index < siblings.length) {\n        const sibling = siblings[index]\n        if (sibling.type === 'paragraph') {\n          firstParaghraph = sibling\n          break\n        }\n      }\n\n      if (firstParaghraph === node) {\n        // Must start with a space or a tab.\n        head.value = head.value.slice(1)\n\n        if (head.value.length === 0) {\n          node.children.shift()\n        } else if (\n          node.position &&\n          head.position &&\n          typeof head.position.start.offset === 'number'\n        ) {\n          head.position.start.column++\n          head.position.start.offset++\n          node.position.start = Object.assign({}, head.position.start)\n        }\n      }\n    }\n  }\n\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {ListItem} node\n */\nfunction listItemWithTaskListItem(node, parent, context, safeOptions) {\n  const head = node.children[0]\n  const checkable =\n    typeof node.checked === 'boolean' && head && head.type === 'paragraph'\n  const checkbox = '[' + (node.checked ? 'x' : ' ') + '] '\n  const tracker = (0,mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__.track)(safeOptions)\n\n  if (checkable) {\n    tracker.move(checkbox)\n  }\n\n  let value = (0,mdast_util_to_markdown_lib_handle_list_item_js__WEBPACK_IMPORTED_MODULE_1__.listItem)(node, parent, context, {\n    ...safeOptions,\n    ...tracker.current()\n  })\n\n  if (checkable) {\n    value = value.replace(/^(?:[*+-]|\\d+\\.)([\\r\\n]| {1,3})/, check)\n  }\n\n  return value\n\n  /**\n   * @param {string} $0\n   * @returns {string}\n   */\n  function check($0) {\n    return $0 + checkbox\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMkJBQTJCO0FBQ3hDLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsMENBQTBDO0FBQ3ZELGFBQWEseUNBQXlDO0FBQ3REOztBQUVBO0FBQ0EsYUFBYSxpQ0FBaUM7QUFDOUM7O0FBRXVFO0FBQ1Q7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1AsWUFBWSw4Q0FBOEM7QUFDMUQsYUFBYTtBQUNiOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0VBQUs7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHdGQUFRO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EscURBQXFELElBQUk7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS10YXNrLWxpc3QtaXRlbS9saWIvaW5kZXguanM/NGEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuQ29udGVudH0gQ29udGVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5MaXN0SXRlbX0gTGlzdEl0ZW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGFyYWdyYXBofSBQYXJhZ3JhcGhcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGFyZW50fSBQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuQ29tcGlsZUNvbnRleHR9IENvbXBpbGVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuSGFuZGxlfSBGcm9tTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RXh0cmFjdDxSb290IHwgQ29udGVudCwgUGFyZW50Pn0gUGFyZW50c1xuICovXG5cbmltcG9ydCB7bGlzdEl0ZW19IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9saXN0LWl0ZW0uanMnXG5pbXBvcnQge3RyYWNrfSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3RyYWNrLmpzJ1xuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogcmVuYW1lIGBjb250ZXh0YCAtPiBgc3RhdGVgLCBgc2FmZU9wdGlvbnNgIC0+IGBpbmZvYCwgdXNlXG4vLyBgdHJhY2tgIGZyb20gYHN0YXRlYC5cbi8vIFRvIGRvOiBuZXh0IG1ham9yOiByZXBsYWNlIGV4cG9ydHMgd2l0aCBmdW5jdGlvbnMuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogdXNlIGBkZWZhdWx0aGFuZGxlcnMubGlzdEl0ZW1gLlxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YXNrIGxpc3QgaXRlbXMuXG4gKlxuICogQHR5cGUge0Zyb21NYXJrZG93bkV4dGVuc2lvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdmbVRhc2tMaXN0SXRlbUZyb21NYXJrZG93biA9IHtcbiAgZXhpdDoge1xuICAgIHRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQ6IGV4aXRDaGVjayxcbiAgICB0YXNrTGlzdENoZWNrVmFsdWVVbmNoZWNrZWQ6IGV4aXRDaGVjayxcbiAgICBwYXJhZ3JhcGg6IGV4aXRQYXJhZ3JhcGhXaXRoVGFza0xpc3RJdGVtXG4gIH1cbn1cblxuLyoqXG4gKiBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIHRhc2sgbGlzdCBpdGVtcy5cbiAqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdmbVRhc2tMaXN0SXRlbVRvTWFya2Rvd24gPSB7XG4gIHVuc2FmZTogW3thdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICctJywgYWZ0ZXI6ICdbOnwtXSd9XSxcbiAgaGFuZGxlcnM6IHtsaXN0SXRlbTogbGlzdEl0ZW1XaXRoVGFza0xpc3RJdGVtfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRDaGVjayh0b2tlbikge1xuICBjb25zdCBub2RlID0gLyoqIEB0eXBlIHtMaXN0SXRlbX0gKi8gKHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAyXSlcbiAgLy8gV2XigJlyZSBhbHdheXMgaW4gYSBwYXJhZ3JhcGgsIGluIGEgbGlzdCBpdGVtLlxuICBub2RlLmNoZWNrZWQgPSB0b2tlbi50eXBlID09PSAndGFza0xpc3RDaGVja1ZhbHVlQ2hlY2tlZCdcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbSh0b2tlbikge1xuICBjb25zdCBwYXJlbnQgPSAvKiogQHR5cGUge1BhcmVudHN9ICovICh0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl0pXG5cbiAgaWYgKFxuICAgIHBhcmVudCAmJlxuICAgIHBhcmVudC50eXBlID09PSAnbGlzdEl0ZW0nICYmXG4gICAgdHlwZW9mIHBhcmVudC5jaGVja2VkID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgY29uc3Qgbm9kZSA9IC8qKiBAdHlwZSB7UGFyYWdyYXBofSAqLyAodGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdKVxuICAgIGNvbnN0IGhlYWQgPSBub2RlLmNoaWxkcmVuWzBdXG5cbiAgICBpZiAoaGVhZCAmJiBoZWFkLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgY29uc3Qgc2libGluZ3MgPSBwYXJlbnQuY2hpbGRyZW5cbiAgICAgIGxldCBpbmRleCA9IC0xXG4gICAgICAvKiogQHR5cGUge1BhcmFncmFwaCB8IHVuZGVmaW5lZH0gKi9cbiAgICAgIGxldCBmaXJzdFBhcmFnaHJhcGhcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBzaWJsaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IHNpYmxpbmdzW2luZGV4XVxuICAgICAgICBpZiAoc2libGluZy50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICAgIGZpcnN0UGFyYWdocmFwaCA9IHNpYmxpbmdcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdFBhcmFnaHJhcGggPT09IG5vZGUpIHtcbiAgICAgICAgLy8gTXVzdCBzdGFydCB3aXRoIGEgc3BhY2Ugb3IgYSB0YWIuXG4gICAgICAgIGhlYWQudmFsdWUgPSBoZWFkLnZhbHVlLnNsaWNlKDEpXG5cbiAgICAgICAgaWYgKGhlYWQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5zaGlmdCgpXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgbm9kZS5wb3NpdGlvbiAmJlxuICAgICAgICAgIGhlYWQucG9zaXRpb24gJiZcbiAgICAgICAgICB0eXBlb2YgaGVhZC5wb3NpdGlvbi5zdGFydC5vZmZzZXQgPT09ICdudW1iZXInXG4gICAgICAgICkge1xuICAgICAgICAgIGhlYWQucG9zaXRpb24uc3RhcnQuY29sdW1uKytcbiAgICAgICAgICBoZWFkLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCsrXG4gICAgICAgICAgbm9kZS5wb3NpdGlvbi5zdGFydCA9IE9iamVjdC5hc3NpZ24oe30sIGhlYWQucG9zaXRpb24uc3RhcnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbi8qKlxuICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gKiBAcGFyYW0ge0xpc3RJdGVtfSBub2RlXG4gKi9cbmZ1bmN0aW9uIGxpc3RJdGVtV2l0aFRhc2tMaXN0SXRlbShub2RlLCBwYXJlbnQsIGNvbnRleHQsIHNhZmVPcHRpb25zKSB7XG4gIGNvbnN0IGhlYWQgPSBub2RlLmNoaWxkcmVuWzBdXG4gIGNvbnN0IGNoZWNrYWJsZSA9XG4gICAgdHlwZW9mIG5vZGUuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nICYmIGhlYWQgJiYgaGVhZC50eXBlID09PSAncGFyYWdyYXBoJ1xuICBjb25zdCBjaGVja2JveCA9ICdbJyArIChub2RlLmNoZWNrZWQgPyAneCcgOiAnICcpICsgJ10gJ1xuICBjb25zdCB0cmFja2VyID0gdHJhY2soc2FmZU9wdGlvbnMpXG5cbiAgaWYgKGNoZWNrYWJsZSkge1xuICAgIHRyYWNrZXIubW92ZShjaGVja2JveClcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IGxpc3RJdGVtKG5vZGUsIHBhcmVudCwgY29udGV4dCwge1xuICAgIC4uLnNhZmVPcHRpb25zLFxuICAgIC4uLnRyYWNrZXIuY3VycmVudCgpXG4gIH0pXG5cbiAgaWYgKGNoZWNrYWJsZSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXig/OlsqKy1dfFxcZCtcXC4pKFtcXHJcXG5dfCB7MSwzfSkvLCBjaGVjaylcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gJDBcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrKCQwKSB7XG4gICAgcmV0dXJuICQwICsgY2hlY2tib3hcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js\n");

/***/ })

};
;