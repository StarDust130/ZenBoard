"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zwitch";
exports.ids = ["vendor-chunks/zwitch"];
exports.modules = {

/***/ "(ssr)/./node_modules/zwitch/index.js":
/*!**************************************!*\
  !*** ./node_modules/zwitch/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   zwitch: () => (/* binding */ zwitch)\n/* harmony export */ });\n/**\n * @callback Handler\n *   Handle a value, with a certain ID field set to a certain value.\n *   The ID field is passed to `zwitch`, and it’s value is this function’s\n *   place on the `handlers` record.\n * @param {...any} parameters\n *   Arbitrary parameters passed to the zwitch.\n *   The first will be an object with a certain ID field set to a certain value.\n * @returns {any}\n *   Anything!\n */\n\n/**\n * @callback UnknownHandler\n *   Handle values that do have a certain ID field, but it’s set to a value\n *   that is not listed in the `handlers` record.\n * @param {unknown} value\n *   An object with a certain ID field set to an unknown value.\n * @param {...any} rest\n *   Arbitrary parameters passed to the zwitch.\n * @returns {any}\n *   Anything!\n */\n\n/**\n * @callback InvalidHandler\n *   Handle values that do not have a certain ID field.\n * @param {unknown} value\n *   Any unknown value.\n * @param {...any} rest\n *   Arbitrary parameters passed to the zwitch.\n * @returns {void|null|undefined|never}\n *   This should crash or return nothing.\n */\n\n/**\n * @template {InvalidHandler} [Invalid=InvalidHandler]\n * @template {UnknownHandler} [Unknown=UnknownHandler]\n * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]\n * @typedef Options\n *   Configuration (required).\n * @property {Invalid} [invalid]\n *   Handler to use for invalid values.\n * @property {Unknown} [unknown]\n *   Handler to use for unknown values.\n * @property {Handlers} [handlers]\n *   Handlers to use.\n */\n\nconst own = {}.hasOwnProperty\n\n/**\n * Handle values based on a field.\n *\n * @template {InvalidHandler} [Invalid=InvalidHandler]\n * @template {UnknownHandler} [Unknown=UnknownHandler]\n * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]\n * @param {string} key\n *   Field to switch on.\n * @param {Options<Invalid, Unknown, Handlers>} [options]\n *   Configuration (required).\n * @returns {{unknown: Unknown, invalid: Invalid, handlers: Handlers, (...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<Handlers[keyof Handlers]>, (...parameters: Parameters<Unknown>): ReturnType<Unknown>}}\n */\nfunction zwitch(key, options) {\n  const settings = options || {}\n\n  /**\n   * Handle one value.\n   *\n   * Based on the bound `key`, a respective handler will be called.\n   * If `value` is not an object, or doesn’t have a `key` property, the special\n   * “invalid” handler will be called.\n   * If `value` has an unknown `key`, the special “unknown” handler will be\n   * called.\n   *\n   * All arguments, and the context object, are passed through to the handler,\n   * and it’s result is returned.\n   *\n   * @this {unknown}\n   *   Any context object.\n   * @param {unknown} [value]\n   *   Any value.\n   * @param {...unknown} parameters\n   *   Arbitrary parameters passed to the zwitch.\n   * @property {Handler} invalid\n   *   Handle for values that do not have a certain ID field.\n   * @property {Handler} unknown\n   *   Handle values that do have a certain ID field, but it’s set to a value\n   *   that is not listed in the `handlers` record.\n   * @property {Handlers} handlers\n   *   Record of handlers.\n   * @returns {unknown}\n   *   Anything.\n   */\n  function one(value, ...parameters) {\n    /** @type {Handler|undefined} */\n    let fn = one.invalid\n    const handlers = one.handlers\n\n    if (value && own.call(value, key)) {\n      // @ts-expect-error Indexable.\n      const id = String(value[key])\n      // @ts-expect-error Indexable.\n      fn = own.call(handlers, id) ? handlers[id] : one.unknown\n    }\n\n    if (fn) {\n      return fn.call(this, value, ...parameters)\n    }\n  }\n\n  one.handlers = settings.handlers || {}\n  one.invalid = settings.invalid\n  one.unknown = settings.unknown\n\n  // @ts-expect-error: matches!\n  return one\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvendpdGNoL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUIsY0FBYyxnQkFBZ0I7QUFDOUIsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUIsY0FBYyxnQkFBZ0I7QUFDOUIsY0FBYyx5QkFBeUI7QUFDdkMsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQ7QUFDQSxjQUFjO0FBQ2Q7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy96d2l0Y2gvaW5kZXguanM/ODk0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjYWxsYmFjayBIYW5kbGVyXG4gKiAgIEhhbmRsZSBhIHZhbHVlLCB3aXRoIGEgY2VydGFpbiBJRCBmaWVsZCBzZXQgdG8gYSBjZXJ0YWluIHZhbHVlLlxuICogICBUaGUgSUQgZmllbGQgaXMgcGFzc2VkIHRvIGB6d2l0Y2hgLCBhbmQgaXTigJlzIHZhbHVlIGlzIHRoaXMgZnVuY3Rpb27igJlzXG4gKiAgIHBsYWNlIG9uIHRoZSBgaGFuZGxlcnNgIHJlY29yZC5cbiAqIEBwYXJhbSB7Li4uYW55fSBwYXJhbWV0ZXJzXG4gKiAgIEFyYml0cmFyeSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGUgendpdGNoLlxuICogICBUaGUgZmlyc3Qgd2lsbCBiZSBhbiBvYmplY3Qgd2l0aCBhIGNlcnRhaW4gSUQgZmllbGQgc2V0IHRvIGEgY2VydGFpbiB2YWx1ZS5cbiAqIEByZXR1cm5zIHthbnl9XG4gKiAgIEFueXRoaW5nIVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFVua25vd25IYW5kbGVyXG4gKiAgIEhhbmRsZSB2YWx1ZXMgdGhhdCBkbyBoYXZlIGEgY2VydGFpbiBJRCBmaWVsZCwgYnV0IGl04oCZcyBzZXQgdG8gYSB2YWx1ZVxuICogICB0aGF0IGlzIG5vdCBsaXN0ZWQgaW4gdGhlIGBoYW5kbGVyc2AgcmVjb3JkLlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogICBBbiBvYmplY3Qgd2l0aCBhIGNlcnRhaW4gSUQgZmllbGQgc2V0IHRvIGFuIHVua25vd24gdmFsdWUuXG4gKiBAcGFyYW0gey4uLmFueX0gcmVzdFxuICogICBBcmJpdHJhcnkgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhlIHp3aXRjaC5cbiAqIEByZXR1cm5zIHthbnl9XG4gKiAgIEFueXRoaW5nIVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEludmFsaWRIYW5kbGVyXG4gKiAgIEhhbmRsZSB2YWx1ZXMgdGhhdCBkbyBub3QgaGF2ZSBhIGNlcnRhaW4gSUQgZmllbGQuXG4gKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG4gKiAgIEFueSB1bmtub3duIHZhbHVlLlxuICogQHBhcmFtIHsuLi5hbnl9IHJlc3RcbiAqICAgQXJiaXRyYXJ5IHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoZSB6d2l0Y2guXG4gKiBAcmV0dXJucyB7dm9pZHxudWxsfHVuZGVmaW5lZHxuZXZlcn1cbiAqICAgVGhpcyBzaG91bGQgY3Jhc2ggb3IgcmV0dXJuIG5vdGhpbmcuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge0ludmFsaWRIYW5kbGVyfSBbSW52YWxpZD1JbnZhbGlkSGFuZGxlcl1cbiAqIEB0ZW1wbGF0ZSB7VW5rbm93bkhhbmRsZXJ9IFtVbmtub3duPVVua25vd25IYW5kbGVyXVxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBIYW5kbGVyPn0gW0hhbmRsZXJzPVJlY29yZDxzdHJpbmcsIEhhbmRsZXI+XVxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uIChyZXF1aXJlZCkuXG4gKiBAcHJvcGVydHkge0ludmFsaWR9IFtpbnZhbGlkXVxuICogICBIYW5kbGVyIHRvIHVzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gKiBAcHJvcGVydHkge1Vua25vd259IFt1bmtub3duXVxuICogICBIYW5kbGVyIHRvIHVzZSBmb3IgdW5rbm93biB2YWx1ZXMuXG4gKiBAcHJvcGVydHkge0hhbmRsZXJzfSBbaGFuZGxlcnNdXG4gKiAgIEhhbmRsZXJzIHRvIHVzZS5cbiAqL1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIEhhbmRsZSB2YWx1ZXMgYmFzZWQgb24gYSBmaWVsZC5cbiAqXG4gKiBAdGVtcGxhdGUge0ludmFsaWRIYW5kbGVyfSBbSW52YWxpZD1JbnZhbGlkSGFuZGxlcl1cbiAqIEB0ZW1wbGF0ZSB7VW5rbm93bkhhbmRsZXJ9IFtVbmtub3duPVVua25vd25IYW5kbGVyXVxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBIYW5kbGVyPn0gW0hhbmRsZXJzPVJlY29yZDxzdHJpbmcsIEhhbmRsZXI+XVxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICBGaWVsZCB0byBzd2l0Y2ggb24uXG4gKiBAcGFyYW0ge09wdGlvbnM8SW52YWxpZCwgVW5rbm93biwgSGFuZGxlcnM+fSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAocmVxdWlyZWQpLlxuICogQHJldHVybnMge3t1bmtub3duOiBVbmtub3duLCBpbnZhbGlkOiBJbnZhbGlkLCBoYW5kbGVyczogSGFuZGxlcnMsICguLi5wYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzPEhhbmRsZXJzW2tleW9mIEhhbmRsZXJzXT4pOiBSZXR1cm5UeXBlPEhhbmRsZXJzW2tleW9mIEhhbmRsZXJzXT4sICguLi5wYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzPFVua25vd24+KTogUmV0dXJuVHlwZTxVbmtub3duPn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6d2l0Y2goa2V5LCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgb25lIHZhbHVlLlxuICAgKlxuICAgKiBCYXNlZCBvbiB0aGUgYm91bmQgYGtleWAsIGEgcmVzcGVjdGl2ZSBoYW5kbGVyIHdpbGwgYmUgY2FsbGVkLlxuICAgKiBJZiBgdmFsdWVgIGlzIG5vdCBhbiBvYmplY3QsIG9yIGRvZXNu4oCZdCBoYXZlIGEgYGtleWAgcHJvcGVydHksIHRoZSBzcGVjaWFsXG4gICAqIOKAnGludmFsaWTigJ0gaGFuZGxlciB3aWxsIGJlIGNhbGxlZC5cbiAgICogSWYgYHZhbHVlYCBoYXMgYW4gdW5rbm93biBga2V5YCwgdGhlIHNwZWNpYWwg4oCcdW5rbm93buKAnSBoYW5kbGVyIHdpbGwgYmVcbiAgICogY2FsbGVkLlxuICAgKlxuICAgKiBBbGwgYXJndW1lbnRzLCBhbmQgdGhlIGNvbnRleHQgb2JqZWN0LCBhcmUgcGFzc2VkIHRocm91Z2ggdG8gdGhlIGhhbmRsZXIsXG4gICAqIGFuZCBpdOKAmXMgcmVzdWx0IGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogICBBbnkgY29udGV4dCBvYmplY3QuXG4gICAqIEBwYXJhbSB7dW5rbm93bn0gW3ZhbHVlXVxuICAgKiAgIEFueSB2YWx1ZS5cbiAgICogQHBhcmFtIHsuLi51bmtub3dufSBwYXJhbWV0ZXJzXG4gICAqICAgQXJiaXRyYXJ5IHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoZSB6d2l0Y2guXG4gICAqIEBwcm9wZXJ0eSB7SGFuZGxlcn0gaW52YWxpZFxuICAgKiAgIEhhbmRsZSBmb3IgdmFsdWVzIHRoYXQgZG8gbm90IGhhdmUgYSBjZXJ0YWluIElEIGZpZWxkLlxuICAgKiBAcHJvcGVydHkge0hhbmRsZXJ9IHVua25vd25cbiAgICogICBIYW5kbGUgdmFsdWVzIHRoYXQgZG8gaGF2ZSBhIGNlcnRhaW4gSUQgZmllbGQsIGJ1dCBpdOKAmXMgc2V0IHRvIGEgdmFsdWVcbiAgICogICB0aGF0IGlzIG5vdCBsaXN0ZWQgaW4gdGhlIGBoYW5kbGVyc2AgcmVjb3JkLlxuICAgKiBAcHJvcGVydHkge0hhbmRsZXJzfSBoYW5kbGVyc1xuICAgKiAgIFJlY29yZCBvZiBoYW5kbGVycy5cbiAgICogQHJldHVybnMge3Vua25vd259XG4gICAqICAgQW55dGhpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBvbmUodmFsdWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAvKiogQHR5cGUge0hhbmRsZXJ8dW5kZWZpbmVkfSAqL1xuICAgIGxldCBmbiA9IG9uZS5pbnZhbGlkXG4gICAgY29uc3QgaGFuZGxlcnMgPSBvbmUuaGFuZGxlcnNcblxuICAgIGlmICh2YWx1ZSAmJiBvd24uY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBJbmRleGFibGUuXG4gICAgICBjb25zdCBpZCA9IFN0cmluZyh2YWx1ZVtrZXldKVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBJbmRleGFibGUuXG4gICAgICBmbiA9IG93bi5jYWxsKGhhbmRsZXJzLCBpZCkgPyBoYW5kbGVyc1tpZF0gOiBvbmUudW5rbm93blxuICAgIH1cblxuICAgIGlmIChmbikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdmFsdWUsIC4uLnBhcmFtZXRlcnMpXG4gICAgfVxuICB9XG5cbiAgb25lLmhhbmRsZXJzID0gc2V0dGluZ3MuaGFuZGxlcnMgfHwge31cbiAgb25lLmludmFsaWQgPSBzZXR0aW5ncy5pbnZhbGlkXG4gIG9uZS51bmtub3duID0gc2V0dGluZ3MudW5rbm93blxuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IG1hdGNoZXMhXG4gIHJldHVybiBvbmVcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zwitch/index.js\n");

/***/ })

};
;