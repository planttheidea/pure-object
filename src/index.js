// utils
import {forEach} from './utils';

/**
 * create an object with no additional prototypical methods beyond
 * what is passed in the second parameter
 *
 * @param {object} object={}
 * @param {object} prototype={}
 * @return {object}
 */
const pureObject = (object = {}, prototype = {}) => {
  const protoPropertyNames = Object.getOwnPropertyNames(prototype);
  const protoPropertySymbols = Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(prototype)
    : [];

  let prototypeObject = null,
    propertyDescriptor;

  if (protoPropertyNames.length) {
    prototypeObject = Object.create(null);

    forEach(protoPropertyNames, (key) => {
      propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);

      Object.defineProperty(prototypeObject, key, propertyDescriptor);
    });
  }

  if (protoPropertySymbols.length) {
    if (prototypeObject === null) {
      prototypeObject = Object.create(null);
    }

    forEach(protoPropertySymbols, (symbol) => {
      propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, symbol);

      Object.defineProperty(prototypeObject, symbol, propertyDescriptor);
    });
  }

  const bareObject = Object.create(prototypeObject);
  const propertyNames = Object.getOwnPropertyNames(object);

  if (propertyNames.length) {
    forEach(propertyNames, (key) => {
      const propertyDescriptor = Object.getOwnPropertyDescriptor(object, key);

      Object.defineProperty(bareObject, key, propertyDescriptor);
    });
  }

  return bareObject;
};

export default pureObject;
