"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-is";
exports.ids = ["vendor-chunks/unist-util-is"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-is/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/unist-util-is/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convert: () => (/* binding */ convert),\n/* harmony export */   is: () => (/* binding */ is)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Parent} Parent\n */\n\n/**\n * @typedef {Record<string, unknown>} Props\n * @typedef {null | undefined | string | Props | TestFunctionAnything | Array<string | Props | TestFunctionAnything>} Test\n *   Check for an arbitrary node, unaware of TypeScript inferral.\n *\n * @callback TestFunctionAnything\n *   Check if a node passes a test, unaware of TypeScript inferral.\n * @param {unknown} this\n *   The given context.\n * @param {Node} node\n *   A node.\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean | void}\n *   Whether this node passes the test.\n */\n\n/**\n * @template {Node} Kind\n *   Node type.\n * @typedef {Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind> | Array<Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind>>} PredicateTest\n *   Check for a node that can be inferred by TypeScript.\n */\n\n/**\n * Check if a node passes a certain test.\n *\n * @template {Node} Kind\n *   Node type.\n * @callback TestFunctionPredicate\n *   Complex test function for a node that can be inferred by TypeScript.\n * @param {Node} node\n *   A node.\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {node is Kind}\n *   Whether this node passes the test.\n */\n\n/**\n * @callback AssertAnything\n *   Check that an arbitrary value is a node, unaware of TypeScript inferral.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean}\n *   Whether this is a node and passes a test.\n */\n\n/**\n * Check if a node is a node and passes a certain node test.\n *\n * @template {Node} Kind\n *   Node type.\n * @callback AssertPredicate\n *   Check that an arbitrary value is a specific node, aware of TypeScript.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {node is Kind}\n *   Whether this is a node and passes a test.\n */\n\n/**\n * Check if `node` is a `Node` and whether it passes the given test.\n *\n * @param node\n *   Thing to check, typically `Node`.\n * @param test\n *   A check for a specific node.\n * @param index\n *   The node’s position in its parent.\n * @param parent\n *   The node’s parent.\n * @returns\n *   Whether `node` is a node and passes a test.\n */\nconst is =\n  /**\n   * @type {(\n   *   (() => false) &\n   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index: number, parent: Parent, context?: unknown) => node is Kind) &\n   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index?: null | undefined, parent?: null | undefined, context?: unknown) => node is Kind) &\n   *   ((node: unknown, test: Test, index: number, parent: Parent, context?: unknown) => boolean) &\n   *   ((node: unknown, test?: Test, index?: null | undefined, parent?: null | undefined, context?: unknown) => boolean)\n   * )}\n   */\n  (\n    /**\n     * @param {unknown} [node]\n     * @param {Test} [test]\n     * @param {number | null | undefined} [index]\n     * @param {Parent | null | undefined} [parent]\n     * @param {unknown} [context]\n     * @returns {boolean}\n     */\n    // eslint-disable-next-line max-params\n    function is(node, test, index, parent, context) {\n      const check = convert(test)\n\n      if (\n        index !== undefined &&\n        index !== null &&\n        (typeof index !== 'number' ||\n          index < 0 ||\n          index === Number.POSITIVE_INFINITY)\n      ) {\n        throw new Error('Expected positive finite index')\n      }\n\n      if (\n        parent !== undefined &&\n        parent !== null &&\n        (!is(parent) || !parent.children)\n      ) {\n        throw new Error('Expected parent node')\n      }\n\n      if (\n        (parent === undefined || parent === null) !==\n        (index === undefined || index === null)\n      ) {\n        throw new Error('Expected both parent and index')\n      }\n\n      // @ts-expect-error Looks like a node.\n      return node && node.type && typeof node.type === 'string'\n        ? Boolean(check.call(context, node, index, parent))\n        : false\n    }\n  )\n\n/**\n * Generate an assertion from a test.\n *\n * Useful if you’re going to test many nodes, for example when creating a\n * utility where something else passes a compatible test.\n *\n * The created function is a bit faster because it expects valid input only:\n * a `node`, `index`, and `parent`.\n *\n * @param test\n *   *   when nullish, checks if `node` is a `Node`.\n *   *   when `string`, works like passing `(node) => node.type === test`.\n *   *   when `function` checks if function passed the node is true.\n *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.\n *   *   when `array`, checks if any one of the subtests pass.\n * @returns\n *   An assertion.\n */\nconst convert =\n  /**\n   * @type {(\n   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &\n   *   ((test?: Test) => AssertAnything)\n   * )}\n   */\n  (\n    /**\n     * @param {Test} [test]\n     * @returns {AssertAnything}\n     */\n    function (test) {\n      if (test === undefined || test === null) {\n        return ok\n      }\n\n      if (typeof test === 'string') {\n        return typeFactory(test)\n      }\n\n      if (typeof test === 'object') {\n        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)\n      }\n\n      if (typeof test === 'function') {\n        return castFactory(test)\n      }\n\n      throw new Error('Expected function, string, or object as test')\n    }\n  )\n\n/**\n * @param {Array<string | Props | TestFunctionAnything>} tests\n * @returns {AssertAnything}\n */\nfunction anyFactory(tests) {\n  /** @type {Array<AssertAnything>} */\n  const checks = []\n  let index = -1\n\n  while (++index < tests.length) {\n    checks[index] = convert(tests[index])\n  }\n\n  return castFactory(any)\n\n  /**\n   * @this {unknown}\n   * @param {Array<unknown>} parameters\n   * @returns {boolean}\n   */\n  function any(...parameters) {\n    let index = -1\n\n    while (++index < checks.length) {\n      if (checks[index].call(this, ...parameters)) return true\n    }\n\n    return false\n  }\n}\n\n/**\n * Turn an object into a test for a node with a certain fields.\n *\n * @param {Props} check\n * @returns {AssertAnything}\n */\nfunction propsFactory(check) {\n  return castFactory(all)\n\n  /**\n   * @param {Node} node\n   * @returns {boolean}\n   */\n  function all(node) {\n    /** @type {string} */\n    let key\n\n    for (key in check) {\n      // @ts-expect-error: hush, it sure works as an index.\n      if (node[key] !== check[key]) return false\n    }\n\n    return true\n  }\n}\n\n/**\n * Turn a string into a test for a node with a certain type.\n *\n * @param {string} check\n * @returns {AssertAnything}\n */\nfunction typeFactory(check) {\n  return castFactory(type)\n\n  /**\n   * @param {Node} node\n   */\n  function type(node) {\n    return node && node.type === check\n  }\n}\n\n/**\n * Turn a custom test into a test for a node that passes that test.\n *\n * @param {TestFunctionAnything} check\n * @returns {AssertAnything}\n */\nfunction castFactory(check) {\n  return assertion\n\n  /**\n   * @this {unknown}\n   * @param {unknown} node\n   * @param {Array<unknown>} parameters\n   * @returns {boolean}\n   */\n  function assertion(node, ...parameters) {\n    return Boolean(\n      node &&\n        typeof node === 'object' &&\n        'type' in node &&\n        // @ts-expect-error: fine.\n        Boolean(check.call(this, node, ...parameters))\n    )\n  }\n}\n\nfunction ok() {\n  return true\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDOztBQUVBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5R0FBeUc7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQSxhQUFhLGdJQUFnSTtBQUM3STtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsTUFBTTtBQUNyQixlQUFlLDJCQUEyQjtBQUMxQyxlQUFlLDJCQUEyQjtBQUMxQyxlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsOENBQThDO0FBQ3pELGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYSxnQkFBZ0I7QUFDN0IsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYSxTQUFTO0FBQ3RCLGFBQWEsZ0JBQWdCO0FBQzdCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvbGliL2luZGV4LmpzP2Y2NzAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBQYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gUHJvcHNcbiAqIEB0eXBlZGVmIHtudWxsIHwgdW5kZWZpbmVkIHwgc3RyaW5nIHwgUHJvcHMgfCBUZXN0RnVuY3Rpb25Bbnl0aGluZyB8IEFycmF5PHN0cmluZyB8IFByb3BzIHwgVGVzdEZ1bmN0aW9uQW55dGhpbmc+fSBUZXN0XG4gKiAgIENoZWNrIGZvciBhbiBhcmJpdHJhcnkgbm9kZSwgdW5hd2FyZSBvZiBUeXBlU2NyaXB0IGluZmVycmFsLlxuICpcbiAqIEBjYWxsYmFjayBUZXN0RnVuY3Rpb25Bbnl0aGluZ1xuICogICBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdCwgdW5hd2FyZSBvZiBUeXBlU2NyaXB0IGluZmVycmFsLlxuICogQHBhcmFtIHt1bmtub3dufSB0aGlzXG4gKiAgIFRoZSBnaXZlbiBjb250ZXh0LlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiAgIEEgbm9kZS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEByZXR1cm5zIHtib29sZWFuIHwgdm9pZH1cbiAqICAgV2hldGhlciB0aGlzIG5vZGUgcGFzc2VzIHRoZSB0ZXN0LlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtOb2RlfSBLaW5kXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0eXBlZGVmIHtLaW5kWyd0eXBlJ10gfCBQYXJ0aWFsPEtpbmQ+IHwgVGVzdEZ1bmN0aW9uUHJlZGljYXRlPEtpbmQ+IHwgQXJyYXk8S2luZFsndHlwZSddIHwgUGFydGlhbDxLaW5kPiB8IFRlc3RGdW5jdGlvblByZWRpY2F0ZTxLaW5kPj59IFByZWRpY2F0ZVRlc3RcbiAqICAgQ2hlY2sgZm9yIGEgbm9kZSB0aGF0IGNhbiBiZSBpbmZlcnJlZCBieSBUeXBlU2NyaXB0LlxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIHBhc3NlcyBhIGNlcnRhaW4gdGVzdC5cbiAqXG4gKiBAdGVtcGxhdGUge05vZGV9IEtpbmRcbiAqICAgTm9kZSB0eXBlLlxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvblByZWRpY2F0ZVxuICogICBDb21wbGV4IHRlc3QgZnVuY3Rpb24gZm9yIGEgbm9kZSB0aGF0IGNhbiBiZSBpbmZlcnJlZCBieSBUeXBlU2NyaXB0LlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiAgIEEgbm9kZS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEByZXR1cm5zIHtub2RlIGlzIEtpbmR9XG4gKiAgIFdoZXRoZXIgdGhpcyBub2RlIHBhc3NlcyB0aGUgdGVzdC5cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBc3NlcnRBbnl0aGluZ1xuICogICBDaGVjayB0aGF0IGFuIGFyYml0cmFyeSB2YWx1ZSBpcyBhIG5vZGUsIHVuYXdhcmUgb2YgVHlwZVNjcmlwdCBpbmZlcnJhbC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gW25vZGVdXG4gKiAgIEFueXRoaW5nICh0eXBpY2FsbHkgYSBub2RlKS5cbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIHRoaXMgaXMgYSBub2RlIGFuZCBwYXNzZXMgYSB0ZXN0LlxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGEgbm9kZSBhbmQgcGFzc2VzIGEgY2VydGFpbiBub2RlIHRlc3QuXG4gKlxuICogQHRlbXBsYXRlIHtOb2RlfSBLaW5kXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEBjYWxsYmFjayBBc3NlcnRQcmVkaWNhdGVcbiAqICAgQ2hlY2sgdGhhdCBhbiBhcmJpdHJhcnkgdmFsdWUgaXMgYSBzcGVjaWZpYyBub2RlLCBhd2FyZSBvZiBUeXBlU2NyaXB0LlxuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqICAgQW55dGhpbmcgKHR5cGljYWxseSBhIG5vZGUpLlxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbaW5kZXhdXG4gKiAgIFRoZSBub2Rl4oCZcyBwb3NpdGlvbiBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHtQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkfSBbcGFyZW50XVxuICogICBUaGUgbm9kZeKAmXMgcGFyZW50LlxuICogQHJldHVybnMge25vZGUgaXMgS2luZH1cbiAqICAgV2hldGhlciB0aGlzIGlzIGEgbm9kZSBhbmQgcGFzc2VzIGEgdGVzdC5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGBub2RlYCBpcyBhIGBOb2RlYCBhbmQgd2hldGhlciBpdCBwYXNzZXMgdGhlIGdpdmVuIHRlc3QuXG4gKlxuICogQHBhcmFtIG5vZGVcbiAqICAgVGhpbmcgdG8gY2hlY2ssIHR5cGljYWxseSBgTm9kZWAuXG4gKiBAcGFyYW0gdGVzdFxuICogICBBIGNoZWNrIGZvciBhIHNwZWNpZmljIG5vZGUuXG4gKiBAcGFyYW0gaW5kZXhcbiAqICAgVGhlIG5vZGXigJlzIHBvc2l0aW9uIGluIGl0cyBwYXJlbnQuXG4gKiBAcGFyYW0gcGFyZW50XG4gKiAgIFRoZSBub2Rl4oCZcyBwYXJlbnQuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGBub2RlYCBpcyBhIG5vZGUgYW5kIHBhc3NlcyBhIHRlc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBpcyA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICgoKSA9PiBmYWxzZSkgJlxuICAgKiAgICg8S2luZCBleHRlbmRzIE5vZGUgPSBOb2RlPihub2RlOiB1bmtub3duLCB0ZXN0OiBQcmVkaWNhdGVUZXN0PEtpbmQ+LCBpbmRleDogbnVtYmVyLCBwYXJlbnQ6IFBhcmVudCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgS2luZCkgJlxuICAgKiAgICg8S2luZCBleHRlbmRzIE5vZGUgPSBOb2RlPihub2RlOiB1bmtub3duLCB0ZXN0OiBQcmVkaWNhdGVUZXN0PEtpbmQ+LCBpbmRleD86IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIEtpbmQpICZcbiAgICogICAoKG5vZGU6IHVua25vd24sIHRlc3Q6IFRlc3QsIGluZGV4OiBudW1iZXIsIHBhcmVudDogUGFyZW50LCBjb250ZXh0PzogdW5rbm93bikgPT4gYm9vbGVhbikgJlxuICAgKiAgICgobm9kZTogdW5rbm93biwgdGVzdD86IFRlc3QsIGluZGV4PzogbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IGJvb2xlYW4pXG4gICAqICl9XG4gICAqL1xuICAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAgICAgKiBAcGFyYW0ge1Rlc3R9IFt0ZXN0XVxuICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICAgICAqIEBwYXJhbSB7UGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3BhcmVudF1cbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtjb250ZXh0XVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG4gICAgZnVuY3Rpb24gaXMobm9kZSwgdGVzdCwgaW5kZXgsIHBhcmVudCwgY29udGV4dCkge1xuICAgICAgY29uc3QgY2hlY2sgPSBjb252ZXJ0KHRlc3QpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBpbmRleCAhPT0gbnVsbCAmJlxuICAgICAgICAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgIGluZGV4IDwgMCB8fFxuICAgICAgICAgIGluZGV4ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHBhcmVudCAhPT0gbnVsbCAmJlxuICAgICAgICAoIWlzKHBhcmVudCkgfHwgIXBhcmVudC5jaGlsZHJlbilcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocGFyZW50ID09PSB1bmRlZmluZWQgfHwgcGFyZW50ID09PSBudWxsKSAhPT1cbiAgICAgICAgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBib3RoIHBhcmVudCBhbmQgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYSBub2RlLlxuICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlICYmIHR5cGVvZiBub2RlLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQm9vbGVhbihjaGVjay5jYWxsKGNvbnRleHQsIG5vZGUsIGluZGV4LCBwYXJlbnQpKVxuICAgICAgICA6IGZhbHNlXG4gICAgfVxuICApXG5cbi8qKlxuICogR2VuZXJhdGUgYW4gYXNzZXJ0aW9uIGZyb20gYSB0ZXN0LlxuICpcbiAqIFVzZWZ1bCBpZiB5b3XigJlyZSBnb2luZyB0byB0ZXN0IG1hbnkgbm9kZXMsIGZvciBleGFtcGxlIHdoZW4gY3JlYXRpbmcgYVxuICogdXRpbGl0eSB3aGVyZSBzb21ldGhpbmcgZWxzZSBwYXNzZXMgYSBjb21wYXRpYmxlIHRlc3QuXG4gKlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb24gaXMgYSBiaXQgZmFzdGVyIGJlY2F1c2UgaXQgZXhwZWN0cyB2YWxpZCBpbnB1dCBvbmx5OlxuICogYSBgbm9kZWAsIGBpbmRleGAsIGFuZCBgcGFyZW50YC5cbiAqXG4gKiBAcGFyYW0gdGVzdFxuICogICAqICAgd2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICogICAqICAgd2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGAobm9kZSkgPT4gbm9kZS50eXBlID09PSB0ZXN0YC5cbiAqICAgKiAgIHdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gKiAgICogICB3aGVuIGBvYmplY3RgLCBjaGVja3MgdGhhdCBhbGwga2V5cyBpbiB0ZXN0IGFyZSBpbiBub2RlLCBhbmQgdGhhdCB0aGV5IGhhdmUgKHN0cmljdGx5KSBlcXVhbCB2YWx1ZXMuXG4gKiAgICogICB3aGVuIGBhcnJheWAsIGNoZWNrcyBpZiBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICogQHJldHVybnNcbiAqICAgQW4gYXNzZXJ0aW9uLlxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9XG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8S2luZCBleHRlbmRzIE5vZGU+KHRlc3Q6IFByZWRpY2F0ZVRlc3Q8S2luZD4pID0+IEFzc2VydFByZWRpY2F0ZTxLaW5kPikgJlxuICAgKiAgICgodGVzdD86IFRlc3QpID0+IEFzc2VydEFueXRoaW5nKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0ZXN0KSB7XG4gICAgICBpZiAodGVzdCA9PT0gdW5kZWZpbmVkIHx8IHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9rXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGVzdCkgPyBhbnlGYWN0b3J5KHRlc3QpIDogcHJvcHNGYWN0b3J5KHRlc3QpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FzdEZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG4gICAgfVxuICApXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmcgfCBQcm9wcyB8IFRlc3RGdW5jdGlvbkFueXRoaW5nPn0gdGVzdHNcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICAvKiogQHR5cGUge0FycmF5PEFzc2VydEFueXRoaW5nPn0gKi9cbiAgY29uc3QgY2hlY2tzID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjYXN0RmFjdG9yeShhbnkpXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge0FycmF5PHVua25vd24+fSBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gYW55KC4uLnBhcmFtZXRlcnMpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGVja3MubGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5jYWxsKHRoaXMsIC4uLnBhcmFtZXRlcnMpKSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogVHVybiBhbiBvYmplY3QgaW50byBhIHRlc3QgZm9yIGEgbm9kZSB3aXRoIGEgY2VydGFpbiBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtQcm9wc30gY2hlY2tcbiAqIEByZXR1cm5zIHtBc3NlcnRBbnl0aGluZ31cbiAqL1xuZnVuY3Rpb24gcHJvcHNGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBjYXN0RmFjdG9yeShhbGwpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFsbChub2RlKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IGtleVxuXG4gICAgZm9yIChrZXkgaW4gY2hlY2spIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGh1c2gsIGl0IHN1cmUgd29ya3MgYXMgYW4gaW5kZXguXG4gICAgICBpZiAobm9kZVtrZXldICE9PSBjaGVja1trZXldKSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogVHVybiBhIHN0cmluZyBpbnRvIGEgdGVzdCBmb3IgYSBub2RlIHdpdGggYSBjZXJ0YWluIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrXG4gKiBAcmV0dXJucyB7QXNzZXJ0QW55dGhpbmd9XG4gKi9cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBjYXN0RmFjdG9yeSh0eXBlKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSA9PT0gY2hlY2tcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSBjdXN0b20gdGVzdCBpbnRvIGEgdGVzdCBmb3IgYSBub2RlIHRoYXQgcGFzc2VzIHRoYXQgdGVzdC5cbiAqXG4gKiBAcGFyYW0ge1Rlc3RGdW5jdGlvbkFueXRoaW5nfSBjaGVja1xuICogQHJldHVybnMge0Fzc2VydEFueXRoaW5nfVxuICovXG5mdW5jdGlvbiBjYXN0RmFjdG9yeShjaGVjaykge1xuICByZXR1cm4gYXNzZXJ0aW9uXG5cbiAgLyoqXG4gICAqIEB0aGlzIHt1bmtub3dufVxuICAgKiBAcGFyYW0ge3Vua25vd259IG5vZGVcbiAgICogQHBhcmFtIHtBcnJheTx1bmtub3duPn0gcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VydGlvbihub2RlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICBub2RlICYmXG4gICAgICAgIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAndHlwZScgaW4gbm9kZSAmJlxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBmaW5lLlxuICAgICAgICBCb29sZWFuKGNoZWNrLmNhbGwodGhpcywgbm9kZSwgLi4ucGFyYW1ldGVycykpXG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-is/lib/index.js\n");

/***/ })

};
;