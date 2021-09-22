import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  let result = '';

  for(let i = 0; i< str.length; i++){    
    let k = 1;
    for(let j= i + 1; j < str.length; j++)
      if(str[i] === str[j]) k++;
        else break;
    
    if (k > 1){
      result += String(k) + str[i] ;
      i+= k-1;
    } else result +=str[i];
    
  }
  return result;
}

