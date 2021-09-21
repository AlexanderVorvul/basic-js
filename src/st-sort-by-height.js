import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {

  let b = new Array();

  arr.forEach(function(item) {
    if(item !== -1) b.push(item);    
  });

  b.sort(function(a, b) {
    return a - b;
  });

  arr.forEach(function(item, i) {
    if(item === -1) b.splice(i, 0, -1);
  });

  return b;
}
