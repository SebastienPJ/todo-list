/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.close-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.close-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n.edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n}\n\n\n.edit-todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.todo-detail {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.detail-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-container {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;;AAGA;;;;EAIE,aAAa;;AAEf;;;AAGA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,6BAA6B;;AAE/B;;AAEA;EACE,gCAAgC;AAClC;;;;;;;;;;AAUA;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB;sCACoC;EACpC,yBAAyB;AAC3B;;;AAGA;EACE,kBAAkB;AACpB;;;AAGA;EACE,6BAA6B;;AAE/B;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;;;;AAKA;EACE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;;;;AAIA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,QAAQ;EACR,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;;AAEpB;;AAEA;;EAEE,iBAAiB;AACnB;;;;;;;AAOA;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;;AAGA;EACE,kBAAkB;;EAElB,4BAA4B;AAC9B;;;;;AAKA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;;AAEZ;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;;AAGA;EACE,uBAAuB;EACvB,aAAa;;AAEf;;;AAGA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;;AAGA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB","sourcesContent":["body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.close-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.close-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n.edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n}\n\n\n.edit-todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.todo-detail {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.detail-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-container {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");






const create = (() => {

  const newTodoButton = () => {
    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.classList.add('add-new-todo-button');
    todoButton.textContent = '+';
    todoButton.addEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.todo.openNewTodoForm)

    return todoButton
  }


  const displayHeader = (title) => {
    
    const _headerContainer = document.createElement('header');
    _headerContainer.classList.add('display-menu-header')
    _contentContainer.appendChild(_headerContainer);


    const pageTitle = document.createElement('h1');
    pageTitle.textContent = title;
    _headerContainer.appendChild(pageTitle);


    return _headerContainer

  }
  


  const listOfTodos = (menuClicked) => {
   

    const allToDosList = () => {
      const listContainer = document.createElement('div')

      const unorderdList = document.createElement('ul');
      listContainer.appendChild(unorderdList);

      let taskArray = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

      

      taskArray.forEach(task => {
        let todoIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(task, taskArray)

        const listedTask = document.createElement('li');
        listedTask.classList.add('list');


        const shownContent = document.createElement('div');
        shownContent.classList.add('shown-content');
        listedTask.appendChild(shownContent);



        let inputCheckBox = document.createElement('input');
        inputCheckBox.setAttribute('type', 'checkbox');
        inputCheckBox.addEventListener('click', (e) => {
          _render__WEBPACK_IMPORTED_MODULE_2__.renderTodo.toggleTaskComplete(e);
          // editTodo.updateObject();
        });

        inputCheckBox.dataset['taskIndex'] = todoIndex; 

        inputCheckBox.name = `task${todoIndex}`;
    
        inputCheckBox.id = `task${todoIndex}`;  
        inputCheckBox.classList.add('checkbox');
        // inputCheckBox.autocomplete = 'off';
        
        
        shownContent.appendChild(inputCheckBox);


        let inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', `task${todoIndex}`);

        inputLabel.textContent = task.title;

        shownContent.appendChild(inputLabel);



        const priorityMarker = document.createElement('div');
        priorityMarker.classList.add('priority-marker');

        switch (task.priority) {
          case 'high':
            priorityMarker.style.display = 'inline-block'
            priorityMarker.style.backgroundColor = 'red'
            break;
          
          case 'medium':
            priorityMarker.style.display = 'inline-block'
            priorityMarker.style.backgroundColor = 'orange'
            break;
          
          case 'low':
            console.log(task.priority);
            priorityMarker.style.display = 'inline-block'
            priorityMarker.style.backgroundColor = 'cornflowerblue'
            break;
        
          default:
            priorityMarker.style.display = 'none'
            break;
        }
        

        shownContent.appendChild(priorityMarker)


        const editButton = document.createElement('button');
        editButton.classList.add('hide');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', (e) => {
          _edit__WEBPACK_IMPORTED_MODULE_1__.editTodo.openEditForm()
          _edit__WEBPACK_IMPORTED_MODULE_1__.editTodo.prefillEditForm(e);
          _edit__WEBPACK_IMPORTED_MODULE_1__.editTodo.tagEditFormWithIndex(e);
        });
        shownContent.appendChild(editButton);

        const expandButton = document.createElement('button');
        expandButton.classList.add('hide', 'expand');
        expandButton.textContent = 'expand';
        expandButton.addEventListener('click', function() {
          this.classList.toggle('active');
          console.log(this);
          let hiddenContent = this.parentElement.nextElementSibling;
          if (hiddenContent.style.display === 'block') {
            hiddenContent.style.display = 'none';
          } else {
            hiddenContent.style.display = 'block';
          }
        })


        shownContent.appendChild(expandButton);




        const projectContainer = document.createElement('p');
        projectContainer.classList.add('project-container');
        if ('project' in task) {
          projectContainer.textContent = `Project: ${task.project}`;
        }
        shownContent.appendChild(projectContainer)


        

        const dueDateContainer = document.createElement('p');
        dueDateContainer.classList.add('due-date')

        dueDateContainer.textContent = `By: ${task.dueDate}`;
        shownContent.appendChild(dueDateContainer);






   


        const collapsedContainer = document.createElement('div');
        collapsedContainer.classList.add('todo-detail');
        listedTask.appendChild(collapsedContainer);



        const notesContainer = document.createElement('div');
        notesContainer.classList.add('detail-container');
        if ('notes' in task) {
          notesContainer.textContent = task.notes;
        }
        collapsedContainer.appendChild(notesContainer);






        unorderdList.appendChild(listedTask);


      
        
      })

      
      return listContainer


    }
    

    const projectsList = () => {
      console.log("I've got the jects");
    }

    const todayList = () => {
      console.log("Do this today");
    }

    const tomorrowList = () => {
      console.log("One more day with your lazy behind");
    }
    
    const listReturned = {
      'All ToDos': allToDosList,
      'Today': todayList,
      'Tomorrow': tomorrowList,
      'Projects': projectsList

    }

    return listReturned[menuClicked]();
  }



  const _contentContainer = document.querySelector('.todo-display');



  return { displayHeader, newTodoButton, listOfTodos }
})();




/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTodo": () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



const editTodo = (() => {

  const openEditForm= () => {
    _editFormPopup.setAttribute('style', 'display: flex');
  }



  const closeEditForm = () => {
    _editFormPopup.setAttribute('style', 'display: none')
  }


  const prefillEditForm = (e) => {


    let _todoIndex = e.target.parentElement.firstChild.dataset.taskIndex
    let _allTodoArray = _index__WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    let _todoObject = _allTodoArray[_todoIndex];

    _editTitle.value = _todoObject.title;
    _editDescription.value = _todoObject.description;
    
    if (_todoObject.hasOwnProperty('notes')) {
      _editNotes.value = _todoObject.notes;
    }

    _editDueDate.value = _todoObject.dueDate
    _editPriority.value = _todoObject.priority


  }


  const tagEditFormWithIndex = (e) => {
    let _saveButton = document.querySelector('.save-changes');
    let _index = e.target.parentElement.firstChild.dataset.taskIndex

    _saveButton.dataset.taskIndex = _index;    
  }



  const saveEditChanges = (e) => {
    e.preventDefault();

    let _editedFormData = _index__WEBPACK_IMPORTED_MODULE_0__.todo.captureFormData(_editForm);

    let _listOfTodos = _index__WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    let _objIndex = e.target.dataset.taskIndex;

    let _todoObj = _listOfTodos[_objIndex];

    let newTitle = _editedFormData.get('edit-title');
    let newDescription = _editedFormData.get('edit-description');
    let newNotes = _editedFormData.get('edit-notes');
    let newDueDate = _editedFormData.get('edit-due-date');
    let newPriority = _editedFormData.get('edit-priority');

    _todoObj.title = newTitle;
    _todoObj.description = newDescription;
    _todoObj.dueDate = newDueDate;

    if (newNotes != "") {
      _todoObj.notes = newNotes;
    }
    
    _todoObj.priority = newPriority;

    console.log(_todoObj);
    _editForm.reset();
    closeEditForm();



  }


  const _editFormPopup = document.querySelector('.edit-todo-popup');
  const _editForm = document.querySelector('.edit-todo-form');  


  const _editTitle = document.querySelector('#edit-title');
  const _editDescription = document.querySelector('#edit-description');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');





  return { openEditForm, closeEditForm, prefillEditForm, 
            saveEditChanges, tagEditFormWithIndex }
})();





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const todo = (() => {

  const openNewTodoForm = () => {
    _TodoFormPopup.setAttribute('style', 'display: flex');
  };

  const closeTodoForm = () => {
    _TodoFormPopup.setAttribute('style', 'display: none');
  };

  const captureFormData = (form) => {
    return new FormData(form)
  };



  const getTodoList = () => {
    return _todoList
  };


  const highlightSelectedButton = (selectedButton) => {
    console.log(selectedButton);

    _menuButtons.forEach(item => {
      if (item.classList.contains('current-menu-selected')) {
        item.classList.remove('current-menu-selected')
      }
    })

    selectedButton.classList.add('current-menu-selected');

  }



  const todoFactory = (data) => {
    let title = data.get('title');
    let description = data.get('description');
    let dueDate = data.get('due-date');
    let priority = data.get('priority');
    let isTodoDone = 'no'


    return { title, description, dueDate, priority, isTodoDone }

  };



  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  };



  const startTodoApp = function(e) {
    e.preventDefault();


    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    // renderTodo.updateSideBar(_newTodo);

    _todoForm.reset();
    closeTodoForm(); 
  };   




  const _todoList = [
    {
      title: "Complete Presentation",
      description: "Must complete and sell pitch to board",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "Notes on meeting prep",
      project: "Work"
    },

    {
      title: "Do groceries",
      description: "Need foood",
      dueDate: "2021-11-18",
      priority: "high",
      isTodoDone: "no",
      notes: 'go to walmart cheap food'
    }
  ];

  const _TodoFormPopup = document.querySelector('.todo-form-popup');
  const _todoForm = document.querySelector('.todo-form')


  const _addTodoButton = document.querySelector('.add-new-todo-button')
  _addTodoButton.addEventListener('click', openNewTodoForm);


  const _closeTodoFormButtons = document.querySelectorAll('.close-form');
  _closeTodoFormButtons.forEach(button => {
    button.addEventListener('click', closeTodoForm);
  });



  const _submitTodoForm = document.querySelector('.submit-form');
  _submitTodoForm.addEventListener('click', startTodoApp);



  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.displayMenuItems(e);
      highlightSelectedButton(button);    
    });

  })



  const _closeEditFormButtons = document.querySelectorAll('.close-edit-form');
  _closeEditFormButtons.forEach(button => { 
    button.addEventListener('click', _edit__WEBPACK_IMPORTED_MODULE_1__.editTodo.closeEditForm);
  })


  const _saveEditChangesButton = document.querySelector('.save-changes');
  _saveEditChangesButton.addEventListener('click', _edit__WEBPACK_IMPORTED_MODULE_1__.editTodo.saveEditChanges)


  

  return { getTodoList, openNewTodoForm, findIndexOf, captureFormData }


})();

document.getElementById('all-todo-button').click();











/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./src/create.js");




const renderTodo = (() => {

  const updateSideBar = (newItem) => {


  
  }


  const updatePage = () => {

    clearDisplay();


  }

  const toggleTaskComplete = (e) => {
    let task = e.target.labels[0];

    if (e.target.checked) {
      console.log("task is complete")

      task.classList.add('task-done')

    } else {
      console.log("task incomplete");
      task.classList.remove('task-done')

    }

  }



  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    };
  }

  const displayMenuItems = (e) => {
    const menuTitle = e.target.textContent;
    
    clearDisplay();

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.displayHeader(menuTitle));


    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.listOfTodos(menuTitle))

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.newTodoButton());

  }
  

  
  const _projectsContainer = document.querySelector('.projects-container');
  const _sideBarAllProjectsList = document.querySelector('.all-projects');


  const _contentDisplay = document.querySelector('.todo-display');


  return { updateSideBar, displayMenuItems, updatePage, toggleTaskComplete }


})();




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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHlEQUFvQjs7O0FBR3BELGdDQUFnQyx1REFBa0I7O0FBRWxELGdDQUFnQyx5REFBb0I7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0EsV0FBVzs7O0FBR1gsQ0FBQzs7Ozs7Ozs7O1VDeEVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi50b2RvLWFwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uc2lkZS1iYXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uYWxsLXRvZG9zLFxcbi5kdWUtdG9kYXksXFxuLmR1ZS10b21vcnJvdyxcXG4uYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tZGlzcGxheSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcblxcbi5kaXNwbGF5LW1lbnUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRhc2stZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXG59XFxuXFxuXFxuLnByaW9yaXR5LW1hcmtlciB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuXFxuXFxuLmFkZC1uZXctdG9kby1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOENCQTtcXG4gIGNvbG9yOiAjMDA4Q0JBO1xcbn1cXG5cXG5cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMTBweDtcXG59XFxuXFxuXFxuLnRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uY2FuY2VsLFxcbi5jYW5jZWwtY2hhbmdlcyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0OmhvdmVyIC5oaWRle1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLmxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgKi9cXG59XFxuXFxuXFxuXFxuXFxuLmVkaXQtdG9kby1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG4udG9kby1kZXRhaWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcbi5jdXJyZW50LW1lbnUtc2VsZWN0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyAqL1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2hvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7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QUVyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLnRvZG8tYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi5zaWRlLWJhciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5hbGwtdG9kb3MsXFxuLmR1ZS10b2RheSxcXG4uZHVlLXRvbW9ycm93LFxcbi5hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkOyAqL1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuXFxuLmRpc3BsYXktbWVudS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFzay1kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbn1cXG5cXG5cXG4ucHJpb3JpdHktbWFya2VyIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5cXG5cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctdG9kby1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4Q0JBO1xcbiAgY29sb3I6ICMwMDhDQkE7XFxufVxcblxcblxcblxcbi50b2RvLWZvcm0tcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZm9ybS1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jYW5jZWwsXFxuLmNhbmNlbC1jaGFuZ2VzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3Q6aG92ZXIgLmhpZGV7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3OyAqL1xcbn1cXG5cXG5cXG5cXG5cXG4uZWRpdC10b2RvLXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuXFxuLmVkaXQtdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcblxcbi50b2RvLWRldGFpbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcblxcbi5kZXRhaWwtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUge1xcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGVkaXRUb2RvIH0gZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5cblxuY29uc3QgY3JlYXRlID0gKCgpID0+IHtcblxuICBjb25zdCBuZXdUb2RvQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctdG9kby1idXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvLm9wZW5OZXdUb2RvRm9ybSlcblxuICAgIHJldHVybiB0b2RvQnV0dG9uXG4gIH1cblxuXG4gIGNvbnN0IGRpc3BsYXlIZWFkZXIgPSAodGl0bGUpID0+IHtcbiAgICBcbiAgICBjb25zdCBfaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgX2hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW1lbnUtaGVhZGVyJylcbiAgICBfY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChfaGVhZGVyQ29udGFpbmVyKTtcblxuXG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBfaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cblxuICAgIHJldHVybiBfaGVhZGVyQ29udGFpbmVyXG5cbiAgfVxuICBcblxuXG4gIGNvbnN0IGxpc3RPZlRvZG9zID0gKG1lbnVDbGlja2VkKSA9PiB7XG4gICBcblxuICAgIGNvbnN0IGFsbFRvRG9zTGlzdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICBjb25zdCB1bm9yZGVyZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bm9yZGVyZExpc3QpO1xuXG4gICAgICBsZXQgdGFza0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgICBcblxuICAgICAgdGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGxldCB0b2RvSW5kZXggPSB0b2RvLmZpbmRJbmRleE9mKHRhc2ssIHRhc2tBcnJheSlcblxuICAgICAgICBjb25zdCBsaXN0ZWRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdGVkVGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cblxuICAgICAgICBjb25zdCBzaG93bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hvd25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3duLWNvbnRlbnQnKTtcbiAgICAgICAgbGlzdGVkVGFzay5hcHBlbmRDaGlsZChzaG93bkNvbnRlbnQpO1xuXG5cblxuICAgICAgICBsZXQgaW5wdXRDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0Q2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGlucHV0Q2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIHJlbmRlclRvZG8udG9nZ2xlVGFza0NvbXBsZXRlKGUpO1xuICAgICAgICAgIC8vIGVkaXRUb2RvLnVwZGF0ZU9iamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dENoZWNrQm94LmRhdGFzZXRbJ3Rhc2tJbmRleCddID0gdG9kb0luZGV4OyBcblxuICAgICAgICBpbnB1dENoZWNrQm94Lm5hbWUgPSBgdGFzayR7dG9kb0luZGV4fWA7XG4gICAgXG4gICAgICAgIGlucHV0Q2hlY2tCb3guaWQgPSBgdGFzayR7dG9kb0luZGV4fWA7ICBcbiAgICAgICAgaW5wdXRDaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICAvLyBpbnB1dENoZWNrQm94LmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dENoZWNrQm94KTtcblxuXG4gICAgICAgIGxldCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgaW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHt0b2RvSW5kZXh9YCk7XG5cbiAgICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG5cblxuICAgICAgICBjb25zdCBwcmlvcml0eU1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tYXJrZXInKTtcblxuICAgICAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdvcmFuZ2UnXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdjb3JuZmxvd2VyYmx1ZSdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TWFya2VyKVxuXG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgZWRpdFRvZG8ub3BlbkVkaXRGb3JtKClcbiAgICAgICAgICBlZGl0VG9kby5wcmVmaWxsRWRpdEZvcm0oZSk7XG4gICAgICAgICAgZWRpdFRvZG8udGFnRWRpdEZvcm1XaXRoSW5kZXgoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ2V4cGFuZCcpO1xuICAgICAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kJztcbiAgICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICBsZXQgaGlkZGVuQ29udGVudCA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgaWYgKGhpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXG5cblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKCdwcm9qZWN0JyBpbiB0YXNrKSB7XG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Rhc2sucHJvamVjdH1gO1xuICAgICAgICB9XG4gICAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpXG5cbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBCeTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuXG5cblxuXG5cblxuICAgXG5cblxuICAgICAgICBjb25zdCBjb2xsYXBzZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29sbGFwc2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlsJyk7XG4gICAgICAgIGxpc3RlZFRhc2suYXBwZW5kQ2hpbGQoY29sbGFwc2VkQ29udGFpbmVyKTtcblxuXG5cbiAgICAgICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoJ25vdGVzJyBpbiB0YXNrKSB7XG4gICAgICAgICAgbm90ZXNDb250YWluZXIudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbGxhcHNlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0NvbnRhaW5lcik7XG5cblxuXG5cblxuXG4gICAgICAgIHVub3JkZXJkTGlzdC5hcHBlbmRDaGlsZChsaXN0ZWRUYXNrKTtcblxuXG4gICAgICBcbiAgICAgICAgXG4gICAgICB9KVxuXG4gICAgICBcbiAgICAgIHJldHVybiBsaXN0Q29udGFpbmVyXG5cblxuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSSd2ZSBnb3QgdGhlIGplY3RzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZGF5TGlzdCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRG8gdGhpcyB0b2RheVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b21vcnJvd0xpc3QgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIk9uZSBtb3JlIGRheSB3aXRoIHlvdXIgbGF6eSBiZWhpbmRcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpc3RSZXR1cm5lZCA9IHtcbiAgICAgICdBbGwgVG9Eb3MnOiBhbGxUb0Rvc0xpc3QsXG4gICAgICAnVG9kYXknOiB0b2RheUxpc3QsXG4gICAgICAnVG9tb3Jyb3cnOiB0b21vcnJvd0xpc3QsXG4gICAgICAnUHJvamVjdHMnOiBwcm9qZWN0c0xpc3RcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0UmV0dXJuZWRbbWVudUNsaWNrZWRdKCk7XG4gIH1cblxuXG5cbiAgY29uc3QgX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cblxuXG4gIHJldHVybiB7IGRpc3BsYXlIZWFkZXIsIG5ld1RvZG9CdXR0b24sIGxpc3RPZlRvZG9zIH1cbn0pKCk7XG5cblxuZXhwb3J0IHsgY3JlYXRlIH0iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuXG5jb25zdCBlZGl0VG9kbyA9ICgoKSA9PiB7XG5cbiAgY29uc3Qgb3BlbkVkaXRGb3JtPSAoKSA9PiB7XG4gICAgX2VkaXRGb3JtUG9wdXAuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4Jyk7XG4gIH1cblxuXG5cbiAgY29uc3QgY2xvc2VFZGl0Rm9ybSA9ICgpID0+IHtcbiAgICBfZWRpdEZvcm1Qb3B1cC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuICB9XG5cblxuICBjb25zdCBwcmVmaWxsRWRpdEZvcm0gPSAoZSkgPT4ge1xuXG5cbiAgICBsZXQgX3RvZG9JbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5kYXRhc2V0LnRhc2tJbmRleFxuICAgIGxldCBfYWxsVG9kb0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgbGV0IF90b2RvT2JqZWN0ID0gX2FsbFRvZG9BcnJheVtfdG9kb0luZGV4XTtcblxuICAgIF9lZGl0VGl0bGUudmFsdWUgPSBfdG9kb09iamVjdC50aXRsZTtcbiAgICBfZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gX3RvZG9PYmplY3QuZGVzY3JpcHRpb247XG4gICAgXG4gICAgaWYgKF90b2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdub3RlcycpKSB7XG4gICAgICBfZWRpdE5vdGVzLnZhbHVlID0gX3RvZG9PYmplY3Qubm90ZXM7XG4gICAgfVxuXG4gICAgX2VkaXREdWVEYXRlLnZhbHVlID0gX3RvZG9PYmplY3QuZHVlRGF0ZVxuICAgIF9lZGl0UHJpb3JpdHkudmFsdWUgPSBfdG9kb09iamVjdC5wcmlvcml0eVxuXG5cbiAgfVxuXG5cbiAgY29uc3QgdGFnRWRpdEZvcm1XaXRoSW5kZXggPSAoZSkgPT4ge1xuICAgIGxldCBfc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNoYW5nZXMnKTtcbiAgICBsZXQgX2luZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmRhdGFzZXQudGFza0luZGV4XG5cbiAgICBfc2F2ZUJ1dHRvbi5kYXRhc2V0LnRhc2tJbmRleCA9IF9pbmRleDsgICAgXG4gIH1cblxuXG5cbiAgY29uc3Qgc2F2ZUVkaXRDaGFuZ2VzID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgX2VkaXRlZEZvcm1EYXRhID0gdG9kby5jYXB0dXJlRm9ybURhdGEoX2VkaXRGb3JtKTtcblxuICAgIGxldCBfbGlzdE9mVG9kb3MgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG5cbiAgICBsZXQgX29iakluZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrSW5kZXg7XG5cbiAgICBsZXQgX3RvZG9PYmogPSBfbGlzdE9mVG9kb3NbX29iakluZGV4XTtcblxuICAgIGxldCBuZXdUaXRsZSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtdGl0bGUnKTtcbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IG5ld05vdGVzID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1ub3RlcycpO1xuICAgIGxldCBuZXdEdWVEYXRlID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1kdWUtZGF0ZScpO1xuICAgIGxldCBuZXdQcmlvcml0eSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtcHJpb3JpdHknKTtcblxuICAgIF90b2RvT2JqLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgX3RvZG9PYmouZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBfdG9kb09iai5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblxuICAgIGlmIChuZXdOb3RlcyAhPSBcIlwiKSB7XG4gICAgICBfdG9kb09iai5ub3RlcyA9IG5ld05vdGVzO1xuICAgIH1cbiAgICBcbiAgICBfdG9kb09iai5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgY29uc29sZS5sb2coX3RvZG9PYmopO1xuICAgIF9lZGl0Rm9ybS5yZXNldCgpO1xuICAgIGNsb3NlRWRpdEZvcm0oKTtcblxuXG5cbiAgfVxuXG5cbiAgY29uc3QgX2VkaXRGb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXBvcHVwJyk7XG4gIGNvbnN0IF9lZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tZm9ybScpOyAgXG5cblxuICBjb25zdCBfZWRpdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKTtcbiAgY29uc3QgX2VkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IF9lZGl0Tm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlcycpO1xuICBjb25zdCBfZWRpdER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kdWUtZGF0ZScpO1xuICBjb25zdCBfZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKTtcblxuXG5cblxuXG4gIHJldHVybiB7IG9wZW5FZGl0Rm9ybSwgY2xvc2VFZGl0Rm9ybSwgcHJlZmlsbEVkaXRGb3JtLCBcbiAgICAgICAgICAgIHNhdmVFZGl0Q2hhbmdlcywgdGFnRWRpdEZvcm1XaXRoSW5kZXggfVxufSkoKTtcblxuXG5cbmV4cG9ydCB7IGVkaXRUb2RvIH0iLCJpbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgeyBlZGl0VG9kbyB9IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG5cbiAgY29uc3Qgb3Blbk5ld1RvZG9Gb3JtID0gKCkgPT4ge1xuICAgIF9Ub2RvRm9ybVBvcHVwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleCcpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgX1RvZG9Gb3JtUG9wdXAuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gIH07XG5cbiAgY29uc3QgY2FwdHVyZUZvcm1EYXRhID0gKGZvcm0pID0+IHtcbiAgICByZXR1cm4gbmV3IEZvcm1EYXRhKGZvcm0pXG4gIH07XG5cblxuXG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBfdG9kb0xpc3RcbiAgfTtcblxuXG4gIGNvbnN0IGhpZ2hsaWdodFNlbGVjdGVkQnV0dG9uID0gKHNlbGVjdGVkQnV0dG9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRCdXR0b24pO1xuXG4gICAgX21lbnVCdXR0b25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1tZW51LXNlbGVjdGVkJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc2VsZWN0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1tZW51LXNlbGVjdGVkJyk7XG5cbiAgfVxuXG5cblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gZGF0YS5nZXQoJ3RpdGxlJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGR1ZURhdGUgPSBkYXRhLmdldCgnZHVlLWRhdGUnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkYXRhLmdldCgncHJpb3JpdHknKTtcbiAgICBsZXQgaXNUb2RvRG9uZSA9ICdubydcblxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNUb2RvRG9uZSB9XG5cbiAgfTtcblxuXG5cbiAgY29uc3QgZmluZEluZGV4T2YgPSAoaXRlbSwgbGlzdCkgPT4ge1xuICAgIHJldHVybiBsaXN0LmluZGV4T2YoaXRlbSk7XG4gIH07XG5cblxuXG4gIGNvbnN0IHN0YXJ0VG9kb0FwcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIGxldCBfZm9ybURhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3RvZG9Gb3JtKTtcblxuICAgIGxldCBfbmV3VG9kbyA9IHRvZG9GYWN0b3J5KF9mb3JtRGF0YSk7XG5cbiAgICBfdG9kb0xpc3QucHVzaChfbmV3VG9kbyk7XG5cblxuICAgIC8vIHJlbmRlclRvZG8udXBkYXRlU2lkZUJhcihfbmV3VG9kbyk7XG5cbiAgICBfdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICBjbG9zZVRvZG9Gb3JtKCk7IFxuICB9OyAgIFxuXG5cblxuXG4gIGNvbnN0IF90b2RvTGlzdCA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb21wbGV0ZSBQcmVzZW50YXRpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk11c3QgY29tcGxldGUgYW5kIHNlbGwgcGl0Y2ggdG8gYm9hcmRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMi0xMFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBpc1RvZG9Eb25lOiBcIm5vXCIsXG4gICAgICBub3RlczogXCJOb3RlcyBvbiBtZWV0aW5nIHByZXBcIixcbiAgICAgIHByb2plY3Q6IFwiV29ya1wiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkRvIGdyb2Nlcmllc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiTmVlZCBmb29vZFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTExLTE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBpc1RvZG9Eb25lOiBcIm5vXCIsXG4gICAgICBub3RlczogJ2dvIHRvIHdhbG1hcnQgY2hlYXAgZm9vZCdcbiAgICB9XG4gIF07XG5cbiAgY29uc3QgX1RvZG9Gb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLXBvcHVwJyk7XG4gIGNvbnN0IF90b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKVxuXG5cbiAgY29uc3QgX2FkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy10b2RvLWJ1dHRvbicpXG4gIF9hZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld1RvZG9Gb3JtKTtcblxuXG4gIGNvbnN0IF9jbG9zZVRvZG9Gb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1mb3JtJyk7XG4gIF9jbG9zZVRvZG9Gb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUb2RvRm9ybSk7XG4gIH0pO1xuXG5cblxuICBjb25zdCBfc3VibWl0VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWZvcm0nKTtcbiAgX3N1Ym1pdFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRUb2RvQXBwKTtcblxuXG5cbiAgY29uc3QgX21lbnVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtYnV0dG9uJyk7XG4gIF9tZW51QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgcmVuZGVyVG9kby5kaXNwbGF5TWVudUl0ZW1zKGUpO1xuICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRCdXR0b24oYnV0dG9uKTsgICAgXG4gICAgfSk7XG5cbiAgfSlcblxuXG5cbiAgY29uc3QgX2Nsb3NlRWRpdEZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWVkaXQtZm9ybScpO1xuICBfY2xvc2VFZGl0Rm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4geyBcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kby5jbG9zZUVkaXRGb3JtKTtcbiAgfSlcblxuXG4gIGNvbnN0IF9zYXZlRWRpdENoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jaGFuZ2VzJyk7XG4gIF9zYXZlRWRpdENoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kby5zYXZlRWRpdENoYW5nZXMpXG5cblxuICBcblxuICByZXR1cm4geyBnZXRUb2RvTGlzdCwgb3Blbk5ld1RvZG9Gb3JtLCBmaW5kSW5kZXhPZiwgY2FwdHVyZUZvcm1EYXRhIH1cblxuXG59KSgpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRvZG8tYnV0dG9uJykuY2xpY2soKTtcblxuZXhwb3J0IHsgdG9kbyB9XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5cblxuY29uc3QgcmVuZGVyVG9kbyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgdXBkYXRlU2lkZUJhciA9IChuZXdJdGVtKSA9PiB7XG5cblxuICBcbiAgfVxuXG5cbiAgY29uc3QgdXBkYXRlUGFnZSA9ICgpID0+IHtcblxuICAgIGNsZWFyRGlzcGxheSgpO1xuXG5cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVRhc2tDb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBlLnRhcmdldC5sYWJlbHNbMF07XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGlzIGNvbXBsZXRlXCIpXG5cbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJylcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaW5jb21wbGV0ZVwiKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJylcblxuICAgIH1cblxuICB9XG5cblxuXG4gIGNvbnN0IGNsZWFyRGlzcGxheSA9ICgpID0+IHtcbiBcbiAgICB3aGlsZSAoX2NvbnRlbnREaXNwbGF5Lmhhc0NoaWxkTm9kZXMoKSkge1xuIFxuICAgICAgX2NvbnRlbnREaXNwbGF5LnJlbW92ZUNoaWxkKF9jb250ZW50RGlzcGxheS5maXJzdENoaWxkKVxuICAgIH07XG4gIH1cblxuICBjb25zdCBkaXNwbGF5TWVudUl0ZW1zID0gKGUpID0+IHtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBcbiAgICBjbGVhckRpc3BsYXkoKTtcblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGUuZGlzcGxheUhlYWRlcihtZW51VGl0bGUpKTtcblxuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZS5saXN0T2ZUb2RvcyhtZW51VGl0bGUpKVxuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZS5uZXdUb2RvQnV0dG9uKCkpO1xuXG4gIH1cbiAgXG5cbiAgXG4gIGNvbnN0IF9wcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgY29uc3QgX3NpZGVCYXJBbGxQcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG5cblxuICBjb25zdCBfY29udGVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cblxuICByZXR1cm4geyB1cGRhdGVTaWRlQmFyLCBkaXNwbGF5TWVudUl0ZW1zLCB1cGRhdGVQYWdlLCB0b2dnbGVUYXNrQ29tcGxldGUgfVxuXG5cbn0pKCk7XG5cblxuZXhwb3J0IHsgcmVuZGVyVG9kbyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9