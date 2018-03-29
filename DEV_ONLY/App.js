import React from 'react';
import {render} from 'react-dom';

import pure from '../src';

console.log(pure());

const originalObject = {
  foo: 'bar'
};

const emptyObject = pure(originalObject);

console.log(emptyObject);

const objectWithProto = pure(originalObject, {
  bar() {
    console.log(this.foo);
  },
  [Symbol('baz')]() {
    console.log(this.bar);
  }
});

console.log(objectWithProto);

objectWithProto.bar();

const App = () => (
  <div>
    <h1>App</h1>
  </div>
);

const div = document.createElement('div');

div.id = 'app-container';

render(<App />, div);

document.body.appendChild(div);
