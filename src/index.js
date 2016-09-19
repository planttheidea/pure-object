const OBJECT = Object;
const objectCreate = OBJECT.create;

/**
 * faster implementation of forEach
 *
 * @param {array<*>} array
 * @param {number} array.length
 * @param {function} fn
 */
const forEach = (array, fn) => {
  const length = array.length;

  let index = -1;

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
const pureObject = (object, prototype = {}) => {
  const prototypeKeys = OBJECT.keys(prototype);

  let prototypeObject = null;

  if (prototypeKeys.length) {
    prototypeObject = objectCreate(null);

    forEach(prototypeKeys, (key) => {
      prototypeObject[key] = prototype[key];
    });
  }

  const bareObject = objectCreate(prototypeObject);

  forEach(OBJECT.getOwnPropertyNames(object), (key) => {
    const propertyDescriptor = OBJECT.getOwnPropertyDescriptor(object, key);

    OBJECT.defineProperty(bareObject, key, propertyDescriptor);
  });

  return bareObject;
};

export default pureObject;
