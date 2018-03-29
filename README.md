# pure-object

Create objects with no inhereted prototype

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Signature](#signature)
* [Benefits](#benefits)
* [Browser support](#browser-support)
* [Development](#development)

## Installation

```
$ npm i pure-object --save
```

## Usage

```javascript
// ES2015
import pure from "pure-object";

// CommonJS
const pure = require("pure-object").default;

// script
var pure = window.pureObject.default;

const objectToPurify = {
  foo: "bar"
};

// create an object with no prototype
const pureObject = pure(objectToPurify);

console.log(pureObject); // {foo: 'bar'}
console.log(object.toString); // [Function]
console.log(pureObject.toString); // undefined
console.log(Object.getPrototypeOf(pureObject)); // null

// create an object with only the prototypical methods you pass
const pureObjectWithProto = pure(objectToPurify, {
  bar() {
    console.log("baz");
  }
});

console.log(Object.getPrototypeOf(pureObject)); // {bar: [Function]}
console.log(object.toString); // [Function]
console.log(pureObject.toString); // undefined (bar is the only method on the prototype)
```

#### Signature

_pure(object: Object, prototype: Object)_

* `object`
  * Object whose key / value pairs will be shallow-cloned to the pure object with same property descriptor
  * Clones both enumerable and non-enumerable properties (uses `getOwnPropertyNames` and `getOwnPropertySymbols`)
* `prototype`
  * Object whose key / value pairs will be assigned to the pure object's prototype (if not passed, prototype is `null`)
  * Clones both enumerable and non-enumerable properties (uses `getOwnPropertyNames` and `getOwnPropertySymbols`)

## Benefits

1.  Tinier footprint (memory allocation is smaller than the standard object's)
2.  More logical looping (no need to check `hasOwnProperty` in for-in loops)
3.  Simplified prototypical chain (only the methods you explicitly set will be on the prototype)

It is very likely that a vast majority of your objects could be made into pure objects and you would never notice the difference.

## Browser support

* Chrome (all versions)
* Firefox (all versions)
* Edge (all versions)
* Opera 15+
* IE 9+
* Safari 6+
* iOS 8+
* Android 4+

## Development

Standard stuff, clone the repo and `npm install` dependencies. The npm scripts available:

* `build` => run webpack to build development `dist` file with NODE_ENV=development
* `build:minified` => run webpack to build production `dist` file with NODE_ENV=production
* `dev` => run webpack dev server to run example app / playground
* `dist` => runs `build` and `build:minified`
* `lint` => run ESLint against all files in the `src` folder
* `prepublish` => runs `prepublish:compile` when publishing
* `prepublish:compile` => run `lint`, `test:coverage`, `transpile:es`, `transpile:lib`, `dist`
* `test` => run AVA test functions with `NODE_ENV=test`
* `test:coverage` => run `test` but with `nyc` for coverage checker
* `test:watch` => run `test`, but with persistent watcher
* `transpile:lib` => run babel against all files in `src` to create files in `lib`
* `transpile:es` => run babel against all files in `src` to create files in `es`, preserving ES2015 modules (for
  [`pkg.module`](https://github.com/rollup/rollup/wiki/pkg.module))
