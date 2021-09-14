import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  if(!Array.isArray(members)) return false;
  let arr = new Array();
  for(let i =0 ; i< members.length; i++)
    if(typeof members[i] === 'string') {
      let temp = members[i].trim();
      temp = temp[0].toUpperCase();
      arr.push(temp);  
    }
  if (arr.length<1) return false;
  arr.sort();
  let result = '';
  for(let i = 0; i < arr.length; i++) result +=arr[i];
  return result;
}   
