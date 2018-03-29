/**
 * @function copyPropertyDescriptors
 *
 * @description
 * copy the property descriptors from the source to the target
 *
 * @param {Object} targetObject the target to add the property descriptors to
 * @param {Object} sourceObject the source to get the property descriptors from
 * @param {Array<string|symbol>} properties the properties to add
 * @returns {Object} the object with passed property descriptors
 */
export const copyPropertyDescriptors = (targetObject, sourceObject, properties) =>
  properties.length
    ? Object.defineProperties(
      targetObject,
      properties.reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(sourceObject, key);

        return descriptors;
      }, {})
    )
    : null;

/**
 * @function getPropertySymbols
 *
 * @description
 * get the symbols on the prototype
 *
 * @param {Object} prototype the prototype to get the symbols from
 * @returns {Array<symbol>} the symbols to copy
 */
export const getPropertySymbols = (prototype) =>
  typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(prototype) : [];

/**
 * @function getProperties
 *
 * @description
 * get the properties to copy from the object
 *
 * @param {Object} object the object to get the properties from
 * @returns {Array<string|symbol>} the properties to copy
 */
export const getProperties = (object) => Object.getOwnPropertyNames(object).concat(getPropertySymbols(object));

/**
 * @function getPrototype
 *
 * @description
 * get the prototype object based on the prototype passed
 *
 * @param {Object} prototype the prototype to copy
 * @returns {Object} the copied prototype object
 */
export const getPrototype = (prototype) =>
  copyPropertyDescriptors(Object.create(null), prototype, getProperties(prototype));
