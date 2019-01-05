// utils
import {
  copyPropertyDescriptors,
  getOwnProperties,
  getPrototype,
} from './utils';

const {create} = Object;

/**
 * @function pure
 *
 * @description
 * create an object with no additional prototypical methods beyond
 * what is passed in the second parameter
 *
 * @param {Object} [object={}] the object to create a pure version of
 * @param {Object} [prototype=null] the prototype to apply to the pure object
 * @return {Object} the pure object
 */
const pure = (object = {}, prototype = null) => {
  const properties = getOwnProperties(object);

  if (!properties.length) {
    return create(null);
  }

  const target = create(getPrototype(prototype));

  return copyPropertyDescriptors(target, object, properties);
};

export default pure;
