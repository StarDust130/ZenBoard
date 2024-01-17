"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-dom";
exports.ids = ["vendor-chunks/hast-util-from-dom"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-from-dom/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/hast-util-from-dom/lib/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromDom: () => (/* binding */ fromDom)\n/* harmony export */ });\n/* harmony import */ var web_namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-namespaces */ \"(ssr)/./node_modules/web-namespaces/index.js\");\n/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hastscript */ \"(ssr)/./node_modules/hastscript/lib/svg.js\");\n/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hastscript */ \"(ssr)/./node_modules/hastscript/lib/html.js\");\n/**\n * @typedef {import('hast').Root} HastRoot\n * @typedef {import('hast').DocType} HastDoctype\n * @typedef {import('hast').Element} HastElement\n * @typedef {import('hast').Text} HastText\n * @typedef {import('hast').Comment} HastComment\n * @typedef {import('hast').Content} HastContent\n */\n\n/**\n * @typedef {HastContent | HastRoot} HastNode\n *\n * @callback AfterTransform\n *   Callback called when each node is transformed.\n * @param {Node} domNode\n *   DOM node that was handled.\n * @param {HastNode} hastNode\n *   Corresponding hast node.\n * @returns {void}\n *   Nothing.\n *\n * @typedef Options\n *   Configuration.\n * @property {AfterTransform | null | undefined} [afterTransform]\n *   Callback called when each node is transformed.\n */\n\n\n\n\n/**\n * Transform a DOM tree to a hast tree.\n *\n * @param {Node} tree\n *   DOM tree to transform.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {HastNode}\n *   Equivalent hast node.\n */\nfunction fromDom(tree, options) {\n  const result = tree ? transform(tree, options || {}) : undefined\n  return result || {type: 'root', children: []}\n}\n\n/**\n * @param {Node} node\n *   DOM node to transform.\n * @param {Options} options\n *   Configuration.\n * @returns {HastNode | undefined}\n *   Equivalent hast node.\n *\n *   Note that certain legacy DOM nodes (i.e., Attr nodes (2),  CDATA, processing instructions)\n */\nfunction transform(node, options) {\n  const transformed = one(node, options)\n  if (transformed && options.afterTransform)\n    options.afterTransform(node, transformed)\n  return transformed\n}\n\n/**\n * @param {Node} node\n *   DOM node to transform.\n * @param {Options} options\n *   Configuration.\n * @returns {HastNode | undefined}\n *   Equivalent hast node.\n */\nfunction one(node, options) {\n  switch (node.nodeType) {\n    case 1 /* Element */: {\n      // @ts-expect-error TypeScript is wrong.\n      return element(node, options)\n    }\n\n    // Ignore: Attr (2).\n\n    case 3 /* Text */: {\n      // @ts-expect-error TypeScript is wrong.\n      return text(node)\n    }\n\n    // Ignore: CDATA (4).\n    // Removed: Entity reference (5)\n    // Removed: Entity (6)\n    // Ignore: Processing instruction (7).\n\n    case 8 /* Comment */: {\n      // @ts-expect-error TypeScript is wrong.\n      return comment(node)\n    }\n\n    case 9 /* Document */: {\n      // @ts-expect-error TypeScript is wrong.\n      return root(node, options)\n    }\n\n    case 10 /* Document type */: {\n      return doctype()\n    }\n\n    case 11 /* Document fragment */: {\n      // @ts-expect-error TypeScript is wrong.\n      return root(node, options)\n    }\n\n    default: {\n      return undefined\n    }\n  }\n}\n\n/**\n * Transform a document.\n *\n * @param {Document | DocumentFragment} node\n *   DOM node to transform.\n * @param {Options} options\n *   Configuration.\n * @returns {HastRoot}\n *   Equivalent hast node.\n */\nfunction root(node, options) {\n  return {type: 'root', children: all(node, options)}\n}\n\n/**\n * Transform a doctype.\n *\n * @returns {HastDoctype}\n *   Equivalent hast node.\n */\nfunction doctype() {\n  // @ts-expect-error hast types out of date.\n  return {type: 'doctype'}\n}\n\n/**\n * Transform a text.\n *\n * @param {Text} node\n *   DOM node to transform.\n * @returns {HastText}\n *   Equivalent hast node.\n */\nfunction text(node) {\n  return {type: 'text', value: node.nodeValue || ''}\n}\n\n/**\n * Transform a comment.\n *\n * @param {Comment} node\n *   DOM node to transform.\n * @returns {HastComment}\n *   Equivalent hast node.\n */\nfunction comment(node) {\n  return {type: 'comment', value: node.nodeValue || ''}\n}\n\n/**\n * Transform an element.\n *\n * @param {Element} node\n *   DOM node to transform.\n * @param {Options} options\n *   Configuration.\n * @returns {HastElement}\n *   Equivalent hast node.\n */\nfunction element(node, options) {\n  const space = node.namespaceURI\n  const fn = space === web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.svg ? hastscript__WEBPACK_IMPORTED_MODULE_1__.s : hastscript__WEBPACK_IMPORTED_MODULE_2__.h\n  const tagName =\n    space === web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.html ? node.tagName.toLowerCase() : node.tagName\n  /** @type {DocumentFragment | Element} */\n  const content =\n    // @ts-expect-error Types are wrong.\n    space === web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.html && tagName === 'template' ? node.content : node\n  const attributes = node.getAttributeNames()\n  /** @type {Record<string, string>} */\n  const props = {}\n  let index = -1\n\n  while (++index < attributes.length) {\n    props[attributes[index]] = node.getAttribute(attributes[index]) || ''\n  }\n\n  return fn(tagName, props, all(content, options))\n}\n\n/**\n * Transform child nodes in a parent.\n *\n * @param {Document | DocumentFragment | Element} node\n *   DOM node to transform.\n * @param {Options} options\n *   Configuration.\n * @returns {Array<HastContent>}\n *   Equivalent hast nodes.\n */\nfunction all(node, options) {\n  const nodes = node.childNodes\n  /** @type {Array<HastContent>} */\n  const children = []\n  let index = -1\n\n  while (++index < nodes.length) {\n    const child = transform(nodes[index], options)\n\n    if (child !== undefined) {\n      // @ts-expect-error Assume no document inside document.\n      children.push(child)\n    }\n  }\n\n  return children\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20tZG9tL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHdCQUF3QjtBQUNyQzs7QUFFQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7O0FBRTRDO0FBQ2I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLHFEQUFxRDtBQUNyRCxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWEsT0FBTyx5Q0FBQyxHQUFHLHlDQUFDO0FBQ2hEO0FBQ0EsY0FBYyx5REFBYTtBQUMzQixhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0EsY0FBYyx5REFBYTtBQUMzQjtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1Q0FBdUM7QUFDbEQ7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVuYm9hcmQvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20tZG9tL2xpYi9pbmRleC5qcz9lNTk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IEhhc3RSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRG9jVHlwZX0gSGFzdERvY3R5cGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBIYXN0RWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlRleHR9IEhhc3RUZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuQ29tbWVudH0gSGFzdENvbW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Db250ZW50fSBIYXN0Q29udGVudFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0hhc3RDb250ZW50IHwgSGFzdFJvb3R9IEhhc3ROb2RlXG4gKlxuICogQGNhbGxiYWNrIEFmdGVyVHJhbnNmb3JtXG4gKiAgIENhbGxiYWNrIGNhbGxlZCB3aGVuIGVhY2ggbm9kZSBpcyB0cmFuc2Zvcm1lZC5cbiAqIEBwYXJhbSB7Tm9kZX0gZG9tTm9kZVxuICogICBET00gbm9kZSB0aGF0IHdhcyBoYW5kbGVkLlxuICogQHBhcmFtIHtIYXN0Tm9kZX0gaGFzdE5vZGVcbiAqICAgQ29ycmVzcG9uZGluZyBoYXN0IG5vZGUuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqICAgTm90aGluZy5cbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge0FmdGVyVHJhbnNmb3JtIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FmdGVyVHJhbnNmb3JtXVxuICogICBDYWxsYmFjayBjYWxsZWQgd2hlbiBlYWNoIG5vZGUgaXMgdHJhbnNmb3JtZWQuXG4gKi9cblxuaW1wb3J0IHt3ZWJOYW1lc3BhY2VzfSBmcm9tICd3ZWItbmFtZXNwYWNlcydcbmltcG9ydCB7aCwgc30gZnJvbSAnaGFzdHNjcmlwdCdcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBET00gdHJlZSB0byBhIGhhc3QgdHJlZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRyZWVcbiAqICAgRE9NIHRyZWUgdG8gdHJhbnNmb3JtLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtIYXN0Tm9kZX1cbiAqICAgRXF1aXZhbGVudCBoYXN0IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRG9tKHRyZWUsIG9wdGlvbnMpIHtcbiAgY29uc3QgcmVzdWx0ID0gdHJlZSA/IHRyYW5zZm9ybSh0cmVlLCBvcHRpb25zIHx8IHt9KSA6IHVuZGVmaW5lZFxuICByZXR1cm4gcmVzdWx0IHx8IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBbXX1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqICAgRE9NIG5vZGUgdG8gdHJhbnNmb3JtLlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7SGFzdE5vZGUgfCB1bmRlZmluZWR9XG4gKiAgIEVxdWl2YWxlbnQgaGFzdCBub2RlLlxuICpcbiAqICAgTm90ZSB0aGF0IGNlcnRhaW4gbGVnYWN5IERPTSBub2RlcyAoaS5lLiwgQXR0ciBub2RlcyAoMiksICBDREFUQSwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbnMpXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybShub2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gb25lKG5vZGUsIG9wdGlvbnMpXG4gIGlmICh0cmFuc2Zvcm1lZCAmJiBvcHRpb25zLmFmdGVyVHJhbnNmb3JtKVxuICAgIG9wdGlvbnMuYWZ0ZXJUcmFuc2Zvcm0obm9kZSwgdHJhbnNmb3JtZWQpXG4gIHJldHVybiB0cmFuc2Zvcm1lZFxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogICBET00gbm9kZSB0byB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtIYXN0Tm9kZSB8IHVuZGVmaW5lZH1cbiAqICAgRXF1aXZhbGVudCBoYXN0IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIG9uZShub2RlLCBvcHRpb25zKSB7XG4gIHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuICAgIGNhc2UgMSAvKiBFbGVtZW50ICovOiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGVTY3JpcHQgaXMgd3JvbmcuXG4gICAgICByZXR1cm4gZWxlbWVudChub2RlLCBvcHRpb25zKVxuICAgIH1cblxuICAgIC8vIElnbm9yZTogQXR0ciAoMikuXG5cbiAgICBjYXNlIDMgLyogVGV4dCAqLzoge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUeXBlU2NyaXB0IGlzIHdyb25nLlxuICAgICAgcmV0dXJuIHRleHQobm9kZSlcbiAgICB9XG5cbiAgICAvLyBJZ25vcmU6IENEQVRBICg0KS5cbiAgICAvLyBSZW1vdmVkOiBFbnRpdHkgcmVmZXJlbmNlICg1KVxuICAgIC8vIFJlbW92ZWQ6IEVudGl0eSAoNilcbiAgICAvLyBJZ25vcmU6IFByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gKDcpLlxuXG4gICAgY2FzZSA4IC8qIENvbW1lbnQgKi86IHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVHlwZVNjcmlwdCBpcyB3cm9uZy5cbiAgICAgIHJldHVybiBjb21tZW50KG5vZGUpXG4gICAgfVxuXG4gICAgY2FzZSA5IC8qIERvY3VtZW50ICovOiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGVTY3JpcHQgaXMgd3JvbmcuXG4gICAgICByZXR1cm4gcm9vdChub2RlLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGNhc2UgMTAgLyogRG9jdW1lbnQgdHlwZSAqLzoge1xuICAgICAgcmV0dXJuIGRvY3R5cGUoKVxuICAgIH1cblxuICAgIGNhc2UgMTEgLyogRG9jdW1lbnQgZnJhZ21lbnQgKi86IHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVHlwZVNjcmlwdCBpcyB3cm9uZy5cbiAgICAgIHJldHVybiByb290KG5vZGUsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhIGRvY3VtZW50LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSBub2RlXG4gKiAgIERPTSBub2RlIHRvIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge0hhc3RSb290fVxuICogICBFcXVpdmFsZW50IGhhc3Qgbm9kZS5cbiAqL1xuZnVuY3Rpb24gcm9vdChub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiB7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogYWxsKG5vZGUsIG9wdGlvbnMpfVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhIGRvY3R5cGUuXG4gKlxuICogQHJldHVybnMge0hhc3REb2N0eXBlfVxuICogICBFcXVpdmFsZW50IGhhc3Qgbm9kZS5cbiAqL1xuZnVuY3Rpb24gZG9jdHlwZSgpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciBoYXN0IHR5cGVzIG91dCBvZiBkYXRlLlxuICByZXR1cm4ge3R5cGU6ICdkb2N0eXBlJ31cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7VGV4dH0gbm9kZVxuICogICBET00gbm9kZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7SGFzdFRleHR9XG4gKiAgIEVxdWl2YWxlbnQgaGFzdCBub2RlLlxuICovXG5mdW5jdGlvbiB0ZXh0KG5vZGUpIHtcbiAgcmV0dXJuIHt0eXBlOiAndGV4dCcsIHZhbHVlOiBub2RlLm5vZGVWYWx1ZSB8fCAnJ31cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBjb21tZW50LlxuICpcbiAqIEBwYXJhbSB7Q29tbWVudH0gbm9kZVxuICogICBET00gbm9kZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7SGFzdENvbW1lbnR9XG4gKiAgIEVxdWl2YWxlbnQgaGFzdCBub2RlLlxuICovXG5mdW5jdGlvbiBjb21tZW50KG5vZGUpIHtcbiAgcmV0dXJuIHt0eXBlOiAnY29tbWVudCcsIHZhbHVlOiBub2RlLm5vZGVWYWx1ZSB8fCAnJ31cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqICAgRE9NIG5vZGUgdG8gdHJhbnNmb3JtLlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyB7SGFzdEVsZW1lbnR9XG4gKiAgIEVxdWl2YWxlbnQgaGFzdCBub2RlLlxuICovXG5mdW5jdGlvbiBlbGVtZW50KG5vZGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc3BhY2UgPSBub2RlLm5hbWVzcGFjZVVSSVxuICBjb25zdCBmbiA9IHNwYWNlID09PSB3ZWJOYW1lc3BhY2VzLnN2ZyA/IHMgOiBoXG4gIGNvbnN0IHRhZ05hbWUgPVxuICAgIHNwYWNlID09PSB3ZWJOYW1lc3BhY2VzLmh0bWwgPyBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA6IG5vZGUudGFnTmFtZVxuICAvKiogQHR5cGUge0RvY3VtZW50RnJhZ21lbnQgfCBFbGVtZW50fSAqL1xuICBjb25zdCBjb250ZW50ID1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGVzIGFyZSB3cm9uZy5cbiAgICBzcGFjZSA9PT0gd2ViTmFtZXNwYWNlcy5odG1sICYmIHRhZ05hbWUgPT09ICd0ZW1wbGF0ZScgPyBub2RlLmNvbnRlbnQgOiBub2RlXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKClcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICBjb25zdCBwcm9wcyA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBhdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgIHByb3BzW2F0dHJpYnV0ZXNbaW5kZXhdXSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNbaW5kZXhdKSB8fCAnJ1xuICB9XG5cbiAgcmV0dXJuIGZuKHRhZ05hbWUsIHByb3BzLCBhbGwoY29udGVudCwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGNoaWxkIG5vZGVzIGluIGEgcGFyZW50LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnQgfCBEb2N1bWVudEZyYWdtZW50IHwgRWxlbWVudH0gbm9kZVxuICogICBET00gbm9kZSB0byB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheTxIYXN0Q29udGVudD59XG4gKiAgIEVxdWl2YWxlbnQgaGFzdCBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gYWxsKG5vZGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgbm9kZXMgPSBub2RlLmNoaWxkTm9kZXNcbiAgLyoqIEB0eXBlIHtBcnJheTxIYXN0Q29udGVudD59ICovXG4gIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IG5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGNoaWxkID0gdHJhbnNmb3JtKG5vZGVzW2luZGV4XSwgb3B0aW9ucylcblxuICAgIGlmIChjaGlsZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIEFzc3VtZSBubyBkb2N1bWVudCBpbnNpZGUgZG9jdW1lbnQuXG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-from-dom/lib/index.js\n");

/***/ })

};
;