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
___CSS_LOADER_EXPORT___.push([module.id, "/* :root {\n  --pseudo-counter: 'Yay'\n} */\n\nbody {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n\n}\n\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n/* \n.menu-button::after {\n  content: attr(counter-data);\n  font-size: 1rem;\n  border: 1px solid black;\n  margin-left: 5px;\n} */\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n#all-todo-button::after,\n#projects-button::after {\n  content: attr(counter-data);\n  font-size: 1rem;\n  border: 1px solid black;\n  margin-left: 5px;\n  padding: 2px;\n\n}\n\n/* .counter {\n  border: 1px solid black;\n\n} */\n\n\n.todo-display {\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.list {\n  margin-bottom: 5px;\n  list-style: none; \n  border: 1px solid black;\n\n}\n\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n\n.due-date-section {\n  padding-right: 10px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n\n\n.form-container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\n.form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  margin-top: 100px;\n  height: 500px;\n\n}\n\n/* #todo-form {\n\n}\n\n\n#edit-todo-form,\n#new-project-form,\n#edit-project-form {\n\n\n} */\n\n\n\n\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.form-buttons button {\n  border: 1px solid white;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n\n.submit-button:hover {\n  background-color: rgb(45, 231, 255);\n  border: 1px solid black;\n}\n\n\n.cancel-button {\n  margin-left: 10px;\n\n}\n\n.cancel-button:hover {\n  background-color: rgb(180, 180, 180);\n  border: 1px solid black;\n}\n\n\n\n\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n}\n\n\n.edit-project-button {\n  margin-left: 50px;\n}\n\n\n\n.delete-buttons-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.delete-buttons-container button {\n  width: 100%;\n  margin-bottom: 5px;\n  padding: 5px 10px;\n  border: 1px solid white;\n  cursor: pointer;\n}\n\n.delete-buttons-container button:hover {\n  background-color: red;\n  border: 1px solid black;\n  font-weight: bold;\n}\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* :root {\n  --pseudo-counter: 'Yay'\n} */\n\nbody {\n  margin: 0;\n}\n\n\n.todo-app {\n  display: flex;\n}\n\n\n.side-bar {\n  width: 30vw;\n  height: 100vh;\n  border-right: 1px solid black;\n}\n\n\n\n.menu-button {\n  width: 100%;\n  margin: 20px 0;\n  padding: 10px;\n  border: none;\n  font-size: 2rem;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  cursor: pointer;\n  font-weight: bold;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n\n}\n\n\n.menu-button:hover {\n  background-color: blanchedalmond;\n}\n\n/* \n.menu-button::after {\n  content: attr(counter-data);\n  font-size: 1rem;\n  border: 1px solid black;\n  margin-left: 5px;\n} */\n\n.current-menu-selected {\n  text-decoration: underline;\n  background-color: coral;\n}\n\n\n#all-todo-button::after,\n#projects-button::after {\n  content: attr(counter-data);\n  font-size: 1rem;\n  border: 1px solid black;\n  margin-left: 5px;\n  padding: 2px;\n\n}\n\n/* .counter {\n  border: 1px solid black;\n\n} */\n\n\n.todo-display {\n  width: 70vw;\n  height: 100vh;\n  position: relative;\n}\n\n\n.display-menu-header {\n  text-align: center;\n}\n\n\n.list {\n  margin-bottom: 5px;\n  list-style: none; \n  border: 1px solid black;\n\n}\n\n\n.shown-content {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n.task-done {\n  text-decoration: line-through;\n\n}\n\n\n.priority-marker {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n\n\n.hide {\n  display: none;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.list:hover .hide{\n  display: inline-flex;\n  background-color: green;\n}\n\n\n.active {\n  display: inline-flex;\n  background-color: green;\n  margin-left: 20px;\n  font-size: 0.8rem;\n  border: none;\n  cursor: pointer;\n}\n\n\n.project-section {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n\n.due-date-section {\n  padding-right: 10px;\n}\n\n\n.hidden-container {\n  display: none;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n\n.notes-container {\n  border: 1px solid black;\n  padding: 30px;\n\n}\n\n\n\n\n\n.add-new-todo-button,\n.add-new-project-button {\n  color: white;\n  position: absolute;\n  background-color: #008CBA;\n  bottom: 20px;\n  right: 20px;\n  padding: 0 15px;\n  font-size: 3rem;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n\n.add-new-todo-button:hover,\n.add-new-project-button:hover {\n  background-color: white;\n  border: 2px solid #008CBA;\n  color: #008CBA;\n}\n\n\n\n\n\n.form-container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  display: none;\n  z-index: 1;\n}\n\n.form {\n  border: 2px solid black;\n  padding: 60px 30px;\n  background-color: white;\n  position: relative;\n  margin-top: 100px;\n  height: 500px;\n\n}\n\n/* #todo-form {\n\n}\n\n\n#edit-todo-form,\n#new-project-form,\n#edit-project-form {\n\n\n} */\n\n\n\n\n\n.form-header {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n\n\n.x-button {\n  position: absolute;\n  right: 10px;\n  transform: rotate(45deg);\n  top: 3px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.x-button:hover {\n  font-size: 1.8rem;\n}\n\n\ntable {\n  border-spacing: 0 10px;\n}\n\n\n.form-label {\n  text-align: right;\n  vertical-align: top;\n}\n\ntextarea {\n  resize: none;\n}\n\n\n.form-buttons {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n\n}\n\n.form-buttons button {\n  border: 1px solid white;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n\n.submit-button:hover {\n  background-color: rgb(45, 231, 255);\n  border: 1px solid black;\n}\n\n\n.cancel-button {\n  margin-left: 10px;\n\n}\n\n.cancel-button:hover {\n  background-color: rgb(180, 180, 180);\n  border: 1px solid black;\n}\n\n\n\n\n\n\n\n.project-container {\n  border: 2px solid black;\n  padding: 10px 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n}\n\n\n.edit-project-button {\n  margin-left: 50px;\n}\n\n\n\n.delete-buttons-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.delete-buttons-container button {\n  width: 100%;\n  margin-bottom: 5px;\n  padding: 5px 10px;\n  border: 1px solid white;\n  cursor: pointer;\n}\n\n.delete-buttons-container button:hover {\n  background-color: red;\n  border: 1px solid black;\n  font-weight: bold;\n}\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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

    let _currentMenuTitle = currentMenu.textContent;

    let _todoTitlesList = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList().map(todo => todo.title);

    const _todoButton = document.createElement('button');
    _todoButton.setAttribute('type', 'button');
    _todoButton.textContent = '+';
    

    if (_currentMenuTitle == 'Projects') {
      _todoButton.classList.add('add-new-project-button');
      _todoButton.addEventListener('click', function() {
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.projectFormContainer)
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addItemsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.projFormSelectTag, _todoTitlesList)
      })
      
    } else {
      _todoButton.classList.add('add-new-todo-button');
      _todoButton.addEventListener('click', function() {
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.todoFormContainer)
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addItemsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.todoFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList())

      })

    }

    return _todoButton
    
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
    
  };


  const createAllTodosList = () => {
    const _listContainer = document.createElement('div');

    const _unorderdList = document.createElement('ul');
    _listContainer.appendChild(_unorderdList);

    let _allTasksArray = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    _allTasksArray.forEach(_task => {
      let _overallTodoIndex = _allTasksArray.indexOf(_task);

      let _listElement = listFactory(_task, _overallTodoIndex);

      _unorderdList.appendChild(_listElement.list);


      _listElement.checkBox.dataset['overallIndex'] = _overallTodoIndex;
      _listElement.checkBox.name = `task${_overallTodoIndex}`;
      _listElement.checkBox.id = `task${_overallTodoIndex}`;



      _listElement.label.setAttribute('for', `task${_overallTodoIndex}`);


    });

    return _listContainer


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
      let _projIndex = _listOfProjects.indexOf(_projectName); 


      const _projContainer = document.createElement('div');
      _projContainer.classList.add('project-container');
      _pageDisplay.appendChild(_projContainer);

      const _projHeader = document.createElement('div');
      _projHeader.classList.add('project-title');
      _projContainer.appendChild(_projHeader);


      const _projNameSection = document.createElement('h2');
      _projNameSection.textContent = _projectName;
      _projHeader.appendChild(_projNameSection);


      let _tasksBelongingToProj = _listOfTasks.filter(task => task.project == _projectName)

      const _editProjButton = document.createElement('button');
      _editProjButton.textContent = 'Edit Project';
      _editProjButton.classList.add('edit-project-button');
      _editProjButton.dataset['projectIndex'] = _projIndex;
      _editProjButton.addEventListener('click', function(e) {

        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editProjFormContainer);
        _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addItemsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.editProjSelectTag, _tasksBelongingToProj)


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
        let _overallTaskIndex = ___WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList().indexOf(_task)
        let _taskIndexLocal = _tasksBelongingToProj.indexOf(_task);


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




  const listFactory = (task, index) => {
    const list = document.createElement('li');
    list.classList.add('list');
  
  
  
    let _visibleContent = document.createElement('div');
    _visibleContent.classList.add('shown-content');
    list.appendChild(_visibleContent);
  
  
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkbox');

    checkBox.addEventListener('click', (e) => {
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.toggleTaskComplete(e);
      // todo.updateObject()
    });
  
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
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.openForm(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormContainer);
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.addItemsToFormOptions(___WEBPACK_IMPORTED_MODULE_0__.todo.editFormSelectTag, ___WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList());
      _render__WEBPACK_IMPORTED_MODULE_1__.renderTodo.prefillEditForm(e);
      ___WEBPACK_IMPORTED_MODULE_0__.todo.tagEditSubmitButtonWithIndex(e); /// LOOK INTO CHANGING THIS

    })
  
  
    _visibleContent.appendChild(editButton);
  
  
  
  
    let _expandButton = document.createElement('button');
    _expandButton.classList.add('hide', 'expand-button')
    _expandButton.textContent = 'expand'
  
    _expandButton.addEventListener('click', function() {

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
   







  const _contentContainer = document.querySelector('.todo-display');

  const HIGH_PRIORITY = 'red';
  const MEDIUM_PRIORITY = 'orange';
  const LOW_PRIORITY = 'cornflowerblue';



  return { createDisplayHeader, createAddButton, createPageList,  }
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

  const deleteKeyFromObj = (key, objects) => {
    objects.forEach(object => {
      delete object[key]
    })
  }







  const todoFactory = (data) => {
    let title = data.get('title');
    let dueDate = data.get('due-date');
    let priority = data.get('priority');
    let isTodoDone = 'no';
    let project = data.get('part-of-project');


    return { title, dueDate, priority, project, isTodoDone }

  };



  const getTodoList = () => {
    return _todoList
  };


  const getProjectList = () => {
    return _projectList;
  };

  const captureFormData = (form) => {
    return new FormData(form)
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


  const findCurrentMenuSelected = () => {
    return [..._menuButtons].filter(button => button.classList.contains('current-menu-selected'))[0];
  };



  const tagEditSubmitButtonWithIndex = (e) => {
    let _index = e.target.dataset.overallTaskIndex
    _saveEditChangesButton.dataset.overallTaskIndex = _index;    
  };



  const tagWithIndex = (inputs, array) => {
    inputs.forEach(input => {
      let index = array.indexOf(input.value);
      input.dataset['overallIndex'] = index;
    })
  }



  const deleteFromList = (item, list) => {
    let itemIndex = list.indexOf(item);
    list.splice(itemIndex, 1);
  };



  const findCurrentFormInUse = () => {

    let allForms = [...document.querySelectorAll('.form-container')];
    
    let currentForm = allForms.filter(form => form.classList.contains('current-form-inuse'))[0]
 
    return currentForm;
  };



  const createTodo = function(e) {
    e.preventDefault();

    let _menu = findCurrentMenuSelected();



    let _formData = captureFormData(_todoForm);

    let _newTodo = todoFactory(_formData);

  
    _todoList.push(_newTodo);

    updateCounterData(_menu, getTodoList());


    _todoForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse());
    
    
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(_menu)
  };  
  
  

  const createProject = (e) => {
    e.preventDefault();

    let _currentMenu = findCurrentMenuSelected();

    let _projectData = captureFormData(_projectForm);

    let _projectName = _projectData.get('project-name');

    if (_projectList.includes(_projectName)) {
      alert('project already exists');
      return;
    };

    _projectList.push(_projectName);
    updateCounterData(_currentMenu, getProjectList())


    let _taskAddedToProj = [...projFormSelectTag.selectedOptions].map(option => option.value)

    addProjectToTaskObj(_projectName, _taskAddedToProj)



    
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(_currentMenu)

    _projectForm.reset();
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse()); 
  };


  const addProjectToTaskObj = (projName, projTasks) => {

    projTasks.forEach(taskName => {
      _todoList.forEach(todo => {
        if (taskName == todo.title) {
          todo.project = projName

        }
      })
    })
  }



  const saveEditChanges = (e) => {
    e.preventDefault();

    let _editedFormData = captureFormData(_editForm);

    let _listOfTodos = getTodoList();

    let _objIndex = e.target.dataset.overallTaskIndex;

    let _todoObj = _listOfTodos[_objIndex];

    let newTitle = _editedFormData.get('edit-title');
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
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse());

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
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse());
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(findCurrentMenuSelected())

  };



  const updateCounterData = (button, list) => {
    button.setAttribute('counter-data', list.length)  
  };





























 
  const _todoList = [
    {
      title: "Complete Presentation",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "Notes on meeting prep",
      project: "Work"
    },

    {
      title: "Do groceries",
      dueDate: "2021-11-18",
      priority: "high",
      isTodoDone: "no",
      notes: 'go to walmart cheap food',
      project: "Home"
    },

    {
      title: "Fix Car Issues",
      dueDate: "2021-12-10",
      priority: "medium",
      isTodoDone: "no",
      notes: "vroom vroom",
      project: "Home"
    }
  ];




  const _projectList = ['Home', 'Work', 'Car'];

  // const _projectList = [];
  






  const _todoForm = document.querySelector('#todo-form');
  const _projectForm = document.querySelector('#new-project-form');
  const _editForm = document.querySelector('#edit-todo-form');  
  const _editProjectForm = document.querySelector('#edit-project-form')
 


  const projFormSelectTag = document.querySelector('#project-form-select-tag');
  const todoFormSelectTag = document.querySelector('#todo-form-select-tag');
  const editFormSelectTag = document.querySelector('#edit-form-proj-select-tag');
  const editProjSelectTag = document.querySelector('#edit-project-select-tag');
  const todoFormContainer = document.querySelector('#todo-form-container');
  const editFormContainer = document.querySelector('#edit-todo-form-container');
  const projectFormContainer = document.querySelector('#new-project-form-container');
  const editProjFormContainer = document.querySelector('#edit-project-form-container')
  const projectNameInput = document.querySelector('#edit-project-name')


  const _menuButtons = document.querySelectorAll('.menu-button');
  _menuButtons.forEach(button => {

    button.addEventListener('click', function(e) {
      highlightSelectedButton(e);    
      let currentMenu = findCurrentMenuSelected();
      _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(currentMenu);
    });

  });




  // const root = document.querySelector(':root')
  // root.style.setProperty("--pseudo-text", "New")
  

  const allTodoButton = document.querySelector('#all-todo-button')
  allTodoButton.setAttribute('counter-data', getTodoList().length);


  const todayButton = document.querySelector('#today-button')


  const tomorrowButton = document.querySelector('#tomorrow-button')



  const projectButton = document.querySelector('#projects-button');
  projectButton.setAttribute('counter-data', getProjectList().length);











  const _submitTodoForm = document.querySelector('#submit-todo-form');
  _submitTodoForm.addEventListener('click', createTodo);

  const _saveEditChangesButton = document.querySelector('#save-todo-changes');
  _saveEditChangesButton.addEventListener('click', saveEditChanges);


  const _submitProjectForm = document.querySelector('#create-project');
  _submitProjectForm.addEventListener('click', createProject);

  const _saveProjectChangesButton = document.querySelector('#save-project-changes');
  _saveProjectChangesButton.addEventListener('click', saveProjectChanges)




  const _closeFormButtons = document.querySelectorAll('.close-form');
  _closeFormButtons.forEach(button => {
    button.addEventListener('click', function() {
      _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse())
    })
  });



  const deleteProjectButton = document.querySelector('.delete-project')
  deleteProjectButton.addEventListener('click', function(e) {
    let indexOfProject = e.target.dataset.overallIndex
    let proj = getProjectList()[indexOfProject];
    let _menuCurrently = findCurrentMenuSelected();

    deleteFromList(proj, getProjectList())
    updateCounterData(_menuCurrently, getProjectList())

    let optionsInTask = [...editProjSelectTag.options];
    optionsInTask.forEach(item => {
      if (item.value !== "") {
        let itemIndex = item.dataset.overallIndex;
        let itemObj = getTodoList()[itemIndex];
        delete itemObj.project
      } 
    });


    editProjFormContainer.firstElementChild.reset()

    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse())
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
    
    editProjFormContainer.firstElementChild.reset()
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.closeForm(findCurrentFormInUse())
    _render__WEBPACK_IMPORTED_MODULE_0__.renderTodo.updatePage(findCurrentMenuSelected())

    
  })



  return { projectNameInput, deleteProjectButton, deleteAllButton, projectFormContainer, todoFormContainer, editFormContainer, editProjFormContainer, 
    projFormSelectTag, todoFormSelectTag, editFormSelectTag, editProjSelectTag, 
    getTodoList, getProjectList, tagEditSubmitButtonWithIndex, tagWithIndex  }


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

  const updatePage = (menuButtonSelected) => {

    clearDisplay();

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.createElements.createDisplayHeader(menuButtonSelected))

    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.createElements.createPageList(menuButtonSelected))


    _contentDisplay.appendChild(_create__WEBPACK_IMPORTED_MODULE_1__.createElements.createAddButton(menuButtonSelected));
  
  };


  const clearDisplay = () => {
 
    while (_contentDisplay.hasChildNodes()) {
 
      _contentDisplay.removeChild(_contentDisplay.firstChild)
    }
  };




  const openForm = (form) => {
    form.setAttribute('style', 'display: flex');
    form.classList.add('current-form-inuse');

  };



  const closeForm = (formChosen) => {
    ////// Need to reset form when being closed, now data stays
    formChosen.classList.remove('current-form-inuse');
    formChosen.setAttribute('style', 'display: none');

  };







  const clearOldOptions = (tag) => {
    let options = [...tag.options];
  
    options.forEach(option => {
      if (option.textContent != "") {
        option.remove()
      }
    })

  };


  const addItemsToFormOptions = (selectTag, array) => {
    clearOldOptions(selectTag);

    array.forEach(item => {
      let newOption = document.createElement('option');
      typeof item == 'object'? newOption.textContent = item.title: newOption.textContent = item;
      selectTag.add(newOption)      
    });

  };


  const toggleTaskComplete = (e) => {
    let task = e.target.labels[0];

    if (e.target.checked) {
      // console.log("task is complete")
      task.classList.add('task-done')

    } else {
      // console.log("task incomplete");
      task.classList.remove('task-done');
    }

  };


  const prefillEditForm = (e) => { 
    // console.log(e);

    let _todoIndex = e.target.dataset.overallTaskIndex

    let _allTodoArray = _index__WEBPACK_IMPORTED_MODULE_0__.todo.getTodoList();

    let _currentTodoObject = _allTodoArray[_todoIndex];


    _editTitle.value = _currentTodoObject.title;
    
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



  // const addTodosToFormOptions = (selectTag, allTodosArray) => {
  //   clearOldOptions(selectTag);

  //   allTodosArray.forEach(todo => {
  //     let newOption = document.createElement('option');
  //     newOption.textContent = todo.title
  //     selectTag.add(newOption)      
  //   });    


  // };



  // const addProjectsToFormOptions= (selectTag, allProjectsArray) => {
  //   clearOldOptions(selectTag);

  //   allProjectsArray.forEach(project => {
  //     let option = document.createElement('option');
  //     option.textContent = project
  //     selectTag.add(option)      
  //   });
  // };





  const _contentDisplay = document.querySelector('.todo-display');

  const _editForm = document.querySelector('#edit-todo-form');  


  const _editTitle = document.querySelector('#edit-title');
  const _editNotes = document.querySelector('#edit-notes');
  const _editDueDate = document.querySelector('#edit-due-date');
  const _editPriority = document.querySelector('#edit-priority');
  const _editProject = document.querySelector('#edit-form-proj-select-tag');


  const _editProjName = document.querySelector('#edit-project-name');




 
  return { updatePage, openForm, closeForm, addItemsToFormOptions, toggleTaskComplete, prefillEditForm, prefillProjForm }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLFFBQVEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsYUFBYSxRQUFRLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxZQUFZLFVBQVUsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLGNBQWMsVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFB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QzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogOnJvb3Qge1xcbiAgLS1wc2V1ZG8tY291bnRlcjogJ1lheSdcXG59ICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi50b2RvLWFwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uc2lkZS1iYXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcbn1cXG5cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi8qIFxcbi5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihjb3VudGVyLWRhdGEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn0gKi9cXG5cXG4uY3VycmVudC1tZW51LXNlbGVjdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxufVxcblxcblxcbiNhbGwtdG9kby1idXR0b246OmFmdGVyLFxcbiNwcm9qZWN0cy1idXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoY291bnRlci1kYXRhKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG5cXG59XFxuXFxuLyogLmNvdW50ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufSAqL1xcblxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4uZGlzcGxheS1tZW51LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcblxcblxcbi5zaG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFxufVxcblxcblxcbi5wcmlvcml0eS1tYXJrZXIge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcblxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubGlzdDpob3ZlciAuaGlkZXtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi5kdWUtZGF0ZS1zZWN0aW9uIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5oaWRkZW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcblxcblxcblxcbi5hZGQtbmV3LXRvZG8tYnV0dG9uLFxcbi5hZGQtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbjpob3ZlcixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDhDQkE7XFxuICBjb2xvcjogIzAwOENCQTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG5cXG59XFxuXFxuLyogI3RvZG8tZm9ybSB7XFxuXFxufVxcblxcblxcbiNlZGl0LXRvZG8tZm9ybSxcXG4jbmV3LXByb2plY3QtZm9ybSxcXG4jZWRpdC1wcm9qZWN0LWZvcm0ge1xcblxcblxcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG5cXG5cXG4ueC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ueC1idXR0b246aG92ZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XFxufVxcblxcblxcbi5mb3JtLWxhYmVsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmZvcm0tYnV0dG9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAyMzEsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFxufVxcblxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuXFxuXFxuLmRlbGV0ZS1idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHOztBQUVIO0VBQ0UsU0FBUztBQUNYOzs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7OztBQUlBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOzs7QUFHekI7OztBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7OztBQUdBOztFQUVFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkOztBQUVBOzs7R0FHRzs7O0FBR0g7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7O0FBRXpCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOzs7QUFHQTtFQUNFLDZCQUE2Qjs7QUFFL0I7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhOztBQUVmOzs7Ozs7QUFNQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7Ozs7O0FBTUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhOztBQUVmOztBQUVBOzs7Ozs7Ozs7O0dBVUc7Ozs7OztBQU1IO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekI7Ozs7Ozs7O0FBUUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIDpyb290IHtcXG4gIC0tcHNldWRvLWNvdW50ZXI6ICdZYXknXFxufSAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4udG9kby1hcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLnNpZGUtYmFyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4vKiBcXG4ubWVudS1idXR0b246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoY291bnRlci1kYXRhKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59ICovXFxuXFxuLmN1cnJlbnQtbWVudS1zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcbn1cXG5cXG5cXG4jYWxsLXRvZG8tYnV0dG9uOjphZnRlcixcXG4jcHJvamVjdHMtYnV0dG9uOjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGNvdW50ZXItZGF0YSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuXFxufVxcblxcbi8qIC5jb3VudGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn0gKi9cXG5cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLmRpc3BsYXktbWVudS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBsaXN0LXN0eWxlOiBub25lOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG5cXG5cXG4uc2hvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5cXG4udGFzay1kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcbn1cXG5cXG5cXG4ucHJpb3JpdHktbWFya2VyIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmxpc3Q6aG92ZXIgLmhpZGV7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUtc2VjdGlvbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4uaGlkZGVuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAzMHB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWRkLW5ldy10b2RvLWJ1dHRvbixcXG4uYWRkLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctdG9kby1idXR0b246aG92ZXIsXFxuLmFkZC1uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4Q0JBO1xcbiAgY29sb3I6ICMwMDhDQkE7XFxufVxcblxcblxcblxcblxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuXFxufVxcblxcbi8qICN0b2RvLWZvcm0ge1xcblxcbn1cXG5cXG5cXG4jZWRpdC10b2RvLWZvcm0sXFxuI25ldy1wcm9qZWN0LWZvcm0sXFxuI2VkaXQtcHJvamVjdC1mb3JtIHtcXG5cXG5cXG59ICovXFxuXFxuXFxuXFxuXFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuXFxuXFxuLngtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLngtYnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG5cXG50YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbn1cXG5cXG5cXG4uZm9ybS1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgMjMxLCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcbn1cXG5cXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcblxcblxcbi5kZWxldGUtYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cblxuXG5jb25zdCBjcmVhdGVFbGVtZW50cyA9ICgoKSA9PiB7XG5cblxuICBjb25zdCBjcmVhdGVEaXNwbGF5SGVhZGVyID0gKGhpZ2hsaWdodGVkQnV0dG9uKSA9PiB7XG5cbiAgICBsZXQgdGl0bGUgPSBoaWdobGlnaHRlZEJ1dHRvbi50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IF9oZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBfaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbWVudS1oZWFkZXInKVxuICAgIF9jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250YWluZXIpO1xuXG5cbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIF9oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuXG4gICAgcmV0dXJuIF9oZWFkZXJDb250YWluZXJcblxuICB9O1xuXG5cbiAgY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKGN1cnJlbnRNZW51KSA9PiB7XG5cbiAgICBsZXQgX2N1cnJlbnRNZW51VGl0bGUgPSBjdXJyZW50TWVudS50ZXh0Q29udGVudDtcblxuICAgIGxldCBfdG9kb1RpdGxlc0xpc3QgPSB0b2RvLmdldFRvZG9MaXN0KCkubWFwKHRvZG8gPT4gdG9kby50aXRsZSk7XG5cbiAgICBjb25zdCBfdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIF90b2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBfdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBcblxuICAgIGlmIChfY3VycmVudE1lbnVUaXRsZSA9PSAnUHJvamVjdHMnKSB7XG4gICAgICBfdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gICAgICBfdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8ucHJvamVjdEZvcm1Db250YWluZXIpXG4gICAgICAgIHJlbmRlclRvZG8uYWRkSXRlbXNUb0Zvcm1PcHRpb25zKHRvZG8ucHJvakZvcm1TZWxlY3RUYWcsIF90b2RvVGl0bGVzTGlzdClcbiAgICAgIH0pXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy10b2RvLWJ1dHRvbicpO1xuICAgICAgX3RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVuZGVyVG9kby5vcGVuRm9ybSh0b2RvLnRvZG9Gb3JtQ29udGFpbmVyKVxuICAgICAgICByZW5kZXJUb2RvLmFkZEl0ZW1zVG9Gb3JtT3B0aW9ucyh0b2RvLnRvZG9Gb3JtU2VsZWN0VGFnLCB0b2RvLmdldFByb2plY3RMaXN0KCkpXG5cbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gX3RvZG9CdXR0b25cbiAgICBcbiAgfTtcblxuXG5cblxuICBjb25zdCBjcmVhdGVQYWdlTGlzdCA9IChidXR0b25TZWxlY3RlZCkgPT4ge1xuICAgIGxldCBtZW51U2VsZWN0ZWQgPSBidXR0b25TZWxlY3RlZC50ZXh0Q29udGVudFxuXG4gICAgY29uc3QgcmV0dXJuZWRMaXN0ID0ge1xuICAgICAgJ0FsbCBUb0Rvcyc6IGNyZWF0ZUFsbFRvZG9zTGlzdCxcbiAgICAgIC8vICdUb2RheSc6IHRvZGF5TGlzdCxcbiAgICAgIC8vICdUb21vcnJvdyc6IHRvbW9ycm93TGlzdCxcbiAgICAgICdQcm9qZWN0cyc6IGNyZWF0ZVByb2plY3RzTGlzdCxcblxuICAgIH07XG5cblxuICAgIHJldHVybiByZXR1cm5lZExpc3RbbWVudVNlbGVjdGVkXSgpO1xuICAgIFxuICB9O1xuXG5cbiAgY29uc3QgY3JlYXRlQWxsVG9kb3NMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IF9saXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBfdW5vcmRlcmRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBfbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChfdW5vcmRlcmRMaXN0KTtcblxuICAgIGxldCBfYWxsVGFza3NBcnJheSA9IHRvZG8uZ2V0VG9kb0xpc3QoKTtcblxuICAgIF9hbGxUYXNrc0FycmF5LmZvckVhY2goX3Rhc2sgPT4ge1xuICAgICAgbGV0IF9vdmVyYWxsVG9kb0luZGV4ID0gX2FsbFRhc2tzQXJyYXkuaW5kZXhPZihfdGFzayk7XG5cbiAgICAgIGxldCBfbGlzdEVsZW1lbnQgPSBsaXN0RmFjdG9yeShfdGFzaywgX292ZXJhbGxUb2RvSW5kZXgpO1xuXG4gICAgICBfdW5vcmRlcmRMaXN0LmFwcGVuZENoaWxkKF9saXN0RWxlbWVudC5saXN0KTtcblxuXG4gICAgICBfbGlzdEVsZW1lbnQuY2hlY2tCb3guZGF0YXNldFsnb3ZlcmFsbEluZGV4J10gPSBfb3ZlcmFsbFRvZG9JbmRleDtcbiAgICAgIF9saXN0RWxlbWVudC5jaGVja0JveC5uYW1lID0gYHRhc2ske19vdmVyYWxsVG9kb0luZGV4fWA7XG4gICAgICBfbGlzdEVsZW1lbnQuY2hlY2tCb3guaWQgPSBgdGFzayR7X292ZXJhbGxUb2RvSW5kZXh9YDtcblxuXG5cbiAgICAgIF9saXN0RWxlbWVudC5sYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrJHtfb3ZlcmFsbFRvZG9JbmRleH1gKTtcblxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gX2xpc3RDb250YWluZXJcblxuXG4gIH07XG5cblxuICBjb25zdCBjcmVhdGVQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBfbGlzdE9mVGFza3MgPSB0b2RvLmdldFRvZG9MaXN0KCk7XG4gICAgY29uc3QgX2xpc3RPZlByb2plY3RzID0gdG9kby5nZXRQcm9qZWN0TGlzdCgpO1xuXG5cbiAgICBpZiAoX2xpc3RPZlByb2plY3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zdCBfbm9Qcm9qZWN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIF9ub1Byb2plY3RNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHByb2plY3RzIHlldCBjcmVhdGVkLCBjbGljayBidXR0b24gdG8gY3JlYXRlIGEgbmV3IHByb2plY3QnXG5cbiAgICAgIHJldHVybiBfbm9Qcm9qZWN0TWVzc2FnZTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBfcGFnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIF9saXN0T2ZQcm9qZWN0cy5mb3JFYWNoKF9wcm9qZWN0TmFtZSA9PiB7XG4gICAgICBsZXQgX3Byb2pJbmRleCA9IF9saXN0T2ZQcm9qZWN0cy5pbmRleE9mKF9wcm9qZWN0TmFtZSk7IFxuXG5cbiAgICAgIGNvbnN0IF9wcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBfcHJvakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgX3BhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKF9wcm9qQ29udGFpbmVyKTtcblxuICAgICAgY29uc3QgX3Byb2pIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIF9wcm9qSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgIF9wcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKF9wcm9qSGVhZGVyKTtcblxuXG4gICAgICBjb25zdCBfcHJvak5hbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIF9wcm9qTmFtZVNlY3Rpb24udGV4dENvbnRlbnQgPSBfcHJvamVjdE5hbWU7XG4gICAgICBfcHJvakhlYWRlci5hcHBlbmRDaGlsZChfcHJvak5hbWVTZWN0aW9uKTtcblxuXG4gICAgICBsZXQgX3Rhc2tzQmVsb25naW5nVG9Qcm9qID0gX2xpc3RPZlRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PSBfcHJvamVjdE5hbWUpXG5cbiAgICAgIGNvbnN0IF9lZGl0UHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgX2VkaXRQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICBfZWRpdFByb2pCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgX2VkaXRQcm9qQnV0dG9uLmRhdGFzZXRbJ3Byb2plY3RJbmRleCddID0gX3Byb2pJbmRleDtcbiAgICAgIF9lZGl0UHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8uZWRpdFByb2pGb3JtQ29udGFpbmVyKTtcbiAgICAgICAgcmVuZGVyVG9kby5hZGRJdGVtc1RvRm9ybU9wdGlvbnModG9kby5lZGl0UHJvalNlbGVjdFRhZywgX3Rhc2tzQmVsb25naW5nVG9Qcm9qKVxuXG5cbiAgICAgICAgbGV0IF9vcHRpb25zID0gdG9kby5lZGl0UHJvalNlbGVjdFRhZy5vcHRpb25zO1xuICAgICAgICBsZXQgX3ZhbHVlc05lZWRlZCA9IHsncHJvamVjdEluZGV4JzogX3Byb2pJbmRleCwgJ2xpc3RPZlByb2plY3RzJzogX2xpc3RPZlByb2plY3RzLCAndGFza3NCZWxvbmdpbmdUb1Byb2onOiBfdGFza3NCZWxvbmdpbmdUb1Byb2p9O1xuICAgICAgICByZW5kZXJUb2RvLnByZWZpbGxQcm9qRm9ybShfdmFsdWVzTmVlZGVkLCBfb3B0aW9ucyk7XG5cblxuICAgICAgICBsZXQgX3RvZG9MaXN0VGl0bGVzQXJyYXkgPSB0b2RvLmdldFRvZG9MaXN0KCkubWFwKGl0ZW0gPT4gaXRlbS50aXRsZSlcbiAgICAgICAgdG9kby50YWdXaXRoSW5kZXgoWy4uLnRvZG8uZWRpdFByb2pTZWxlY3RUYWcuc2VsZWN0ZWRPcHRpb25zXSwgX3RvZG9MaXN0VGl0bGVzQXJyYXkpXG5cbiAgICAgICAgdG9kby50YWdXaXRoSW5kZXgoW3RvZG8ucHJvamVjdE5hbWVJbnB1dF0sIHRvZG8uZ2V0UHJvamVjdExpc3QoKSlcblxuICAgICAgICB0b2RvLmRlbGV0ZVByb2plY3RCdXR0b24uZGF0YXNldFsnb3ZlcmFsbEluZGV4J10gPSBfcHJvakluZGV4XG4gICAgICAgIHRvZG8uZGVsZXRlQWxsQnV0dG9uLmRhdGFzZXRbJ292ZXJhbGxJbmRleCddID0gX3Byb2pJbmRleFxuICAgICAgfSlcblxuICAgICAgX3Byb2pIZWFkZXIuYXBwZW5kQ2hpbGQoX2VkaXRQcm9qQnV0dG9uKTtcblxuXG5cblxuICAgICAgY29uc3QgX3VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIF9wcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKF91TClcblxuXG5cbiAgICAgIF90YXNrc0JlbG9uZ2luZ1RvUHJvai5mb3JFYWNoKF90YXNrID0+IHtcbiAgICAgICAgbGV0IF9vdmVyYWxsVGFza0luZGV4ID0gdG9kby5nZXRUb2RvTGlzdCgpLmluZGV4T2YoX3Rhc2spXG4gICAgICAgIGxldCBfdGFza0luZGV4TG9jYWwgPSBfdGFza3NCZWxvbmdpbmdUb1Byb2ouaW5kZXhPZihfdGFzayk7XG5cblxuICAgICAgICBsZXQgX2xpc3RUYWcgPSBsaXN0RmFjdG9yeShfdGFzaywgX292ZXJhbGxUYXNrSW5kZXgpXG5cbiAgICAgICAgX3VMLmFwcGVuZENoaWxkKF9saXN0VGFnLmxpc3QpO1xuXG4gICAgICAgIFxuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5kYXRhc2V0Wydwcm9qZWN0SW5kZXgnXSA9IF9wcm9qSW5kZXg7XG4gICAgICAgIF9saXN0VGFnLmNoZWNrQm94LmRhdGFzZXRbJ2xvY2FsVGFza0luZGV4J10gPSBfdGFza0luZGV4TG9jYWw7IFxuICAgICAgICBfbGlzdFRhZy5jaGVja0JveC5uYW1lID0gYG9iaiR7X3Byb2pJbmRleH10YXNrJHtfdGFza0luZGV4TG9jYWx9YDsgICAgXG4gICAgICAgIF9saXN0VGFnLmNoZWNrQm94LmlkID0gYG9iaiR7X3Byb2pJbmRleH10YXNrJHtfdGFza0luZGV4TG9jYWx9YDsgIFxuICBcbiAgXG5cbiAgICAgICAgX2xpc3RUYWcubGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgb2JqJHtfcHJvakluZGV4fXRhc2ske190YXNrSW5kZXhMb2NhbH1gKTtcbiAgICAgIH0pO1xuICAgICAgXG5cbiAgICB9KVxuXG5cblxuXG4gICAgcmV0dXJuIF9wYWdlRGlzcGxheVxuXG4gIH07XG5cblxuXG5cbiAgY29uc3QgbGlzdEZhY3RvcnkgPSAodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX3Zpc2libGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3Zpc2libGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3duLWNvbnRlbnQnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKF92aXNpYmxlQ29udGVudCk7XG4gIFxuICBcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5cbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICByZW5kZXJUb2RvLnRvZ2dsZVRhc2tDb21wbGV0ZShlKTtcbiAgICAgIC8vIHRvZG8udXBkYXRlT2JqZWN0KClcbiAgICB9KTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgXG4gIFxuICBcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX3ByaW9yaXR5TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3ByaW9yaXR5TWFya2VyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1hcmtlcicpO1xuICBcbiAgXG4gICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSElHSF9QUklPUklUWTtcbiAgICAgICAgYnJlYWs7XG4gICAgXG4gIFxuICBcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IE1FRElVTV9QUklPUklUWTtcbiAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgXG4gIFxuICBcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIF9wcmlvcml0eU1hcmtlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgX3ByaW9yaXR5TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IExPV19QUklPUklUWTtcbiAgICAgICAgYnJlYWs7XG4gIFxuICBcbiAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBfcHJpb3JpdHlNYXJrZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBicmVhaztcbiAgICB9O1xuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoX3ByaW9yaXR5TWFya2VyKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScsICdlZGl0LXRhc2stYnV0dG9uJylcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGVkaXRCdXR0b24uZGF0YXNldFsnb3ZlcmFsbFRhc2tJbmRleCddID0gaW5kZXg7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICByZW5kZXJUb2RvLm9wZW5Gb3JtKHRvZG8uZWRpdEZvcm1Db250YWluZXIpO1xuICAgICAgcmVuZGVyVG9kby5hZGRJdGVtc1RvRm9ybU9wdGlvbnModG9kby5lZGl0Rm9ybVNlbGVjdFRhZywgdG9kby5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICAgIHJlbmRlclRvZG8ucHJlZmlsbEVkaXRGb3JtKGUpO1xuICAgICAgdG9kby50YWdFZGl0U3VibWl0QnV0dG9uV2l0aEluZGV4KGUpOyAvLy8gTE9PSyBJTlRPIENIQU5HSU5HIFRISVNcblxuICAgIH0pXG4gIFxuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIFxuICBcbiAgXG4gIFxuICAgIGxldCBfZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgX2V4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJywgJ2V4cGFuZC1idXR0b24nKVxuICAgIF9leHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kJ1xuICBcbiAgICBfZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9PSAnZXhwYW5kJz8gdGhpcy50ZXh0Q29udGVudCA9ICdjb2xsYXBzZScgOiB0aGlzLnRleHRDb250ZW50ID0gJ2V4cGFuZCc7XG4gIFxuICBcbiAgICAgIGxldCBfaGlkZGVuQ29udGVudCA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoX2hpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICBfaGlkZGVuQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2hpZGRlbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIF92aXNpYmxlQ29udGVudC5hcHBlbmRDaGlsZChfZXhwYW5kQnV0dG9uKTtcbiAgXG4gIFxuICBcbiAgXG4gICAgbGV0IF9wcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIF9wcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VjdGlvbicpO1xuICAgIGlmICgncHJvamVjdCcgaW4gdGFzaykge1xuICAgICAgX3Byb2pDb250YWluZXIudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHt0YXNrLnByb2plY3R9YDtcbiAgICB9O1xuICBcbiAgICBfdmlzaWJsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoX3Byb2pDb250YWluZXIpO1xuICBcbiAgXG4gIFxuICAgIGxldCBfZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBfZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1zZWN0aW9uJyk7XG4gICAgaWYgKCdkdWVEYXRlJyBpbiB0YXNrKSB7XG4gICAgICBfZHVlRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG4gICAgfTtcbiAgXG4gICAgX3Zpc2libGVDb250ZW50LmFwcGVuZENoaWxkKF9kdWVEYXRlQ29udGFpbmVyKTtcbiAgXG4gIFxuICBcbiAgXG4gICAgbGV0IF9jb2xsYXBzZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfY29sbGFwc2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1jb250YWluZXInKTtcbiAgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChfY29sbGFwc2VkQ29udGFpbmVyKTtcbiAgXG4gIFxuICBcbiAgICBsZXQgX25vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX25vdGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbnRhaW5lcicpO1xuICAgICdub3RlcycgaW4gdGFzayA/IF9ub3Rlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2subm90ZXMgOiBcbiAgICAgICAgICAgICAgX25vdGVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ05vIG5vdGVzIGZvciB0aGlzIHRhc2suIEVkaXQgdGFzayB0byBhZGQgbm90ZXMnO1xuICAgIFxuICAgIF9jb2xsYXBzZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoX25vdGVzQ29udGFpbmVyKTtcbiAgICBcbiAgXG4gIFxuICBcbiAgICByZXR1cm4ge2xpc3QsIGNoZWNrQm94LCBsYWJlbCwgZWRpdEJ1dHRvbn1cbiAgfVxuICAgXG5cblxuXG5cblxuXG5cbiAgY29uc3QgX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgY29uc3QgSElHSF9QUklPUklUWSA9ICdyZWQnO1xuICBjb25zdCBNRURJVU1fUFJJT1JJVFkgPSAnb3JhbmdlJztcbiAgY29uc3QgTE9XX1BSSU9SSVRZID0gJ2Nvcm5mbG93ZXJibHVlJztcblxuXG5cbiAgcmV0dXJuIHsgY3JlYXRlRGlzcGxheUhlYWRlciwgY3JlYXRlQWRkQnV0dG9uLCBjcmVhdGVQYWdlTGlzdCwgIH1cbn0pKCk7XG5cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudHMgfSIsImltcG9ydCB7IHJlbmRlclRvZG8gfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgZGVsZXRlS2V5RnJvbU9iaiA9IChrZXksIG9iamVjdHMpID0+IHtcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XVxuICAgIH0pXG4gIH1cblxuXG5cblxuXG5cblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gZGF0YS5nZXQoJ3RpdGxlJyk7XG4gICAgbGV0IGR1ZURhdGUgPSBkYXRhLmdldCgnZHVlLWRhdGUnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkYXRhLmdldCgncHJpb3JpdHknKTtcbiAgICBsZXQgaXNUb2RvRG9uZSA9ICdubyc7XG4gICAgbGV0IHByb2plY3QgPSBkYXRhLmdldCgncGFydC1vZi1wcm9qZWN0Jyk7XG5cblxuICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgaXNUb2RvRG9uZSB9XG5cbiAgfTtcblxuXG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF90b2RvTGlzdFxuICB9O1xuXG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9wcm9qZWN0TGlzdDtcbiAgfTtcblxuICBjb25zdCBjYXB0dXJlRm9ybURhdGEgPSAoZm9ybSkgPT4ge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEoZm9ybSlcbiAgfTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGNvbnN0IGhpZ2hsaWdodFNlbGVjdGVkQnV0dG9uID0gKGV2ZW50KSA9PiB7XG5cbiAgICBjb25zdCBzZWxlY3RlZEJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcblxuICAgIF9tZW51QnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNlbGVjdGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbWVudS1zZWxlY3RlZCcpO1xuXG4gIH07XG5cblxuICBjb25zdCBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLl9tZW51QnV0dG9uc10uZmlsdGVyKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1lbnUtc2VsZWN0ZWQnKSlbMF07XG4gIH07XG5cblxuXG4gIGNvbnN0IHRhZ0VkaXRTdWJtaXRCdXR0b25XaXRoSW5kZXggPSAoZSkgPT4ge1xuICAgIGxldCBfaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxUYXNrSW5kZXhcbiAgICBfc2F2ZUVkaXRDaGFuZ2VzQnV0dG9uLmRhdGFzZXQub3ZlcmFsbFRhc2tJbmRleCA9IF9pbmRleDsgICAgXG4gIH07XG5cblxuXG4gIGNvbnN0IHRhZ1dpdGhJbmRleCA9IChpbnB1dHMsIGFycmF5KSA9PiB7XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihpbnB1dC52YWx1ZSk7XG4gICAgICBpbnB1dC5kYXRhc2V0WydvdmVyYWxsSW5kZXgnXSA9IGluZGV4O1xuICAgIH0pXG4gIH1cblxuXG5cbiAgY29uc3QgZGVsZXRlRnJvbUxpc3QgPSAoaXRlbSwgbGlzdCkgPT4ge1xuICAgIGxldCBpdGVtSW5kZXggPSBsaXN0LmluZGV4T2YoaXRlbSk7XG4gICAgbGlzdC5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgfTtcblxuXG5cbiAgY29uc3QgZmluZEN1cnJlbnRGb3JtSW5Vc2UgPSAoKSA9PiB7XG5cbiAgICBsZXQgYWxsRm9ybXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyJyldO1xuICAgIFxuICAgIGxldCBjdXJyZW50Rm9ybSA9IGFsbEZvcm1zLmZpbHRlcihmb3JtID0+IGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LWZvcm0taW51c2UnKSlbMF1cbiBcbiAgICByZXR1cm4gY3VycmVudEZvcm07XG4gIH07XG5cblxuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IF9tZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcblxuXG5cbiAgICBsZXQgX2Zvcm1EYXRhID0gY2FwdHVyZUZvcm1EYXRhKF90b2RvRm9ybSk7XG5cbiAgICBsZXQgX25ld1RvZG8gPSB0b2RvRmFjdG9yeShfZm9ybURhdGEpO1xuXG4gIFxuICAgIF90b2RvTGlzdC5wdXNoKF9uZXdUb2RvKTtcblxuICAgIHVwZGF0ZUNvdW50ZXJEYXRhKF9tZW51LCBnZXRUb2RvTGlzdCgpKTtcblxuXG4gICAgX3RvZG9Gb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSk7XG4gICAgXG4gICAgXG4gICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKF9tZW51KVxuICB9OyAgXG4gIFxuICBcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgX2N1cnJlbnRNZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcblxuICAgIGxldCBfcHJvamVjdERhdGEgPSBjYXB0dXJlRm9ybURhdGEoX3Byb2plY3RGb3JtKTtcblxuICAgIGxldCBfcHJvamVjdE5hbWUgPSBfcHJvamVjdERhdGEuZ2V0KCdwcm9qZWN0LW5hbWUnKTtcblxuICAgIGlmIChfcHJvamVjdExpc3QuaW5jbHVkZXMoX3Byb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoJ3Byb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgX3Byb2plY3RMaXN0LnB1c2goX3Byb2plY3ROYW1lKTtcbiAgICB1cGRhdGVDb3VudGVyRGF0YShfY3VycmVudE1lbnUsIGdldFByb2plY3RMaXN0KCkpXG5cblxuICAgIGxldCBfdGFza0FkZGVkVG9Qcm9qID0gWy4uLnByb2pGb3JtU2VsZWN0VGFnLnNlbGVjdGVkT3B0aW9uc10ubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpXG5cbiAgICBhZGRQcm9qZWN0VG9UYXNrT2JqKF9wcm9qZWN0TmFtZSwgX3Rhc2tBZGRlZFRvUHJvailcblxuXG5cbiAgICBcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoX2N1cnJlbnRNZW51KVxuXG4gICAgX3Byb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSk7IFxuICB9O1xuXG5cbiAgY29uc3QgYWRkUHJvamVjdFRvVGFza09iaiA9IChwcm9qTmFtZSwgcHJvalRhc2tzKSA9PiB7XG5cbiAgICBwcm9qVGFza3MuZm9yRWFjaCh0YXNrTmFtZSA9PiB7XG4gICAgICBfdG9kb0xpc3QuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgaWYgKHRhc2tOYW1lID09IHRvZG8udGl0bGUpIHtcbiAgICAgICAgICB0b2RvLnByb2plY3QgPSBwcm9qTmFtZVxuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cblxuICBjb25zdCBzYXZlRWRpdENoYW5nZXMgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBfZWRpdGVkRm9ybURhdGEgPSBjYXB0dXJlRm9ybURhdGEoX2VkaXRGb3JtKTtcblxuICAgIGxldCBfbGlzdE9mVG9kb3MgPSBnZXRUb2RvTGlzdCgpO1xuXG4gICAgbGV0IF9vYmpJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQub3ZlcmFsbFRhc2tJbmRleDtcblxuICAgIGxldCBfdG9kb09iaiA9IF9saXN0T2ZUb2Rvc1tfb2JqSW5kZXhdO1xuXG4gICAgbGV0IG5ld1RpdGxlID0gX2VkaXRlZEZvcm1EYXRhLmdldCgnZWRpdC10aXRsZScpO1xuICAgIGxldCBuZXdOb3RlcyA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtbm90ZXMnKTtcbiAgICBsZXQgbmV3RHVlRGF0ZSA9IF9lZGl0ZWRGb3JtRGF0YS5nZXQoJ2VkaXQtZHVlLWRhdGUnKTtcbiAgICBsZXQgbmV3UHJpb3JpdHkgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LXByaW9yaXR5Jyk7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBfZWRpdGVkRm9ybURhdGEuZ2V0KCdlZGl0LXByb2plY3QnKTtcblxuICAgIF90b2RvT2JqLnRpdGxlID0gbmV3VGl0bGU7XG5cblxuICAgIG5ld0R1ZURhdGUgPT0gJyc/IGRlbGV0ZSBfdG9kb09iai5kdWVEYXRlOiBfdG9kb09iai5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblxuICAgIG5ld05vdGVzID09ICcnPyBkZWxldGUgX3RvZG9PYmoubm90ZXM6IF90b2RvT2JqLm5vdGVzID0gbmV3Tm90ZXM7XG5cbiAgICBuZXdQcmlvcml0eSA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLnByaW9yaXR5OiBfdG9kb09iai5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgbmV3UHJvamVjdCA9PSAnJz8gZGVsZXRlIF90b2RvT2JqLnByb2plY3Q6IF90b2RvT2JqLnByb2plY3QgPSBuZXdQcm9qZWN0O1xuXG4gICAgXG4gICAgX2VkaXRGb3JtLnJlc2V0KCk7XG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSk7XG5cbiAgICBsZXQgX2N1cnJlbnRNZW51ID0gZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKTtcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoX2N1cnJlbnRNZW51KTtcblxuICB9O1xuXG5cblxuICBjb25zdCBzYXZlUHJvamVjdENoYW5nZXMgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBfZWRpdGVkUHJvakZvcm1EYXRhID0gY2FwdHVyZUZvcm1EYXRhKF9lZGl0UHJvamVjdEZvcm0pO1xuICAgIGxldCBfY29tcGxldGVMaXN0T2ZUYXNrcyA9IGdldFRvZG9MaXN0KCk7XG4gICAgbGV0IF9jb21wbGV0ZUxpc3RPZk9iamVjdHMgPSBnZXRQcm9qZWN0TGlzdCgpO1xuXG4gICAgbGV0IF9mb3JtT3B0aW9ucyA9IFsuLi5lZGl0UHJvalNlbGVjdFRhZy5vcHRpb25zXTtcbiAgICBsZXQgX3Byb2pJbmRleCA9IHByb2plY3ROYW1lSW5wdXQuZGF0YXNldC5vdmVyYWxsSW5kZXg7XG5cbiAgIFxuICAgIF9mb3JtT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBpZiAoIW9wdGlvbi5zZWxlY3RlZCAmJiBvcHRpb24udmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IG9wdGlvbi5kYXRhc2V0Lm92ZXJhbGxJbmRleDtcbiAgICAgICAgbGV0IHRhc2tPYmplY3QgPSBfY29tcGxldGVMaXN0T2ZUYXNrc1t0YXNrSW5kZXhdO1xuICAgICAgICBkZWxldGUgdGFza09iamVjdC5wcm9qZWN0O1xuICAgICAgfVxuICAgIH0pXG5cbiAgXG4gICAgbGV0IF9uZXdQcm9qTmFtZSA9IF9lZGl0ZWRQcm9qRm9ybURhdGEuZ2V0KCdlZGl0LXByb2plY3QtbmFtZScpO1xuXG4gICAgX2NvbXBsZXRlTGlzdE9mT2JqZWN0c1tfcHJvakluZGV4XSA9IF9uZXdQcm9qTmFtZTtcblxuICAgIF9lZGl0UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICByZW5kZXJUb2RvLmNsb3NlRm9ybShmaW5kQ3VycmVudEZvcm1JblVzZSgpKTtcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKSlcblxuICB9O1xuXG5cblxuICBjb25zdCB1cGRhdGVDb3VudGVyRGF0YSA9IChidXR0b24sIGxpc3QpID0+IHtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdjb3VudGVyLWRhdGEnLCBsaXN0Lmxlbmd0aCkgIFxuICB9O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiBcbiAgY29uc3QgX3RvZG9MaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbXBsZXRlIFByZXNlbnRhdGlvblwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTEyLTEwXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIGlzVG9kb0RvbmU6IFwibm9cIixcbiAgICAgIG5vdGVzOiBcIk5vdGVzIG9uIG1lZXRpbmcgcHJlcFwiLFxuICAgICAgcHJvamVjdDogXCJXb3JrXCJcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGl0bGU6IFwiRG8gZ3JvY2VyaWVzXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTEtMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIGlzVG9kb0RvbmU6IFwibm9cIixcbiAgICAgIG5vdGVzOiAnZ28gdG8gd2FsbWFydCBjaGVhcCBmb29kJyxcbiAgICAgIHByb2plY3Q6IFwiSG9tZVwiXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkZpeCBDYXIgSXNzdWVzXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMTItMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgaXNUb2RvRG9uZTogXCJub1wiLFxuICAgICAgbm90ZXM6IFwidnJvb20gdnJvb21cIixcbiAgICAgIHByb2plY3Q6IFwiSG9tZVwiXG4gICAgfVxuICBdO1xuXG5cblxuXG4gIGNvbnN0IF9wcm9qZWN0TGlzdCA9IFsnSG9tZScsICdXb3JrJywgJ0NhciddO1xuXG4gIC8vIGNvbnN0IF9wcm9qZWN0TGlzdCA9IFtdO1xuICBcblxuXG5cblxuXG5cbiAgY29uc3QgX3RvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xuICBjb25zdCBfcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtZm9ybScpO1xuICBjb25zdCBfZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10b2RvLWZvcm0nKTsgIFxuICBjb25zdCBfZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1mb3JtJylcbiBcblxuXG4gIGNvbnN0IHByb2pGb3JtU2VsZWN0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1zZWxlY3QtdGFnJyk7XG4gIGNvbnN0IHRvZG9Gb3JtU2VsZWN0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybS1zZWxlY3QtdGFnJyk7XG4gIGNvbnN0IGVkaXRGb3JtU2VsZWN0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZm9ybS1wcm9qLXNlbGVjdC10YWcnKTtcbiAgY29uc3QgZWRpdFByb2pTZWxlY3RUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LXNlbGVjdC10YWcnKTtcbiAgY29uc3QgdG9kb0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtLWNvbnRhaW5lcicpO1xuICBjb25zdCBlZGl0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRvZG8tZm9ybS1jb250YWluZXInKTtcbiAgY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgY29uc3QgZWRpdFByb2pGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1mb3JtLWNvbnRhaW5lcicpXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LW5hbWUnKVxuXG5cbiAgY29uc3QgX21lbnVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtYnV0dG9uJyk7XG4gIF9tZW51QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBoaWdobGlnaHRTZWxlY3RlZEJ1dHRvbihlKTsgICAgXG4gICAgICBsZXQgY3VycmVudE1lbnUgPSBmaW5kQ3VycmVudE1lbnVTZWxlY3RlZCgpO1xuICAgICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKGN1cnJlbnRNZW51KTtcbiAgICB9KTtcblxuICB9KTtcblxuXG5cblxuICAvLyBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKVxuICAvLyByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wc2V1ZG8tdGV4dFwiLCBcIk5ld1wiKVxuICBcblxuICBjb25zdCBhbGxUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10b2RvLWJ1dHRvbicpXG4gIGFsbFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKCdjb3VudGVyLWRhdGEnLCBnZXRUb2RvTGlzdCgpLmxlbmd0aCk7XG5cblxuICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS1idXR0b24nKVxuXG5cbiAgY29uc3QgdG9tb3Jyb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9tb3Jyb3ctYnV0dG9uJylcblxuXG5cbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1idXR0b24nKTtcbiAgcHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NvdW50ZXItZGF0YScsIGdldFByb2plY3RMaXN0KCkubGVuZ3RoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGNvbnN0IF9zdWJtaXRUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdG9kby1mb3JtJyk7XG4gIF9zdWJtaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG8pO1xuXG4gIGNvbnN0IF9zYXZlRWRpdENoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS10b2RvLWNoYW5nZXMnKTtcbiAgX3NhdmVFZGl0Q2hhbmdlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVFZGl0Q2hhbmdlcyk7XG5cblxuICBjb25zdCBfc3VibWl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgX3N1Ym1pdFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdCk7XG5cbiAgY29uc3QgX3NhdmVQcm9qZWN0Q2hhbmdlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLXByb2plY3QtY2hhbmdlcycpO1xuICBfc2F2ZVByb2plY3RDaGFuZ2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVByb2plY3RDaGFuZ2VzKVxuXG5cblxuXG4gIGNvbnN0IF9jbG9zZUZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWZvcm0nKTtcbiAgX2Nsb3NlRm9ybUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSlcbiAgICB9KVxuICB9KTtcblxuXG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdCcpXG4gIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IGluZGV4T2ZQcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC5vdmVyYWxsSW5kZXhcbiAgICBsZXQgcHJvaiA9IGdldFByb2plY3RMaXN0KClbaW5kZXhPZlByb2plY3RdO1xuICAgIGxldCBfbWVudUN1cnJlbnRseSA9IGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCk7XG5cbiAgICBkZWxldGVGcm9tTGlzdChwcm9qLCBnZXRQcm9qZWN0TGlzdCgpKVxuICAgIHVwZGF0ZUNvdW50ZXJEYXRhKF9tZW51Q3VycmVudGx5LCBnZXRQcm9qZWN0TGlzdCgpKVxuXG4gICAgbGV0IG9wdGlvbnNJblRhc2sgPSBbLi4uZWRpdFByb2pTZWxlY3RUYWcub3B0aW9uc107XG4gICAgb3B0aW9uc0luVGFzay5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW0uZGF0YXNldC5vdmVyYWxsSW5kZXg7XG4gICAgICAgIGxldCBpdGVtT2JqID0gZ2V0VG9kb0xpc3QoKVtpdGVtSW5kZXhdO1xuICAgICAgICBkZWxldGUgaXRlbU9iai5wcm9qZWN0XG4gICAgICB9IFxuICAgIH0pO1xuXG5cbiAgICBlZGl0UHJvakZvcm1Db250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVzZXQoKVxuXG4gICAgcmVuZGVyVG9kby5jbG9zZUZvcm0oZmluZEN1cnJlbnRGb3JtSW5Vc2UoKSlcbiAgICByZW5kZXJUb2RvLnVwZGF0ZVBhZ2UoZmluZEN1cnJlbnRNZW51U2VsZWN0ZWQoKSlcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlQWxsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1hbGwnKTtcbiAgZGVsZXRlQWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGxldCBpbmRleE9mUHJvamVjdCA9IGUudGFyZ2V0LmRhdGFzZXQub3ZlcmFsbEluZGV4XG4gICAgbGV0IHByb2ogPSBnZXRQcm9qZWN0TGlzdCgpW2luZGV4T2ZQcm9qZWN0XVxuXG4gICAgZGVsZXRlRnJvbUxpc3QocHJvaiwgZ2V0UHJvamVjdExpc3QoKSlcblxuICAgIGxldCBvcHRpb25zSW5UYXNrID0gWy4uLmVkaXRQcm9qU2VsZWN0VGFnLm9wdGlvbnNdO1xuICAgIG9wdGlvbnNJblRhc2suZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtLmRhdGFzZXQub3ZlcmFsbEluZGV4O1xuICAgICAgICBsZXQgaXRlbU9iaiA9IGdldFRvZG9MaXN0KClbaXRlbUluZGV4XTtcbiAgICAgICAgZGVsZXRlRnJvbUxpc3QoaXRlbU9iaiwgZ2V0VG9kb0xpc3QoKSlcbiAgICAgIH0gXG5cbiAgICB9KTtcbiAgICBcbiAgICBlZGl0UHJvakZvcm1Db250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVzZXQoKVxuICAgIHJlbmRlclRvZG8uY2xvc2VGb3JtKGZpbmRDdXJyZW50Rm9ybUluVXNlKCkpXG4gICAgcmVuZGVyVG9kby51cGRhdGVQYWdlKGZpbmRDdXJyZW50TWVudVNlbGVjdGVkKCkpXG5cbiAgICBcbiAgfSlcblxuXG5cbiAgcmV0dXJuIHsgcHJvamVjdE5hbWVJbnB1dCwgZGVsZXRlUHJvamVjdEJ1dHRvbiwgZGVsZXRlQWxsQnV0dG9uLCBwcm9qZWN0Rm9ybUNvbnRhaW5lciwgdG9kb0Zvcm1Db250YWluZXIsIGVkaXRGb3JtQ29udGFpbmVyLCBlZGl0UHJvakZvcm1Db250YWluZXIsIFxuICAgIHByb2pGb3JtU2VsZWN0VGFnLCB0b2RvRm9ybVNlbGVjdFRhZywgZWRpdEZvcm1TZWxlY3RUYWcsIGVkaXRQcm9qU2VsZWN0VGFnLCBcbiAgICBnZXRUb2RvTGlzdCwgZ2V0UHJvamVjdExpc3QsIHRhZ0VkaXRTdWJtaXRCdXR0b25XaXRoSW5kZXgsIHRhZ1dpdGhJbmRleCAgfVxuXG5cbn0pKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtdG9kby1idXR0b24nKS5jbGljaygpO1xuXG5leHBvcnQgeyB0b2RvIH1cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50cyB9IGZyb20gXCIuL2NyZWF0ZVwiO1xuXG5cbmNvbnN0IHJlbmRlclRvZG8gPSAoKCkgPT4ge1xuXG4gIGNvbnN0IHVwZGF0ZVBhZ2UgPSAobWVudUJ1dHRvblNlbGVjdGVkKSA9PiB7XG5cbiAgICBjbGVhckRpc3BsYXkoKTtcblxuICAgIF9jb250ZW50RGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50cy5jcmVhdGVEaXNwbGF5SGVhZGVyKG1lbnVCdXR0b25TZWxlY3RlZCkpXG5cbiAgICBfY29udGVudERpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHMuY3JlYXRlUGFnZUxpc3QobWVudUJ1dHRvblNlbGVjdGVkKSlcblxuXG4gICAgX2NvbnRlbnREaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzLmNyZWF0ZUFkZEJ1dHRvbihtZW51QnV0dG9uU2VsZWN0ZWQpKTtcbiAgXG4gIH07XG5cblxuICBjb25zdCBjbGVhckRpc3BsYXkgPSAoKSA9PiB7XG4gXG4gICAgd2hpbGUgKF9jb250ZW50RGlzcGxheS5oYXNDaGlsZE5vZGVzKCkpIHtcbiBcbiAgICAgIF9jb250ZW50RGlzcGxheS5yZW1vdmVDaGlsZChfY29udGVudERpc3BsYXkuZmlyc3RDaGlsZClcbiAgICB9XG4gIH07XG5cblxuXG5cbiAgY29uc3Qgb3BlbkZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWZvcm0taW51c2UnKTtcblxuICB9O1xuXG5cblxuICBjb25zdCBjbG9zZUZvcm0gPSAoZm9ybUNob3NlbikgPT4ge1xuICAgIC8vLy8vLyBOZWVkIHRvIHJlc2V0IGZvcm0gd2hlbiBiZWluZyBjbG9zZWQsIG5vdyBkYXRhIHN0YXlzXG4gICAgZm9ybUNob3Nlbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWZvcm0taW51c2UnKTtcbiAgICBmb3JtQ2hvc2VuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuXG4gIH07XG5cblxuXG5cblxuXG5cbiAgY29uc3QgY2xlYXJPbGRPcHRpb25zID0gKHRhZykgPT4ge1xuICAgIGxldCBvcHRpb25zID0gWy4uLnRhZy5vcHRpb25zXTtcbiAgXG4gICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9IFwiXCIpIHtcbiAgICAgICAgb3B0aW9uLnJlbW92ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICB9O1xuXG5cbiAgY29uc3QgYWRkSXRlbXNUb0Zvcm1PcHRpb25zID0gKHNlbGVjdFRhZywgYXJyYXkpID0+IHtcbiAgICBjbGVhck9sZE9wdGlvbnMoc2VsZWN0VGFnKTtcblxuICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICB0eXBlb2YgaXRlbSA9PSAnb2JqZWN0Jz8gbmV3T3B0aW9uLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTogbmV3T3B0aW9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgIHNlbGVjdFRhZy5hZGQobmV3T3B0aW9uKSAgICAgIFxuICAgIH0pO1xuXG4gIH07XG5cblxuICBjb25zdCB0b2dnbGVUYXNrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGxldCB0YXNrID0gZS50YXJnZXQubGFiZWxzWzBdO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGFzayBpcyBjb21wbGV0ZVwiKVxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGFzayBpbmNvbXBsZXRlXCIpO1xuICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRvbmUnKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIGNvbnN0IHByZWZpbGxFZGl0Rm9ybSA9IChlKSA9PiB7IFxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuXG4gICAgbGV0IF90b2RvSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm92ZXJhbGxUYXNrSW5kZXhcblxuICAgIGxldCBfYWxsVG9kb0FycmF5ID0gdG9kby5nZXRUb2RvTGlzdCgpO1xuXG4gICAgbGV0IF9jdXJyZW50VG9kb09iamVjdCA9IF9hbGxUb2RvQXJyYXlbX3RvZG9JbmRleF07XG5cblxuICAgIF9lZGl0VGl0bGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QudGl0bGU7XG4gICAgXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgnbm90ZXMnKSkge1xuICAgICAgX2VkaXROb3Rlcy52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5ub3RlcztcbiAgICB9O1xuXG4gICAgaWYgKF9jdXJyZW50VG9kb09iamVjdC5oYXNPd25Qcm9wZXJ0eSgnZHVlRGF0ZScpKSB7XG4gICAgICBfZWRpdER1ZURhdGUudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QuZHVlRGF0ZTtcbiAgICB9XG5cblxuICAgIGlmIChfY3VycmVudFRvZG9PYmplY3QuaGFzT3duUHJvcGVydHkoJ3ByaW9yaXR5JykpIHtcbiAgICAgIF9lZGl0UHJpb3JpdHkudmFsdWUgPSBfY3VycmVudFRvZG9PYmplY3QucHJpb3JpdHk7XG4gICAgfVxuXG5cbiAgICBpZiAoX2N1cnJlbnRUb2RvT2JqZWN0Lmhhc093blByb3BlcnR5KCdwcm9qZWN0JykpIHtcbiAgICAgIF9lZGl0UHJvamVjdC52YWx1ZSA9IF9jdXJyZW50VG9kb09iamVjdC5wcm9qZWN0O1xuICAgIH1cblxuICB9O1xuXG5cblxuICBjb25zdCBwcmVmaWxsUHJvakZvcm0gPSAodmFsdWVzLCBvcHRpb25zQXJyYXkpID0+IHtcblxuICAgIGxldCBfY3VycmVudFByb2pOYW1lID0gdmFsdWVzLmxpc3RPZlByb2plY3RzW3ZhbHVlcy5wcm9qZWN0SW5kZXhdXG5cbiAgICBfZWRpdFByb2pOYW1lLnZhbHVlID0gX2N1cnJlbnRQcm9qTmFtZVxuXG4gICAgbGV0IF9zZWxlY3RlZFZhbHVlcyA9IHZhbHVlcy50YXNrc0JlbG9uZ2luZ1RvUHJvai5tYXAodGFzayA9PiB0YXNrLnRpdGxlKVxuICAgIFxuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnNBcnJheSkge1xuICBcbiAgICAgIG9wdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG5cbiAgICAgIGlmIChfc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIFxuICAgIH07XG5cbiAgfTtcblxuXG5cbiAgLy8gY29uc3QgYWRkVG9kb3NUb0Zvcm1PcHRpb25zID0gKHNlbGVjdFRhZywgYWxsVG9kb3NBcnJheSkgPT4ge1xuICAvLyAgIGNsZWFyT2xkT3B0aW9ucyhzZWxlY3RUYWcpO1xuXG4gIC8vICAgYWxsVG9kb3NBcnJheS5mb3JFYWNoKHRvZG8gPT4ge1xuICAvLyAgICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAvLyAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAvLyAgICAgc2VsZWN0VGFnLmFkZChuZXdPcHRpb24pICAgICAgXG4gIC8vICAgfSk7ICAgIFxuXG5cbiAgLy8gfTtcblxuXG5cbiAgLy8gY29uc3QgYWRkUHJvamVjdHNUb0Zvcm1PcHRpb25zPSAoc2VsZWN0VGFnLCBhbGxQcm9qZWN0c0FycmF5KSA9PiB7XG4gIC8vICAgY2xlYXJPbGRPcHRpb25zKHNlbGVjdFRhZyk7XG5cbiAgLy8gICBhbGxQcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gIC8vICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIC8vICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gIC8vICAgICBzZWxlY3RUYWcuYWRkKG9wdGlvbikgICAgICBcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuXG5cblxuXG4gIGNvbnN0IF9jb250ZW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuICBjb25zdCBfZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10b2RvLWZvcm0nKTsgIFxuXG5cbiAgY29uc3QgX2VkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XG4gIGNvbnN0IF9lZGl0Tm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlcycpO1xuICBjb25zdCBfZWRpdER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kdWUtZGF0ZScpO1xuICBjb25zdCBfZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKTtcbiAgY29uc3QgX2VkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZm9ybS1wcm9qLXNlbGVjdC10YWcnKTtcblxuXG4gIGNvbnN0IF9lZGl0UHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LW5hbWUnKTtcblxuXG5cblxuIFxuICByZXR1cm4geyB1cGRhdGVQYWdlLCBvcGVuRm9ybSwgY2xvc2VGb3JtLCBhZGRJdGVtc1RvRm9ybU9wdGlvbnMsIHRvZ2dsZVRhc2tDb21wbGV0ZSwgcHJlZmlsbEVkaXRGb3JtLCBwcmVmaWxsUHJvakZvcm0gfVxufSkoKTtcblxuXG5leHBvcnQgeyByZW5kZXJUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=