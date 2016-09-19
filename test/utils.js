import test from 'ava';

import {
  createObject
} from '../src/utils';

test('if createObject creates an object with the correct prototype', (t) => {
  const foo = () => {};
  const populatedPrototype = {
    foo
  };

  const nullPrototypeObject = createObject();

  t.is(Object.getPrototypeOf(nullPrototypeObject), null);

  const populatedPrototypeObject = createObject(populatedPrototype);

  t.deepEqual(Object.getPrototypeOf(populatedPrototypeObject), populatedPrototype);
});
