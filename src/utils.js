/**
 * faster implementation of forEach
 *
 * @param {array<*>} array
 * @param {number} array.length
 * @param {function} fn
 */
export const forEach = (array, fn) => {
  const length = array.length;

  let index = -1;

  while (++index < length) {
    fn(array[index], index, array);
  }
};
