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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup,\n.edit-todo-popup,\n.edit-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\n\n/* .edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n} */\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  /* border: 1px solid black; */\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.form-buttons button {\n  border: 1px solid white;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n/* .save-project-changes {\n   background-color: rgb(45, 231, 255); \n} */\n\n.save-project-changes:hover {\n  background-color: rgb(45, 231, 255);\n  border: 1px solid black;\n}\n\n.cancel-proj-changes:hover {\n  background-color: rgb(180, 180, 180);\nborder: 1px solid black;\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n.delete-button-container {\n  /* border: 1px solid black; */\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  align-items: center;\n  margin-top: 20px;\n}\n\n.delete-button-container button {\n  width: 100%;\n  margin-bottom: 5px;\n  padding: 5px 10px;\n  /* background-color: red; */\n  border: 1px solid white;\n  cursor: pointer;\n}\n\n.delete-button-container button:hover {\n  background-color: red;\n  /* color: red; */\n  border: 1px solid black;\n\n  font-weight: bold;\n  /* text-decoration:underline overline; */\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n\n\n\n.edit-todo-form,\n.new-project-form,\n.edit-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date-section {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n}\n\n\n.edit-project-button {\n  margin-left: 50px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;;AAGA;EACE,aAAa;AACf;;;AAGA;EACE,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;;AAGA;;;;EAIE,aAAa;;AAEf;;;AAGA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,6BAA6B;;AAE/B;;AAEA;EACE,gCAAgC;AAClC;;;;;;;;;;AAUA;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB;sCACoC;EACpC,yBAAyB;AAC3B;;;AAGA;EACE,kBAAkB;AACpB;;;AAGA;EACE,6BAA6B;;AAE/B;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;;;;AAKA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;;;;AAIA;;;;EAIE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,MAAM;EACN,uBAAuB;EACvB,aAAa;EACb,UAAU;AACZ;;;AAGA;;;;;;;;;;GAUG;;AAEH;EACE,sBAAsB;AACxB;;;AAGA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,QAAQ;EACR,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,WAAW;EACX,kBAAkB;;AAEpB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;GAEG;;AAEH;EACE,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC,uBAAuB;AACvB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,2BAA2B;EAC3B,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,uBAAuB;;EAEvB,iBAAiB;EACjB,wCAAwC;AAC1C;;;;;;;AAOA;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;;AAGA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;AACjB;;;AAGA;EACE,kBAAkB;;EAElB,4BAA4B;AAC9B;;;;;;;;AAQA;;;EAGE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,yBAAyB;AAC3B;;;AAGA;EACE,uBAAuB;EACvB,aAAa;;AAEf;;;AAGA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB;;;AAGA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB;;;;AAIA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  /* background-color: gray; */\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n.all-todos,\n.due-today,\n.due-tomorrow,\n.all-projects {\n  display: none;\n\n}\n\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n\n}\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n\n\n\n\n\n\n\n\n.todo-display {\n  /* background-color: indianred; */\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n.todo-display li {\n  list-style: none; \n  border: 1px solid black;\n  /* display: flex;\n  /* justify-content: space-between; */\n  /* align-items: center; */\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n.todo-form-popup,\n.new-project-popup,\n.edit-todo-popup,\n.edit-project-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\n\n/* .edit-todo-popup {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n\n} */\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.todo-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 350px;\n  margin-top: 100px;\n}\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n.form-buttons {\n  /* border: 1px solid black; */\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.form-buttons button {\n  border: 1px solid white;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n/* .save-project-changes {\n   background-color: rgb(45, 231, 255); \n} */\n\n.save-project-changes:hover {\n  background-color: rgb(45, 231, 255);\n  border: 1px solid black;\n}\n\n.cancel-proj-changes:hover {\n  background-color: rgb(180, 180, 180);\nborder: 1px solid black;\n}\n\n.cancel,\n.cancel-changes {\n  margin-left: 10px;\n}\n\n.delete-button-container {\n  /* border: 1px solid black; */\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  align-items: center;\n  margin-top: 20px;\n}\n\n.delete-button-container button {\n  width: 100%;\n  margin-bottom: 5px;\n  padding: 5px 10px;\n  /* background-color: red; */\n  border: 1px solid white;\n  cursor: pointer;\n}\n\n.delete-button-container button:hover {\n  background-color: red;\n  /* color: red; */\n  border: 1px solid black;\n\n  font-weight: bold;\n  /* text-decoration:underline overline; */\n}\n\n\n\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list {\n  margin-bottom: 5px;\n\n  /* background-color: #777; */\n}\n\n\n\n\n\n\n\n.edit-todo-form,\n.new-project-form,\n.edit-project-form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  height: 500px;\n  margin-top: 100px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n.due-date-section {\n  /* margin-left: auto; */\n  padding-right: 10px;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n}\n\n\n.edit-project-button {\n  margin-left: 50px;\n}\n\n\n"],"sourceRoot":""}]);
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
      let _projIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_projectName, _listOfProjects); 


      const _projContainer = document.createElement('div');
      _projContainer.classList.add('project-container');
      _pageDisplay.appendChild(_projContainer);

      const _projHeader = document.createElement('div');
      _projHeader.classList.add('project-title')
      _projContainer.appendChild(_projHeader)


      const _projNameSection = document.createElement('h2');
      _projNameSection.textContent = _projectName;
      _projHeader.appendChild(_projNameSection);




      let _tasksBelongingToProj = _listOfTasks.filter(task => task.project == _projectName)

      const _editProjButton = document.createElement('button');
      _editProjButton.textContent = 'Edit Project';
      _editProjButton.classList.add('edit-project-button');
      _editProjButton.dataset['projectIndex'] = _projIndex;
      _editProjButton.addEventListener('click', function(e) {

        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editProjFormPopup);
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addTodosToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.editProjSelectTag, _tasksBelongingToProj)


        let _options = ___WEBPACK_IMPORTED_MODULE_0__.todo.editProjSelectTag.options;
        let _valuesNeeded = {'projectIndex': _projIndex, 'listOfProjects': _listOfProjects, 'tasksBelongingToProj': _tasksBelongingToProj};
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.prefillProjForm(_valuesNeeded, _options);


        let _todoListTitlesArray = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList().map(item => item.title)
        ___WEBPACK_IMPORTED_MODULE_0__.todo.tagWithIndex([...___WEBPACK_IMPORTED_MODULE_0__.todo.editProjSelectTag.selectedOptions], _todoListTitlesArray)

        ___WEBPACK_IMPORTED_MODULE_0__.todo.tagWithIndex([___WEBPACK_IMPORTED_MODULE_0__.todo.projectNameInput], ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList())

        ___WEBPACK_IMPORTED_MODULE_0__.todo.deleteProjectButton.dataset.overallIndex = _projIndex
        ___WEBPACK_IMPORTED_MODULE_0__.todo.deleteAllButton.dataset.overallIndex = _projIndex
      })

      _projHeader.appendChild(_editProjButton);




      const _uL = document.createElement('ul');
      _projContainer.appendChild(_uL)



      _tasksBelongingToProj.forEach(_task => {
        let _overallTaskIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList())
        let _taskIndexLocal = ___WEBPACK_IMPORTED_MODULE_0__.todo.findIndexOf(_task, _tasksBelongingToProj);


        let _listTag = listFactory(_task, _overallTaskIndex)

        _uL.appendChild(_listTag.list);

        
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

    let _listOfTodos = getTodoList();

    let _objIndex = e.target.dataset.overallTaskIndex;

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




  const saveProjectChanges = (e) => {
    e.preventDefault();

    let _editedProjFormData = captureFormData(_editProjectForm);
    let _completeListOfTasks = getTodoList();
    let _completeListOfObjects = getProjectList();

    let _formOptions = [...editProjSelectTag.options];
    let _projIndex = projectNameInput.dataset.overallIndex;

   
    _formOptions.forEach(option => {
      if (!option.selected && option.value !== "") {
        let taskIndex = option.dataset.overallIndex;
        let taskObject = _completeListOfTasks[taskIndex];
        delete taskObject.project;
      }
    })

  
    let _newProjName = _editedProjFormData.get('edit-project-name');

    _completeListOfObjects[_projIndex] = _newProjName;

    _editProjectForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(editProjFormPopup);
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(findCurrentMenuSelected())

  }


  const deleteFromList = (item, list) => {
    let itemIndex = list.indexOf(item);
    list.splice(itemIndex, 1);
  };


  const deleteKeyFromObj = (key, objects) => {
    objects.forEach(object => {
      delete object[key]
    })
  }



  const tagWithIndex = (inputs, array) => {
    inputs.forEach(input => {
      let index = array.indexOf(input.value);
      input.dataset['overallIndex'] = index;
    })
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
  const _editProjectForm = document.querySelector('.edit-project-form')
 


  const projFormSelectTag = document.querySelector('.project-form-select-tag');
  const todoFormSelectTag = document.querySelector('.todo-form-select');
  const editFormSelectTag = document.querySelector('#edit-project');
  const editProjSelectTag = document.querySelector('#edit-project-todos');
  const todoFormPopup = document.querySelector('.todo-form-popup');
  const editFormPopup = document.querySelector('.edit-todo-popup');
  const projectFormPopup = document.querySelector('.new-project-popup');
  const editProjFormPopup = document.querySelector('.edit-project-popup')
  const projectNameInput = document.querySelector('#edit-project-name')


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



  const deleteProjectButton = document.querySelector('.delete-project')
  deleteProjectButton.addEventListener('click', function(e) {
    let indexOfProject = e.target.dataset.overallIndex
    let proj = getProjectList()[indexOfProject]

    deleteFromList(proj, getProjectList())

    let optionsInTask = [...editProjSelectTag.options];
    optionsInTask.forEach(item => {
      if (item.value !== "") {
        let itemIndex = item.dataset.overallIndex;
        let itemObj = getTodoList()[itemIndex];
        delete itemObj.project
      } 
    });

    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(editProjFormPopup)
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(findCurrentMenuSelected())
  });

  const deleteAllButton = document.querySelector('.delete-all');
  deleteAllButton.addEventListener('click', function(e) {
    let indexOfProject = e.target.dataset.overallIndex
    let proj = getProjectList()[indexOfProject]

    deleteFromList(proj, getProjectList())
    let optionsInTask = [...editProjSelectTag.options];
    optionsInTask.forEach(item => {
      if (item.value !== "") {
        let itemIndex = item.dataset.overallIndex;
        let itemObj = getTodoList()[itemIndex];
        deleteFromList(itemObj, getTodoList())
      } 

    });
    
    editProjFormPopup.firstElementChild.reset()
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(editProjFormPopup)
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(findCurrentMenuSelected())

    
  })


  

  return { todoFormPopup, editFormPopup, projectFormPopup, editProjFormPopup, projFormSelectTag,
    todoFormSelectTag, editFormSelectTag, editProjSelectTag, projectNameInput, deleteProjectButton, 
    deleteAllButton, getTodoList, getProjectList, findIndexOf, tagEditSubmitButtonWithIndex, tagWithIndex }


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
    ////// Need to reset form when being closed, now data stays
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



  const prefillProjForm = (values, optionsArray) => {

    let _currentProjName = values.listOfProjects[values.projectIndex]

    _editProjName.value = _currentProjName

    let _selectedValues = values.tasksBelongingToProj.map(task => task.title)
    
    for (const option of optionsArray) {
  
      option.removeAttribute('selected');

      if (_selectedValues.includes(option.value)) {
        option.setAttribute('selected', 'selected');
      }
    
    };

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


  const _editProjName = document.querySelector('#edit-project-name');




 
  return { openForm, closeForm, updatePage, addTodosToFormOptions,
          addProjectsToFormOptions, toggleTaskComplete, prefillEditForm, prefillProjForm }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFFBQVEsUUFBUSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksZUFBZSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsVUFBVSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFNBQVMsUUFBUSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxjQUFjLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxR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VztBQUNYOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7VUM3TUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLnRvZG8tYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi5zaWRlLWJhciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5hbGwtdG9kb3MsXFxuLmR1ZS10b2RheSxcXG4uZHVlLXRvbW9ycm93LFxcbi5hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkOyAqL1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuXFxuLmRpc3BsYXktbWVudS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFzay1kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbn1cXG5cXG5cXG4ucHJpb3JpdHktbWFya2VyIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5cXG5cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctdG9kby1idXR0b246aG92ZXIsXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4Q0JBO1xcbiAgY29sb3I6ICMwMDhDQkE7XFxufVxcblxcblxcblxcbi50b2RvLWZvcm0tcG9wdXAsXFxuLm5ldy1wcm9qZWN0LXBvcHVwLFxcbi5lZGl0LXRvZG8tcG9wdXAsXFxuLmVkaXQtcHJvamVjdC1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcblxcbi8qIC5lZGl0LXRvZG8tcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcblxcbn0gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi54LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi54LWJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC5zYXZlLXByb2plY3QtY2hhbmdlcyB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAyMzEsIDI1NSk7IFxcbn0gKi9cXG5cXG4uc2F2ZS1wcm9qZWN0LWNoYW5nZXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAyMzEsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhbmNlbC1wcm9qLWNoYW5nZXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FuY2VsLFxcbi5jYW5jZWwtY2hhbmdlcyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24tY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgb3ZlcmxpbmU7ICovXFxufVxcblxcblxcblxcblxcblxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdDpob3ZlciAuaGlkZXtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7ICovXFxufVxcblxcblxcblxcblxcblxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSxcXG4ubmV3LXByb2plY3QtZm9ybSxcXG4uZWRpdC1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuXFxuLmhpZGRlbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUtc2VjdGlvbiB7XFxuICAvKiBtYXJnaW4tbGVmdDogYXV0bzsgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COzs7QUFHQTs7OztFQUlFLGFBQWE7O0FBRWY7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7Ozs7Ozs7Ozs7QUFVQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkI7c0NBQ29DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztB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QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLnRvZG8tYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi5zaWRlLWJhciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5hbGwtdG9kb3MsXFxuLmR1ZS10b2RheSxcXG4uZHVlLXRvbW9ycm93LFxcbi5hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkOyAqL1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuXFxuLmRpc3BsYXktbWVudS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFzay1kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbn1cXG5cXG5cXG4ucHJpb3JpdHktbWFya2VyIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5cXG5cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctdG9kby1idXR0b246aG92ZXIsXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4Q0JBO1xcbiAgY29sb3I6ICMwMDhDQkE7XFxufVxcblxcblxcblxcbi50b2RvLWZvcm0tcG9wdXAsXFxuLm5ldy1wcm9qZWN0LXBvcHVwLFxcbi5lZGl0LXRvZG8tcG9wdXAsXFxuLmVkaXQtcHJvamVjdC1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcblxcbi8qIC5lZGl0LXRvZG8tcG9wdXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcblxcbn0gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi54LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi54LWJ1dHRvbjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC5zYXZlLXByb2plY3QtY2hhbmdlcyB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAyMzEsIDI1NSk7IFxcbn0gKi9cXG5cXG4uc2F2ZS1wcm9qZWN0LWNoYW5nZXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAyMzEsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhbmNlbC1wcm9qLWNoYW5nZXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FuY2VsLFxcbi5jYW5jZWwtY2hhbmdlcyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24tY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgb3ZlcmxpbmU7ICovXFxufVxcblxcblxcblxcblxcblxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdDpob3ZlciAuaGlkZXtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7ICovXFxufVxcblxcblxcblxcblxcblxcblxcblxcbi5lZGl0LXRvZG8tZm9ybSxcXG4ubmV3LXByb2plY3QtZm9ybSxcXG4uZWRpdC1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuXFxuLmhpZGRlbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUtc2VjdGlvbiB7XFxuICAvKiBtYXJnaW4tbGVmdDogYXV0bzsgKi9cXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cblxuXG5jb25zdCBjcmVhdGVFbGVtZW50cyA9ICgoKSA9PiB7XG5cblxuICBjb25zdCBjcmVhdGVEaXNwbGF5SGVhZGVyID0gKGhpZ2hsaWdodGVkQnV0dG9uKSA9PiB7XG5cbiAgICBsZXQgdGl0bGUgPSBoaWdobGlnaHRlZEJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICBcbiAgICBjb25zdCBfaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgX2hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW1lbnUtaGVhZGVyJylcbiAgICBfY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChfaGVhZGVyQ29udGFpbmVyKTtcblxuXG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBfaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cblxuICAgIHJldHVybiBfaGVhZGVyQ29udGFpbmVyXG5cbiAgfTtcblxuXG5cbiAgY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKGN1cnJlbnRNZW51KSA9PiB7XG5cbiAgICBsZXQgY3VycmVudE1lbnVUaXRsZSA9IGN1cnJlbnRNZW51LnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICBpZiAoY3VycmVudE1lbnVUaXRsZSA9PSAnUHJvamVjdHMnKSB7XG4gICAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctcHJvamVjdC1idXR0b24nKTtcbiAgICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVuZGVyVG9kby5vcGVuRm9ybSh0b2RvLnByb2plY3RGb3JtUG9wdXApXG4gICAgICAgIHJlbmRlclRvZG8uYWRkVG9kb3NUb0Zvcm1PcHRpb25zKHRvZG8ucHJvakZvcm1TZWxlY3RUYWcsIHRvZG8uZ2V0VG9kb0xpc3QoKSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXRvZG8tYnV0dG9uJyk7XG4gICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbmRlclRvZG8ub3BlbkZvcm0odG9kby50b2RvRm9ybVBvcHVwKVxuICAgICAgICByZW5kZXJUb2RvLmFkZFByb2plY3RzVG9Gb3JtT3B0aW9ucyh0b2RvLnRvZG9Gb3JtU2VsZWN0VGFnLCB0b2RvLmdldFByb2plY3RMaXN0KCkpXG5cbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gdG9kb0J1dHRvblxuICB9O1xuXG5cbiAgY29uc3QgbGlzdEZhY3RvcnkgPSAodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX3Zpc2libGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3Zpc2libGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3duLWNvbnRlbnQnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKF92aXNpYmxlQ29udGVudCk7XG4gIFxuICBcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHJlbmRlclRvZG8udG9nZ2xlVGFza0NvbXBsZXRlKGUpO1xuICAgICAgLy8gdG9kby51cGRhdGVPYmplY3QoKVxuICAgIH0pO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIFxuICBcbiAgXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIFxuICBcbiAgXG4gICAgbGV0IF9wcmlvcml0eU1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9wcmlvcml0eU1hcmtlci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tYXJrZXInKTtcbiAgXG4gIFxuICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhJR0hfUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICAgIFxuICBcbiAgXG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBNRURJVU1fUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgICAgIFxuICBcbiAgXG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBMT1dfUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgXG4gIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKF9wcmlvcml0eU1hcmtlcik7XG4gIFxuICBcbiAgXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnLCAnZWRpdC10YXNrLWJ1dHRvbicpXG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICBlZGl0QnV0dG9uLmRhdGFzZXRbJ292ZXJhbGxUYXNrSW5kZXgnXSA9IGluZGV4O1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgcmVuZGVyVG9kby5vcGVuRm9ybSh0b2RvLmVkaXRGb3JtUG9wdXApO1xuICAgICAgcmVuZGVyVG9kby5hZGRQcm9qZWN0c1RvRm9ybU9wdGlvbnModG9kby5lZGl0Rm9ybVNlbGVjdFRhZywgdG9kby5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICAgIHJlbmRlclRvZG8ucHJlZmlsbEVkaXRGb3JtKGUpO1xuICAgICAgdG9kby50YWdFZGl0U3VibWl0QnV0dG9uV2l0aEluZGV4KGUpO1xuXG4gICAgfSlcbiAgXG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgXG4gIFxuICBcbiAgXG4gICAgbGV0IF9leHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBfZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnLCAnZXhwYW5kLWJ1dHRvbicpXG4gICAgX2V4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdleHBhbmQnXG4gIFxuICAgIF9leHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICB0aGlzLnByZXZpb3VzU2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICB0aGlzLnByZXZpb3VzU2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMudGV4dENvbnRlbnQgPT0gJ2V4cGFuZCc/IHRoaXMudGV4dENvbnRlbnQgPSAnY29sbGFwc2UnIDogdGhpcy50ZXh0Q29udGVudCA9ICdleHBhbmQnO1xuICBcbiAgXG4gICAgICBsZXQgX2hpZGRlbkNvbnRlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKF9oaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgX2hpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9oaWRkZW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pO1xuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoX2V4cGFuZEJ1dHRvbik7XG4gIFxuICBcbiAgXG4gIFxuICAgIGxldCBfcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBfcHJvakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlY3Rpb24nKTtcbiAgICBpZiAoJ3Byb2plY3QnIGluIHRhc2spIHtcbiAgICAgIF9wcm9qQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7dGFzay5wcm9qZWN0fWA7XG4gICAgfTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKF9wcm9qQ29udGFpbmVyKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX2R1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgX2R1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtc2VjdGlvbicpO1xuICAgIGlmICgnZHVlRGF0ZScgaW4gdGFzaykge1xuICAgICAgX2R1ZURhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBgRHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIH07XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChfZHVlRGF0ZUNvbnRhaW5lcik7XG4gIFxuICBcbiAgXG4gIFxuICAgIGxldCBfY29sbGFwc2VkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX2NvbGxhcHNlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tY29udGFpbmVyJyk7XG4gIFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoX2NvbGxhcHNlZENvbnRhaW5lcik7XG4gIFxuICBcbiAgXG4gICAgbGV0IF9ub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9ub3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3Rlcy1jb250YWluZXInKTtcbiAgICAnbm90ZXMnIGluIHRhc2sgPyBfbm90ZXNDb250YWluZXIudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzIDogXG4gICAgICAgICAgICAgIF9ub3Rlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICdObyBub3RlcyBmb3IgdGhpcyB0YXNrLiBFZGl0IHRhc2sgdG8gYWRkIG5vdGVzJztcbiAgICBcbiAgICBfY29sbGFwc2VkQ29udGFpbmVyLmFwcGVuZENoaWxkKF9ub3Rlc0NvbnRhaW5lcik7XG4gICAgXG4gIFxuICBcbiAgXG4gICAgcmV0dXJuIHtsaXN0LCBjaGVja0JveCwgbGFiZWwsIGVkaXRCdXR0b259XG4gIH1cbiAgXG5cblxuXG5cbiAgY29uc3QgY3JlYXRlQWxsVG9kb3NMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHVub3JkZXJkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bm9yZGVyZExpc3QpO1xuXG4gICAgbGV0IGFsbFRhc2tzQXJyYXkgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG5cbiAgICBhbGxUYXNrc0FycmF5LmZvckVhY2goX3Rhc2sgPT4ge1xuICAgICAgbGV0IF9vdmVyYWxsVG9kb0luZGV4ID0gdG9kby5maW5kSW5kZXhPZihfdGFzaywgYWxsVGFza3NBcnJheSk7XG5cbiAgICAgIGxldCBsaXN0RWxlbWVudCA9IGxpc3RGYWN0b3J5KF90YXNrLCBfb3ZlcmFsbFRvZG9JbmRleCk7XG5cbiAgICAgIHVub3JkZXJkTGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbWVudC5saXN0KTtcblxuXG4gICAgICBsaXN0RWxlbWVudC5jaGVja0JveC5kYXRhc2V0WydvdmVyYWxsSW5kZXgnXSA9IF9vdmVyYWxsVG9kb0luZGV4O1xuICAgICAgbGlzdEVsZW1lbnQuY2hlY2tCb3gubmFtZSA9IGB0YXNrJHtfb3ZlcmFsbFRvZG9JbmRleH1gO1xuICAgICAgbGlzdEVsZW1lbnQuY2hlY2tCb3guaWQgPSBgdGFzayR7X292ZXJhbGxUb2RvSW5kZXh9YDtcblxuXG5cbiAgICAgIGxpc3RFbGVtZW50LmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRhc2ske19vdmVyYWxsVG9kb0luZGV4fWApO1xuXG5cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3RDb250YWluZXJcblxuXG4gIH07XG5cblxuICBjb25zdCBjcmVhdGVQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBfbGlzdE9mVGFza3MgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG4gICAgY29uc3QgX2xpc3RPZlByb2plY3RzID0gdG9kby5nZXRQcm9qZWN0TGlzdCgpO1xuXG5cbiAgICBpZiAoX2xpc3RPZlByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zdCBfbm9Qcm9qZWN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIF9ub1Byb2plY3RNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHByb2plY3RzIHlldCBjcmVhdGVkLCBjbGljayBidXR0b24gdG8gY3JlYXRlIGEgbmV3IHByb2plY3QnXG5cbiAgICAgIHJldHVybiBfbm9Qcm9qZWN0TWVzc2FnZTtcbiAgICB9O1xuXG5cblxuXG5cbiAgICBjb25zdCBfcGFnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIF9saXN0T2ZQcm9qZWN0cy5mb3JFYWNoKF9wcm9qZWN0TmFtZSA9PiB7XG4gICAgICBsZXQgX3Byb2pJbmRleCA9IHRvZG8uZmluZEluZGV4T2YoX3Byb2plY3ROYW1lLCBfbGlzdE9mUHJvamVjdHMpOyBcblxuXG4gICAgICBjb25zdCBfcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgX3Byb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgIF9wYWdlRGlzcGxheS5hcHBlbmRDaGlsZChfcHJvakNvbnRhaW5lcik7XG5cbiAgICAgIGNvbnN0IF9wcm9qSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBfcHJvakhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcbiAgICAgIF9wcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKF9wcm9qSGVhZGVyKVxuXG5cbiAgICAgIGNvbnN0IF9wcm9qTmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgX3Byb2pOYW1lU2VjdGlvbi50ZXh0Q29udGVudCA9IF9wcm9qZWN0TmFtZTtcbiAgICAgIF9wcm9qSGVhZGVyLmFwcGVuZENoaWxkKF9wcm9qTmFtZVNlY3Rpb24pO1xuXG5cblxuXG4gICAgICBsZXQgX3Rhc2tzQmVsb25naW5nVG9Qcm9qID0gX2xpc3RPZlRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PSBfcHJvamVjdE5hbWUpXG5cbiAgICAgIGNvbnN0IF9lZGl0UHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgX2VkaXRQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBfZWRpdFByb2pCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgX2VkaXRQcm9qQnV0dG9uLmRhdGFzZXRbJ3Byb2plY3RJbmRleCddID0gX3Byb2pJbmRleDtcbiAgICAgIF9lZGl0UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8uZWRpdFByb2pGb3JtUG9wdXApO1xuICAgICAgICByZW5kZXJUb2RvLmFkZFRvZG9zVG9Gb3JtT3B0aW9ucyh0b2RvLmVkaXRQcm9qU2VsZWN0VGFnLCBfdGFza3NCZWxvbmdpbmdUb1Byb2opXG5cblxuICAgICAgICBsZXQgX29wdGlvbnMgPSB0b2RvLmVkaXRQcm9qU2VsZWN0VGFnLm9wdGlvbnM7XG4gICAgICAgIGxldCBfdmFsdWVzTmVlZGVkID0geydwcm9qZWN0SW5kZXgnOiBfcHJvakluZGV4LCAnbGlzdE9mUHJvamVjdHMnOiBfbGlzdE9mUHJvamVjdHMsICd0YXNrc0JlbG9uZ2luZ1RvUHJvaic6IF90YXNrc0JlbG9uZ2luZ1RvUHJvan07XG4gICAgICAgIHJlbmRlclRvZG8ucHJlZmlsbFByb2pGb3JtKF92YWx1ZXNOZWVkZWQsIF9vcHRpb25zKTtcblxuXG4gICAgICAgIGxldCBfdG9kb0xpc3RUaXRsZXNBcnJheSA9IHRvZG8uZ2V0VG9kb0xpc3QoKS5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlKVxuICAgICAgICB0b2RvLnRhZ1dpdGhJbmRleChbLi4udG9kby5lZGl0UHJvalNlbGVjdFRhZy5zZWxlY3RlZE9wdGlvbnNdLCBfdG9kb0xpc3RUaXRsZXNBcnJheSlcblxuICAgICAgICB0b2RvLnRhZ1dpdGhJbmRleChbdG9kby5wcm9qZWN0TmFtZUlucHV0XSwgdG9kby5nZXRQcm9qZWN0TGlzdCgpKVxuXG4gICAgICAgIHRvZG8uZGVsZXRlUHJvamVjdEJ1dHRvbi5kYXRhc2V0WydvdmVyYWxsSW5kZXgnXSA9IF9wcm9qSW5kZXhcbiAgICAgICAgdG9kby5kZWxldGVBbGxCdXR0b24uZGF0YXNldFsnb3ZlcmFsbEluZGV4J10gPSBfcHJvakluZGV4XG4gICAgICB9KVxuXG4gICAgICBfcHJvakhlYWRlci5hcHBlbmRDaGlsZChfZWRpdFByb2pCdXR0b24pO1xuXG5cblxuXG4gICAgICBjb25zdCBfdUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgX3Byb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoX3VMKVxuXG5cblxuICAgICAgX3Rhc2tzQmVsb25naW5nVG9Qcm9qLmZvckVhY2goX3Rhc2sgPT4ge1xuICAgICAgICBsZXQgX292ZXJhbGxUYXNrSW5kZXggPSB0b2RvLmZpbmRJbmRleE9mKF90YXNrLCB0b2RvLmdldFRvZG9MaXN0KCkpXG4gICAgICAgIGxldCBfdGFza0luZGV4TG9jYWwgPSB0b2RvLmZpbmRJbmRleE9mKF90YXNrLCBfdGFza3NCZWxvbmdpbmdUb1Byb2opO1xuXG5cbiAgICAgICAgbGV0IF9saXN0VGFnID0gbGlzdEZhY3RvcnkoX3Rhc2ssIF9vdmVyYWxsVGFza0luZGV4KVxuXG4gICAgICAgIF91TC5hcHBlbmRDaGlsZChfbGlzdFRhZy5saXN0KTtcblxuICAgICAgICBcbiAgICAgICAgX2xpc3RUYWcuY2hlY2tCb3guZGF0YXNldFsncHJvamVjdEluZGV4J10gPSBfcHJvakluZGV4O1xuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5kYXRhc2V0Wydsb2NhbFRhc2tJbmRleCddID0gX3Rhc2tJbmRleExvY2FsOyBcbiAgICAgICAgX2xpc3RUYWcuY2hlY2tCb3gubmFtZSA9IGBvYmoke19wcm9qSW5kZXh9dGFzayR7X3Rhc2tJbmRleExvY2FsfWA7ICAgIFxuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5pZCA9IGBvYmoke19wcm9qSW5kZXh9dGFzayR7X3Rhc2tJbmRleExvY2FsfWA7ICBcbiAgXG4gIFxuXG4gICAgICAgIF9saXN0VGFnLmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYG9iaiR7X3Byb2pJbmRleH10YXNrJHtfdGFza0luZGV4TG9jYWx9YCk7XG4gICAgICB9KTtcbiAgICAgIFxuXG4gICAgfSlcblxuXG5cblxuICAgIHJldHVybiBfcGFnZURpc3BsYXlcblxuXG5cblxuXG4gIH07XG5cblxuXG4gIGNvbnN0IGNyZWF0ZVBhZ2VMaXN0ID0gKGJ1dHRvblNlbGVjdGVkKSA9PiB7XG4gICAgbGV0IG1lbnVTZWxlY3RlZCA9IGJ1dHRvblNlbGVjdGVkLnRleHRDb250ZW50XG5cbiAgICBjb25zdCByZXR1cm5lZExpc3QgPSB7XG4gICAgICAnQWxsIFRvRG9zJzogY3JlYXRlQWxsVG9kb3NMaXN0LFxuICAgICAgLy8gJ1RvZGF5JzogdG9kYXlMaXN0LFxuICAgICAgLy8gJ1RvbW9ycm93JzogdG9tb3Jyb3dMaXN0LFxuICAgICAgJ1Byb2plY3RzJzogY3JlYXRlUHJvamVjdHNMaXN0LFxuXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHJldHVybmVkTGlzdFttZW51U2VsZWN0ZWRdKCk7XG4gICAgXG4gIH1cblxuICBcblxuICBjb25zdCBfY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuXG4gIGNvbnN0IEhJR0hfUFJJT1JJVFkgPSAncmVkJztcbiAgY29uc3QgTUVESVVNX1BSSU9SSVRZID0gJ29yYW5nZSc7XG4gIGNvbnN0IExPV19QUklPUklUWSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG5cblxuXG4gIFxuXG5cblxuICByZXR1cm4geyBjcmVhdGVEaXNwbGF5SGVhZGVyLCBjcmVhdGVBZGRCdXR0b24sIGNyZWF0ZVBhZ2VMaXN0IH1cbn0pKCk7XG5cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudHMgfSIsImltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF90b2RvTGlzdFxuICB9O1xuXG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9wcm9qZWN0TGlzdDtcbiAgfTtcblxuXG4gIGNvbnN0IGNhcHR1cmVGb3JtRGF0YSA9IChmb3JtKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKVxuICB9O1xuXG5cbiAgY29uc3QgZmluZEluZGV4T2YgPSAoaXRlbSwgbGlzdCkgPT4ge1xuICAgIHJldHVybiBsaXN0LmluZGV4T2YoaXRlbSk7XG4gIH07XG5cblxuICBjb25zdCB0YWdFZGl0U3VibWl0QnV0dG9uV2l0aEluZGV4ID0gKGUpID0+IHtcbiAgICBsZXQgX3NhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jaGFuZ2VzJyk7XG4gICAgbGV0IF9pbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQub3ZlcmFsbFRhc2tJbmRleFxuXG4gICAgX3NhdmVCdXR0b24uZGF0YXNldC5vdmVyYWxsVGFza0luZGV4ID0gX2luZGV4OyAgICBcbiAgfTtcblxuXG5cbiAgY29uc3Qgc2F2ZUVkaXRDaGFuZ2VzID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgX2VkaXRlZEZvcm1EYXRhID0gY2FwdHVyZUZvcm1EYXRhKF9lZGl0Rm9ybSk7XG5cbiAgICBsZXQgX2xpc3RPZlRvZG9zID0gZ2V0VG9kb0xpc3QoKTtcblxuICAgIGxldCBfb2JqSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxUYXNrSW5kZXg7XG5cbiAgICBsZXQgX3RvZG9PYmogPSBfbGlzdE9mVG9kb3NbX29iakluZGV4XTtcblxuICAgIGxldCBuZXdUaXRsZSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtdGl0bGUnKTtcbiAgICAvLyBsZXQgbmV3RGVzY3JpcHRpb24gPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IG5ld05vdGVzID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1ub3RlcycpO1xuICAgIGxldCBuZXdEdWVEYXRlID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC1kdWUtZGF0ZScpO1xuICAgIGxldCBuZXdQcmlvcml0eSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtcHJpb3JpdHknKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtcHJvamVjdCcpO1xuXG4gICAgX3RvZG9PYmoudGl0bGUgPSBuZXdUaXRsZTtcblxuXG4gICAgbmV3RHVlRGF0ZSA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLmR1ZURhdGU6IF90b2RvT2JqLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXG4gICAgbmV3Tm90ZXMgPT0gJyc/IGRlbGV0ZSBfdG9kb09iai5ub3RlczogX3RvZG9PYmoubm90ZXMgPSBuZXdOb3RlcztcblxuICAgIG5ld1ByaW9yaXR5ID09ICcnPyBkZWxldGUgX3RvZG9PYmoucHJpb3JpdHk6IF90b2RvT2JqLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbiAgICBuZXdQcm9qZWN0ID09ICcnPyBkZWxldGUgX3RvZG9PYmoucHJvamVjdDogX3RvZG9PYmoucHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICBcbiAgICBfZWRpdEZvcm0ucmVzZXQoKTtcbiAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShlZGl0Rm9ybVBvcHVwKTtcblxuICAgIGxldCBfY3VycmVudE1lbnUgPSBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpO1xuICAgIHJlbmRlclRvZG8udXBkYXRlUGFnZShfY3VycmVudE1lbnUpO1xuXG4gIH07XG5cblxuXG5cbiAgY29uc3Qgc2F2ZVByb2plY3RDaGFuZ2VzID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgX2VkaXRlZFByb2pGb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfZWRpdFByb2plY3RGb3JtKTtcbiAgICBsZXQgX2NvbXBsZXRlTGlzdE9mVGFza3MgPSBnZXRUb2RvTGlzdCgpO1xuICAgIGxldCBfY29tcGxldGVMaXN0T2ZPYmplY3RzID0gZ2V0UHJvamVjdExpc3QoKTtcblxuICAgIGxldCBfZm9ybU9wdGlvbnMgPSBbLi4uZWRpdFByb2pTZWxlY3RUYWcub3B0aW9uc107XG4gICAgbGV0IF9wcm9qSW5kZXggPSBwcm9qZWN0TmFtZUlucHV0LmRhdGFzZXQub3ZlcmFsbEluZGV4O1xuXG4gICBcbiAgICBfZm9ybU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaWYgKCFvcHRpb24uc2VsZWN0ZWQgJiYgb3B0aW9uLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBvcHRpb24uZGF0YXNldC5vdmVyYWxsSW5kZXg7XG4gICAgICAgIGxldCB0YXNrT2JqZWN0ID0gX2NvbXBsZXRlTGlzdE9mVGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgZGVsZXRlIHRhc2tPYmplY3QucHJvamVjdDtcbiAgICAgIH1cbiAgICB9KVxuXG4gIFxuICAgIGxldCBfbmV3UHJvak5hbWUgPSBfZWRpdGVkUHJvakZvcm1EYXRhLmdldCgnZWRpdC1wcm9qZWN0LW5hbWUnKTtcblxuICAgIF9jb21wbGV0ZUxpc3RPZk9iamVjdHNbX3Byb2pJbmRleF0gPSBfbmV3UHJvak5hbWU7XG5cbiAgICBfZWRpdFByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZWRpdFByb2pGb3JtUG9wdXApO1xuICAgIHJlbmRlclRvZG8udXBkYXRlUGFnZShmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpKVxuXG4gIH1cblxuXG4gIGNvbnN0IGRlbGV0ZUZyb21MaXN0ID0gKGl0ZW0sIGxpc3QpID0+IHtcbiAgICBsZXQgaXRlbUluZGV4ID0gbGlzdC5pbmRleE9mKGl0ZW0pO1xuICAgIGxpc3Quc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gIH07XG5cblxuICBjb25zdCBkZWxldGVLZXlGcm9tT2JqID0gKGtleSwgb2JqZWN0cykgPT4ge1xuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgZGVsZXRlIG9iamVjdFtrZXldXG4gICAgfSlcbiAgfVxuXG5cblxuICBjb25zdCB0YWdXaXRoSW5kZXggPSAoaW5wdXRzLCBhcnJheSkgPT4ge1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YoaW5wdXQudmFsdWUpO1xuICAgICAgaW5wdXQuZGF0YXNldFsnb3ZlcmFsbEluZGV4J10gPSBpbmRleDtcbiAgICB9KVxuICB9XG5cblxuICBcbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoZGF0YSkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGRhdGEuZ2V0KCd0aXRsZScpO1xuICAgIC8vIGxldCBkZXNjcmlwdGlvbiA9IGRhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBkdWVEYXRlID0gZGF0YS5nZXQoJ2R1ZS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZGF0YS5nZXQoJ3ByaW9yaXR5Jyk7XG4gICAgbGV0IGlzVG9kb0RvbmUgPSAnbm8nO1xuICAgIGxldCBwcm9qZWN0ID0gZGF0YS5nZXQoJ3BhcnQtb2YtcHJvamVjdCcpO1xuXG5cbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGlzVG9kb0RvbmUgfVxuXG4gIH07XG5cblxuICBjb25zdCBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLl9tZW51QnV0dG9uc10uZmlsdGVyKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSlbMF07XG4gIH07XG5cblxuXG4gIGNvbnN0IGZpbmRDdXJyZW50Rm9ybUluVXNlID0gKCkgPT4ge1xuXG4gICAgbGV0IGFsbEZvcm1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNvbnRhaW5lcicpXTtcbiAgICBcbiAgICBsZXQgY3VycmVudEZvcm0gPSBhbGxGb3Jtcy5maWx0ZXIoZm9ybSA9PiBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1mb3JtLWludXNlJykpWzBdXG4gXG4gICAgcmV0dXJuIGN1cnJlbnRGb3JtO1xuICB9O1xuXG5cblxuICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZEJ1dHRvbiA9IChldmVudCkgPT4ge1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRCdXR0b24gPSBldmVudC50YXJnZXQ7XG5cbiAgICBfbWVudUJ1dHRvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1tZW51LXNlbGVjdGVkJykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBzZWxlY3RlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKTtcblxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RUb1Rhc2tPYmogPSAocHJvak5hbWUsIHByb2pUYXNrcykgPT4ge1xuXG4gICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgICAgX3RvZG9MaXN0LmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICh0YXNrTmFtZSA9PSB0b2RvLnRpdGxlKSB7XG4gICAgICAgICAgdG9kby5wcm9qZWN0ID0gcHJvak5hbWVcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cblxuICAgIC8vIF90b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIC8vICAgcHJvalRhc2tzLmZvckVhY2godGFza05hbWUgPT4ge1xuICAgIC8vICAgICBpZiAodG9kby50aXRsZSA9PSB0YXNrTmFtZSkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBfcHJvamVjdERhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3Byb2plY3RGb3JtKTtcblxuICAgIGxldCBfcHJvamVjdE5hbWUgPSBfcHJvamVjdERhdGEuZ2V0KCdwcm9qZWN0LW5hbWUnKTtcblxuICAgIGlmIChfcHJvamVjdExpc3QuaW5jbHVkZXMoX3Byb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoJ3Byb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgX3Byb2plY3RMaXN0LnB1c2goX3Byb2plY3ROYW1lKTtcblxuXG4gICAgbGV0IF90YXNrQWRkZWRUb1Byb2ogPSBbLi4ucHJvakZvcm1TZWxlY3RUYWcuc2VsZWN0ZWRPcHRpb25zXS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcblxuICAgIGFkZFByb2plY3RUb1Rhc2tPYmooX3Byb2plY3ROYW1lLCBfdGFza0FkZGVkVG9Qcm9qKVxuXG5cblxuICAgIGxldCBjdXJyZW50TWVudSA9IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCk7XG4gICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKGN1cnJlbnRNZW51KVxuXG4gICAgX3Byb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0ocHJvamVjdEZvcm1Qb3B1cCk7IFxuICB9XG5cblxuICBjb25zdCBjcmVhdGVUb2RvID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgbGV0IF9mb3JtRGF0YSA9IGNhcHR1cmVGb3JtRGF0YShfdG9kb0Zvcm0pO1xuXG4gICAgbGV0IF9uZXdUb2RvID0gdG9kb0ZhY3RvcnkoX2Zvcm1EYXRhKTtcblxuICBcbiAgICBfdG9kb0xpc3QucHVzaChfbmV3VG9kbyk7XG5cblxuICAgIF90b2RvRm9ybS5yZXNldCgpO1xuICAgIHJlbmRlclRvZG8uY2xvc2VGb3JtKHRvZG9Gb3JtUG9wdXApO1xuICAgIFxuICAgIFxuICAgIGxldCBtZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UobWVudSlcblxuICAgIC8vIHJlbmRlclRvZG8uZGlzcGF5TWVudUl0ZW1zKHBhc3MgaW4gY3VycmVudCBtZW51IHNlbGVjdGVkKVxuXG4gIH07ICAgXG5cblxuXG5cbiAgY29uc3QgX3RvZG9MaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbXBsZXRlIFByZXNlbnRhdGlvblwiLFxuICAgICAgLy8gZGVzY3JpcHRpb246IFwiTXVzdCBjb21wbGV0ZSBhbmQgc2VsbCBwaXRjaCB0byBib2FyZFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTEyLTEwXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIGlzVG9kb0RvbmU6IFwibm9cIixcbiAgICAgIG5vdGVzOiBcIk5vdGVzIG9uIG1lZXRpbmcgcHJlcFwiLFxuICAgICAgcHJvamVjdDogXCJXb3JrXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiRG8gZ3JvY2VyaWVzXCIsXG4gICAgICAvLyBkZXNjcmlwdGlvbjogXCJOZWVkIGZvb29kXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTEtMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIGlzVG9kb0RvbmU6IFwibm9cIixcbiAgICAgIG5vdGVzOiAnZ28gdG8gd2FsbWFydCBjaGVhcCBmb29kJyxcbiAgICAgIHByb2plY3Q6IFwiSG9tZVwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkZpeCBDYXIgSXNzdWVzXCIsXG4gICAgICAvLyBkZXNjcmlwdGlvbjogXCJOZWVkIGZhc3QgY2FyXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTItMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6IFwidnJvb20gdnJvb21cIixcbiAgICAgIHByb2plY3Q6IFwiSG9tZVwiXG4gICAgfVxuICBdO1xuXG5cblxuXG4gIGNvbnN0IF9wcm9qZWN0TGlzdCA9IFsnSG9tZScsICdXb3JrJywgJ0NhciddO1xuXG4gIC8vIGNvbnN0IF9wcm9qZWN0TGlzdCA9IFtdO1xuXG5cblxuXG4gIGNvbnN0IF90b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgY29uc3QgX3Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgY29uc3QgX2VkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJyk7ICBcbiAgY29uc3QgX2VkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpXG4gXG5cblxuICBjb25zdCBwcm9qRm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tc2VsZWN0LXRhZycpO1xuICBjb25zdCB0b2RvRm9ybVNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tc2VsZWN0Jyk7XG4gIGNvbnN0IGVkaXRGb3JtU2VsZWN0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpO1xuICBjb25zdCBlZGl0UHJvalNlbGVjdFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QtdG9kb3MnKTtcbiAgY29uc3QgdG9kb0Zvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tcG9wdXAnKTtcbiAgY29uc3QgZWRpdEZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tcG9wdXAnKTtcbiAgY29uc3QgcHJvamVjdEZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1wb3B1cCcpO1xuICBjb25zdCBlZGl0UHJvakZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtcG9wdXAnKVxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1uYW1lJylcblxuXG4gIGNvbnN0IF9tZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWJ1dHRvbicpO1xuICBfbWVudUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGhpZ2hsaWdodFNlbGVjdGVkQnV0dG9uKGUpOyAgICBcbiAgICAgIGxldCBjdXJyZW50TWVudSA9IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCk7XG4gICAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoY3VycmVudE1lbnUpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG5cbiAgY29uc3QgX3N1Ym1pdFRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1mb3JtJyk7XG4gIF9zdWJtaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG8pO1xuXG5cblxuICBjb25zdCBfc2F2ZUVkaXRDaGFuZ2VzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtY2hhbmdlcycpO1xuICBfc2F2ZUVkaXRDaGFuZ2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZUVkaXRDaGFuZ2VzKTtcblxuXG4gIGNvbnN0IF9zdWJtaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xuICBfc3VibWl0UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcblxuXG5cbiAgY29uc3QgX2Nsb3NlRm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtZm9ybScpO1xuICBfY2xvc2VGb3JtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShmaW5kQ3VycmVudEZvcm1JblVzZSgpKVxuXG4gICAgfSlcbiAgfSk7XG5cblxuXG4gIGNvbnN0IF9zYXZlUHJvamVjdENoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1wcm9qZWN0LWNoYW5nZXMnKTtcbiAgX3NhdmVQcm9qZWN0Q2hhbmdlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVQcm9qZWN0Q2hhbmdlcylcblxuXG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdCcpXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IGluZGV4T2ZQcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC5vdmVyYWxsSW5kZXhcbiAgICBsZXQgcHJvaiA9IGdldFByb2plY3RMaXN0KClbaW5kZXhPZlByb2plY3RdXG5cbiAgICBkZWxldGVGcm9tTGlzdChwcm9qLCBnZXRQcm9qZWN0TGlzdCgpKVxuXG4gICAgbGV0IG9wdGlvbnNJblRhc2sgPSBbLi4uZWRpdFByb2pTZWxlY3RUYWcub3B0aW9uc107XG4gICAgb3B0aW9uc0luVGFzay5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW0uZGF0YXNldC5vdmVyYWxsSW5kZXg7XG4gICAgICAgIGxldCBpdGVtT2JqID0gZ2V0VG9kb0xpc3QoKVtpdGVtSW5kZXhdO1xuICAgICAgICBkZWxldGUgaXRlbU9iai5wcm9qZWN0XG4gICAgICB9IFxuICAgIH0pO1xuXG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZWRpdFByb2pGb3JtUG9wdXApXG4gICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCkpXG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZUFsbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYWxsJyk7XG4gIGRlbGV0ZUFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgaW5kZXhPZlByb2plY3QgPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxJbmRleFxuICAgIGxldCBwcm9qID0gZ2V0UHJvamVjdExpc3QoKVtpbmRleE9mUHJvamVjdF1cblxuICAgIGRlbGV0ZUZyb21MaXN0KHByb2osIGdldFByb2plY3RMaXN0KCkpXG4gICAgbGV0IG9wdGlvbnNJblRhc2sgPSBbLi4uZWRpdFByb2pTZWxlY3RUYWcub3B0aW9uc107XG4gICAgb3B0aW9uc0luVGFzay5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW0uZGF0YXNldC5vdmVyYWxsSW5kZXg7XG4gICAgICAgIGxldCBpdGVtT2JqID0gZ2V0VG9kb0xpc3QoKVtpdGVtSW5kZXhdO1xuICAgICAgICBkZWxldGVGcm9tTGlzdChpdGVtT2JqLCBnZXRUb2RvTGlzdCgpKVxuICAgICAgfSBcblxuICAgIH0pO1xuICAgIFxuICAgIGVkaXRQcm9qRm9ybVBvcHVwLmZpcnN0RWxlbWVudENoaWxkLnJlc2V0KClcbiAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShlZGl0UHJvakZvcm1Qb3B1cClcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKSlcblxuICAgIFxuICB9KVxuXG5cbiAgXG5cbiAgcmV0dXJuIHsgdG9kb0Zvcm1Qb3B1cCwgZWRpdEZvcm1Qb3B1cCwgcHJvamVjdEZvcm1Qb3B1cCwgZWRpdFByb2pGb3JtUG9wdXAsIHByb2pGb3JtU2VsZWN0VGFnLFxuICAgIHRvZG9Gb3JtU2VsZWN0VGFnLCBlZGl0Rm9ybVNlbGVjdFRhZywgZWRpdFByb2pTZWxlY3RUYWcsIHByb2plY3ROYW1lSW5wdXQsIGRlbGV0ZVByb2plY3RCdXR0b24sIFxuICAgIGRlbGV0ZUFsbEJ1dHRvbiwgZ2V0VG9kb0xpc3QsIGdldFByb2plY3RMaXN0LCBmaW5kSW5kZXhPZiwgdGFnRWRpdFN1Ym1pdEJ1dHRvbldpdGhJbmRleCwgdGFnV2l0aEluZGV4IH1cblxuXG59KSgpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXRvZG8tYnV0dG9uJykuY2xpY2soKTtcblxuZXhwb3J0IHsgdG9kbyB9XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudHMgfSBmcm9tIFwiLi9jcmVhdGVcIjtcblxuXG5jb25zdCByZW5kZXJUb2RvID0gKCgpID0+IHtcblxuXG4gIGNvbnN0IG9wZW5Gb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleCcpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1mb3JtLWludXNlJyk7XG5cbiAgfTtcblxuXG5cbiAgY29uc3QgY2xvc2VGb3JtID0gKGZvcm1DaG9zZW4pID0+IHtcbiAgICAvLy8vLy8gTmVlZCB0byByZXNldCBmb3JtIHdoZW4gYmVpbmcgY2xvc2VkLCBub3cgZGF0YSBzdGF5c1xuICAgIGZvcm1DaG9zZW4uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1mb3JtLWludXNlJyk7XG4gICAgZm9ybUNob3Nlbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcblxuICB9O1xuXG5cblxuXG4gIGNvbnN0IHByZWZpbGxFZGl0Rm9ybSA9IChlKSA9PiB7IFxuICAgIGNvbnNvbGUubG9nKGUpO1xuXG4gICAgbGV0IF90b2RvSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxUYXNrSW5kZXhcblxuICAgIGxldCBfYWxsVG9kb0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgbGV0IF9jdXJyZW50VG9kb09iamVjdCA9IF9hbGxUb2RvQXJyYXlbX3RvZG9JbmRleF07XG5cblxuICAgIF9lZGl0VGl0bGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QudGl0bGU7XG4gICAgLy8gX2VkaXREZXNjcmlwdGlvbi52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdub3RlcycpKSB7XG4gICAgICBfZWRpdE5vdGVzLnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0Lm5vdGVzO1xuICAgIH07XG5cbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdkdWVEYXRlJykpIHtcbiAgICAgIF9lZGl0RHVlRGF0ZS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5kdWVEYXRlO1xuICAgIH1cblxuXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgncHJpb3JpdHknKSkge1xuICAgICAgX2VkaXRQcmlvcml0eS52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5wcmlvcml0eTtcbiAgICB9XG5cblxuICAgIGlmIChfY3VycmVudFRvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ3Byb2plY3QnKSkge1xuICAgICAgX2VkaXRQcm9qZWN0LnZhbHVlID0gX2N1cnJlbnRUb2RvT2JqZWN0LnByb2plY3Q7XG4gICAgfVxuXG5cbiAgICAvLyBfZWRpdER1ZURhdGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QuZHVlRGF0ZVxuICAgIC8vIF9lZGl0UHJpb3JpdHkudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QucHJpb3JpdHlcblxuXG4gIH07XG5cblxuXG4gIGNvbnN0IHByZWZpbGxQcm9qRm9ybSA9ICh2YWx1ZXMsIG9wdGlvbnNBcnJheSkgPT4ge1xuXG4gICAgbGV0IF9jdXJyZW50UHJvak5hbWUgPSB2YWx1ZXMubGlzdE9mUHJvamVjdHNbdmFsdWVzLnByb2plY3RJbmRleF1cblxuICAgIF9lZGl0UHJvak5hbWUudmFsdWUgPSBfY3VycmVudFByb2pOYW1lXG5cbiAgICBsZXQgX3NlbGVjdGVkVmFsdWVzID0gdmFsdWVzLnRhc2tzQmVsb25naW5nVG9Qcm9qLm1hcCh0YXNrID0+IHRhc2sudGl0bGUpXG4gICAgXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9uc0FycmF5KSB7XG4gIFxuICAgICAgb3B0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcblxuICAgICAgaWYgKF9zZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgXG4gICAgfTtcblxuICB9O1xuXG5cblxuICBjb25zdCBjbGVhckRpc3BsYXkgPSAoKSA9PiB7XG4gXG4gICAgd2hpbGUgKF9jb250ZW50RGlzcGxheS5oYXNDaGlsZE5vZGVzKCkpIHtcbiBcbiAgICAgIF9jb250ZW50RGlzcGxheS5yZW1vdmVDaGlsZChfY29udGVudERpc3BsYXkuZmlyc3RDaGlsZClcbiAgICB9XG4gIH07XG5cblxuXG4gIGNvbnN0IGNsZWFyT2xkT3B0aW9ucyA9ICh0YWcpID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IFsuLi50YWcub3B0aW9uc107XG4gIFxuICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPSBcIlwiKSB7XG4gICAgICAgIG9wdGlvbi5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfTtcblxuXG5cblxuICBjb25zdCBhZGRUb2Rvc1RvRm9ybU9wdGlvbnMgPSAoc2VsZWN0VGFnLCBhbGxUb2Rvc0FycmF5KSA9PiB7XG4gICAgY2xlYXJPbGRPcHRpb25zKHNlbGVjdFRhZyk7XG5cbiAgICBhbGxUb2Rvc0FycmF5LmZvckVhY2godG9kbyA9PiB7XG4gICAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgICBzZWxlY3RUYWcuYWRkKG5ld09wdGlvbikgICAgICBcbiAgICB9KTtcbiAgICBcblxuXG4gIH07XG5cblxuXG5cbiAgY29uc3QgYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zPSAoc2VsZWN0VGFnLCBhbGxQcm9qZWN0c0FycmF5KSA9PiB7XG4gICAgY2xlYXJPbGRPcHRpb25zKHNlbGVjdFRhZyk7XG5cbiAgICBhbGxQcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICBzZWxlY3RUYWcuYWRkKG9wdGlvbikgICAgICBcbiAgICB9KTtcbiAgfTtcblxuXG5cblxuXG4gIGNvbnN0IHRvZ2dsZVRhc2tDb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBlLnRhcmdldC5sYWJlbHNbMF07XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGlzIGNvbXBsZXRlXCIpXG5cbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJylcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRhc2sgaW5jb21wbGV0ZVwiKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJylcblxuICAgIH1cblxuICB9O1xuXG5cblxuXG5cbiAgY29uc3QgdXBkYXRlUGFnZSA9IChtZW51QnV0dG9uU2VsZWN0ZWQpID0+IHtcblxuICAgIGNsZWFyRGlzcGxheSgpO1xuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZURpc3BsYXlIZWFkZXIobWVudUJ1dHRvblNlbGVjdGVkKSlcblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50cy5jcmVhdGVQYWdlTGlzdChtZW51QnV0dG9uU2VsZWN0ZWQpKVxuXG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHMuY3JlYXRlQWRkQnV0dG9uKG1lbnVCdXR0b25TZWxlY3RlZCkpO1xuXG5cblxuXG5cbiAgXG4gIH1cblxuXG5cbiAgY29uc3QgX2NvbnRlbnREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG5cbiAgY29uc3QgX2VkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJyk7ICBcblxuXG4gIGNvbnN0IF9lZGl0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpO1xuICAvLyBjb25zdCBfZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgX2VkaXROb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW5vdGVzJyk7XG4gIGNvbnN0IF9lZGl0RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZS1kYXRlJyk7XG4gIGNvbnN0IF9lZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcmlvcml0eScpO1xuICBjb25zdCBfZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0JylcblxuXG4gIGNvbnN0IF9lZGl0UHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LW5hbWUnKTtcblxuXG5cblxuIFxuICByZXR1cm4geyBvcGVuRm9ybSwgY2xvc2VGb3JtLCB1cGRhdGVQYWdlLCBhZGRUb2Rvc1RvRm9ybU9wdGlvbnMsXG4gICAgICAgICAgYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zLCB0b2dnbGVUYXNrQ29tcGxldGUsIHByZWZpbGxFZGl0Rm9ybSwgcHJlZmlsbFByb2pGb3JtIH1cblxuXG59KSgpO1xuXG5cbmV4cG9ydCB7IHJlbmRlclRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==