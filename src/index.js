const objectKeys = Object.keys;

import {
  createObject
} from './utils';

/**
 * create an object with no additional prototypical methods beyond
 * what is passed in the second parameter
 *
 * @param {object} object
 * @param {object} prototype={}
 * @return {object}
 */
const pureObject = (object, prototype = {}) => {
  const prototypeKeys = objectKeys(prototype);

  let prototypeObject = null;

  if (prototypeKeys.length) {
    prototypeObject = createObject();

    prototypeKeys.forEach((key) => {
      prototypeObject[key] = prototype[key];
    });
  }

  const bareObject = createObject(prototypeObject);

  objectKeys(object).forEach((key) => {
    bareObject[key] = object[key];
  });

  return bareObject;
};

export default pureObject;
