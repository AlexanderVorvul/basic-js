import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  latinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(dir = true) {
    this.direction = dir;
  }

  getExtKey(STR, key) {    
    let extendedKey = '';
    while (extendedKey.length < STR.length) extendedKey += key;    
    extendedKey = extendedKey.toUpperCase();

    let result = '';
    for (let i = 0, index = 0; i < STR.length; i++)
      if ( this.latinAlphabet.indexOf( STR[i] ) === -1 )
        result += STR[i];
      else {
        result += extendedKey[index];
        index++;
      }
    return result;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error(`Incorrect arguments!`);

    const STR = str.toUpperCase();
    const extendedKey = this.getExtKey(STR, key);
    const arr = STR.split('');

    let result = arr.map(
      (element, index) => {        
        if ( this.latinAlphabet.indexOf( element ) === -1 )
          return element;
        else {
          const strIndex = this.latinAlphabet.indexOf(arr[index]);   // вычисляем индекс нужного символа согласно таблицы Vigenere
          const keyIndex = this.latinAlphabet.indexOf(extendedKey[index]);   // c = m + k
          let resultIndex = strIndex + keyIndex;
          if (resultIndex >= this.latinAlphabet.length) resultIndex -= this.latinAlphabet.length;       
          return element = this.latinAlphabet[resultIndex];
        }
      })
    if (! this.direction) result = result.reverse();
    return result.join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error(`Incorrect arguments!`);
    const STR = str.toUpperCase();
    const extendedKey = this.getExtKey(STR, key);
    const arr = STR.split('');

    let result = arr.map(
      (element, index) => {        
        if ( this.latinAlphabet.indexOf( element ) === -1 ) 
          return element;
        else {
          const strIndex = this.latinAlphabet.indexOf(arr[index]);
          const keyIndex = this.latinAlphabet.indexOf(extendedKey[index]);
          let resultIndex = strIndex  + this.latinAlphabet.length - keyIndex;
          if (resultIndex >= this.latinAlphabet.length) resultIndex -= this.latinAlphabet.length;       
          return element = this.latinAlphabet[resultIndex];
        }
      })
    if (! this.direction) result = result.reverse();
    return result.join('');
  }
}

