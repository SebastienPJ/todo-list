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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n.edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n}\n\n\n.edit-todo-form,\n.new-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date-section {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;;AAGA;;;;EAIE,aAAa;;AAEf;;;AAGA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,6BAA6B;;AAE/B;;AAEA;EACE,gCAAgC;AAClC;;;;;;;;;;AAUA;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB;sCACoC;EACpC,yBAAyB;AAC3B;;;AAGA;EACE,kBAAkB;AACpB;;;AAGA;EACE,6BAA6B;;AAE/B;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;;;;AAKA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;;;;AAIA;;EAEE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,QAAQ;EACR,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;;AAEpB;;AAEA;;EAEE,iBAAiB;AACnB;;;;;;;AAOA;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;;AAGA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;;AAGA;EACE,kBAAkB;;EAElB,4BAA4B;AAC9B;;;;;AAKA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;;AAEZ;;;AAGA;;EAEE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;;AAGA;EACE,uBAAuB;EACvB,aAAa;;AAEf;;;AAGA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;;AAGA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB;;;;AAIA;EACE,uBAAuB;EACvB,eAAe;AACjB","sourcesContent":["body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n.edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n}\n\n\n.edit-todo-form,\n.new-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date-section {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n\n\n"],"sourceRoot":""}]);
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


  const listFactory = (task) => {
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
    editButton.addEventListener('click', (e) => {
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormPopup);
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addProjectsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList());
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.prefillEditForm(e);
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

      let listElement = listFactory(_task);

      unorderdList.appendChild(listElement.list);


      let todoIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, allTasksArray);

      listElement.checkBox.dataset['taskIndex'] = todoIndex;
      listElement.checkBox.name = `task${todoIndex}`;
      listElement.checkBox.id = `task${todoIndex}`;



      listElement.label.setAttribute('for', `task${todoIndex}`);


      listElement.editButton.dataset['taskIndex'] = todoIndex;
      listElement.editButton.addEventListener('click', ___WEBPACK_IMPORTED_MODULE_0__.todo.tagEditSubmitButtonWithIndex)





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


      const _projHeader = document.createElement('h2');
      _projHeader.textContent = _projectName;
      _projContainer.appendChild(_projHeader);


      const _uL = document.createElement('ul');
      _projContainer.appendChild(_uL)


      let _tasksBelongingToProj = _listOfTasks.filter(task => task.project == _projectName)

      _tasksBelongingToProj.forEach(_task => {

        let _listTag = listFactory(_task)

        _uL.appendChild(_listTag.list);


        let _taskIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, _tasksBelongingToProj);
        let _projIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_projectName, _listOfProjects); 
        
        _listTag.checkBox.dataset['projectIndex'] = _projIndex;
        _listTag.checkBox.dataset['taskIndex'] = _taskIndex; 
        _listTag.checkBox.name = `obj${_projIndex}task${_taskIndex}`;    
        _listTag.checkBox.id = `obj${_projIndex}task${_taskIndex}`;  
  
  


        _listTag.label.setAttribute('for', `obj${_projIndex}task${_taskIndex}`);

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
    let _index = e.target.dataset.taskIndex

    _saveButton.dataset.taskIndex = _index;    
  };



  const saveEditChanges = (e) => {
    e.preventDefault();

    let _editedFormData = captureFormData(_editForm);

    let _listOfTodos = todo.getTodoList();

    let _objIndex = e.target.dataset.taskIndex;
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


  const createProject = () => {
    e.preventDefault();

    let _projectData = captureFormData(_projectForm);

    let _projectName = _projectData.get('project-name');

    if (_projectList.includes(_projectName)) {
      alert('project already exists');
      return;
    };

    _projectList.push(_projectName);


    let _taskAddedToProj = [...todoSelected.selectedOptions].map(option => option.value)

    addProjectToTaskObj(_projectName, _taskAddedToProj)



    // renderTodo.displayProjectPage(_todoList);


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
  const todoFormPopup = document.querySelector('.todo-form-popup');
  const editFormPopup = document.querySelector('.edit-todo-popup');
  const projectFormPopup = document.querySelector('.new-project-popup');




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
  })





  

  return { todoFormPopup, editFormPopup, projectFormPopup, projFormSelectTag,
    todoFormSelectTag, editFormSelectTag, getTodoList, getProjectList, findIndexOf, 
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

    let _todoIndex = e.target.dataset.taskIndex

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1g7OztBQUdBLENBQUM7Ozs7Ozs7OztVQ2pMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4udG9kby1hcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLnNpZGUtYmFyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmFsbC10b2RvcyxcXG4uZHVlLXRvZGF5LFxcbi5kdWUtdG9tb3Jyb3csXFxuLmFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tZGlzcGxheSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7ICovXFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWRpc3BsYXkgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5cXG4uZGlzcGxheS1tZW51LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFxufVxcblxcblxcbi5wcmlvcml0eS1tYXJrZXIge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcblxcblxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbjpob3ZlcixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDhDQkE7XFxuICBjb2xvcjogIzAwOENCQTtcXG59XFxuXFxuXFxuXFxuLnRvZG8tZm9ybS1wb3B1cCxcXG4ubmV3LXByb2plY3QtcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi54LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi54LWJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uY2FuY2VsLFxcbi5jYW5jZWwtY2hhbmdlcyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0OmhvdmVyIC5oaWRle1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgKi9cXG59XFxuXFxuXFxuXFxuXFxuLmVkaXQtdG9kby1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSxcXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG4uaGlkZGVuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAzMHB4O1xcblxcbn1cXG5cXG5cXG4uY3VycmVudC1tZW51LXNlbGVjdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxufVxcblxcblxcbi5kdWUtZGF0ZS1zZWN0aW9uIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyAqL1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3Qtc2VjdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnNob3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COzs7QUFHQTs7OztFQUlFLGFBQWE7O0FBRWY7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7Ozs7Ozs7Ozs7QUFVQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkI7c0NBQ29DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsNkJBQTZCOztBQUUvQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7Ozs7QUFLQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7OztBQUlBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7Ozs7OztBQU9BO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxrQkFBa0I7O0VBRWxCLDRCQUE0QjtBQUM5Qjs7Ozs7QUFLQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixVQUFVOztBQUVaOzs7QUFHQTs7RUFFRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTs7QUFFZjs7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOzs7O0FBSUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLnRvZG8tYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi5zaWRlLWJhciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5hbGwtdG9kb3MsXFxuLmR1ZS10b2RheSxcXG4uZHVlLXRvbW9ycm93LFxcbi5hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkOyAqL1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuXFxuLmRpc3BsYXktbWVudS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFzay1kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbn1cXG5cXG5cXG4ucHJpb3JpdHktbWFya2VyIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5cXG5cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctdG9kby1idXR0b246aG92ZXIsXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4Q0JBO1xcbiAgY29sb3I6ICMwMDhDQkE7XFxufVxcblxcblxcblxcbi50b2RvLWZvcm0tcG9wdXAsXFxuLm5ldy1wcm9qZWN0LXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMTBweDtcXG59XFxuXFxuXFxuLnRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ueC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ueC1idXR0b246aG92ZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5mb3JtLWxhYmVsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmNhbmNlbCxcXG4uY2FuY2VsLWNoYW5nZXMge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdDpob3ZlciAuaGlkZXtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7ICovXFxufVxcblxcblxcblxcblxcbi5lZGl0LXRvZG8tcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG5cXG4uZWRpdC10b2RvLWZvcm0sXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuXFxuLmhpZGRlbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUtc2VjdGlvbiB7XFxuICAvKiBtYXJnaW4tbGVmdDogYXV0bzsgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5cblxuY29uc3QgY3JlYXRlRWxlbWVudHMgPSAoKCkgPT4ge1xuXG5cbiAgY29uc3QgY3JlYXRlRGlzcGxheUhlYWRlciA9IChoaWdobGlnaHRlZEJ1dHRvbikgPT4ge1xuXG4gICAgbGV0IHRpdGxlID0gaGlnaGxpZ2h0ZWRCdXR0b24udGV4dENvbnRlbnQ7XG4gICAgXG4gICAgY29uc3QgX2hlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIF9oZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1tZW51LWhlYWRlcicpXG4gICAgX2NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoX2hlYWRlckNvbnRhaW5lcik7XG5cblxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgX2hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuXG5cbiAgICByZXR1cm4gX2hlYWRlckNvbnRhaW5lclxuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9IChjdXJyZW50TWVudSkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRNZW51VGl0bGUgPSBjdXJyZW50TWVudS50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgaWYgKGN1cnJlbnRNZW51VGl0bGUgPT0gJ1Byb2plY3RzJykge1xuICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbmRlclRvZG8ub3BlbkZvcm0odG9kby5wcm9qZWN0Rm9ybVBvcHVwKVxuICAgICAgICByZW5kZXJUb2RvLmFkZFRvZG9zVG9Gb3JtT3B0aW9ucyh0b2RvLnByb2pGb3JtU2VsZWN0VGFnLCB0b2RvLmdldFRvZG9MaXN0KCkpXG4gICAgICB9KVxuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy10b2RvLWJ1dHRvbicpO1xuICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8udG9kb0Zvcm1Qb3B1cClcbiAgICAgICAgcmVuZGVyVG9kby5hZGRQcm9qZWN0c1RvRm9ybU9wdGlvbnModG9kby50b2RvRm9ybVNlbGVjdFRhZywgdG9kby5nZXRQcm9qZWN0TGlzdCgpKVxuXG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG9CdXR0b25cbiAgfTtcblxuXG4gIGNvbnN0IGxpc3RGYWN0b3J5ID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX3Zpc2libGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3Zpc2libGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3duLWNvbnRlbnQnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKF92aXNpYmxlQ29udGVudCk7XG4gIFxuICBcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHJlbmRlclRvZG8udG9nZ2xlVGFza0NvbXBsZXRlKGUpO1xuICAgICAgLy8gdG9kby51cGRhdGVPYmplY3QoKVxuICAgIH0pO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIFxuICBcbiAgXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIFxuICBcbiAgXG4gICAgbGV0IF9wcmlvcml0eU1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9wcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tYXJrZXInKTtcbiAgXG4gIFxuICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhJR0hfUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICAgIFxuICBcbiAgXG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBNRURJVU1fUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgICAgIFxuICBcbiAgXG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBMT1dfUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgXG4gIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKF9wcmlvcml0eU1hcmtlcik7XG4gIFxuICBcbiAgXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnLCAnZWRpdC10YXNrLWJ1dHRvbicpXG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHJlbmRlclRvZG8ub3BlbkZvcm0odG9kby5lZGl0Rm9ybVBvcHVwKTtcbiAgICAgIHJlbmRlclRvZG8uYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zKHRvZG8uZWRpdEZvcm1TZWxlY3RUYWcsIHRvZG8uZ2V0UHJvamVjdExpc3QoKSk7XG4gICAgICByZW5kZXJUb2RvLnByZWZpbGxFZGl0Rm9ybShlKTtcbiAgICB9KVxuICBcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICBcbiAgXG4gIFxuICBcbiAgICBsZXQgX2V4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIF9leHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScsICdleHBhbmQtYnV0dG9uJylcbiAgICBfZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gJ2V4cGFuZCdcbiAgXG4gICAgX2V4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9PSAnZXhwYW5kJz8gdGhpcy50ZXh0Q29udGVudCA9ICdjb2xsYXBzZScgOiB0aGlzLnRleHRDb250ZW50ID0gJ2V4cGFuZCc7XG4gIFxuICBcbiAgICAgIGxldCBfaGlkZGVuQ29udGVudCA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoX2hpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICBfaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2hpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChfZXhwYW5kQnV0dG9uKTtcbiAgXG4gIFxuICBcbiAgXG4gICAgbGV0IF9wcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIF9wcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VjdGlvbicpO1xuICAgIGlmICgncHJvamVjdCcgaW4gdGFzaykge1xuICAgICAgX3Byb2pDb250YWluZXIudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHt0YXNrLnByb2plY3R9YDtcbiAgICB9O1xuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoX3Byb2pDb250YWluZXIpO1xuICBcbiAgXG4gIFxuICAgIGxldCBfZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBfZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1zZWN0aW9uJyk7XG4gICAgaWYgKCdkdWVEYXRlJyBpbiB0YXNrKSB7XG4gICAgICBfZHVlRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG4gICAgfTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKF9kdWVEYXRlQ29udGFpbmVyKTtcbiAgXG4gIFxuICBcbiAgXG4gICAgbGV0IF9jb2xsYXBzZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfY29sbGFwc2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1jb250YWluZXInKTtcbiAgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChfY29sbGFwc2VkQ29udGFpbmVyKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX25vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX25vdGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbnRhaW5lcicpO1xuICAgICdub3RlcycgaW4gdGFzayA/IF9ub3Rlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2subm90ZXMgOiBcbiAgICAgICAgICAgICAgX25vdGVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ05vIG5vdGVzIGZvciB0aGlzIHRhc2suIEVkaXQgdGFzayB0byBhZGQgbm90ZXMnO1xuICAgIFxuICAgIF9jb2xsYXBzZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoX25vdGVzQ29udGFpbmVyKTtcbiAgICBcbiAgXG4gIFxuICBcbiAgICByZXR1cm4ge2xpc3QsIGNoZWNrQm94LCBsYWJlbCwgZWRpdEJ1dHRvbn1cbiAgfVxuICBcblxuXG5cblxuICBjb25zdCBjcmVhdGVBbGxUb2Rvc0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdW5vcmRlcmRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJkTGlzdCk7XG5cbiAgICBsZXQgYWxsVGFza3NBcnJheSA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcblxuICAgIGFsbFRhc2tzQXJyYXkuZm9yRWFjaChfdGFzayA9PiB7XG5cbiAgICAgIGxldCBsaXN0RWxlbWVudCA9IGxpc3RGYWN0b3J5KF90YXNrKTtcblxuICAgICAgdW5vcmRlcmRMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtZW50Lmxpc3QpO1xuXG5cbiAgICAgIGxldCB0b2RvSW5kZXggPSB0b2RvLmZpbmRJbmRleE9mKF90YXNrLCBhbGxUYXNrc0FycmF5KTtcblxuICAgICAgbGlzdEVsZW1lbnQuY2hlY2tCb3guZGF0YXNldFsndGFza0luZGV4J10gPSB0b2RvSW5kZXg7XG4gICAgICBsaXN0RWxlbWVudC5jaGVja0JveC5uYW1lID0gYHRhc2ske3RvZG9JbmRleH1gO1xuICAgICAgbGlzdEVsZW1lbnQuY2hlY2tCb3guaWQgPSBgdGFzayR7dG9kb0luZGV4fWA7XG5cblxuXG4gICAgICBsaXN0RWxlbWVudC5sYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHt0b2RvSW5kZXh9YCk7XG5cblxuICAgICAgbGlzdEVsZW1lbnQuZWRpdEJ1dHRvbi5kYXRhc2V0Wyd0YXNrSW5kZXgnXSA9IHRvZG9JbmRleDtcbiAgICAgIGxpc3RFbGVtZW50LmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvLnRhZ0VkaXRTdWJtaXRCdXR0b25XaXRoSW5kZXgpXG5cblxuXG5cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3RDb250YWluZXJcblxuXG4gIH07XG5cblxuICBjb25zdCBjcmVhdGVQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBfbGlzdE9mVGFza3MgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG4gICAgY29uc3QgX2xpc3RPZlByb2plY3RzID0gdG9kby5nZXRQcm9qZWN0TGlzdCgpO1xuXG5cbiAgICBpZiAoX2xpc3RPZlByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zdCBfbm9Qcm9qZWN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIF9ub1Byb2plY3RNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHByb2plY3RzIHlldCBjcmVhdGVkLCBjbGljayBidXR0b24gdG8gY3JlYXRlIGEgbmV3IHByb2plY3QnXG5cbiAgICAgIHJldHVybiBfbm9Qcm9qZWN0TWVzc2FnZTtcbiAgICB9O1xuXG5cblxuXG5cbiAgICBjb25zdCBfcGFnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIF9saXN0T2ZQcm9qZWN0cy5mb3JFYWNoKF9wcm9qZWN0TmFtZSA9PiB7XG4gICAgICBjb25zdCBfcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgX3Byb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgIF9wYWdlRGlzcGxheS5hcHBlbmRDaGlsZChfcHJvakNvbnRhaW5lcik7XG5cblxuICAgICAgY29uc3QgX3Byb2pIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgX3Byb2pIZWFkZXIudGV4dENvbnRlbnQgPSBfcHJvamVjdE5hbWU7XG4gICAgICBfcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChfcHJvakhlYWRlcik7XG5cblxuICAgICAgY29uc3QgX3VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIF9wcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKF91TClcblxuXG4gICAgICBsZXQgX3Rhc2tzQmVsb25naW5nVG9Qcm9qID0gX2xpc3RPZlRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PSBfcHJvamVjdE5hbWUpXG5cbiAgICAgIF90YXNrc0JlbG9uZ2luZ1RvUHJvai5mb3JFYWNoKF90YXNrID0+IHtcblxuICAgICAgICBsZXQgX2xpc3RUYWcgPSBsaXN0RmFjdG9yeShfdGFzaylcblxuICAgICAgICBfdUwuYXBwZW5kQ2hpbGQoX2xpc3RUYWcubGlzdCk7XG5cblxuICAgICAgICBsZXQgX3Rhc2tJbmRleCA9IHRvZG8uZmluZEluZGV4T2YoX3Rhc2ssIF90YXNrc0JlbG9uZ2luZ1RvUHJvaik7XG4gICAgICAgIGxldCBfcHJvakluZGV4ID0gdG9kby5maW5kSW5kZXhPZihfcHJvamVjdE5hbWUsIF9saXN0T2ZQcm9qZWN0cyk7IFxuICAgICAgICBcbiAgICAgICAgX2xpc3RUYWcuY2hlY2tCb3guZGF0YXNldFsncHJvamVjdEluZGV4J10gPSBfcHJvakluZGV4O1xuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5kYXRhc2V0Wyd0YXNrSW5kZXgnXSA9IF90YXNrSW5kZXg7IFxuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5uYW1lID0gYG9iaiR7X3Byb2pJbmRleH10YXNrJHtfdGFza0luZGV4fWA7ICAgIFxuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5pZCA9IGBvYmoke19wcm9qSW5kZXh9dGFzayR7X3Rhc2tJbmRleH1gOyAgXG4gIFxuICBcblxuXG4gICAgICAgIF9saXN0VGFnLmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYG9iaiR7X3Byb2pJbmRleH10YXNrJHtfdGFza0luZGV4fWApO1xuXG4gICAgICB9KTtcbiAgICAgIFxuXG4gICAgfSlcblxuXG5cblxuICAgIHJldHVybiBfcGFnZURpc3BsYXlcblxuXG5cblxuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNyZWF0ZVBhZ2VMaXN0ID0gKGJ1dHRvblNlbGVjdGVkKSA9PiB7XG4gICAgbGV0IG1lbnVTZWxlY3RlZCA9IGJ1dHRvblNlbGVjdGVkLnRleHRDb250ZW50XG5cbiAgICBjb25zdCByZXR1cm5lZExpc3QgPSB7XG4gICAgICAnQWxsIFRvRG9zJzogY3JlYXRlQWxsVG9kb3NMaXN0LFxuICAgICAgLy8gJ1RvZGF5JzogdG9kYXlMaXN0LFxuICAgICAgLy8gJ1RvbW9ycm93JzogdG9tb3Jyb3dMaXN0LFxuICAgICAgJ1Byb2plY3RzJzogY3JlYXRlUHJvamVjdHNMaXN0LFxuXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHJldHVybmVkTGlzdFttZW51U2VsZWN0ZWRdKCk7XG4gICAgXG4gIH1cblxuICBcblxuICBjb25zdCBfY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuXG4gIGNvbnN0IEhJR0hfUFJJT1JJVFkgPSAncmVkJztcbiAgY29uc3QgTUVESVVNX1BSSU9SSVRZID0gJ29yYW5nZSc7XG4gIGNvbnN0IExPV19QUklPUklUWSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG5cblxuXG4gIFxuXG5cblxuICByZXR1cm4geyBjcmVhdGVEaXNwbGF5SGVhZGVyLCBjcmVhdGVBZGRCdXR0b24sIGNyZWF0ZVBhZ2VMaXN0IH1cbn0pKCk7XG5cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudHMgfSIsImltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF90b2RvTGlzdFxuICB9O1xuXG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9wcm9qZWN0TGlzdDtcbiAgfTtcblxuXG4gIGNvbnN0IGNhcHR1cmVGb3JtRGF0YSA9IChmb3JtKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKVxuICB9O1xuXG5cbiAgY29uc3QgZmluZEluZGV4T2YgPSAoaXRlbSwgbGlzdCkgPT4ge1xuICAgIHJldHVybiBsaXN0LmluZGV4T2YoaXRlbSk7XG4gIH07XG5cblxuICBjb25zdCB0YWdFZGl0U3VibWl0QnV0dG9uV2l0aEluZGV4ID0gKGUpID0+IHtcbiAgICBsZXQgX3NhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jaGFuZ2VzJyk7XG4gICAgbGV0IF9pbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQudGFza0luZGV4XG5cbiAgICBfc2F2ZUJ1dHRvbi5kYXRhc2V0LnRhc2tJbmRleCA9IF9pbmRleDsgICAgXG4gIH07XG5cblxuXG4gIGNvbnN0IHNhdmVFZGl0Q2hhbmdlcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IF9lZGl0ZWRGb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfZWRpdEZvcm0pO1xuXG4gICAgbGV0IF9saXN0T2ZUb2RvcyA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcblxuICAgIGxldCBfb2JqSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJbmRleDtcbiAgICBjb25zb2xlLmxvZyhlKTtcblxuICAgIGxldCBfdG9kb09iaiA9IF9saXN0T2ZUb2Rvc1tfb2JqSW5kZXhdO1xuXG4gICAgbGV0IG5ld1RpdGxlID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC10aXRsZScpO1xuICAgIC8vIGxldCBuZXdEZXNjcmlwdGlvbiA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgbmV3Tm90ZXMgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LW5vdGVzJyk7XG4gICAgbGV0IG5ld0R1ZURhdGUgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LWR1ZS1kYXRlJyk7XG4gICAgbGV0IG5ld1ByaW9yaXR5ID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1wcmlvcml0eScpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1wcm9qZWN0Jyk7XG5cbiAgICBfdG9kb09iai50aXRsZSA9IG5ld1RpdGxlO1xuXG5cbiAgICBuZXdEdWVEYXRlID09ICcnPyBkZWxldGUgX3RvZG9PYmouZHVlRGF0ZTogX3RvZG9PYmouZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG5cbiAgICBuZXdOb3RlcyA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLm5vdGVzOiBfdG9kb09iai5ub3RlcyA9IG5ld05vdGVzO1xuXG4gICAgbmV3UHJpb3JpdHkgPT0gJyc/IGRlbGV0ZSBfdG9kb09iai5wcmlvcml0eTogX3RvZG9PYmoucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICAgIG5ld1Byb2plY3QgPT0gJyc/IGRlbGV0ZSBfdG9kb09iai5wcm9qZWN0OiBfdG9kb09iai5wcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIFxuICAgIF9lZGl0Rm9ybS5yZXNldCgpO1xuICAgIHJlbmRlclRvZG8uY2xvc2VGb3JtKGVkaXRGb3JtUG9wdXApO1xuXG4gICAgbGV0IF9jdXJyZW50TWVudSA9IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCk7XG4gICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKF9jdXJyZW50TWVudSk7XG5cbiAgfTtcblxuXG5cblxuICBcbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoZGF0YSkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGRhdGEuZ2V0KCd0aXRsZScpO1xuICAgIC8vIGxldCBkZXNjcmlwdGlvbiA9IGRhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBkdWVEYXRlID0gZGF0YS5nZXQoJ2R1ZS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZGF0YS5nZXQoJ3ByaW9yaXR5Jyk7XG4gICAgbGV0IGlzVG9kb0RvbmUgPSAnbm8nO1xuICAgIGxldCBwcm9qZWN0ID0gZGF0YS5nZXQoJ3BhcnQtb2YtcHJvamVjdCcpO1xuXG5cbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGlzVG9kb0RvbmUgfVxuXG4gIH07XG5cblxuICBjb25zdCBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLl9tZW51QnV0dG9uc10uZmlsdGVyKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSlbMF07XG4gIH07XG5cblxuXG4gIGNvbnN0IGZpbmRDdXJyZW50Rm9ybUluVXNlID0gKCkgPT4ge1xuXG4gICAgbGV0IGFsbEZvcm1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNvbnRhaW5lcicpXTtcbiAgICBcbiAgICBsZXQgY3VycmVudEZvcm0gPSBhbGxGb3Jtcy5maWx0ZXIoZm9ybSA9PiBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1mb3JtLWludXNlJykpWzBdXG4gXG4gICAgcmV0dXJuIGN1cnJlbnRGb3JtO1xuICB9O1xuXG5cblxuICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZEJ1dHRvbiA9IChldmVudCkgPT4ge1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRCdXR0b24gPSBldmVudC50YXJnZXQ7XG5cbiAgICBfbWVudUJ1dHRvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1tZW51LXNlbGVjdGVkJykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBzZWxlY3RlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKTtcblxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RUb1Rhc2tPYmogPSAocHJvak5hbWUsIHByb2pUYXNrcykgPT4ge1xuXG4gICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgICAgX3RvZG9MaXN0LmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICh0YXNrTmFtZSA9PSB0b2RvLnRpdGxlKSB7XG4gICAgICAgICAgdG9kby5wcm9qZWN0ID0gcHJvak5hbWVcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cblxuICAgIC8vIF90b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIC8vICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgIC8vICAgICBpZiAodG9kby50aXRsZSA9PSB0YXNrTmFtZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IF9wcm9qZWN0RGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfcHJvamVjdEZvcm0pO1xuXG4gICAgbGV0IF9wcm9qZWN0TmFtZSA9IF9wcm9qZWN0RGF0YS5nZXQoJ3Byb2plY3QtbmFtZScpO1xuXG4gICAgaWYgKF9wcm9qZWN0TGlzdC5pbmNsdWRlcyhfcHJvamVjdE5hbWUpKSB7XG4gICAgICBhbGVydCgncHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBfcHJvamVjdExpc3QucHVzaChfcHJvamVjdE5hbWUpO1xuXG5cbiAgICBsZXQgX3Rhc2tBZGRlZFRvUHJvaiA9IFsuLi50b2RvU2VsZWN0ZWQuc2VsZWN0ZWRPcHRpb25zXS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcblxuICAgIGFkZFByb2plY3RUb1Rhc2tPYmooX3Byb2plY3ROYW1lLCBfdGFza0FkZGVkVG9Qcm9qKVxuXG5cblxuICAgIC8vIHJlbmRlclRvZG8uZGlzcGxheVByb2plY3RQYWdlKF90b2RvTGlzdCk7XG5cblxuICAgIF9wcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIHJlbmRlclRvZG8uY2xvc2VGb3JtKHByb2plY3RGb3JtUG9wdXApOyBcbiAgfVxuXG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIGxldCBfZm9ybURhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3RvZG9Gb3JtKTtcblxuICAgIGxldCBfbmV3VG9kbyA9IHRvZG9GYWN0b3J5KF9mb3JtRGF0YSk7XG5cbiAgICBfdG9kb0xpc3QucHVzaChfbmV3VG9kbyk7XG5cblxuICAgIF90b2RvRm9ybS5yZXNldCgpO1xuICAgIHJlbmRlclRvZG8uY2xvc2VGb3JtKHRvZG9Gb3JtUG9wdXApO1xuICAgIFxuICAgIFxuICAgIGxldCBtZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UobWVudSlcblxuICAgIC8vIHJlbmRlclRvZG8uZGlzcGF5TWVudUl0ZW1zKHBhc3MgaW4gY3VycmVudCBtZW51IHNlbGVjdGVkKVxuXG4gIH07ICAgXG5cblxuXG5cbiAgY29uc3QgX3RvZG9MaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbXBsZXRlIFByZXNlbnRhdGlvblwiLFxuICAgICAgLy8gZGVzY3JpcHRpb246IFwiTXVzdCBjb21wbGV0ZSBhbmQgc2VsbCBwaXRjaCB0byBib2FyZFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTEyLTEwXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIGlzVG9kb0RvbmU6IFwibm9cIixcbiAgICAgIG5vdGVzOiBcIk5vdGVzIG9uIG1lZXRpbmcgcHJlcFwiLFxuICAgICAgcHJvamVjdDogXCJXb3JrXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiRG8gZ3JvY2VyaWVzXCIsXG4gICAgICAvLyBkZXNjcmlwdGlvbjogXCJOZWVkIGZvb29kXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTEtMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIGlzVG9kb0RvbmU6IFwibm9cIixcbiAgICAgIG5vdGVzOiAnZ28gdG8gd2FsbWFydCBjaGVhcCBmb29kJyxcbiAgICAgIHByb2plY3Q6IFwiSG9tZVwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkZpeCBDYXIgSXNzdWVzXCIsXG4gICAgICAvLyBkZXNjcmlwdGlvbjogXCJOZWVkIGZhc3QgY2FyXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTItMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6IFwidnJvb20gdnJvb21cIixcbiAgICAgIHByb2plY3Q6IFwiSG9tZVwiXG4gICAgfVxuICBdO1xuXG5cblxuXG4gIGNvbnN0IF9wcm9qZWN0TGlzdCA9IFsnSG9tZScsICdXb3JrJywgJ0NhciddO1xuXG4gIC8vIGNvbnN0IF9wcm9qZWN0TGlzdCA9IFtdO1xuXG5cblxuXG4gIGNvbnN0IF90b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgY29uc3QgX3Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgY29uc3QgX2VkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJyk7ICBcblxuXG5cbiAgY29uc3QgcHJvakZvcm1TZWxlY3RUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLXNlbGVjdC10YWcnKTtcbiAgY29uc3QgdG9kb0Zvcm1TZWxlY3RUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLXNlbGVjdCcpO1xuICBjb25zdCBlZGl0Rm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcbiAgY29uc3QgdG9kb0Zvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tcG9wdXAnKTtcbiAgY29uc3QgZWRpdEZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tcG9wdXAnKTtcbiAgY29uc3QgcHJvamVjdEZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1wb3B1cCcpO1xuXG5cblxuXG4gIGNvbnN0IF9tZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWJ1dHRvbicpO1xuICBfbWVudUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGhpZ2hsaWdodFNlbGVjdGVkQnV0dG9uKGUpOyAgICBcbiAgICAgIGxldCBjdXJyZW50TWVudSA9IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCk7XG4gICAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoY3VycmVudE1lbnUpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG5cbiAgY29uc3QgX3N1Ym1pdFRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1mb3JtJyk7XG4gIF9zdWJtaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG8pO1xuXG5cblxuICBjb25zdCBfc2F2ZUVkaXRDaGFuZ2VzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtY2hhbmdlcycpO1xuICBfc2F2ZUVkaXRDaGFuZ2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZUVkaXRDaGFuZ2VzKTtcblxuXG4gIGNvbnN0IF9zdWJtaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xuICBfc3VibWl0UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcblxuXG5cbiAgY29uc3QgX2Nsb3NlRm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtZm9ybScpO1xuICBfY2xvc2VGb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShmaW5kQ3VycmVudEZvcm1JblVzZSgpKVxuXG4gICAgfSlcbiAgfSlcblxuXG5cblxuXG4gIFxuXG4gIHJldHVybiB7IHRvZG9Gb3JtUG9wdXAsIGVkaXRGb3JtUG9wdXAsIHByb2plY3RGb3JtUG9wdXAsIHByb2pGb3JtU2VsZWN0VGFnLFxuICAgIHRvZG9Gb3JtU2VsZWN0VGFnLCBlZGl0Rm9ybVNlbGVjdFRhZywgZ2V0VG9kb0xpc3QsIGdldFByb2plY3RMaXN0LCBmaW5kSW5kZXhPZiwgXG4gICAgdGFnRWRpdFN1Ym1pdEJ1dHRvbldpdGhJbmRleCB9XG5cblxufSkoKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10b2RvLWJ1dHRvbicpLmNsaWNrKCk7XG5cbmV4cG9ydCB7IHRvZG8gfVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRzIH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5cblxuY29uc3QgcmVuZGVyVG9kbyA9ICgoKSA9PiB7XG5cblxuICBjb25zdCBvcGVuRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtZm9ybS1pbnVzZScpO1xuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNsb3NlRm9ybSA9IChmb3JtQ2hvc2VuKSA9PiB7XG4gICAgZm9ybUNob3Nlbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWZvcm0taW51c2UnKTtcbiAgICBmb3JtQ2hvc2VuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuXG4gIH07XG5cblxuXG5cbiAgY29uc3QgcHJlZmlsbEVkaXRGb3JtID0gKGUpID0+IHtcblxuICAgIGxldCBfdG9kb0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrSW5kZXhcblxuICAgIGxldCBfYWxsVG9kb0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgbGV0IF9jdXJyZW50VG9kb09iamVjdCA9IF9hbGxUb2RvQXJyYXlbX3RvZG9JbmRleF07XG5cblxuICAgIF9lZGl0VGl0bGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QudGl0bGU7XG4gICAgLy8gX2VkaXREZXNjcmlwdGlvbi52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdub3RlcycpKSB7XG4gICAgICBfZWRpdE5vdGVzLnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0Lm5vdGVzO1xuICAgIH07XG5cbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdkdWVEYXRlJykpIHtcbiAgICAgIF9lZGl0RHVlRGF0ZS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5kdWVEYXRlO1xuICAgIH1cblxuXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgncHJpb3JpdHknKSkge1xuICAgICAgX2VkaXRQcmlvcml0eS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5wcmlvcml0eTtcbiAgICB9XG5cblxuICAgIGlmIChfY3VycmVudFRvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ3Byb2plY3QnKSkge1xuICAgICAgX2VkaXRQcm9qZWN0LnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LnByb2plY3Q7XG4gICAgfVxuXG5cbiAgICAvLyBfZWRpdER1ZURhdGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QuZHVlRGF0ZVxuICAgIC8vIF9lZGl0UHJpb3JpdHkudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QucHJpb3JpdHlcblxuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNsZWFyRGlzcGxheSA9ICgpID0+IHtcbiBcbiAgICB3aGlsZSAoX2NvbnRlbnREaXNwbGF5Lmhhc0NoaWxkTm9kZXMoKSkge1xuIFxuICAgICAgX2NvbnRlbnREaXNwbGF5LnJlbW92ZUNoaWxkKF9jb250ZW50RGlzcGxheS5maXJzdENoaWxkKVxuICAgIH1cbiAgfTtcblxuXG5cbiAgY29uc3QgY2xlYXJPbGRPcHRpb25zID0gKHRhZykgPT4ge1xuICAgIGxldCBvcHRpb25zID0gWy4uLnRhZy5vcHRpb25zXTtcbiAgXG4gICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9IFwiXCIpIHtcbiAgICAgICAgb3B0aW9uLnJlbW92ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICB9O1xuXG5cblxuXG4gIGNvbnN0IGFkZFRvZG9zVG9Gb3JtT3B0aW9ucyA9IChzZWxlY3RUYWcsIGFsbFRvZG9zQXJyYXkpID0+IHtcbiAgICBjbGVhck9sZE9wdGlvbnMoc2VsZWN0VGFnKTtcblxuICAgIGFsbFRvZG9zQXJyYXkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGxldCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcbiAgICAgIHNlbGVjdFRhZy5hZGQobmV3T3B0aW9uKSAgICAgIFxuICAgIH0pO1xuICAgIFxuXG5cbiAgfTtcblxuXG5cblxuICBjb25zdCBhZGRQcm9qZWN0c1RvRm9ybU9wdGlvbnM9IChzZWxlY3RUYWcsIGFsbFByb2plY3RzQXJyYXkpID0+IHtcbiAgICBjbGVhck9sZE9wdGlvbnMoc2VsZWN0VGFnKTtcblxuICAgIGFsbFByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RcbiAgICAgIHNlbGVjdFRhZy5hZGQob3B0aW9uKSAgICAgIFxuICAgIH0pO1xuICB9O1xuXG5cblxuXG5cbiAgY29uc3QgdG9nZ2xlVGFza0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICBsZXQgdGFzayA9IGUudGFyZ2V0LmxhYmVsc1swXTtcblxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaXMgY29tcGxldGVcIilcblxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGFzayBpbmNvbXBsZXRlXCIpO1xuICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRvbmUnKVxuXG4gICAgfVxuXG4gIH07XG5cblxuXG5cblxuICBjb25zdCB1cGRhdGVQYWdlID0gKG1lbnVCdXR0b25TZWxlY3RlZCkgPT4ge1xuXG4gICAgY2xlYXJEaXNwbGF5KCk7XG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHMuY3JlYXRlRGlzcGxheUhlYWRlcihtZW51QnV0dG9uU2VsZWN0ZWQpKVxuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZVBhZ2VMaXN0KG1lbnVCdXR0b25TZWxlY3RlZCkpXG5cblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50cy5jcmVhdGVBZGRCdXR0b24obWVudUJ1dHRvblNlbGVjdGVkKSk7XG5cblxuXG5cblxuICBcbiAgfVxuXG5cblxuICBjb25zdCBfY29udGVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cblxuICBjb25zdCBfZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKTsgIFxuXG5cbiAgY29uc3QgX2VkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XG4gIC8vIGNvbnN0IF9lZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBfZWRpdE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbm90ZXMnKTtcbiAgY29uc3QgX2VkaXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlLWRhdGUnKTtcbiAgY29uc3QgX2VkaXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByaW9yaXR5Jyk7XG4gIGNvbnN0IF9lZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKVxuXG5cblxuIFxuICByZXR1cm4geyBvcGVuRm9ybSwgY2xvc2VGb3JtLCB1cGRhdGVQYWdlLCBhZGRUb2Rvc1RvRm9ybU9wdGlvbnMsXG4gICAgICAgICAgYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zLCB0b2dnbGVUYXNrQ29tcGxldGUsIHByZWZpbGxFZGl0Rm9ybSB9XG5cblxufSkoKTtcblxuXG5leHBvcnQgeyByZW5kZXJUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=