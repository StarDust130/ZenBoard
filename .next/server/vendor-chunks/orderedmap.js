"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/orderedmap";
exports.ids = ["vendor-chunks/orderedmap"];
exports.modules = {

/***/ "(ssr)/./node_modules/orderedmap/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/orderedmap/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ::- Persistent data structure representing an ordered mapping from\n// strings to values, with some convenient update methods.\nfunction OrderedMap(content) {\n  this.content = content;\n}\n\nOrderedMap.prototype = {\n  constructor: OrderedMap,\n\n  find: function(key) {\n    for (var i = 0; i < this.content.length; i += 2)\n      if (this.content[i] === key) return i\n    return -1\n  },\n\n  // :: (string) → ?any\n  // Retrieve the value stored under `key`, or return undefined when\n  // no such key exists.\n  get: function(key) {\n    var found = this.find(key);\n    return found == -1 ? undefined : this.content[found + 1]\n  },\n\n  // :: (string, any, ?string) → OrderedMap\n  // Create a new map by replacing the value of `key` with a new\n  // value, or adding a binding to the end of the map. If `newKey` is\n  // given, the key of the binding will be replaced with that key.\n  update: function(key, value, newKey) {\n    var self = newKey && newKey != key ? this.remove(newKey) : this;\n    var found = self.find(key), content = self.content.slice();\n    if (found == -1) {\n      content.push(newKey || key, value);\n    } else {\n      content[found + 1] = value;\n      if (newKey) content[found] = newKey;\n    }\n    return new OrderedMap(content)\n  },\n\n  // :: (string) → OrderedMap\n  // Return a map with the given key removed, if it existed.\n  remove: function(key) {\n    var found = this.find(key);\n    if (found == -1) return this\n    var content = this.content.slice();\n    content.splice(found, 2);\n    return new OrderedMap(content)\n  },\n\n  // :: (string, any) → OrderedMap\n  // Add a new key to the start of the map.\n  addToStart: function(key, value) {\n    return new OrderedMap([key, value].concat(this.remove(key).content))\n  },\n\n  // :: (string, any) → OrderedMap\n  // Add a new key to the end of the map.\n  addToEnd: function(key, value) {\n    var content = this.remove(key).content.slice();\n    content.push(key, value);\n    return new OrderedMap(content)\n  },\n\n  // :: (string, string, any) → OrderedMap\n  // Add a key after the given key. If `place` is not found, the new\n  // key is added to the end.\n  addBefore: function(place, key, value) {\n    var without = this.remove(key), content = without.content.slice();\n    var found = without.find(place);\n    content.splice(found == -1 ? content.length : found, 0, key, value);\n    return new OrderedMap(content)\n  },\n\n  // :: ((key: string, value: any))\n  // Call the given function for each key/value pair in the map, in\n  // order.\n  forEach: function(f) {\n    for (var i = 0; i < this.content.length; i += 2)\n      f(this.content[i], this.content[i + 1]);\n  },\n\n  // :: (union<Object, OrderedMap>) → OrderedMap\n  // Create a new map by prepending the keys in this map that don't\n  // appear in `map` before the keys in `map`.\n  prepend: function(map) {\n    map = OrderedMap.from(map);\n    if (!map.size) return this\n    return new OrderedMap(map.content.concat(this.subtract(map).content))\n  },\n\n  // :: (union<Object, OrderedMap>) → OrderedMap\n  // Create a new map by appending the keys in this map that don't\n  // appear in `map` after the keys in `map`.\n  append: function(map) {\n    map = OrderedMap.from(map);\n    if (!map.size) return this\n    return new OrderedMap(this.subtract(map).content.concat(map.content))\n  },\n\n  // :: (union<Object, OrderedMap>) → OrderedMap\n  // Create a map containing all the keys in this map that don't\n  // appear in `map`.\n  subtract: function(map) {\n    var result = this;\n    map = OrderedMap.from(map);\n    for (var i = 0; i < map.content.length; i += 2)\n      result = result.remove(map.content[i]);\n    return result\n  },\n\n  // :: () → Object\n  // Turn ordered map into a plain object.\n  toObject: function() {\n    var result = {};\n    this.forEach(function(key, value) { result[key] = value; });\n    return result\n  },\n\n  // :: number\n  // The amount of keys in this map.\n  get size() {\n    return this.content.length >> 1\n  }\n};\n\n// :: (?union<Object, OrderedMap>) → OrderedMap\n// Return a map with the given content. If null, create an empty\n// map. If given an ordered map, return that map itself. If given an\n// object, create a map from the object's properties.\nOrderedMap.from = function(value) {\n  if (value instanceof OrderedMap) return value\n  var content = [];\n  if (value) for (var prop in value) content.push(prop, value[prop]);\n  return new OrderedMap(content)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderedMap);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3JkZXJlZG1hcC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0I7QUFDOUQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy9vcmRlcmVkbWFwL2Rpc3QvaW5kZXguanM/NWEwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6Oi0gUGVyc2lzdGVudCBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYW4gb3JkZXJlZCBtYXBwaW5nIGZyb21cbi8vIHN0cmluZ3MgdG8gdmFsdWVzLCB3aXRoIHNvbWUgY29udmVuaWVudCB1cGRhdGUgbWV0aG9kcy5cbmZ1bmN0aW9uIE9yZGVyZWRNYXAoY29udGVudCkge1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufVxuXG5PcmRlcmVkTWFwLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IE9yZGVyZWRNYXAsXG5cbiAgZmluZDogZnVuY3Rpb24oa2V5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpICs9IDIpXG4gICAgICBpZiAodGhpcy5jb250ZW50W2ldID09PSBrZXkpIHJldHVybiBpXG4gICAgcmV0dXJuIC0xXG4gIH0sXG5cbiAgLy8gOjogKHN0cmluZykg4oaSID9hbnlcbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlIHN0b3JlZCB1bmRlciBga2V5YCwgb3IgcmV0dXJuIHVuZGVmaW5lZCB3aGVuXG4gIC8vIG5vIHN1Y2gga2V5IGV4aXN0cy5cbiAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmQoa2V5KTtcbiAgICByZXR1cm4gZm91bmQgPT0gLTEgPyB1bmRlZmluZWQgOiB0aGlzLmNvbnRlbnRbZm91bmQgKyAxXVxuICB9LFxuXG4gIC8vIDo6IChzdHJpbmcsIGFueSwgP3N0cmluZykg4oaSIE9yZGVyZWRNYXBcbiAgLy8gQ3JlYXRlIGEgbmV3IG1hcCBieSByZXBsYWNpbmcgdGhlIHZhbHVlIG9mIGBrZXlgIHdpdGggYSBuZXdcbiAgLy8gdmFsdWUsIG9yIGFkZGluZyBhIGJpbmRpbmcgdG8gdGhlIGVuZCBvZiB0aGUgbWFwLiBJZiBgbmV3S2V5YCBpc1xuICAvLyBnaXZlbiwgdGhlIGtleSBvZiB0aGUgYmluZGluZyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhhdCBrZXkuXG4gIHVwZGF0ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmV3S2V5KSB7XG4gICAgdmFyIHNlbGYgPSBuZXdLZXkgJiYgbmV3S2V5ICE9IGtleSA/IHRoaXMucmVtb3ZlKG5ld0tleSkgOiB0aGlzO1xuICAgIHZhciBmb3VuZCA9IHNlbGYuZmluZChrZXkpLCBjb250ZW50ID0gc2VsZi5jb250ZW50LnNsaWNlKCk7XG4gICAgaWYgKGZvdW5kID09IC0xKSB7XG4gICAgICBjb250ZW50LnB1c2gobmV3S2V5IHx8IGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50W2ZvdW5kICsgMV0gPSB2YWx1ZTtcbiAgICAgIGlmIChuZXdLZXkpIGNvbnRlbnRbZm91bmRdID0gbmV3S2V5O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9yZGVyZWRNYXAoY29udGVudClcbiAgfSxcblxuICAvLyA6OiAoc3RyaW5nKSDihpIgT3JkZXJlZE1hcFxuICAvLyBSZXR1cm4gYSBtYXAgd2l0aCB0aGUgZ2l2ZW4ga2V5IHJlbW92ZWQsIGlmIGl0IGV4aXN0ZWQuXG4gIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIGZvdW5kID0gdGhpcy5maW5kKGtleSk7XG4gICAgaWYgKGZvdW5kID09IC0xKSByZXR1cm4gdGhpc1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5jb250ZW50LnNsaWNlKCk7XG4gICAgY29udGVudC5zcGxpY2UoZm91bmQsIDIpO1xuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcChjb250ZW50KVxuICB9LFxuXG4gIC8vIDo6IChzdHJpbmcsIGFueSkg4oaSIE9yZGVyZWRNYXBcbiAgLy8gQWRkIGEgbmV3IGtleSB0byB0aGUgc3RhcnQgb2YgdGhlIG1hcC5cbiAgYWRkVG9TdGFydDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcChba2V5LCB2YWx1ZV0uY29uY2F0KHRoaXMucmVtb3ZlKGtleSkuY29udGVudCkpXG4gIH0sXG5cbiAgLy8gOjogKHN0cmluZywgYW55KSDihpIgT3JkZXJlZE1hcFxuICAvLyBBZGQgYSBuZXcga2V5IHRvIHRoZSBlbmQgb2YgdGhlIG1hcC5cbiAgYWRkVG9FbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMucmVtb3ZlKGtleSkuY29udGVudC5zbGljZSgpO1xuICAgIGNvbnRlbnQucHVzaChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gbmV3IE9yZGVyZWRNYXAoY29udGVudClcbiAgfSxcblxuICAvLyA6OiAoc3RyaW5nLCBzdHJpbmcsIGFueSkg4oaSIE9yZGVyZWRNYXBcbiAgLy8gQWRkIGEga2V5IGFmdGVyIHRoZSBnaXZlbiBrZXkuIElmIGBwbGFjZWAgaXMgbm90IGZvdW5kLCB0aGUgbmV3XG4gIC8vIGtleSBpcyBhZGRlZCB0byB0aGUgZW5kLlxuICBhZGRCZWZvcmU6IGZ1bmN0aW9uKHBsYWNlLCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIHdpdGhvdXQgPSB0aGlzLnJlbW92ZShrZXkpLCBjb250ZW50ID0gd2l0aG91dC5jb250ZW50LnNsaWNlKCk7XG4gICAgdmFyIGZvdW5kID0gd2l0aG91dC5maW5kKHBsYWNlKTtcbiAgICBjb250ZW50LnNwbGljZShmb3VuZCA9PSAtMSA/IGNvbnRlbnQubGVuZ3RoIDogZm91bmQsIDAsIGtleSwgdmFsdWUpO1xuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcChjb250ZW50KVxuICB9LFxuXG4gIC8vIDo6ICgoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpKVxuICAvLyBDYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBmb3IgZWFjaCBrZXkvdmFsdWUgcGFpciBpbiB0aGUgbWFwLCBpblxuICAvLyBvcmRlci5cbiAgZm9yRWFjaDogZnVuY3Rpb24oZikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSArPSAyKVxuICAgICAgZih0aGlzLmNvbnRlbnRbaV0sIHRoaXMuY29udGVudFtpICsgMV0pO1xuICB9LFxuXG4gIC8vIDo6ICh1bmlvbjxPYmplY3QsIE9yZGVyZWRNYXA+KSDihpIgT3JkZXJlZE1hcFxuICAvLyBDcmVhdGUgYSBuZXcgbWFwIGJ5IHByZXBlbmRpbmcgdGhlIGtleXMgaW4gdGhpcyBtYXAgdGhhdCBkb24ndFxuICAvLyBhcHBlYXIgaW4gYG1hcGAgYmVmb3JlIHRoZSBrZXlzIGluIGBtYXBgLlxuICBwcmVwZW5kOiBmdW5jdGlvbihtYXApIHtcbiAgICBtYXAgPSBPcmRlcmVkTWFwLmZyb20obWFwKTtcbiAgICBpZiAoIW1hcC5zaXplKSByZXR1cm4gdGhpc1xuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcChtYXAuY29udGVudC5jb25jYXQodGhpcy5zdWJ0cmFjdChtYXApLmNvbnRlbnQpKVxuICB9LFxuXG4gIC8vIDo6ICh1bmlvbjxPYmplY3QsIE9yZGVyZWRNYXA+KSDihpIgT3JkZXJlZE1hcFxuICAvLyBDcmVhdGUgYSBuZXcgbWFwIGJ5IGFwcGVuZGluZyB0aGUga2V5cyBpbiB0aGlzIG1hcCB0aGF0IGRvbid0XG4gIC8vIGFwcGVhciBpbiBgbWFwYCBhZnRlciB0aGUga2V5cyBpbiBgbWFwYC5cbiAgYXBwZW5kOiBmdW5jdGlvbihtYXApIHtcbiAgICBtYXAgPSBPcmRlcmVkTWFwLmZyb20obWFwKTtcbiAgICBpZiAoIW1hcC5zaXplKSByZXR1cm4gdGhpc1xuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcCh0aGlzLnN1YnRyYWN0KG1hcCkuY29udGVudC5jb25jYXQobWFwLmNvbnRlbnQpKVxuICB9LFxuXG4gIC8vIDo6ICh1bmlvbjxPYmplY3QsIE9yZGVyZWRNYXA+KSDihpIgT3JkZXJlZE1hcFxuICAvLyBDcmVhdGUgYSBtYXAgY29udGFpbmluZyBhbGwgdGhlIGtleXMgaW4gdGhpcyBtYXAgdGhhdCBkb24ndFxuICAvLyBhcHBlYXIgaW4gYG1hcGAuXG4gIHN1YnRyYWN0OiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcztcbiAgICBtYXAgPSBPcmRlcmVkTWFwLmZyb20obWFwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcC5jb250ZW50Lmxlbmd0aDsgaSArPSAyKVxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlbW92ZShtYXAuY29udGVudFtpXSk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIC8vIDo6ICgpIOKGkiBPYmplY3RcbiAgLy8gVHVybiBvcmRlcmVkIG1hcCBpbnRvIGEgcGxhaW4gb2JqZWN0LlxuICB0b09iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlKSB7IHJlc3VsdFtrZXldID0gdmFsdWU7IH0pO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSxcblxuICAvLyA6OiBudW1iZXJcbiAgLy8gVGhlIGFtb3VudCBvZiBrZXlzIGluIHRoaXMgbWFwLlxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aCA+PiAxXG4gIH1cbn07XG5cbi8vIDo6ICg/dW5pb248T2JqZWN0LCBPcmRlcmVkTWFwPikg4oaSIE9yZGVyZWRNYXBcbi8vIFJldHVybiBhIG1hcCB3aXRoIHRoZSBnaXZlbiBjb250ZW50LiBJZiBudWxsLCBjcmVhdGUgYW4gZW1wdHlcbi8vIG1hcC4gSWYgZ2l2ZW4gYW4gb3JkZXJlZCBtYXAsIHJldHVybiB0aGF0IG1hcCBpdHNlbGYuIElmIGdpdmVuIGFuXG4vLyBvYmplY3QsIGNyZWF0ZSBhIG1hcCBmcm9tIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzLlxuT3JkZXJlZE1hcC5mcm9tID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT3JkZXJlZE1hcCkgcmV0dXJuIHZhbHVlXG4gIHZhciBjb250ZW50ID0gW107XG4gIGlmICh2YWx1ZSkgZm9yICh2YXIgcHJvcCBpbiB2YWx1ZSkgY29udGVudC5wdXNoKHByb3AsIHZhbHVlW3Byb3BdKTtcbiAgcmV0dXJuIG5ldyBPcmRlcmVkTWFwKGNvbnRlbnQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlcmVkTWFwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/orderedmap/dist/index.js\n");

/***/ })

};
;