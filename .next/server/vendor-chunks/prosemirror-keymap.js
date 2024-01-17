"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prosemirror-keymap";
exports.ids = ["vendor-chunks/prosemirror-keymap"];
exports.modules = {

/***/ "(ssr)/./node_modules/prosemirror-keymap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/prosemirror-keymap/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keydownHandler: () => (/* binding */ keydownHandler),\n/* harmony export */   keymap: () => (/* binding */ keymap)\n/* harmony export */ });\n/* harmony import */ var w3c_keyname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! w3c-keyname */ \"(ssr)/./node_modules/w3c-keyname/index.js\");\n/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ \"(ssr)/./node_modules/prosemirror-state/dist/index.js\");\n\n\n\nconst mac = typeof navigator != \"undefined\" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;\nfunction normalizeKeyName(name) {\n    let parts = name.split(/-(?!$)/), result = parts[parts.length - 1];\n    if (result == \"Space\")\n        result = \" \";\n    let alt, ctrl, shift, meta;\n    for (let i = 0; i < parts.length - 1; i++) {\n        let mod = parts[i];\n        if (/^(cmd|meta|m)$/i.test(mod))\n            meta = true;\n        else if (/^a(lt)?$/i.test(mod))\n            alt = true;\n        else if (/^(c|ctrl|control)$/i.test(mod))\n            ctrl = true;\n        else if (/^s(hift)?$/i.test(mod))\n            shift = true;\n        else if (/^mod$/i.test(mod)) {\n            if (mac)\n                meta = true;\n            else\n                ctrl = true;\n        }\n        else\n            throw new Error(\"Unrecognized modifier name: \" + mod);\n    }\n    if (alt)\n        result = \"Alt-\" + result;\n    if (ctrl)\n        result = \"Ctrl-\" + result;\n    if (meta)\n        result = \"Meta-\" + result;\n    if (shift)\n        result = \"Shift-\" + result;\n    return result;\n}\nfunction normalize(map) {\n    let copy = Object.create(null);\n    for (let prop in map)\n        copy[normalizeKeyName(prop)] = map[prop];\n    return copy;\n}\nfunction modifiers(name, event, shift = true) {\n    if (event.altKey)\n        name = \"Alt-\" + name;\n    if (event.ctrlKey)\n        name = \"Ctrl-\" + name;\n    if (event.metaKey)\n        name = \"Meta-\" + name;\n    if (shift && event.shiftKey)\n        name = \"Shift-\" + name;\n    return name;\n}\n/**\nCreate a keymap plugin for the given set of bindings.\n\nBindings should map key names to [command](https://prosemirror.net/docs/ref/#commands)-style\nfunctions, which will be called with `(EditorState, dispatch,\nEditorView)` arguments, and should return true when they've handled\nthe key. Note that the view argument isn't part of the command\nprotocol, but can be used as an escape hatch if a binding needs to\ndirectly interact with the UI.\n\nKey names may be strings like `\"Shift-Ctrl-Enter\"`—a key\nidentifier prefixed with zero or more modifiers. Key identifiers\nare based on the strings that can appear in\n[`KeyEvent.key`](https:developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).\nUse lowercase letters to refer to letter keys (or uppercase letters\nif you want shift to be held). You may use `\"Space\"` as an alias\nfor the `\" \"` name.\n\nModifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or\n`a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or\n`Meta-`) are recognized. For characters that are created by holding\nshift, the `Shift-` prefix is implied, and should not be added\nexplicitly.\n\nYou can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on\nother platforms.\n\nYou can add multiple keymap plugins to an editor. The order in\nwhich they appear determines their precedence (the ones early in\nthe array get to dispatch first).\n*/\nfunction keymap(bindings) {\n    return new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({ props: { handleKeyDown: keydownHandler(bindings) } });\n}\n/**\nGiven a set of bindings (using the same format as\n[`keymap`](https://prosemirror.net/docs/ref/#keymap.keymap)), return a [keydown\nhandler](https://prosemirror.net/docs/ref/#view.EditorProps.handleKeyDown) that handles them.\n*/\nfunction keydownHandler(bindings) {\n    let map = normalize(bindings);\n    return function (view, event) {\n        let name = (0,w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.keyName)(event), baseName, direct = map[modifiers(name, event)];\n        if (direct && direct(view.state, view.dispatch, view))\n            return true;\n        // A character key\n        if (name.length == 1 && name != \" \") {\n            if (event.shiftKey) {\n                // In case the name was already modified by shift, try looking\n                // it up without its shift modifier\n                let noShift = map[modifiers(name, event, false)];\n                if (noShift && noShift(view.state, view.dispatch, view))\n                    return true;\n            }\n            if ((event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) &&\n                (baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_0__.base[event.keyCode]) && baseName != name) {\n                // Try falling back to the keyCode when there's a modifier\n                // active or the character produced isn't ASCII, and our table\n                // produces a different name from the the keyCode. See #668,\n                // #1060\n                let fromCode = map[modifiers(baseName, event)];\n                if (fromCode && fromCode(view.state, view.dispatch, view))\n                    return true;\n            }\n        }\n        return false;\n    };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Ita2V5bWFwL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNEOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBTSxHQUFHLFNBQVMsMkNBQTJDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWtleW1hcC9kaXN0L2luZGV4LmpzPzA4OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5TmFtZSwgYmFzZSB9IGZyb20gJ3czYy1rZXluYW1lJztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJ3Byb3NlbWlycm9yLXN0YXRlJztcblxuY29uc3QgbWFjID0gdHlwZW9mIG5hdmlnYXRvciAhPSBcInVuZGVmaW5lZFwiID8gL01hY3xpUChob25lfFtvYV1kKS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pIDogZmFsc2U7XG5mdW5jdGlvbiBub3JtYWxpemVLZXlOYW1lKG5hbWUpIHtcbiAgICBsZXQgcGFydHMgPSBuYW1lLnNwbGl0KC8tKD8hJCkvKSwgcmVzdWx0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJlc3VsdCA9PSBcIlNwYWNlXCIpXG4gICAgICAgIHJlc3VsdCA9IFwiIFwiO1xuICAgIGxldCBhbHQsIGN0cmwsIHNoaWZ0LCBtZXRhO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBtb2QgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKC9eKGNtZHxtZXRhfG0pJC9pLnRlc3QobW9kKSlcbiAgICAgICAgICAgIG1ldGEgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICgvXmEobHQpPyQvaS50ZXN0KG1vZCkpXG4gICAgICAgICAgICBhbHQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICgvXihjfGN0cmx8Y29udHJvbCkkL2kudGVzdChtb2QpKVxuICAgICAgICAgICAgY3RybCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKC9ecyhoaWZ0KT8kL2kudGVzdChtb2QpKVxuICAgICAgICAgICAgc2hpZnQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICgvXm1vZCQvaS50ZXN0KG1vZCkpIHtcbiAgICAgICAgICAgIGlmIChtYWMpXG4gICAgICAgICAgICAgICAgbWV0YSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3RybCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIG1vZGlmaWVyIG5hbWU6IFwiICsgbW9kKTtcbiAgICB9XG4gICAgaWYgKGFsdClcbiAgICAgICAgcmVzdWx0ID0gXCJBbHQtXCIgKyByZXN1bHQ7XG4gICAgaWYgKGN0cmwpXG4gICAgICAgIHJlc3VsdCA9IFwiQ3RybC1cIiArIHJlc3VsdDtcbiAgICBpZiAobWV0YSlcbiAgICAgICAgcmVzdWx0ID0gXCJNZXRhLVwiICsgcmVzdWx0O1xuICAgIGlmIChzaGlmdClcbiAgICAgICAgcmVzdWx0ID0gXCJTaGlmdC1cIiArIHJlc3VsdDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplKG1hcCkge1xuICAgIGxldCBjb3B5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBmb3IgKGxldCBwcm9wIGluIG1hcClcbiAgICAgICAgY29weVtub3JtYWxpemVLZXlOYW1lKHByb3ApXSA9IG1hcFtwcm9wXTtcbiAgICByZXR1cm4gY29weTtcbn1cbmZ1bmN0aW9uIG1vZGlmaWVycyhuYW1lLCBldmVudCwgc2hpZnQgPSB0cnVlKSB7XG4gICAgaWYgKGV2ZW50LmFsdEtleSlcbiAgICAgICAgbmFtZSA9IFwiQWx0LVwiICsgbmFtZTtcbiAgICBpZiAoZXZlbnQuY3RybEtleSlcbiAgICAgICAgbmFtZSA9IFwiQ3RybC1cIiArIG5hbWU7XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkpXG4gICAgICAgIG5hbWUgPSBcIk1ldGEtXCIgKyBuYW1lO1xuICAgIGlmIChzaGlmdCAmJiBldmVudC5zaGlmdEtleSlcbiAgICAgICAgbmFtZSA9IFwiU2hpZnQtXCIgKyBuYW1lO1xuICAgIHJldHVybiBuYW1lO1xufVxuLyoqXG5DcmVhdGUgYSBrZXltYXAgcGx1Z2luIGZvciB0aGUgZ2l2ZW4gc2V0IG9mIGJpbmRpbmdzLlxuXG5CaW5kaW5ncyBzaG91bGQgbWFwIGtleSBuYW1lcyB0byBbY29tbWFuZF0oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI2NvbW1hbmRzKS1zdHlsZVxuZnVuY3Rpb25zLCB3aGljaCB3aWxsIGJlIGNhbGxlZCB3aXRoIGAoRWRpdG9yU3RhdGUsIGRpc3BhdGNoLFxuRWRpdG9yVmlldylgIGFyZ3VtZW50cywgYW5kIHNob3VsZCByZXR1cm4gdHJ1ZSB3aGVuIHRoZXkndmUgaGFuZGxlZFxudGhlIGtleS4gTm90ZSB0aGF0IHRoZSB2aWV3IGFyZ3VtZW50IGlzbid0IHBhcnQgb2YgdGhlIGNvbW1hbmRcbnByb3RvY29sLCBidXQgY2FuIGJlIHVzZWQgYXMgYW4gZXNjYXBlIGhhdGNoIGlmIGEgYmluZGluZyBuZWVkcyB0b1xuZGlyZWN0bHkgaW50ZXJhY3Qgd2l0aCB0aGUgVUkuXG5cbktleSBuYW1lcyBtYXkgYmUgc3RyaW5ncyBsaWtlIGBcIlNoaWZ0LUN0cmwtRW50ZXJcImDigJRhIGtleVxuaWRlbnRpZmllciBwcmVmaXhlZCB3aXRoIHplcm8gb3IgbW9yZSBtb2RpZmllcnMuIEtleSBpZGVudGlmaWVyc1xuYXJlIGJhc2VkIG9uIHRoZSBzdHJpbmdzIHRoYXQgY2FuIGFwcGVhciBpblxuW2BLZXlFdmVudC5rZXlgXShodHRwczpkZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5KS5cblVzZSBsb3dlcmNhc2UgbGV0dGVycyB0byByZWZlciB0byBsZXR0ZXIga2V5cyAob3IgdXBwZXJjYXNlIGxldHRlcnNcbmlmIHlvdSB3YW50IHNoaWZ0IHRvIGJlIGhlbGQpLiBZb3UgbWF5IHVzZSBgXCJTcGFjZVwiYCBhcyBhbiBhbGlhc1xuZm9yIHRoZSBgXCIgXCJgIG5hbWUuXG5cbk1vZGlmaWVycyBjYW4gYmUgZ2l2ZW4gaW4gYW55IG9yZGVyLiBgU2hpZnQtYCAob3IgYHMtYCksIGBBbHQtYCAob3JcbmBhLWApLCBgQ3RybC1gIChvciBgYy1gIG9yIGBDb250cm9sLWApIGFuZCBgQ21kLWAgKG9yIGBtLWAgb3JcbmBNZXRhLWApIGFyZSByZWNvZ25pemVkLiBGb3IgY2hhcmFjdGVycyB0aGF0IGFyZSBjcmVhdGVkIGJ5IGhvbGRpbmdcbnNoaWZ0LCB0aGUgYFNoaWZ0LWAgcHJlZml4IGlzIGltcGxpZWQsIGFuZCBzaG91bGQgbm90IGJlIGFkZGVkXG5leHBsaWNpdGx5LlxuXG5Zb3UgY2FuIHVzZSBgTW9kLWAgYXMgYSBzaG9ydGhhbmQgZm9yIGBDbWQtYCBvbiBNYWMgYW5kIGBDdHJsLWAgb25cbm90aGVyIHBsYXRmb3Jtcy5cblxuWW91IGNhbiBhZGQgbXVsdGlwbGUga2V5bWFwIHBsdWdpbnMgdG8gYW4gZWRpdG9yLiBUaGUgb3JkZXIgaW5cbndoaWNoIHRoZXkgYXBwZWFyIGRldGVybWluZXMgdGhlaXIgcHJlY2VkZW5jZSAodGhlIG9uZXMgZWFybHkgaW5cbnRoZSBhcnJheSBnZXQgdG8gZGlzcGF0Y2ggZmlyc3QpLlxuKi9cbmZ1bmN0aW9uIGtleW1hcChiaW5kaW5ncykge1xuICAgIHJldHVybiBuZXcgUGx1Z2luKHsgcHJvcHM6IHsgaGFuZGxlS2V5RG93bjoga2V5ZG93bkhhbmRsZXIoYmluZGluZ3MpIH0gfSk7XG59XG4vKipcbkdpdmVuIGEgc2V0IG9mIGJpbmRpbmdzICh1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbltga2V5bWFwYF0oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI2tleW1hcC5rZXltYXApKSwgcmV0dXJuIGEgW2tleWRvd25cbmhhbmRsZXJdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyN2aWV3LkVkaXRvclByb3BzLmhhbmRsZUtleURvd24pIHRoYXQgaGFuZGxlcyB0aGVtLlxuKi9cbmZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGJpbmRpbmdzKSB7XG4gICAgbGV0IG1hcCA9IG5vcm1hbGl6ZShiaW5kaW5ncyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2aWV3LCBldmVudCkge1xuICAgICAgICBsZXQgbmFtZSA9IGtleU5hbWUoZXZlbnQpLCBiYXNlTmFtZSwgZGlyZWN0ID0gbWFwW21vZGlmaWVycyhuYW1lLCBldmVudCldO1xuICAgICAgICBpZiAoZGlyZWN0ICYmIGRpcmVjdCh2aWV3LnN0YXRlLCB2aWV3LmRpc3BhdGNoLCB2aWV3KSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyBBIGNoYXJhY3RlciBrZXlcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID09IDEgJiYgbmFtZSAhPSBcIiBcIikge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSB0aGUgbmFtZSB3YXMgYWxyZWFkeSBtb2RpZmllZCBieSBzaGlmdCwgdHJ5IGxvb2tpbmdcbiAgICAgICAgICAgICAgICAvLyBpdCB1cCB3aXRob3V0IGl0cyBzaGlmdCBtb2RpZmllclxuICAgICAgICAgICAgICAgIGxldCBub1NoaWZ0ID0gbWFwW21vZGlmaWVycyhuYW1lLCBldmVudCwgZmFsc2UpXTtcbiAgICAgICAgICAgICAgICBpZiAobm9TaGlmdCAmJiBub1NoaWZ0KHZpZXcuc3RhdGUsIHZpZXcuZGlzcGF0Y2gsIHZpZXcpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgbmFtZS5jaGFyQ29kZUF0KDApID4gMTI3KSAmJlxuICAgICAgICAgICAgICAgIChiYXNlTmFtZSA9IGJhc2VbZXZlbnQua2V5Q29kZV0pICYmIGJhc2VOYW1lICE9IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBUcnkgZmFsbGluZyBiYWNrIHRvIHRoZSBrZXlDb2RlIHdoZW4gdGhlcmUncyBhIG1vZGlmaWVyXG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIG9yIHRoZSBjaGFyYWN0ZXIgcHJvZHVjZWQgaXNuJ3QgQVNDSUksIGFuZCBvdXIgdGFibGVcbiAgICAgICAgICAgICAgICAvLyBwcm9kdWNlcyBhIGRpZmZlcmVudCBuYW1lIGZyb20gdGhlIHRoZSBrZXlDb2RlLiBTZWUgIzY2OCxcbiAgICAgICAgICAgICAgICAvLyAjMTA2MFxuICAgICAgICAgICAgICAgIGxldCBmcm9tQ29kZSA9IG1hcFttb2RpZmllcnMoYmFzZU5hbWUsIGV2ZW50KV07XG4gICAgICAgICAgICAgICAgaWYgKGZyb21Db2RlICYmIGZyb21Db2RlKHZpZXcuc3RhdGUsIHZpZXcuZGlzcGF0Y2gsIHZpZXcpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsga2V5ZG93bkhhbmRsZXIsIGtleW1hcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prosemirror-keymap/dist/index.js\n");

/***/ })

};
;