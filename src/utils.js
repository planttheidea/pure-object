/**
 * create a new object based on the prototype passed, defaulting to null (no prototype)
 *
 * @param {object} prototype=null
 * @return {object}
 */
const createObject = (prototype = null) => {
  return Object.create(prototype);
};

export {createObject};
