(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pureObject", [], factory);
	else if(typeof exports === 'object')
		exports["pureObject"] = factory();
	else
		root["pureObject"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

/**
 * create an object with no additional prototypical methods beyond
 * what is passed in the second parameter
 *
 * @param {object} object={}
 * @param {object} prototype={}
 * @return {object}
 */
var pureObject = function pureObject() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prototype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var protoPropertyNames = Object.getOwnPropertyNames(prototype);
  var protoPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(prototype) : [];

  var prototypeObject = null,
      propertyDescriptor = void 0;

  if (protoPropertyNames.length) {
    prototypeObject = Object.create(null);

    (0, _utils.forEach)(protoPropertyNames, function (key) {
      propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);

      Object.defineProperty(prototypeObject, key, propertyDescriptor);
    });
  }

  if (protoPropertySymbols.length) {
    if (prototypeObject === null) {
      prototypeObject = Object.create(null);
    }

    (0, _utils.forEach)(protoPropertySymbols, function (symbol) {
      propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, symbol);

      Object.defineProperty(prototypeObject, symbol, propertyDescriptor);
    });
  }

  var bareObject = Object.create(prototypeObject);
  var propertyNames = Object.getOwnPropertyNames(object);

  if (propertyNames.length) {
    (0, _utils.forEach)(propertyNames, function (key) {
      var propertyDescriptor = Object.getOwnPropertyDescriptor(object, key);

      Object.defineProperty(bareObject, key, propertyDescriptor);
    });
  }

  return bareObject;
}; // utils
exports.default = pureObject;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * faster implementation of forEach
 *
 * @param {array<*>} array
 * @param {number} array.length
 * @param {function} fn
 */
var forEach = exports.forEach = function forEach(array, fn) {
  var length = array.length;

  var index = -1;

  while (++index < length) {
    fn(array[index], index, array);
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=pure-object.js.map