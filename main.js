/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AukimExtraBold.otf */ \"./src/fonts/AukimExtraBold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AukimLight.otf */ \"./src/fonts/AukimLight.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-VariableFont_wght.ttf */ \"./src/fonts/Montserrat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: AukimDark;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: Aukim;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    font-weight: bolder;\n}\n\n@font-face {\n    font-family: Montsterrat;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    font-weight: 500;\n}\n\n*{\n    box-sizing: border-box;\n    font-family: 'Montsterrat';\n}\n\nbody{\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content{\n    width: 100%;\n}\n\nheader{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    color: white;\n    text-align: center;\n}\n\n.header-logo{\n    height: 100px;\n}\n\n\n.header-logo img{\n    border-top: 1px white solid;\n    border-bottom: 1px white solid;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2);\n    max-width: 100%;\n    height: 100%;\n    width: 100%;\n    object-fit: contain;\n\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 10px;\n    width: 80%;\n    \n}\n\nnav button{\n    border: none;\n    padding: 15px;\n    font-size: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: black;\n    color: white;\n    width: 90%;\n    border-radius: 2rem;\n}\n\nnav button:focus{\n    border-bottom: 1px solid white;\n    background-color: rgb(255 255 255 /0.1);\n}\n\nnav button img{\n    height: 25px;\n    filter: invert(100%) sepia(2%) saturate(7462%) hue-rotate(173deg) brightness(105%) contrast(101%);\n}\n\n.hero-section{\n    /* border: 2px red solid; */\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    /* box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;\n    gap: 30px;\n    margin: 2rem auto;\n    padding: 2rem 1rem;\n}\n\n.order-now{\n    color: white;\n    background-color: rgb(44, 88, 233);\n    width: 70%;\n    padding: 15px;\n    border: none;\n    border-radius: 20px;\n}\n\n.hero-image-container{\n    width: 200px;\n}\n\n.hero-image{\n    height: 100%;\n    width: 100%;\n    max-width: 100%;\n    object-fit: cover;\n}\n\n.hero-info{\n    color: aliceblue;\n    text-align: center;\n}\n\n.customer-review-section{\n    color: aliceblue;\n    width: 90%;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.cards-holder{\n    color: wheat;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n    gap: 2rem;\n    /* width: 90%; */\n    margin: 2rem auto;\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;\n    padding: 1rem 0;\n}\n\n.customer-image{\n    height: 50px;\n    border-radius: 50%;\n}\n\n.card{\n    box-shadow: rgba(50, 50, 93, 0.45) 0px 30px 60px -12px, rgba(100, 0, 0, 0.5) 0px 18px 36px -18px;\n    background-color: rgba(0,0,0,0.1);\n    /* border: 1px red solid; */ \n    padding: 10px;\n    width: 90%;\n    margin: 0 auto;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n.name-and-image{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.date-and-star{\n    display: flex;\n    justify-content: space-between;\n}\n\n@media screen and (min-width:1160px) {\n    .hero-section{\n        flex-direction: row;\n        justify-content: space-evenly;\n    }\n\n\n\n}\n\n/*styling the menu */\n\n.menu-container{\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;\n    margin: 0 auto;\n    /* width: 80%; */\n    color: white;\n    display: grid;\n    gap: 100px;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    justify-items: center;\n}\n\n.appetizers, .mainCourse, .desserts, .beverages{\n    width: 80%;\n    margin: 0 auto;\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;\n    padding: 10px;\n    margin: 1rem 1rem;\n    \n}\n\n.menu-card-heading{\n    border-bottom: 2px solid white;\n    margin-bottom: 10px;\n    text-align: center;\n}\n\n.food-card-div{\n    /* margin: 0 auto; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));\n    /* justify-items: center; */\n    gap: 1rem;\n    width: 90%;\n}\n\n.name-and-price{\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    width: 80%;\n}\n\n.food-card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 300px;\n    width: 300px;\n    margin-bottom: 10px;\n    box-shadow: rgba(50, 50, 93, 0.45) 0px 30px 60px -12px, rgba(100, 0, 0, 0.5) 0px 18px 36px -18px;\n}\n\n.food-image-div{\n    border-radius: 50%;\n    width: 200px;\n    height: 200px;\n}\n\n.food-image-div img{\n    border-radius: 50%;\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n/*About Us section*/\n\n.about-container-div{\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;\n    text-align: center;\n    line-height: 1.2;\n}\n\n.about-img-div{\n    width: 300px;\n    margin: 10px 0;\n}\n\n.about-img-div img{\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    box-shadow: rgba(50, 50, 93, 0.45) 0px 30px 60px -12px, rgba(100, 0, 0, 0.5) 0px 18px 36px -18px;\n}\n\n.about-info{\n    margin: 10px 0;\n    width: 90%;\n    box-shadow: rgba(50, 50, 93, 0.45) 0px 30px 60px -12px, rgba(100, 0, 0, 0.5) 0px 18px 36px -18px;\n}\n\n.contact-container{\n    margin: 10px auto;\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;\n    text-align: center;\n    line-height: 1.2;\n}\n\n.contact-image-container{\n    width: 300px;\n    margin: 10px 0;\n}\n\n.contact-image-container img{\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    box-shadow: rgba(50, 50, 93, 0.45) 0px 30px 60px -12px, rgba(100, 0, 0, 0.5) 0px 18px 36px -18px;\n}\n\n.contact-info-container{\n    margin: 10px 0;\n    width: 90%;\n    box-shadow: rgba(50, 50, 93, 0.45) 0px 30px 60px -12px, rgba(100, 0, 0, 0.5) 0px 18px 36px -18px;\n}\n\n@media screen and (min-width:1160px) {\n    .about-container-div,.contact-container{\n        display: flex;\n        \n        /* grid-template-columns: repeat(2,1fr); */\n        justify-content: center;\n        width: 40%;\n    }\n\n\n}\n\nh1,h2,h3,h4{\n    font-family: 'AukimDark';\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _images_sanji_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sanji.jpeg */ \"./src/images/sanji.jpeg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nfunction aboutContainer(){\n    const aboutContainerDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','about-container-div');\n    const aboutImgDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','about-img-div');\n    const aboutInfo = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','about-info');\n    const aboutInfoName = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1','about-info-name');\n    const aboutInfoPara = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p','about-info-para');\n    const aboutImg = new Image();\n    aboutImg.src = _images_sanji_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    aboutInfoPara.textContent = `Sanji, the esteemed cook of the Straw Hat Restaurant, is renowned for his culinary brilliance and fiery dedication to his craft. With a tall, lean build and his characteristic curly eyebrow, Sanji's presence in the kitchen is as striking as it is masterful. His culinary journey began at a young age, driven by a profound love for cooking and an unwavering ambition to find the All Blue, a legendary sea said to be a paradise for chefs.\n\nSanji's expertise extends beyond his exceptional knife skills and creative recipes; he is also a master of the powerful martial art known as \"Black Leg Style,\" which he employs to protect his crew and his kitchen with equal fervor. His dishes, infused with both flavor and passion, have earned the Straw Hat Restaurant a reputation for excellence, delighting diners from all corners of the world. Sanji's commitment to his friends, his dream, and his impeccable cuisine makes him a vital and beloved member of the Straw Hat crew.`\n\n    aboutImgDiv.appendChild(aboutImg);\n    aboutInfo.append(aboutInfoName,aboutInfoPara);\n    aboutContainerDiv.append(aboutImgDiv,aboutInfo);\n\n    return aboutContainerDiv;\n}\n\nfunction loadAbout(){\n    const content = document.querySelector('#content');\n    content.innerHTML = \"\";\n    content.appendChild(aboutContainer());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/phone.svg */ \"./src/images/phone.svg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_strawhats_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/strawhats.jpeg */ \"./src/images/strawhats.jpeg\");\n\n\n\n\n\nfunction contactDiv(){\n    const contactContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','contact-container');\n    const contactImgContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','contact-image-container');\n    const contactInfoContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','contact-info-container');\n    const contactPara = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p','contact-para');\n    contactPara.textContent = \"The Straw Hat Pirates, also known as the Mugiwara Pirates, Straw Hat Crew, or simply the Straw Hats, are an extremely infamous and powerful pirate crew that originated from the East Blue. They are the main focus and protagonists of the manga and anime One Piece and are led by the main protagonist, Monkey D. Luffy. \"\n\n    contactInfoContainer.append(contactPara);\n    const contactImg = new Image();\n    contactImg.src = _images_strawhats_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    contactImgContainer.appendChild(contactImg);\n    contactContainer.append(contactImgContainer,contactInfoContainer);\n\n    return contactContainer;\n}\n\nfunction loadContact(){\n    const content = document.querySelector('#content');\n    content.innerHTML = \"\";\n    content.appendChild(contactDiv());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome),\n/* harmony export */   makeElement: () => (/* binding */ makeElement)\n/* harmony export */ });\n/* harmony import */ var _images_Pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Pizza.jpeg */ \"./src/images/Pizza.jpeg\");\n/* harmony import */ var _images_Luffy_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Luffy.jpeg */ \"./src/images/Luffy.jpeg\");\n/* harmony import */ var _images_zoro_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/zoro.jpeg */ \"./src/images/zoro.jpeg\");\n/* harmony import */ var _images_chopper_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chopper.jpeg */ \"./src/images/chopper.jpeg\");\n/* harmony import */ var _images_franky_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/franky.jpeg */ \"./src/images/franky.jpeg\");\n/* harmony import */ var _images_home_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/home.svg */ \"./src/images/home.svg\");\n/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu.svg */ \"./src/images/menu.svg\");\n/* harmony import */ var _images_about_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/about.svg */ \"./src/images/about.svg\");\n/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/phone.svg */ \"./src/images/phone.svg\");\n/* harmony import */ var _images_headerlogo_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/headerlogo.jpeg */ \"./src/images/headerlogo.jpeg\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    const headerLogoContainer = document.querySelector('.header-logo');\n    const home = document.querySelector('.home');\n    const menu = document.querySelector('.menu');\n    const about = document.querySelector('.about');\n    const contact = document.querySelector('.contact');\n\n    const headerLogo = new Image();\n    headerLogo.src = _images_headerlogo_jpeg__WEBPACK_IMPORTED_MODULE_9__;\n    const myHomeImg = new Image();\n    myHomeImg.src = _images_home_svg__WEBPACK_IMPORTED_MODULE_5__;\n    const myMenuImg = new Image();\n    myMenuImg.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_6__;\n    const myAboutImg = new Image();\n    myAboutImg.src = _images_about_svg__WEBPACK_IMPORTED_MODULE_7__;\n    const myContactImg = new Image();\n    myContactImg.src = _images_phone_svg__WEBPACK_IMPORTED_MODULE_8__;\n    headerLogoContainer.appendChild(headerLogo);\n    home.appendChild(myHomeImg);\n    menu.appendChild(myMenuImg);\n    about.appendChild(myAboutImg);\n    contact.appendChild(myContactImg);\n\n\n\n\nfunction makeElement(element,className){\n    const elementName = document.createElement(element);\n    elementName.classList.add(className);\n    return elementName;\n}\n\nfunction homePage(){\n    const container = makeElement('div','container');\n    container.appendChild(heroSection());\n    container.appendChild(customerReview())\n    return container;\n}\n\nfunction heroSection(){\n    const heroSectionContainer = makeElement('div','hero-section');\n    const orderNowBtn = makeElement('button','order-now');\n    orderNowBtn.textContent = \"Order Now\";\n    orderNowBtn.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_10__.loadMenu);\n    const heroInfo = makeElement('div','hero-info');\n    const heroInfoHeading = makeElement('h1','hero-info-heading');\n    const heroInfoPara = makeElement('p','hero-info-para');\n    const heroImageContainer = makeElement('div','hero-image-container');\n    const heroImage = new Image();\n    heroImage.src = _images_Pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    heroImage.classList.add('hero-image');\n    heroImageContainer.appendChild(heroImage);\n    heroSectionContainer.appendChild(heroInfo);\n    heroSectionContainer.appendChild(heroImageContainer);\n    heroInfo.appendChild(heroInfoHeading);\n    heroInfo.appendChild(heroInfoPara);\n    heroInfo.appendChild(orderNowBtn);\n    heroInfoHeading.textContent = \"Tasty but Healthy\";\n    heroInfoPara.textContent = \"Live life, love food\";\n\n    \n\n    return heroSectionContainer;\n}\n\nfunction customerReview(){\n    const customerReviewSection = makeElement('div','customer-review-section');\n    const customerReviewSectionHeading = makeElement('h1','customer-section-heading');\n    const cardsHolder = makeElement('div','cards-holder');\n    customerReviewSectionHeading.textContent = \"What people think about us\";\n    function makeReviewCard(customerName,stars,date,imageSrc){\n        const reviewCard = makeElement('div','card');\n        const dateAndStarSection = makeElement('div','date-and-star');\n        const starSection = makeElement('span','star-section');\n        const dateSection = makeElement('span','date-section');\n        dateAndStarSection.append(starSection,dateSection);\n        const review = makeElement('p','review');\n        const nameAndImageSection = makeElement('div','name-and-image');\n        const nameSection = makeElement('span','name');\n        const imageDiv = makeElement('span','customer-image-container');\n        nameAndImageSection.appendChild(imageDiv);\n        nameAndImageSection.appendChild(nameSection);\n\n        const customerImage = new Image();\n        customerImage.src = imageSrc;\n        customerImage.classList.add('customer-image');\n\n        imageDiv.appendChild(customerImage);\n        \n\n        for(let i = 0;i<stars;i++){\n            starSection.textContent += \"⭐\";\n        }\n        dateSection.textContent = date;\n        nameSection.textContent = customerName;\n\n        reviewCard.append(dateAndStarSection,review,nameAndImageSection);\n        return {reviewCard,review};\n    }\n\n    const luffy = makeReviewCard('Monkey D. Luffy',5,'10-02-2024',_images_Luffy_jpeg__WEBPACK_IMPORTED_MODULE_1__);\n    const zoro = makeReviewCard('Roronoa Zoro',5,'01-03-2024',_images_zoro_jpeg__WEBPACK_IMPORTED_MODULE_2__);\n    const chopper = makeReviewCard('Tony Tony Chopper',5,'14-03-2024',_images_chopper_jpeg__WEBPACK_IMPORTED_MODULE_3__);\n    const franky = makeReviewCard('Franky',5,'10-04-2024',_images_franky_jpeg__WEBPACK_IMPORTED_MODULE_4__);\n\n    luffy.review.textContent = '\"I will become the KING OF THE PIRATES. The meat was super delicious. Sanji is the best cook overall.\"';\n    zoro.review.textContent = '\"Baka cook is good. I love onigiri!!! and the booze specially.\"';\n    chopper.review.textContent = `\"Sanji's cotton candy are the best in the whole New World.\"`;\n    franky.review.textContent = `\"Superrrr!!! I need cola for my Coup de Burst and this place have the best colas.\"`;\n\n    cardsHolder.append(luffy.reviewCard,zoro.reviewCard,chopper.reviewCard,franky.reviewCard)\n    customerReviewSection.append(customerReviewSectionHeading,cardsHolder);\n\n    return customerReviewSection;\n}\n\nfunction loadHome(){\n    const content = document.querySelector('#content');\n    content.innerHTML = \"\";\n    content.appendChild(homePage());\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n\nconst homeBtn = document.querySelector('.home');\nconst menuBtn = document.querySelector('.menu');\nconst aboutBtn = document.querySelector('.about');\nconst contactBtn = document.querySelector('.contact');\n// const orderNowBtn = document.querySelector('.order-now');\n\nhomeBtn.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_0__.loadHome);\nmenuBtn.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\naboutBtn.addEventListener('click',_about__WEBPACK_IMPORTED_MODULE_2__.loadAbout);\ncontactBtn.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_CherryPies_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/CherryPies.jpeg */ \"./src/images/CherryPies.jpeg\");\n/* harmony import */ var _images_MeatPie_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/MeatPie.jpeg */ \"./src/images/MeatPie.jpeg\");\n/* harmony import */ var _images_Sandwiches_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Sandwiches.jpeg */ \"./src/images/Sandwiches.jpeg\");\n/* harmony import */ var _images_Hamburger_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Hamburger.jpeg */ \"./src/images/Hamburger.jpeg\");\n/* harmony import */ var _images_Onigiri_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Onigiri.jpeg */ \"./src/images/Onigiri.jpeg\");\n/* harmony import */ var _images_Oshiruko_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Oshiruko.jpeg */ \"./src/images/Oshiruko.jpeg\");\n/* harmony import */ var _images_grilledpizza_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/grilledpizza.jpeg */ \"./src/images/grilledpizza.jpeg\");\n/* harmony import */ var _images_chickenmeatballs_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/chickenmeatballs.jpeg */ \"./src/images/chickenmeatballs.jpeg\");\n/* harmony import */ var _images_porkchopstirfry_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/porkchopstirfry.jpeg */ \"./src/images/porkchopstirfry.jpeg\");\n/* harmony import */ var _images_chickenfriedrice_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/chickenfriedrice.jpeg */ \"./src/images/chickenfriedrice.jpeg\");\n/* harmony import */ var _images_tacopasta_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/tacopasta.jpeg */ \"./src/images/tacopasta.jpeg\");\n/* harmony import */ var _images_chickenmeatloaf_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/chickenmeatloaf.jpeg */ \"./src/images/chickenmeatloaf.jpeg\");\n/* harmony import */ var _images_cottoncandy_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/cottoncandy.jpeg */ \"./src/images/cottoncandy.jpeg\");\n/* harmony import */ var _images_chocolatefunfetticake_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/chocolatefunfetticake.jpeg */ \"./src/images/chocolatefunfetticake.jpeg\");\n/* harmony import */ var _images_lemonraspberrycake_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/lemonraspberrycake.jpeg */ \"./src/images/lemonraspberrycake.jpeg\");\n/* harmony import */ var _images_bastani_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/bastani.jpeg */ \"./src/images/bastani.jpeg\");\n/* harmony import */ var _images_sawdustpie_jpeg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/sawdustpie.jpeg */ \"./src/images/sawdustpie.jpeg\");\n/* harmony import */ var _images_espressocake_jpeg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/espressocake.jpeg */ \"./src/images/espressocake.jpeg\");\n/* harmony import */ var _images_lassi_jpeg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/lassi.jpeg */ \"./src/images/lassi.jpeg\");\n/* harmony import */ var _images_lemonade_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/lemonade.jpeg */ \"./src/images/lemonade.jpeg\");\n/* harmony import */ var _images_tea_jpeg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/tea.jpeg */ \"./src/images/tea.jpeg\");\n/* harmony import */ var _images_applejuice_jpeg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/applejuice.jpeg */ \"./src/images/applejuice.jpeg\");\n/* harmony import */ var _images_orangejuice_jpeg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/orangejuice.jpeg */ \"./src/images/orangejuice.jpeg\");\n/* harmony import */ var _images_mango_jpeg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/mango.jpeg */ \"./src/images/mango.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction container(){\n\n    const menuContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','menu-container');\n\n    const appetizers =  (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','appetizers');\n    const mainCourse = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','mainCourse');\n    const desserts = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','desserts');\n    const beverages = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','beverages');\n\n    menuContainer.append(appetizers,mainCourse,desserts,beverages);\n\n    const appetizersList = {\n        // 'Food Type':'appetizers',\n        'Cherry Pies': {price:200, imageSrc:_images_CherryPies_jpeg__WEBPACK_IMPORTED_MODULE_2__},\n        'Meat Pie': {price:300, imageSrc:_images_MeatPie_jpeg__WEBPACK_IMPORTED_MODULE_3__},\n        'Sandwiches': {price:200, imageSrc:_images_Sandwiches_jpeg__WEBPACK_IMPORTED_MODULE_4__},\n        'Hamburger':{price:300, imageSrc:_images_Hamburger_jpeg__WEBPACK_IMPORTED_MODULE_5__},\n        'Onigiri':{price:250, imageSrc:_images_Onigiri_jpeg__WEBPACK_IMPORTED_MODULE_6__},\n        'Oshiruko':{price:300, imageSrc:_images_Oshiruko_jpeg__WEBPACK_IMPORTED_MODULE_7__},\n    };\n\n    const mainCourseList = {\n        'Grilled Pizza':{price:500,imageSrc:_images_grilledpizza_jpeg__WEBPACK_IMPORTED_MODULE_8__},\n        'Chicken Meatballs':{price:700,imageSrc:_images_chickenmeatballs_jpeg__WEBPACK_IMPORTED_MODULE_9__},\n        'Pork Chop Stir-Fry':{price:700,imageSrc:_images_porkchopstirfry_jpeg__WEBPACK_IMPORTED_MODULE_10__},\n        'Chicken Fried Rice':{price:800,imageSrc:_images_chickenfriedrice_jpeg__WEBPACK_IMPORTED_MODULE_11__},\n        'Taco Pasta':{price:600,imageSrc:_images_tacopasta_jpeg__WEBPACK_IMPORTED_MODULE_12__},\n        'Chicken Meatloaf':{price:800,imageSrc:_images_chickenmeatloaf_jpeg__WEBPACK_IMPORTED_MODULE_13__}\n    };\n\n    const dessertsList = {\n        'Cotton Candy':{price:100,imageSrc:_images_cottoncandy_jpeg__WEBPACK_IMPORTED_MODULE_14__},\n        'Chocolate Funfetti Cake':{price:300,imageSrc:_images_chocolatefunfetticake_jpeg__WEBPACK_IMPORTED_MODULE_15__},\n        'Lemon Raspberry Cake':{price:300,imageSrc:_images_lemonraspberrycake_jpeg__WEBPACK_IMPORTED_MODULE_16__},\n        'Bastani':{price:270,imageSrc:_images_bastani_jpeg__WEBPACK_IMPORTED_MODULE_17__},\n        'Sawdust Pie':{price:300,imageSrc:_images_sawdustpie_jpeg__WEBPACK_IMPORTED_MODULE_18__},\n        'Espresso Cake':{price:280,imageSrc:_images_espressocake_jpeg__WEBPACK_IMPORTED_MODULE_19__}\n    };\n\n    const beveragesList = {\n        'Lassi':{price:100,imageSrc:_images_lassi_jpeg__WEBPACK_IMPORTED_MODULE_20__},\n        'Lemonade':{price:80,imageSrc:_images_lemonade_jpeg__WEBPACK_IMPORTED_MODULE_21__},\n        'Tea':{price:80,imageSrc:_images_tea_jpeg__WEBPACK_IMPORTED_MODULE_22__},\n        'Apple Juice':{price:90,imageSrc:_images_applejuice_jpeg__WEBPACK_IMPORTED_MODULE_23__},\n        'Orange Juice':{price:90,imageSrc:_images_orangejuice_jpeg__WEBPACK_IMPORTED_MODULE_24__},\n        'Mango Juice':{price:85,imageSrc:_images_mango_jpeg__WEBPACK_IMPORTED_MODULE_25__}\n    }\n\n    function makeMenu(name,foodType,object){\n        const menuCardHeading = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h2','menu-card-heading');\n        menuCardHeading.textContent = name;\n        const foodCardDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','food-card-div');\n        function addToMenu({name,price,imageSrc}){\n            const foodCard = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','food-card');\n            const foodImageDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','food-image-div');\n            const foodName = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h4','food-name');\n            const nameAndPrice = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div','name-and-price');\n            const foodPrice = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p','food-price');\n            const foodDescription = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p','food-description');\n            const foodImage = new Image();\n            nameAndPrice.append(foodName,foodPrice)\n            foodImage.src = imageSrc;\n            foodImageDiv.appendChild(foodImage);\n            foodName.textContent = name;\n            foodPrice.textContent = '₶  '+price;\n            foodCard.append(foodImageDiv,nameAndPrice,foodDescription);\n\n            foodCardDiv.appendChild(foodCard);\n        }\n        foodType.append(menuCardHeading,foodCardDiv);\n        const foodArray = Object.entries(object);\n        foodArray.forEach(([name,details]) => {\n            addToMenu({name,...details});\n        });\n\n        \n\n    }\n    makeMenu('Appetizers',appetizers,appetizersList);\n    makeMenu('Main Courses',mainCourse,mainCourseList);\n    makeMenu('Desserts',desserts,dessertsList);\n    makeMenu('Beverages',beverages,beveragesList);\n    return menuContainer;\n}\n\nfunction loadMenu(){\n    const content = document.querySelector('#content');\n    content.innerHTML = \"\";\n    content.appendChild(container());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/AukimExtraBold.otf":
/*!**************************************!*\
  !*** ./src/fonts/AukimExtraBold.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f6dfabd22a86483434e.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/AukimExtraBold.otf?");

/***/ }),

/***/ "./src/fonts/AukimLight.otf":
/*!**********************************!*\
  !*** ./src/fonts/AukimLight.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ac010d33d1f16f28d95.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/AukimLight.otf?");

/***/ }),

/***/ "./src/fonts/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e687123cd4528224ce5.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Montserrat-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/images/CherryPies.jpeg":
/*!************************************!*\
  !*** ./src/images/CherryPies.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af66c8d054a5d8b5def7.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/CherryPies.jpeg?");

/***/ }),

/***/ "./src/images/Hamburger.jpeg":
/*!***********************************!*\
  !*** ./src/images/Hamburger.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6cb7dd6530e8b25bd029.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Hamburger.jpeg?");

/***/ }),

/***/ "./src/images/Luffy.jpeg":
/*!*******************************!*\
  !*** ./src/images/Luffy.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1c4a0c533bbcac147fc.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Luffy.jpeg?");

/***/ }),

/***/ "./src/images/MeatPie.jpeg":
/*!*********************************!*\
  !*** ./src/images/MeatPie.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9db706ad6ac5566b8e2e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/MeatPie.jpeg?");

/***/ }),

/***/ "./src/images/Onigiri.jpeg":
/*!*********************************!*\
  !*** ./src/images/Onigiri.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bff2fdb6318e5dae1c72.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Onigiri.jpeg?");

/***/ }),

/***/ "./src/images/Oshiruko.jpeg":
/*!**********************************!*\
  !*** ./src/images/Oshiruko.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"537da52c25cece21f74e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Oshiruko.jpeg?");

/***/ }),

/***/ "./src/images/Pizza.jpeg":
/*!*******************************!*\
  !*** ./src/images/Pizza.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10bd3cfce01ecf413295.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Pizza.jpeg?");

/***/ }),

/***/ "./src/images/Sandwiches.jpeg":
/*!************************************!*\
  !*** ./src/images/Sandwiches.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4dc6fca9fa72499c46e1.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Sandwiches.jpeg?");

/***/ }),

/***/ "./src/images/about.svg":
/*!******************************!*\
  !*** ./src/images/about.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b50b217d971c431f613c.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/about.svg?");

/***/ }),

/***/ "./src/images/applejuice.jpeg":
/*!************************************!*\
  !*** ./src/images/applejuice.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5dfccbd8c6187da8287.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/applejuice.jpeg?");

/***/ }),

/***/ "./src/images/bastani.jpeg":
/*!*********************************!*\
  !*** ./src/images/bastani.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a48250dbbfcb6802836a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/bastani.jpeg?");

/***/ }),

/***/ "./src/images/chickenfriedrice.jpeg":
/*!******************************************!*\
  !*** ./src/images/chickenfriedrice.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf1a9c25eed94ded15d9.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chickenfriedrice.jpeg?");

/***/ }),

/***/ "./src/images/chickenmeatballs.jpeg":
/*!******************************************!*\
  !*** ./src/images/chickenmeatballs.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72cd883feb363225de10.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chickenmeatballs.jpeg?");

/***/ }),

/***/ "./src/images/chickenmeatloaf.jpeg":
/*!*****************************************!*\
  !*** ./src/images/chickenmeatloaf.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4518787c4c605b7c5b8e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chickenmeatloaf.jpeg?");

/***/ }),

/***/ "./src/images/chocolatefunfetticake.jpeg":
/*!***********************************************!*\
  !*** ./src/images/chocolatefunfetticake.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fac9faf71ce4be262179.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chocolatefunfetticake.jpeg?");

/***/ }),

/***/ "./src/images/chopper.jpeg":
/*!*********************************!*\
  !*** ./src/images/chopper.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc5e00a7586fc1c2fd82.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chopper.jpeg?");

/***/ }),

/***/ "./src/images/cottoncandy.jpeg":
/*!*************************************!*\
  !*** ./src/images/cottoncandy.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c31fff9978ef2c3b81f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cottoncandy.jpeg?");

/***/ }),

/***/ "./src/images/espressocake.jpeg":
/*!**************************************!*\
  !*** ./src/images/espressocake.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9db29a99d0ba6ac505b9.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/espressocake.jpeg?");

/***/ }),

/***/ "./src/images/franky.jpeg":
/*!********************************!*\
  !*** ./src/images/franky.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a94941a749f4f514f40.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/franky.jpeg?");

/***/ }),

/***/ "./src/images/grilledpizza.jpeg":
/*!**************************************!*\
  !*** ./src/images/grilledpizza.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4027f23f94383d9356dc.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/grilledpizza.jpeg?");

/***/ }),

/***/ "./src/images/headerlogo.jpeg":
/*!************************************!*\
  !*** ./src/images/headerlogo.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b703c9403f37591acd8.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/headerlogo.jpeg?");

/***/ }),

/***/ "./src/images/home.svg":
/*!*****************************!*\
  !*** ./src/images/home.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1be37bc6b1894801457c.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/home.svg?");

/***/ }),

/***/ "./src/images/lassi.jpeg":
/*!*******************************!*\
  !*** ./src/images/lassi.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d1b25bf25e2443882b0.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lassi.jpeg?");

/***/ }),

/***/ "./src/images/lemonade.jpeg":
/*!**********************************!*\
  !*** ./src/images/lemonade.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c798d9b6d34f168e1106.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lemonade.jpeg?");

/***/ }),

/***/ "./src/images/lemonraspberrycake.jpeg":
/*!********************************************!*\
  !*** ./src/images/lemonraspberrycake.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9b09fd943ddb40a9894.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lemonraspberrycake.jpeg?");

/***/ }),

/***/ "./src/images/mango.jpeg":
/*!*******************************!*\
  !*** ./src/images/mango.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b59a3d286c0080b7549c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mango.jpeg?");

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"403e1de70ab49044986f.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu.svg?");

/***/ }),

/***/ "./src/images/orangejuice.jpeg":
/*!*************************************!*\
  !*** ./src/images/orangejuice.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2cb36414cddaac660ce6.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/orangejuice.jpeg?");

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b454d6aeda1578fa2ba.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/phone.svg?");

/***/ }),

/***/ "./src/images/porkchopstirfry.jpeg":
/*!*****************************************!*\
  !*** ./src/images/porkchopstirfry.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa315d2c7d119fcc67c2.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/porkchopstirfry.jpeg?");

/***/ }),

/***/ "./src/images/sanji.jpeg":
/*!*******************************!*\
  !*** ./src/images/sanji.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05bfe28b88d8bb329438.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/sanji.jpeg?");

/***/ }),

/***/ "./src/images/sawdustpie.jpeg":
/*!************************************!*\
  !*** ./src/images/sawdustpie.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd31e2cfcb5155936ebc.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/sawdustpie.jpeg?");

/***/ }),

/***/ "./src/images/strawhats.jpeg":
/*!***********************************!*\
  !*** ./src/images/strawhats.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"106d67c26c334ea3a150.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/strawhats.jpeg?");

/***/ }),

/***/ "./src/images/tacopasta.jpeg":
/*!***********************************!*\
  !*** ./src/images/tacopasta.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a091b473d45de83ab6bd.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tacopasta.jpeg?");

/***/ }),

/***/ "./src/images/tea.jpeg":
/*!*****************************!*\
  !*** ./src/images/tea.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74629608e5187e3189fd.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tea.jpeg?");

/***/ }),

/***/ "./src/images/zoro.jpeg":
/*!******************************!*\
  !*** ./src/images/zoro.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"111bde6ed65c7ee0325f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/zoro.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;