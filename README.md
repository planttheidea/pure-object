# pure-object

Create objects with no inhereted prototype

#### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Benefits](#benefits)
* [Development](#development)

#### Installation

```
$ npm i pure-object --save
```

#### Usage

```javascript
// ES2015
import pure from 'pure-object';

// CommonJS
const pure = require('pure-object');

// script
var pure = window.pureObject;

const objectToPurify = {
  foo: 'bar'
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
    console.log('baz');
  }
});

console.log(Object.getPrototypeOf(pureObject)); // {bar: [Function]}
console.log(object.toString); // [Function]
console.log(pureObject.toString); // undefined (bar is the only method on the prototype)
```

**_pure(objectToClone: Object, prototype: Object)_**

* *objectToClone: Object*
  * Object whose key / value pairs will be shallow-cloned to the pure object with same property descriptor
  * Clones both enumerable and non-enumerable properties (uses `getOwnPropertyNames`)
* *prototype: Object*
  * Object whose key / value pairs will be assigned to the pure object's prototype (if not passed, prototype is `null`)

#### Benefits

1. Tinier footprint (memory allocation is smaller than the standard object's)
2. More logical looping (no need to check `hasOwnProperty` in for-in loops)
3. Simplified prototypical chain (only the methods you explicitly set will be on the prototype)

It is very likely that a vast majority (perhaps all) of your objects could be made into pure objects and you would never notice the difference (except for the memory savings and the lack of `hasOwnProperty` checkers!).

#### Development

Standard stuff, clone the repo and `npm install` dependencies. The npm scripts available:
* `build` => run webpack to build pure-object.js with NODE_ENV=development
* `build-minifed` => run webpack to build pure-object.min.js with NODE_ENV=production
* `dev` => run webpack dev server to run example app (playground!)
* `lint` => run ESLint against all files in the `src` folder
* `prepublish` => run `lint`, `test`, `transpile`, `build`, and `build-minified`
* `test` => run AVA test functions with `NODE_ENV=test`
* `test:watch` => same as `test`, but runs persistent watcher
* `transpile` => run babel against all files in `src` to create files in `lib`
