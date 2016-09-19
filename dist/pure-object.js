(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pureObject", [], factory);
	else if(typeof exports === 'object')
		exports["pureObject"] = factory();
	else
		root["pureObject"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(2);
	
	var objectKeys = Object.keys;
	
	/**
	 * create an object with no additional prototypical methods beyond
	 * what is passed in the second parameter
	 *
	 * @param {object} object
	 * @param {object} prototype={}
	 * @return {object}
	 */
	var pureObject = function pureObject(object) {
	  var prototype = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var prototypeKeys = objectKeys(prototype);
	
	  var prototypeObject = null;
	
	  if (prototypeKeys.length) {
	    prototypeObject = (0, _utils.createObject)();
	
	    prototypeKeys.forEach(function (key) {
	      prototypeObject[key] = prototype[key];
	    });
	  }
	
	  var bareObject = (0, _utils.createObject)(prototypeObject);
	
	  objectKeys(object).forEach(function (key) {
	    bareObject[key] = object[key];
	  });
	
	  return bareObject;
	};
	
	exports.default = pureObject;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * create a new object based on the prototype passed, defaulting to null (no prototype)
	 *
	 * @param {object} prototype=null
	 * @return {object}
	 */
	var createObject = function createObject() {
	  var prototype = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	  return Object.create(prototype);
	};
	
	exports.createObject = createObject;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pure-object.js.map