import React from 'react';
import {
  render
} from 'react-dom';

import pure from '../src';

const originalObject = {
  foo: 'bar'
};

const emptyObject = pure(originalObject);

console.log(emptyObject);

const objectWithProto = pure(originalObject, {
  bar() {
    console.log(this.foo);
  }
});

console.log(objectWithProto);

objectWithProto.bar();

const App = () => {
  return (
    <div>
      <h1>
        App
      </h1>
    </div>
  );
};

const div = document.createElement('div');

div.id = 'app-container';

render((
  <App/>
), div);

document.body.appendChild(div);
