import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains ) {
  let result = {};
  for(let i=0; i < domains.length; i++){    
    let arr = domains[i].split('.');
    let dom = '';
    for(let j=arr.length-1; j >= 0; j--){
        dom += '.' + arr[j];
        if ( dom in result) result[dom]++;
        else {
          result[dom] = 1;
        }
    }
  }
  return result;
}
