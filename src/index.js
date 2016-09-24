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
 * @param {object} object={}
 * @param {object} prototype={}
 * @return {object}
 */
const pureObject = (object = {}, prototype = {}) => {
  const protoPropertyNames = OBJECT.getOwnPropertyNames(prototype);
  const protoPropertySymbols = OBJECT.getOwnPropertySymbols ? OBJECT.getOwnPropertySymbols(prototype) : [];

  let prototypeObject = null;

  if (protoPropertyNames.length) {
    prototypeObject = objectCreate(null);

    forEach(protoPropertyNames, (key) => {
      const propertyDescriptor = OBJECT.getOwnPropertyDescriptor(prototype, key);

      OBJECT.defineProperty(prototypeObject, key, propertyDescriptor);
    });
  }

  if (protoPropertySymbols.length) {
    if (prototypeObject === null) {
      prototypeObject = objectCreate(null);
    }

    forEach(protoPropertySymbols, (symbol) => {
      const propertyDescriptor = OBJECT.getOwnPropertyDescriptor(prototype, symbol);

      OBJECT.defineProperty(prototypeObject, symbol, propertyDescriptor);
    });
  }

  const bareObject = objectCreate(prototypeObject);
  const propertyNames = OBJECT.getOwnPropertyNames(object);

  if (propertyNames.length) {
    forEach(propertyNames, (key) => {
      const propertyDescriptor = OBJECT.getOwnPropertyDescriptor(object, key);

      OBJECT.defineProperty(bareObject, key, propertyDescriptor);
    });
  }

  return bareObject;
};

export default pureObject;
