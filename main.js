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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n.edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n}\n\n\n.edit-todo-form,\n.new-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.todo-detail {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.detail-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-container {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n/* .new-projects-popup {\n  display: none;\n} */\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;;AAGA;;;;EAIE,aAAa;;AAEf;;;AAGA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,6BAA6B;;AAE/B;;AAEA;EACE,gCAAgC;AAClC;;;;;;;;;;AAUA;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB;sCACoC;EACpC,yBAAyB;AAC3B;;;AAGA;EACE,kBAAkB;AACpB;;;AAGA;EACE,6BAA6B;;AAE/B;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;;;;AAKA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;;;;AAIA;;EAEE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,QAAQ;EACR,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;;AAEpB;;AAEA;;EAEE,iBAAiB;AACnB;;;;;;;AAOA;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;;AAGA;EACE,kBAAkB;;EAElB,4BAA4B;AAC9B;;;;;AAKA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;;AAEZ;;;AAGA;;EAEE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;;AAGA;EACE,uBAAuB;EACvB,aAAa;;AAEf;;;AAGA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;;AAGA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB;;;;AAIA;;GAEG","sourcesContent":["body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n.edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n}\n\n\n.edit-todo-form,\n.new-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.todo-detail {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.detail-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-container {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n/* .new-projects-popup {\n  display: none;\n} */\n"],"sourceRoot":""}]);
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
  




  const createAllTodosList = () => {
    const listContainer = document.createElement('div');

    const unorderdList = document.createElement('ul');
    listContainer.appendChild(unorderdList);

    let allTasksArray = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    allTasksArray.forEach(task => {
      let todoIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(task, allTasksArray);

      const listedTask = document.createElement('li');
      listedTask.classList.add('list');


      const shownContent = document.createElement('div');
      shownContent.classList.add('shown-content');
      listedTask.appendChild(shownContent);


      let inputCheckBox = document.createElement('input');
      inputCheckBox.setAttribute('type', 'checkbox');
      inputCheckBox.addEventListener('click', (e) => {
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.toggleTaskComplete(e);
        // editTodo.updateObject();
      });



      inputCheckBox.dataset['taskIndex'] = todoIndex; 
      inputCheckBox.name = `task${todoIndex}`;  
      inputCheckBox.id = `task${todoIndex}`;  
      inputCheckBox.classList.add('checkbox');
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
          priorityMarker.style.backgroundColor = HIGH_PRIORITY
          break;
        
        case 'medium':
          priorityMarker.style.display = 'inline-block'
          priorityMarker.style.backgroundColor = MEDIUM_PRIORITY
          break;
        
        case 'low':
          console.log(task.priority);
          priorityMarker.style.display = 'inline-block'
          priorityMarker.style.backgroundColor = LOW_PRIORITY
          break;
      
        default:
          priorityMarker.style.display = 'none'
          break;
      };     

      shownContent.appendChild(priorityMarker);





      const editButton = document.createElement('button');
      editButton.dataset['taskIndex'] = todoIndex; 
      editButton.classList.add('hide');
      editButton.textContent = 'edit';
      editButton.addEventListener('click', (e) => {
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormPopup);
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addProjectsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList())
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.prefillEditForm(e);
        ___WEBPACK_IMPORTED_MODULE_0__.todo.tagEditSubmitButtonWithIndex(e);
      });

      shownContent.appendChild(editButton);






      const expandButton = document.createElement('button');
      expandButton.classList.add('hide', 'expand');
      expandButton.textContent = 'expand';
      expandButton.addEventListener('click', function() {
        this.classList.toggle('active');
        // console.log(this);
        let hiddenContent = this.parentElement.nextElementSibling;
        if (hiddenContent.style.display === 'block') {
          hiddenContent.style.display = 'none';
        } else {
          hiddenContent.style.display = 'block';
        }
      });
      
      shownContent.appendChild(expandButton);






      const projectContainer = document.createElement('p');
      projectContainer.classList.add('project-container');
      if ('project' in task) {
        projectContainer.textContent = `Project: ${task.project}`;
      };
      shownContent.appendChild(projectContainer);




      const dueDateContainer = document.createElement('p');
      dueDateContainer.classList.add('due-date')

      dueDateContainer.textContent = `Due: ${task.dueDate}`;
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






    });

    return listContainer


  };





  const createPageList = (buttonSelected) => {
    let menuSelected = buttonSelected.textContent

    const returnedList = {
      'All ToDos': createAllTodosList,
      // 'Today': todayList,
      // 'Tomorrow': tomorrowList,
      // 'Projects': projectsList,

    };


    return returnedList[menuSelected]();
    
  }



  

  const _contentContainer = document.querySelector('.todo-display');


  const HIGH_PRIORITY = 'red';
  const MEDIUM_PRIORITY = 'orange'
  const LOW_PRIORITY = 'cornflowerblue'



  



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
  _saveEditChangesButton.addEventListener('click', saveEditChanges)



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4udG9kby1hcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLnNpZGUtYmFyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmFsbC10b2RvcyxcXG4uZHVlLXRvZGF5LFxcbi5kdWUtdG9tb3Jyb3csXFxuLmFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tZGlzcGxheSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7ICovXFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWRpc3BsYXkgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5cXG4uZGlzcGxheS1tZW51LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFxufVxcblxcblxcbi5wcmlvcml0eS1tYXJrZXIge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcblxcblxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbjpob3ZlcixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDhDQkE7XFxuICBjb2xvcjogIzAwOENCQTtcXG59XFxuXFxuXFxuXFxuLnRvZG8tZm9ybS1wb3B1cCxcXG4ubmV3LXByb2plY3QtcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi54LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi54LWJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uY2FuY2VsLFxcbi5jYW5jZWwtY2hhbmdlcyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0OmhvdmVyIC5oaWRle1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLmxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgKi9cXG59XFxuXFxuXFxuXFxuXFxuLmVkaXQtdG9kby1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSxcXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG4udG9kby1kZXRhaWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcbi5jdXJyZW50LW1lbnUtc2VsZWN0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyAqL1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2hvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5cXG5cXG4vKiAubmV3LXByb2plY3RzLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztBQUNYOzs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7OztBQUdBOzs7O0VBSUUsYUFBYTs7QUFFZjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7Ozs7Ozs7OztBQVVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QjtzQ0FDb0M7RUFDcEMseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSw2QkFBNkI7O0FBRS9COzs7QUFHQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOzs7OztBQUtBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOzs7O0FBSUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COzs7Ozs7O0FBT0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0Usa0JBQWtCOztFQUVsQiw0QkFBNEI7QUFDOUI7Ozs7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsVUFBVTs7QUFFWjs7O0FBR0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7O0FBRWY7OztBQUdBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7OztBQUlBOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4udG9kby1hcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLnNpZGUtYmFyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmFsbC10b2RvcyxcXG4uZHVlLXRvZGF5LFxcbi5kdWUtdG9tb3Jyb3csXFxuLmFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG4uZHJvcGRvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tZGlzcGxheSB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7ICovXFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWRpc3BsYXkgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5cXG4uZGlzcGxheS1tZW51LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFxufVxcblxcblxcbi5wcmlvcml0eS1tYXJrZXIge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcblxcblxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbjpob3ZlcixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDhDQkE7XFxuICBjb2xvcjogIzAwOENCQTtcXG59XFxuXFxuXFxuXFxuLnRvZG8tZm9ybS1wb3B1cCxcXG4ubmV3LXByb2plY3QtcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi54LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi54LWJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uY2FuY2VsLFxcbi5jYW5jZWwtY2hhbmdlcyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0OmhvdmVyIC5oaWRle1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLmxpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgKi9cXG59XFxuXFxuXFxuXFxuXFxuLmVkaXQtdG9kby1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSxcXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDYwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG4udG9kby1kZXRhaWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcbi5jdXJyZW50LW1lbnUtc2VsZWN0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcXG59XFxuXFxuXFxuLmR1ZS1kYXRlIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyAqL1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2hvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5cXG5cXG4vKiAubmV3LXByb2plY3RzLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnRzID0gKCgpID0+IHtcblxuXG4gIGNvbnN0IGNyZWF0ZURpc3BsYXlIZWFkZXIgPSAoaGlnaGxpZ2h0ZWRCdXR0b24pID0+IHtcblxuICAgIGxldCB0aXRsZSA9IGhpZ2hsaWdodGVkQnV0dG9uLnRleHRDb250ZW50O1xuICAgIFxuICAgIGNvbnN0IF9oZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBfaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbWVudS1oZWFkZXInKVxuICAgIF9jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250YWluZXIpO1xuXG5cbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIF9oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuXG4gICAgcmV0dXJuIF9oZWFkZXJDb250YWluZXJcblxuICB9O1xuXG5cblxuICBjb25zdCBjcmVhdGVBZGRCdXR0b24gPSAoY3VycmVudE1lbnUpID0+IHtcblxuICAgIGxldCBjdXJyZW50TWVudVRpdGxlID0gY3VycmVudE1lbnUudGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcblxuICAgIGlmIChjdXJyZW50TWVudVRpdGxlID09ICdQcm9qZWN0cycpIHtcbiAgICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8ucHJvamVjdEZvcm1Qb3B1cClcbiAgICAgICAgcmVuZGVyVG9kby5hZGRUb2Rvc1RvRm9ybU9wdGlvbnModG9kby5wcm9qRm9ybVNlbGVjdFRhZywgdG9kby5nZXRUb2RvTGlzdCgpKVxuICAgICAgfSlcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctdG9kby1idXR0b24nKTtcbiAgICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVuZGVyVG9kby5vcGVuRm9ybSh0b2RvLnRvZG9Gb3JtUG9wdXApXG4gICAgICAgIHJlbmRlclRvZG8uYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zKHRvZG8udG9kb0Zvcm1TZWxlY3RUYWcsIHRvZG8uZ2V0UHJvamVjdExpc3QoKSlcblxuICAgICAgfSlcblxuICAgIH1cblxuICAgIHJldHVybiB0b2RvQnV0dG9uXG4gIH07XG4gIFxuXG5cblxuXG4gIGNvbnN0IGNyZWF0ZUFsbFRvZG9zTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB1bm9yZGVyZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmRMaXN0KTtcblxuICAgIGxldCBhbGxUYXNrc0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgYWxsVGFza3NBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgbGV0IHRvZG9JbmRleCA9IHRvZG8uZmluZEluZGV4T2YodGFzaywgYWxsVGFza3NBcnJheSk7XG5cbiAgICAgIGNvbnN0IGxpc3RlZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdGVkVGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cblxuICAgICAgY29uc3Qgc2hvd25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzaG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2hvd24tY29udGVudCcpO1xuICAgICAgbGlzdGVkVGFzay5hcHBlbmRDaGlsZChzaG93bkNvbnRlbnQpO1xuXG5cbiAgICAgIGxldCBpbnB1dENoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0Q2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICBpbnB1dENoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcmVuZGVyVG9kby50b2dnbGVUYXNrQ29tcGxldGUoZSk7XG4gICAgICAgIC8vIGVkaXRUb2RvLnVwZGF0ZU9iamVjdCgpO1xuICAgICAgfSk7XG5cblxuXG4gICAgICBpbnB1dENoZWNrQm94LmRhdGFzZXRbJ3Rhc2tJbmRleCddID0gdG9kb0luZGV4OyBcbiAgICAgIGlucHV0Q2hlY2tCb3gubmFtZSA9IGB0YXNrJHt0b2RvSW5kZXh9YDsgIFxuICAgICAgaW5wdXRDaGVja0JveC5pZCA9IGB0YXNrJHt0b2RvSW5kZXh9YDsgIFxuICAgICAgaW5wdXRDaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGlucHV0Q2hlY2tCb3gpO1xuXG5cblxuICAgICAgbGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgaW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHt0b2RvSW5kZXh9YCk7XG4gICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuXG5cblxuICAgICAgY29uc3QgcHJpb3JpdHlNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1hcmtlcicpO1xuXG4gICAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSElHSF9QUklPUklUWVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBNRURJVU1fUFJJT1JJVFlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgY29uc29sZS5sb2codGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gTE9XX1BSSU9SSVRZXG4gICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9OyAgICAgXG5cbiAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eU1hcmtlcik7XG5cblxuXG5cblxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZWRpdEJ1dHRvbi5kYXRhc2V0Wyd0YXNrSW5kZXgnXSA9IHRvZG9JbmRleDsgXG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcmVuZGVyVG9kby5vcGVuRm9ybSh0b2RvLmVkaXRGb3JtUG9wdXApO1xuICAgICAgICByZW5kZXJUb2RvLmFkZFByb2plY3RzVG9Gb3JtT3B0aW9ucyh0b2RvLmVkaXRGb3JtU2VsZWN0VGFnLCB0b2RvLmdldFByb2plY3RMaXN0KCkpXG4gICAgICAgIHJlbmRlclRvZG8ucHJlZmlsbEVkaXRGb3JtKGUpO1xuICAgICAgICB0b2RvLnRhZ0VkaXRTdWJtaXRCdXR0b25XaXRoSW5kZXgoZSk7XG4gICAgICB9KTtcblxuICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG5cblxuXG5cblxuICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScsICdleHBhbmQnKTtcbiAgICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdleHBhbmQnO1xuICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICBsZXQgaGlkZGVuQ29udGVudCA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChoaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICBoaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXG5cblxuXG5cblxuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgIGlmICgncHJvamVjdCcgaW4gdGFzaykge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7dGFzay5wcm9qZWN0fWA7XG4gICAgICB9O1xuICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG5cblxuXG4gICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpXG5cbiAgICAgIGR1ZURhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBgRHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuXG5cblxuXG5cblxuICAgICAgY29uc3QgY29sbGFwc2VkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb2xsYXBzZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kZXRhaWwnKTtcbiAgICAgIGxpc3RlZFRhc2suYXBwZW5kQ2hpbGQoY29sbGFwc2VkQ29udGFpbmVyKTtcblxuXG5cbiAgICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBub3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtY29udGFpbmVyJyk7XG4gICAgICBpZiAoJ25vdGVzJyBpbiB0YXNrKSB7XG4gICAgICAgIG5vdGVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGFzay5ub3RlcztcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0NvbnRhaW5lcik7XG5cblxuXG5cblxuXG4gICAgICB1bm9yZGVyZExpc3QuYXBwZW5kQ2hpbGQobGlzdGVkVGFzayk7XG5cblxuXG5cblxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdENvbnRhaW5lclxuXG5cbiAgfTtcblxuXG5cblxuXG4gIGNvbnN0IGNyZWF0ZVBhZ2VMaXN0ID0gKGJ1dHRvblNlbGVjdGVkKSA9PiB7XG4gICAgbGV0IG1lbnVTZWxlY3RlZCA9IGJ1dHRvblNlbGVjdGVkLnRleHRDb250ZW50XG5cbiAgICBjb25zdCByZXR1cm5lZExpc3QgPSB7XG4gICAgICAnQWxsIFRvRG9zJzogY3JlYXRlQWxsVG9kb3NMaXN0LFxuICAgICAgLy8gJ1RvZGF5JzogdG9kYXlMaXN0LFxuICAgICAgLy8gJ1RvbW9ycm93JzogdG9tb3Jyb3dMaXN0LFxuICAgICAgLy8gJ1Byb2plY3RzJzogcHJvamVjdHNMaXN0LFxuXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHJldHVybmVkTGlzdFttZW51U2VsZWN0ZWRdKCk7XG4gICAgXG4gIH1cblxuXG5cbiAgXG5cbiAgY29uc3QgX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cblxuICBjb25zdCBISUdIX1BSSU9SSVRZID0gJ3JlZCc7XG4gIGNvbnN0IE1FRElVTV9QUklPUklUWSA9ICdvcmFuZ2UnXG4gIGNvbnN0IExPV19QUklPUklUWSA9ICdjb3JuZmxvd2VyYmx1ZSdcblxuXG5cbiAgXG5cblxuXG4gIHJldHVybiB7IGNyZWF0ZURpc3BsYXlIZWFkZXIsIGNyZWF0ZUFkZEJ1dHRvbiwgY3JlYXRlUGFnZUxpc3QgfVxufSkoKTtcblxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50cyB9IiwiaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCB0b2RvID0gKCgpID0+IHtcblxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gX3RvZG9MaXN0XG4gIH07XG5cblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gX3Byb2plY3RMaXN0O1xuICB9O1xuXG5cbiAgY29uc3QgY2FwdHVyZUZvcm1EYXRhID0gKGZvcm0pID0+IHtcbiAgICByZXR1cm4gbmV3IEZvcm1EYXRhKGZvcm0pXG4gIH07XG5cblxuICBjb25zdCBmaW5kSW5kZXhPZiA9IChpdGVtLCBsaXN0KSA9PiB7XG4gICAgcmV0dXJuIGxpc3QuaW5kZXhPZihpdGVtKTtcbiAgfTtcblxuXG4gIGNvbnN0IHRhZ0VkaXRTdWJtaXRCdXR0b25XaXRoSW5kZXggPSAoZSkgPT4ge1xuICAgIGxldCBfc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNoYW5nZXMnKTtcbiAgICBsZXQgX2luZGV4ID0gZS50YXJnZXQuZGF0YXNldC50YXNrSW5kZXhcblxuICAgIF9zYXZlQnV0dG9uLmRhdGFzZXQudGFza0luZGV4ID0gX2luZGV4OyAgICBcbiAgfTtcblxuXG5cbiAgY29uc3Qgc2F2ZUVkaXRDaGFuZ2VzID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgX2VkaXRlZEZvcm1EYXRhID0gY2FwdHVyZUZvcm1EYXRhKF9lZGl0Rm9ybSk7XG5cbiAgICBsZXQgX2xpc3RPZlRvZG9zID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgbGV0IF9vYmpJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQudGFza0luZGV4O1xuXG4gICAgbGV0IF90b2RvT2JqID0gX2xpc3RPZlRvZG9zW19vYmpJbmRleF07XG5cbiAgICBsZXQgbmV3VGl0bGUgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LXRpdGxlJyk7XG4gICAgLy8gbGV0IG5ld0Rlc2NyaXB0aW9uID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBuZXdOb3RlcyA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtbm90ZXMnKTtcbiAgICBsZXQgbmV3RHVlRGF0ZSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtZHVlLWRhdGUnKTtcbiAgICBsZXQgbmV3UHJpb3JpdHkgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LXByaW9yaXR5Jyk7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LXByb2plY3QnKTtcblxuICAgIF90b2RvT2JqLnRpdGxlID0gbmV3VGl0bGU7XG5cblxuICAgIG5ld0R1ZURhdGUgPT0gJyc/IGRlbGV0ZSBfdG9kb09iai5kdWVEYXRlOiBfdG9kb09iai5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblxuICAgIG5ld05vdGVzID09ICcnPyBkZWxldGUgX3RvZG9PYmoubm90ZXM6IF90b2RvT2JqLm5vdGVzID0gbmV3Tm90ZXM7XG5cbiAgICBuZXdQcmlvcml0eSA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLnByaW9yaXR5OiBfdG9kb09iai5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgbmV3UHJvamVjdCA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLnByb2plY3Q6IF90b2RvT2JqLnByb2plY3QgPSBuZXdQcm9qZWN0O1xuXG4gICAgXG4gICAgX2VkaXRGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZWRpdEZvcm1Qb3B1cCk7XG5cbiAgICBsZXQgX2N1cnJlbnRNZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoX2N1cnJlbnRNZW51KTtcblxuICB9O1xuXG5cblxuXG4gIFxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gZGF0YS5nZXQoJ3RpdGxlJyk7XG4gICAgLy8gbGV0IGRlc2NyaXB0aW9uID0gZGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGR1ZURhdGUgPSBkYXRhLmdldCgnZHVlLWRhdGUnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkYXRhLmdldCgncHJpb3JpdHknKTtcbiAgICBsZXQgaXNUb2RvRG9uZSA9ICdubyc7XG4gICAgbGV0IHByb2plY3QgPSBkYXRhLmdldCgncGFydC1vZi1wcm9qZWN0Jyk7XG5cblxuICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgaXNUb2RvRG9uZSB9XG5cbiAgfTtcblxuXG4gIGNvbnN0IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uX21lbnVCdXR0b25zXS5maWx0ZXIoYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpKVswXTtcbiAgfTtcblxuXG5cbiAgY29uc3QgZmluZEN1cnJlbnRGb3JtSW5Vc2UgPSAoKSA9PiB7XG5cbiAgICBsZXQgYWxsRm9ybXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyJyldO1xuICAgIFxuICAgIGxldCBjdXJyZW50Rm9ybSA9IGFsbEZvcm1zLmZpbHRlcihmb3JtID0+IGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LWZvcm0taW51c2UnKSlbMF1cbiBcbiAgICByZXR1cm4gY3VycmVudEZvcm07XG4gIH07XG5cblxuXG4gIGNvbnN0IGhpZ2hsaWdodFNlbGVjdGVkQnV0dG9uID0gKGV2ZW50KSA9PiB7XG5cbiAgICBjb25zdCBzZWxlY3RlZEJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcblxuICAgIF9tZW51QnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNlbGVjdGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpO1xuXG4gIH07XG5cblxuICBjb25zdCBjcmVhdGVUb2RvID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgbGV0IF9mb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfdG9kb0Zvcm0pO1xuXG4gICAgbGV0IF9uZXdUb2RvID0gdG9kb0ZhY3RvcnkoX2Zvcm1EYXRhKTtcblxuICAgIF90b2RvTGlzdC5wdXNoKF9uZXdUb2RvKTtcblxuXG4gICAgX3RvZG9Gb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0odG9kb0Zvcm1Qb3B1cCk7XG4gICAgXG4gICAgXG4gICAgbGV0IG1lbnUgPSBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpO1xuICAgIHJlbmRlclRvZG8udXBkYXRlUGFnZShtZW51KVxuXG4gICAgLy8gcmVuZGVyVG9kby5kaXNwYXlNZW51SXRlbXMocGFzcyBpbiBjdXJyZW50IG1lbnUgc2VsZWN0ZWQpXG5cbiAgfTsgICBcblxuXG5cblxuICBjb25zdCBfdG9kb0xpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29tcGxldGUgUHJlc2VudGF0aW9uXCIsXG4gICAgICAvLyBkZXNjcmlwdGlvbjogXCJNdXN0IGNvbXBsZXRlIGFuZCBzZWxsIHBpdGNoIHRvIGJvYXJkXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTItMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6IFwiTm90ZXMgb24gbWVldGluZyBwcmVwXCIsXG4gICAgICBwcm9qZWN0OiBcIldvcmtcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0aXRsZTogXCJEbyBncm9jZXJpZXNcIixcbiAgICAgIC8vIGRlc2NyaXB0aW9uOiBcIk5lZWQgZm9vb2RcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMS0xOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6ICdnbyB0byB3YWxtYXJ0IGNoZWFwIGZvb2QnLFxuICAgICAgcHJvamVjdDogXCJIb21lXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiRml4IENhciBJc3N1ZXNcIixcbiAgICAgIC8vIGRlc2NyaXB0aW9uOiBcIk5lZWQgZmFzdCBjYXJcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMi0xMFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBpc1RvZG9Eb25lOiBcIm5vXCIsXG4gICAgICBub3RlczogXCJ2cm9vbSB2cm9vbVwiLFxuICAgICAgcHJvamVjdDogXCJIb21lXCJcbiAgICB9XG4gIF07XG5cblxuXG5cbiAgY29uc3QgX3Byb2plY3RMaXN0ID0gWydIb21lJywgJ1dvcmsnLCAnQ2FyJ107XG5cbiAgY29uc3QgX3RvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICBjb25zdCBfcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpO1xuICBjb25zdCBfZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKTsgIFxuXG5cblxuICBjb25zdCBwcm9qRm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tc2VsZWN0LXRhZycpO1xuICBjb25zdCB0b2RvRm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tc2VsZWN0Jyk7XG4gIGNvbnN0IGVkaXRGb3JtU2VsZWN0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICBjb25zdCB0b2RvRm9ybVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS1wb3B1cCcpO1xuICBjb25zdCBlZGl0Rm9ybVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1wb3B1cCcpO1xuICBjb25zdCBwcm9qZWN0Rm9ybVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LXBvcHVwJyk7XG5cblxuXG5cbiAgY29uc3QgX21lbnVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtYnV0dG9uJyk7XG4gIF9tZW51QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRCdXR0b24oZSk7ICAgIFxuICAgICAgbGV0IGN1cnJlbnRNZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcbiAgICAgIHJlbmRlclRvZG8udXBkYXRlUGFnZShjdXJyZW50TWVudSk7XG4gICAgfSk7XG5cbiAgfSk7XG5cblxuICBjb25zdCBfc3VibWl0VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWZvcm0nKTtcbiAgX3N1Ym1pdFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVG9kbyk7XG5cblxuXG4gIGNvbnN0IF9zYXZlRWRpdENoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jaGFuZ2VzJyk7XG4gIF9zYXZlRWRpdENoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlRWRpdENoYW5nZXMpXG5cblxuXG4gIGNvbnN0IF9jbG9zZUZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWZvcm0nKTtcbiAgX2Nsb3NlRm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSlcblxuICAgIH0pXG4gIH0pXG5cblxuXG5cblxuICBcblxuICByZXR1cm4geyB0b2RvRm9ybVBvcHVwLCBlZGl0Rm9ybVBvcHVwLCBwcm9qZWN0Rm9ybVBvcHVwLCBwcm9qRm9ybVNlbGVjdFRhZyxcbiAgICB0b2RvRm9ybVNlbGVjdFRhZywgZWRpdEZvcm1TZWxlY3RUYWcsIGdldFRvZG9MaXN0LCBnZXRQcm9qZWN0TGlzdCwgZmluZEluZGV4T2YsIFxuICAgIHRhZ0VkaXRTdWJtaXRCdXR0b25XaXRoSW5kZXggfVxuXG5cbn0pKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtdG9kby1idXR0b24nKS5jbGljaygpO1xuXG5leHBvcnQgeyB0b2RvIH1cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50cyB9IGZyb20gXCIuL2NyZWF0ZVwiO1xuXG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoKCkgPT4ge1xuXG5cbiAgY29uc3Qgb3BlbkZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWZvcm0taW51c2UnKTtcblxuICB9O1xuXG5cblxuICBjb25zdCBjbG9zZUZvcm0gPSAoZm9ybUNob3NlbikgPT4ge1xuICAgIGZvcm1DaG9zZW4uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1mb3JtLWludXNlJyk7XG4gICAgZm9ybUNob3Nlbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcblxuICB9O1xuXG5cblxuXG4gIGNvbnN0IHByZWZpbGxFZGl0Rm9ybSA9IChlKSA9PiB7XG5cbiAgICBsZXQgX3RvZG9JbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQudGFza0luZGV4XG5cbiAgICBsZXQgX2FsbFRvZG9BcnJheSA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcblxuICAgIGxldCBfY3VycmVudFRvZG9PYmplY3QgPSBfYWxsVG9kb0FycmF5W190b2RvSW5kZXhdO1xuXG5cbiAgICBfZWRpdFRpdGxlLnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LnRpdGxlO1xuICAgIC8vIF9lZGl0RGVzY3JpcHRpb24udmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QuZGVzY3JpcHRpb247XG4gICAgXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgnbm90ZXMnKSkge1xuICAgICAgX2VkaXROb3Rlcy52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5ub3RlcztcbiAgICB9O1xuXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgnZHVlRGF0ZScpKSB7XG4gICAgICBfZWRpdER1ZURhdGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QuZHVlRGF0ZTtcbiAgICB9XG5cblxuICAgIGlmIChfY3VycmVudFRvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ3ByaW9yaXR5JykpIHtcbiAgICAgIF9lZGl0UHJpb3JpdHkudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QucHJpb3JpdHk7XG4gICAgfVxuXG5cbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdwcm9qZWN0JykpIHtcbiAgICAgIF9lZGl0UHJvamVjdC52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5wcm9qZWN0O1xuICAgIH1cblxuXG4gICAgLy8gX2VkaXREdWVEYXRlLnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LmR1ZURhdGVcbiAgICAvLyBfZWRpdFByaW9yaXR5LnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LnByaW9yaXR5XG5cblxuICB9O1xuXG5cblxuICBjb25zdCBjbGVhckRpc3BsYXkgPSAoKSA9PiB7XG4gXG4gICAgd2hpbGUgKF9jb250ZW50RGlzcGxheS5oYXNDaGlsZE5vZGVzKCkpIHtcbiBcbiAgICAgIF9jb250ZW50RGlzcGxheS5yZW1vdmVDaGlsZChfY29udGVudERpc3BsYXkuZmlyc3RDaGlsZClcbiAgICB9XG4gIH07XG5cblxuXG4gIGNvbnN0IGNsZWFyT2xkT3B0aW9ucyA9ICh0YWcpID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IFsuLi50YWcub3B0aW9uc107XG4gIFxuICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPSBcIlwiKSB7XG4gICAgICAgIG9wdGlvbi5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfTtcblxuXG5cblxuICBjb25zdCBhZGRUb2Rvc1RvRm9ybU9wdGlvbnMgPSAoc2VsZWN0VGFnLCBhbGxUb2Rvc0FycmF5KSA9PiB7XG4gICAgY2xlYXJPbGRPcHRpb25zKHNlbGVjdFRhZyk7XG5cbiAgICBhbGxUb2Rvc0FycmF5LmZvckVhY2godG9kbyA9PiB7XG4gICAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgICBzZWxlY3RUYWcuYWRkKG5ld09wdGlvbikgICAgICBcbiAgICB9KTtcblxuXG4gIH07XG5cblxuXG5cbiAgY29uc3QgYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zPSAoc2VsZWN0VGFnLCBhbGxQcm9qZWN0c0FycmF5KSA9PiB7XG4gICAgY2xlYXJPbGRPcHRpb25zKHNlbGVjdFRhZyk7XG5cbiAgICBhbGxQcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICBzZWxlY3RUYWcuYWRkKG9wdGlvbikgICAgICBcbiAgICB9KTtcbiAgfTtcblxuXG5cblxuXG4gIGNvbnN0IHRvZ2dsZVRhc2tDb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBlLnRhcmdldC5sYWJlbHNbMF07XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGlzIGNvbXBsZXRlXCIpXG5cbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJylcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaW5jb21wbGV0ZVwiKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJylcblxuICAgIH1cblxuICB9O1xuXG5cblxuXG5cbiAgY29uc3QgdXBkYXRlUGFnZSA9IChtZW51QnV0dG9uU2VsZWN0ZWQpID0+IHtcblxuICAgIGNsZWFyRGlzcGxheSgpO1xuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZURpc3BsYXlIZWFkZXIobWVudUJ1dHRvblNlbGVjdGVkKSlcblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50cy5jcmVhdGVQYWdlTGlzdChtZW51QnV0dG9uU2VsZWN0ZWQpKVxuXG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHMuY3JlYXRlQWRkQnV0dG9uKG1lbnVCdXR0b25TZWxlY3RlZCkpO1xuXG5cblxuXG5cbiAgXG4gIH1cblxuXG5cbiAgY29uc3QgX2NvbnRlbnREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG5cbiAgY29uc3QgX2VkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJyk7ICBcblxuXG4gIGNvbnN0IF9lZGl0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpO1xuICAvLyBjb25zdCBfZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgX2VkaXROb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW5vdGVzJyk7XG4gIGNvbnN0IF9lZGl0RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZS1kYXRlJyk7XG4gIGNvbnN0IF9lZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcmlvcml0eScpO1xuICBjb25zdCBfZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0JylcblxuXG5cbiBcbiAgcmV0dXJuIHsgb3BlbkZvcm0sIGNsb3NlRm9ybSwgdXBkYXRlUGFnZSwgYWRkVG9kb3NUb0Zvcm1PcHRpb25zLFxuICAgICAgICAgIGFkZFByb2plY3RzVG9Gb3JtT3B0aW9ucywgdG9nZ2xlVGFza0NvbXBsZXRlLCBwcmVmaWxsRWRpdEZvcm0gfVxuXG5cbn0pKCk7XG5cblxuZXhwb3J0IHsgcmVuZGVyVG9kbyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9