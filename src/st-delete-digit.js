import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let arr = String(n).split('');
  let max=-1;
  for(let i=0; i<arr.length; i++){
    let arr2 = arr.slice();
    arr2.splice(i, 1);
    let num = Number ( arr2.join('') );
    if (max < num) max = num;
  }
return max;
}
