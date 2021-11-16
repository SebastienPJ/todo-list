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
/* harmony export */   "create": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");






const create = (() => {

  const newTodoButton = (menu) => {
    const todoButton = document.createElement('button');
    todoButton.setAttribute('type', 'button');
    todoButton.textContent = '+';

    if (menu == 'Projects') {
      todoButton.classList.add('add-new-project-button');
      todoButton.addEventListener('click', function() {
        _render__WEBPACK_IMPORTED_MODULE_2__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.projectFormPopup)
        _render__WEBPACK_IMPORTED_MODULE_2__.renderTodo.populateProjectOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.todoSelected, ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList())
      })
      
    } else {
      todoButton.classList.add('add-new-todo-button');
      todoButton.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_2__.renderTodo.openForm.bind(todoButton, ___WEBPACK_IMPORTED_MODULE_0__.todo.todoFormPopup))

    }



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
          _render__WEBPACK_IMPORTED_MODULE_2__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormPopup)
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
      



      const listOfTasks = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();
      const listOfProjects = ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList();


      if (listOfProjects.length == 0) {
        const newProjectMessage = document.createElement('p');
        newProjectMessage.textContent = 'No projects yet created, click button to create'

        return newProjectMessage;
      }

      const containerOfProjects = document.createElement('div')
      const uL = document.createElement('ul');




      listOfProjects.forEach(projectTitle => {
        const projHeader = document.createElement('h2');
        projHeader.textContent = projectTitle;
        containerOfProjects.appendChild(projHeader);

        let projectTodos = listOfTasks.filter(task => task.project == projectTitle)
        
        projectTodos.forEach(todoObj => {

          let taskIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(todoObj, projectTodos);
          let projIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(projectTitle, listOfProjects);

          const list = document.createElement('li');
          list.classList.add('list');

          const visibleContent = document.createElement('div');
          visibleContent.classList.add('shown-content');
          list.appendChild(visibleContent);


          let checkBox = document.createElement('input');
          checkBox.setAttribute('type', 'checkbox');
          checkBox.addEventListener('click', (e) => {
            _render__WEBPACK_IMPORTED_MODULE_2__.renderTodo.toggleTaskComplete(e);
            // editTodo.updateObject();
          });


          checkBox.dataset['projectIndex'] = projIndex; 
          checkBox.dataset['taskIndex'] = taskIndex; 


          checkBox.name = `obj${projIndex}task${taskIndex}`;
      
          checkBox.id = `obj${projIndex}task${taskIndex}`;  

          checkBox.classList.add('checkbox');
          
          
          visibleContent.appendChild(checkBox);




          let label = document.createElement('label');
          label.setAttribute('for', `obj${projIndex}task${taskIndex}`);

          label.textContent = todoObj.title;

          visibleContent.appendChild(label);





          /****
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
            renderTodo.openForm(todo.editFormPopup)
            editTodo.prefillEditForm(e);
            editTodo.tagEditFormWithIndex(e);
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

          *******/

          uL.appendChild(list)

        })



      })


      containerOfProjects.appendChild(uL);





      // const projList = document.createElement('p');
      // projList.textContent = 'You have the projects'

      // console.log(this);

      // return projList




      return containerOfProjects

    
    };

    const todayList = () => {
      console.log("Do this today");
    };

    const tomorrowList = () => {
      console.log("One more day with your lazy behind");
    };



    
    const listReturned = {
      'All ToDos': allToDosList,
      'Today': todayList,
      'Tomorrow': tomorrowList,
      'Projects': projectsList,

    };

    return listReturned[menuClicked]();
  };



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


  const _editForm = document.querySelector('.edit-todo-form');  


  const _editTitle = document.querySelector('#edit-title');
  const _editDescription = document.querySelector('#edit-description');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');





  return { prefillEditForm, saveEditChanges, tagEditFormWithIndex }
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


  const updateProjectList = () => {
    _todoList.forEach(todoObj => {

      if ('project' in todoObj) {
        if (_projectList.includes(todoObj['project'])) return
        _projectList.push(todoObj['project'])
      }
    })

    console.log(_projectList);
  }


  const getProjectList = () => {
    return _projectList;
  }


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


  const startTodoApp = function(e) {
    e.preventDefault();


    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

    _todoList.push(_newTodo);


    _todoForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(todoFormPopup); 
  };   



  const createProject = function(e) {
    e.preventDefault();


    let _projectData = captureFormData(_projectForm);

    let _projectName = _projectData.get('project-name');

    if (_projectList.includes(_projectName)) {
      alert('project already exists');
      return;
    }   

    _projectList.push(_projectName);


    let _taskAddedToProj = [...todoSelected.selectedOptions].map(option => option.value)

    addProjectToTaskObj(_projectName, _taskAddedToProj)


    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.displayProjectPage(_todoList)


    // console.log([...todoSelected.selectedOptions].map(option => option.value));


    _projectForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(projectFormPopup); 

  }



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
      notes: 'go to walmart cheap food',
      project: "Home"
    },

    {
      title: "Fix Car Issues",
      description: "Need fast car",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "vroom vroom",
      project: "Home"
    }
  ];


  const _projectList = [];

  const _todoForm = document.querySelector('.todo-form');
  const _projectForm = document.querySelector('.new-project-form')
  const todoSelected = document.querySelector('.todos-selected')


  const todoFormPopup = document.querySelector('.todo-form-popup');
  const editFormPopup = document.querySelector('.edit-todo-popup');
  const projectFormPopup = document.querySelector('.new-project-popup');





  const _closeTodoFormButtons = document.querySelectorAll('.close-todo-form');
  _closeTodoFormButtons.forEach(button => {
    button.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm.bind(button, todoFormPopup));
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
    button.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm.bind(button, editFormPopup));
  })


  const _saveEditChangesButton = document.querySelector('.save-changes');
  _saveEditChangesButton.addEventListener('click', _edit__WEBPACK_IMPORTED_MODULE_1__.editTodo.saveEditChanges)



  const _closeProjectFormButtons = document.querySelectorAll('.close-project-form');
  _closeProjectFormButtons.forEach(button => {
    button.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm.bind(button, projectFormPopup))
  })

  const _submitProjectForm = document.querySelector('.create-project');
  _submitProjectForm.addEventListener('click', createProject)


  

  return { getTodoList, findIndexOf, captureFormData, getProjectList, todoFormPopup,
     editFormPopup, projectFormPopup, todoSelected }


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

  // const updateSideBar = (newItem) => {


  
  // }


  // const updatePage = () => {

  //   clearDisplay();


  // }

  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');

  };



  const closeForm = (formChosen) => {

    formChosen.setAttribute('style', 'display: none')
  };



  const populateProjectOptions = (select, todoArray) => {
    todoArray.forEach(todo => {
      let newOption = document.createElement('option');
      newOption.textContent = todo.title
      select.add(newOption)
      
    });

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

  };



  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };


  const displayProjectPage = (allTasksArray) => {

    clearDisplay();


    let pageTitle = "Projects"


    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.displayHeader(pageTitle))

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.listOfTodos(pageTitle))


    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.newTodoButton(pageTitle));


    console.log(allTasksArray);





  };





  const displayMenuItems = (e) => {
    const menuTitle = e.target.textContent;
    
    clearDisplay();

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.displayHeader(menuTitle));


    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.listOfTodos(menuTitle))

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.create.newTodoButton(menuTitle));

  };
  

  const _contentDisplay = document.querySelector('.todo-display');

 
  return { displayMenuItems, toggleTaskComplete, 
    openForm, closeForm, populateProjectOptions,
    displayProjectPage }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R3BELGdDQUFnQyx1REFBa0I7O0FBRWxELGdDQUFnQyx5REFBb0I7O0FBRXBEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7O1VDM0hEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi50b2RvLWFwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uc2lkZS1iYXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uYWxsLXRvZG9zLFxcbi5kdWUtdG9kYXksXFxuLmR1ZS10b21vcnJvdyxcXG4uYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tZGlzcGxheSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcblxcbi5kaXNwbGF5LW1lbnUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRhc2stZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXG59XFxuXFxuXFxuLnByaW9yaXR5LW1hcmtlciB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuXFxuXFxuLmFkZC1uZXctdG9kby1idXR0b24sXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uOmhvdmVyLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOENCQTtcXG4gIGNvbG9yOiAjMDA4Q0JBO1xcbn1cXG5cXG5cXG5cXG4udG9kby1mb3JtLXBvcHVwLFxcbi5uZXctcHJvamVjdC1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XFxufVxcblxcblxcbi50b2RvLWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLngtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLngtYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZm9ybS1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jYW5jZWwsXFxuLmNhbmNlbC1jaGFuZ2VzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3Q6aG92ZXIgLmhpZGV7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3OyAqL1xcbn1cXG5cXG5cXG5cXG5cXG4uZWRpdC10b2RvLXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuXFxuLmVkaXQtdG9kby1mb3JtLFxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcblxcbi50b2RvLWRldGFpbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcblxcbi5kZXRhaWwtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUge1xcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi8qIC5uZXctcHJvamVjdHMtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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QUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOzs7O0FBSUE7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi50b2RvLWFwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uc2lkZS1iYXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4uYWxsLXRvZG9zLFxcbi5kdWUtdG9kYXksXFxuLmR1ZS10b21vcnJvdyxcXG4uYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcbi5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tZGlzcGxheSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcblxcbi5kaXNwbGF5LW1lbnUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRhc2stZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXG59XFxuXFxuXFxuLnByaW9yaXR5LW1hcmtlciB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuXFxuXFxuLmFkZC1uZXctdG9kby1idXR0b24sXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uOmhvdmVyLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOENCQTtcXG4gIGNvbG9yOiAjMDA4Q0JBO1xcbn1cXG5cXG5cXG5cXG4udG9kby1mb3JtLXBvcHVwLFxcbi5uZXctcHJvamVjdC1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XFxufVxcblxcblxcbi50b2RvLWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLngtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLngtYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZm9ybS1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jYW5jZWwsXFxuLmNhbmNlbC1jaGFuZ2VzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3Q6aG92ZXIgLmhpZGV7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3OyAqL1xcbn1cXG5cXG5cXG5cXG5cXG4uZWRpdC10b2RvLXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuXFxuLmVkaXQtdG9kby1mb3JtLFxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcblxcbi50b2RvLWRldGFpbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcblxcbi5kZXRhaWwtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUge1xcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87ICovXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi8qIC5uZXctcHJvamVjdHMtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZWRpdFRvZG8gfSBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cblxuXG5jb25zdCBjcmVhdGUgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IG5ld1RvZG9CdXR0b24gPSAobWVudSkgPT4ge1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgaWYgKG1lbnUgPT0gJ1Byb2plY3RzJykge1xuICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbmRlclRvZG8ub3BlbkZvcm0odG9kby5wcm9qZWN0Rm9ybVBvcHVwKVxuICAgICAgICByZW5kZXJUb2RvLnBvcHVsYXRlUHJvamVjdE9wdGlvbnModG9kby50b2RvU2VsZWN0ZWQsIHRvZG8uZ2V0VG9kb0xpc3QoKSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXRvZG8tYnV0dG9uJyk7XG4gICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVG9kby5vcGVuRm9ybS5iaW5kKHRvZG9CdXR0b24sIHRvZG8udG9kb0Zvcm1Qb3B1cCkpXG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHRvZG9CdXR0b25cbiAgfVxuXG5cbiAgY29uc3QgZGlzcGxheUhlYWRlciA9ICh0aXRsZSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IF9oZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBfaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbWVudS1oZWFkZXInKVxuICAgIF9jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250YWluZXIpO1xuXG5cbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIF9oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuXG4gICAgcmV0dXJuIF9oZWFkZXJDb250YWluZXJcblxuICB9XG4gIFxuXG5cbiAgY29uc3QgbGlzdE9mVG9kb3MgPSAobWVudUNsaWNrZWQpID0+IHtcbiAgIFxuXG4gICAgY29uc3QgYWxsVG9Eb3NMaXN0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGNvbnN0IHVub3JkZXJkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJkTGlzdCk7XG5cbiAgICAgIGxldCB0YXNrQXJyYXkgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG5cbiAgICAgIFxuXG4gICAgICB0YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbGV0IHRvZG9JbmRleCA9IHRvZG8uZmluZEluZGV4T2YodGFzaywgdGFza0FycmF5KVxuXG4gICAgICAgIGNvbnN0IGxpc3RlZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0ZWRUYXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcblxuXG4gICAgICAgIGNvbnN0IHNob3duQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaG93bkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2hvd24tY29udGVudCcpO1xuICAgICAgICBsaXN0ZWRUYXNrLmFwcGVuZENoaWxkKHNob3duQ29udGVudCk7XG5cblxuXG4gICAgICAgIGxldCBpbnB1dENoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgaW5wdXRDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgcmVuZGVyVG9kby50b2dnbGVUYXNrQ29tcGxldGUoZSk7XG4gICAgICAgICAgLy8gZWRpdFRvZG8udXBkYXRlT2JqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0Q2hlY2tCb3guZGF0YXNldFsndGFza0luZGV4J10gPSB0b2RvSW5kZXg7IFxuXG4gICAgICAgIGlucHV0Q2hlY2tCb3gubmFtZSA9IGB0YXNrJHt0b2RvSW5kZXh9YDtcbiAgICBcbiAgICAgICAgaW5wdXRDaGVja0JveC5pZCA9IGB0YXNrJHt0b2RvSW5kZXh9YDsgIFxuICAgICAgICBpbnB1dENoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICAgIC8vIGlucHV0Q2hlY2tCb3guYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGlucHV0Q2hlY2tCb3gpO1xuXG5cbiAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBpbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRhc2ske3RvZG9JbmRleH1gKTtcblxuICAgICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cblxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1hcmtlcicpO1xuXG4gICAgICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgXG4gICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ29yYW5nZSdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2Nvcm5mbG93ZXJibHVlJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlNYXJrZXIpXG5cblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8uZWRpdEZvcm1Qb3B1cClcbiAgICAgICAgICBlZGl0VG9kby5wcmVmaWxsRWRpdEZvcm0oZSk7XG4gICAgICAgICAgZWRpdFRvZG8udGFnRWRpdEZvcm1XaXRoSW5kZXgoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ2V4cGFuZCcpO1xuICAgICAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kJztcbiAgICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICBsZXQgaGlkZGVuQ29udGVudCA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgaWYgKGhpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXG5cblxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKCdwcm9qZWN0JyBpbiB0YXNrKSB7XG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Rhc2sucHJvamVjdH1gO1xuICAgICAgICB9XG4gICAgICAgIHNob3duQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpXG5cbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBCeTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgICAgc2hvd25Db250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuXG5cblxuXG5cblxuICAgXG5cblxuICAgICAgICBjb25zdCBjb2xsYXBzZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29sbGFwc2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlsJyk7XG4gICAgICAgIGxpc3RlZFRhc2suYXBwZW5kQ2hpbGQoY29sbGFwc2VkQ29udGFpbmVyKTtcblxuXG5cbiAgICAgICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoJ25vdGVzJyBpbiB0YXNrKSB7XG4gICAgICAgICAgbm90ZXNDb250YWluZXIudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbGxhcHNlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0NvbnRhaW5lcik7XG5cblxuXG5cblxuXG4gICAgICAgIHVub3JkZXJkTGlzdC5hcHBlbmRDaGlsZChsaXN0ZWRUYXNrKTtcblxuXG4gICAgICBcbiAgICAgICAgXG4gICAgICB9KVxuXG4gICAgICBcbiAgICAgIHJldHVybiBsaXN0Q29udGFpbmVyXG5cblxuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSSd2ZSBnb3QgdGhlIGplY3RzXCIpO1xuICAgICAgXG5cblxuXG4gICAgICBjb25zdCBsaXN0T2ZUYXNrcyA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcbiAgICAgIGNvbnN0IGxpc3RPZlByb2plY3RzID0gdG9kby5nZXRQcm9qZWN0TGlzdCgpO1xuXG5cbiAgICAgIGlmIChsaXN0T2ZQcm9qZWN0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmV3UHJvamVjdE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gcHJvamVjdHMgeWV0IGNyZWF0ZWQsIGNsaWNrIGJ1dHRvbiB0byBjcmVhdGUnXG5cbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3RNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250YWluZXJPZlByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGNvbnN0IHVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuXG5cblxuICAgICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0VGl0bGUgPT4ge1xuICAgICAgICBjb25zdCBwcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvakhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgY29udGFpbmVyT2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qSGVhZGVyKTtcblxuICAgICAgICBsZXQgcHJvamVjdFRvZG9zID0gbGlzdE9mVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09IHByb2plY3RUaXRsZSlcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RUb2Rvcy5mb3JFYWNoKHRvZG9PYmogPT4ge1xuXG4gICAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRvZG8uZmluZEluZGV4T2YodG9kb09iaiwgcHJvamVjdFRvZG9zKTtcbiAgICAgICAgICBsZXQgcHJvakluZGV4ID0gdG9kby5maW5kSW5kZXhPZihwcm9qZWN0VGl0bGUsIGxpc3RPZlByb2plY3RzKTtcblxuICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuXG4gICAgICAgICAgY29uc3QgdmlzaWJsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB2aXNpYmxlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzaG93bi1jb250ZW50Jyk7XG4gICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh2aXNpYmxlQ29udGVudCk7XG5cblxuICAgICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVG9kby50b2dnbGVUYXNrQ29tcGxldGUoZSk7XG4gICAgICAgICAgICAvLyBlZGl0VG9kby51cGRhdGVPYmplY3QoKTtcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgY2hlY2tCb3guZGF0YXNldFsncHJvamVjdEluZGV4J10gPSBwcm9qSW5kZXg7IFxuICAgICAgICAgIGNoZWNrQm94LmRhdGFzZXRbJ3Rhc2tJbmRleCddID0gdGFza0luZGV4OyBcblxuXG4gICAgICAgICAgY2hlY2tCb3gubmFtZSA9IGBvYmoke3Byb2pJbmRleH10YXNrJHt0YXNrSW5kZXh9YDtcbiAgICAgIFxuICAgICAgICAgIGNoZWNrQm94LmlkID0gYG9iaiR7cHJvakluZGV4fXRhc2ske3Rhc2tJbmRleH1gOyAgXG5cbiAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIHZpc2libGVDb250ZW50LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxuXG5cblxuICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgb2JqJHtwcm9qSW5kZXh9dGFzayR7dGFza0luZGV4fWApO1xuXG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0b2RvT2JqLnRpdGxlO1xuXG4gICAgICAgICAgdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG5cblxuXG5cbiAgICAgICAgICAvKioqKlxuICAgICAgICAgIGNvbnN0IHByaW9yaXR5TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgcHJpb3JpdHlNYXJrZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbWFya2VyJyk7XG5cbiAgICAgICAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnb3JhbmdlJ1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgICAgIHByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICBwcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnY29ybmZsb3dlcmJsdWUnXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG5cbiAgICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlNYXJrZXIpXG5cblxuICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyVG9kby5vcGVuRm9ybSh0b2RvLmVkaXRGb3JtUG9wdXApXG4gICAgICAgICAgICBlZGl0VG9kby5wcmVmaWxsRWRpdEZvcm0oZSk7XG4gICAgICAgICAgICBlZGl0VG9kby50YWdFZGl0Rm9ybVdpdGhJbmRleChlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScsICdleHBhbmQnKTtcbiAgICAgICAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kJztcbiAgICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICAgIGxldCBoaWRkZW5Db250ZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlmIChoaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblxuXG5cblxuICAgICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgIGlmICgncHJvamVjdCcgaW4gdGFzaykge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Rhc2sucHJvamVjdH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcblxuXG4gICAgICAgICAgXG5cbiAgICAgICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKVxuXG4gICAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBCeTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgICAgICBzaG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG5cblxuXG5cblxuXG4gICAgXG5cblxuICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNvbGxhcHNlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRldGFpbCcpO1xuICAgICAgICAgIGxpc3RlZFRhc2suYXBwZW5kQ2hpbGQoY29sbGFwc2VkQ29udGFpbmVyKTtcblxuXG5cbiAgICAgICAgICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIG5vdGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC1jb250YWluZXInKTtcbiAgICAgICAgICBpZiAoJ25vdGVzJyBpbiB0YXNrKSB7XG4gICAgICAgICAgICBub3Rlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbGxhcHNlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0NvbnRhaW5lcik7XG5cblxuXG5cblxuXG4gICAgICAgICAgdW5vcmRlcmRMaXN0LmFwcGVuZENoaWxkKGxpc3RlZFRhc2spO1xuXG4gICAgICAgICAgKioqKioqKi9cblxuICAgICAgICAgIHVMLmFwcGVuZENoaWxkKGxpc3QpXG5cbiAgICAgICAgfSlcblxuXG5cbiAgICAgIH0pXG5cblxuICAgICAgY29udGFpbmVyT2ZQcm9qZWN0cy5hcHBlbmRDaGlsZCh1TCk7XG5cblxuXG5cblxuICAgICAgLy8gY29uc3QgcHJvakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAvLyBwcm9qTGlzdC50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSB0aGUgcHJvamVjdHMnXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgICAvLyByZXR1cm4gcHJvakxpc3RcblxuXG5cblxuICAgICAgcmV0dXJuIGNvbnRhaW5lck9mUHJvamVjdHNcblxuICAgIFxuICAgIH07XG5cbiAgICBjb25zdCB0b2RheUxpc3QgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRvIHRoaXMgdG9kYXlcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvbW9ycm93TGlzdCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT25lIG1vcmUgZGF5IHdpdGggeW91ciBsYXp5IGJlaGluZFwiKTtcbiAgICB9O1xuXG5cblxuICAgIFxuICAgIGNvbnN0IGxpc3RSZXR1cm5lZCA9IHtcbiAgICAgICdBbGwgVG9Eb3MnOiBhbGxUb0Rvc0xpc3QsXG4gICAgICAnVG9kYXknOiB0b2RheUxpc3QsXG4gICAgICAnVG9tb3Jyb3cnOiB0b21vcnJvd0xpc3QsXG4gICAgICAnUHJvamVjdHMnOiBwcm9qZWN0c0xpc3QsXG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3RSZXR1cm5lZFttZW51Q2xpY2tlZF0oKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cblxuXG4gIHJldHVybiB7IGRpc3BsYXlIZWFkZXIsIG5ld1RvZG9CdXR0b24sIGxpc3RPZlRvZG9zIH1cbn0pKCk7XG5cblxuZXhwb3J0IHsgY3JlYXRlIH0iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuXG5jb25zdCBlZGl0VG9kbyA9ICgoKSA9PiB7XG5cblxuXG4gIGNvbnN0IHByZWZpbGxFZGl0Rm9ybSA9IChlKSA9PiB7XG5cblxuICAgIGxldCBfdG9kb0luZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmRhdGFzZXQudGFza0luZGV4XG4gICAgbGV0IF9hbGxUb2RvQXJyYXkgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG5cbiAgICBsZXQgX3RvZG9PYmplY3QgPSBfYWxsVG9kb0FycmF5W190b2RvSW5kZXhdO1xuXG4gICAgX2VkaXRUaXRsZS52YWx1ZSA9IF90b2RvT2JqZWN0LnRpdGxlO1xuICAgIF9lZGl0RGVzY3JpcHRpb24udmFsdWUgPSBfdG9kb09iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICBpZiAoX3RvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ25vdGVzJykpIHtcbiAgICAgIF9lZGl0Tm90ZXMudmFsdWUgPSBfdG9kb09iamVjdC5ub3RlcztcbiAgICB9XG5cbiAgICBfZWRpdER1ZURhdGUudmFsdWUgPSBfdG9kb09iamVjdC5kdWVEYXRlXG4gICAgX2VkaXRQcmlvcml0eS52YWx1ZSA9IF90b2RvT2JqZWN0LnByaW9yaXR5XG5cblxuICB9XG5cblxuICBjb25zdCB0YWdFZGl0Rm9ybVdpdGhJbmRleCA9IChlKSA9PiB7XG4gICAgbGV0IF9zYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtY2hhbmdlcycpO1xuICAgIGxldCBfaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZGF0YXNldC50YXNrSW5kZXhcblxuICAgIF9zYXZlQnV0dG9uLmRhdGFzZXQudGFza0luZGV4ID0gX2luZGV4OyAgICBcbiAgfVxuXG5cblxuICBjb25zdCBzYXZlRWRpdENoYW5nZXMgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBfZWRpdGVkRm9ybURhdGEgPSB0b2RvLmNhcHR1cmVGb3JtRGF0YShfZWRpdEZvcm0pO1xuXG4gICAgbGV0IF9saXN0T2ZUb2RvcyA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcblxuICAgIGxldCBfb2JqSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJbmRleDtcblxuICAgIGxldCBfdG9kb09iaiA9IF9saXN0T2ZUb2Rvc1tfb2JqSW5kZXhdO1xuXG4gICAgbGV0IG5ld1RpdGxlID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC10aXRsZScpO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgbmV3Tm90ZXMgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LW5vdGVzJyk7XG4gICAgbGV0IG5ld0R1ZURhdGUgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LWR1ZS1kYXRlJyk7XG4gICAgbGV0IG5ld1ByaW9yaXR5ID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1wcmlvcml0eScpO1xuXG4gICAgX3RvZG9PYmoudGl0bGUgPSBuZXdUaXRsZTtcbiAgICBfdG9kb09iai5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIF90b2RvT2JqLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXG4gICAgaWYgKG5ld05vdGVzICE9IFwiXCIpIHtcbiAgICAgIF90b2RvT2JqLm5vdGVzID0gbmV3Tm90ZXM7XG4gICAgfVxuICAgIFxuICAgIF90b2RvT2JqLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbiAgICBjb25zb2xlLmxvZyhfdG9kb09iaik7XG4gICAgX2VkaXRGb3JtLnJlc2V0KCk7XG4gICAgY2xvc2VFZGl0Rm9ybSgpO1xuXG5cblxuICB9XG5cblxuICBjb25zdCBfZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKTsgIFxuXG5cbiAgY29uc3QgX2VkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XG4gIGNvbnN0IF9lZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBfZWRpdE5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbm90ZXMnKTtcbiAgY29uc3QgX2VkaXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlLWRhdGUnKTtcbiAgY29uc3QgX2VkaXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByaW9yaXR5Jyk7XG5cblxuXG5cblxuICByZXR1cm4geyBwcmVmaWxsRWRpdEZvcm0sIHNhdmVFZGl0Q2hhbmdlcywgdGFnRWRpdEZvcm1XaXRoSW5kZXggfVxufSkoKTtcblxuXG5cbmV4cG9ydCB7IGVkaXRUb2RvIH0iLCJpbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgeyBlZGl0VG9kbyB9IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG5cblxuXG4gIGNvbnN0IGNhcHR1cmVGb3JtRGF0YSA9IChmb3JtKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKVxuICB9O1xuXG5cblxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gX3RvZG9MaXN0XG4gIH07XG5cblxuICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZEJ1dHRvbiA9IChzZWxlY3RlZEJ1dHRvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQnV0dG9uKTtcblxuICAgIF9tZW51QnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNlbGVjdGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpO1xuXG4gIH1cblxuXG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoZGF0YSkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGRhdGEuZ2V0KCd0aXRsZScpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBkdWVEYXRlID0gZGF0YS5nZXQoJ2R1ZS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZGF0YS5nZXQoJ3ByaW9yaXR5Jyk7XG4gICAgbGV0IGlzVG9kb0RvbmUgPSAnbm8nXG5cblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzVG9kb0RvbmUgfVxuXG4gIH07XG5cblxuXG4gIGNvbnN0IGZpbmRJbmRleE9mID0gKGl0ZW0sIGxpc3QpID0+IHtcbiAgICByZXR1cm4gbGlzdC5pbmRleE9mKGl0ZW0pO1xuICB9O1xuXG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgX3RvZG9MaXN0LmZvckVhY2godG9kb09iaiA9PiB7XG5cbiAgICAgIGlmICgncHJvamVjdCcgaW4gdG9kb09iaikge1xuICAgICAgICBpZiAoX3Byb2plY3RMaXN0LmluY2x1ZGVzKHRvZG9PYmpbJ3Byb2plY3QnXSkpIHJldHVyblxuICAgICAgICBfcHJvamVjdExpc3QucHVzaCh0b2RvT2JqWydwcm9qZWN0J10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKF9wcm9qZWN0TGlzdCk7XG4gIH1cblxuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBfcHJvamVjdExpc3Q7XG4gIH1cblxuXG4gIGNvbnN0IGFkZFByb2plY3RUb1Rhc2tPYmogPSAocHJvak5hbWUsIHByb2pUYXNrcykgPT4ge1xuXG4gICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgICAgX3RvZG9MaXN0LmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICh0YXNrTmFtZSA9PSB0b2RvLnRpdGxlKSB7XG4gICAgICAgICAgdG9kby5wcm9qZWN0ID0gcHJvak5hbWVcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cblxuICAgIC8vIF90b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIC8vICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgIC8vICAgICBpZiAodG9kby50aXRsZSA9PSB0YXNrTmFtZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuXG4gIGNvbnN0IHN0YXJ0VG9kb0FwcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIGxldCBfZm9ybURhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3RvZG9Gb3JtKTtcblxuICAgIGxldCBfbmV3VG9kbyA9IHRvZG9GYWN0b3J5KF9mb3JtRGF0YSk7XG5cbiAgICBfdG9kb0xpc3QucHVzaChfbmV3VG9kbyk7XG5cblxuICAgIF90b2RvRm9ybS5yZXNldCgpO1xuICAgIHJlbmRlclRvZG8uY2xvc2VGb3JtKHRvZG9Gb3JtUG9wdXApOyBcbiAgfTsgICBcblxuXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIGxldCBfcHJvamVjdERhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3Byb2plY3RGb3JtKTtcblxuICAgIGxldCBfcHJvamVjdE5hbWUgPSBfcHJvamVjdERhdGEuZ2V0KCdwcm9qZWN0LW5hbWUnKTtcblxuICAgIGlmIChfcHJvamVjdExpc3QuaW5jbHVkZXMoX3Byb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoJ3Byb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9ICAgXG5cbiAgICBfcHJvamVjdExpc3QucHVzaChfcHJvamVjdE5hbWUpO1xuXG5cbiAgICBsZXQgX3Rhc2tBZGRlZFRvUHJvaiA9IFsuLi50b2RvU2VsZWN0ZWQuc2VsZWN0ZWRPcHRpb25zXS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcblxuICAgIGFkZFByb2plY3RUb1Rhc2tPYmooX3Byb2plY3ROYW1lLCBfdGFza0FkZGVkVG9Qcm9qKVxuXG5cbiAgICByZW5kZXJUb2RvLmRpc3BsYXlQcm9qZWN0UGFnZShfdG9kb0xpc3QpXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFsuLi50b2RvU2VsZWN0ZWQuc2VsZWN0ZWRPcHRpb25zXS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xuXG5cbiAgICBfcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShwcm9qZWN0Rm9ybVBvcHVwKTsgXG5cbiAgfVxuXG5cblxuICBjb25zdCBfdG9kb0xpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29tcGxldGUgUHJlc2VudGF0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJNdXN0IGNvbXBsZXRlIGFuZCBzZWxsIHBpdGNoIHRvIGJvYXJkXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTItMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6IFwiTm90ZXMgb24gbWVldGluZyBwcmVwXCIsXG4gICAgICBwcm9qZWN0OiBcIldvcmtcIlxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0aXRsZTogXCJEbyBncm9jZXJpZXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk5lZWQgZm9vb2RcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMS0xOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6ICdnbyB0byB3YWxtYXJ0IGNoZWFwIGZvb2QnLFxuICAgICAgcHJvamVjdDogXCJIb21lXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiRml4IENhciBJc3N1ZXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk5lZWQgZmFzdCBjYXJcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0xMi0xMFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBpc1RvZG9Eb25lOiBcIm5vXCIsXG4gICAgICBub3RlczogXCJ2cm9vbSB2cm9vbVwiLFxuICAgICAgcHJvamVjdDogXCJIb21lXCJcbiAgICB9XG4gIF07XG5cblxuICBjb25zdCBfcHJvamVjdExpc3QgPSBbXTtcblxuICBjb25zdCBfdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gIGNvbnN0IF9wcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJylcbiAgY29uc3QgdG9kb1NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLXNlbGVjdGVkJylcblxuXG4gIGNvbnN0IHRvZG9Gb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLXBvcHVwJyk7XG4gIGNvbnN0IGVkaXRGb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXBvcHVwJyk7XG4gIGNvbnN0IHByb2plY3RGb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtcG9wdXAnKTtcblxuXG5cblxuXG4gIGNvbnN0IF9jbG9zZVRvZG9Gb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS10b2RvLWZvcm0nKTtcbiAgX2Nsb3NlVG9kb0Zvcm1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUb2RvLmNsb3NlRm9ybS5iaW5kKGJ1dHRvbiwgdG9kb0Zvcm1Qb3B1cCkpO1xuICB9KTtcblxuXG5cbiAgY29uc3QgX3N1Ym1pdFRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1mb3JtJyk7XG4gIF9zdWJtaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0VG9kb0FwcCk7XG5cblxuXG4gIGNvbnN0IF9tZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWJ1dHRvbicpO1xuICBfbWVudUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJlbmRlclRvZG8uZGlzcGxheU1lbnVJdGVtcyhlKTtcbiAgICAgIGhpZ2hsaWdodFNlbGVjdGVkQnV0dG9uKGJ1dHRvbik7ICAgIFxuICAgIH0pO1xuXG4gIH0pXG5cblxuXG4gIGNvbnN0IF9jbG9zZUVkaXRGb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1lZGl0LWZvcm0nKTtcbiAgX2Nsb3NlRWRpdEZvcm1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHsgXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVG9kby5jbG9zZUZvcm0uYmluZChidXR0b24sIGVkaXRGb3JtUG9wdXApKTtcbiAgfSlcblxuXG4gIGNvbnN0IF9zYXZlRWRpdENoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jaGFuZ2VzJyk7XG4gIF9zYXZlRWRpdENoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kby5zYXZlRWRpdENoYW5nZXMpXG5cblxuXG4gIGNvbnN0IF9jbG9zZVByb2plY3RGb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1wcm9qZWN0LWZvcm0nKTtcbiAgX2Nsb3NlUHJvamVjdEZvcm1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUb2RvLmNsb3NlRm9ybS5iaW5kKGJ1dHRvbiwgcHJvamVjdEZvcm1Qb3B1cCkpXG4gIH0pXG5cbiAgY29uc3QgX3N1Ym1pdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0Jyk7XG4gIF9zdWJtaXRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpXG5cblxuICBcblxuICByZXR1cm4geyBnZXRUb2RvTGlzdCwgZmluZEluZGV4T2YsIGNhcHR1cmVGb3JtRGF0YSwgZ2V0UHJvamVjdExpc3QsIHRvZG9Gb3JtUG9wdXAsXG4gICAgIGVkaXRGb3JtUG9wdXAsIHByb2plY3RGb3JtUG9wdXAsIHRvZG9TZWxlY3RlZCB9XG5cblxufSkoKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10b2RvLWJ1dHRvbicpLmNsaWNrKCk7XG5cbmV4cG9ydCB7IHRvZG8gfVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZVwiO1xuXG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHVwZGF0ZVNpZGVCYXIgPSAobmV3SXRlbSkgPT4ge1xuXG5cbiAgXG4gIC8vIH1cblxuXG4gIC8vIGNvbnN0IHVwZGF0ZVBhZ2UgPSAoKSA9PiB7XG5cbiAgLy8gICBjbGVhckRpc3BsYXkoKTtcblxuXG4gIC8vIH1cblxuICBjb25zdCBvcGVuRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKTtcblxuICB9O1xuXG5cblxuICBjb25zdCBjbG9zZUZvcm0gPSAoZm9ybUNob3NlbikgPT4ge1xuXG4gICAgZm9ybUNob3Nlbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuICB9O1xuXG5cblxuICBjb25zdCBwb3B1bGF0ZVByb2plY3RPcHRpb25zID0gKHNlbGVjdCwgdG9kb0FycmF5KSA9PiB7XG4gICAgdG9kb0FycmF5LmZvckVhY2godG9kbyA9PiB7XG4gICAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgICBzZWxlY3QuYWRkKG5ld09wdGlvbilcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxuXG4gIGNvbnN0IHRvZ2dsZVRhc2tDb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBlLnRhcmdldC5sYWJlbHNbMF07XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGlzIGNvbXBsZXRlXCIpXG5cbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJylcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaW5jb21wbGV0ZVwiKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJylcblxuICAgIH1cblxuICB9O1xuXG5cblxuICBjb25zdCBjbGVhckRpc3BsYXkgPSAoKSA9PiB7XG4gXG4gICAgd2hpbGUgKF9jb250ZW50RGlzcGxheS5oYXNDaGlsZE5vZGVzKCkpIHtcbiBcbiAgICAgIF9jb250ZW50RGlzcGxheS5yZW1vdmVDaGlsZChfY29udGVudERpc3BsYXkuZmlyc3RDaGlsZClcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBkaXNwbGF5UHJvamVjdFBhZ2UgPSAoYWxsVGFza3NBcnJheSkgPT4ge1xuXG4gICAgY2xlYXJEaXNwbGF5KCk7XG5cblxuICAgIGxldCBwYWdlVGl0bGUgPSBcIlByb2plY3RzXCJcblxuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZS5kaXNwbGF5SGVhZGVyKHBhZ2VUaXRsZSkpXG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlLmxpc3RPZlRvZG9zKHBhZ2VUaXRsZSkpXG5cblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGUubmV3VG9kb0J1dHRvbihwYWdlVGl0bGUpKTtcblxuXG4gICAgY29uc29sZS5sb2coYWxsVGFza3NBcnJheSk7XG5cblxuXG5cblxuICB9O1xuXG5cblxuXG5cbiAgY29uc3QgZGlzcGxheU1lbnVJdGVtcyA9IChlKSA9PiB7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgY2xlYXJEaXNwbGF5KCk7XG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlLmRpc3BsYXlIZWFkZXIobWVudVRpdGxlKSk7XG5cblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGUubGlzdE9mVG9kb3MobWVudVRpdGxlKSlcblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGUubmV3VG9kb0J1dHRvbihtZW51VGl0bGUpKTtcblxuICB9O1xuICBcblxuICBjb25zdCBfY29udGVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiBcbiAgcmV0dXJuIHsgZGlzcGxheU1lbnVJdGVtcywgdG9nZ2xlVGFza0NvbXBsZXRlLCBcbiAgICBvcGVuRm9ybSwgY2xvc2VGb3JtLCBwb3B1bGF0ZVByb2plY3RPcHRpb25zLFxuICAgIGRpc3BsYXlQcm9qZWN0UGFnZSB9XG5cblxufSkoKTtcblxuXG5leHBvcnQgeyByZW5kZXJUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=