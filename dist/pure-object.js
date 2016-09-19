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
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var OBJECT = Object;
	var objectCreate = OBJECT.create;
	
	/**
	 * faster implementation of forEach
	 *
	 * @param {array<*>} array
	 * @param {function} fn
	 */
	var forEach = function forEach(array, fn) {
	  var length = array.length;
	
	  var index = -1;
	
	  while (++index < length) {
	    fn(array[index], index, array);
	  }
	};
	
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
	
	  var prototypeKeys = OBJECT.keys(prototype);
	
	  var prototypeObject = null;
	
	  if (prototypeKeys.length) {
	    prototypeObject = objectCreate(null);
	
	    forEach(prototypeKeys, function (key) {
	      prototypeObject[key] = prototype[key];
	    });
	  }
	
	  var bareObject = objectCreate(prototypeObject);
	
	  forEach(OBJECT.getOwnPropertyNames(object), function (key) {
	    var propertyDescriptor = OBJECT.getOwnPropertyDescriptor(object, key);
	
	    OBJECT.defineProperty(bareObject, key, propertyDescriptor);
	  });
	
	  return bareObject;
	};
	
	exports.default = pureObject;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pure-object.js.map