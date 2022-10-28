/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scr/js/index.js":
/*!*************************!*\
  !*** ./scr/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst UI = __webpack_require__(/*! ./modules/ui */ \"./scr/js/modules/ui.js\");\nconst POST = __webpack_require__(/*! ./modules/postMethod */ \"./scr/js/modules/postMethod.js\");\nconst GET = __webpack_require__(/*! ./modules/getMethod */ \"./scr/js/modules/getMethod.js\");\nconst PUT = __webpack_require__(/*! ./modules/putMethod */ \"./scr/js/modules/putMethod.js\");\nconst DELETE = __webpack_require__(/*! ./modules/deleteMethod */ \"./scr/js/modules/deleteMethod.js\");\nconst COMPLETE = __webpack_require__(/*! ./modules/complete */ \"./scr/js/modules/complete.js\");\n\nconst url = \"http://localhost:8888/todos\";\n\n\nUI.start();\n\nconst { form, screenInput } = UI;\n\nPOST(form, screenInput, url);\n\n\nasync function engine() {\n\tawait GET(UI, url);\n\tPUT(\n\t\tdocument.querySelectorAll(\".editBtn\"),\n\t\tdocument.querySelectorAll(\".saveBtn\"),\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\n\t\turl\n\t);\n\tDELETE(\n\t\tdocument.querySelectorAll(\".removeBtn\"),\n\t\turl\n\t);\n\tCOMPLETE(url, document.querySelectorAll(\".buttons input\"), document.querySelectorAll(\".listsBlockItemContent\"))\n}\n\nengine();\n\n\n\n//# sourceURL=webpack://crud/./scr/js/index.js?");

/***/ }),

/***/ "./scr/js/modules/complete.js":
/*!************************************!*\
  !*** ./scr/js/modules/complete.js ***!
  \************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (url, checkArr, id) {\n\tcheckArr.forEach((check, index) => {\n\t\tcheck.addEventListener(\"change\", async () => {\n\t\t\tif (check.checked) {\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\n\t\t\t\t\tmethod: \"PATCH\",\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t\t},\n\t\t\t\t\tbody: JSON.stringify({ isComplete: true })\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\n\t\t\t\t\tmethod: \"PATCH\",\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t\t},\n\t\t\t\t\tbody: JSON.stringify({ isComplete: false })\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t});\n};\n\n//# sourceURL=webpack://crud/./scr/js/modules/complete.js?");

/***/ }),

/***/ "./scr/js/modules/deleteMethod.js":
/*!****************************************!*\
  !*** ./scr/js/modules/deleteMethod.js ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = function (removeBtn, url) {\n\tremoveBtn.forEach(btn => {\n\t\tbtn.addEventListener(\"click\", async () => {\n\t\t\tconst a = confirm(\"Are you sure ?\");\n\n\t\t\tif (a) {\n\t\t\t\tconst fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);\n\t\t\t\tbtn.parentElement.parentElement.remove();\n\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\n\t\t\t\t\tmethod: \"DELETE\"\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\talert(\"Good\");\n\t\t\t}\n\t\t});\n\t});\n};\n\n\n//# sourceURL=webpack://crud/./scr/js/modules/deleteMethod.js?");

/***/ }),

/***/ "./scr/js/modules/getMethod.js":
/*!*************************************!*\
  !*** ./scr/js/modules/getMethod.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = async function (ui, url) {\n\treturn await fetch(url)\n\t\t.then(data => data.json())\n\t\t.then(data => data.forEach(obj => ui.toHTML(obj.id, obj.title, obj.isComplete)));\n}\n\n\n//# sourceURL=webpack://crud/./scr/js/modules/getMethod.js?");

/***/ }),

/***/ "./scr/js/modules/postMethod.js":
/*!**************************************!*\
  !*** ./scr/js/modules/postMethod.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = function (form, input, url) {\n\tform.addEventListener(\"submit\", async (e) => {\n\t\te.preventDefault();\n\n\t\tif (input.value.trim() !== \"\") {\n\t\t\tawait fetch(url, {\n\t\t\t\tmethod: \"POST\",\n\t\t\t\theaders: {\n\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t},\n\t\t\t\tbody: JSON.stringify({ title: input.value.trim(), isComplete: false })\n\t\t\t});\n\t\t}\n\n\t\te.target.reset();\n\t});\n};\n\n\n\n//# sourceURL=webpack://crud/./scr/js/modules/postMethod.js?");

/***/ }),

/***/ "./scr/js/modules/putMethod.js":
/*!*************************************!*\
  !*** ./scr/js/modules/putMethod.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = function (editBtnArray, saveBtnArray, content, url) {\n\teditBtnArray.forEach((editBtn, index) => {\n\t\teditBtn.addEventListener(\"click\", () => {\n\t\t\teditBtn.style.display = \"none\";\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\n\t\t\tconst fakeID = parseInt(content[index].children[0].textContent);\n\t\t\tconst input = content[index].children[1];\n\t\t\tinput.classList.add(\"edit\");\n\t\t\tinput.removeAttribute(\"readonly\");\n\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async () => {\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\n\t\t\t\t\tmethod: \"PATCH\",\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t\"content-type\": \"application/json\"\n\t\t\t\t\t},\n\t\t\t\t\tbody: JSON.stringify({ title: input.value.trim()})\n\t\t\t\t});\n\t\t\t});\n\t\t});\n\t});\n};\n\n//# sourceURL=webpack://crud/./scr/js/modules/putMethod.js?");

/***/ }),

/***/ "./scr/js/modules/ui.js":
/*!******************************!*\
  !*** ./scr/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = {\n\ttitle: document.createElement(\"h1\"),\n\tsubTitle: document.createElement(\"p\"),\n\tform: document.createElement(\"form\"),\n\tscreenBlock: document.createElement(\"div\"),\n\tscreenInput: document.createElement(\"input\"),\n\tscreenAddBtn: document.createElement(\"button\"),\n\tlistsBlock: document.createElement(\"div\"),\n\n\telementOptions() {\n\t\tthis.title.textContent = \"CRUD\";\n\t\tthis.subTitle.textContent = \"Asyn Application\";\n\n\t\tthis.form.id = \"app-form\";\n\t\tthis.screenBlock.id = \"screenBlock\";\n\t\tthis.screenInput.type = \"text\";\n\t\tthis.screenInput.placeholder = \"Type here...\";\n\t\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\")\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\n\t\tthis.listsBlock.id = \"listBlock\";\n\t},\n\n\tappendElements() {\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock);\n\t\tthis.form.append(this.screenBlock);\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\n\t},\n\n\ttoHTML(id, value, state = false) {\n\t\tthis.listsBlock.innerHTML += `\n\t\t\t<div class=\"listsBlockItem\">\n\t\t\t\t<div class=\"listsBlockItemContent\">\n\t\t\t\t\t<span>${id}</span>\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" readonly>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"item${id}\" ${state ? \"checked\" : \"\"}>\n\t\t\t\t\t<button class=\"removeBtn fa fa-trash\"></button>\n\t\t\t\t\t<button class=\"editBtn fa fa-pencil\"></button>\n\t\t\t\t\t<button class=\"saveBtn fa fa-save\"></button>\n\t\t\t\t\t<button class=\"complete\"></button>\n\t\t\t\t\t<button class=\"incomplete\"></button>\n\t\t\t\t\t<button clas=\"all\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t},\n\n\tstart() {\n\t\tthis.elementOptions();\n\t\tthis.appendElements();\n\t}\n};\n\n//# sourceURL=webpack://crud/./scr/js/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scr/js/index.js");
/******/ 	
/******/ })()
;