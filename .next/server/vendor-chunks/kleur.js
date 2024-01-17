"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/kleur";
exports.ids = ["vendor-chunks/kleur"];
exports.modules = {

/***/ "(ssr)/./node_modules/kleur/index.mjs":
/*!**************************************!*\
  !*** ./node_modules/kleur/index.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nlet FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY=true;\nif (typeof process !== 'undefined') {\n\t({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});\n\tisTTY = process.stdout && process.stdout.isTTY;\n}\n\nconst $ = {\n\tenabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== 'dumb' && (\n\t\tFORCE_COLOR != null && FORCE_COLOR !== '0' || isTTY\n\t),\n\n\t// modifiers\n\treset: init(0, 0),\n\tbold: init(1, 22),\n\tdim: init(2, 22),\n\titalic: init(3, 23),\n\tunderline: init(4, 24),\n\tinverse: init(7, 27),\n\thidden: init(8, 28),\n\tstrikethrough: init(9, 29),\n\n\t// colors\n\tblack: init(30, 39),\n\tred: init(31, 39),\n\tgreen: init(32, 39),\n\tyellow: init(33, 39),\n\tblue: init(34, 39),\n\tmagenta: init(35, 39),\n\tcyan: init(36, 39),\n\twhite: init(37, 39),\n\tgray: init(90, 39),\n\tgrey: init(90, 39),\n\n\t// background colors\n\tbgBlack: init(40, 49),\n\tbgRed: init(41, 49),\n\tbgGreen: init(42, 49),\n\tbgYellow: init(43, 49),\n\tbgBlue: init(44, 49),\n\tbgMagenta: init(45, 49),\n\tbgCyan: init(46, 49),\n\tbgWhite: init(47, 49)\n};\n\nfunction run(arr, str) {\n\tlet i=0, tmp, beg='', end='';\n\tfor (; i < arr.length; i++) {\n\t\ttmp = arr[i];\n\t\tbeg += tmp.open;\n\t\tend += tmp.close;\n\t\tif (!!~str.indexOf(tmp.close)) {\n\t\t\tstr = str.replace(tmp.rgx, tmp.close + tmp.open);\n\t\t}\n\t}\n\treturn beg + str + end;\n}\n\nfunction chain(has, keys) {\n\tlet ctx = { has, keys };\n\n\tctx.reset = $.reset.bind(ctx);\n\tctx.bold = $.bold.bind(ctx);\n\tctx.dim = $.dim.bind(ctx);\n\tctx.italic = $.italic.bind(ctx);\n\tctx.underline = $.underline.bind(ctx);\n\tctx.inverse = $.inverse.bind(ctx);\n\tctx.hidden = $.hidden.bind(ctx);\n\tctx.strikethrough = $.strikethrough.bind(ctx);\n\n\tctx.black = $.black.bind(ctx);\n\tctx.red = $.red.bind(ctx);\n\tctx.green = $.green.bind(ctx);\n\tctx.yellow = $.yellow.bind(ctx);\n\tctx.blue = $.blue.bind(ctx);\n\tctx.magenta = $.magenta.bind(ctx);\n\tctx.cyan = $.cyan.bind(ctx);\n\tctx.white = $.white.bind(ctx);\n\tctx.gray = $.gray.bind(ctx);\n\tctx.grey = $.grey.bind(ctx);\n\n\tctx.bgBlack = $.bgBlack.bind(ctx);\n\tctx.bgRed = $.bgRed.bind(ctx);\n\tctx.bgGreen = $.bgGreen.bind(ctx);\n\tctx.bgYellow = $.bgYellow.bind(ctx);\n\tctx.bgBlue = $.bgBlue.bind(ctx);\n\tctx.bgMagenta = $.bgMagenta.bind(ctx);\n\tctx.bgCyan = $.bgCyan.bind(ctx);\n\tctx.bgWhite = $.bgWhite.bind(ctx);\n\n\treturn ctx;\n}\n\nfunction init(open, close) {\n\tlet blk = {\n\t\topen: `\\x1b[${open}m`,\n\t\tclose: `\\x1b[${close}m`,\n\t\trgx: new RegExp(`\\\\x1b\\\\[${close}m`, 'g')\n\t};\n\treturn function (txt) {\n\t\tif (this !== void 0 && this.has !== void 0) {\n\t\t\t!!~this.has.indexOf(open) || (this.has.push(open),this.keys.push(blk));\n\t\t\treturn txt === void 0 ? this : $.enabled ? run(this.keys, txt+'') : txt+'';\n\t\t}\n\t\treturn txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt+'') : txt+'';\n\t};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMva2xldXIvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsSUFBSSxtREFBbUQsbUJBQW1CO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0JBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCLGlCQUFpQixNQUFNO0FBQ3ZCLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5ib2FyZC8uL25vZGVfbW9kdWxlcy9rbGV1ci9pbmRleC5tanM/MGQ0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmxldCBGT1JDRV9DT0xPUiwgTk9ERV9ESVNBQkxFX0NPTE9SUywgTk9fQ09MT1IsIFRFUk0sIGlzVFRZPXRydWU7XG5pZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG5cdCh7IEZPUkNFX0NPTE9SLCBOT0RFX0RJU0FCTEVfQ09MT1JTLCBOT19DT0xPUiwgVEVSTSB9ID0gcHJvY2Vzcy5lbnYgfHwge30pO1xuXHRpc1RUWSA9IHByb2Nlc3Muc3Rkb3V0ICYmIHByb2Nlc3Muc3Rkb3V0LmlzVFRZO1xufVxuXG5jb25zdCAkID0ge1xuXHRlbmFibGVkOiAhTk9ERV9ESVNBQkxFX0NPTE9SUyAmJiBOT19DT0xPUiA9PSBudWxsICYmIFRFUk0gIT09ICdkdW1iJyAmJiAoXG5cdFx0Rk9SQ0VfQ09MT1IgIT0gbnVsbCAmJiBGT1JDRV9DT0xPUiAhPT0gJzAnIHx8IGlzVFRZXG5cdCksXG5cblx0Ly8gbW9kaWZpZXJzXG5cdHJlc2V0OiBpbml0KDAsIDApLFxuXHRib2xkOiBpbml0KDEsIDIyKSxcblx0ZGltOiBpbml0KDIsIDIyKSxcblx0aXRhbGljOiBpbml0KDMsIDIzKSxcblx0dW5kZXJsaW5lOiBpbml0KDQsIDI0KSxcblx0aW52ZXJzZTogaW5pdCg3LCAyNyksXG5cdGhpZGRlbjogaW5pdCg4LCAyOCksXG5cdHN0cmlrZXRocm91Z2g6IGluaXQoOSwgMjkpLFxuXG5cdC8vIGNvbG9yc1xuXHRibGFjazogaW5pdCgzMCwgMzkpLFxuXHRyZWQ6IGluaXQoMzEsIDM5KSxcblx0Z3JlZW46IGluaXQoMzIsIDM5KSxcblx0eWVsbG93OiBpbml0KDMzLCAzOSksXG5cdGJsdWU6IGluaXQoMzQsIDM5KSxcblx0bWFnZW50YTogaW5pdCgzNSwgMzkpLFxuXHRjeWFuOiBpbml0KDM2LCAzOSksXG5cdHdoaXRlOiBpbml0KDM3LCAzOSksXG5cdGdyYXk6IGluaXQoOTAsIDM5KSxcblx0Z3JleTogaW5pdCg5MCwgMzkpLFxuXG5cdC8vIGJhY2tncm91bmQgY29sb3JzXG5cdGJnQmxhY2s6IGluaXQoNDAsIDQ5KSxcblx0YmdSZWQ6IGluaXQoNDEsIDQ5KSxcblx0YmdHcmVlbjogaW5pdCg0MiwgNDkpLFxuXHRiZ1llbGxvdzogaW5pdCg0MywgNDkpLFxuXHRiZ0JsdWU6IGluaXQoNDQsIDQ5KSxcblx0YmdNYWdlbnRhOiBpbml0KDQ1LCA0OSksXG5cdGJnQ3lhbjogaW5pdCg0NiwgNDkpLFxuXHRiZ1doaXRlOiBpbml0KDQ3LCA0OSlcbn07XG5cbmZ1bmN0aW9uIHJ1bihhcnIsIHN0cikge1xuXHRsZXQgaT0wLCB0bXAsIGJlZz0nJywgZW5kPScnO1xuXHRmb3IgKDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdHRtcCA9IGFycltpXTtcblx0XHRiZWcgKz0gdG1wLm9wZW47XG5cdFx0ZW5kICs9IHRtcC5jbG9zZTtcblx0XHRpZiAoISF+c3RyLmluZGV4T2YodG1wLmNsb3NlKSkge1xuXHRcdFx0c3RyID0gc3RyLnJlcGxhY2UodG1wLnJneCwgdG1wLmNsb3NlICsgdG1wLm9wZW4pO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYmVnICsgc3RyICsgZW5kO1xufVxuXG5mdW5jdGlvbiBjaGFpbihoYXMsIGtleXMpIHtcblx0bGV0IGN0eCA9IHsgaGFzLCBrZXlzIH07XG5cblx0Y3R4LnJlc2V0ID0gJC5yZXNldC5iaW5kKGN0eCk7XG5cdGN0eC5ib2xkID0gJC5ib2xkLmJpbmQoY3R4KTtcblx0Y3R4LmRpbSA9ICQuZGltLmJpbmQoY3R4KTtcblx0Y3R4Lml0YWxpYyA9ICQuaXRhbGljLmJpbmQoY3R4KTtcblx0Y3R4LnVuZGVybGluZSA9ICQudW5kZXJsaW5lLmJpbmQoY3R4KTtcblx0Y3R4LmludmVyc2UgPSAkLmludmVyc2UuYmluZChjdHgpO1xuXHRjdHguaGlkZGVuID0gJC5oaWRkZW4uYmluZChjdHgpO1xuXHRjdHguc3RyaWtldGhyb3VnaCA9ICQuc3RyaWtldGhyb3VnaC5iaW5kKGN0eCk7XG5cblx0Y3R4LmJsYWNrID0gJC5ibGFjay5iaW5kKGN0eCk7XG5cdGN0eC5yZWQgPSAkLnJlZC5iaW5kKGN0eCk7XG5cdGN0eC5ncmVlbiA9ICQuZ3JlZW4uYmluZChjdHgpO1xuXHRjdHgueWVsbG93ID0gJC55ZWxsb3cuYmluZChjdHgpO1xuXHRjdHguYmx1ZSA9ICQuYmx1ZS5iaW5kKGN0eCk7XG5cdGN0eC5tYWdlbnRhID0gJC5tYWdlbnRhLmJpbmQoY3R4KTtcblx0Y3R4LmN5YW4gPSAkLmN5YW4uYmluZChjdHgpO1xuXHRjdHgud2hpdGUgPSAkLndoaXRlLmJpbmQoY3R4KTtcblx0Y3R4LmdyYXkgPSAkLmdyYXkuYmluZChjdHgpO1xuXHRjdHguZ3JleSA9ICQuZ3JleS5iaW5kKGN0eCk7XG5cblx0Y3R4LmJnQmxhY2sgPSAkLmJnQmxhY2suYmluZChjdHgpO1xuXHRjdHguYmdSZWQgPSAkLmJnUmVkLmJpbmQoY3R4KTtcblx0Y3R4LmJnR3JlZW4gPSAkLmJnR3JlZW4uYmluZChjdHgpO1xuXHRjdHguYmdZZWxsb3cgPSAkLmJnWWVsbG93LmJpbmQoY3R4KTtcblx0Y3R4LmJnQmx1ZSA9ICQuYmdCbHVlLmJpbmQoY3R4KTtcblx0Y3R4LmJnTWFnZW50YSA9ICQuYmdNYWdlbnRhLmJpbmQoY3R4KTtcblx0Y3R4LmJnQ3lhbiA9ICQuYmdDeWFuLmJpbmQoY3R4KTtcblx0Y3R4LmJnV2hpdGUgPSAkLmJnV2hpdGUuYmluZChjdHgpO1xuXG5cdHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIGluaXQob3BlbiwgY2xvc2UpIHtcblx0bGV0IGJsayA9IHtcblx0XHRvcGVuOiBgXFx4MWJbJHtvcGVufW1gLFxuXHRcdGNsb3NlOiBgXFx4MWJbJHtjbG9zZX1tYCxcblx0XHRyZ3g6IG5ldyBSZWdFeHAoYFxcXFx4MWJcXFxcWyR7Y2xvc2V9bWAsICdnJylcblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uICh0eHQpIHtcblx0XHRpZiAodGhpcyAhPT0gdm9pZCAwICYmIHRoaXMuaGFzICE9PSB2b2lkIDApIHtcblx0XHRcdCEhfnRoaXMuaGFzLmluZGV4T2Yob3BlbikgfHwgKHRoaXMuaGFzLnB1c2gob3BlbiksdGhpcy5rZXlzLnB1c2goYmxrKSk7XG5cdFx0XHRyZXR1cm4gdHh0ID09PSB2b2lkIDAgPyB0aGlzIDogJC5lbmFibGVkID8gcnVuKHRoaXMua2V5cywgdHh0KycnKSA6IHR4dCsnJztcblx0XHR9XG5cdFx0cmV0dXJuIHR4dCA9PT0gdm9pZCAwID8gY2hhaW4oW29wZW5dLCBbYmxrXSkgOiAkLmVuYWJsZWQgPyBydW4oW2Jsa10sIHR4dCsnJykgOiB0eHQrJyc7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/kleur/index.mjs\n");

/***/ })

};
;