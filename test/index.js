import test from 'ava';

import pure from '../src';

test('if pureObject creates an empty object with a null prototype', (t) => {
  const pureObject = pure();

  // the values are equal
  t.deepEqual(pureObject, {});

  // there is no prototype on the pure object
  t.is(Object.getPrototypeOf(pureObject), null);
});

test('if pureObject creates an object with a null prototype and the keys I want', (t) => {
  const object = {
    foo: 'bar',
    bar: 'baz',
    baz: 'foo'
  };
  const pureObject = pure(object);

  // the values are equal
  t.deepEqual(pureObject, object);

  // there is no prototype on the pure object
  t.is(Object.getPrototypeOf(pureObject), null);
});

test('if pureObject creates an object with a prototype that only has what I pass it', (t) => {
  const object = {
    foo: 'bar'
  };
  const proto = {
    bar: 'baz',
    baz() {
      console.log(this.bar);
    }
  };
  const pureObject = pure(object, proto);

  // the values and prototypes are equal
  t.deepEqual(object, pureObject);
  t.deepEqual(Object.getPrototypeOf(pureObject), proto);

  // the original object is a standard object
  t.not(object.hasOwnProperty, undefined);
  t.not(object.toString, undefined);

  // the result is a pure object
  t.is(pureObject.hasOwnProperty, undefined);
  t.is(pureObject.toString, undefined);
});