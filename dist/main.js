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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup,\n.edit-todo-popup,\n.edit-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\n\n/* .edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n} */\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n\n\n\n.edit-todo-form,\n.new-project-form,\n.edit-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date-section {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n}\n\n\n.edit-project-button {\n  margin-left: 50px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;;AAGA;;;;EAIE,aAAa;;AAEf;;;AAGA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,6BAA6B;;AAE/B;;AAEA;EACE,gCAAgC;AAClC;;;;;;;;;;AAUA;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB;sCACoC;EACpC,yBAAyB;AAC3B;;;AAGA;EACE,kBAAkB;AACpB;;;AAGA;EACE,6BAA6B;;AAE/B;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;;;;AAKA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;;;;AAIA;;;;EAIE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;AACZ;;;AAGA;;;;;;;;;;GAUG;;AAEH;EACE,sBAAsB;AACxB;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,QAAQ;EACR,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;;AAEpB;;AAEA;;EAEE,iBAAiB;AACnB;;;;;;;AAOA;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;;AAGA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;;AAGA;EACE,kBAAkB;;EAElB,4BAA4B;AAC9B;;;;;;;;AAQA;;;EAGE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;;AAGA;EACE,uBAAuB;EACvB,aAAa;;AAEf;;;AAGA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;;AAGA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB;;;;AAIA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup,\n.edit-todo-popup,\n.edit-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\n\n/* .edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n} */\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n\n\n\n.edit-todo-form,\n.new-project-form,\n.edit-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date-section {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n}\n\n\n.edit-project-button {\n  margin-left: 50px;\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "createElements": () => (/* binding */ createElements)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");





const createElements = (() => {


  const createDisplayHeader = (highlightedButton) => {

    let title = highlightedButton.textContent;
    
    const _headerContainer = document.createElement('header');
    _headerContainer.classList.add('display-menu-header')
    _contentContainer.appendChild(_headerContainer);


    const pageTitle = document.createElement('h1');
    pageTitle.textContent = title;
    _headerContainer.appendChild(pageTitle);


    return _headerContainer

  };



  const createAddButton = (currentMenu) => {

    let currentMenuTitle = currentMenu.textContent;

    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.textContent = '+';

    if (currentMenuTitle == 'Projects') {
      todoButton.classList.add('add-new-project-button');
      todoButton.addEventListener('click', function() {
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.projectFormPopup)
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addTodosToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.projFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList())
      })
      
    } else {
      todoButton.classList.add('add-new-todo-button');
      todoButton.addEventListener('click', function() {
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.todoFormPopup)
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addProjectsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.todoFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList())

      })

    }

    return todoButton
  };


  const listFactory = (task, index) => {
    const list = document.createElement('li');
    list.classList.add('list');
  
  
  
    let _visibleContent = document.createElement('div');
    _visibleContent.classList.add('shown-content');
    list.appendChild(_visibleContent);
  
  
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (e) => {
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.toggleTaskComplete(e);
      // todo.updateObject()
    });
    checkBox.classList.add('checkbox');
  
    _visibleContent.appendChild(checkBox);
  
  
  
    let label = document.createElement('label');
    label.classList.add('task-label');
    label.textContent = task.title;
    _visibleContent.appendChild(label);
  
  
  
    let _priorityMarker = document.createElement('div');
    _priorityMarker.classList.add('priority-marker');
  
  
    switch (task.priority) {
      case 'high':
        _priorityMarker.style.display = 'inline-block'
        _priorityMarker.style.backgroundColor = HIGH_PRIORITY;
        break;
    
  
  
      case 'medium':
        _priorityMarker.style.display = 'inline-block'
        _priorityMarker.style.backgroundColor = MEDIUM_PRIORITY;
        break;
  
      
  
  
      case 'low':
        _priorityMarker.style.display = 'inline-block'
        _priorityMarker.style.backgroundColor = LOW_PRIORITY;
        break;
  
  
  
      default:
        _priorityMarker.style.display = 'none'
        break;
    };
  
    _visibleContent.appendChild(_priorityMarker);
  
  
  
    let editButton = document.createElement('button');
    editButton.classList.add('hide', 'edit-task-button')
    editButton.textContent = 'edit';
    editButton.dataset['overallTaskIndex'] = index;
    editButton.addEventListener('click', (e) => {
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormPopup);
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addProjectsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList());
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.prefillEditForm(e);
      ___WEBPACK_IMPORTED_MODULE_0__.todo.tagEditSubmitButtonWithIndex(e);

    })
  
  
    _visibleContent.appendChild(editButton);
  
  
  
  
    let _expandButton = document.createElement('button');
    _expandButton.classList.add('hide', 'expand-button')
    _expandButton.textContent = 'expand'
  
    _expandButton.addEventListener('click', function() {

      console.log(this);
      this.classList.toggle('active');
      this.classList.toggle('hide');
      this.previousSibling.classList.toggle('hide');
      this.previousSibling.classList.toggle('active');
      this.textContent == 'expand'? this.textContent = 'collapse' : this.textContent = 'expand';
  
  
      let _hiddenContent = this.parentElement.nextElementSibling;
      if (_hiddenContent.style.display === 'block') {
        _hiddenContent.style.display = 'none';
      } else {
        _hiddenContent.style.display = 'block';
      }
    });
  
    _visibleContent.appendChild(_expandButton);
  
  
  
  
    let _projContainer = document.createElement('p');
    _projContainer.classList.add('project-section');
    if ('project' in task) {
      _projContainer.textContent = `Project: ${task.project}`;
    };
  
    _visibleContent.appendChild(_projContainer);
  
  
  
    let _dueDateContainer = document.createElement('p');
    _dueDateContainer.classList.add('due-date-section');
    if ('dueDate' in task) {
      _dueDateContainer.textContent = `Due: ${task.dueDate}`;
    };
  
    _visibleContent.appendChild(_dueDateContainer);
  
  
  
  
    let _collapsedContainer = document.createElement('div');
    _collapsedContainer.classList.add('hidden-container');
  
    list.appendChild(_collapsedContainer);
  
  
  
    let _notesContainer = document.createElement('div');
    _notesContainer.classList.add('notes-container');
    'notes' in task ? _notesContainer.textContent = task.notes : 
              _notesContainer.textContent = 'No notes for this task. Edit task to add notes';
    
    _collapsedContainer.appendChild(_notesContainer);
    
  
  
  
    return {list, checkBox, label, editButton}
  }
  




  const createAllTodosList = () => {
    const listContainer = document.createElement('div');

    const unorderdList = document.createElement('ul');
    listContainer.appendChild(unorderdList);

    let allTasksArray = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    allTasksArray.forEach(_task => {
      let _overallTodoIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, allTasksArray);

      let listElement = listFactory(_task, _overallTodoIndex);

      unorderdList.appendChild(listElement.list);


      listElement.checkBox.dataset['overallIndex'] = _overallTodoIndex;
      listElement.checkBox.name = `task${_overallTodoIndex}`;
      listElement.checkBox.id = `task${_overallTodoIndex}`;



      listElement.label.setAttribute('for', `task${_overallTodoIndex}`);



    });

    return listContainer


  };


  const createProjectsList = () => {

    const _listOfTasks = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();
    const _listOfProjects = ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList();


    if (_listOfProjects.length == 0) {
      const _noProjectMessage = document.createElement('p');
      _noProjectMessage.textContent = 'No projects yet created, click button to create a new project'

      return _noProjectMessage;
    };





    const _pageDisplay = document.createElement('div');

    _listOfProjects.forEach(_projectName => {
      const _projContainer = document.createElement('div');
      _projContainer.classList.add('project-container');
      _pageDisplay.appendChild(_projContainer);

      const _projHeader = document.createElement('div');
      _projHeader.classList.add('project-title')
      _projContainer.appendChild(_projHeader)


      const _projNameSection = document.createElement('h2');
      _projNameSection.textContent = _projectName;
      _projHeader.appendChild(_projNameSection);


      const _editProjButton = document.createElement('button');
      _editProjButton.textContent = 'Edit Project';
      _editProjButton.classList.add('edit-project-button')
      _editProjButton.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm.bind(_editProjButton, ___WEBPACK_IMPORTED_MODULE_0__.todo.editProjFormPopup))

      _projHeader.appendChild(_editProjButton);




      const _uL = document.createElement('ul');
      _projContainer.appendChild(_uL)


      let _tasksBelongingToProj = _listOfTasks.filter(task => task.project == _projectName)

      _tasksBelongingToProj.forEach(_task => {
        let _overallTaskIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList())


        let _listTag = listFactory(_task, _overallTaskIndex)

        _uL.appendChild(_listTag.list);

        let _taskIndexLocal = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, _tasksBelongingToProj);
        let _projIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_projectName, _listOfProjects); 
        
        _listTag.checkBox.dataset['projectIndex'] = _projIndex;
        _listTag.checkBox.dataset['localTaskIndex'] = _taskIndexLocal; 
        _listTag.checkBox.name = `obj${_projIndex}task${_taskIndexLocal}`;    
        _listTag.checkBox.id = `obj${_projIndex}task${_taskIndexLocal}`;  
  
  

        _listTag.label.setAttribute('for', `obj${_projIndex}task${_taskIndexLocal}`);





      });
      

    })




    return _pageDisplay





  };



  const createPageList = (buttonSelected) => {
    let menuSelected = buttonSelected.textContent

    const returnedList = {
      'All ToDos': createAllTodosList,
      // 'Today': todayList,
      // 'Tomorrow': tomorrowList,
      'Projects': createProjectsList,

    };


    return returnedList[menuSelected]();
    
  }

  

  const _contentContainer = document.querySelector('.todo-display');


  const HIGH_PRIORITY = 'red';
  const MEDIUM_PRIORITY = 'orange';
  const LOW_PRIORITY = 'cornflowerblue';



  



  return { createDisplayHeader, createAddButton, createPageList }
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const todo = (() => {

  const getTodoList = () => {
    return _todoList
  };


  const getProjectList = () => {
    return _projectList;
  };


  const captureFormData = (form) => {
    return new FormData(form)
  };


  const findIndexOf = (item, list) => {
    return list.indexOf(item);
  };


  const tagEditSubmitButtonWithIndex = (e) => {
    let _saveButton = document.querySelector('.save-changes');
    let _index = e.target.dataset.overallTaskIndex

    _saveButton.dataset.overallTaskIndex = _index;    
  };



  const saveEditChanges = (e) => {
    e.preventDefault();

    let _editedFormData = captureFormData(_editForm);

    let _listOfTodos = todo.getTodoList();

    let _objIndex = e.target.dataset.overallTaskIndex;
    console.log(e);

    let _todoObj = _listOfTodos[_objIndex];

    let newTitle = _editedFormData.get('edit-title');
    // let newDescription = _editedFormData.get('edit-description');
    let newNotes = _editedFormData.get('edit-notes');
    let newDueDate = _editedFormData.get('edit-due-date');
    let newPriority = _editedFormData.get('edit-priority');
    let newProject = _editedFormData.get('edit-project');

    _todoObj.title = newTitle;


    newDueDate == ''? delete _todoObj.dueDate: _todoObj.dueDate = newDueDate;

    newNotes == ''? delete _todoObj.notes: _todoObj.notes = newNotes;

    newPriority == ''? delete _todoObj.priority: _todoObj.priority = newPriority;

    newProject == ''? delete _todoObj.project: _todoObj.project = newProject;

    
    _editForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(editFormPopup);

    let _currentMenu = findCurrentMenuSelected();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(_currentMenu);

  };




  const saveProjectChanges = () => {

  }




  
  const todoFactory = (data) => {
    let title = data.get('title');
    // let description = data.get('description');
    let dueDate = data.get('due-date');
    let priority = data.get('priority');
    let isTodoDone = 'no';
    let project = data.get('part-of-project');


    return { title, dueDate, priority, project, isTodoDone }

  };


  const findCurrentMenuSelected = () => {
    return [..._menuButtons].filter(button => button.classList.contains('current-menu-selected'))[0];
  };



  const findCurrentFormInUse = () => {

    let allForms = [...document.querySelectorAll('.form-container')];
    
    let currentForm = allForms.filter(form => form.classList.contains('current-form-inuse'))[0]
 
    return currentForm;
  };



  const highlightSelectedButton = (event) => {

    const selectedButton = event.target;

    _menuButtons.forEach(item => {
      if (item.classList.contains('current-menu-selected')) {
        item.classList.remove('current-menu-selected')
      }
    })

    selectedButton.classList.add('current-menu-selected');

  };

  const addProjectToTaskObj = (projName, projTasks) => {

    projTasks.forEach(taskName => {
      _todoList.forEach(todo => {
        if (taskName == todo.title) {
          todo.project = projName

          console.log(todo);
        }
      })
    })


    // _todoList.forEach(todo => {
    //   projTasks.forEach(taskName => {
    //     if (todo.title == taskName) {
    //       console.log(todo);
    //     }
    //   })
    // })
  }


  const createProject = (e) => {
    e.preventDefault();

    let _projectData = captureFormData(_projectForm);

    let _projectName = _projectData.get('project-name');

    if (_projectList.includes(_projectName)) {
      alert('project already exists');
      return;
    };

    _projectList.push(_projectName);


    let _taskAddedToProj = [...projFormSelectTag.selectedOptions].map(option => option.value)

    addProjectToTaskObj(_projectName, _taskAddedToProj)



    let currentMenu = findCurrentMenuSelected();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(currentMenu)

    _projectForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(projectFormPopup); 
  }


  const createTodo = function(e) {
    e.preventDefault();


    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    _todoForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(todoFormPopup);
    
    
    let menu = findCurrentMenuSelected();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(menu)

    // renderTodo.dispayMenuItems(pass in current menu selected)

  };   




  const _todoList = [
    {
      title: "Complete Presentation",
      // description: "Must complete and sell pitch to board",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "Notes on meeting prep",
      project: "Work"
    },

    {
      title: "Do groceries",
      // description: "Need foood",
      dueDate: "2021-11-18",
      priority: "high",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Home"
    },

    {
      title: "Fix Car Issues",
      // description: "Need fast car",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "vroom vroom",
      project: "Home"
    }
  ];




  const _projectList = ['Home', 'Work', 'Car'];

  // const _projectList = [];




  const _todoForm = document.querySelector('.todo-form');
  const _projectForm = document.querySelector('.new-project-form');
  const _editForm = document.querySelector('.edit-todo-form');  



  const projFormSelectTag = document.querySelector('.project-form-select-tag');
  const todoFormSelectTag = document.querySelector('.todo-form-select');
  const editFormSelectTag = document.querySelector('#edit-project');
  const editProjSelectTag = document.querySelector('#edit-project-todos');
  const todoFormPopup = document.querySelector('.todo-form-popup');
  const editFormPopup = document.querySelector('.edit-todo-popup');
  const projectFormPopup = document.querySelector('.new-project-popup');
  const editProjFormPopup = document.querySelector('.edit-project-popup')



  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      highlightSelectedButton(e);    
      let currentMenu = findCurrentMenuSelected();
      _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(currentMenu);
    });

  });


  const _submitTodoForm = document.querySelector('.submit-form');
  _submitTodoForm.addEventListener('click', createTodo);



  const _saveEditChangesButton = document.querySelector('.save-changes');
  _saveEditChangesButton.addEventListener('click', saveEditChanges);


  const _submitProjectForm = document.querySelector('.create-project');
  _submitProjectForm.addEventListener('click', createProject);



  const _closeFormButtons = document.querySelectorAll('.close-form');
  _closeFormButtons.forEach(button => {
    button.addEventListener('click', function() {
      _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse())

    })
  });



  const _saveProjectChangesButton = document.querySelector('.save-project-changes');
  _saveProjectChangesButton.addEventListener('click', saveProjectChanges)





  

  return { todoFormPopup, editFormPopup, projectFormPopup, editProjFormPopup, projFormSelectTag,
    todoFormSelectTag, editFormSelectTag, editProjSelectTag, getTodoList, getProjectList, findIndexOf, 
    tagEditSubmitButtonWithIndex }


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


  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');
    form.classList.add('current-form-inuse');

  };



  const closeForm = (formChosen) => {
    formChosen.classList.remove('current-form-inuse');
    formChosen.setAttribute('style', 'display: none');

  };




  const prefillEditForm = (e) => { 
    console.log(e);

    let _todoIndex = e.target.dataset.overallTaskIndex

    let _allTodoArray = _index__WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    let _currentTodoObject = _allTodoArray[_todoIndex];


    _editTitle.value = _currentTodoObject.title;
    // _editDescription.value = _currentTodoObject.description;
    
    if (_currentTodoObject.hasOwnProperty('notes')) {
      _editNotes.value = _currentTodoObject.notes;
    };

    if (_currentTodoObject.hasOwnProperty('dueDate')) {
      _editDueDate.value = _currentTodoObject.dueDate;
    }


    if (_currentTodoObject.hasOwnProperty('priority')) {
      _editPriority.value = _currentTodoObject.priority;
    }


    if (_currentTodoObject.hasOwnProperty('project')) {
      _editProject.value = _currentTodoObject.project;
    }


    // _editDueDate.value = _currentTodoObject.dueDate
    // _editPriority.value = _currentTodoObject.priority


  };



  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };



  const clearOldOptions = (tag) => {
    let options = [...tag.options];
  
    options.forEach(option => {
      if (option.textContent != "") {
        option.remove()
      }
    })

  };




  const addTodosToFormOptions = (selectTag, allTodosArray) => {
    clearOldOptions(selectTag);

    allTodosArray.forEach(todo => {
      let newOption = document.createElement('option');
      newOption.textContent = todo.title
      selectTag.add(newOption)      
    });
    


  };




  const addProjectsToFormOptions= (selectTag, allProjectsArray) => {
    clearOldOptions(selectTag);

    allProjectsArray.forEach(project => {
      let option = document.createElement('option');
      option.textContent = project
      selectTag.add(option)      
    });
  };





  const toggleTaskComplete = (e) => {
    let task = e.target.labels[0];

    if (e.target.checked) {
      console.log("task is complete")

      task.classList.add('task-done')

    } else {
      console.log("task incomplete");
      task.classList.remove('task-done')

    }

  };





  const updatePage = (menuButtonSelected) => {

    clearDisplay();

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.createElements.createDisplayHeader(menuButtonSelected))

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.createElements.createPageList(menuButtonSelected))


    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.createElements.createAddButton(menuButtonSelected));





  
  }



  const _contentDisplay = document.querySelector('.todo-display');


  const _editForm = document.querySelector('.edit-todo-form');  


  const _editTitle = document.querySelector('#edit-title');
  // const _editDescription = document.querySelector('#edit-description');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');
  const _editProject = document.querySelector('#edit-project')



 
  return { openForm, closeForm, updatePage, addTodosToFormOptions,
          addProjectsToFormOptions, toggleTaskComplete, prefillEditForm }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUEsZ0NBQWdDLHVFQUFrQzs7QUFFbEUsZ0NBQWdDLGtFQUE2Qjs7O0FBRzdELGdDQUFnQyxtRUFBOEI7Ozs7OztBQU05RDtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLFdBQVc7QUFDWDs7O0FBR0EsQ0FBQzs7Ozs7Ozs7O1VDbExEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi50b2RvLWFwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uc2lkZS1iYXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uYWxsLXRvZG9zLFxcbi5kdWUtdG9kYXksXFxuLmR1ZS10b21vcnJvdyxcXG4uYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tZGlzcGxheSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcblxcbi5kaXNwbGF5LW1lbnUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRhc2stZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXG59XFxuXFxuXFxuLnByaW9yaXR5LW1hcmtlciB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuXFxuXFxuLmFkZC1uZXctdG9kby1idXR0b24sXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uOmhvdmVyLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOENCQTtcXG4gIGNvbG9yOiAjMDA4Q0JBO1xcbn1cXG5cXG5cXG5cXG4udG9kby1mb3JtLXBvcHVwLFxcbi5uZXctcHJvamVjdC1wb3B1cCxcXG4uZWRpdC10b2RvLXBvcHVwLFxcbi5lZGl0LXByb2plY3QtcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4vKiAuZWRpdC10b2RvLXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG5cXG59ICovXFxuXFxudGFibGUge1xcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMTBweDtcXG59XFxuXFxuXFxuLnRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ueC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ueC1idXR0b246aG92ZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5mb3JtLWxhYmVsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNhbmNlbCxcXG4uY2FuY2VsLWNoYW5nZXMge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdDpob3ZlciAuaGlkZXtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7ICovXFxufVxcblxcblxcblxcblxcblxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSxcXG4ubmV3LXByb2plY3QtZm9ybSxcXG4uZWRpdC1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuXFxuLmhpZGRlbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUtc2VjdGlvbiB7XFxuICAvKiBtYXJnaW4tbGVmdDogYXV0bzsgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COzs7QUFHQTs7OztFQUlFLGFBQWE7O0FBRWY7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7Ozs7Ozs7Ozs7QUFVQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkI7c0NBQ29DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsNkJBQTZCOztBQUUvQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7Ozs7QUFLQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7OztBQUlBOzs7O0VBSUUsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7O0FBR0E7Ozs7Ozs7Ozs7R0FVRzs7QUFFSDtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COzs7Ozs7O0FBT0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGtCQUFrQjs7RUFFbEIsNEJBQTRCO0FBQzlCOzs7Ozs7OztBQVFBOzs7RUFHRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTs7QUFFZjs7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOzs7O0FBSUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4udG9kby1hcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLnNpZGUtYmFyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmFsbC10b2RvcyxcXG4uZHVlLXRvZGF5LFxcbi5kdWUtdG9tb3Jyb3csXFxuLmFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tZGlzcGxheSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7ICovXFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWRpc3BsYXkgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5cXG4uZGlzcGxheS1tZW51LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFxufVxcblxcblxcbi5wcmlvcml0eS1tYXJrZXIge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcblxcblxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbjpob3ZlcixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDhDQkE7XFxuICBjb2xvcjogIzAwOENCQTtcXG59XFxuXFxuXFxuXFxuLnRvZG8tZm9ybS1wb3B1cCxcXG4ubmV3LXByb2plY3QtcG9wdXAsXFxuLmVkaXQtdG9kby1wb3B1cCxcXG4uZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuLyogLmVkaXQtdG9kby1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufSAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XFxufVxcblxcblxcbi50b2RvLWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLngtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLngtYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZm9ybS1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jYW5jZWwsXFxuLmNhbmNlbC1jaGFuZ2VzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3Q6aG92ZXIgLmhpZGV7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3OyAqL1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uZWRpdC10b2RvLWZvcm0sXFxuLm5ldy1wcm9qZWN0LWZvcm0sXFxuLmVkaXQtcHJvamVjdC1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcblxcbi5oaWRkZW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcbi5jdXJyZW50LW1lbnUtc2VsZWN0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlLXNlY3Rpb24ge1xcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2hvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5cblxuY29uc3QgY3JlYXRlRWxlbWVudHMgPSAoKCkgPT4ge1xuXG5cbiAgY29uc3QgY3JlYXRlRGlzcGxheUhlYWRlciA9IChoaWdobGlnaHRlZEJ1dHRvbikgPT4ge1xuXG4gICAgbGV0IHRpdGxlID0gaGlnaGxpZ2h0ZWRCdXR0b24udGV4dENvbnRlbnQ7XG4gICAgXG4gICAgY29uc3QgX2hlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIF9oZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1tZW51LWhlYWRlcicpXG4gICAgX2NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoX2hlYWRlckNvbnRhaW5lcik7XG5cblxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgX2hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuXG5cbiAgICByZXR1cm4gX2hlYWRlckNvbnRhaW5lclxuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9IChjdXJyZW50TWVudSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRNZW51VGl0bGUgPSBjdXJyZW50TWVudS50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgaWYgKGN1cnJlbnRNZW51VGl0bGUgPT0gJ1Byb2plY3RzJykge1xuICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbmRlclRvZG8ub3BlbkZvcm0odG9kby5wcm9qZWN0Rm9ybVBvcHVwKVxuICAgICAgICByZW5kZXJUb2RvLmFkZFRvZG9zVG9Gb3JtT3B0aW9ucyh0b2RvLnByb2pGb3JtU2VsZWN0VGFnLCB0b2RvLmdldFRvZG9MaXN0KCkpXG4gICAgICB9KVxuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy10b2RvLWJ1dHRvbicpO1xuICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8udG9kb0Zvcm1Qb3B1cClcbiAgICAgICAgcmVuZGVyVG9kby5hZGRQcm9qZWN0c1RvRm9ybU9wdGlvbnModG9kby50b2RvRm9ybVNlbGVjdFRhZywgdG9kby5nZXRQcm9qZWN0TGlzdCgpKVxuXG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG9CdXR0b25cbiAgfTtcblxuXG4gIGNvbnN0IGxpc3RGYWN0b3J5ID0gKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gIFxuICBcbiAgXG4gICAgbGV0IF92aXNpYmxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF92aXNpYmxlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzaG93bi1jb250ZW50Jyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChfdmlzaWJsZUNvbnRlbnQpO1xuICBcbiAgXG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICByZW5kZXJUb2RvLnRvZ2dsZVRhc2tDb21wbGV0ZShlKTtcbiAgICAgIC8vIHRvZG8udXBkYXRlT2JqZWN0KClcbiAgICB9KTtcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBcbiAgXG4gIFxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBcbiAgXG4gIFxuICAgIGxldCBfcHJpb3JpdHlNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWFya2VyJyk7XG4gIFxuICBcbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBISUdIX1BSSU9SSVRZO1xuICAgICAgICBicmVhaztcbiAgICBcbiAgXG4gIFxuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gTUVESVVNX1BSSU9SSVRZO1xuICAgICAgICBicmVhaztcbiAgXG4gICAgICBcbiAgXG4gIFxuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gTE9XX1BSSU9SSVRZO1xuICAgICAgICBicmVhaztcbiAgXG4gIFxuICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGJyZWFrO1xuICAgIH07XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChfcHJpb3JpdHlNYXJrZXIpO1xuICBcbiAgXG4gIFxuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ2VkaXQtdGFzay1idXR0b24nKVxuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgZWRpdEJ1dHRvbi5kYXRhc2V0WydvdmVyYWxsVGFza0luZGV4J10gPSBpbmRleDtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHJlbmRlclRvZG8ub3BlbkZvcm0odG9kby5lZGl0Rm9ybVBvcHVwKTtcbiAgICAgIHJlbmRlclRvZG8uYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zKHRvZG8uZWRpdEZvcm1TZWxlY3RUYWcsIHRvZG8uZ2V0UHJvamVjdExpc3QoKSk7XG4gICAgICByZW5kZXJUb2RvLnByZWZpbGxFZGl0Rm9ybShlKTtcbiAgICAgIHRvZG8udGFnRWRpdFN1Ym1pdEJ1dHRvbldpdGhJbmRleChlKTtcblxuICAgIH0pXG4gIFxuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIFxuICBcbiAgXG4gIFxuICAgIGxldCBfZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgX2V4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ2V4cGFuZC1idXR0b24nKVxuICAgIF9leHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kJ1xuICBcbiAgICBfZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID09ICdleHBhbmQnPyB0aGlzLnRleHRDb250ZW50ID0gJ2NvbGxhcHNlJyA6IHRoaXMudGV4dENvbnRlbnQgPSAnZXhwYW5kJztcbiAgXG4gIFxuICAgICAgbGV0IF9oaWRkZW5Db250ZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChfaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgIF9oaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKF9leHBhbmRCdXR0b24pO1xuICBcbiAgXG4gIFxuICBcbiAgICBsZXQgX3Byb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgX3Byb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWN0aW9uJyk7XG4gICAgaWYgKCdwcm9qZWN0JyBpbiB0YXNrKSB7XG4gICAgICBfcHJvakNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Rhc2sucHJvamVjdH1gO1xuICAgIH07XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChfcHJvakNvbnRhaW5lcik7XG4gIFxuICBcbiAgXG4gICAgbGV0IF9kdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIF9kdWVEYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLXNlY3Rpb24nKTtcbiAgICBpZiAoJ2R1ZURhdGUnIGluIHRhc2spIHtcbiAgICAgIF9kdWVEYXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYER1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICB9O1xuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoX2R1ZURhdGVDb250YWluZXIpO1xuICBcbiAgXG4gIFxuICBcbiAgICBsZXQgX2NvbGxhcHNlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9jb2xsYXBzZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWNvbnRhaW5lcicpO1xuICBcbiAgICBsaXN0LmFwcGVuZENoaWxkKF9jb2xsYXBzZWRDb250YWluZXIpO1xuICBcbiAgXG4gIFxuICAgIGxldCBfbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZXMtY29udGFpbmVyJyk7XG4gICAgJ25vdGVzJyBpbiB0YXNrID8gX25vdGVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGFzay5ub3RlcyA6IFxuICAgICAgICAgICAgICBfbm90ZXNDb250YWluZXIudGV4dENvbnRlbnQgPSAnTm8gbm90ZXMgZm9yIHRoaXMgdGFzay4gRWRpdCB0YXNrIHRvIGFkZCBub3Rlcyc7XG4gICAgXG4gICAgX2NvbGxhcHNlZENvbnRhaW5lci5hcHBlbmRDaGlsZChfbm90ZXNDb250YWluZXIpO1xuICAgIFxuICBcbiAgXG4gIFxuICAgIHJldHVybiB7bGlzdCwgY2hlY2tCb3gsIGxhYmVsLCBlZGl0QnV0dG9ufVxuICB9XG4gIFxuXG5cblxuXG4gIGNvbnN0IGNyZWF0ZUFsbFRvZG9zTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB1bm9yZGVyZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmRMaXN0KTtcblxuICAgIGxldCBhbGxUYXNrc0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgYWxsVGFza3NBcnJheS5mb3JFYWNoKF90YXNrID0+IHtcbiAgICAgIGxldCBfb3ZlcmFsbFRvZG9JbmRleCA9IHRvZG8uZmluZEluZGV4T2YoX3Rhc2ssIGFsbFRhc2tzQXJyYXkpO1xuXG4gICAgICBsZXQgbGlzdEVsZW1lbnQgPSBsaXN0RmFjdG9yeShfdGFzaywgX292ZXJhbGxUb2RvSW5kZXgpO1xuXG4gICAgICB1bm9yZGVyZExpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQubGlzdCk7XG5cblxuICAgICAgbGlzdEVsZW1lbnQuY2hlY2tCb3guZGF0YXNldFsnb3ZlcmFsbEluZGV4J10gPSBfb3ZlcmFsbFRvZG9JbmRleDtcbiAgICAgIGxpc3RFbGVtZW50LmNoZWNrQm94Lm5hbWUgPSBgdGFzayR7X292ZXJhbGxUb2RvSW5kZXh9YDtcbiAgICAgIGxpc3RFbGVtZW50LmNoZWNrQm94LmlkID0gYHRhc2ske19vdmVyYWxsVG9kb0luZGV4fWA7XG5cblxuXG4gICAgICBsaXN0RWxlbWVudC5sYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHtfb3ZlcmFsbFRvZG9JbmRleH1gKTtcblxuXG5cbiAgICB9KTtcblxuICAgIHJldHVybiBsaXN0Q29udGFpbmVyXG5cblxuICB9O1xuXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgX2xpc3RPZlRhc2tzID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuICAgIGNvbnN0IF9saXN0T2ZQcm9qZWN0cyA9IHRvZG8uZ2V0UHJvamVjdExpc3QoKTtcblxuXG4gICAgaWYgKF9saXN0T2ZQcm9qZWN0cy5sZW5ndGggPT0gMCkge1xuICAgICAgY29uc3QgX25vUHJvamVjdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBfbm9Qcm9qZWN0TWVzc2FnZS50ZXh0Q29udGVudCA9ICdObyBwcm9qZWN0cyB5ZXQgY3JlYXRlZCwgY2xpY2sgYnV0dG9uIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0J1xuXG4gICAgICByZXR1cm4gX25vUHJvamVjdE1lc3NhZ2U7XG4gICAgfTtcblxuXG5cblxuXG4gICAgY29uc3QgX3BhZ2VEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBfbGlzdE9mUHJvamVjdHMuZm9yRWFjaChfcHJvamVjdE5hbWUgPT4ge1xuICAgICAgY29uc3QgX3Byb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIF9wcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBfcGFnZURpc3BsYXkuYXBwZW5kQ2hpbGQoX3Byb2pDb250YWluZXIpO1xuXG4gICAgICBjb25zdCBfcHJvakhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgX3Byb2pIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG4gICAgICBfcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChfcHJvakhlYWRlcilcblxuXG4gICAgICBjb25zdCBfcHJvak5hbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIF9wcm9qTmFtZVNlY3Rpb24udGV4dENvbnRlbnQgPSBfcHJvamVjdE5hbWU7XG4gICAgICBfcHJvakhlYWRlci5hcHBlbmRDaGlsZChfcHJvak5hbWVTZWN0aW9uKTtcblxuXG4gICAgICBjb25zdCBfZWRpdFByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIF9lZGl0UHJvakJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgICAgX2VkaXRQcm9qQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24nKVxuICAgICAgX2VkaXRQcm9qQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVG9kby5vcGVuRm9ybS5iaW5kKF9lZGl0UHJvakJ1dHRvbiwgdG9kby5lZGl0UHJvakZvcm1Qb3B1cCkpXG5cbiAgICAgIF9wcm9qSGVhZGVyLmFwcGVuZENoaWxkKF9lZGl0UHJvakJ1dHRvbik7XG5cblxuXG5cbiAgICAgIGNvbnN0IF91TCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICBfcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChfdUwpXG5cblxuICAgICAgbGV0IF90YXNrc0JlbG9uZ2luZ1RvUHJvaiA9IF9saXN0T2ZUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT0gX3Byb2plY3ROYW1lKVxuXG4gICAgICBfdGFza3NCZWxvbmdpbmdUb1Byb2ouZm9yRWFjaChfdGFzayA9PiB7XG4gICAgICAgIGxldCBfb3ZlcmFsbFRhc2tJbmRleCA9IHRvZG8uZmluZEluZGV4T2YoX3Rhc2ssIHRvZG8uZ2V0VG9kb0xpc3QoKSlcblxuXG4gICAgICAgIGxldCBfbGlzdFRhZyA9IGxpc3RGYWN0b3J5KF90YXNrLCBfb3ZlcmFsbFRhc2tJbmRleClcblxuICAgICAgICBfdUwuYXBwZW5kQ2hpbGQoX2xpc3RUYWcubGlzdCk7XG5cbiAgICAgICAgbGV0IF90YXNrSW5kZXhMb2NhbCA9IHRvZG8uZmluZEluZGV4T2YoX3Rhc2ssIF90YXNrc0JlbG9uZ2luZ1RvUHJvaik7XG4gICAgICAgIGxldCBfcHJvakluZGV4ID0gdG9kby5maW5kSW5kZXhPZihfcHJvamVjdE5hbWUsIF9saXN0T2ZQcm9qZWN0cyk7IFxuICAgICAgICBcbiAgICAgICAgX2xpc3RUYWcuY2hlY2tCb3guZGF0YXNldFsncHJvamVjdEluZGV4J10gPSBfcHJvakluZGV4O1xuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5kYXRhc2V0Wydsb2NhbFRhc2tJbmRleCddID0gX3Rhc2tJbmRleExvY2FsOyBcbiAgICAgICAgX2xpc3RUYWcuY2hlY2tCb3gubmFtZSA9IGBvYmoke19wcm9qSW5kZXh9dGFzayR7X3Rhc2tJbmRleExvY2FsfWA7ICAgIFxuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5pZCA9IGBvYmoke19wcm9qSW5kZXh9dGFzayR7X3Rhc2tJbmRleExvY2FsfWA7ICBcbiAgXG4gIFxuXG4gICAgICAgIF9saXN0VGFnLmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYG9iaiR7X3Byb2pJbmRleH10YXNrJHtfdGFza0luZGV4TG9jYWx9YCk7XG5cblxuXG5cblxuICAgICAgfSk7XG4gICAgICBcblxuICAgIH0pXG5cblxuXG5cbiAgICByZXR1cm4gX3BhZ2VEaXNwbGF5XG5cblxuXG5cblxuICB9O1xuXG5cblxuICBjb25zdCBjcmVhdGVQYWdlTGlzdCA9IChidXR0b25TZWxlY3RlZCkgPT4ge1xuICAgIGxldCBtZW51U2VsZWN0ZWQgPSBidXR0b25TZWxlY3RlZC50ZXh0Q29udGVudFxuXG4gICAgY29uc3QgcmV0dXJuZWRMaXN0ID0ge1xuICAgICAgJ0FsbCBUb0Rvcyc6IGNyZWF0ZUFsbFRvZG9zTGlzdCxcbiAgICAgIC8vICdUb2RheSc6IHRvZGF5TGlzdCxcbiAgICAgIC8vICdUb21vcnJvdyc6IHRvbW9ycm93TGlzdCxcbiAgICAgICdQcm9qZWN0cyc6IGNyZWF0ZVByb2plY3RzTGlzdCxcblxuICAgIH07XG5cblxuICAgIHJldHVybiByZXR1cm5lZExpc3RbbWVudVNlbGVjdGVkXSgpO1xuICAgIFxuICB9XG5cbiAgXG5cbiAgY29uc3QgX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cblxuICBjb25zdCBISUdIX1BSSU9SSVRZID0gJ3JlZCc7XG4gIGNvbnN0IE1FRElVTV9QUklPUklUWSA9ICdvcmFuZ2UnO1xuICBjb25zdCBMT1dfUFJJT1JJVFkgPSAnY29ybmZsb3dlcmJsdWUnO1xuXG5cblxuICBcblxuXG5cbiAgcmV0dXJuIHsgY3JlYXRlRGlzcGxheUhlYWRlciwgY3JlYXRlQWRkQnV0dG9uLCBjcmVhdGVQYWdlTGlzdCB9XG59KSgpO1xuXG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnRzIH0iLCJpbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHRvZG8gPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBfdG9kb0xpc3RcbiAgfTtcblxuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBfcHJvamVjdExpc3Q7XG4gIH07XG5cblxuICBjb25zdCBjYXB0dXJlRm9ybURhdGEgPSAoZm9ybSkgPT4ge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEoZm9ybSlcbiAgfTtcblxuXG4gIGNvbnN0IGZpbmRJbmRleE9mID0gKGl0ZW0sIGxpc3QpID0+IHtcbiAgICByZXR1cm4gbGlzdC5pbmRleE9mKGl0ZW0pO1xuICB9O1xuXG5cbiAgY29uc3QgdGFnRWRpdFN1Ym1pdEJ1dHRvbldpdGhJbmRleCA9IChlKSA9PiB7XG4gICAgbGV0IF9zYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtY2hhbmdlcycpO1xuICAgIGxldCBfaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxUYXNrSW5kZXhcblxuICAgIF9zYXZlQnV0dG9uLmRhdGFzZXQub3ZlcmFsbFRhc2tJbmRleCA9IF9pbmRleDsgICAgXG4gIH07XG5cblxuXG4gIGNvbnN0IHNhdmVFZGl0Q2hhbmdlcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IF9lZGl0ZWRGb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfZWRpdEZvcm0pO1xuXG4gICAgbGV0IF9saXN0T2ZUb2RvcyA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcblxuICAgIGxldCBfb2JqSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxUYXNrSW5kZXg7XG4gICAgY29uc29sZS5sb2coZSk7XG5cbiAgICBsZXQgX3RvZG9PYmogPSBfbGlzdE9mVG9kb3NbX29iakluZGV4XTtcblxuICAgIGxldCBuZXdUaXRsZSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtdGl0bGUnKTtcbiAgICAvLyBsZXQgbmV3RGVzY3JpcHRpb24gPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IG5ld05vdGVzID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1ub3RlcycpO1xuICAgIGxldCBuZXdEdWVEYXRlID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1kdWUtZGF0ZScpO1xuICAgIGxldCBuZXdQcmlvcml0eSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtcHJpb3JpdHknKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtcHJvamVjdCcpO1xuXG4gICAgX3RvZG9PYmoudGl0bGUgPSBuZXdUaXRsZTtcblxuXG4gICAgbmV3RHVlRGF0ZSA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLmR1ZURhdGU6IF90b2RvT2JqLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXG4gICAgbmV3Tm90ZXMgPT0gJyc/IGRlbGV0ZSBfdG9kb09iai5ub3RlczogX3RvZG9PYmoubm90ZXMgPSBuZXdOb3RlcztcblxuICAgIG5ld1ByaW9yaXR5ID09ICcnPyBkZWxldGUgX3RvZG9PYmoucHJpb3JpdHk6IF90b2RvT2JqLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbiAgICBuZXdQcm9qZWN0ID09ICcnPyBkZWxldGUgX3RvZG9PYmoucHJvamVjdDogX3RvZG9PYmoucHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICBcbiAgICBfZWRpdEZvcm0ucmVzZXQoKTtcbiAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShlZGl0Rm9ybVBvcHVwKTtcblxuICAgIGxldCBfY3VycmVudE1lbnUgPSBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpO1xuICAgIHJlbmRlclRvZG8udXBkYXRlUGFnZShfY3VycmVudE1lbnUpO1xuXG4gIH07XG5cblxuXG5cbiAgY29uc3Qgc2F2ZVByb2plY3RDaGFuZ2VzID0gKCkgPT4ge1xuXG4gIH1cblxuXG5cblxuICBcbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoZGF0YSkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGRhdGEuZ2V0KCd0aXRsZScpO1xuICAgIC8vIGxldCBkZXNjcmlwdGlvbiA9IGRhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBkdWVEYXRlID0gZGF0YS5nZXQoJ2R1ZS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZGF0YS5nZXQoJ3ByaW9yaXR5Jyk7XG4gICAgbGV0IGlzVG9kb0RvbmUgPSAnbm8nO1xuICAgIGxldCBwcm9qZWN0ID0gZGF0YS5nZXQoJ3BhcnQtb2YtcHJvamVjdCcpO1xuXG5cbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGlzVG9kb0RvbmUgfVxuXG4gIH07XG5cblxuICBjb25zdCBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLl9tZW51QnV0dG9uc10uZmlsdGVyKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSlbMF07XG4gIH07XG5cblxuXG4gIGNvbnN0IGZpbmRDdXJyZW50Rm9ybUluVXNlID0gKCkgPT4ge1xuXG4gICAgbGV0IGFsbEZvcm1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNvbnRhaW5lcicpXTtcbiAgICBcbiAgICBsZXQgY3VycmVudEZvcm0gPSBhbGxGb3Jtcy5maWx0ZXIoZm9ybSA9PiBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1mb3JtLWludXNlJykpWzBdXG4gXG4gICAgcmV0dXJuIGN1cnJlbnRGb3JtO1xuICB9O1xuXG5cblxuICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZEJ1dHRvbiA9IChldmVudCkgPT4ge1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRCdXR0b24gPSBldmVudC50YXJnZXQ7XG5cbiAgICBfbWVudUJ1dHRvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1tZW51LXNlbGVjdGVkJykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBzZWxlY3RlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKTtcblxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RUb1Rhc2tPYmogPSAocHJvak5hbWUsIHByb2pUYXNrcykgPT4ge1xuXG4gICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgICAgX3RvZG9MaXN0LmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICh0YXNrTmFtZSA9PSB0b2RvLnRpdGxlKSB7XG4gICAgICAgICAgdG9kby5wcm9qZWN0ID0gcHJvak5hbWVcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cblxuICAgIC8vIF90b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIC8vICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgIC8vICAgICBpZiAodG9kby50aXRsZSA9PSB0YXNrTmFtZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBfcHJvamVjdERhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3Byb2plY3RGb3JtKTtcblxuICAgIGxldCBfcHJvamVjdE5hbWUgPSBfcHJvamVjdERhdGEuZ2V0KCdwcm9qZWN0LW5hbWUnKTtcblxuICAgIGlmIChfcHJvamVjdExpc3QuaW5jbHVkZXMoX3Byb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoJ3Byb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgX3Byb2plY3RMaXN0LnB1c2goX3Byb2plY3ROYW1lKTtcblxuXG4gICAgbGV0IF90YXNrQWRkZWRUb1Byb2ogPSBbLi4ucHJvakZvcm1TZWxlY3RUYWcuc2VsZWN0ZWRPcHRpb25zXS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcblxuICAgIGFkZFByb2plY3RUb1Rhc2tPYmooX3Byb2plY3ROYW1lLCBfdGFza0FkZGVkVG9Qcm9qKVxuXG5cblxuICAgIGxldCBjdXJyZW50TWVudSA9IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCk7XG4gICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKGN1cnJlbnRNZW51KVxuXG4gICAgX3Byb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0ocHJvamVjdEZvcm1Qb3B1cCk7IFxuICB9XG5cblxuICBjb25zdCBjcmVhdGVUb2RvID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgbGV0IF9mb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfdG9kb0Zvcm0pO1xuXG4gICAgbGV0IF9uZXdUb2RvID0gdG9kb0ZhY3RvcnkoX2Zvcm1EYXRhKTtcblxuICAgIF90b2RvTGlzdC5wdXNoKF9uZXdUb2RvKTtcblxuXG4gICAgX3RvZG9Gb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0odG9kb0Zvcm1Qb3B1cCk7XG4gICAgXG4gICAgXG4gICAgbGV0IG1lbnUgPSBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpO1xuICAgIHJlbmRlclRvZG8udXBkYXRlUGFnZShtZW51KVxuXG4gICAgLy8gcmVuZGVyVG9kby5kaXNwYXlNZW51SXRlbXMocGFzcyBpbiBjdXJyZW50IG1lbnUgc2VsZWN0ZWQpXG5cbiAgfTsgICBcblxuXG5cblxuICBjb25zdCBfdG9kb0xpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29tcGxldGUgUHJlc2VudGF0aW9uXCIsXG4gICAgICAvLyBkZXNjcmlwdGlvbjogXCJNdXN0IGNvbXBsZXRlIGFuZCBzZWxsIHBpdGNoIHRvIGJvYXJkXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTItMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6IFwiTm90ZXMgb24gbWVldGluZyBwcmVwXCIsXG4gICAgICBwcm9qZWN0OiBcIldvcmtcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0aXRsZTogXCJEbyBncm9jZXJpZXNcIixcbiAgICAgIC8vIGRlc2NyaXB0aW9uOiBcIk5lZWQgZm9vb2RcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMS0xOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6ICdnbyB0byB3YWxtYXJ0IGNoZWFwIGZvb2QnLFxuICAgICAgcHJvamVjdDogXCJIb21lXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiRml4IENhciBJc3N1ZXNcIixcbiAgICAgIC8vIGRlc2NyaXB0aW9uOiBcIk5lZWQgZmFzdCBjYXJcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMi0xMFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBpc1RvZG9Eb25lOiBcIm5vXCIsXG4gICAgICBub3RlczogXCJ2cm9vbSB2cm9vbVwiLFxuICAgICAgcHJvamVjdDogXCJIb21lXCJcbiAgICB9XG4gIF07XG5cblxuXG5cbiAgY29uc3QgX3Byb2plY3RMaXN0ID0gWydIb21lJywgJ1dvcmsnLCAnQ2FyJ107XG5cbiAgLy8gY29uc3QgX3Byb2plY3RMaXN0ID0gW107XG5cblxuXG5cbiAgY29uc3QgX3RvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICBjb25zdCBfcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpO1xuICBjb25zdCBfZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKTsgIFxuXG5cblxuICBjb25zdCBwcm9qRm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tc2VsZWN0LXRhZycpO1xuICBjb25zdCB0b2RvRm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tc2VsZWN0Jyk7XG4gIGNvbnN0IGVkaXRGb3JtU2VsZWN0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICBjb25zdCBlZGl0UHJvalNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QtdG9kb3MnKTtcbiAgY29uc3QgdG9kb0Zvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tcG9wdXAnKTtcbiAgY29uc3QgZWRpdEZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tcG9wdXAnKTtcbiAgY29uc3QgcHJvamVjdEZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1wb3B1cCcpO1xuICBjb25zdCBlZGl0UHJvakZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtcG9wdXAnKVxuXG5cblxuICBjb25zdCBfbWVudUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1idXR0b24nKTtcbiAgX21lbnVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBoaWdobGlnaHRTZWxlY3RlZEJ1dHRvbihlKTsgICAgXG4gICAgICBsZXQgY3VycmVudE1lbnUgPSBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpO1xuICAgICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKGN1cnJlbnRNZW51KTtcbiAgICB9KTtcblxuICB9KTtcblxuXG4gIGNvbnN0IF9zdWJtaXRUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtZm9ybScpO1xuICBfc3VibWl0VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvKTtcblxuXG5cbiAgY29uc3QgX3NhdmVFZGl0Q2hhbmdlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNoYW5nZXMnKTtcbiAgX3NhdmVFZGl0Q2hhbmdlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVFZGl0Q2hhbmdlcyk7XG5cblxuICBjb25zdCBfc3VibWl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QnKTtcbiAgX3N1Ym1pdFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdCk7XG5cblxuXG4gIGNvbnN0IF9jbG9zZUZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWZvcm0nKTtcbiAgX2Nsb3NlRm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSlcblxuICAgIH0pXG4gIH0pO1xuXG5cblxuICBjb25zdCBfc2F2ZVByb2plY3RDaGFuZ2VzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtcHJvamVjdC1jaGFuZ2VzJyk7XG4gIF9zYXZlUHJvamVjdENoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlUHJvamVjdENoYW5nZXMpXG5cblxuXG5cblxuICBcblxuICByZXR1cm4geyB0b2RvRm9ybVBvcHVwLCBlZGl0Rm9ybVBvcHVwLCBwcm9qZWN0Rm9ybVBvcHVwLCBlZGl0UHJvakZvcm1Qb3B1cCwgcHJvakZvcm1TZWxlY3RUYWcsXG4gICAgdG9kb0Zvcm1TZWxlY3RUYWcsIGVkaXRGb3JtU2VsZWN0VGFnLCBlZGl0UHJvalNlbGVjdFRhZywgZ2V0VG9kb0xpc3QsIGdldFByb2plY3RMaXN0LCBmaW5kSW5kZXhPZiwgXG4gICAgdGFnRWRpdFN1Ym1pdEJ1dHRvbldpdGhJbmRleCB9XG5cblxufSkoKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10b2RvLWJ1dHRvbicpLmNsaWNrKCk7XG5cbmV4cG9ydCB7IHRvZG8gfVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRzIH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5cblxuY29uc3QgcmVuZGVyVG9kbyA9ICgoKSA9PiB7XG5cblxuICBjb25zdCBvcGVuRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtZm9ybS1pbnVzZScpO1xuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNsb3NlRm9ybSA9IChmb3JtQ2hvc2VuKSA9PiB7XG4gICAgZm9ybUNob3Nlbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWZvcm0taW51c2UnKTtcbiAgICBmb3JtQ2hvc2VuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuXG4gIH07XG5cblxuXG5cbiAgY29uc3QgcHJlZmlsbEVkaXRGb3JtID0gKGUpID0+IHsgXG4gICAgY29uc29sZS5sb2coZSk7XG5cbiAgICBsZXQgX3RvZG9JbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQub3ZlcmFsbFRhc2tJbmRleFxuXG4gICAgbGV0IF9hbGxUb2RvQXJyYXkgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG5cbiAgICBsZXQgX2N1cnJlbnRUb2RvT2JqZWN0ID0gX2FsbFRvZG9BcnJheVtfdG9kb0luZGV4XTtcblxuXG4gICAgX2VkaXRUaXRsZS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC50aXRsZTtcbiAgICAvLyBfZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIFxuICAgIGlmIChfY3VycmVudFRvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ25vdGVzJykpIHtcbiAgICAgIF9lZGl0Tm90ZXMudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3Qubm90ZXM7XG4gICAgfTtcblxuICAgIGlmIChfY3VycmVudFRvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ2R1ZURhdGUnKSkge1xuICAgICAgX2VkaXREdWVEYXRlLnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LmR1ZURhdGU7XG4gICAgfVxuXG5cbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdwcmlvcml0eScpKSB7XG4gICAgICBfZWRpdFByaW9yaXR5LnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LnByaW9yaXR5O1xuICAgIH1cblxuXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgncHJvamVjdCcpKSB7XG4gICAgICBfZWRpdFByb2plY3QudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QucHJvamVjdDtcbiAgICB9XG5cblxuICAgIC8vIF9lZGl0RHVlRGF0ZS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5kdWVEYXRlXG4gICAgLy8gX2VkaXRQcmlvcml0eS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5wcmlvcml0eVxuXG5cbiAgfTtcblxuXG5cbiAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuIFxuICAgIHdoaWxlIChfY29udGVudERpc3BsYXkuaGFzQ2hpbGROb2RlcygpKSB7XG4gXG4gICAgICBfY29udGVudERpc3BsYXkucmVtb3ZlQ2hpbGQoX2NvbnRlbnREaXNwbGF5LmZpcnN0Q2hpbGQpXG4gICAgfVxuICB9O1xuXG5cblxuICBjb25zdCBjbGVhck9sZE9wdGlvbnMgPSAodGFnKSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBbLi4udGFnLm9wdGlvbnNdO1xuICBcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT0gXCJcIikge1xuICAgICAgICBvcHRpb24ucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH07XG5cblxuXG5cbiAgY29uc3QgYWRkVG9kb3NUb0Zvcm1PcHRpb25zID0gKHNlbGVjdFRhZywgYWxsVG9kb3NBcnJheSkgPT4ge1xuICAgIGNsZWFyT2xkT3B0aW9ucyhzZWxlY3RUYWcpO1xuXG4gICAgYWxsVG9kb3NBcnJheS5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAgICAgc2VsZWN0VGFnLmFkZChuZXdPcHRpb24pICAgICAgXG4gICAgfSk7XG4gICAgXG5cblxuICB9O1xuXG5cblxuXG4gIGNvbnN0IGFkZFByb2plY3RzVG9Gb3JtT3B0aW9ucz0gKHNlbGVjdFRhZywgYWxsUHJvamVjdHNBcnJheSkgPT4ge1xuICAgIGNsZWFyT2xkT3B0aW9ucyhzZWxlY3RUYWcpO1xuXG4gICAgYWxsUHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFxuICAgICAgc2VsZWN0VGFnLmFkZChvcHRpb24pICAgICAgXG4gICAgfSk7XG4gIH07XG5cblxuXG5cblxuICBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGxldCB0YXNrID0gZS50YXJnZXQubGFiZWxzWzBdO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGFzayBpcyBjb21wbGV0ZVwiKVxuXG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGluY29tcGxldGVcIik7XG4gICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZG9uZScpXG5cbiAgICB9XG5cbiAgfTtcblxuXG5cblxuXG4gIGNvbnN0IHVwZGF0ZVBhZ2UgPSAobWVudUJ1dHRvblNlbGVjdGVkKSA9PiB7XG5cbiAgICBjbGVhckRpc3BsYXkoKTtcblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50cy5jcmVhdGVEaXNwbGF5SGVhZGVyKG1lbnVCdXR0b25TZWxlY3RlZCkpXG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHMuY3JlYXRlUGFnZUxpc3QobWVudUJ1dHRvblNlbGVjdGVkKSlcblxuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZUFkZEJ1dHRvbihtZW51QnV0dG9uU2VsZWN0ZWQpKTtcblxuXG5cblxuXG4gIFxuICB9XG5cblxuXG4gIGNvbnN0IF9jb250ZW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuXG4gIGNvbnN0IF9lZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tZm9ybScpOyAgXG5cblxuICBjb25zdCBfZWRpdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKTtcbiAgLy8gY29uc3QgX2VkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IF9lZGl0Tm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlcycpO1xuICBjb25zdCBfZWRpdER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kdWUtZGF0ZScpO1xuICBjb25zdCBfZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKTtcbiAgY29uc3QgX2VkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpXG5cblxuXG4gXG4gIHJldHVybiB7IG9wZW5Gb3JtLCBjbG9zZUZvcm0sIHVwZGF0ZVBhZ2UsIGFkZFRvZG9zVG9Gb3JtT3B0aW9ucyxcbiAgICAgICAgICBhZGRQcm9qZWN0c1RvRm9ybU9wdGlvbnMsIHRvZ2dsZVRhc2tDb21wbGV0ZSwgcHJlZmlsbEVkaXRGb3JtIH1cblxuXG59KSgpO1xuXG5cbmV4cG9ydCB7IHJlbmRlclRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==