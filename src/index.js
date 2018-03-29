// utils
import {copyPropertyDescriptors, getProperties, getPrototype} from './utils';

/**
 * @function pure
 *
 * @description
 * create an object with no additional prototypical methods beyond
 * what is passed in the second parameter
 *
 * @param {Object} [object={}] the object to create a pure version of
 * @param {Object} [prototype={}] the prototype to apply to the pure object
 * @return {Object} the pure object
 */
const pure = (object = {}, prototype = {}) =>
  copyPropertyDescriptors(Object.create(getPrototype(prototype)), object, getProperties(object)) || Object.create(null);

export default pure;
